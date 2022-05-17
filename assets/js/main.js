$(document).ready(function () {
  $(".changeBgB").click(function () {
    $("#headerChange").toggleClass("headerChange");
  });

  $(".buttonOff").click(function () {
    $(".changeBgB").toggleClass("buttonOn");
  });

  $(".nav-link").on("mouseenter", function () {
    $(this).after("<hr class='line' />");
    $(".line").animate({ width: "100%" });
  });
  $(".nav-link").mouseleave(function () {
    $(".line").animate({ width: "0px" });
    $(".line").remove();
  });

  $(".dropdown-item").on("mouseenter", function () {
    $(this).after("<hr class='line' />");
    $(".line").animate({ width: "100%" });
  });
  $(".dropdown-item").mouseleave(function () {
    $(".line").animate({ width: "0px" });
    $(".line").remove();
  });

  $(".goDwonButton").mouseenter(function () {
    $(".goDwonButton").animate(
      {
        bottom: "50px",
      },
      1000
    );
    $(".goDwonButton").animate(
      {
        bottom: "25px",
      },
      1000
    );
    $(".goDwonButton").animate(
      {
        bottom: "50px",
      },
      1000
    );
    $(".goDwonButton").animate(
      {
        bottom: "25px",
      },
      1000
    );
  });

  /// arttırma azaltma işlemi ///
  function isNegative() {
    var $rooms = $("#noOfRoom");
    var c = $rooms.val();

    if (c >= 0) {
      //b--;
      //$rooms.val(b);
    } else {
      $("#subs").prop("disabled", true);
      $rooms.val(0);
    }
  }

  $("#adds").click(function add() {
    var $rooms = $("#noOfRoom");
    var a = $rooms.val();

    a++;
    $("#subs").prop("disabled", !a);
    $rooms.val(a);

    $("#noOfRoom").trigger(isNegative());
  });

  $("#subs").prop("disabled", !$("#noOfRoom").val());

  $("#subs").click(function subst() {
    var $rooms = $("#noOfRoom");
    var b = $rooms.val();
    if (b >= 1) {
      b--;
      $rooms.val(b);
    } else {
      $("#subs").prop("disabled", true);
    }
  });

  /// arttırma azaltma işlemi ///

  $(".owl-carouselOne").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    center: true,
    slideTransition: "linear",
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    autoplayHoverPause: true,
    rtl: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 7,
      },
      1000: {
        items: 9,
      },
    },
  });

  $(".owl-carouselTwo").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    center: true,
    slideTransition: "linear",
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    autoplayHoverPause: true,
    rtl: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 7,
      },
      1000: {
        items: 9,
      },
    },
  });

  $(".clickme").each(function () {
    $(this)
      .show(0)
      .on("click", function (e) {
        e.preventDefault();
        $(this).next(".box").slideToggle("slow");
      });
  });

  $(".iconcardDiv").mouseenter(function () {
    $(this).animate({ left: "-240px" }, 300);
  });

  $(".iconCard").mouseleave(function () {
    $(".iconcardDiv").animate({ left: "0px" }, 300);
  });

  setInterval(function () {
    $("header").animate(
      {
        "background-position-x": "-165px",
      },
      5000,
      "linear"
    );

    $("header").animate(
      {
        "background-position-y": "-80px",
      },
      5000,
      "linear"
    );

    $("header").animate(
      {
        "background-position-x": "0px",
      },
      5000,
      "linear"
    );

    $("header").animate(
      {
        "background-position-y": "0px",
      },
      5000,
      "linear"
    );
  }, 10000);

  AOS.init({
    duration: 2000,
  });
});
