$('.textField').click(function(){
  $('.loader').addClass('zoomIn');
  $('.logo').fadeOut();
  $('.mainNav').addClass('navLoad');
  $('.arrow').addClass('arrowShow');
  $('.logo2,.logRegButton').fadeIn();
});


$(window).resize(function(){
  $('.nav').css({
    position:'absolute',
    left: ($(window).width() - $('.nav').outerWidth())/2,
    top: ($(window).height() - $('.nav').outerHeight())/2
  });
});
//
// var football=getElementById('football');
//
// football.setAttribute('x',(window.innerWidth-football.getBBox().width)/2);
// football.setAttribute('y',(window.innerHeight-football.getBBox().height)/2);



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



// puzzle js

$(document).ready(function(){
    $("#Sec").mouseover(function(){
        $("#Events").addClass("right");
        $("#RecnAcc").addClass("right");
        $("#WebMaster").addClass("down");
        $("#Spons").addClass("down");
        $("#Sec_4").addClass("down");
        $("#Sec_2").addClass("down");
        $("#Sec_3").addClass("down");
        $("#Registration").addClass("down");
        $('.conHead').fadeOut(function() {
        	$(this).html('Sports Secretary').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Zalak Shah <br> +91-8239823200 <br> sportssecretary@bits-bosm.org').fadeIn();
        });
    });
    $("#Sec").mouseleave(function(){
        $("#Events").removeClass("right");
        $("#RecnAcc").removeClass("right");
        $("#WebMaster").removeClass("down");
        $("#Spons").removeClass("down");
        $("#Sec_4").removeClass("down");
        $("#Sec_2").removeClass("down");
        $("#Sec_3").removeClass("down");
        $("#Registration").removeClass("down");
        $('.conHead').fadeOut(function() {
        	$(this).html('Contact').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Karthik Maddipoti<br> +91-7240105158<br> pcr@bits-bosm.org<br><br>Move your mouse over any puzzle piece for more details').fadeIn();
        });
    });

    $("#Events").mouseover(function(){
        $("#Sec").addClass("left");
        $("#RecnAcc").addClass("right");
        $("#WebMaster").addClass("down");
        $("#Spons").addClass("down");
        $("#Sec_4").addClass("down");
        $("#Sec_2").addClass("down");
        $("#Sec_3").addClass("down");
        $("#Registration").addClass("down");
        $('.conHead').fadeOut(function() {
        	$(this).html('For Scheduling and Events').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Viraj Gandotra<br> +91-7728834719 <br> controls@bits-bosm.org').fadeIn();
        });
    });
    $("#Events").mouseleave(function(){
        $("#Sec").removeClass("left");
        $("#RecnAcc").removeClass("right");
        $("#WebMaster").removeClass("down");
        $("#Spons").removeClass("down");
        $("#Sec_4").removeClass("down");
        $("#Sec_2").removeClass("down");
        $("#Sec_3").removeClass("down");
        $("#Registration").removeClass("down");
        $('.conHead').fadeOut(function() {
        	$(this).html('Contact').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Karthik Maddipoti<br> +91-7240105158<br> pcr@bits-bosm.org<br><br>Move your mouse over any puzzle piece for more details').fadeIn();
        });
    });

    $("#RecnAcc").mouseover(function(){
        $("#Sec").addClass("left");
        $("#Events").addClass("left");
        $("#WebMaster").addClass("down");
        $("#Spons").addClass("down");
        $("#Sec_4").addClass("down");
        $("#Sec_2").addClass("down");
        $("#Sec_3").addClass("down");
        $("#Registration").addClass("down");
        $('.conHead').fadeOut(function() {
        	$(this).html('For Reception and Accommodation').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Shonhit Trehan<br> +91-8503855851<br> recnacc@bits-bosm.org').fadeIn();
        });

    });
    $("#RecnAcc").mouseleave(function(){
        $("#Sec").removeClass("left");
        $("#Events").removeClass("left");
        $("#WebMaster").removeClass("down");
        $("#Spons").removeClass("down");
        $("#Sec_4").removeClass("down");
        $("#Sec_2").removeClass("down");
        $("#Sec_3").removeClass("down");
        $("#Registration").removeClass("down");
        $('.conHead').fadeOut(function() {
        	$(this).html('Contact').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Karthik Maddipoti<br> +91-7240105158<br> pcr@bits-bosm.org<br><br>Move your mouse over any puzzle piece for more details').fadeIn();
        });
    });

    $("#WebMaster").mouseover(function(){
        $("#Sec").addClass("up");
        $("#Events").addClass("up");
        $("#RecnAcc").addClass("up");
        $("#Spons").addClass("down");
        $("#Sec_4").addClass("right");
        $("#Sec_2").addClass("right");
        $("#Sec_3").addClass("down");
        $("#Registration").addClass("down");
        $('.conHead').fadeOut(function() {
        	$(this).html('For Website Related Queries').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Nikhil Verma<br> +91-9928834365<br>webmaster@bits-bosm.org').fadeIn();
        });
    });
    $("#WebMaster").mouseleave(function(){
        $("#Sec").removeClass("up");
        $("#Events").removeClass("up");
        $("#RecnAcc").removeClass("up");
        $("#Spons").removeClass("down");
        $("#Sec_4").removeClass("right");
        $("#Sec_2").removeClass("right");
        $("#Sec_3").removeClass("down");
        $("#Registration").removeClass("down");
        $('.conHead').fadeOut(function() {
        	$(this).html('Contact').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Karthik Maddipoti<br> +91-7240105158<br> pcr@bits-bosm.org<br><br>Move your mouse over any puzzle piece for more details').fadeIn();
        });
    });

    $("#Sec_4").mouseover(function(){
        $("#Sec").addClass("up");
        $("#Events").addClass("up");
        $("#RecnAcc").addClass("up");
        $("#Spons").addClass("down");
        $("#WebMaster").addClass("left");
        $("#Sec_2").addClass("right");
        $("#Sec_3").addClass("down");
        $("#Registration").addClass("down");
        $('.conHead').fadeOut(function() {
        	$(this).html('Joint Sports Secretary').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Malvika Paliwal<br> +91-7737801664<br> malvika@bits-bosm.org').fadeIn();
        });
    });
    $("#Sec_4").mouseleave(function(){
        $("#Sec").removeClass("up");
        $("#Events").removeClass("up");
        $("#RecnAcc").removeClass("up");
        $("#Spons").removeClass("down");
        $("#WebMaster").removeClass("left");
        $("#Sec_2").removeClass("right");
        $("#Sec_3").removeClass("down");
        $("#Registration").removeClass("down");
        $('.conHead').fadeOut(function() {
        	$(this).html('Contact').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Karthik Maddipoti<br> +91-7240105158<br> pcr@bits-bosm.org<br><br>Move your mouse over any puzzle piece for more details').fadeIn();
        });
    });

    $("#Sec_2").mouseover(function(){
        $("#Sec").addClass("up");
        $("#Events").addClass("up");
        $("#RecnAcc").addClass("up");
        $("#Spons").addClass("down");
        $("#WebMaster").addClass("left");
        $("#Sec_4").addClass("left");
        $("#Sec_3").addClass("down");
        $("#Registration").addClass("down");
        $('.conHead').fadeOut(function() {
        	$(this).html('Joint Sports Secretary').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Aditya Joshi<br> +91-9783099689<br> joshi@bits-bosm.org').fadeIn();
        });
    });
    $("#Sec_2").mouseleave(function(){
        $("#Sec").removeClass("up");
        $("#Events").removeClass("up");
        $("#RecnAcc").removeClass("up");
        $("#Spons").removeClass("down");
        $("#WebMaster").removeClass("left");
        $("#Sec_4").removeClass("left");
        $("#Sec_3").removeClass("down");
        $("#Registration").removeClass("down");
        $('.conHead').fadeOut(function() {
        	$(this).html('Contact').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Karthik Maddipoti<br> +91-7240105158<br> pcr@bits-bosm.org<br><br>Move your mouse over any puzzle piece for more details').fadeIn();
        });
    });

    $("#Spons").mouseover(function(){
        $("#Sec").addClass("up");
        $("#Events").addClass("up");
        $("#RecnAcc").addClass("up");
        $("#Sec_2").addClass("up");
        $("#WebMaster").addClass("up");
        $("#Sec_4").addClass("up");
        $("#Sec_3").addClass("right");
        $("#Registration").addClass("right");
        $('.conHead').fadeOut(function() {
        	$(this).html('For Sponsorship and Marketing').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Arnav Anand<br> +91-9929014797<br> sponsorship@bits-bosm.org').fadeIn();
        });
    });
    $("#Spons").mouseleave(function(){
        $("#Sec").removeClass("up");
        $("#Events").removeClass("up");
        $("#RecnAcc").removeClass("up");
        $("#Sec_2").removeClass("up");
        $("#WebMaster").removeClass("up");
        $("#Sec_4").removeClass("up");
        $("#Sec_3").removeClass("right");
        $("#Registration").removeClass("right");
        $('.conHead').fadeOut(function() {
        	$(this).html('Contact').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Karthik Maddipoti<br> +91-7240105158<br> pcr@bits-bosm.org<br><br>Move your mouse over any puzzle piece for more details').fadeIn();
        });
    });

    $("#Sec_3").mouseover(function(){
        $("#Sec").addClass("up");
        $("#Events").addClass("up");
        $("#RecnAcc").addClass("up");
        $("#Sec_2").addClass("up");
        $("#WebMaster").addClass("up");
        $("#Sec_4").addClass("up");
        $("#Spons").addClass("left");
        $("#Registration").addClass("right");
        $('.conHead').fadeOut(function() {
        	$(this).html('Joint Sports Secretary').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Rushil Handa<br> +91-8107134586<br> rushil@bits-bosm.org').fadeIn();
        });
    });
    $("#Sec_3").mouseleave(function(){
        $("#Sec").removeClass("up");
        $("#Events").removeClass("up");
        $("#RecnAcc").removeClass("up");
        $("#Sec_2").removeClass("up");
        $("#WebMaster").removeClass("up");
        $("#Sec_4").removeClass("up");
        $("#Spons").removeClass("left");
        $("#Registration").removeClass("right");
    });

    $("#Registration").mouseover(function(){
        $("#Sec").addClass("up");
        $("#Events").addClass("up");
        $("#RecnAcc").addClass("up");
        $("#Sec_2").addClass("up");
        $("#WebMaster").addClass("up");
        $("#Sec_4").addClass("up");
        $("#Spons").addClass("left");
        $("#Sec_3").addClass("left");
        $('.conHead').fadeOut(function() {
        	$(this).html('For Correspondence and Registration').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Karthik Maddipoti<br> +91-7240105158<br> pcr@bits-bosm.org').fadeIn();
        });
    });
    $("#Registration").mouseleave(function(){
        $("#Sec").removeClass("up");
        $("#Events").removeClass("up");
        $("#RecnAcc").removeClass("up");
        $("#Sec_2").removeClass("up");
        $("#WebMaster").removeClass("up");
        $("#Sec_4").removeClass("up");
        $("#Spons").removeClass("left");
        $("#Sec_3").removeClass("left");
        $('.conHead').fadeOut(function() {
        	$(this).html('Contact').fadeIn();
        });
        $('.conText').fadeOut(function() {
        	$(this).html('Karthik Maddipoti<br> +91-7240105158<br> pcr@bits-bosm.org<br><br>Move your mouse over any puzzle piece for more details').fadeIn();
        });
    });

// if ($(window).width()<600) {
// 	var puzwid = $('#puzzle').get(0).getBBox().width;
// 	$('#puzzle').attr('x', ($(window).width()-puzwid)/2);
// }

});



