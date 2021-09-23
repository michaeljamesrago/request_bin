const express = require('express');
const db = require('./queries');
const app = express();
const port = 3001;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/newbin', db.createBin)
app.get('/:bin', db.allRequests)
app.post('/:bin', db.addRequest)

app.listen(port, () => console.log("Request Bin App Development"))
