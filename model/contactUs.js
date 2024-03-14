const mongoose = require('mongoose');
const case_schema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const ContactUs = mongoose.model('contactUs_data',case_schema);
module.exports = ContactUs;