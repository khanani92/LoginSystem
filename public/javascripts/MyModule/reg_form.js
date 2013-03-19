/**
 * Created with JetBrains WebStorm.
 * User: mud_user
 * Date: 3/17/13
 * Time: 11:56 AM
 * To change this template use File | Settings | File Templates.
 */

define("regForm",function(){ //returning variables
    function regfunc(){
//        return ($("#u_namer").val())
        var u_name = $("#u_namer").val();
        var l_u_name = u_name.length;
        var pass = $("#passr").val();
        var l_pass = pass.length;
        var re_pass = $("#re_pass").val();
        var email =$("#email").val();
        var em_vali = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var l_email = email.length;
        var  age = $("#age").val();
        if(l_u_name >4 ){
            if(l_email>0){
                if(em_vali.test(email)){
                    if(l_pass>5){
                        if(pass == re_pass){
                            alert("sub ok");
                            //sending data through ajax

                            $.ajax({
                                url:"/regStudent",
                                data:{u_name:u_name,pass:pass,email:email,age:age},
                                type:"post"

                            }).done(function(res){
                                    console.log("res:"+res);
                                    $('#reg_form').hide();
                                    $('#msg').html("<p>Registed Successfully</p>");
                                    self.location='';

                                }).error(function(){ alert("Error")   ; });





                        }else{
                            alert("pass match")
                        }//pass match
                    }else{
                        $("#td_p").append("Password should be greater than 4");
                        pass = $("#passr").focus();
                    }//l_pass
                }else{
                    $("#td_em").append("Enter Correct Email");
                    $("#email").focus();
                }//email valid check
            }else{
                $("#td_em").append("Please Enter Your Email");
                $("#email").focus();
            }//email lenght
        }else{
            $("#td_un").append("User Name should be greater than 4");
            $("#u_namer").focus();
        }//l_u_name
    }    //regfunct
      return regfunc;


});