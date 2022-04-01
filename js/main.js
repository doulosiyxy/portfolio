var pathname = window.location.href;
//presets
$('.title-wrapper').delay(3000).fadeOut(1000);
$('.jumbotron').delay(4000).fadeOut(1000);
$('#home-nav').delay(5000).animate({"margin-top": "10px"}, 500);
$('#home-footer').delay(5000).animate({"margin-bottom": "0px"}, 500);
$('.one').delay(5500).fadeTo(1500, 0.7);
$('.two').delay(5700).fadeTo(1500, 0.7);
$('.three').delay(5900).fadeTo(1500, 0.7);
$('.four').delay(6100).fadeTo(1500, 0.7);
$('#logo-icon').animate({height: 220}, 200);
$('#contact-text').css('padding-bottom','2000px');


/*
  $('.project-figure').on('mouseover', function() {
    $(this).css("opacity", 1).on('mouseleave', function() {
      $(this).css("opacity", 0.7);
    });
  });
*/


//hyperlinks
$('.linkedin').on('click', function() {
  window.open('https://linkedin.com/in/jamesrcrooke', '_blank');
});
$('.github').on('click', function() {
  window.open('https://github.com/doulosiyxy', '_blank');
});
$('.titles').on('click', () => {
  window.location.href='index.html';
  });
$('.one').on('click', function() {
  window.open('http://projecttimothyuganda.github.io/ptu', '_blank');
});
$('.two').on('click', function() {
  window.open('https://doulosiyxy.github.io/theexegesist', '_blank');
});
$('.three').on('click', function() {
  window.open('http://ornis.co.uk', '_blank');
});
$('.four').on('click', function() {
  window.open('http://www.wycliffechurch.org.uk', '_blank');
});
$('.projects-link').on('click', function() {
  window.location.href="index.html"
});

$('#contact-nav').delay(200).animate({"opacity": 1}, 400);
$('#about-nav').delay(1500).animate({"opacity": 1}, 400);
$('#contact-footer').delay(200).animate({"opacity":1}, 400);
$('#about-footer').delay(1500).animate({"opacity":1}, 400);

$('#about-img-wrap').fadeTo(1000, 1);
$('#skill-btn').delay(1500).animate({"left": "-35px"}, 400);

var number = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];
var i = 0;

function titleLoop() {
  setTimeout(function () {
	//var word = document.getElementById(number[i]);
	$('#about-title span').eq(i).fadeTo(2500, 1);
	i++;
	var stop = number.length;
	if ( i < stop) {
	  titleLoop();
	}
  }, 20)
}

setInterval(titleLoop(), 800);

//var numberTwo = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];
var x = 0;

function titleFade() {
  setTimeout(function () {
  $('#about-title span').eq(x).fadeTo(500, 0);
  $('.skl').delay(220).eq(x).fadeTo(1900, 1);
  x++;
  //var stop = 14;
  if ( x < 14) {
	titleFade();
	}
  }, 1)
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  $('#contact-text').css('padding-bottom','2000px');


} else if ($(window).height() > 767 ) {
  $('#skill-btn').on('click', function() {
    $('#about-title-wrap').delay(840).animate({"top": "0"}, 2300);
  });
} else {
  $('#skill-btn').on('click', function() {
    $('#about-title-wrap').delay(840).animate({"top": "0"}, 2300);
  });
}

// Digital Clock
$(document).ready(function() {
  //copyright year
  function displayYear() {
    var currentTime = new Date();
   	var year = currentTime.getYear();
    var copyrightYear = document.getElementById('copyright');
   	copyrightYear.innerText = "© " + (year + 1900) + " James Crooke.";
  }
  $(document).ready(function() {
	displayYear();
  });

// gradient timing
var colors = new Array(

  [194,194,194],
  [0,0,0,],
  [255,255,255],
  [47,144,235],
  [105,95,95],
  [245,245,245]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];
//transition speed
var gradientSpeed = 0.002;

function updateGradient() {
  if ( $===undefined ) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";

  $('.gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

  step += gradientSpeed;
  if ( step >= 1 ) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}
setInterval(updateGradient,15);


	// hyperlink
  $('.logo').on('click', () => {
    window.location.href='index.html';
  });
});
