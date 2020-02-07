

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'itatRegister';
var db;

function connect(callback){
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
      
        db = client.db(dbName);
      
        callback();
      });
}

    
function get(){
    return db;
}

function close(){
    mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};