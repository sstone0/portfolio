$(function() {

	const $window = $(window);

	let scroll = () => {
		// do the onscroll stuff you want here
		let scrollTop = $window.scrollTop();
		let header = $('#header');
		let logo = $('#logo');

		if (scrollTop >= 50) {
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

		setTimeout(() => {
			waiting = false;
		}, 100);
	});
	// schedule an extra execution of scroll() after 200ms
	// in case the scrolling stops in next 100ms
	/*endScrollHandle = setTimeout(function() {
		scroll();
	}, 200);*/

	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});

});

/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("sideNav").style.width = "12rem";
	document.getElementById("main").style.width = "auto";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("sideNav").style.width = "0";
	document.getElementById("main").style.width = "0";
}

function workLink() {}
