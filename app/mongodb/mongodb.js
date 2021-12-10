module.exports = function(){
const mongoose = require('mongoose')
const url=process.env.MONGODB_URL
mongoose.connect(url,{useNewUrlParser:true})
const db = mongoose.connection
db.on('error', (error)=>{console.error(error)})
db.once('open',()=>{console.log("Database started")})
}()