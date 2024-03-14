const mongoose = require('mongoose');
const case_schema = new mongoose.Schema({
    Complainant_name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    com_relation:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    relative_name:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    comp_district:{
        type:String,
        required:true 
    },
    comp_age:{
        type:Number,
        required:true
    },
    comp_village:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    ward:{
        type:String,
        required:true 
    },
    caste:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    }

})

const CaseForm = mongoose.model('case_form_data_req',case_schema);
module.exports = CaseForm;