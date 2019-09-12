import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

class ListElement extends LitElement {
  static get properties() {
    return {
      tag: {
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
      },
      next: {
        type: String,
        reflect: true
      },
      tags: {
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
      .event-img {max-width: 450px;}
      .card-footer {background-color: #fff;}
      .fa-spin {visibility:hidden;}
      .item {
        text-decoration: none;
        color: #000;
      }
      .item:hover {
        text-decoration: none;
        color: #000;
      }
    `;
  }

  constructor() {
    super();
    this.tags = [];
  }

  render() {
    return html`
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" integrity="sha256-piqEf7Ap7CMps8krDQsSOTZgF+MU/0MPyPW2enj5I40=" crossorigin="anonymous" />
      ${this.tags ? html`
        <div class="row mt-3">
          <div class="col-md-2 d-md-none d-lg-block"></div>
          <div class="col">
            ${this.tags.map(tag => html`
              <span class="badge p-2 mb-1 border border-dark fake-link" onclick="filter('${tag}')" onfocus="(this.blur)">${tag}</span>
            `)}
            <span class="badge p-2 mb-1 border border-dark fake-link" onclick="filter('')">Reset</span>
          </div>
          <div class="col-md-2 d-md-none d-lg-block"></div>
        </div>
      ` : ''}

      <div class="row mt-5 pl-2">
        <div class="col-md-2 d-md-none d-lg-block"></div>
        <div class="col">
        ${this.data ? html`
          ${this.data.map(data => html`
            <div class="card mb-2">
              <div class="card-body fake-link">
                <a href="../show/#/${this.api}/${data.id}" class="item">
                  <div class="row mb-2">
                    <div class="col">
                      ${data.description.images !== null && data.description.images.length > 0 ? html`
                        <img class="event-img"
                        src="${data.description.images[0].url}" alt="${data.description.images[0].url}"/>
                        ` : html`
                        <svg class="event-img" xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid slice" focusable="false" role="img" a
                          ria-label="Placeholder: Image cap">
                            <title>Placeholder</title>
                            <rect width="450px" height="100%" fill="#868e96"></rect>
                            <text x="40%" y="50%" fill="#dee2e6">No image</text>
                          </svg>
                      `}
                    </div>
                    <div class="col">
                      <h3>${data.name.fi}</h3>
                      ${data.description.intro ? html`${data.description.intro.replace('Lue lisää...', '')}<br />` : ''}
                      ${data.location.address.street_address}
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-footer text-right">
                ${data.tags.map(tag => html`
                  <span class="badge badge-light p-2 mb-1 border border-dark fake-link" onclick="filter('${tag.name}')">#${tag.name}</span>
                `)}
              </div>
            </div>

          `)}
          ` : ''}
        </div>
        <div class="col-md-2 d-md-none d-lg-block"></div>
      </div>
      ${this.next ? html`
        <div class="row mt-3">
          <div class="col text-center">
            <div class="fake-link" @click=${this.fetchNext}>
              <i class="fas fa-plus"></i> More ${this.api} <i class="fas fa-circle-notch fa-spin"></i>
            </div>
          </div>
        </div>
      ` : ''}

    `;
  }

  async firstUpdated() {
    this.url = `${CORS_PROXY}http://open-api.myhelsinki.fi/v1/${this.api}/?${this.tag ? `tags_search=${this.tag}&` : ''}limit=10&language_filter=fi`;
    document.querySelector('.indicator').style.visibility = 'visible';
    await fetch(this.url).then(r => r.json()).then(async json => {
      this.tags = [];
      this.data = json.data;
      this.next = json.meta.next;
      document.querySelector('.indicator').style.visibility = 'hidden';

      for (let prop in json.tags) {
        if (json.tags.hasOwnProperty(prop)) {
          this.tags.push(json.tags[prop]);
        }
      }
    });
  }

  fetchNext() {
    this.shadowRoot.querySelector('.fa-spin').style.visibility = 'visible';
    fetch(`${CORS_PROXY}${this.next}`).then(r => r.json()).then(async json => {
      json.data.map(data => this.data.push(data));
      this.next = json.meta.next;
      this.shadowRoot.querySelector('.fa-spin').style.visibility = 'hidden';
    });
  }

  filter() {
    this.firstUpdated();
  }

}

customElements.define('list-element', ListElement);