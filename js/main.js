/* ===================================
--------------------------------------
--------------------------------------
======================================*/


'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$(".main-menu").slicknav({
        appendTo: '.header-section',
		allowParentLinks: true,
		closedSymbol: '<i class="fa fa-angle-right"></i>',
		openedSymbol: '<i class="fa fa-angle-down"></i>'
	});

	$('.slicknav_nav').prepend('<li class="header-right-warp"></li>');
	$('.header-right').clone().prependTo('.slicknav_nav > .header-right-warp');
	

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	/*------------------
        Magnific Popup
    --------------------*/
    $('.video-play').magnificPopup({
        type: 'iframe'
    });

	/*--------------------------
		Loans calculator
	------------------------------*/
	$('#lc-submit').on('click', function(e){
		var lc_price    = $('#lc-price').val();
		var lc_interest = $('#lc-interest').val();
		var lc_dpay     = $('#lc-dpay').val();
		var weeks = 52;

		// Minus Down Payment 
		lc_price = lc_price - lc_dpay;

		// Find percentage  
		var perc = (lc_price/100) * lc_interest;

		// Add percentage to main price 
		lc_price = (lc_price + perc);

		// Weekly pay result
		var weekly_pay = (lc_price / weeks).toFixed(2);


		if (!isNaN(weekly_pay)) {
			$('#lc-result').text('$' + weekly_pay);
		}
	})

})(jQuery);



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
