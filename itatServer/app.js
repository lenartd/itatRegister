let middleware = require('./middleware');
let handler = require('./handler');
let mongodb = require('./mongo');

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require("body-parser");
let cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
console.log("Everything is up");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET')
    next();
  });  

app.post('/login', handler.login);
app.post('/saveAnswers', handler.saveAnswers);
app.post('/updateAnswers', middleware.checkToken, handler.updateAnswers);
app.get('/getAnswers', middleware.checkToken, handler.getAnswers);
app.post('/deleteRegistration', middleware.checkToken, handler.deleteRegistration);

mongodb.connect(() => {
  server.listen(5005);
});
