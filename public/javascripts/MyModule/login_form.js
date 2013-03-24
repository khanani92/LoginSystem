/**
 * Created with JetBrains WebStorm.
 * User: mud_user
 * Date: 3/17/13
 * Time: 7:25 PM
 * To change this template use File | Settings | File Templates.
 */
define("loginfunc",function (){
    function loginFunc(){
        console.log("clicked");

        var u_name = $("#u_name").val();
        var pass = $("#pass").val();

        console.log(u_name);
        console.log(pass);

        $.ajax({
            url:"/login",
            data:{u_name:u_name,pass:pass},
            type:"post"

        }).done(function(res,status){
                console.log("test"+res);
                //alert(res);
                alert(status);
                if(status == "success"){
                    $.ajax({
                        url:"/login",
                        type:"post"
                    }).done(function(resp){
                    var u_data = JSON.parse(resp)
                    alert(u_data.pass);
                })  ;

            };//if resp==sucess

            });//ajax done
    } ;

    return loginFunc;
});
