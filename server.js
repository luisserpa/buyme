//BASE SETUP
//===========================================================

//call the packages we need
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const User = require("./server/models/user");

var port = process.env.PORT || 8080;

//configure app to use bodyParser()
//this will let us get data from a POST
//app.use(bodyParser.urlencoded({extended:true}));
//app.unsubscribe(bodyParser.json());
app.use(bodyParser.json());
app.use(express.static("public"));

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


//REGISTER OUR ROUTES
//all of our routes will be refixed with /api
//app.use("/api",router);

//TESTS
app.get('/api/hello', (req, res) => {

    res.send({ express: 'Hello From Express' });
  });

//START THE SERVER
//================================================================
app.listen(port);
console.log("Magic happens on port",port);