// gallery js

$('.flip').mouseover(function(){
  $(this).find('.card').addClass('flipped').mouseleave(function(){
    $(this).removeClass('flipped');
  });
  return false;
});


$(document).ready(function()
{
  setInterval(function(){
    var flip=Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    // console.log(flip);

    var rantile1=$('.flexrow div:nth-child('+flip+') div');
    // console.log(rantile);
    rantile1.addClass('flipped');
    setTimeout(function(){
      rantile1.removeClass('flipped');
    },3000);

    do {
    var flip2=Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    } while (flip===flip2);
    var rantile2=$('.flexrow div:nth-child('+flip2+') div');
    // console.log(rantile);
    rantile2.addClass('flipped');
    setTimeout(function(){
      rantile2.removeClass('flipped');
    },3000);
    do {
    var flip3=Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    } while (flip===flip2 && flip2===flip3);
    var rantile3=$('.flexrow div:nth-child('+flip3+') div');
    // console.log(rantile);
    rantile3.addClass('flipped');
    setTimeout(function(){
      rantile3.removeClass('flipped');
    },3000);
  },4000);
});

function lighten (imgdiv) {
  var imgurl = $(imgdiv).find('.back').css('background-image');
  var cleanup = /\"|\'|\)/g;
  imgurl = imgurl.split('/').pop().replace(cleanup, '');
  $('.lightbox img').attr('src', 'img/gallery/'+imgurl);
  $('.lightbox').css('display','flex').hide().fadeIn('slow');
}

