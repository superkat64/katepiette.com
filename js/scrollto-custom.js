$(document).ready(function(){
  /**
   * This part causes smooth scrolling using scrollto.js
   * We target all a tags inside the nav, and apply the scrollto.js to it.
   */
  $(".nav-wrapper .pg-link").click(function(evn){
      evn.preventDefault();
      $('html body').scrollTo(this.hash, this.hash, {offset:-50});
  });
});
