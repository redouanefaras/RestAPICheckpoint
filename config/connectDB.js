const mongoose=require('mongoose')
require('dotenv').config({path:'./config/.env'});

const connectDB=() => {
    mongoose.connect(process.env.mongoURL)
    .then(()=>{console.log('Database is connected successfully')})
    .catch((error)=>{ console.log('Database is not connected',error)})
}
  module.exports = connectDB