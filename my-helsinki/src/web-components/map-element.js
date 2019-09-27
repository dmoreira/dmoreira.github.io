import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class MapElement extends LitElement {
  static get properties() {
    return {
      lat: {
        type: String
      },
      lon: {
        type: String
      }
    };
  }

  static get styles() {
    return css`

    `;
  }

  constructor() {
    super();
    this.lat = '';
    this.lon = '';
  }

  render() {
    console.log("coords " + this.lon + " " + this.lat);
    return html`
      <iframe
        width=100%
        height=500
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?q=${this.lat},${this.lon}&hl=en&z=17&output=embed">
       </iframe>
    `;
  }

}

customElements.define('map-element', MapElement);