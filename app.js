$(document).ready(function(){

  $('.ba-slider').slick({
     infinite: true,
     dots: false,
     arrows: true,
  	 slidesToShow: 4,
  	 variableWidth: true,
  	 slidesToScroll: 1,
  	 prevArrow: "<img src='img/arrow-left.png' class='prev' alt='1'>",
     nextArrow: "<img src='img/arrow-right.png' class='next' alt='2'>",
  });
})(jQuery);
	