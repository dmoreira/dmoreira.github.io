import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

class SliderElement extends LitElement {

  static get properties() {
    return {
      slideIndex: {
        type: Number
      },
      images: {
        type: Array
      },
      tags: {
        type: String,
        reflect: true
      },
      api: {
        type: String,
        reflect: true
      },
      data: {
        type: Array,
        reflect: true
      }
    };
  }

  static get styles() {
    return css `
    .fake-link {cursor:pointer;}
    .truncate {
      max-width: 850px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .slide-background {
      width:100%;
      height: 500px;
      background-size: cover;
      background-position: center;
    }

    .slideshow-container {
      max-width: 100%;
      position: relative;
      margin: auto;
    }

    .my-slides {
      display: none;
    }

    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      margin-top: -22px;
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 32px;
      transition: 0.9s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
    }

    .prev{
      left: 0;
    }

    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }

    .prev:hover, .next:hover {
      background-color: rgba(0,0,0,0.5);
    }

    .text {
      color: #f2f2f2;
      font-size: 22px;
      padding: 20px 0 20px 0;
      position: absolute;
      bottom: 48px;
      width: 100%;
      text-align: center;
      background-color: rgba(0,0,0,0.5);
    }

    .numbertext {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
    }

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

    .active, .dot:hover {
      background-color: #717171;
    }

    .fade {
      -webkit-animation-name: fade;
      -webkit-animation-duration: 2s;
      animation-name: fade;
      animation-duration: 2s;
    }

    @-webkit-keyframes fade {
      from {opacity: .6}
      to {opacity: 1}
    }

    @keyframes fade {
      from {opacity: .6}
      to {opacity: 1}
    }

    `;
  }

  constructor() {
    super();
    this.slideIndex = 1;
    this.api = '';
    this.tags = '';
    this.url = '';
  }

  render() {
    return html `
      <div class="slideshow-container">
        ${this.data? html`
          ${this.data.map(data => html `
            <div class="my-slides fade">
              <div class="slide-background fake-link" @click=${() => this.navigateToItem(data.id)} style="background-image: url(${data.description.images[0].url});"></div>
              <div class="text p-3">
                ${data.description.intro ? data.description.intro : unsafeHTML(data.description.body.substring(0, 150))}
              </div>
            </div>
          `)}

          <div class="controls">
            <a class="prev" @click="${() => this.plusSlides(-1)}">&#10094;</a>
            <a class="next" @click="${() => this.plusSlides(1)}">&#10095;</a>
          </div>
          <br>

          <div style="text-align:center">
            ${this.data.map((data, i) => html `
              <!-- ${data} -->
              <span class="dot" @click="${() =>  this.currentSlide(1+i)}"></span>

            `)}
          </div>

        `
        :``}
      </div>

    `;
  }

  async firstUpdated() {
    this.url = `${CORS_PROXY}http://open-api.myhelsinki.fi/v1/${this.api}/?tags_search=${this.tags}&limit=10&language_filter=en`;
    await fetch(this.url)
      .then(r => r.json())
      .then(async json => {
        this.data = json.data.filter(data => (data.description.images.length > 0));
      });
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

    if ((slides && dots) && (slides.length && dots.length)) {
      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
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

  navigateToItem(id) {
    window.location.href = `../show/#/${this.api}/${id}`;
  }

}

customElements.define('slider-element', SliderElement);
