const mongoose = require('mongoose');
const case_schema = new mongoose.Schema({
    district:{
        type:String,
        required:true
    },
    court:{
        type:String,
        required:true
    },
    matter:{
        type:String,
        required:true
    },
    case_type:{
        type:String,
        required:true
    },
    mact:{
        type:String,
        required:true
    }
})

const CaseForm = mongoose.model('case_form_data',case_schema);
module.exports = CaseForm;