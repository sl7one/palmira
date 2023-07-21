const vh = window.innerHeight * 0.01;
$(".mobile-menu__modal").css("--vh", `${vh}px`);
$(".mobile-menu__nav-menu > li > ul").css("--vh", `${vh}px`);
// document.documentElement.style.setProperty('--vh', `${vh}px`);

$(".menu").on("click", () => {
  $(".menu").toggleClass("open");

  if ($(".menu").hasClass("open")) {
    $(".mobile-menu__modal").addClass("visible");
    $("body").addClass("overflow");
  } else {
    $(".mobile-menu__modal").removeClass("visible");
    $("body").removeClass("overflow");
    $(".mobile-menu__nav-menu > li > ul").removeClass("visible");
    $(".mobile-menu__nav-menu > li").css("position", "relative");
    $(".mobile-menu__back-btn").removeClass("visible");
  }
});

$(".mobile-menu__nav-menu > li > a").on("click", e => {
  const { target } = e;
  const children = target.parentElement.parentElement.children;
  const modalTrigger =
    children[0].children[0] === target ||
    children[2].children[0] === target ||
    children[5].children[0] === target;

  if (modalTrigger) {
    e.preventDefault();

    $(".mobile-menu__nav-menu > li > ul").addClass("visible");
    $(".mobile-menu__nav-menu > li ").css("position", "static");
    $(".mobile-menu__back-btn").addClass("visible");
  }
});

$(".mobile-menu__back-btn").on("click", () => {
  $(".mobile-menu__back-btn").removeClass("visible");
  $(".mobile-menu__nav-menu > li > ul").removeClass("visible");
  $(".mobile-menu__nav-menu > li").css("position", "relative");
});
