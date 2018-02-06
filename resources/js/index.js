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


})


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
