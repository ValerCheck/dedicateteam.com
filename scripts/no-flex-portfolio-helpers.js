$(document).ready(function() {

	$(function() {
    	$(".contact-form").click(function(){
    		$('.form_window').fadeIn().addClass("windactiv");
    		$(".overlay").fadeIn();
	  	});
	  	$(".overlay, .bw_close").click(function(){
	  		$(".windactiv").fadeOut();
	  		$(".overlay").fadeOut();
	  });
	});

});
