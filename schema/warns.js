const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    guildId: String,
    userId: String,
    content: Array
})

module.exports = mongoose.model('warns', Schema)

