const path  = require('path');

let mapRoutes = (app) => {
    // Complete App Routing Logic

    // for home page
    app.get('/',(req,res) => {
        res.sendFile(path.join(__dirname,'..','views','index.html'));
    });

// for about us page
    app.get('/about',(req,res) => {
        res.sendFile(path.join(__dirname,'..','views','about.html'));
    });

// for services page
    app.get('/services',(req,res) => {
        res.sendFile(path.join(__dirname,'..','views','services.html'));
    });

// for profile page
    app.get('/profile',(req,res) => {
        res.sendFile(path.join(__dirname,'..','views','profile.html'));
    });

// for Contact page
    app.get('/contact',(req,res) => {
        res.sendFile(path.join(__dirname,'..','views','contact.html'));
    });

// for 404 page
    app.use((req,res) => {
        res.sendFile(path.join(__dirname,'..','views','404.html'));
    });
};

module.exports = {
    mapRoutes
};