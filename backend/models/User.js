const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    lowercase:true,
    required:true
  },
  password:{
    type:String,
    required:true
  }    
},{
  timestamp:true
})

const UserModel =mongoose.model('User',UserSchema)

module.exports= UserModel


