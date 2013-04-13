/**
 * Created with JetBrains WebStorm.
 * User: mud_user
 * Date: 4/10/13
 * Time: 2:03 PM
 * To change this template use File | Settings | File Templates.
 */
define("logoutfunt",function (){
    function logoutfunt(){
            sessionStorage.clear();
       /* var id = sessionStorage.getItem('id');
        alert(id);
        alert("hello");

          */
        location.reload();

    };
    return logoutfunt;

});
