$(document).ready(function () {
  // slider
  $(".carousel__wrapper").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/carousel/carousel-arrow-left.png" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/carousel/carousel-arrow-right.png" /></button>',
    responsive: [
      {
        breakpoint: 920,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  // mask
  $("input[name=phone]").mask("+38(099) 999 99-99");

  // tabs
  $(".catalog__tabs").on("click", "li:not(.catalog__tab_active)", function () {
    $(this)
      .addClass("catalog__tab_active")
      .siblings()
      .removeClass("catalog__tab_active")
      .closest(".catalog__wrapper")
      .find(".catalog__items")
      .removeClass("catalog__items_active")
      .eq($(this).index())
      .addClass("catalog__items_active");
  });

  // toggle card
  function toggleCard(className) {
    $(className).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog__item-front")
          .eq(i)
          .toggleClass("catalog__item-front_active");
        $(".catalog__item-back").eq(i).toggleClass("catalog__item-back_active");
      });
    });
  }

  toggleCard(".catalog__item-more");
  toggleCard(".catalog__item-more-back");

  // modal
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn();
  });
  $(".modal__close").on("click", function () {
    $(".overlay, .modal").fadeOut();
  });

  $(".btn_catalog").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog__item-title").eq(i).text());
      $(".overlay, #order").fadeIn();
    });
  });

  // validator
  function validateforms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
          maxlength: 20,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Введите своё имя",
          minlength: jQuery.validator.format(
            "Минимальное количетсво символов: {0}"
          ),
          maxlength: jQuery.validator.format(
            "Максимальное количетсво символов: {0}"
          ),
        },
        phone: "Введите свой номер телефона",
        email: {
          required: "Введите свою почту",
          email: "Неверный формат почты",
        },
      },
    });
  }
  validateforms("#consultation-form");
  validateforms("#consultation .feed-form");
  validateforms("#order .feed-form");
});
