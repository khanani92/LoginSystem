
/*
 * GET home page.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Sirsyed');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("db connected")
});

//registration request dealing

  var studentSchema = mongoose.Schema(
    {
    name : String,
    email:String,
    pass:String,
    age:String
    }
  );

 var Student = mongoose.model("Student",studentSchema);

exports.regStudent = function(req,res){
    var u_name = req.body.u_name;
    var email =  req.body.email;
    var pass = req.body.pass;
    var age = req.body.age;
    console.log(u_name);
    console.log(email);
    console.log(pass);

    /*var stu = new Student(
        {
        name:u_name,
        email:email,
        pass:pass
        }
    );
    stu.save(function(err,data){
        if(err){
            res.send("Registration Fail"+err);
        }else{
            res.send("Registrated"+data);
        }
    });
       */

}//regStudent

//Login request dealing

exports.login = function(req,res){


    res.send("done");
}




exports.index = function(req, res){

  res.render('index', { title: 'Login System' });
};

