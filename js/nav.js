
// football.setAttribute('y',(window.innerHeight-football.getBBox().height)/2);

var finalBall=document.getElementById('finalBall');
var football=document.getElementById('football');
// finalBall.style.opacity='1';
finalBall.setAttribute('d',"m "+(-finalBall.getBBox().x)+" "+(-finalBall.getBBox().y)+" c 3.43057,2.94164 6.18358,6.67654 7.96874,10.82965 3.13001,7.18939 3.23492,15.62613 0.29887,22.89561 -3.32397,8.44402 -10.7211,15.15904 -19.46321,17.61344 -7.20759,2.09313 -15.2087,1.34849 -21.87679,-2.10977 -5.55594,-2.83309 -10.17874,-7.45225 -13.00182,-13.01443 -4.29741,-8.25397 -4.34421,-18.54126 -0.16354,-26.84917 2.19882,-4.43625 5.52201,-8.30908 9.57385,-11.15322 6.76741,-4.84054 15.62067,-6.5698 23.7237,-4.72107 4.76814,1.03779 9.25223,3.31928 12.9402,6.50896 m -24.12098,-3.66405 c 0.83005,0.85579 1.62981,1.74382 2.48456,2.57478 3.81953,0.5928 7.63633,1.21433 11.45742,1.78334 1.09213,-0.51116 2.14643,-1.10045 3.23037,-1.62903 -5.19454,-2.82646 -11.35901,-3.74932 -17.17235,-2.72909 m 28.31062,13.93197 c -0.52117,0.98267 -1.00555,1.9838 -1.5249,2.96634 -0.16172,0.21892 -0.0468,0.48815 -0.0192,0.72904 0.56446,3.62362 1.13256,7.24737 1.69702,10.87086 0.73268,0.88348 1.66192,1.6289 2.47455,2.4544 1.04962,-5.75263 0.11206,-11.85275 -2.62743,-17.02064 m -14.82247,-8.32364 c -3.65131,-0.58097 -7.30522,-1.14998 -10.96017,-1.71444 -1.43585,2.82035 -2.86793,5.64421 -4.26816,8.48185 0.74828,2.03528 1.50579,4.06848 2.26785,6.09921 3.17421,0.49725 6.34634,1.00932 9.52237,1.49552 1.66192,-1.62708 3.29823,-3.28172 4.93896,-4.92986 -0.49075,-3.14561 -0.98709,-6.29135 -1.50085,-9.43228 m 11.85171,11.8534 c -3.14015,-0.51831 -6.28498,-1.01192 -9.43137,-1.49643 -1.65386,1.62981 -3.29095,3.27977 -4.92999,4.9244 0.48815,3.18136 1.001,6.3583 1.5093,9.53615 2.04633,0.73359 4.06575,1.54323 6.12118,2.25485 2.82113,-1.41284 5.64148,-2.83023 8.45065,-4.26439 -0.56888,-3.65196 -1.12697,-7.306 -1.71977,-10.95458 m -37.38371,-5.51343 c -1.76852,3.09231 -3.49947,6.20763 -5.23692,9.31658 2.25394,2.26499 4.49423,4.54376 6.7665,6.78873 1.81545,-0.1443 3.63376,-0.24557 5.44843,-0.40001 1.47446,-2.87534 2.94242,-5.75523 4.39764,-8.64084 -0.74828,-2.015 -1.5444,-4.01336 -2.30906,-6.0229 -3.01704,-0.38246 -6.045,-0.69134 -9.06659,-1.04156 m 23.95731,19.66068 c -2.87547,1.45795 -5.75068,2.91954 -8.61978,4.39114 -0.17004,1.81364 -0.25012,3.63481 -0.4082,5.44922 2.21533,2.28891 4.4538,4.55689 6.69669,6.81811 3.27158,-1.63722 6.53393,-3.28913 9.79719,-4.94195 -0.44759,-3.12637 -0.92755,-6.24989 -1.39815,-9.37353 -2.01305,-0.80145 -4.03624,-1.58743 -6.06775,-2.34299 m -25.64133,-24.68154 c -4.3407,4.08876 -7.23801,9.67772 -8.05532,15.5857 1.07913,-0.55887 2.18582,-1.07536 3.24584,-1.66465 1.81272,-3.24493 3.66314,-6.47413 5.43907,-9.73752 -0.19292,-1.39737 -0.41444,-2.79006 -0.62959,-4.18353 m 33.9144,37.45522 c -3.31292,1.64918 -6.61115,3.3332 -9.91952,4.99239 -0.1508,0.0828 -0.34008,0.14157 -0.41093,0.31694 -0.52221,1.02414 -1.04884,2.04529 -1.57105,3.06943 5.86118,-0.79248 11.42895,-3.60451 15.52694,-7.87163 -1.20692,-0.17524 -2.41202,-0.38389 -3.62544,-0.50713 m -25.09338,-15.43218 c -1.82104,0.11674 -3.64208,0.23153 -5.46026,0.38233 -1.45145,2.82295 -2.89926,5.64785 -4.34161,8.4764 2.58388,2.59129 5.14046,5.21209 7.7519,7.77569 2.83218,-1.42389 5.66163,-2.85246 8.48822,-4.28727 0.16094,-1.82104 0.32994,-3.64117 0.46046,-5.46482 -2.30425,-2.28969 -4.58406,-4.60434 -6.89871,-6.88233 m -14.46692,9.01967 c 2.56828,5.29841 6.94382,9.685 12.22117,12.29111 -0.19292,-1.20055 -0.32084,-2.42034 -0.58175,-3.60256 -2.69165,-2.70257 -5.36939,-5.42256 -8.08119,-8.10303 -1.17663,-0.24076 -2.37159,-0.39533 -3.55823,-0.58552 z");
var cx=finalBall.getBBox().x+finalBall.getBBox().width/2;
var cy=finalBall.getBBox().y+finalBall.getBBox().height/2;
spin.setAttribute('from','0 '+cx+' '+cy);
spin.setAttribute('to','360 '+cx+' '+cy);

