//Insert awesome js here!

//Primary Navigation Menu js

$(document).ready(function() {
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  // underline under the active nav item
  $(".nav .nav-link").click(function() {
    $(".nav .nav-link").each(function() {
      $(this).removeClass("active-nav-item");
    });
    $(this).addClass("active-nav-item");
    $(".nav .more").removeClass("active-nav-item");
  });

  //waypoints init
  var sticky = new Waypoint.Sticky({
    element: $('.map-large')[0]
  })

  //dropdown
  $(document).ready(function(){
    $(".dropdown-button").click(function() {
      $(".dropdown-menu").toggleClass("show-menu");
      $(".dropdown-menu > li").click(function(){
        $(".dropdown-menu").removeClass("show-menu");
      });
      $(".dropdown-menu.dropdown-select > li").click(function() {
        $(".dropdown-button").html($(this).html());
      });
    });
  });

});

//Refills Expander
$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger");
  var expanderContent = document.getElementById("js-expander-content");

  $('#js-expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });
});
