var validateEmail = require ("../../imports/email-validations");
var userService = require("./user-service");

function addUserVerification(user){
    var email = user.email;
    var username = user.username;
    var password = user.password;
    var retypePassword = user.retypePassword;

    //validate the email
    if (!validateEmail(email)){
        return{
            showMessage:true,
            message:"Not a valid email.",
            addUser:false
        };
    };

    //The username can't have more than 12 characters
    if(username.length>12){
        return{
            showMessage:true,
            message:"The name can't have more than 12 chars.",
            addUser:false
        };
    };

    //Both passwords must be equal
    if(password !== retypePassword){
        return{
            showMessage:true,
            message:"Passwords must be equal.",
            addUser:false
        };
    };

    //Passwords must have more than 5 characters
    if(password.length<5){
        return{
            showMessage:true,
            message:"Passwords must have at least 5 chars.",
            addUser:false
        }; 
    };

    //Verify of the user already exists
    console.log("USER FOUND? ",userService.findByEmail(email));
}

module.exports = addUserVerification;