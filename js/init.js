(function($){

  $(function(){

    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.rotate').textrotator({
      animation: "flipCube",
      separator: ",",
      speed: 2000
    });

    $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space
