import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class RoomsMenuElement extends LitElement {
  static get properties() {
    return {
      rooms: {
        type: Array
      },
      selectedRoom: {
        type: String
      }
    };
  }

  static get styles() {
    return css`
      .show {
        display: block;
      }
      .hide {
        display: none;
      }
    `;
  }

  constructor() {
    super();
    var BLUES = 'c_188dt9oapac04jg2hu3rrslvmmr56@resource.calendar.google.com';
    var SOUL = 'visma.com_sbg788eh8qlj1d5ipbvk0pghm8@group.calendar.google.com';
    var JAZZ = 'visma.com_f62kg5sc74kmcfcs6kt61939ro@group.calendar.google.com';
    var ROCK = 'visma.com_9bql35s40br3mdlngd8glo0sek@group.calendar.google.com';
    var JOIKU = 'visma.com_2vdf38fprd1c94m8j1q0bm4prg@group.calendar.google.com';
    var TEKNO = 'visma.com_kbbu7dto92de9qe51hnnmb5830@group.calendar.google.com';
    this.rooms = [{
      id: SOUL,
      name: 'SOUL',
      selected: false
    }, {
      id: JAZZ,
      name: 'JAZZ',
      selected: false
    }, {
      id: BLUES,
      name: 'BLUES',
      selected: false
    }, {
      id: ROCK,
      name: 'ROCK',
      selected: false
    }, {
      id: JOIKU,
      name: 'JOIKU',
      selected: false
    }, {
      id: TEKNO,
      name: 'TEKNO',
      selected: false
    }];
  }

  render() {
    return html`
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" integrity="sha256-piqEf7Ap7CMps8krDQsSOTZgF+MU/0MPyPW2enj5I40=" crossorigin="anonymous" />
      ${this.rooms.map(room => html`
        <div>
          <a class="dropdown-item" @click=${() => this.chooseRoom(room)}>
            ${room.name} <i class="${room.name === this.selectedRoom ? 'fas fa-check' : ''} "></i>
          </a>
        </div>
      `)}
    `;
  }

  chooseRoom(room) {
    this.selectedRoom = room.name;
    super.performUpdate();
    listUpcomingEvents(room);
  }

}

customElements.define('rooms-menu', RoomsMenuElement);
