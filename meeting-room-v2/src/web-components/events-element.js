import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EventsElement extends LitElement {
  static get properties() {
    return {
      events: {
        type: Array
      }
    };
  }

  static get styles() {
    return css`
    .event-summary {
      font-size: 1.5em;
      white-space: nowrap;
      width: 215px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .event-0 {
      background-color: #f3e5f5;
    }

    .event-1 {
      background-color: #e1bee7;
    }

    .event-2 {
      background-color: #ce93d8;
    }

    .event-3 {
      background-color: #ba68c8;
    }

    .event-4 {
      background-color: #ab47bc;
    }
    `;
  }

  constructor() {
    super();
    this.events = [];
  }

  render() {
    return html`
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <div class="row pl-2 pr-2">
        ${this.events.map((event, index) => html`
          <div class="col p-1">
            <div class="card event-${index}">
              <div class="card-body pl-1 pr-1">
                <h5 class="card-title event-summary">${event.summary}</h5>
                <p class="card-text">
                  <span class="text-capitalize">${this.resolveEvent(event)}</span>
                  klo ${this.dateFormat(event.start)} - ${this.dateFormat(event.end)}
              </p>
              </div>
            </div>
          </div>
        `)}
      </div>
    `;
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

customElements.define('events-element', EventsElement);
