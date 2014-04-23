  $('.slider1').bxSlider({
    slideWidth: 186,
    minSlides: 1,
    maxSlides: 7,
    slideMargin: 0
  });
  $('.slider2').bxSlider({
    slideWidth: 396,
    minSlides: 1,
    maxSlides: 7,
    slideMargin: 0
  });
  $('.slider3').bxSlider({
    slideWidth: 186,
    minSlides: 1,
    maxSlides: 7,
    slideMargin: 0
  });
  $('.slider4').bxSlider({
    slideWidth: 186,
    minSlides: 1,
    maxSlides: 7,
    slideMargin: 0
  });
	$('.toggle-panel1')
	.TogglePanel({
		ajax: {
			settings: {
				timeout: 1000,
			},
		},
	});
	$('.collapse-all').on('click', function() {
		$('.toggle-panel1').TogglePanel('collapse');
	});
	$('.expand-all').on('click', function() {
		$('.toggle-panel1').TogglePanel('expand');
	});
	$('.toggle1').on('click', function() {
		$('.toggle-panel1').TogglePanel('toggle');
		$('.toggle-panel2.expanded').TogglePanel('toggle');
		$('.toggle-panel3.expanded').TogglePanel('toggle');
		$('.toggle-panel4.expanded').TogglePanel('toggle');
		$(this).toggleClass("active");
		$(".toggle2").removeClass("active");
		$(".toggle3").removeClass("active");
		$(".toggle4").removeClass("active");
	});
	$('.toggle-panel2')
	.TogglePanel({
		ajax: {
			settings: {
				timeout: 1000,
			},
		},
	});
	$('.collapse-all').on('click', function() {
		$('.toggle-panel2').TogglePanel('collapse');
	});
	$('.expand-all').on('click', function() {
		$('.toggle-panel2').TogglePanel('expand');
	});
	$('.toggle2').on('click', function() {
		$('.toggle-panel2').TogglePanel('toggle');
		$('.toggle-panel1.expanded').TogglePanel('toggle');
		$('.toggle-panel3.expanded').TogglePanel('toggle');
		$('.toggle-panel4.expanded').TogglePanel('toggle');
		$(this).toggleClass("active");
		$(".toggle1").removeClass("active");
		$(".toggle3").removeClass("active");
		$(".toggle4").removeClass("active");
	});
	$('.toggle-panel3')
	.TogglePanel({
		ajax: {
			settings: {
				timeout: 1000,
			},
		},
	});
	$('.collapse-all').on('click', function() {
		$('.toggle-panel3').TogglePanel('collapse');
	});
	$('.expand-all').on('click', function() {
		$('.toggle-panel3').TogglePanel('expand');
	});
	$('.toggle3').on('click', function() {
		$('.toggle-panel3').TogglePanel('toggle');
		$('.toggle-panel1.expanded').TogglePanel('toggle');
		$('.toggle-panel2.expanded').TogglePanel('toggle');
		$('.toggle-panel4.expanded').TogglePanel('toggle');
		$(this).toggleClass("active");
		$(".toggle1").removeClass("active");
		$(".toggle2").removeClass("active");
		$(".toggle4").removeClass("active");
	});
	$('.toggle-panel4')
	.TogglePanel({
		ajax: {
			settings: {
				timeout: 1000,
			},
		},
	});
	$('.collapse-all').on('click', function() {
		$('.toggle-panel4').TogglePanel('collapse');
	});
	$('.expand-all').on('click', function() {
		$('.toggle-panel4').TogglePanel('expand');
	});
	$('.toggle4').on('click', function() {
		$('.toggle-panel4').TogglePanel('toggle');
		$('.toggle-panel1.expanded').TogglePanel('toggle');
		$('.toggle-panel3.expanded').TogglePanel('toggle');
		$('.toggle-panel2.expanded').TogglePanel('toggle');
		$(this).toggleClass("active");
		$(".toggle1").removeClass("active");
		$(".toggle3").removeClass("active");
		$(".toggle2").removeClass("active");
	});