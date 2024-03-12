(function ($) {
  "use strict";
  function stop_videos() {
    var video = document.getElementById("video");
    if (video.paused !== true && video.ended !== true) {
      video.pause();
    }
    $(".youtube-video")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
  }

  $(document).ready(function () {
    $(".slideshow nav span").on("click", function () {
      stop_videos();
    });
    $(".revealator-delay1").addClass("no-transform");
    if ($(".grid").length) {
      new CBPGridGallery(document.getElementById("grid-gallery"));
    }
    function checkSize() {
      if ($(document).width() > 992) {
        var btn_hover = "";
        $(".btn").each(function () {
          var btn_text = $(this).text();
          $(this)
            .addClass(btn_hover)
            .empty()
            .append(
              "<span data-hover='" + btn_text + "'>" + btn_text + "</span>"
            );
        });
      }
    }
    checkSize();
    window.addEventListener("resize", function () {
      checkSize();
    });
    $(".grid figure").on("click", function () {
      $("#navbar-collapse-toggle").addClass("hide-header");
    });
    $(".nav-close").on("click", function () {
      $("#navbar-collapse-toggle").removeClass("hide-header");
    });
    $(".nav-prev").on("click", function () {
      if ($(".slideshow ul li:first-child").hasClass("current")) {
        $("#navbar-collapse-toggle").removeClass("hide-header");
      }
    });
    $(".nav-next").on("click", function () {
      if ($(".slideshow ul li:last-child").hasClass("current")) {
        $("#navbar-collapse-toggle").removeClass("hide-header");
      }
    });
    var item = $(".grid li figure");
    var elementsLength = item.length;
    for (var i = 0; i < elementsLength; i++) {
      $(item[i]).hoverdir();
    }
    $(".contactform").on("submit", function () {
      $(".output_message").text("Sent");
      return false;
    });
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      stop_videos();
      $(".close-content").click();
      $("#navbar-collapse-toggle").removeClass("hide-header");
    }
    if (e.keyCode === 37 || e.keyCode === 39) {
      stop_videos();
    }
  });
})(jQuery);
