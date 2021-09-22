const express = require('express');
const db = require('./queries');
const app = express();
const port = 3001;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/hello/newbin', db.createBin)
app.get('/hello', db.allRequests)
app.post('/hello', db.addRequest)

app.listen(port, () => console.log("Request Bin App Development"))
