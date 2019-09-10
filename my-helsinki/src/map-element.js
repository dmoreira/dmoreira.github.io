import { LitElement, html, css } from "../node_modules/lit-element/lit-element.js";

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
      .modal-x {
        background-color: #ccc;
        width: 950px;
        height: 650px;
        z-index: 6666;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `;
  }

  constructor() {
    super();
    this.lat = '';
    this.lon = '';
  }

  render() {
    return html`
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <div class="modal-x">
      <iframe
        width=950
        height=650
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?q=${this.lat},${this.lon}&hl=en&z=17&output=embed">
       </iframe>
    </div>
    `;
  }

}

customElements.define('map-element', MapElement);