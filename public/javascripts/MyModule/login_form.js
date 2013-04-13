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

        }).done(function(data, textStatus, jqXHR){
                //alert(textStatus);// succes
                //alert(jqXHR.status);// 200
                //alert(jqXHR.statusText);// ok
                  //alert(data);

                if(data != 'error'){
                    $('#log_form').hide();
                    $('#msg').append("<h4>Welcome"+data.name +"</h4>");

                    console.log(data)
                    var u_id =  data._id;
                    sessionStorage.setItem('id',u_id);

                    location.reload();

                    //alert(data.email);


            }else{//if resp==sucess
                   if(data === 'error'){
                       $('#log_form').append("<p>User Name or passward is wrong</p>");
                       alert("error");

                   }
                    //alert("asas");
                }

            });//ajax done

    } ;

    return loginFunc;
});
