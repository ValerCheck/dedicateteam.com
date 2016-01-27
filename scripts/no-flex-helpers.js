$(document).ready(function() {

	$('.best-solution .slider').slick({
		centerMode: true,
		autoplay: true,
		centerPadding: 0,
		autoplaySpeed: 5000,
		speed: 1000,
		slidesToShow: 1,
		responsive: [
    		{
	    		breakpoint: 860,
		      	settings: {
		        	arrows: true,
		        	centerMode: true,
		        	slidesToShow: 1
		    	}
		    },
		    {
		      	breakpoint: 700,
		      	settings: {
		        	arrows: true,
		        	centerMode: true,
		        	slidesToShow: 1
		      	}
		    }
	  	]
	});

	$('.feat-slider').slick({
		centerMode: true,
		nextArrow:".feat-slider-btn.right",
		prevArrow:".feat-slider-btn.left",
		centerPadding: 0,
		slidesToShow: 3,
		responsive: [
    		{
	    		breakpoint: 1100,
		      	settings: {
		        	arrows: true,
		        	centerMode: true,
		        	slidesToShow: 2
		    	}
		    },
		    {
		      	breakpoint: 800,
		      	settings: {
		        	arrows: true,
		        	centerMode: true,
		        	slidesToShow: 1
		      	}
		    }
	  	]
	});

	$('.partners-items').slick({
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 5000,
		centerPadding: 0,
		slidesToShow: 3,
		responsive: [
    		{
	    		breakpoint: 860,
		      	settings: {
		        	arrows: true,
		        	centerMode: true,
		        	slidesToShow: 2
		    	}
		    },
		    {
		      	breakpoint: 700,
		      	settings: {
		        	arrows: true,
		        	centerMode: true,
		        	slidesToShow: 1
		      	}
		    }
	  	]
	});

	/*$('#menu-item-1').click(function(){
		var menuParent = $('#menu-item-1').parent();
		console.log(menuParent.Id());
		scrollToId('what-is-it');
	});*/

	$('.menu-item-1').click(function(){
		scrollToId('what-is-it');
		var isMobile = $(this).parent().hasClass('hidden-menu');
		if (isMobile) $('#hmt').prop('checked',false);
	});

	$('.menu-item-2').click(function(){
		scrollToId('why-profitably');
		var isMobile = $(this).parent().hasClass('hidden-menu');
		if (isMobile) $('#hmt').prop('checked',false);
	});

	$('.menu-item-3').click(function(){
		scrollToId('how-it-works');
		var isMobile = $(this).parent().hasClass('hidden-menu');
		if (isMobile) $('#hmt').prop('checked',false);
	});

	$('.menu-item-4').click(function(){
		scrollToId('advantages');
		var isMobile = $(this).parent().hasClass('hidden-menu');
		if (isMobile) $('#hmt').prop('checked',false);
	});

	$('.menu-item-5').click(function(){
		scrollToId('other-services');
		var isMobile = $(this).parent().hasClass('hidden-menu');
		if (isMobile) $('#hmt').prop('checked',false);
	});

	$('.menu-item-6').click(function(){
		scrollToId('contact-us');
		var isMobile = $(this).parent().hasClass('hidden-menu');
		if (isMobile) $('#hmt').prop('checked',false);
	});

});

function scrollToId(aid){
	var aTag = $("div#" + aid + "");
	$('html,body').animate({scrollTop: aTag.offset().top},'slow');
}