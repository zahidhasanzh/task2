
$(document).ready(function(){

	// masonry

	$(".portfolio-list").masonry({
		percentPosition: true,
		

	});

	// animated.css

	 $(".single-portfolio-item").hover(function(){
        $(".single-portfolio-item .portfolio-hover h2").removeClass("animated fadeInUp");
        $(this).find(".portfolio-hover h2").addClass("animated fadeInUp");
     });


	 $(".single-portfolio-item").hover(function(){

      $(".single-portfolio-item .portfolio-hover p").removeClass("animated fadeInUp");
      $(this).find(".portfolio-hover p").addClass("animated fadeInUp");
     });
// offcanvas menu

	$(".menu-trigger").on('click', function(){

		$(".offcanvas-menu").addClass("active");
		$(".offcanvas-menu-overlay").addClass("active");
	});

		$(".menu-close, .offcanvas-menu-overlay").on('click', function(){

		$(".offcanvas-menu").removeClass("active");
		$(".offcanvas-menu-overlay").removeClass("active");
	});

//headroom.js plagin
$(".header-area").headroom();

});