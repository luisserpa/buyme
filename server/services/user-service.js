

function addUser(router, User){
    router.post("/", function(req,res){

        User.create({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        },
        function(err,user){
            if(err) return res.status(500).send("There was a problem creating the user");
            res.status(200).send(user);
        });
    });
}

module.exports={userService};