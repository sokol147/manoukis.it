(function() {
    'use strict';
})();

$(document).ready(function() {

	$('.object-select').selectize({});

	$('.head__burger').on('click',function(e){
		e.preventDefault();

		$('.menu__list-wrapper').slideToggle(400);
		$('body').toggleClass('hidden');
	})

	$('.accordion__link').on('click',function(e){
		e.preventDefault();

		var $this = $(this),
				item = $this.closest('.accordion__item'),
				list = $this.closest('.accordion__list'),
				items = list.find('.accordion__item'),
				content = item.find('.accordion__inner'),
				otherContent = list.find('.accordion__inner'),
				duration = 300;


		if(!item.hasClass('active')){
			items.removeClass('active');
			item.addClass('active');

			otherContent.stop(true, true).slideUp(duration);
			content.stop(true, true).slideDown(duration);
		} else{
			content.stop(true, true).slideUp(duration);
			item.stop(true, true).removeClass('active');
		}
	})
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0Jztcbn0pKCk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG5cdCQoJy5vYmplY3Qtc2VsZWN0Jykuc2VsZWN0aXplKHt9KTtcblxuXHQkKCcuaGVhZF9fYnVyZ2VyJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQkKCcubWVudV9fbGlzdC13cmFwcGVyJykuc2xpZGVUb2dnbGUoNDAwKTtcblx0XHQkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xuXHR9KVxuXG5cdCQoJy5hY2NvcmRpb25fX2xpbmsnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdGl0ZW0gPSAkdGhpcy5jbG9zZXN0KCcuYWNjb3JkaW9uX19pdGVtJyksXG5cdFx0XHRcdGxpc3QgPSAkdGhpcy5jbG9zZXN0KCcuYWNjb3JkaW9uX19saXN0JyksXG5cdFx0XHRcdGl0ZW1zID0gbGlzdC5maW5kKCcuYWNjb3JkaW9uX19pdGVtJyksXG5cdFx0XHRcdGNvbnRlbnQgPSBpdGVtLmZpbmQoJy5hY2NvcmRpb25fX2lubmVyJyksXG5cdFx0XHRcdG90aGVyQ29udGVudCA9IGxpc3QuZmluZCgnLmFjY29yZGlvbl9faW5uZXInKSxcblx0XHRcdFx0ZHVyYXRpb24gPSAzMDA7XG5cblxuXHRcdGlmKCFpdGVtLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG5cdFx0XHRpdGVtcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRpdGVtLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0b3RoZXJDb250ZW50LnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVVcChkdXJhdGlvbik7XG5cdFx0XHRjb250ZW50LnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVEb3duKGR1cmF0aW9uKTtcblx0XHR9IGVsc2V7XG5cdFx0XHRjb250ZW50LnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVVcChkdXJhdGlvbik7XG5cdFx0XHRpdGVtLnN0b3AodHJ1ZSwgdHJ1ZSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdH1cblx0fSlcbn0pOyJdfQ==
