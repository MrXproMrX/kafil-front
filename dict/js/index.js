$(document).ready(function(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, options);
    });
      
      // Or with jQuery
      
    $('.dropdown-trigger').dropdown();

// -------------------------------===========-------------------------------

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.modal').modal();
});

// -------------------------------===========-------------------------------

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery

$(document).ready(function(){
  $('.sidenav').sidenav();
});

});

// -------------------------------===========-------------------------------

$(document).ready(function(){
  (function($){
    $('.numbers').each(function(){
        $(this).prop('Counter',0).animate({
            Counter:$(this).text()
        },
        {
            duration:9000,
            easing:"swing",
            step:function(now){
                $(this).text(Math.ceil(now));
            }  
       });
    })
  })(jQuery);
});

// -------------------------------===========-------------------------------

const buttons = document.querySelectorAll('.header__bottom__link');
buttons.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('active');
    
    buttons.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

const buttons_1 = document.querySelectorAll('.facts__title__h3');
buttons_1.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('active');
    
    buttons_1.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

const buttons_2 = document.querySelectorAll('.Jobs__title__h3');
buttons_2.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('active');
    
    buttons_2.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

const buttons_3 = document.querySelectorAll('.menu_none');
buttons_3.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('active');
    
    buttons_3.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

$(function(){
  let Catalog_max__pro__link = document.querySelectorAll('.fotogalereya_in__item2');

  for(let i = 0; i<Catalog_max__pro__link.length; i++){
      Catalog_max__pro__link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__link.length;j++){
              Catalog_max__pro__link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

//-----===========----------------------------------------------------------

var i=0;
	$(".management__menu__link").each(function(){
  length
	i++;
	$(this).attr("href","#mrx-"+i);
});

var i=0;
	$(".management__item").each(function(){
  length
	i++;
	$(this).attr("id","mrx-"+i);
});


// directions_in id end
$('.management__list .management__item').hide();
$('.management__list .management__item:first').show();
$('.management__menu li:first').addClass('active');

// Change tab class and display content
$('.management__menu a').on('click', function(event){
  event.preventDefault();
  $('.management__menu li').removeClass('active');
  $(this).parent().addClass('active');
  $('.management__list .management__item').hide();
  $($(this).attr('href')).show();
});


// -----===========----------------------------------------------------------

//-----===========----------------------------------------------------------

var i=0;
	$(".cabinet_worker__menu li h4").each(function(){
  length
	i++;
	$(this).attr("href","#mixsin-"+i);
});

var i=0;
	$(".cabinet_worker__item__list").each(function(){
  length
	i++;
	$(this).attr("id","mixsin-"+i);
});


// directions_in id end
$('.cabinet_worker__cart__list .cabinet_worker__item__list').hide();
$('.cabinet_worker__cart__list .cabinet_worker__item__list:first').show();
$('.cabinet_worker__menu li:first').addClass('active');

// Change tab class and display content
$('.cabinet_worker__menu h4').on('click', function(event){
  event.preventDefault();
  $('.cabinet_worker__menu li').removeClass('active');
  $(this).parent().addClass('active');
  $('.cabinet_worker__cart__list .cabinet_worker__item__list').hide();
  $($(this).attr('href')).show();
});

$(function(){
  let Catalog_max__pro__ul_link = document.querySelectorAll('.cabinet_worker__menu li');

  for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
      Catalog_max__pro__ul_link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
              Catalog_max__pro__ul_link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

$(document).ready(function(){
  $('.cabinet_worker__menu li a').click(function(){
    $('.cabinet_worker__item__list').fadeTo(500, 1)
    $('.cabinet_worker__item__list').css('display','none');
  })
});


// directions_in id end
$('.cabinet_worker__list .cabinet_worker__list__item_id').hide();
$('.cabinet_worker__list .cabinet_worker__list__item_id:first').show();
$('.cabinet_worker__item__menu li:first').addClass('active');

// Change tab class and display content
$('.cabinet_worker__item__menu a').on('click', function(event){
  event.preventDefault();
  $('.cabinet_worker__item__menu li').removeClass('active');
  $(this).parent().addClass('active');
  $('.cabinet_worker__list .cabinet_worker__list__item_id').hide();
  $($(this).attr('data-id')).show();
});

// -----===========----------------------------------------------------------


// news start

$(function(){
  let Catalog_max__pro__ul_link = document.querySelectorAll('.news_pagination__page');

  for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
      Catalog_max__pro__ul_link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
              Catalog_max__pro__ul_link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

// news end

// -----===========----------------------------------------------------------


const welcom = document.getElementById('technicalId');

setTimeout(()=>{
  addStylesTo(welcom)
},8000)

function addStylesTo(node){
  node.style.display = 'none'
}

$(document).ready(function(){
  $('.technical_work__botton').click(function(){
    $('.technical_work').fadeTo(500, 1)
    $('.technical_work').css('display','none');
  })
});