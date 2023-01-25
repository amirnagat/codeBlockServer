
const mongoose = require('mongoose')

const connect = mongoose.connect('mongodb+srv://nagat1700:nagat55nagat@cluster0.8rrhgb2.mongodb.net/?retryWrites=true&w=majority').then(db=>{
    console.log('Database Connected')
    return db
}).catch(err =>{
    console.log('Database Error: ' + err);
})

module.exports= connect