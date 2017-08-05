// Header Typeing init JS
var typeLength = 0;
var header = "Hey, I'm Kate.";

$(document).ready(function() {
  headText = $('#header_hey');
  setInterval('cursorAnimation()', 600);
  setTimeout('type()', 500);


});

function type() {
  headText.html(header.substr(0, typeLength++));
  if (typeLength < header.length + 1) {
    setTimeout('type()', 100);
  } else if (typeLength == header.length + 1) {
    $('#welcome #header_welcome').fadeIn(1500);
  }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
