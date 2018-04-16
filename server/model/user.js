var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username:String,
    email:String,
    password:String
});

mongoose.model("User",UserSchema);
module.exports = mongoose.model("User");