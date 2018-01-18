$(document).ready(function() {
	$('.btn-menu').on('click',function(e){
		e.preventDefault()
		$('.nav-wrapper').toggleClass('open');
	})
	
	$('.select-mobile-only').selectize();

	$('.sub-menu__select').selectize();

	$('.field-select').selectize();

	let newsImgWidth = $('.figure-img').width();
	$('.figure-descr').width(newsImgWidth);

	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox({
			showArrows: true
		});
	});
});