var ballPlace=[];
var balls,pathMove;
function drawPath(){
balls=Array.prototype.slice.call( document.getElementsByClassName('ball'));
var path=document.getElementById('curve');
var hex=document.getElementById('navInner');
var hx=hex.getBBox().width;
var hy=hex.getBBox().height;
hex.setAttribute('x',5+(window.innerWidth-hx)/2);
hex.setAttribute('y',(window.innerHeight-hy)/2);

var footW=(window.innerWidth-football.getBBox().width)/2;
var footH=(window.innerHeight-football.getBBox().height)/2

football.setAttribute('x',footW);
football.setAttribute('y',footH);

path.setAttribute('d',"M"+(window.innerWidth-finalBall.getBBox().width)/2+" "+(window.innerHeight-finalBall.getBBox().height)/2+" A"+window.innerWidth/2+" "+((window.innerHeight/2)-50)+" 0 0 1 40 "+(window.innerHeight-100));
balls.map(function(ele){
  var eleX=ele.getBBox().x+(ele.getBBox().width/2);
  var eleY=ele.getBBox().y+(ele.getBBox().height/2);
  ballPlace.push({
    ele:ele,
    x:eleX,
    y:eleY
  });
});



}
drawPath();
window.onresize=drawPath;


function move(type='off'){

  if(flag==true&&type=='off'){
    flag=false;
  }
  balls.map(function(ele){
    moveSingleBall(ele,type);
  });
}
var path=document.getElementById('pathMove');

function moveSingleBall(ele,type){

  var animate=ele.childNodes[ele.childNodes.length-2];
  var nav=document.getElementById('navInner').getBBox();
  if(type=='off'){
    $('.arrow').removeClass('arrowShow');
    $('.logo2,.logRegButton,.marker').fadeOut();
    var eleX=ele.getBBox().x+(ele.getBBox().width/2);
    var eleY=ele.getBBox().y+(ele.getBBox().height/2);
    ballPlace.push({
      ele:ele,
      x:(nav.width/2)-eleX,
      y:(nav.height/2)-eleY
    });
    animate.setAttribute('to',((nav.width/2)-eleX)+" "+((nav.height/2)-eleY));
    animate.setAttribute('from','0 0');
    animate.setAttribute('fill','freeze');
    animate.beginElement();
  }
  else if(type=='on'){
    $('.arrow').addClass('arrowShow');
    $('.logo2,.logRegButton,.marker').fadeIn();
    $('.marker').css('display','flex');

      ele.style.display='block';
    ballPlace.map(function(arrEle){
      if(arrEle.ele==ele){
        animate.setAttribute('from',arrEle.x+' '+arrEle.y);
        animate.setAttribute('to','0 0');
        animate.setAttribute('fill','freeze');

        animate.beginElement();
      }
    });
  }


}


