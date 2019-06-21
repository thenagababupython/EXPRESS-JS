// load express js module
const express = require('express');
const path = require('path');
const router = require('./router/appRoutes');

// initialize the express js
const app = express();

let hostname = '127.0.0.1';
let port = 3000;

// for static file
app.use('/public', express.static('public'));

// for Application Routing
router.mapRoutes(app);

app.listen(port,hostname,() => {
    console.log(`Server is started at http://${hostname}:${port}`);
});