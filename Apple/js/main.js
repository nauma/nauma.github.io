wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100
  }
);
wow.init();

document.getElementById('open-menu').onclick = function() {document.getElementsByTagName('header')[0].id = 'open';}
document.getElementById('close-menu').onclick = function() {document.getElementsByTagName('header')[0].id = '';}

// local data
window.global = {};
window.global.activePhone = {
  code: 'iphone5s',
  price: 15590,
  rom: '16 ГБ'
};

// Select iPhone
$('.button2.selectPhone').click(function(event){
  window.global.activePhone.code = $(this).attr('class').split(' ')[2];

  var list = $('.block#select').children();

  for (var i = 0; i < list.length; i++) {
    var name = $(list[i]).attr('class').split(' ')[1];

    if(name === window.global.activePhone.code) {
      $(list[i]).css({
        display: 'block'
      });
    } else {
      $(list[i]).css({
        display: 'none'
      });
    }
  }

  window.global.activePhone.color = 'black';
  window.global.activePhone.rom = null;
  $('.image.'+window.global.activePhone.code+'_'+window.global.activePhone.color).css({display: 'block'});

  $('#out_price').text('Выберите модель');
  $('#model_name').text('Выберите модель');
  $('#gift_name').html('&nbsp;');
});

// Select color iPhone
$('.butt.select_color').click(function(event){
  clearColor();
  // set active button
  $(this).addClass('active');

  // get phone colors
  var list = $('.content.'+window.global.activePhone.code+'>.item.phone_color_photos').children();
  // hide all block colors
  for (var i = 0; i < list.length; i++) $(list[i]).css({display: 'none'});
  // get block name color
  var color = $(this).attr('data-color');
  // get active phone name(code)
  var model = window.global.activePhone.code;
  // display phone image
  $('.image.'+model+'_'+color).css({display: 'block'});
  // display phone name
  $('.phone_color_photos > .name').css({display: 'block'});

  // save phone color to local data
  window.global.activePhone.color = color;
});

// Select ROM iPhone
$('.butt.select_rom').click(function(event){
  clearRom();
  // set active button
  $(this).addClass('active');
  // get phone price
  var price = +$(this).attr('data-price');
  // save phone rom on local data
  window.global.activePhone.rom = $.trim($(this).text());
  // save phone price to local data
  window.global.activePhone.price = price;

  var out_price = window.global.activePhone.price + ' руб.';
  var model_name = $('.content.'+window.global.activePhone.code+'>.item.phone_color_photos>h2').text();

  // get phone fake price
  $('.phone_face_price').text((window.global.activePhone.price + 2547 ) + ' руб.');
  // get phone real price
  $('.phone_real_price').text(out_price);
  $('#out_price').text(out_price);
  // get phone name
  $('#model_name').text(model_name);
});

$('.item.select_gift').click(function(event){
  clearGift();
  // set active button
  $(this).addClass('active');
  // save selected gift to local data
  window.global.activePhone.gift = $.trim($(this).text());
  // render selected gift name
  $('#gift_name').text(window.global.activePhone.gift);
});

// old Functions //
var clearColor = function() {
  var list = $('.select.select_color').children();
  for (var i = 0; i < list.length; i++) $(list[i]).removeClass('active');
}

var clearRom = function() {
  var list = $('.select.select_rom').children();
  for (var i = 0; i < list.length; i++) $(list[i]).removeClass('active');
}

var clearGift = function() {
  var list = $('.select.select_gift').children();
  for (var i = 0; i < list.length; i++) $(list[i]).removeClass('active');
}

var closePopup = function() {
  $('#popup').hide();
  $('.alert').hide();
}

$('#close_popup').click(closePopup);

$('#buy_phone_form11').click(function() {
  $('#popup').show();
  $('.alert').show();
  /*$.ajax({
    url: "contact.php",
    method: 'POST',
    data: {
      'username': $('#user_name_form').text(),
      'number': $('#number_form').text(),
      'phone': window.global.activePhone.code,
      'price': window.global.activePhone.price,
      'rom': window.global.activePhone.rom,
      'gift': window.global.activePhone.gift
    },
    success: function(data) {
      var title = data.split('|')[0] === 'ok' ? 'Отлично!' : 'Ошибка!';
      var description = data.split('|')[1]; 
      $('.alert > .title').html(title);
      $('.alert > .description').html(description + '<br><br><button class="button" onclick="closePopup()">Отлично!</button>');
      
    }
  });*/
});

$(document).on('click', 'a[href^="#"]', function(e) {
  // target element id
  var id = $(this).attr('href');

  // target element
  var $id = $(id);
  if ($id.length === 0) {
      return;
  }
  document.getElementsByTagName('header')[0].id = '';

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $id.offset().top;

  // animated top scrolling
  $('body, html').animate({scrollTop: pos});
});