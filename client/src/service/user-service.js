var axios = require("axios");

function findAll() {

  // The await keyword saves us from having to write a .then() block.
  //let json = await axios.get('http://localhost:8080/users');

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
        return response.data[0];
      })
      .catch(function (error) {
        console.log(error);
      })
  )
}

function findByEmail(userEmail) {
  return (
    axios.get('http://localhost:8080/users/useremail/' + userEmail)
      .then(function (response) {
        console.log(response);
        return response.data[0];
      })
      .catch(function (error) {
        console.log(error);
      })
  )
}



module.exports = { findAll, addUser, findById, findByEmail };