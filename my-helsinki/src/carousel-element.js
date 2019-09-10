import { LitElement, html, css } from "../node_modules/lit-element/lit-element.js";

class CarouselElement extends LitElement {
  static get properties() {
    return {
      slideIndex: {
        type: Number
      },
      images: {
        type: Array
      }
    };
  }

  static get styles() {
    return css`
    .container {
      background-color: transparent;
      width: 950px;
      max-height: 600px;
      line-height:600px;
      text-align:center;
      overflow: hidden;
    }
    img {
      max-height:100%;
      max-width:100%;
      vertical-align:middle;
    }
    .modal-x {
      background-color: transparent;
      width: 950px;
      max-height: 600px;
      z-index: 6666;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    * {box-sizing:border-box}

    /* Slideshow container */
    .slideshow-container {
      max-width: 950px;
      max-height: 600px;
      position: relative;
      margin: auto;
    }

    /* Hide the images by default */
    .my-slides {
      display: none;
    }

    /* Next & previous buttons */
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 40%;
      width: auto;
      padding: 80px 30px 80px 30px;
      color: white;
      font-weight: bold;
      font-size: 25px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
    }

    /* Position the "next button" to the right */
    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover, .next:hover {
      background-color: rgba(0,0,0,0.8);
    }

    /* Caption text */
    .text {
      color: #f2f2f2;
      font-size: 15px;
      padding: 8px 12px;
      position: absolute;
      bottom: 8px;
      width: 100%;
      text-align: center;
    }

    /* Number text (1/3 etc) */
    .numbertext {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
    }

    /* The dots/bullets/indicators */
    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }

    .dot-indicators {
      text-align: center;
      margin-top: -60px;
      position: relative;
      z-index: 9999;
    }

    .active, .dot:hover {
      background-color: #717171;
    }

    /* Fading animation */
    .fade {
      -webkit-animation-name: fade;
      -webkit-animation-duration: 1.5s;
      animation-name: fade;
      animation-duration: 1.5s;
    }

    @-webkit-keyframes fade {
      from {opacity: .4}
      to {opacity: 1}
    }

    @keyframes fade {
      from {opacity: .4}
      to {opacity: 1}
    }
    `;
  }

  constructor() {
    super();
    this.images = [];
    this.slideIndex = 1;
  }

  render() {
    return html`
      <div class="modal-x">
        <div class="slideshow-container">

          ${this.images.map((image, i) => html`
            <div class="my-slides">
              <div class="numbertext">${i + 1} / ${this.images.length}</div>
              <div class="container">
                <img src="${image.url}" />
              </div>
            </div>
          `)}

          <a class="prev" @click="${() => this.plusSlides(-1)}">&#10094;</a>
          <a class="next" @click="${() => this.plusSlides(1)}">&#10095;</a>

        </div>
        <br>

        <div class="dot-indicators">
        ${this.images.map((image, i) => html`
          <!-- ${image} -->
          <span class="dot" @click="${() => this.currentSlide(i + 1)}"></span>
        `)}

        </div>
      </div>

    `;
  }

  updated() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    let slides = this.shadowRoot.querySelectorAll('.my-slides');
    let dots = this.shadowRoot.querySelectorAll('.dot');

    if (slides && dots && slides.length && dots.length) {
      if (n > slides.length) {
        this.slideIndex = 1;
      }

      if (n < 1) {
        this.slideIndex = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }

      slides[this.slideIndex - 1].style.display = 'block';
      dots[this.slideIndex - 1].className += ' active';
    }
  }

}

customElements.define('carousel-element', CarouselElement);
