// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
    },
    position: {
        type: String,
        required: true 
    },
},{ versionKey: false })

const user = mongoose.model('User',userSchema)
module.exports = {user}