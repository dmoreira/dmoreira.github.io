let filter = (tag) => {
  let listElement = document.querySelector('list-element');
  listElement.setAttribute("tag", tag);
  listElement.filter();
  $('html, body').animate({
    scrollTop: $('.slider-element').offset().top
  }, 500);
};

let fetchNearMe = () => {
  let coords;
  let listElement = document.querySelector('list-element');
  listElement.shadowRoot.querySelector('.fa-spin').style.visibility = 'visible';
  navigator.geolocation.getCurrentPosition(position => {
    coords = position;
    listElement.fetchNearMe(coords);
  });
  $('html, body').animate({
    scrollTop: $('.slider-element').offset().top
  }, 500);
}
