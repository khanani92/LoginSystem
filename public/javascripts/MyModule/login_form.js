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
        }).done(function(res){
                console.log("test"+res)
            });//ajax done
    } ;

    return loginFunc;
});
