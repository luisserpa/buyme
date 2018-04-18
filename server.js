//BASE SETUP
//===========================================================

//call the packages we need
var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());
var userDao = require("./server/dao/user-dao");
var User = require("./server/model/user");

const cors = require ("cors");

var port = process.env.PORT || 8080; //set our pot

var mongoose   = require('mongoose');

mongoose.connect('mongodb://luisserpa:1379951l@ds237489.mlab.com:37489/buyme');

//app.use("/users", router);

//This allows the client side use REST requests to the API
app.use(cors());

app.use("/users", router);
 

//Connect to the services
userDao.addUser(router,User);

userDao.findAll(router,User);

userDao.findById(router,User);

userDao.findByEmail(router,User);

userDao.deleteUser(router,User),

userDao.updateUser(router,User);

//START THE SERVER
//================================================================
app.listen(port);
console.log("Magic happens on port",port);



