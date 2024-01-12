const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String },
    password: { type: String },
    isDeleted: { type: Boolean, default: false },
    isActived: { type: Boolean, default: false },
}, {timeseries: true})

module.exports = mongoose.model('User', userSchema)