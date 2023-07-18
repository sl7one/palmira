$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    // autoplay: true,
    appendArrows: $(".slider__arrows"),
    autoplaySpeed: 5000,
    zIndex: -1,
    nextArrow: '<button class="icon-arrow right" type="button"></button>',
    prevArrow: '<button class="icon-arrow left" type="button"></button>',
  });
});

const setNumbers = (_, slick) => {
  const { currentSlide, slideCount } = slick;
  $(".current-slide").text((currentSlide + 1).toString().padStart(2,'0')+"/");
  $(".total-slides").text(slideCount.toString().padStart(2,'0'));
};

$(".slider").on("init", setNumbers);
$(".slider").on("beforeChange", setNumbers);
