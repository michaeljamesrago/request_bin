const Pool = require('pg').Pool
const pool = new Pool({
  user: 'appuser1',
  host: 'localhost',
  database: 'data',
  password: 'password',
  port: 5432,
})

const addRequest = (request, response) => {
  const headers = JSON.stringify(request.headers);
  const body = JSON.stringify(request.body);
  console.log("Headers: ", headers);
  console.log("Body: ", body);
  const sql = `INSERT INTO requests(headers, body) VALUES('${headers}', '${body}')`;
  pool.query(sql, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).end();
  })
}

module.exports = {
  addRequest,
}
