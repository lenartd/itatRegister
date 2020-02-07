let worker = require('./worker');
let jwt = require('jsonwebtoken');
let config = require('./config');

module.exports ={


    login(req,res){
        worker.getUser(req.body, result =>{
            console.log(req.body);
            console.log(result);
            if(result)
            {
                let myToken = jwt.sign({name:req.body.name},
                    config.secret,{ expiresIn: '30d'}
                );
                res.status(200).send({token:myToken});
            }
            else
            {
                res.status(400).send();
            }
        });

    },
    saveAnswers(req, res){
		console.log(req.body);
        worker.saveAnswers(req.body, result =>{
        if(result)
            {
                res.status(200).send();
            }
            else
            {
                res.status(400).send();
            }
        });
    },
    updateAnswers(req, res){
        worker.updateAnswer(req.body, result =>{
            if(result)
            {
                res.status(200).send();
            }
            else
            {
                res.status(400).send();
            }
        });
    },
    getAnswers(req, res){
        worker.getAnswers(req.body, result =>{
            res.send(result);
        });
    },
    deleteRegistration(req, res){
        worker.deleteRegistration(req.body, result =>{
            if(result)
            {
                res.status(200).send();
            }
            else
            {
                res.status(400).send();
            }
        });
    }
}
