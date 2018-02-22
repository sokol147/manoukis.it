$(document).ready(function() {
	$('.btn-menu').on('click',function(e){
		e.preventDefault();
		$('.nav-wrapper').toggleClass('open');
	})
	// catalog tabs
	$('.catalog-control__link').on('click',function(e){
		e.preventDefault();

		var item = $(this).closest('.catalog-control__item'),
				contentItem = $('.catalog-content__item'),
				itemPosition = item.index();

		contentItem.eq(itemPosition)
			.add(item)
			.addClass('active')
			.siblings()
			.removeClass('active');
	})
	// quantity dropdowns
	$('.quantity__dropdown').selectize();

	// vote widget
	$('.btn-appearance').on('click', function(e){
		e.preventDefault();
		$('.appearance__question-wrapper').addClass('voted');
		$('.btn-appearance').fadeOut(100);
		$('.answer__input').fadeOut(100);
		$('.total__votes').fadeIn(100);
		$('.answer__result').fadeIn(100);
	});

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

