$(document).ready(function() {
	$('#slideshow .slides').cycle({
		pager:  'div.controls',
		speed: 1000,		
		timeout: 10000,
		pagerAnchorBuilder: function(idx, slide) { 
			myClass = (idx==0)?'activeSlide':'';
			return '<a href="#" class="control-btn' + myClass + '">&nbsp;</a>'; 
		}
	});
	
});
