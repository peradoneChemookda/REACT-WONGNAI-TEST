const axios = require('axios');

let searchData = [];

axios.get('http://localhost:9000/trips')
    .then(res => {
        searchData = res.data;
    })
    .catch(error => {
        console.log(error);
    })


function getSearchData(){
    return searchData;
}

module.exports.getSearchData = getSearchData; 
