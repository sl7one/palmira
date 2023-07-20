const leftArrow =
  '<button class="icon-arrow-slider-left arrow-btn-slider" type="button"></button>';
const rightArrow =
  '<button class="icon-arrow-slider-right arrow-btn-slider" type="button"></button>';


  $(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    // autoplay: true,
    appendArrows: $(".slider__arrows"),
    autoplaySpeed: 5000,
    zIndex: -1,
    nextArrow:
      '<button class="icon-arrow-slider-right arrow-btn-slider" type="button"></button>',
    prevArrow:
      '<button class="icon-arrow-slider-left arrow-btn-slider" type="button"></button>',
  });

  $(".news__slider").slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    // autoplay: true,
    // appendArrows: $(".slick-dots"),
    // autoplaySpeed: 5000,
    zIndex: -1,
    // nextArrow: rightArrow,
    // prevArrow: leftArrow,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }

    }, {

      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }]

    
  });
});

const setNumbers = (_, slick) => {
  const { currentSlide, slideCount } = slick;
  $(".current-slide").text(
    (currentSlide + 1).toString().padStart(2, "0") + "/"
  );
  $(".total-slides").text(slideCount.toString().padStart(2, "0"));
};

$(".slider").on("init", setNumbers);
$(".slider").on("beforeChange", setNumbers);

$(".news__slider").on("init", (_, slick) => {
  $(".slick-dots").wrapAll("<div class='custom-wrapper' />");
  $(".custom-wrapper").prepend(leftArrow).append(rightArrow);

  const triggerNextSlide = () => $(".news__slider").slick("slickNext");
  const triggerPrevSlide = () => $(".news__slider").slick("slickPrev");

  $(".custom-wrapper .icon-arrow-slider-left").on("click", triggerPrevSlide);
  $(".custom-wrapper .icon-arrow-slider-right").on("click", triggerNextSlide);
});
