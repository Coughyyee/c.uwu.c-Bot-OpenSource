const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    image: String,
})

module.exports = mongoose.model('background', Schema)
