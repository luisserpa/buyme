var axios = require("axios");

function findAll(){
    axios.get('http://localhost:8080/users', {
        headers: { 
        'x-apikey': 'API_KEY',
        "Access-Control-Allow-Origin": "*"
        },
      responseType: 'json',
       }).then(response => {
        console.log(response);
      });
}

module.exports={findAll};