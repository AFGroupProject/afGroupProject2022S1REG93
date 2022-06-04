const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    nic: {
        type:String,
        required: true,
        unique: true            
    },
    phone: {
        type:Number
    },
    reserchInterest:{
        type:String,
        required: true
    }
});


module.exports = mongoose.model('Posts', postSchema);