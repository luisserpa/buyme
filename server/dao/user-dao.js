

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
};

function findAll(router,User){
    router.get("/", function (req,res){
        console.log("HERE");
        User.find({}, function (err,users){
            if(err) return res.status(500).send("Couldn't find the users");
            res.status(200).send(users);
        });
    });
};

function findById(router,User){
    router.get("/:id", function(req,res){

        User.findById(req.params.id, function(err, user){
            if(err) return res.status(500).send("There was a problem finding an user");
            if(!user) return res.status(404).send("No user found");
            res.status(200).send(user);
        });
    });
};

function findByEmail(router,User){
    router.get("/useremail/:email", function(req,res){
        User.find({email:req.params.email}, function(err, user){
            if(err) return res.status(500).send("There was a problem finding an user by email");
            if(!user) return res.status(404).send("No user found");
            res.status(200).send(user);
        });
    });
};

function deleteUser(router,User){
    router.delete("/:id", function(req,res){

        User.findByIdAndRemove(req.params.id, function(err,user){
            if(err) return res.status(500).send("There was a problem deleting the user");
            res.status(200).send("User deleted successfully");
        });
    });
};

function updateUser(router, User){
    router.put("/:id", function(req,res){
        
        User.findByIdAndUpdate(req.params.id, req.body, {new: true},function(err,user){
            if(err) return res.status(500).send("There was a problem updating the user");
            res.status(200).send(user);
        });
    });
};

module.exports={addUser,findAll, findById, findByEmail, deleteUser, updateUser };