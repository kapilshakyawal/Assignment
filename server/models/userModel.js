const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email :{
        type:String
    },
    password:{
        type:String
    },
    address :{
        type:String
    },
    role:{
        type:String,
        enum:["manufacturer","transporter"],
    },
    token:{
        type:String
    }
})

module.exports = mongoose.model("user", userSchema)