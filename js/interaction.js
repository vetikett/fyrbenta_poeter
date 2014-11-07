$(document).ready(function() {
	

	/* ==  sub menu functionality  == */

	$('.home-nav-link').click(function() {
		$('.sub-menu').slideUp(150);
	});

	$('.books-nav-link').click(function() {
		$('.sub-menu').hide();
		$('.books-menu').slideDown(200);
	});
				
	$('.info-nav-link').click(function() {	// info-menu - sub-menu dropdown
		$('.sub-menu').hide();
		$('.info-menu').slideDown(200);	
	});

	$('.about-us-nav-link').click(function() {
		$('.sub-menu').slideUp(150);
	});

	$('.press-nav-link').click(function() {
		$('.sub-menu').slideUp(150);
	});

	$('.eshop-nav-link').click(function() {
		$('.sub-menu').slideUp(150);
	});

	$('.contact-nav-link').click(function() {
		$('.sub-menu').slideUp(150);
	});

	
	/*== info-menu scroll links ==*/	

	$('.foreword-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.foreword').offset().top - 94 ) });	
		}else {
			$('body').animate({ scrollTop: ( $('.foreword').offset().top - 54 ) });	
		}
	});

	$('.idea-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.idea').offset().top - 84 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.idea').offset().top - 76 ) });	
		}
	});
	
	$('.vision-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.vision').offset().top - 84 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.vision').offset().top - 76 ) });	
		}
	});

	$('.the-content-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.the-content').offset().top - 84 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.the-content').offset().top - 76 ) });	
		}
	});

	$('.message-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.message').offset().top - 84 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.message').offset().top - 76 ) });	
		}
	});

	$('.the-twist-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.the-twist').offset().top - 84 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.the-twist').offset().top - 76 ) });	
		}
	});


	/*== books-menu scroll links ==*/	

	$('.book1-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.book1').offset().top - 107 ) });	
		}else {
			$('body').animate({ scrollTop: ( $('.book1').offset().top - 74 ) });	
		}
	});

	$('.book2-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.book2').offset().top - 145 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.book2').offset().top - 80 ) });	
		}
	});
	
	$('.book3-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.book3').offset().top - 145 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.book3').offset().top - 80 ) });	
		}
	});

	$('.book4-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.book4').offset().top - 145 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.book4').offset().top - 80 ) });	
		}
	});

	$('.book5-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.book5').offset().top - 145 ) });
		}else{
			$('body').animate({ scrollTop: ( $('.book5').offset().top - 80 ) });	
		}
	});

	/* == sub-menu fixed position or not == */
	
	$(window).scroll(function() { 

		if ( $(window).scrollTop() > $('header').height() ) {
			$('.sub-menu').addClass('sub-menu-fixed');
		}else {
			$('.sub-menu').removeClass('sub-menu-fixed');
		}
	});

	/* == set footer to fixed at bottom if main content isnt high enough == */
	// $('.any-page-link').click(function() {
	
	// 	if ($('.main-container').height() <= ( $(window).height() - ( $('.header-container').height() + $('.footer-container').height() ))) {
	// 		$('.footer-container').addClass('fixed-footer');
	// 	}else {
	// 		$('.footer-container').removeClass('fixed-footer');
	// 	}

	// });

});