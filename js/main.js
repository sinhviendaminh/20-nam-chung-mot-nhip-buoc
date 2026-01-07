(function ($) {
  "use strict";

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".loader-wrap").length) {
      $(".loader-wrap").delay(1000).fadeOut(500);
    }
  }

  if ($("preloader-close").length) {
    $(".preloader-close").on("click", function () {
      $(".loader-wrap").delay(200).fadeOut(500);
    });
  }
  //End Hide Loading Box (Preloader)

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-top");
      if (windowpos >= 150) {
        siteHeader.addClass("fixed-header");
        scrollLink.addClass("open");
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.removeClass("open");
      }
    }
  }
  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><i class="flaticon-down"></i></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $(".main-header .menu-area .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
    $(".sticky-header .main-menu").append(mobileMenuContent);
    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).toggleClass("open");
      $(this).prev("ul").slideToggle(500);
    });
    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).prev(".megamenu").slideToggle(900);
    });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });
    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }

  //Search Popup
  if ($("#search-popup").length) {
    //Show Popup
    $(".search-toggler").on("click", function () {
      $("#search-popup").addClass("popup-visible");
    });
    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        $("#search-popup").removeClass("popup-visible");
      }
    });
    //Hide Popup
    $(".close-search").on("click", function () {
      $("#search-popup").removeClass("popup-visible");
    });
  }

  //Side Content Toggle
  if ($(".main-header .header-outer-box .nav-btn").length) {
    //Show Form
    $(".main-header .header-outer-box .nav-btn").on("click", function (e) {
      e.preventDefault();
      $("body").addClass("side-content-visible");
    });
    //Hide Form
    $(".hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu").on(
      "click",
      function (e) {
        e.preventDefault();
        $("body").removeClass("side-content-visible");
      }
    );
    //Dropdown Menu
    $(".fullscreen-menu .navigation li.dropdown > a").on("click", function () {
      $(this).next("ul").slideToggle(500);
    });
  }

  //Main Slider Carousel
  if ($(".main-slider-carousel").length) {
    $(".main-slider-carousel").owlCarousel({
      loop: false,
      margin: 0,
      nav: false,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      active: false,
      smartSpeed: 1000,
      autoplay: 6000,
      navText: [
        '<i class="fa-solid fa-angles-left"></i>',
        '<i class="fa-solid fa-angles-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  //Contact Form Validation
  if ($("#contact-form").length) {
    $("#contact-form").validate({
      rules: {
        username: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
        },
        subject: {
          required: true,
        },
        message: {
          required: true,
        },
      },
    });
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate(
            {
              countNum: n,
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      { accY: 0 }
    );
  }

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");
      if ($(this).hasClass("active") !== true) {
        $(outerBox).find(".accordion .acc-btn").removeClass("active");
      }
      if ($(this).next(".acc-content").is(":visible")) {
        return false;
      } else {
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  // Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  // Countdown Timer
  if ($(".countdown").length) {
    $(".countdown").countdown("2023/10/12", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<div class="counter-column"><div class="count">%D</div><span>Days</span></div> ' +
            '<div class="counter-column"><div class="count">%H</div><span>Hours</span></div>  ' +
            '<div class="counter-column"><div class="count">%M</div><span>Minutes</span></div>  ' +
            '<div class="counter-column"><div class="count">%S</div><span>Seconds</span></div>'
        )
      );
    });
  }

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).hasClass("active") !== true) {
        $(outerBox).find(".accordion .acc-btn").removeClass("active");
      }

      if ($(this).next(".acc-content").is(":visible")) {
        return false;
      } else {
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  // One Item Carousel
  if ($(".one-item-carousel").length) {
    $(".one-item-carousel").owlCarousel({
      margin: 0,
      nav: true,
      loop: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      active: true,
      smartSpeed: 1000,
      autoplay: 2000,
      navText: [
        '<i class="fa-solid fa-angles-left"></i>',
        '<i class="fa-solid fa-angles-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  // One Item Carousel
  if ($(".testimonial-carousel-three").length) {
    $(".testimonial-carousel-three").owlCarousel({
      margin: 0,
      nav: true,
      loop: true,
      dotData: true,
      dotsData: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      active: true,
      smartSpeed: 1000,
      autoplay: 2000,
      navText: [
        '<i class="fa-solid fa-angles-left"></i>',
        '<i class="fa-solid fa-angles-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  // clients-carousel
  if ($(".clients-carousel").length) {
    $(".clients-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      smartSpeed: 3000,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 3,
        },
        800: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  // Swiper Slide Container
  if ($(".vertical-slide").length) {
    var swiper = new Swiper(".vertical-slide", {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 30,
      mousewheel: true,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper_next_btn",
        prevEl: ".swiper_prev_btn",
      },
    });
  }

  // Bx Slider
  if ($(".recent-event .bxslider").length) {
    $(".recent-event .bxslider").bxSlider({
      nextText: "",
      prevText: "",
      mode: "fade",
      auto: "true",
      speed: "700",
      pagerCustom: ".recent-event .slider-pager .thumb-box",
    });
  }

  // Activities Carousel
  if ($(".activities-carousel").length) {
    $(".activities-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      center: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      active: true,
      autoplay: 6000,
      smartSpeed: 1000,
      navText: [
        '<i class="flaticon-right"></i>',
        '<i class="flaticon-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
          center: false,
        },
        1024: {
          items: 3,
        },
      },
    });
  }

  // Case Studies Carousel
  if ($(".case-studies-carousel").length) {
    $(".case-studies-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      right: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      active: true,
      autoplay: 6000,
      smartSpeed: 1000,
      navText: [
        '<i class="flaticon-right"></i>',
        '<i class="flaticon-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
  // End Case Studies Carousel

  // Case Studies Carousel
  if ($(".complain-carousel").length) {
    $(".complain-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      right: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      active: true,
      autoplay: 6000,
      smartSpeed: 1000,
      navText: [
        '<i class="fa-solid fa-angles-left"></i>',
        '<i class="fa-solid fa-angles-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1024: {
          items: 4,
        },
      },
    });
  }
  // End Case Studies Carousel

  // Gest Carousel
  if ($(".gest-carousel").length) {
    $(".gest-carousel").owlCarousel({
      margin: 50,
      nav: true,
      loop: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      active: true,
      smartSpeed: 1000,
      autoplay: 2000,
      navText: [
        '<i class="fa-solid fa-angles-left"></i>',
        '<i class="fa-solid fa-angles-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        991: {
          items: 2,
        },
        1040: {
          items: 1,
        },
        1200: {
          items: 2,
        },
      },
    });
  }
  // End Gest Carousel

  //Sortable Masonary with Filters
  function enableMasonry() {
    if ($(".sortable-masonry").length) {
      var winDow = $(window);
      // Needed variables
      var $container = $(".sortable-masonry .items-container");
      var $filter = $(".filter-btns");
      $container.isotope({
        filter: "*",
        masonry: {
          columnWidth: ".masonry-item.small-column",
        },
        animationOptions: {
          duration: 500,
          easing: "linear",
        },
      });
      // Isotope Filter
      $filter.find("li").on("click", function () {
        var selector = $(this).attr("data-filter");
        try {
          $container.isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false,
            },
          });
        } catch (err) {}
        return false;
      });
      winDow.on("resize", function () {
        var selector = $filter.find("li.active").attr("data-filter");

        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false,
          },
        });
      });
      var filterItemA = $(".filter-btns li");
      filterItemA.on("click", function () {
        var $this = $(this);
        if (!$this.hasClass("active")) {
          filterItemA.removeClass("active");
          $this.addClass("active");
        }
      });
    }
  }
  enableMasonry();

  // Isotop Layout
  function isotopeBlock() {
    if ($(".isotope-block").length) {
      var $grid = $(".isotope-block").isotope();
    }
  }
  isotopeBlock();

  //LightBox / Fancybox
  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: {
        media: {},
      },
    });
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }
  // End Scroll to a Specific Div

  // Smooth Scroll for Navigation Links
  function initSmoothScroll() {
    // Handle navigation menu links
    $(".navigation a[href^='#']").on("click", function (e) {
      e.preventDefault();
      var target = $(this).attr("href");
      if (target && $(target).length) {
        var headerHeight = $(".main-header").outerHeight() || 0;
        var targetOffset = $(target).offset().top - headerHeight;

        $("html, body").animate(
          {
            scrollTop: targetOffset,
          },
          800,
          "swing"
        );

        // Close mobile menu if open
        $("body").removeClass("mobile-menu-visible");
      }
    });

    // Handle mobile menu links (same structure)
    $(".mobile-menu .navigation a[href^='#']").on("click", function (e) {
      e.preventDefault();
      var target = $(this).attr("href");
      if (target && $(target).length) {
        var headerHeight = $(".main-header").outerHeight() || 0;
        var targetOffset = $(target).offset().top - headerHeight;

        $("html, body").animate(
          {
            scrollTop: targetOffset,
          },
          800,
          "swing"
        );

        // Close mobile menu
        $("body").removeClass("mobile-menu-visible");
      }
    });
  }

  // Initialize smooth scroll on document ready
  $(document).ready(function () {
    initSmoothScroll();
  });

  // Nice Select
  $(document).ready(function () {
    $("select:not(.ignore)").niceSelect();
  });
  // End Nice Select

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      mobile: false,
    });
    wow.init();
  }

  // ------------------------------- AOS Animation
  if ($("[data-aos]").length) {
    AOS.init({
      duration: 1000,
      mirror: true,
    });
  }
  // End Elements Animation

  /*	=========================================================================
	When document is Ready, do
	========================================================================== */

  $(window).on("ready", function () {
    hiddenBarMenuConfig();
  });

  /* ==========================================================================
    When document is Scrollig, do
    ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
  });

  /* ==========================================================================
    When document is loaded, do
    ========================================================================== */

  $(window).on("load", function () {
    handlePreloader();
    enableMasonry();
  });

  function customizeGuestName() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get("guest");

    if (guestName) {
      const guestElement = $(".invitation-guests p");
      if (guestElement.length) {
        const decodedName = decodeURIComponent(guestName);
        guestElement.text(decodedName);
      }
    }
  }

  $(document).ready(function () {
    customizeGuestName();
  });

  // Wish Popup Handler
  function initWishPopup() {
    var wishPopup = $("#wish-popup");
    var wishForm = $("#wish-form");
    var wishSuccess = $("#wish-success");

    // Open popup
    $(".wish-popup-trigger").on("click", function (e) {
      e.preventDefault();
      wishPopup.addClass("popup-visible");
      $("body").css("overflow", "hidden");
    });

    // Close popup
    $(".wish-popup-close, .wish-popup-backdrop").on("click", function () {
      wishPopup.removeClass("popup-visible");
      $("body").css("overflow", "");
      // Reset form after closing
      setTimeout(function () {
        wishForm[0].reset();
        wishForm.show();
        wishSuccess.hide();
        var submitBtn = wishForm.find('button[type="submit"]');
        submitBtn
          .prop("disabled", false)
          .removeClass("loading")
          .html('Gửi lời chúc <i class="fa-solid fa-paper-plane"></i>');
      }, 300);
    });

    // Close on ESC key
    $(document).keydown(function (e) {
      if (e.keyCode === 27 && wishPopup.hasClass("popup-visible")) {
        wishPopup.removeClass("popup-visible");
        $("body").css("overflow", "");
        setTimeout(function () {
          wishForm[0].reset();
          wishForm.show();
          wishSuccess.hide();
          var submitBtn = wishForm.find('button[type="submit"]');
          submitBtn
            .prop("disabled", false)
            .removeClass("loading")
            .html('Gửi lời chúc <i class="fa-solid fa-paper-plane"></i>');
        }, 300);
      }
    });

    // Handle form submission
    wishForm.on("submit", function (e) {
      e.preventDefault();

      var name = $("#wish-name").val().trim();
      var message = $("#wish-message").val().trim();

      if (!name || !message) {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
        return;
      }

      var submitBtn = wishForm.find('button[type="submit"]');
      var originalBtnText = submitBtn.html();

      // Thêm spinner vào button
      submitBtn
        .prop("disabled", true)
        .addClass("loading")
        .html(
          '<span>Đang lấy thông tin...</span> <i class="fa-solid fa-spinner fa-spin"></i>'
        );

      $.getJSON("https://api.ipify.org?format=json")
        .done(function (ipData) {
          submitWishForm(ipData.ip || window.location.href);
        })
        .fail(function () {
          submitWishForm(window.location.href);
        });

      function submitWishForm(userIP) {
        var formData = {
          name: name,
          message: message,
          url: window.location.href,
          timestamp: new Date().toLocaleString("vi-VN", {
            timeZone: "Asia/Ho_Chi_Minh",
          }),
          ip: userIP,
        };

        // Cập nhật text và giữ spinner
        submitBtn.html(
          '<span>Đang gửi...</span> <i class="fa-solid fa-spinner fa-spin"></i>'
        );

        var scriptURL =
          "https://script.google.com/macros/s/AKfycbxE7LkZx9Sds8hHCOb0vgvX6FR0FfJahVbTxWlwEyKKlBWo0EHi4isc7NgC0_mAeTk/exec";

        $.ajax({
          url: scriptURL,
          method: "POST",
          data: formData,
          traditional: true,
          success: function (response) {
            var result =
              typeof response === "string" ? JSON.parse(response) : response;

            if (!result.success) {
              alert(result.error || "Có lỗi xảy ra. Vui lòng thử lại sau!");
              submitBtn
                .prop("disabled", false)
                .removeClass("loading")
                .html('Gửi lời chúc <i class="fa-solid fa-paper-plane"></i>');
              return;
            }

            wishForm.hide();
            wishSuccess.fadeIn(300);

            wishForm[0].reset();
            submitBtn
              .prop("disabled", false)
              .removeClass("loading")
              .html('Gửi lời chúc <i class="fa-solid fa-paper-plane"></i>');
          },
          error: function (xhr, status, error) {
            console.error("Error saving wish message:", error, xhr);
            alert(
              "Có lỗi xảy ra khi gửi lời chúc. Vui lòng thử lại sau hoặc liên hệ với chúng tôi!"
            );
            submitBtn
              .prop("disabled", false)
              .removeClass("loading")
              .html('Gửi lời chúc <i class="fa-solid fa-paper-plane"></i>');
          },
        });
      }
    });
  }

  $(document).ready(function () {
    initWishPopup();
  });
})(window.jQuery);
