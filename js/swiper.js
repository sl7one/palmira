import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const leftArrow =
  '<button class="icon-arrow-slider-left arrow-btn-slider" type="button"></button>';
const rightArrow =
  '<button class="icon-arrow-slider-right arrow-btn-slider" type="button"></button>';

const swiper = new Swiper(".swiper", {
  // direction: "horizontal",
  //   loop: true,
  effect: "slide",
  spaceBetween: 16,
  slidesPerView: 1,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderFraction: (currentClass, totalClass) => {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        " of " +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  //   pagination: {
  //     el: ".bullets",
  //   },

  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },

  // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
});

$(
  ".swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal"
).wrapAll("<div class='custom-wrapper' />");
$(".custom-wrapper").prepend(leftArrow).append(rightArrow);

// const triggerNextSlide = () => $(".news__slider").slick("slickNext");
// const triggerPrevSlide = () => $(".news__slider").slick("slickPrev");

$(".custom-wrapper .icon-arrow-slider-left").on("click", () => {
//   console.log("prew");
  swiper.slidePrev();
});
$(".custom-wrapper .icon-arrow-slider-right").on("click", () => {
//   console.log("next");
  swiper.slideNext();
});
