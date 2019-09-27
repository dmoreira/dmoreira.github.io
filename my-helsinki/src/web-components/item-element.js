import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";
import { unsafeHTML } from "../../node_modules/lit-html/directives/unsafe-html.js";
import "./carousel-element.js";
import "./map-element.js";
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

class ItemElement extends LitElement {
  static get properties() {
    return {
      itemId: {
        type: String,
        reflect: true
      },
      api: {
        type: String,
        reflect: true
      },
      data: {
        type: Object
      },
      images: {
        type: Array,
        reflect: true
      },
      lat: {
        type: String
      },
      lon: {
        type: String
      },
      days: {
        type: Object
      }
    };
  }

  static get styles() {
    return css`
      p {
        font-size: 18px;
      }
      .footer-text {
        color:#ffff;
      }

      .footer-text a:hover {
        color:#ffff;
      }
      a {
        text-decoration: none;
        color: #000;
      }
      a:hover {
        text-decoration: none;
        color: #000;
      }
    `;
  }

  constructor() {
    super();
    this.days = {
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fri',
      6: 'Sat',
      7: 'Sun'
    };
  }

  render() {
    return html`
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

      ${this.data ? html`

        <carousel-element .images=${this.images}></carousel-element>

        <div class="row mt-3 p2">
          <div class="col-md-2 d-md-none d-lg-block"></div>
          <div class="col-lg-6">
            <h1>${this.data.name ? html`${this.data.name.fi}` : ''}</h1>
            <p class="mt-3">

              ${this.data.location.address.street_address}

              ${this.data.event_dates ? html`
                ${this.dateFormat(this.data.event_dates.starting_day)}
                ${this.data.event_dates.ending_day ? html`- ${this.dateFormat(this.data.event_dates.ending_day)}` : ''}
              ` : ''}
            </p>
            <p>
              ${this.data.description.intro}
            </p>
            <p>
              ${unsafeHTML(this.data.description.body)}
            </p>
          </div>
          <div class="col text-right">
            <h5 class="mt-3">
              <a href="${this.data.info_url}" target="_blank">Website</a>
            </h5>

            ${this.data.opening_hours ? html`
              <p class="mt-3">Opening hours:</p>
              ${this.data.opening_hours.hours.map(hour => html`
                <div>
                  ${this.days[hour.weekday_id]}
                  ${hour.opens === null && hour.opens === null ? 'closed' : html`${hour.opens} - ${hour.closes}`}
                </div>
              `)}
            ` : ''}
          </div>
          <div class="col-md-2 d-md-none d-lg-block"></div>
        </div>

        <div class="row mt-5">
          <div class="col-md-2 d-md-none d-lg-block"></div>
          <div class="col">
            ${this.data.tags.map(tag => html`
              <span class="badge p-2 mb-1 border border-dark fake-link">#${tag.name}</span>
            `)}
          </div>
          <div class="col-md-2 d-md-none d-lg-block"></div>
        </div>

        <div class="row mt-5">
          <div class="col-md-2 d-md-none d-lg-block"></div>
          <div class="col">
            <h3>Location</h3>
            <map-element lat=${this.lat} lon=${this.lon}></map-element>
          </div>
          <div class="col-md-2 d-md-none d-lg-block"></div>
        </div>

        <div class="bg-dark text-center p-4 mt-5">
          <span class="footer-text">
            Powered by <a href="http://open-api.myhelsinki.fi/" target="_blank" class="footer-text">MyHelsinki Open API
            </a>
          </span>
        </div>

      ` : ''}

    `;
  }

  async firstUpdated() {
    this.resolvePathParams();
    this.url = `${CORS_PROXY}http://open-api.myhelsinki.fi/v1/${this.api}/${this.itemId}?&language_filter=fi`;
    document.querySelector('.loading').style.visibility = 'visible';
    await fetch(this.url).then(r => r.json()).then(async json => {
      this.data = json;
      console.log(json);
      this.images = this.data.description.images;
      this.lat = this.data.location.lat;
      this.lon = this.data.location.lon;
      super.performUpdate();
      document.querySelector('.loading').style.visibility = 'hidden';
    });
  }

  resolvePathParams() {
    let context = window.location.href.split('#/')[1];
    let api = context.split('/')[0];
    let itemId = context.split('/')[1];

    if (api === 'events') {
      this.api = 'event';
      document.querySelector('.navbar-nav').children[0].className += ' active';
    } else if (api === 'activities') {
      this.api = 'activity';
      document.querySelector('.navbar-nav').children[2].className += ' active';
    } else if (api === 'places') {
      this.api = 'place';
      document.querySelector('.navbar-nav').children[1].className += ' active';
    }

    this.itemId = itemId;
  }

  dateFormat(d) {
    let date = new Date(d);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}
              klo ${date.getUTCHours()}:${date.getUTCMinutes() === 0 ? '00' : date.getUTCMinutes()}`;
  }

}

customElements.define('item-element', ItemElement);