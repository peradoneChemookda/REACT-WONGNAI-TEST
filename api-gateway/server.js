const express = require('express');
const axios = require('axios');
let app = express();

// Modules
const searchAPI = require('./API/searchAPI');

// get all Data
app.get('/search',(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
    return res.send(searchAPI.getSearchData());
})

app.listen(4500, () => {
    console.log('API gateway is running on port 4500');
})

module.export = app;