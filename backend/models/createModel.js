const mongoose = require('mongoose');

const createSchema = new mongoose.Schema({

    criteria:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    distribution:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('addCriteria',createSchema)




