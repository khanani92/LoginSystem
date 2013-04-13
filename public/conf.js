/**
 * Created with JetBrains WebStorm.
 * User: Aram Ali Qureshi
 * Date: 3/3/13
 * Time: 5:36 AM
 * To change this template use File | Settings | File Templates.
 */
//var bioPath="JavaScript/MyModule/bio";
require.config({

    // Initialize the application with the main application file.
    deps: ["main"],

    paths: {
        // JavaScript folders.
        mainFunt: "javascripts/MyModule/main_funt",
        regForm: "javascripts/MyModule/reg_form",
        loginfunc: "javascripts/MyModule/login_form",
        logoutfunt: "javascripts/MyModule/logout_funt",
       // personCourse: "JavaScript/MyModule/course",
       // personClassNo: "JavaScript/MyModule/classNo",

        // Libraries.
        //bootstrap: "JavaScript/bootstrap",
        jquery: "require-jquery"
    }
});
