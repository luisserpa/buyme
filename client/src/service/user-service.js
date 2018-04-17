import { callbackify } from "util";

var axios = require("axios");

async function findAll() {

  // The await keyword saves us from having to write a .then() block.
  let json = await axios.get('http://localhost:8080/users');

  return (
    axios.get('http://localhost:8080/users', {
      headers: {
        'x-apikey': 'API_KEY',
        "Access-Control-Allow-Origin": "*"
      },
      responseType: 'json',
    }).then(response => {
      console.log(response.data);
      return response.data;
    })
  )

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
  return (
    axios.get('http://localhost:8080/users/' + userId)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
  )




}




module.exports = { findAll, addUser, findById };