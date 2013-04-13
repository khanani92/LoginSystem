/**
 * Created with JetBrains WebStorm.
 * User: mud_user
 * Date: 4/10/13
 * Time: 12:44 PM
 * To change this template use File | Settings | File Templates.
 */
define("mainFunt",function (){
    function mainfunt(){
        var id = sessionStorage.getItem('id');
        if(!id)
        {
            $('#reg_form').hide();
            $('#signup').on("click",function(){

                $('#log_form').hide();
                $('#reg_form').show();
            });
        }else{

            $('#log_form').hide();
            $('#reg_form').hide();
            $('#logout').css("visibility", "visible");


           //alert(id);


        }


    };
    return mainfunt;
});
