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

function addUser(user){
  axios({
    method: 'post',
    url: 'http://localhost:8080/users',
    data: user,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
})
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
          
}

module.exports={findAll, addUser};