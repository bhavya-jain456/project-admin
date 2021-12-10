const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }
    
}) ;
module.exports = mongoose.model("admin",adminSchema);