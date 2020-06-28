$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 500,
  animateIn: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
  navText: [
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>',
  ],
});

// === window When Loading === //

$(window).on("load", function () {
  var wind = $(window);

  // Preloader
  $(".loading").fadeOut(1000);

  // stellar
  wind.stellar();

  // isotope
  $(".gallery").isotope({
    // options
    itemSelector: ".items",
  });

  var $gallery = $(".gallery").isotope({
    // options
  });

  // filter items on button click
  $(".filtering").on("click", "span", function () {
    var filterValue = $(this).attr("data-filter");

    $gallery.isotope({ filter: filterValue });
  });

  $(".filtering").on("click", "span", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // contact form validator
  $("#contact-form").validator();

  $("#contact-form").on("submit", function (e) {
    if (!e.isDefaultPrevented()) {
      var url = "contact.php";

      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function (data) {
          var messageAlert = "alert-" + data.type;
          var messageText = data.message;

          var alertBox =
            '<div class="alert ' +
            messageAlert +
            ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            messageText +
            "</div>";
          if (messageAlert && messageText) {
            $("#contact-form").find(".messages").html(alertBox);
            $("#contact-form")[0].reset();
          }
        },
      });
      return false;
    }
  });
});

$(function () {
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "assets/images/banner02.jpg",
    "assets/images/banner03.jpg",
    "assets/images/banner04.jpg",
  ];

  var i = 0;
  setInterval(function () {
    i = (i + 1) % images.length;
    galleryImage.fadeOut(function () {
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    });
    console.log(galleryImage.attr("src"));
  }, 2000);
  var width = $(".gallery");
  console.log(width.width());
  console.log(width.css("background-color", "red"));
  console.log(width.css("width"));
});
