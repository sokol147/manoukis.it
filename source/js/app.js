$(document).ready(function() {
	$('.btn-menu').on('click',function(e){
		e.preventDefault()
		$('.nav-wrapper').toggleClass('open');
	})
	$('.select-mobile-only').selectize();
	let newsImgWidth = $('.figure-img').width();
	$('.figure-descr').width(newsImgWidth);
});