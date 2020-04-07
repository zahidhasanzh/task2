(function ($) {
	"strict";

$(document).ready(function($){


	var homepageSlides = $(".homepage-slides");

	homepageSlides.owlCarousel({

		items:1,
		dots:true,
		autoplay:true,
		nav:true,
		loop:true,
		navText:["<i class='fa fa-long-arrow-left'>","<i class='fa fa-long-arrow-right'>"],

	});

		homepageSlides.on('translate.owl.carousel', function(event) {
    		
    		$(".welcome-area-text h4").addClass("animated bounceIn");
    		$(".welcome-area-text h1").addClass("animated jackInTheBox");
    		$(".welcome-area-text h1").addClass("animated fadeIn");
		});

		homepageSlides.on('translated.owl.carousel', function(event) {
    		
    		$(".welcome-area-text h4").removeClass("animated bounceIn");
    		$(".welcome-area-text h1").removeClass("animated jackInTheBox");
    		$(".welcome-area-text h1").removeClass("animated fadeIn");
		});

	
});

jQuery(window).load(function(){

});

}(jQuery));