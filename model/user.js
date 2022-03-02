const mongoose=require('mongoose');
const {Schema,model}= mongoose;

const userSchema= new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        auto: true,
      },
      
    name:{
       type: String ,       
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,        
    }
})
const users=mongoose.model('user', userSchema)
module.exports=users