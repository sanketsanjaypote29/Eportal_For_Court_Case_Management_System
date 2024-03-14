const mongoose = require('mongoose');

const contact_schema_client = new mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true
    }
});

const Contact_lawyer_otp = mongoose.model('Lawyer_otp',contact_schema_client);
module.exports = Contact_lawyer_otp;