(function() {
  $(".movieSlider, .actorSlider").slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow:
      "<div class='movieSlider__arrowContainer movieSlider__arrowContainer--left'><svg class='movieSlider__arrow'><use xlink:href='images/sprite.svg#icon-chevron-thin-left'></use></svg></div>",
    nextArrow:
      "<div class='movieSlider__arrowContainer movieSlider__arrowContainer--right'><svg class='movieSlider__arrow'><use xlink:href='images/sprite.svg#icon-chevron-thin-right'></use></svg></div>",
    speed: 500,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".navMobile__burgericon").on("click", function() {
    $(".nav__container").slideToggle(200);
  });

  $(window).on("resize", function() {
    if ($(window).width() > 767) {
      $(".nav__container").css("display", "flex");
    }
  });
})();
