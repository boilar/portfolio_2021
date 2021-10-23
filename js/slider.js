$('.slider').slick({
	autoplay: true,
	infinite: true,
	centerMode: true,
  centerPadding: '10px',
	// slidesToShow: 3,
	// slidesToScroll: 1,
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
	dots: false,
	autoplaySpeed: 5000,
	variableWidth: true,
	pauseOnFocus: false,
	pauseOnHover: false,
	pauseOnDotsHover: false,

	// responsive: [
	// 	{
	// 		breakpoint: 769,
	// 		settings:{
	// 			slidesToShow: 2,
	// 			slidesToScroll: 2,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 426,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 		}
	// 	}
	// ]

});
