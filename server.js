//BASE SETUP
//===========================================================

//call the packages we need
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const User = require("./server/dao/user");

var port = process.env.PORT || 8080;

//configure app to use bodyParser()
//this will let us get data from a POST
//app.use(bodyParser.urlencoded({extended:true}));
//app.unsubscribe(bodyParser.json());
app.use(bodyParser.json());
app.use(express.static("public"));

//POST method to the database
app.post("/api/createuser", (req,res) =>{
    console.log("req email: ",req.body.email);
    User
        .createUser({
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
        })
        .then(() => res.sendStatus(200))
});

//GET method to the database
app.post("/api/finduser", (req,res) => {
    User
        .authenticate({
            email:req.body.email,
        })
        .then(({success}) => {
            console.log("SERVER SUCCESS: ",success);
            if(success) res.sendStatus(200)
            else res.sendStatus(401)
        });
});


//REGISTER OUR ROUTES
//all of our routes will be refixed with /api
//app.use("/api",router);



//START THE SERVER
//================================================================
app.listen(port);
console.log("Magic happens on port",port);