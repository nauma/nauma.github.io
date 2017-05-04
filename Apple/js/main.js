document.getElementById('open-menu').onclick = function() {document.getElementsByTagName('header')[0].id = 'open';}
document.getElementById('close-menu').onclick = function() {document.getElementsByTagName('header')[0].id = '';}

window.global = {};
window.global.activePhone = {
  code: 'iphone5s'
};

$('.button2.selectPhone').click(function(event){
  window.global.activePhone.code = $(this).attr('class').split(' ')[2];

  var list = $('#block.select').children();

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
  $('.price_block').css({display: 'none'});
});


$('.butt.select_color').click(function(event){
  clearColor();
  $(this).addClass('active');

  var list = $('.content.'+window.global.activePhone.code+'>.item.phone_color_photos').children();
  console.log(list)
  for (var i = 0; i < list.length; i++) $(list[i]).css({display: 'none'});

  var color = $(this).attr('data-color');
  var model = window.global.activePhone.code;
  $('.image.'+model+'_'+color).css({display: 'block'});
  $('.phone_color_photos > .name').css({display: 'block'});
  window.global.activePhone.color = color;
});

$('.butt.select_rom').click(function(event){
  clearRom();
  $(this).addClass('active');

  var price = +$(this).attr('data-price');
  window.global.activePhone.rom = $.trim($(this).text());
  window.global.activePhone.price = price;


  $('.phone_face_price').text((window.global.activePhone.price + 2547 ) + ' руб.');
  $('.phone_real_price').text(window.global.activePhone.price + ' руб.');
  $('.price_block').css({display: 'block'});
});

$('.item.select_gift').click(function(event){
  clearGift();
  $(this).addClass('active');

  window.global.activePhone.gift = $.trim($(this).text());
});

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