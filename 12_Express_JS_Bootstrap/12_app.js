// load express js module
const express = require('express');
const path = require('path');

// initialize the express js
const app = express();

let hostname = '127.0.0.1';
let port = 3000;

// for static files
app.use('/public',express.static('public'));

// for home page
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
});

// for About Us page
app.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname,'views','about.html'));
});

// for Services page
app.get('/services',(req,res) => {
    res.sendFile(path.join(__dirname,'views','services.html'));
});

// for Profile page
app.get('/profile',(req,res) => {
    res.sendFile(path.join(__dirname,'views','profile.html'));
});

// for Contact Us page
app.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname,'views','contact.html'));
});



app.listen(port,hostname,() => {
    console.log(`Server is started at http://${hostname}:${port}`);
});