$(document).ready(function() {
	

	/* ==  sub menu functionality  == */

	$('.home-nav-link').click(function() {
		$('.sub-menu').slideUp(150);
	});

	$('.books-nav-link').click(function() {
		$('.sub-menu').slideUp(150);
	});
				
	$('.about-us-nav-link').click(function() {	// about-us-menu - sub-menu dropdown
		$('.about-us-menu').slideDown(200);	
	});

	$('.contact-nav-link').click(function() {
		$('.sub-menu').slideUp(150);
	});

	$('.press-nav-link').click(function() {
		$('.sub-menu').slideUp(150);
	});

	$('.eshop-nav-link').click(function() {
		$('.sub-menu').slideUp(150);
	});

	
	/*== about-us-menu scroll links ==*/	

	$('.foreword-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.foreword').offset().top - 94 ) });	
		}else {
			$('body').animate({ scrollTop: ( $('.foreword').offset().top - 54 ) });	
		}
	});

	$('.idea-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.idea').offset().top - 120 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.idea').offset().top - 80 ) });	
		}
	});
	
	$('.vision-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.vision').offset().top - 120 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.vision').offset().top - 80 ) });	
		}
	});

	$('.the-content-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.the-content').offset().top - 120 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.the-content').offset().top - 80 ) });	
		}
	});

	$('.message-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.message').offset().top - 120 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.message').offset().top - 80 ) });	
		}
	});

	$('.the-twist-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.the-twist').offset().top - 120 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.the-twist').offset().top - 80 ) });	
		}
	});

	
	$(window).scroll(function() {  // sub-menu fixed position or not

		if ( $(window).scrollTop() > $('header').height() ) {
			$('.sub-menu').addClass('sub-menu-fixed');
		}else {
			$('.sub-menu').removeClass('sub-menu-fixed');
		}
	});

});