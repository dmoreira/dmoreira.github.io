import "./src/web-components/slider-element.js";
import "./src/web-components/list-element.js";
import "./src/web-components/item-element.js";
$(document).ready(function () {
  $('.scroll-main-slider').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.main-slider').offset().top
    }, 500);
  });
});