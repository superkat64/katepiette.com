(function($){

  $(function(){
    $('#about_me .row').hide();
    $('#mobile-nav').hide();

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
      var show = $('#about_me').position();
      $('#about_me .row').fadeIn(1500);
    });

    // For the mobile navbar
    $('nav #mobile').click(function() {
      jQuery('#mobile-nav').toggle('show');

    })

    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
      } else {
        $('nav').removeClass('shrink');
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
