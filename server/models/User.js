var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: String,
    position: String, 
    status: String,
    game: Number
});

mongoose.model('Player', PlayerSchema);

