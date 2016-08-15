$('.textField').click(function(){
  $('.loader').addClass('zoomIn');
  $('.logo').fadeOut();
  $('.mainNav').addClass('navLoad');
  $('.arrow').addClass('arrowShow');
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


// set events background-size

// var tubes=$('.tube');
// console.log($(tubes.get(0)).css('background',"url:('../img/events/athletics.svg')"),$(tubes.get(0)).css('background'));
// for(var x=0;x<tubes.length;x++)
// console.log($(tubes.get(x)).css('background','url:(../img/events/'+$(tubes.get(x)).attr('id')+'.svg)'));
  // tubes[x].css()'background-size','16vh 16vh');