// -------------------    slot machine -------------


setInterval(function () {
	$('#Lights').fadeOut('fast');
	setTimeout(function () {
		 $('#Lights').fadeIn('fast');
		}, 500);
}, 1000);


function leverpull () {
$('#stick').animate({  borderSpacing: 90 }, {
    step: function(now,fx) {
      $(this).css('transform','rotateX('+now+'deg)');
    },
    duration:600
},'linear');
$('#bulb').animate({  borderSpacing: 280 }, {
    step: function(now,fx) {
      $(this).css('transform','translateY('+now+'%)');
    },
    duration:600
},'linear');

setTimeout(function () {
	// $('#stick').css('transform-origin', 'bottom');
	$('#stick').animate({  borderSpacing: 0 }, {
    step: function(now,fx) {
      $(this).css('transform','rotateX('+now+'deg)');
    },
    duration:600
},'linear');
$('#bulb').animate({  borderSpacing: 0 }, {
    step: function(now,fx) {
      $(this).css('transform','translateY('+now+'%)');
    },
    duration:600
},'linear');
}, 600);
};

$( document ).ready(function() {
    randomspons();
});

// var i=1;

// setInterval(function () {
// 	i++;
// 	var blink = $('.blink:nth-child('+i+')');
// 	console.log(i);
// 	console.log(blink);
// 		blink.css('display','none');
// 	setTimeout(function () {
// 		blink.css('display','block');
// 	}, 1000);
// 	if (i===34)
// 		i=1;
// }, 1500);

