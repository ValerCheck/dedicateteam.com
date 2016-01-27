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
});