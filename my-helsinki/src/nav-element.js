import { LitElement, html, css } from "../node_modules/lit-element/lit-element.js";

class NavElement extends LitElement {
  static get properties() {
    return {
      filter: {
        type: String
      },
      tag: {
        type: String,
        reflect: true
      }
    };
  }

  static get styles() {
    return css`
      .fake-link {cursor:pointer;}
    `;
  }

  constructor() {
    super();
    this.filter = '';
    this.tag = '';
  }

  render() {
    return html`
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" integrity="sha256-piqEf7Ap7CMps8krDQsSOTZgF+MU/0MPyPW2enj5I40=" crossorigin="anonymous" />

      <ul class="list-group">
        <li class="list-group-item">
          <h4 class="fake-link" @click=${() => this.navigate('Events')}>
            <i class="fas fa-calendar-alt"></i> Events
            <div class="float-right" style="font-size: 18px">
              ${this.filter === 'Events' ? html`<span class="badge badge-warning fake-link">${this.tag} <i class="fas fa-times"></i></span>` : ``}
            </div>
          </h4>
        </li>
        <li class="list-group-item">
          <h4 class="fake-link" @click=${() => this.navigate('Activities')}>
            <i class="fas fa-hiking"></i> Activities
            <div class="float-right" style="font-size: 18px">
              ${this.filter === 'Activities' ? html`<span class="badge badge-warning fake-link">${this.tag} <i class="fas fa-times"></i></span>` : ``}
            </div>
          </h4>
        </li>
        <li class="list-group-item">
          <h4 class="fake-link" @click=${() => this.navigate('Places')}>
            <i class="fas fa-map-marked-alt"></i> Places
            <div class="float-right" style="font-size: 18px">
              ${this.filter === 'Places' ? html`<span class="badge badge-warning fake-link">${this.tag} <i class="fas fa-times"></i></span>` : ``}
            </div>
          </h4>
        </li>
      </ul>
    `;
  }

  navigate(location) {
    this.filter = '';
    let navigateEvent = new CustomEvent('navigate-event', {
      detail: {
        value: location
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(navigateEvent);
  }

  setFilter(filter, tag) {
    this.filter = filter;
    this.tag = tag;
  }

}

customElements.define('nav-element', NavElement);