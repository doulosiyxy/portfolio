//mobile settings
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {	
	
	$('#main-nav').css('margin-left', 'auto');
	$(window).on('scroll', function() {


	var currPos = $(document).scrollTop();
        if(currPos < 300) {
  			$("#about-jumbotron").css('margin-bottom', 130 - (currPos/2) );
  		}
  		});	
}

// Digital Clock
$(document).ready( function() {

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
    } else if (changeColor === 1) {
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

// gradient timing

var colors = new Array(

  [194,194,194],
  [0,0,0,],
  [255,255,255],
  [47,144,235],
  [105,95,95],
  [245,245,245]);
  
  /*[62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);*/

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
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
  if ( step >= 1 )
  {
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


//menu bars

function changeMenu(x) {
    x.classList.toggle("change");
}


$('.menu-container').on('click', () => {
	$('#hidden-nav').slideToggle();	
});

//instrument

var cNote = document.getElementById('cAudio');

$('#c').mousedown(function(){
  cNote.currentTime = 0;
  cNote.play();
});
var dNote = document.getElementById('dAudio');

$('#d').mousedown(function(){
  dNote.currentTime = 0;
  dNote.play();
});
var eNote = document.getElementById('eAudio');

$('#e').mousedown(function(){
  eNote.currentTime = 0;
  eNote.play();
});
var fNote = document.getElementById('fAudio');

$('#f').mousedown(function(){
  fNote.currentTime = 0;
  fNote.play();
});
var gNote = document.getElementById('gAudio');

$('#g').mousedown(function(){
  gNote.currentTime = 0;
  gNote.play();
});
var aNote = document.getElementById('aAudio');

$('#a').mousedown(function(){
  aNote.currentTime = 0;
  aNote.play();
});
var bNote = document.getElementById('bAudio');

$('#b').mousedown(function(){
  bNote.currentTime = 0;
  bNote.play();
});

// sun moon

$(document).ready(function() {
    $('#orb').click( function() {        
        if ($('#orb').hasClass('sun')) {
            $('#orb').removeClass('sun').addClass('moon');
        }
        else {
            $('#orb').removeClass('moon').addClass('sun');
        }
        if ($('#sky').hasClass('day')) {
          $('#sky').removeClass('day').addClass('night');
        } else {
          $('#sky').removeClass('night').addClass('day');
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
    
    $('#about-banner-one').on('click', () => {
		$('#timeline-div').slideToggle();
		$('.skill-wrap').slideUp();
	});
	
	$('#about-banner-two').on('click', () => {
		$('#timeline-div').slideUp();
		$('#skills-wrap-one').slideToggle();
		$('#skills-wrap-two').slideUp();
	});
	
	$('#about-banner-three').on('click', () => {
		$('#timeline-div').slideUp();
		$('#skills-wrap-one').slideUp();
		$('#skills-wrap-two').slideToggle();
	});
	
	$('#logo').on('click', () => {
   		window.location.href='index.html';
    });
});

// scroll fade out function

$(function() {
	var documentEl = $(document), 
		fadeElem = $('.fade-scroll');
		
		documentEl.on('scroll', function() {
			var currScrollPos = documentEl.scrollTop();
			fadeElem.each(function() {
				var $this = $(this),
					elemOffsetTop = $this.offset().top;
					
					if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/400);
							
		});
		
	});
});

// scroll animations move and fade in


$(window).on('scroll', function() {


	var currPos = $(document).scrollTop();
        if(currPos < 200) {
  			$("#about-jumbotron").css('margin-bottom', 100 - (currPos/2) );
  		}
  	
  		if(currPos < 120) {
  			$('.animate').css('margin-top', 100 - currPos);
  			
  		}
  	var x = 1 - (currPos/100);
  			$('#hidden-nav').css({'background-color' : 'rgba(0, 0, 0, ' + x + ')'});
  			
});
  
  $(function() {
	var documentEl = $(document), 
		fadeElemA = $('.animate');
		
		documentEl.on('scroll', function() {
			var currScrollPos = documentEl.scrollTop();
			fadeElemA.each(function() {
				var $this = $(this),
					elemOffsetTop = $this.offset().top;
					
					if (currScrollPos < elemOffsetTop ) $this.css('opacity', 0 + ((currScrollPos + 10)/(elemOffsetTop - 150)));
							
		});
		
	});
});
//erro handlers resets top elements opacity to 1.
$(window).on('scroll', function() {
var docTop = $(document).scrollTop();
if (docTop === 0) {	
	$(".jumbotron").css('opacity', 1);
	$(".clock").css('opacity', 1);
}
});

$('#myBtn').on('click', function() {
  		$(".jumbotron").css('opacity', 1);
  		$(".clock").css('opacity', 1);
  		});