$('.textField').click(function(){
  $('.loader').addClass('zoomIn');
  $('.logo').fadeOut();
  $('.nav').addClass('navAnimate');
});


$(window).resize(function(){
  $('.nav').css({
    position:'absolute',
    left: ($(window).width() - $('.nav').outerWidth())/2,
    top: ($(window).height() - $('.nav').outerHeight())/2
  });
});

$('.option img').click(function(){
  $('.loader').removeClass('zoomIn');
  $('.loader,.nav').addClass('zoomOut');
});

$(window).resize();
