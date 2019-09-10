import { LitElement, html, css } from "../node_modules/lit-element/lit-element.js";
import { unsafeHTML } from "../node_modules/lit-html/directives/unsafe-html.js";
import "./map-element.js";
import "./nav-element.js";
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const EVENTS_API = `${CORS_PROXY}http://open-api.myhelsinki.fi/v1/events/?limit=10`;
const PLACES_API = `${CORS_PROXY}http://open-api.myhelsinki.fi/v1/places/?limit=10`;
const ACTIVITIES_API = `${CORS_PROXY}http://open-api.myhelsinki.fi/v1/activities/?limit=10`;

class AppElement extends LitElement {
  static get properties() {
    return {
      api: {
        type: String
      },
      display: {
        type: Boolean,
        reflect: true
      },
      displayImages: {
        type: Boolean,
        reflect: true
      },
      events: {
        type: Array,
        reflect: true
      },
      next: {
        type: String,
        reflect: true
      },
      lat: {
        type: String,
        reflect: true
      },
      lon: {
        type: String,
        reflect: true
      },
      info: {
        type: String,
        reflect: true
      },
      selectedItem: {
        type: String,
        reflect: true
      },
      images: {
        type: Array,
        reflect: true
      }
    };
  }

  static get styles() {
    return css`
      p {
          font-size: 20px;
      }
      .fake-link {cursor:pointer;}
      .fake-link:hover {color: #666 !important;}
      .hide {display:none;}
      .show {display:block;}
      .event-img {max-width: 460px;}
      #overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1333;
        cursor: pointer;
      }
      .truncate {
        max-width: 850px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .progress-line, .progress-line:before {
        height: 3px;
        width: 100%;
        margin: 0;
      }
      .progress-line {
        background-color: #b3d4fc;
        display: -webkit-flex;
        display: flex;
      }
      .progress-line:before {
        background-color: #3f51b5;
        content: '';
        -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      @-webkit-keyframes running-progress {
        0% { margin-left: 0px; margin-right: 100%; }
        50% { margin-left: 25%; margin-right: 0%; }
        100% { margin-left: 100%; margin-right: 0; }
      }
      @keyframes running-progress {
        0% { margin-left: 0px; margin-right: 100%; }
        50% { margin-left: 25%; margin-right: 0%; }
        100% { margin-left: 100%; margin-right: 0; }
      }
    `;
  }

