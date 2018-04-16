//BASE SETUP
//===========================================================

//call the packages we need
var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());
var userService = require("./server/services/user-service");
var User = require("./server/model/user");

var port = process.env.PORT || 8080; //set our pot

var mongoose   = require('mongoose');

mongoose.connect('mongodb://luisserpa:1379951l@ds237489.mlab.com:37489/buyme');

//Connect to the services
userService.addUser(router,User);

//START THE SERVER
//================================================================
app.listen(port);
console.log("Magic happens on port",port);


/*


var User = require("./server/model/user");

//configure app to use bodyParser()
//this will let us get data from a POST
app.use(bodyParser.urlencoded({extended:true}));
app.unsubscribe(bodyParser.json());



//ROUTES FOR OUR API
//==========================================================
var router = express.Router(); //get an instance of the express router

//middleware to use for all requests
router.use(function(req,res,next){
    //do logging
    console.log("Something is happening");
    next(); //make sure we go to the next route
});

//test route to make sure everything is working
router.get("/",function(req,res){
    res.json({message:"This one is working so far!"})
});

//more routes for our API will happen here

//on routes that end in /users
//---------------------------------------------------------
router.route("/users")

//create a user (accessed at POST http://localhost:8080/api/users)
.post(function(req,res){
    var user = new User();
    user.email = req.body.email; //Create a new instance of the user model
    user.name = req.body.name; //set the users name (comes from the request)
    user.password = req.body.password;

    console.log("user: ",user);

    //save te user and check for erros
    user.save(function(err){
        if(err){
           return res.send(err);
        } 
        //res.send(err);
        res.json({message:"user created!"});
    });
})

//get all the users (accessed at GET http://localhost:8080/api/users)
.get(function(req,res){
    User.find(function(err,users){
        if(err){
            return res.send(err);
        }
        res.json(users);
    });
});

//on routes that end on /users/:user_id
//------------------------------------------------------------------
router.route("/users/:user_id")

//get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
.get(function(req,res){
    user.findById(req.params.user_id, function(err,user){
        if(err){
            return res.send(err);
        }
        res.json(user);
    });
})

//update the user with this id (accessed at PUT http://localhost:8080/api/users/user_id)
.put(function(req, res){

    //use our user model to find the user we want
    user.findById(req.params.user_id, function(err,user){
        if(err){
            return res.send(err);
        }
        user.name = req.body.name; //update the users info

        //save the user
        user.save(function(err){
            if(err){
                return res.send(err);
            }
            res.json({message:"user updated!"});
        });
    });
})

//delete the user with this id (accessed at DELETE http://localhost:8080/api/users/user_id)
.delete(function(req,res){
    user.remove({
        _id:req.params.user_id
    },function(err,user){
        if(err){
            return res.send(err);
        }
        res.json({message:"Successfully deleted!"});
    });
});


//REGISTER OUR ROUTES
//all of our routes will be refixed with /api
app.use("/api",router);

//TESTS
app.get('/api/hello', (req, res) => {

    res.send({ express: 'Hello From Express' });
  });
*/
