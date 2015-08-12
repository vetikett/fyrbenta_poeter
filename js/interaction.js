$(document).ready(function() {

	/* ==  sub menu slide functionality AND set and remove class="active" om main menu elements  == */

	// If browser supports "onhashchange" use that.
	// If not use a click based version (not as refined when it comes to supporting browser back event and such)

	if ("onhashchange" in window) {
		locationHashChanged();
	    window.onhashchange = locationHashChanged;
	}else {

		$('header a').click(function() {
			$('header a').removeClass('active');
			$(this).addClass('active');
		});
		
		$('.home-nav-link').click(function() {
			$('.sub-menu').slideUp(150);
		});

		$('.books-nav-link').click(function() {
			$('.sub-menu').slideUp(150);
		});

		$('body').on('click', '.storybooks-nav-link', function() {
			$('.sub-menu').hide();
			$('.storybooks-menu').slideDown(200);
		});

		$('body').on('click', '.textbooks-nav-link', function() {
			$('.sub-menu').hide();
			$('.textbooks-menu').slideDown(200);
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
	}
	

	function locationHashChanged() {
	    if (location.hash === "#/") {
	        $('.sub-menu').slideUp(150);
	        
	        $('header a').removeClass('active');
			$('.home-nav-link').addClass('active');
	    }
	    if (location.hash === "#/books") {
	        $('.sub-menu').slideUp(150);

	        $('header a').removeClass('active');
			$('.books-nav-link').addClass('active');
	    }
	    if (location.hash === "#/storybooks") {
	       	$('.sub-menu').hide();
			$('.storybooks-menu').slideDown(200); 

			$('header a').removeClass('active');
			$('.books-nav-link').addClass('active');
	    }
	    if (location.hash === "#/textbooks") {
	        $('.sub-menu').hide();
			$('.textbooks-menu').slideDown(200);

			$('header a').removeClass('active');
			$('.books-nav-link').addClass('active');
	    }
	    if (location.hash === "#/info") {
	        $('.sub-menu').hide();
			$('.info-menu').slideDown(200);

			$('header a').removeClass('active');
			$('.info-nav-link').addClass('active');
	    }
	    if (location.hash === "#/about-us") {
	        $('.sub-menu').hide();
			$('.profile-menu').slideDown(200);

			$('header a').removeClass('active');
			$('.about-us-nav-link').addClass('active');
	    }
	    if (location.hash === "#/press") {
	        $('.sub-menu').slideUp(150);

	        $('header a').removeClass('active');
			$('.press-nav-link').addClass('active');
	    }
	    if (location.hash === "#/e-shop") {
	        $('.sub-menu').slideUp(150);

	        $('header a').removeClass('active');
			$('.eshop-nav-link').addClass('active');
	    }
	    if (location.hash === "#/contact") {
	        $('.sub-menu').slideUp(150);

	        $('header a').removeClass('active');
			$('.contact-nav-link').addClass('active');
	    }
	}

	

	

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

	$('.book6-menu-link').click(function(){
		if ( !$('.sub-menu').hasClass('sub-menu-fixed') ) {
			$('body').animate({ scrollTop: ( $('.book6').offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });
		}else{
			$('body').animate({ scrollTop: ( $('.book6').offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });	
		}
	});



	/* == Book overlay navigation == */
	$('.all-books-menu-link').click(function() {
		$('.navigation-overlay').show();
		$('.sub-menu').slideUp(150);
	});

	$('body').on('click tap', '.books-tag .overlay-navigation-pics', function() {
		
		var bookNumber = this.id.charAt(this.id.length - 1);
		$('.navigation-overlay').hide();
		
		$('body').animate({ scrollTop: ( $('article .book' + bookNumber).offset().top - ( $('header').height() + $('.sub-menu').height() + 50) ) });
		if (location.hash === "#/storybooks") {
			$('.storybooks-menu').slideDown(200); 
	    }
	    if (location.hash === "#/textbooks") {
			$('.textbooks-menu').slideDown(200);
	    }	
	});




	/* == profile-overlay navigation  == */
	$('.characters-menu-link').click(function() {
		$('.navigation-overlay').show();
		$('.sub-menu').slideUp(150);
		
	});

	$('body').on('click tap', '.about-us-tag .overlay-navigation-pics', function() {

		var profileNumber = this.id.charAt(this.id.length - 1);

		$('.navigation-overlay').hide();
		
		$('body').animate({ scrollTop: ( $('article .profile' + profileNumber).offset().top - 140 ) });

		if (location.hash === "#/about-us") {
			$('.profile-menu').slideDown(200);
	    }
	});

	$('body').on('click tap', '.navigation-overlay', function() {
		
		$('.navigation-overlay').hide();

		if (location.hash === "#/storybooks") {
			$('.storybooks-menu').slideDown(200); 
	    }
	    if (location.hash === "#/textbooks") {
			$('.textbooks-menu').slideDown(200);
	    }
	    if (location.hash === "#/about-us") {
			$('.profile-menu').slideDown(200);
	    }
	});


	// ======= OLD LOGIC ========


	/* == sub-menu fixed position or not == */
	// $(window).scroll(function() { 

	// 	if ( $(window).scrollTop() > $('header').height() ) {
	// 		$('.sub-menu').addClass('sub-menu-fixed');
	// 	}else {
	// 		$('.sub-menu').removeClass('sub-menu-fixed');
	// 	}
	// });

});