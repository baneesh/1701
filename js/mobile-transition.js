$(document).ready(function() {
						   
	var hash = window.location.hash.substr(1);
	var href = $('.bg li a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html .container';
			$('.container').load(toLoad)
		}											
	});

	$('.bg li a').click(function(){
								  
		var toLoad = $(this).attr('href')+' .container';
		$('.container').hide('fast',loadContent);
		$('#load').remove();
		$('.mainSectionMobile').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('.container').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('.container').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	});
	
	$('.header-elements a').click(function(){
								  
		var toLoad = $(this).attr('href')+' .container';
		$('.container').hide('fast',loadContent);
		$('#load').remove();
		$('.mainSectionMobile').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		//window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('.container').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('.container').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	});

});