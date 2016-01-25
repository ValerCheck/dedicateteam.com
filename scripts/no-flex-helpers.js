$(document).ready(function() {
	$('.partners-items').slick({
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 3,
		responsive: [
    	{
	      breakpoint: 860,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});