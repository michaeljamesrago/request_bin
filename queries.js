const Pool = require('pg').Pool
const pool = new Pool({
  user: 'appuser1',
  host: 'localhost',
  database: 'data',
  password: 'password',
  port: 5432,
})
const utility = require('./util');

const allRequests = (request, response) => {
  const bin = request.params.bin;
  console.log(bin);
  const sql = `SELECT * FROM requests WHERE bin='${bin}';`
  console.log(sql);
  pool.query(sql, (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows);
    response.render('requests', { requests: results.rows })
  })
}

const createBin = (request, response) => {
  const newBin = utility.generateBinID(8);
  const sql = `INSERT INTO bins(bin) VALUES('${newBin}');`;
  pool.query(sql, (error, results) => {
    if (error) {
      throw error
    }
    response.render('newbin', { newBin })
  })
}

const addRequest = (request, response) => {
  const headers = JSON.stringify(request.headers);
  const body = JSON.stringify(request.body);
  const bin = request.params.bin;
  console.log("Headers: ", headers);
  console.log("Body: ", body);
  const sql = `INSERT INTO requests(headers, body, bin) VALUES('${headers}', '${body}', '${bin}');`;
  pool.query(sql, (error, results) => {
    if (error) {
      response.status(400).end()
    }
    response.status(200).end();
  })
}

module.exports = {
  addRequest,
  allRequests,
  createBin,
}
