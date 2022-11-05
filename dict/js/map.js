var i=0;
	$(".contacts__menu__item a").each(function(){
  length
	i++;
	$(this).attr("href","#map-"+i);
});

var i=0;
	$(".contacts__map__item").each(function(){
  length
	i++;
	$(this).attr("id","map-"+i);
});


// directions_in id end
$('.contacts__map .contacts__map__item').hide();
$('.contacts__map .contacts__map__item:first').show();
$('.contacts__menu__item a:first').addClass('contacts__map__active');

// Change tab class and display content
$('.contacts__menu__item a').on('click', function(event){
  event.preventDefault();
  $('.contacts__menu__item li').removeClass('contacts__map__active');
  $(this).parent().addClass('contacts__map__active');
  $('.contacts__map .contacts__map__item').hide();
  $($(this).attr('href')).show();
});


// ------------------------------------------------------------------


var i=0;
	$(".contacts__menu__list li").each(function(){
  length
	i++;
	$(this).attr("href","#contacts-"+i);
});

var i=0;
	$(".contacts__map__contacts__item").each(function(){
  length
	i++;
	$(this).attr("id","contacts-"+i);
});

// directions_in id end
$('.contacts__map__contacts .contacts__map__contacts__item').hide();
$('.contacts__map__contacts .contacts__map__contacts__item:first').show();
$('.contacts__menu__list li:first').addClass('contacts__map__active');

// Change tab class and display content
$('.contacts__menu__list li').on('click', function(event){
  event.preventDefault();
  $('.contacts__menu__item li').removeClass('contacts__map__contacts__active');
  $(this).parent().addClass('contacts__map__contacts__active');
  $('.contacts__map__contacts .contacts__map__contacts__item').hide();
  $($(this).attr('href')).show();
});

// ------------------------------------------------------------------


$(document).ready(function(){
  $('.contacts__menu__list li').click(function(){
    $('.header__item').fadeTo(500, 1)
    $('.contacts__map__contacts .contacts__map__contacts__item').css('z-index','10').css('opacity','1').css('right','0')
  })
});

$(document).ready(function(){
  $('.contacts__map__contacts__none').click(function(){
    $('.header__item').fadeTo(500, 1)
    $('.contacts__map__contacts .contacts__map__contacts__item').css('z-index','-10').css('opacity','0').css('right','-100%')
  })
});

$(document).ready(function(){
  $('.menu_none').click(function(){
    $('.header__item').fadeTo(500, 1)
    $('.contacts__map__contacts .contacts__map__contacts__item').css('z-index','-10').css('opacity','0').css('right','-100%')
  })
});