/**
 * Created with JetBrains WebStorm.
 * User: Aram Ali Qureshi
 * Date: 3/3/13
 * Time: 5:16 AM
 * To change this template use File | Settings | File Templates.
 */


$(function(){
    //Main js for index in start
    require(["mainFunt"], function(mainfunt){
//            alert(regfunc);
        console.log('mainfunct is called as main js for /');
        mainfunt();
    });



      //registion function
    $('#reg').on('click',function(){
        require(["regForm"], function(regfunc){
//            alert(regfunc);
            console.log('regfunct is called to check field');
           regfunc();
        });
    });



    //Login function
    $('#login').on('click',function(){
        require(["loginfunc"], function(loginFunc){
//            alert(regfunc);
            console.log('loginfunct is called to check field');
            loginFunc();
        });
    });

    //Logout function
    $('#logout').on('click',function(){
        //alert("hello");
        require(["logoutfunt"], function(logoutFunc){
//            alert(regfunc);
            console.log('logoutfunct is called logOut');
            logoutFunc();
        });
    });



    /*
     $("#btn1").on('click',function(){
        require(["personName"], function(name){
            $('body').append('<br><b>Name:</b> '+name+'<br>');
        });
    });


    */
});
