$(document).ready(function() {

	// Set pressed nav element to active

	$('header a').click(function() {
		$('header a').removeClass('active');
		$(this).addClass('active');
	});
	
	

	
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
		$('.sub-menu').hide();
		$('.profile-menu').slideDown(200);
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
			$('body').animate({ scrollTop: ( $('.foreword').offset().top - ( $('header').height() + $('.sub-menu').height() + 35) ) });	
		}else {
			$('body').animate({ scrollTop: ( $('.foreword').offset().top - ( $('header').height() + $('.sub-menu').height() + 35) ) });	
		}
	});

	$('.idea-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.idea').offset().top - ( $('header').height() + $('.sub-menu').height() + 35) ) });
		}else{
			$('body').animate({ scrollTop: ( $('.idea').offset().top - ( $('header').height() + $('.sub-menu').height() + 35) ) });	
		}
	});
	
	$('.vision-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.vision').offset().top - ( $('header').height() + $('.sub-menu').height() + 35) ) });
		}else{
			$('body').animate({ scrollTop: ( $('.vision').offset().top - ( $('header').height() + $('.sub-menu').height() + 35) ) });	
		}
	});

	$('.the-content-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.the-content').offset().top - ( $('header').height() + $('.sub-menu').height() + 35) ) });
		}else{
			$('body').animate({ scrollTop: ( $('.the-content').offset().top - ( $('header').height() + $('.sub-menu').height() + 35) ) });	
		}
	});

	$('.message-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.message').offset().top - ( $('header').height() + $('.sub-menu').height() + 35) ) });
		}else{
			$('body').animate({ scrollTop: ( $('.message').offset().top - ( $('header').height() + $('.sub-menu').height() + 35) ) });	
		}
	});

	$('.the-twist-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.the-twist').offset().top - ( $('header').height() + $('.sub-menu').height() + 35) ) });
		}else{
			$('body').animate({ scrollTop: ( $('.the-twist').offset().top - ( $('header').height() + $('.sub-menu').height() + 35) ) });	
		}
	});


	/*== books-menu scroll links ==*/	

	$('.book1-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.book1').offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });	
		}else {
			$('body').animate({ scrollTop: ( $('.book1').offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });	
		}
	});

	$('.book2-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.book2').offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });
		}else{
			$('body').animate({ scrollTop: ( $('.book2').offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });	
		}
	});
	
	$('.book3-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.book3').offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });
		}else{
			$('body').animate({ scrollTop: ( $('.book3').offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });	
		}
	});

	$('.book4-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.book4').offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });
		}else{
			$('body').animate({ scrollTop: ( $('.book4').offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });	
		}
	});

	$('.book5-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.book5').offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });
		}else{
			$('body').animate({ scrollTop: ( $('.book5').offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });	
		}
	});



	/* == Book overlay navigation == */
	$('.all-books-menu-link').click(function() {
		$('.navigation-overlay').show();
		console.log("hej");
	});

	$('body').on('click', '.books-tag .overlay-navigation-pics', function() {
		var bookNumber = this.id.charAt(this.id.length - 1);
		console.log("hej");
		$('.navigation-overlay').hide();
		
		$('body').animate({ scrollTop: ( $('article .book' + bookNumber).offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });	
	});




	/* == profile-overlay navigation  == */
	$('.characters-menu-link').click(function() {
		$('.navigation-overlay').show();
		
	});

	$('body').on('click', '.about-us-tag .overlay-navigation-pics', function() {
		var profileNumber = this.id.charAt(this.id.length - 1);

		$('.navigation-overlay').hide();
		
		$('body').animate({ scrollTop: ( $('article .profile' + profileNumber).offset().top - 140 ) });	
	});

	$('body').on('click', '.navigation-overlay', function() {
		$('.navigation-overlay').hide();
	});





	/* == sub-menu fixed position or not == */
	// $(window).scroll(function() { 

	// 	if ( $(window).scrollTop() > $('header').height() ) {
	// 		$('.sub-menu').addClass('sub-menu-fixed');
	// 	}else {
	// 		$('.sub-menu').removeClass('sub-menu-fixed');
	// 	}
	// });

});