// $('#lever').click(function() {
// 	$('#stick').animate({transform: 'rotateX(-100deg)', transform-origin: 'bottom'}, '600');
// 	$('#ball').animate({transform: 'translateY(300%)'}, '600');
// });
$('#lever').click(function(){
	leverpull();
	randomspons();
}
);

setInterval(function () {
    leverpull();
    randomspons();
}, 3000);

var randomspons;

(function( $ ) {
	$.fn.animateBgPosition = function( x, y, speed ) {
    	var pos = this.css( "background-position" ).split( " " );


		this.x = parseInt( pos[0], 10 ) || 0;
		this.y = parseInt( pos[1], 10 ) || 0;

    	$.Animation( this, {
        	x: x,
			y: y
      	}, {
        	duration: speed
      	}).progress( function( e ) {
          	this.css( "background-position", e.tweens[0].now + "px " + e.tweens[1].now + "px" );
    	});

		return this;
	};



	randomspons = function () {
	for (i=1; i<5; i++){
		ranNum = Math.floor(Math.random() * (19 - 0 + 0));
		// console.log(ranNum);
		// console.log($('.spons-out:nth-child('+ i +')'));
		// var regmat = /spons[0-9]+/;
		// console.log($('.spons-tile:nth-child('+ i +')').attr('class').match(regmat)[0]);
		// $('.spons-tile:nth-child('+ i +')').removeClass($('.spons-tile:nth-child('+ i +')').attr('class').match(regmat)[0]).addClass('spons'+ranNum);
		// console.log($('.s'+i));
		// $('.s'+i).animate(
		// 	{background-position : '0 ' + spon[ranNum]+'vw'},
		// 	{duration:500});

		var ypos = spon[ranNum]*$(window).width()/100;
		$('.s'+i).animateBgPosition( 0, ypos, 1000 );
	}

}

	$('#but1').click(function() {
		$('.s1').animateBgPosition( 0, spon[0]*$(window).width()/100, 1000 );
		$('.s2').animateBgPosition( 0, spon[1]*$(window).width()/100, 1000 );
		$('.s3').animateBgPosition( 0, spon[2]*$(window).width()/100, 1000 );
		$('.s4').animateBgPosition( 0, spon[3]*$(window).width()/100, 1000 );
	});

	$('#but2').click(function() {
		$('.s1').animateBgPosition( 0, spon[4]*$(window).width()/100, 1000 );
		$('.s2').animateBgPosition( 0, spon[5]*$(window).width()/100, 1000 );
		$('.s3').animateBgPosition( 0, spon[6]*$(window).width()/100, 1000 );
		$('.s4').animateBgPosition( 0, spon[7]*$(window).width()/100, 1000 );
	});

	$('#but3').click(function() {
		$('.s1').animateBgPosition( 0, spon[8]*$(window).width()/100, 1000 );
		$('.s2').animateBgPosition( 0, spon[9]*$(window).width()/100, 1000 );
		$('.s3').animateBgPosition( 0, spon[10]*$(window).width()/100, 1000 );
		$('.s4').animateBgPosition( 0, spon[11]*$(window).width()/100, 1000 );
	});

	$('#but4').click(function() {
		$('.s1').animateBgPosition( 0, spon[12]*$(window).width()/100, 1000 );
		$('.s2').animateBgPosition( 0, spon[13]*$(window).width()/100, 1000 );
		$('.s3').animateBgPosition( 0, spon[14]*$(window).width()/100, 1000 );
		$('.s4').animateBgPosition( 0, spon[15]*$(window).width()/100, 1000 );
	});

	$('#but5').click(function() {
		$('.s1').animateBgPosition( 0, spon[16]*$(window).width()/100, 1000 );
		$('.s2').animateBgPosition( 0, spon[17]*$(window).width()/100, 1000 );
		$('.s3').animateBgPosition( 0, spon[18]*$(window).width()/100, 1000 );
		$('.s4').animateBgPosition( 0, spon[19]*$(window).width()/100, 1000 );
	});

})( jQuery );


