const express = require('express');
const db = require('./queries')
const app = express();
const port = 3001;

app.use(express.static('public'));
app.use(express.json());

// app.get('/hello', (req, res) => {
//   console.log("Request Body: ", req.body);
//   console.log("Request Headers: ", req.headers);
//   console.log("Request Query: ", req.query);
//   res.send('Hello World!')
// })
app.post('/hello', db.addRequest)

app.listen(port, () => console.log("Request Bin App Development"))
