let filter = (tag) => {
  let listElement = document.querySelector('list-element');
  listElement.setAttribute("tag", tag);
  listElement.filter();
  $('html, body').animate({
    scrollTop: $('.slider-element').offset().top
  }, 500);
};
