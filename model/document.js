const mongoose = require('mongoose');
const case_schema = new mongoose.Schema({
    Defendent_name:{
        type:String,
        required:true
    },
    phone_def:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    Fir_copy:{
        data:Buffer,
        contentType:String
    },
    vakalatnama:{
        data:Buffer,
        contentType:String
    },
    Affidavit:{
        data:Buffer,
        contentType:String
    }
})

const CaseForm = mongoose.model('document_data',case_schema);
module.exports = CaseForm;