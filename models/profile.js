const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: String,
    email: String,
    country: String,
})

module.exports = mongoose.model('Profile', profileSchema);