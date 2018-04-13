const knex = require("knex")(require("../knexfile"));

module.exports = {
    createUser ({ email,username, password }) {
      //console.log(`Add user ${username} with password ${password}`)
      return knex("user").insert({
          email,
          username,
          password
      })
    },

    authenticate ({email}){
      return knex("user").where({email})
        .then(([user]) => {
          if(!user) return {success:false}
          console.log("USER IN DAO: ",user);
          return {success:user};
        });
    }
  }