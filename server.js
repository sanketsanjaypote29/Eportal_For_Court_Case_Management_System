const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const fs = require('fs');
const { exec } = require('child_process');
const cookie_parser = require('cookie-parser')
const port = 3000;
const db = require('./config/mongoose');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'controllers','lawyer',));
app.set('views', path.join(__dirname, 'FaceId'));



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookie_parser());
app.use('/',require('./routes'));
app.use(express.static("Public"));
app.use(express.static("controllers"));


app.listen(port, (err) => {
    if(err){
        console.log("Error generated:",err);
        return;
    }
    console.log("app listening at port:",port);
})
// Set up views directory
app.set('controlers', path.join(__dirname, 'controlers'));
