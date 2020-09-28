(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    // Smooth Scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
      offset: 135,
    });
    //navbar Collapse
    $(".navbar-collapse a").click(function () {
      $(".navbar-collapse").collapse("hide");
    });
    $(".modal").each(function () {
      var src = $(this).find("iframe").attr("src");

      $(this).on("click", function () {
        $(this).find("iframe").attr("src", "");
        $(this).find("iframe").attr("src", src);
      });
    });
  });
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
      $(".scroll-to-top").addClass("active");
    } else {
      $(".scroll-to-top").removeClass("active");
    }
  });
})(jQuery);