var spon = [0,
 -275 / 12.8,
 -550 / 12.8,
 -825 / 12.8,
 -1100 / 12.8,
 -1375 / 12.8,
 -1650 / 12.8,
 -1925 / 12.8,
 -2200 / 12.8,
  -2475 / 12.8,
  -2750 / 12.8,
  -3025 / 12.8,
  -3300 / 12.8,
  -3575 / 12.8,
  -3850 / 12.8,
  -4125 / 12.8,
  -4400 / 12.8,
  -4675 / 12.8,
  -4950 / 12.8,
  -5225 / 12.8];



// var change = $('.sprite')
// change.each(function(index, el) {
// 	console.log(el);
// 	var pos = $(el).css('background-position');
// 	console.log(pos);
// });


$('.tube').mouseenter(function(){
  var type=$(this).attr('class').split(' ').pop();
  $(this).find('div').html(type);
  $(this).find('div').fadeIn();
});

$('.tube').mouseleave(function(){
  // $(this).find('div').html('hello');
  $(this).find('div').fadeOut();
});



// $('#ballWrap').hide();


// console.log($('.cd-main-content').css('z-index'));
$('#ballWrap').click(function(eve){
  $('#overlay').fadeIn();
  $('#ballWrap').hide();
  // $('#pt-main').css('z-index','1');
  $('.mainNav').show();
  $('#bc').delay(100).click();
});

$('.ball').click(function(){
  $('#overlay').fadeOut();
  setTimeout(function(){
    $('#ballWrap').show();
    $('.mainNav').hide();
    // $('#pt-main').css('z-index','3');
    // $('.mainNav').css('z-index','1');

  },2000);
});

var content={


}

$('.tube').click(function(){
  var type=$(this).attr('class').split(' ').pop();
  var sport=$(this).attr('type').split(' ');
  var data="<h1>Coming Soon</h1>";
  $('.cd-modal-content').html('');
  var url="./2016/events/";
  sport.map(function(ele){
    console.log(url+ele+'/');
    $.ajax({
      type:'GET',
      url:url+ele+'/',
      crossDomain:true,
      success:function(response){
        data='<h1 style="text-transform:capitalize">'+type+'</h1>';
        data+=response.content.replace(/div/g,'p');
        $('.cd-modal-content').html(data);
        // data=response.content.replace(/div/g,'p');

      }
    });
});



});
