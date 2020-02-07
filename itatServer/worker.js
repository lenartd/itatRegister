let mongodb = require('./mongo');
var ObjectID = require('mongodb').ObjectID;


module.exports = {

    getUser(obj, data)
    {
        mongodb.get().collection("adminLogin").findOne(obj, function(err, result) {
            if (err) throw err;
            console.log(result);
            if(result != null)
            {
                data(true);
            }
            else{data(false);}

          });
    },

    saveAnswers(obj, data)
    {
        mongodb.get().collection("QuestionAnswer").insertOne(obj, function(err, res) {
            if (err) throw err;
            if(!err)
            {
                console.log("document inserted");
                data(true);
            }
            else{data(false);}
          });
    },

    getAnswers(obj, data)
    {
        mongodb.get().collection("QuestionAnswer").find({}).toArray(function(err, result) {
            if (err) throw err;
            data(result);
          });
    },

    deleteRegistration(obj, data)
    {
        console.log("Deleteing "+obj);
        mongodb.get().collection("QuestionAnswer").deleteOne({"_id": ObjectID(obj.id)}, function(err, obj) {
            if (err) throw err;
            if(!err)
            {
                console.log("document deleted");
                data(true);
            }
            else{data(false);}
          });
    },

    updateAnswer(obj, data)
    {
        console.log(obj._id);
        var newvalues = { $set: {UserInfo: obj.UserInfo, QuestionAnswer: obj.QuestionAnswer} };
        mongodb.get().collection("QuestionAnswer").updateOne({"_id": ObjectID(obj._id)}, newvalues ,function(err, obj) {
            if (err) throw err;
            if(!err)
            {
                console.log("document updated");
                data(true);
            }
            else{data(false);}
          });
    }

}