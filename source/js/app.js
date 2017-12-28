$(document).ready(function() {
	$('.btn-menu').on('click',function(e){
		e.preventDefault()
		$('.nav-wrapper').toggleClass('open');
	})
	$('.select-mobile-only').selectize();
});