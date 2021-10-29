(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

	    var hamburgers = document.querySelectorAll(".hamburger");
	    if (hamburgers.length > 0) {
	      forEach(hamburgers, function(hamburger) {
	        hamburger.addEventListener("click", function() {
	          this.classList.toggle("is-active");
	        }, false);
	      });
	    }


	    $(window).scroll(function() {
			var scroll = $(window).scrollTop();
			
			if (scroll >= 15) {
			$(".header-area").addClass("headerfixed");
			} else {
			$(".header-area").removeClass("headerfixed");
			}
		});

		$(".about").click(function() {
			$("html, body").animate({ scrollTop: $("#about").offset().top }, 400);
		});

		$(".service").click(function() {
			$("html, body").animate({ scrollTop: $("#service").offset().top }, 400);
		});

		$(".portfolio").click(function() {
			$("html, body").animate({ scrollTop: $("#portfolio").offset().top }, 400);
		});

		$(".blog").click(function() {
			$("html, body").animate({ scrollTop: $("#blog").offset().top }, 400);
		});

		$(".contact").click(function() {
			$("html, body").animate({ scrollTop: $("#contact").offset().top }, 400);
		});

	    window.ityped.init(document.querySelector('.ityped'), {
            strings : ['I am a professional web developer', 'I am a creative web designer'],
            loop : true
        });


        $('#html-css').LineProgressbar({
		percentage:95,
		radius: '3px',
		height: '10px',
		fillBackgroundColor: '#346ABB',
		});

		$('#bt-jq').LineProgressbar({
		percentage:90,
		radius: '3px',
		height: '10px',
		fillBackgroundColor: '#346ABB'
		});

		$('#js').LineProgressbar({
		percentage:80,
		radius: '3px',
		height: '10px',
		fillBackgroundColor: '#346ABB'
		});

		$('#php').LineProgressbar({
		percentage:80,
		radius: '3px',
		height: '10px',
		fillBackgroundColor: '#346ABB'
		});

		$('#wp').LineProgressbar({
		percentage:85,
		radius: '3px',
		height: '10px',
		fillBackgroundColor: '#346ABB'
		});

		$('#ps').LineProgressbar({
		percentage:80,
		radius: '3px',
		height: '10px',
		fillBackgroundColor: '#346ABB'
		});


		$('.owl-carousel').owlCarousel({
			items: 1,
			autoplay: true,               
			dots: true,              
			loop: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			responsive: {
			  0: {
				items: 1
			  },
			  768: {
				items: 1
			  },
			  1200: {
				items: 1
			  }
			}
  
		  })

		 $('.countup').CountUpCircle({
            duration: 2000,
            opacity_anim: false,
            step_divider: 5,
        });

		 $('.countup-2').CountUpCircle({
            duration: 2000,
            opacity_anim: false,
            step_divider: 5,
        });

		 $('.countup-3').CountUpCircle({
            duration: 2000,
            opacity_anim: false,
            step_divider: 5,
        });

		 $('.countup-4').CountUpCircle({
            duration: 2000,
            opacity_anim: false,
            step_divider: 5,
        });












	
		
		
	});
})(jQuery);