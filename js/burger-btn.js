$(".menu").click(function () {
  $(this).toggleClass("open");

  if ($(this).hasClass("open")) {
    $(".mobile-menu__modal").addClass("visible");
    $("body").addClass("overflow");
  } else {
    $(".mobile-menu__modal").removeClass("visible");
    $("body").removeClass("overflow");

  }
});
