const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:[true,"price must be provided"]
    },
    feautured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.5
    },

    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi"],
            message:`{VALUE} is not supported`
        },
    },

    craetedAt:{
        type:Date,
        default:Date.now()
    }

})


module.exports = mongoose.model("Productone",productSchema)