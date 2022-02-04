const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name :{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require:true,
    },
    password : {
        type: String,
        require:true ,
    },
    acceptsTerms: {
        type: Boolean,
        require:true,
    },
    address : {
        type : String ,
        require : false,
    },
    code : {
        type : String,
        require : false,
    }
})

const Users = mongoose.model("users",userSchema)

module.exports = Users;
