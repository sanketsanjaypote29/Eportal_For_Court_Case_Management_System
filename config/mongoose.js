const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/E_portal')
const db = mongoose.connection;
db.on('error',console.error.bind(console,'error'));
db.once('open',()=>{
    console.log('successfully connected to DB');
})