import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class CurrentEventElement extends LitElement {
  static get properties() {
    return {
      nowEvent: {
        type: Object
      },
      events: {
        type: Array
      },
      isFree: {
        type: Boolean
      },
      room: {
        type: Object
      }
    };
  }

  static get styles() {
    return css`
    .room-name {
      font-size: 240px;
      font-weight: 300;
    }
    `;
  }

  constructor() {
    super();
    this.nowEvent = {};
    this.events = [];
    this.isFree = true;
    this.room = {};
    let self = this;
    setInterval(function () {
      if (!self.isFree && self.nowEvent && new Date(self.nowEvent.end).getTime() < new Date().getTime()) {
        listUpcomingEvents(self.room);
      } else if (self.isFree) {
        listUpcomingEvents(self.room);
      }
    }, 10000);
  }

  render() {
    return html`
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      ${this.events.length > 0 ? html`

        <div class="row">
          <div class="col-md-8">
            <h1 class="room-name">${this.room.name}</h1>
          </div>
          <div class="col">
            <qr-code class="float-right m-1" room=${this.room.name}></qr-code>
          </div>
        </div>

        <div class="row ml-2 mt-3">
          <div class="col">


            ${this.isFree ? html`<h1 class="display-1">Vapaa</h1>` : ``}

            ${!this.isFree && this.nowEvent ? html`
              <h1 class="display-4">
                ${this.nowEvent.summary} ${this.dateFormat(this.nowEvent.start)} - ${this.dateFormat(this.nowEvent.end)}
              </h1>
            ` : ``}

          </div>
        </div>

        <div class="row ml-2 mt-3">
          <div class="col">
            <h1 class="display-4">
              Seuraava: ${this.events[0].summary}, ${this.resolveNextEvent()} klo ${this.dateFormat(this.events[0].start)}
            </h1>
          </div>
        </div>

      ` : `
        <div class="row">
          <div class="col-md-8">
            <h1 class="room-name">${this.room.name}</h1>
          </div>
          <div class="col">
            <qr-code class="float-right m-1" room=${this.room.name}></qr-code>
          </div>
        </div>

        <div class="row ml-2 mt-3">
          <div class="col">


            ${this.isFree ? html`<h1 class="display-1">Vapaa</h1>` : ``}

            ${!this.isFree && this.nowEvent ? html`
              <h1 class="display-4">
                ${this.nowEvent.summary} ${this.dateFormat(this.nowEvent.start)} - ${this.dateFormat(this.nowEvent.end)}
              </h1>
            ` : ``}

          </div>
        </div>
`}
    `;
  }

  checkIsNow(event) {
    const now = new Date();
    return new Date(event.start).getTime() < now.getTime() && now.getTime() < new Date(event.end).getTime();
  }

  checkIsFree(events) {
    for (let i = 0; i < events.length; i++) {
      if (this.checkIsNow(events[i])) {
        this.isFree = false;
        this.nowEvent = events[i];
        break;
      } else {
        this.isFree = true;
      }
    }

    if (!this.isFree) {
      this.events.splice(0, 1);
      var eventsElement = document.getElementById('events');
      eventsElement.setAttribute("events", JSON.stringify(this.events));
    }
  }

  resolveNow() {
    for (let i = 0; i < this.events.length; i++) {
      if (this.checkIsNow(this.events[i])) {
        this.isFree = false;
        break;
      } else {
        this.isFree = true;
      }
    }
  }

  resolveNextEvent() {
    const event = this.events[0];
    return this.resolveEvent(event);
  }

  resolveEvent(event) {
    const now = new Date();
    const start = new Date(event.start);
    let day = '';

    if (start.getDay() === now.getDay()) {
      day = 'tänään';
    } else if (start.getDay() === now.getDay() + 1) {
      day = 'huomenna';
    } else {
      day = start.getDate() + '.' + (start.getMonth() + 1);
    }

    return day;
  }

  dateFormat(d) {
    let date = new Date(d);
    return `${date.getHours()}:${date.getMinutes() === 0 ? '00' : date.getMinutes()}`;
  }

}

customElements.define('current-event', CurrentEventElement);
