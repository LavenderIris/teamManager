var mongoose = require('mongoose');
var path = require('path');
var Player = mongoose.model('Player');

module.exports = {

    index: function(req, res){
        Player.find({}, function(err, results){
            if (err){
            
            } else {
                console.log('home succcess!');
                res.json({results: results});
            }
        })
    },

    create: function(req, res){
     
        var p = new Player();
        p.name = req.body.name;
        p.position = req.body.position;
        p.status = "Undecided";
        p.game = req.body.game;
        p.save(function(err, result){
            if (err){   
                console.log('error!!');
            } else {
                console.log('save succcess!');
                res.sendFile(path.resolve("./client/dist/index.html"))
            }
        })
    },

    showGame: function(req, res){
        Player.find({game: req.params.id}, function(err, results){
            if (err){
            
            } else {
                console.log('get players!');
                res.json({results: results});
            }
        })
    },

    changeStatus: function(req, res){
        console.log('in change status', req.body)
        Player.findOne({_id: req.body.id}, function(err, p){
            if (err){
            
            } else {
                p.status = req.body.status;
                p.save(function(err, result){
                    if (err){
                    
                    } else {
                        console.log('save succcess!');
                    }
                })
            }
        })
    },

    destroy:  function(req, res){
        Player.remove({_id: req.id}, function(err){
            if (err){
                console.log(err)
            } else {
                console.log('success');
            }
        })
    }
}