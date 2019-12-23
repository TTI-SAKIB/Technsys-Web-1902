
// hide, show, toggle   --- slideUp,slideDown,slideToggle  --- fadeIn,fadeOut,fadeToggle,  fadeTo


$(document).ready(function(){


    $("#hbutton").on("mouseenter",function(){
        // $("p").hide(1000);
        // $("p").slideUp(1000);
        $("p").fadeOut(1000);
    });

    $("#sbutton").on("click",function(){
        // $("p").show(1000);
        // $("p").slideDown(1000);
        $("p").fadeIn(1000);
    });

    $("#tbutton").on("click",function(){
        // $("p").toggle(1000);
        // $("p").slideToggle(1000);
        $("p").fadeToggle(1000);
    });


    // sign in & sing up form

    $(".sign-up-button").on("click",function(){
        $("#sign-up-form").slideDown(1000);
        $("#sign-in-form").slideUp(1000);
    });

    $(".sign-in-button").on("click",function(){
        $("#sign-in-form").slideDown(1000);
        $("#sign-up-form").slideUp(1000);
    });









});