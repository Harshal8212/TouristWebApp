const mongoose = require('mongoose');

const articlemodel = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description :{
        type:String
    },
    readmore :{
        type:String,        
        required:true
    }
})


module.exports = mongoose.model('Article', articlemodel);
