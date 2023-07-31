const leftArrow =
  '<button class="icon-arrow-slider-left arrow-btn-slider" type="button"></button>';
const rightArrow =
  '<button class="icon-arrow-slider-right arrow-btn-slider" type="button"></button>';

$(() => {
  //hero-slider
  $(".slider").slick({
    infinite: true,
    autoplay: true,
    appendArrows: $(".slider__arrows"),
    autoplaySpeed: 5000,
    zIndex: -1,
    nextArrow: rightArrow,
    prevArrow: leftArrow,
    mobileFirst: true,
  });

  //news-slider
  $(".news__slider").slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // waitForAnimate: false,
    zIndex: -1,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      // {
      //   breakpoint: 320,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
});

const setNumbers = (init, _, slick) => {
  const { currentSlide, slideCount } = slick;
  $(".current-slide").text(
    (init ? 0 : currentSlide + 1).toString().padStart(2, "0") + "/"
  );
  $(".total-slides").text(slideCount.toString().padStart(2, "0"));
};

$(".slider").on("init", (_, slick) => setNumbers(true, _, slick));
$(".slider").on("beforeChange", (_, slick) => setNumbers(false, _, slick));

$(".news__slider").on("init", (_, slick) => {
  $(".slick-dots").wrapAll("<div class='custom-wrapper' />");
  $(".custom-wrapper").prepend(leftArrow).append(rightArrow);

  const triggerNextSlide = () => $(".news__slider").slick("slickNext");
  const triggerPrevSlide = () => $(".news__slider").slick("slickPrev");

  $(".custom-wrapper .icon-arrow-slider-left").on("click", triggerPrevSlide);
  $(".custom-wrapper .icon-arrow-slider-right").on("click", triggerNextSlide);
});