function moveCenterBall(){

  path.setAttribute('to',(-window.innerWidth/2+50)+" "+(window.innerHeight/2-50));
  path.setAttribute('from','0 0');
}

finalBall.parentNode.setAttribute('x',(window.innerWidth-finalBall.getBBox().width)/2);
finalBall.parentNode.setAttribute('y',(window.innerHeight-finalBall.getBBox().height)/2);

var flag=false;
function end(ele){
  // console.log(ele);
    ele.style.display='none';
    finalBall.style.opacity='1';

  if($('#bc').hasClass('menuOn')&&flag==false){
    spin.beginElement();
    $('finalBall').addClass('noShow');
    $('#bc').removeClass('menuOn')
    $('#bc').addClass('menuOff');
  }

  if(flag==true){
    $('finalBall').removeClass('noClick');

    ele.style.display='block';
    // finalBall.style.opacity='0';
  }


}


$('#bc').click(function(){
  $('#finalBall').addClass('noClick');
  $('.logo2,.logRegButton,.marker').fadeIn();
  $('.marker').css('display','flex');
  flag=true;
  $('.arrow').addClass('arrowShow');
    $(this).removeClass('menuOff');
    $(this).addClass('menuOn');
      spin.beginElement();
      finalBall.style.opacity='1';
      setTimeout(function(){
        // console.log($(this).get(0));
        move('on');

      },1490);

});

$('.ball:not(.noShow)').mouseenter(function(){
    $(this).prev().delay(300).fadeIn(300);
    // $(this).prev().prev().fadeIn();
    var animate=$(this).prev().prev().get(0).childNodes[1];
    var type=$(this).attr('page');


    animate.setAttribute('from','0');
    animate.setAttribute('to','106.32898');
    animate.setAttribute('dur','0.5s');
    animate.beginElement();

    if(type=='5'||type=='6'){

    var boxW=$('#navInner').get(0).getBBox().width;
    var boxH=$('#navInner').get(0).getBBox().height;
    var animate=$(this).prev().prev().get(0).childNodes[3];
    animate.setAttribute('from',(type=='6')?boxW-94:boxW-30);
    animate.setAttribute('to',(type=='6')?'185.85605':'240.12735');
    animate.setAttribute('dur','0.5s');
    animate.beginElement();
  }
});



var f3=false;
$('.ball:not(.noShow)').click(function(){
  var animate=$(this).prev().prev().get(0).childNodes[1];
  var type1=$(this).attr('page');

  animate.setAttribute('to','0');
  animate.setAttribute('from','106.32898');
  animate.setAttribute('dur','0.1s');
  // animate.setAttribute('dur','0.5s');
  animate.beginElement();

  if(type1=='5'||type1=='6'){
  var boxW=$('#navInner').get(0).getBBox().width;
  var boxH=$('#navInner').get(0).getBBox().height;
  var animate2=$(this).prev().prev().get(0).childNodes[3];
  animate2.setAttribute('to',(type=='6')?boxW-94:boxW-30);
  animate2.setAttribute('from',(type1=='6')?'185.85605':'240.12735');
  animate2.setAttribute('dur','0.1s');
  animate2.beginElement();
  }
  $(this).prev().fadeOut(10);
})

$('.ball:not(.noShow)').mouseleave(function(){


    $(this).prev().fadeOut(200);
    // $(this).prev().prev().fadeOut();

    var animate=$(this).prev().prev().get(0).childNodes[1];
    var type=$(this).attr('page');

    animate.setAttribute('to','0');
    animate.setAttribute('from','106.32898');
    animate.setAttribute('dur','0.5s');
    animate.beginElement();

    if(type=='5'||type=='6'){
    var boxW=$('#navInner').get(0).getBBox().width;
    var boxH=$('#navInner').get(0).getBBox().height;
    var animate=$(this).prev().prev().get(0).childNodes[3];
    animate.setAttribute('to',(type=='6')?boxW-94:boxW-30);
    animate.setAttribute('from',(type=='6')?'185.85605':'240.12735');
    animate.setAttribute('dur','0.5s');
    animate.beginElement();

}
    // console.log($(this).prev().prev().get());

});

// function hover(ele,type){
//   // console.log(type);
//   if(type=='over'){
//     // console.log($(ele).prev());
//     $(ele).prev('text').fadeIn();
//   }
//   else{
//       $(ele).prev().fadeOut();
//   }
// }
