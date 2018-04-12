function addUser(user){
    const email = user.email;
    const username = user.username;
    const password = user.password;
    post("/api/createuser", {email, username,password});
}

function post(path, data) {
    console.log("DATA: ",data);
    return window.fetch(path, {
        method:"POST",
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    });
}

module.exports=addUser;

