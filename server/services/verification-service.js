var validateEmail = require ("../../imports/email-validations")

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
    }
}

module.exports = addUserVerification;