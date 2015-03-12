$(document).ready(function() {
						   
						   
	/*******************************************
	  TITLE:  			Tabs
	  URLs: 			http://jqueryui.com/demos/tabs/
	  DEPENDENCIES: 	jquery-1.4.3.min, jquery.ui.core.min, jquery.ui.widget.min, jquery.ui.tabs.min
	  Ref. Projects:    
	  DESCRIPTION:	
	  Basic Tabs Sample
	********************************************/
	$('div.tabs').tabs();
	
	//-------------------------------------------
	
	/*******************************************
	  TITLE:  			Cycle
	  URLs: 			http://jquery.malsup.com/cycle/
	  DEPENDENCIES: 	jquery-1.4.3.min, jquery.cycle.all.min
	  Ref. Projects:    
	  DESCRIPTION:	
	  Basic Tabs Sample
	********************************************/
	
	$('div#slideshow').cycle({
		slideExpr: ' .slide',
		cleartypeNoBg: ' true' ,
		fx: 'fade',
		next:   '#next2', 
    	prev:   '#prev2',
		timeout: 0, 
		pager: '.controls',
		pagerAnchorBuilder: function(idx, slide) {
			myClass = (idx==0)?' class="active"':'';
			return '<a href="#" '+myClass+'></a>';
			}
		});
	
	//-------------------------------------------
	
	
	/*******************************************
	  TITLE:  			J Carousel Lite
	  URLs: 			http://www.gmarwaha.com/jquery/jcarousellite/
	  DEPENDENCIES: 	jquery-1.4.3.min, jcarousellite_1.0.1.min
	  Ref. Projects:    
	  DESCRIPTION:	
	  Basic Tabs Sample
	********************************************/
	
	$("div.tab-content").jCarouselLite({
	    btnNext: "a.next-btn",
	    btnPrev: "a.previous-btn",
	    visible: 3,
		circular: false
	});
	
	//-------------------------------------------

	/*******************************************
	  TITLE:  			J Carousel Lite
	  URLs: 			http://github.com/sko77sun/Stylish-Select
	  DEPENDENCIES: 	jquery-1.4.3.min, jquery.stylish-select.min, (CSS) stylish-select.css
	  Ref. Projects:    
	  DESCRIPTION:	
	  Basic Tabs Sample
	********************************************/
		
	$('.selectbox').sSelect();
		
	//-------------------------------------------
});

