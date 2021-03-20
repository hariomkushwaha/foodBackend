const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("item",itemSchema); 