import { callbackify } from "util";

var axios = require("axios");

async function findAll() {

 // The await keyword saves us from having to write a .then() block.
 let json = await axios.get('http://localhost:8080/users');

 // The result of the GET request is available in the json variable.
 // We return it just like in a regular synchronous function.
 console.log("JSON: ",json);
 return json;
 
 /*
  axios.get('http://localhost:8080/users', {
    headers: {
      'x-apikey': 'API_KEY',
      "Access-Control-Allow-Origin": "*"
    },
    responseType: 'json',
  }).then(response => {
    console.log(response);
  });
  */
 
}

function addUser(user) {
  axios({
    method: 'post',
    url: 'http://localhost:8080/users',
    data: user,
    config: { headers: { 'Content-Type': 'multipart/form-data' } }
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

function findById(userId) {
  axios.get('http://localhost:8080/users/' + userId)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });



}




module.exports = { findAll, addUser, findById };