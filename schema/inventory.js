const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    Inventory: Object
})

module.exports = mongoose.model('inventory', Schema)
