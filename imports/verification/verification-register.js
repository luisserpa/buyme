var validateEmail = require("../email-validations");

function userVerification(user, userService) {
    var email = user.email;
    var username = user.username;
    var password = user.password;
    var retypePassword = user.retypePassword;

    return (
        //Verify if the user already exists
        userService.findByEmail(email)
            .then(function (res) {

                //validate the email
                if (!validateEmail(email)) {
                    return notAllowed("Not a valid email!");

                };

                //The username can't have more than 12 characters
                if (username.length > 12) {
                    return notAllowed("The name can't have more than 12 chars.");
                };

                //Both passwords must be equal
                if (password !== retypePassword) {
                    return notAllowed("Passwords must be equal.");
                };

                //Passwords must have more than 5 characters
                if (password.length < 5) {
                    return notAllowed("Passwords must have at least 5 chars.")

                };

                if (res !== undefined) {
                    console.log("IT EXISTS");
                    return notAllowed("User already exists");

                };

                //If all the verifications are passed
                return {
                    showMessage: true,
                    message: "User created successfully!",
                    addUser: true
                };

            })
    );




};


function notAllowed(message) {
    return {
        showMessage: true,
        message: message,
        addUser: false
    };
}

module.exports = { userVerification };