  constructor() {
    super();
    this.display = false;
    this.displayImages = false;
    this.addEventListener('navigate-event', this.navigate);
    this.api = EVENTS_API; //this.api = 'test-data/activities.json';

    this.selectedItem = 'Events';
    this.images = [];
    const self = this;

    window.onscroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        self.fetchNext(self.next);
      }
    };
  }

  render() {
    return html`
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" integrity="sha256-piqEf7Ap7CMps8krDQsSOTZgF+MU/0MPyPW2enj5I40=" crossorigin="anonymous" />

      <div class="row">
        <div class="col-lg-4">
          <nav-element></nav-element>
        </div>
        <div class="col-lg-8 cards-list">

        ${this.events ? html`
          ${this.events.map(data => html`
            <div class="card mb-1">
              <div class="card-body">
                <h5 class="card-title"><div>${data.name.fi}</div></h5>
                <div class="row">
                  <div class="col">
                    ${data.description.images !== null && data.description.images.length > 0 ? html`
                      <img class="event-img fake-link"
                      src="${data.description.images[0].url}" alt="${data.description.images[0].url}"
                      @click=${() => this.openImages(data.description.images)}
                       />
                      ` : html`
                      <svg class="event-img" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice" focusable="false" role="img" a
                        ria-label="Placeholder: Image cap">
                          <title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#868e96"></rect>
                          <text x="40%" y="50%" fill="#dee2e6">No image</text>
                        </svg>
                    `}

                  </div>
                  <div class="col">
                    <p>
                      <h3>${data.name.fi}</h3>
                    </p>
                    <p class="card-text">
                      ${data.description.intro ? html`${data.description.intro.replace('Lue lisää...', '')}<br />` : ''}

                      ${this.selectedItem === 'Places' || this.selectedItem === 'Activities' ? unsafeHTML(data.description.body) : ''}<br />
                      ${data.info_url ? html`<a href="${data.info_url}" class="fake-link" target="blank_">Info</a>` : ''}
                    </p>

                    <p class="align-text-bottom">
                      <a class="fake-link" @click=${() => this.openMap(data.location.lat, data.location.lon)}>
                        ${data.location.address.street_address} <i class="fas fa-map-marker-alt ml-1"></i>
                      </a> <br />
                      ${data.event_dates ? html`
                        ${this.dateFormat(data.event_dates.starting_day)}
                        ${data.event_dates.ending_day ? html`- ${this.dateFormat(data.event_dates.ending_day)}` : ''}
                      ` : ''}

                    </p>

                    ${data.where_when_duration ? html`
                      <p>
                        ${data.where_when_duration.where_and_when}, ${data.where_when_duration.duration}
                      </p>
                      ` : ``}



                  </div>
                </div>

              </div>
              <div class="card-footer">
                <div class="float-right">
                  ${data.tags.map(tag => html`
                    <h4 class="float-left mr-2"><span class="badge badge-warning fake-link" @click=${() => this.filter(tag.name)}>${tag.name}</span></h4>
                  `)}
                </div>
              </div>
            </div>
          `)}
          ` : ''}
        </div>
      </div>
      <div class="row">
        <div class="col .d-md-none .d-lg-block"></div>
        <div class="col-md-8">
          <div class="progress-line mt-1 mb-3 loading-bottom"></div>
        </div>
      </div>

      <div class="fixed-bottom p-2 fa-3x fake-link" @click=${() => window.scrollTo(0, 0)} style="width:50px"><i class="fas fa-caret-square-up"></i></div>

      <map-element lat=${this.lat} lon=${this.lon} info=${this.info} class="${this.display ? 'show' : 'hide'}"></map-element>
      <carousel-element class="${this.displayImages ? 'show' : 'hide'}" .images=${this.images}></carousel-element>
      <div id="overlay" class="${this.display || this.displayImages ? 'show' : 'hide'}" @click=${() => this.closeModal()}></div>
    `;
  }

  async firstUpdated() {
    await fetch(this.api).then(r => r.json()).then(async json => {
      this.events = json.data;
      this.next = json.meta.next;
    });
  }

  fetchNext(url) {
    if (url) {
      fetch(`${CORS_PROXY}${url}`).then(r => r.json()).then(async json => {
        json.data.map(data => this.events.push(data));
        this.next = json.meta.next;
      });
    }
  }

  navigate(event) {
    event.detail.value === 'Events' ? this.api = EVENTS_API : '';
    event.detail.value === 'Places' ? this.api = PLACES_API : '';
    event.detail.value === 'Activities' ? this.api = ACTIVITIES_API : '';
    this.selectedItem = event.detail.value;
    this.shadowRoot.querySelector('.cards-list').style.display = 'none';
    fetch(this.api).then(r => r.json()).then(async json => {
      this.events = json.data;
      this.next = json.meta.next;
      this.shadowRoot.querySelector('.cards-list').style.display = 'block';
    });
    document.getElementById('info_active').innerHTML = event.detail.value;
  }

  filter(tag) {
    let url = `${this.api}&tags_search=${tag}`;
    this.shadowRoot.querySelector('.cards-list').style.display = 'none';
    fetch(url).then(r => r.json()).then(async json => {
      this.events = json.data;
      this.next = json.meta.next;
      this.shadowRoot.querySelector('.cards-list').style.display = 'block';
    });
    const navElement = this.shadowRoot.querySelector('nav-element');
    navElement.setFilter(this.selectedItem, tag);
  }

  openMap(lat, lon, info) {
    this.lat = lat;
    this.lon = lon;
    this.info = info;
    this.display = true;
  }

  openImages(images) {
    if (images.length > 1) {
      this.displayImages = true;
      this.images = images;
    }
  }

  closeModal() {
    if (this.display) {
      this.display = !this.display;
    }

    if (this.displayImages) {
      this.displayImages = !this.displayImages;
    }
  }

  dateFormat(d) {
    let date = new Date(d);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}
              klo ${date.getUTCHours()}:${date.getUTCMinutes() === 0 ? '00' : date.getUTCMinutes()}`;
  }

}

customElements.define('app-element', AppElement);