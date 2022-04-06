var pathname = window.location.href;
//presets
$('.title-wrapper').delay(3000).fadeOut(1000);
$('.jumbotron').delay(4000).fadeOut(1000);
$('#home-nav').delay(0).animate({"margin-top": "10px"}, 500);
$('#home-footer').delay(0).animate({"margin-bottom": "0px"}, 500);
//$('.one').delay(5500).fadeTo(1500, 0.7);
//$('.two').delay(5700).fadeTo(1500, 0.7);
//$('.three').delay(5900).fadeTo(1500, 0.7);
//$('.four').delay(6100).fadeTo(1500, 0.7);
$('#logo-icon').animate({height: 220}, 200);
//$('#contact-text').css('padding-bottom','2000px');
$('.overlay-sunrise').delay(250).fadeTo(350, 0);


$('.overlay-sunrise').on('click', function() {
  $(this).css('display', 'none');
});




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
  window.location.href='aana.html';
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

/*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  $('#contact-text').css('padding-bottom','2000px');

} else if ($(window).height() > 767 ) {
  $('#skill-btn').on('click', function() {
    $('#about-title-wrap').delay(840).animate({"top": "0"}, 2300);
  });
} else {
  $('#skill-btn').on('click', function() {
    $('#about-title-wrap').delay(840).animate({"top": "0"}, 2300);
  });

}*/

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

//digital clockapp

$(document).ready( function() {

  function displayTime() {
    var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   	var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   	var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
   	var seconds = currentTime.getSeconds();
   	var changeColor = seconds % 2;
   	var day = currentTime.getDay();
   	var date = currentTime.getDate();
   	var month = currentTime.getMonth();
   	var year = currentTime.getYear();

   	//below two vars grab array strings to supply dayDiv and dateDiv at bottom.
    var selectDay = weekDay[day];
    var selectMonth = monthName[month];

   	//this code turns the clock into a 12 hour with AM/PM
   	var meridiem = "AM";
   	if (hours > 12) {
    hours = hours - 12;
    meridiem = "PM";
    }

    // 0 AM and 0 PM should read as 12
    if (hours === 0) {
    hours = 12;
    }


    if (changeColor === 0) {
    $('#all').removeClass('even').addClass('odd');
    }
    if (changeColor === 1) {
    $('#all').removeClass('odd').addClass('even');
    }


    // Below adds 0s to seconds, minutes, hours
   	if (seconds < 10) {
    seconds = "0" + seconds;
    }
    if (minutes < 10) {
    minutes = "0" + minutes;
    }
    if (hours < 10) {
    hours = "0" + hours;
    }

   	var clockDiv = document.getElementById('clock');
   	var dayDiv = document.getElementById('day');
   	var dateDiv = document.getElementById('date');
   	clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    dayDiv.innerText = selectDay;
    dateDiv.innerText = selectMonth + " " + date + " " + (year + 1900);

  }
  setInterval(displayTime, 1000);
});

//sunmoon

$(document).ready(function() {
    $('#orb').click( function() {
        if ($('#orb').hasClass('sun-orb')) {
            $('#orb').removeClass('sun-orb').addClass('moon');
        }
        else {
            $('#orb').removeClass('moon').addClass('sun-orb');
        }
        if ($('#sky').hasClass('day-sunmoon')) {
          $('#sky').removeClass('day-sunmoon').addClass('night-sunmoon');
        } else {
          $('#sky').removeClass('night-sunmoon').addClass('day-sunmoon');
        }
        if ($('#moonspot1').hasClass('visible')) {
          $('#moonspot1').removeClass('visible');
        } else {
          $('#moonspot1').addClass('visible');
        }
        if ($('#moonspot2').hasClass('visible')) {
          $('#moonspot2').removeClass('visible');
        } else {
          $('#moonspot2').addClass('visible');
        }
        if ($('#moonspot3').hasClass('visible')) {
        $('#moonspot3').removeClass('visible');
        } else {
        $('#moonspot3').addClass('visible');
        }
    });
});
//orbital

var tl = new TimelineLite();

function start() {
  var smalls = ["#circleone", "#circlethree", "#circlefive", "#circletwo", "#circlefour",  "#circlesix"];
  var topSmalls = ["#circleone", "#circlethree", "#circlefive"];
  var bottomSmalls = ["#circletwo", "#circlefour", "#circlesix"];
  tl
    .from(".centre", 0.4, { scale: 0, ease: Back.easeOut})
    .staggerFrom(topSmalls, .4, {scale: 0, y:100, ease: Power4.easeOut}, 0.1, "smalls")
    .staggerFrom(bottomSmalls, .4, { scale: 0, y:-100, delay: 0.30, ease: Power4.easeOut}, 0.1, "smalls")

   .to("#orbitOne", .6, { rotation: 180, ease: Power0.easeNone }, "rotate")

    .to("#orbitTwo", .6, { rotation: 240, ease: Power0.easeNone }, "rotate")

    .to("#orbitThree", .6, { rotation: 300, ease: Power0.easeNone }, "rotate")

  .to(".home, .info" , .6, { rotation: -180, ease: Power0.easeNone }, "rotate")
  .to(".email, .stars", .6, { rotation: 60, ease: Power0.easeNone }, "rotate")
  .to("explore, .account_circle", .6, { rotation: 120, ease: Power0.easeNone }, "rotate");

}

start();

// initiate reversed animation and button colour change.
$('.small').on('click', function () {
  tl.timeScale(1.5).reverse()
  var colour = $(this).css("background-color");
    TweenMax.to("#orbitalbutton", .4, {scale:1, backgroundColor:colour, delay: 1.2, ease: Back.easeOut});

});

//restart tl with change of colour.
function replay() {
  tl.restart();
  var colour = $("#orbitalbutton").css("background-color");
  TweenMax.to("#orbitalbutton", .1, {scale:0,});
  TweenMax.to(".centre", 0.1, { backgroundColor: colour });

}
// button movement.
$('.small').on('mousedown', function () {
  $(this).css('transform', 'scale(0.9)');
  $(this).on('mouseup', function() {
    $(this).css('transform', 'scale(1)');
  });
});

//sunrise animations

var tlTwo = new TimelineLite();
function sunRiseFast() {
  tlTwo
    .from(".sun", 2, { y: 300, scale: 0.5, ease: Elastic.easeOut })
    .from(".night", 1, { opacity: 1, delay: 0.2 }, 0)
    .from(".tree", 0.2, { rotationX: -90, y: 45, ease: Back.easeOut }, 0.5)
    .fromTo(
      ".plane",
      4,
      { right: -150, y: 50 },
      { left: -150, y: 0, ease: SlowMo.ease.config(0.4, 0.7, false) }
    )
    .fromTo(
      ".birds",
      35,
      { top: 257, x: 0, scale: 0.5 },
      { top: -100, x: 600, scale: 1, ease: Power0.easeNone },
      "bird"
    )
    .to(
      ".birds",
      15,
      { scale: 1.75, skewX: "50reg", ease: Circ.easeOut },
      "bird"
    )

    .to(
      ".button-sun-rise",
      3,
      { scale: 1.5, opacity: .4, delay: 13, rotation: -360, ease: Power4.easeOut }, "bird"
    )

    .to(".birds", 0.3, { opacity: 0.6, repeat: 300, yoyo: true }, "bird");
}

sunRiseFast();

function replayTwo() {
  tlTwo.restart();
}
