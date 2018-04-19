
function authenticate(user, userService) {
    var email = user.email;
    var password = user.password;
    

    return (
        userService.findByEmail(email)
            .then(function (res) {

                //Checks if the email corresponds to an user
                if (res === undefined) {
                    return notAllowed("Not a valid email or password.");
                };
                
                //Checks the user password
                if(res.password !== password){
                    return notAllowed("Not a valid email or password.");
                };

                //If all these conditions are passed, the user is authenticate
                return{
                    showMessage:true,
                    message:"User authenticate succefully!",
                    isUser:true
                }

            })
    )

};

function notAllowed(message) {
    return {
        showMessage: true,
        message: message,
        isUser: false
    }
}

module.exports = {authenticate};