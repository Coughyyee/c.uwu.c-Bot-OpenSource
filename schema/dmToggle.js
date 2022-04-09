const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    toggle: Number,
})

module.exports = mongoose.model('dmtoggle', Schema)
