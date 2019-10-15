import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class QrCodeElement extends LitElement {
  static get properties() {
    return {
      room: {
        type: String
      }
    };
  }

  static get styles() {
    return css``;
  }

  constructor() {
    super();
    this.room = '';
    this.calendarBaseUrl = 'https://calendar.google.com/calendar/r?cid=';
  }

  render() {
    this.generateQrCode();
    return html`
      <div class="qrcode"></div>
    `;
  }

  generateQrCode() {
    setTimeout(() => {
      let qrcodeContainer = this.shadowRoot.querySelector('.qrcode');
      qrcodeContainer.innerHTML = '';
      new QRCode(qrcodeContainer, this.calendarBaseUrl + this.room);
    }, 500);
  }

}

customElements.define('qr-code', QrCodeElement);