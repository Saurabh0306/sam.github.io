/**
 * /*=================================
 *           SERVICES
 * ==================================
 *
 * @format
 */

$(function () {
  new WOW().init();
});

$(function () {
  $("#team-members").owlCarousel();
});

/*=================================
            team
==================================*/
$(function () {
  $("#team-members").owlCarousel({
    item: 3,
    autoplay: true,
    smartspeed: 700,
    loop: true,
    autoplayhoverpause: true,
  });
});

/*=================================
          stats
 ==================================*/
$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });
});
/*=================================
          Navigation
 ==================================*/

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      //hide nav
      $("nav").removeClass("fresh-top-nav");
    } else {
      // show nav
      $("nav").addClass("fresh-top-nav");
    }
  });
});
