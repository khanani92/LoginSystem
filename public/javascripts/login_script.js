/**
 * Created with JetBrains WebStorm.
 * User: user_side
 * Date: 2/18/13
 * Time: 3:33 PM
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    $('#reg_form').hide();
    $('#signup').on("click",function(){

       $('#log_form').hide();
        $('#reg_form').show();
    });

    //Login form submit function

    $('#login').on("click",function(){
        console.log("clicked");

       var u_name = $("#u_name").val();
        var pass = $("#pass").val();

        console.log(u_name);
        console.log(pass);
/*
        $.ajax({
            url:"ulogin",
            data:{name:n,email:e},
            type:"post"
        }).done(function(res){
                console.log("test"+res)
            });//ajax done
                            */
    });//btn click function

//registration form submit function

    $('#reg').on("click",function(){

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

                              })





                      }else{
                          alert("pass match")
                      }//pass match
                  }else{
                      $("#td_p").append("Password should be greater than 4");
                      pass = $("#passr").focus();
                  }//l_pass
              }else{
                  $("#td_un").append("Enter Correct Email");
                  $("#email").focus();
              }//email valid check
            }else{
                $("#td_un").append("Please Enter Your Email");
                $("#email").focus();
            }//email lenght
        }else{
            $("#td_un").append("User Name should be greater than 4");
            $("#u_namer").focus();
        }//l_u_name



    });


});//main f*unction
