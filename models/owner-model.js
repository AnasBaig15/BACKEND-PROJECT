const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname:{
        type:String,
        minLength: 3 ,
        trim: true,
    },
    email:String,
    password: String,
    cart:{
        type:Array,
        default:[],
    },
    isadmin: Boolean,
    picture: String,
});

module.exports = mongoose.model("owner", ownerSchema);