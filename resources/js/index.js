$(function() {

	const $window = $(window); // window as a variable //

	const scroll = () => { // scroll function for header change //
		let window_top_position = $window.scrollTop();
		let header = $('#header');
		let logo = $('#logo');

		if (window_top_position >= 50) { // runs if scrolled past 50px //
			header.addClass('scroll');
			logo.addClass('scroll');
		} else {
			header.removeClass('scroll');
			logo.removeClass('scroll');
		}
	};

	let waiting = false;

	$(window).scroll(() => {
		if (waiting) {
			return;
		}
		waiting = false;
		scroll();

		setTimeout(() => { // changes waiting back to false to timeout scroll function //
			waiting = false;
		}, 100);
	});

	const $hidden = $('.hidden');

	const check_if_in_view = () => {     //measurements of window dimensions//
		let window_height = $window.height();
		let window_top_position = $window.scrollTop();
		let window_bottom_position = (window_top_position + window_height);

		$.each($hidden, function() {
			let $element = $(this);
			let element_height = $element.outerHeight();
			let element_top_position = $element.offset().top;
			let element_bottom_position = (element_top_position + element_height);

			////////check to see if this current container is within viewport////////
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= (window_bottom_position - 300))) {
				$element.addClass('fadeIn');
			}
		});
	};

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
});



// Set the width of the side navigation to 12rem //
const openNav = () => {
	document.getElementById("sideNav").style.width = "12rem";
	document.getElementById("main").style.width = "auto";
};

// Set the width of the side navigation to 0 //
const closeNav = () => {
	document.getElementById("sideNav").style.width = "0";
	document.getElementById("main").style.width = "0";
};


// smooth scrolling for all links //
$("a").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior //
	if (this.hash !== "") {
		// Prevent default anchor click behavior //
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll //
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function() {

			// Add hash (#) to URL when done scrolling (default click behavior) //
			window.location.hash = hash;
		});
	} // End if //
});
