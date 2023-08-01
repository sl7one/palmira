
const leftArrow =
  '<button class="icon-arrow-slider-left arrow-btn-slider" type="button"></button>';
const rightArrow =
  '<button class="icon-arrow-slider-right arrow-btn-slider" type="button"></button>';

const swiper = new Swiper(".swiper", {
  effect: "slide",
  spaceBetween: 16,
  slidesPerView: 1,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 

  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

$(
  ".swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal"
).wrapAll("<div class='custom-wrapper' />");
$(".custom-wrapper").prepend(leftArrow).append(rightArrow);

$(".custom-wrapper .icon-arrow-slider-left").on("click", () => {
  swiper.slidePrev();
});
$(".custom-wrapper .icon-arrow-slider-right").on("click", () => {
  swiper.slideNext();
});
