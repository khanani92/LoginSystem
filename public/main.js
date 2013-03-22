/**
 * Created with JetBrains WebStorm.
 * User: Aram Ali Qureshi
 * Date: 3/3/13
 * Time: 5:16 AM
 * To change this template use File | Settings | File Templates.
 */


$(function(){
    $('#reg_form').hide();
    $('#signup').on("click",function(){

        $('#log_form').hide();
        $('#reg_form').show();
    });

    $('#reg').on('click',function(){
        require(["regForm"], function(regfunc){
//            alert(regfunc);
            console.log('regfunct is called to check field');
           regfunc();
        });
    });
    $('#login').on('click',function(){
        require(["loginfunc"], function(regfunc){
//            alert(regfunc);
            console.log('regfunct is called to check field');
            regfunc();
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
