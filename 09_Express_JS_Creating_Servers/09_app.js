// load express js module
const express = require('express');
const path = require('path');

// initialize the express js
const app = express();

let hostname = '127.0.0.1';
let port = 3000;

// for simple html code
app.get('/',(req,res) => {
    res.send(`<h2 style="color: blue">Welcome to Express JS</h2>`);
});

// for complete HTML file
app.get('/home',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

// for JSON response
let persons = [{"id":1,"first_name":"Baily","last_name":"Enderwick","email":"benderwick0@adobe.com","gender":"Male","ip_address":"255.99.116.222"},{"id":2,"first_name":"Rinaldo","last_name":"Nani","email":"rnani1@eepurl.com","gender":"Male","ip_address":"193.72.220.78"},{"id":3,"first_name":"Aurlie","last_name":"Morecomb","email":"amorecomb2@marketwatch.com","gender":"Female","ip_address":"99.163.238.199"},{"id":4,"first_name":"Skipp","last_name":"Laven","email":"slaven3@cbc.ca","gender":"Male","ip_address":"85.213.82.99"},{"id":5,"first_name":"Elias","last_name":"Guidi","email":"eguidi4@google.co.jp","gender":"Male","ip_address":"229.245.46.176"},{"id":6,"first_name":"Kayne","last_name":"Yandell","email":"kyandell5@ed.gov","gender":"Male","ip_address":"38.114.190.16"},{"id":7,"first_name":"Bertram","last_name":"Camblin","email":"bcamblin6@surveymonkey.com","gender":"Male","ip_address":"100.26.157.121"},{"id":8,"first_name":"Wilbert","last_name":"Morritt","email":"wmorritt7@istockphoto.com","gender":"Male","ip_address":"254.16.64.9"},{"id":9,"first_name":"Chandra","last_name":"Gasparro","email":"cgasparro8@utexas.edu","gender":"Female","ip_address":"185.202.224.31"},{"id":10,"first_name":"Charmaine","last_name":"Pimlett","email":"cpimlett9@rakuten.co.jp","gender":"Female","ip_address":"106.88.126.247"},{"id":11,"first_name":"Trevor","last_name":"Trewhela","email":"ttrewhelaa@ehow.com","gender":"Male","ip_address":"80.214.92.21"},{"id":12,"first_name":"Clevey","last_name":"Ginner","email":"cginnerb@google.fr","gender":"Male","ip_address":"225.135.11.147"}];
app.get('/json',(req,res) => {
    res.json(persons);
});

// for file Download
app.get('/download',(req,res) => {
    res.download(path.join(__dirname,'data','notes.pdf'));
});

app.listen(port,hostname,() => {
    console.log(`Server is started at http://${hostname}:${port}`);
});