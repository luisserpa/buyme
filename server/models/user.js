const knex = require("knex")(require("../knexfile"));

module.exports = {
    createUser ({ email,username, password }) {
      //console.log(`Add user ${username} with password ${password}`)
      return knex("user").insert({
          email,
          username,
          password
      })
    }
  }