const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    guildId: String,
    userId: Array
})

module.exports = mongoose.model('mutes', Schema)
