(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
         
		  $(".header_area").sticky({topSpacing:0});

          // jquery smooth scroll
		
		$("li.smoth-menu a").bind('click',function(event){
			var $anchor = $(this);
			var headerH = '80';
			$('html,body').stop().animate({
				scrollTop:$( $anchor .attr('href')).offset().top - headerH + "px"
				
		 },1200,'easeInQuad');
			
		 event.preventDafult();
			
		})
		
	   // jquery bootstrap scroll spy
		
		$('body').scrollspy({
		 target: '.navbar-collapse',	
		 offset: 95	
		});
        
      $('.parallax_bg,.top_area_bg').scrolly({bgParallax: true});
	  
	  
	  $(".navbar-toggle").click(function(){
		  
	 $("body").addClass("mobile-menu-activated");
	  });
	  
	  new WOW().init();
	  
	  
	  //extra-color-js-start 
	  jQuery("span.color-one").click(function(){
		  
		  jQuery("body").addClass("color-one-css").removeClass("color-two-css color-six-css");
	  });
	  
	   jQuery("span.color-two").click(function(){
		  
		  jQuery("body").addClass("color-two-css").removeClass("color-one-css color-six-css");
	  });
	  
	    jQuery("span.color-six").click(function(){
		  
		  jQuery("body").addClass("color-six-css").removeClass("color-one-css color-two-css ");
	  });
	  
	  
	  
	  
	    $(".click-me").click( function(event){
        event.preventDefault();
        if ( $(this).hasClass("inOut") ) {
        $(".color-box-area").stop().animate({right:"-200px"}, 500);
        } else {
        $(".color-box-area").stop().animate({right:"0"}, 500);
        }
        $(this).toggleClass("inOut");
        return false;
        });
 
	  
	  

    });
	
	// Must be Checking code bellow
	     $("ul.nav.navbar-nav li a").click(function(){
         $(".navbar-collapse").removeClass("in");
         });


    jQuery(window).load(function(){

        
    });


}(jQuery));	