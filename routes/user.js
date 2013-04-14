
/*
 * GET users listing.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Sirsyed');
//var q = require('q');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("db connected")
});



exports.list = function(req, res){
    student.find({},function(err,data){
        if(err){
            console.log("error"+err);
        }else{
            console.log(data);
        }
    });

    res.send("done");

};