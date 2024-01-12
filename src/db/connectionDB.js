const mongoose = require('mongoose')
const connectDB = async (URL) => {
    await mongoose.connect(URL).then(res=>{
        console.log('Connected')
    }).catch(err=>{
        console.log('Disconnected')
    })
}

module.exports = connectDB;