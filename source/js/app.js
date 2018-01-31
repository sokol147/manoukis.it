$(document).ready(function() {
	$('.btn-menu').on('click',function(e){
		e.preventDefault()
		$('.nav-wrapper').toggleClass('open');
	})

	$('.contact__name').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('.archive-filter__year').selectize();

	$('.archive-filter__number').selectize();

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

