window.global.active = 0;
window.global.blocks = 2;

var reRender = function(type) {
  var reviews = $('#reviews > .content > .reviews').children();

  if(type == 'left' && window.global.active > 0) {
    window.global.active -= 1;
  }

  if(type == 'right' && window.global.active < reviews.length-1) {
    window.global.active += 1;
  }

  for (var i = 0; i < reviews.length; i++) {
    var review = reviews[i];
    $(review).css({display: 'display'});
  }

  for (var i = 0; i < window.global.active; i++) {
    var review = reviews[i];
    $(review).css({display: 'none'});
  }
}

$('#reviews > .content > .left.item').click(function() {
  reRender("left")
});

$('#reviews > .content > .right.item').click(function() {
  reRender("right")
});