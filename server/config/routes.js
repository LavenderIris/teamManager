var player = require('./../controllers/users.js');
var path = require('path');
var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = function(app){
    app.get('/player', function(req, res){
        console.log('home page')
        player.index(req, res)
    })

    app.post('/player', function(req, res) {
        player.create(req, res);
    })

    app.get('/game/:id', function(req, res) {
        console.log(req.params);
        player.showGame(req, res);
    });

    app.post('/status', function(req, res) {
        console.log('changing status', req.body);
        player.changeStatus(req, res);
    });

    app.post('/player/delete', function(req, res){
        player.destroy(req.body, res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });

    
}