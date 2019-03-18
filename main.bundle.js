webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#toggle {\n  width: 350px;\n  height: 100%;\n  background: #ffffff;\n  display: none;\n  z-index: 100;\n  float: left;\n  position: fixed;\n}\n\n#toggle-booking {\n  width: 250px;\n  height: 100%;\n  background: #ffffff;\n  display: none;\n  z-index: 100;\n  float: left;\n  position: fixed;\n  font-size: 24px;\n}\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0 !important;\n  height: 100vh;\n}\n\n.events-row {\n  position: fixed;\n  right: 30px;\n  bottom: 5px;\n  left: 20px;\n}\n\n.app-header {\n  width: 100%;\n  background-color: #8e24aa;\n  color: #fafafa;\n  cursor: pointer;\n}\n\n.app-header-mobile {\n  width: 100%;\n  background-color: #8e24aa;\n  color: #fafafa;\n  cursor: pointer;\n}\n\n.room-header {\n  height: 100px;\n}\n\n.app-header-BLUES {\n  background-color: #00897b;\n}\n\n.event-0-BLUES {\n  background-color: #e0f2f1;\n}\n\n.event-1-BLUES {\n  background-color: #b2dfdb;\n}\n\n.event-2-BLUES {\n  background-color: #80cbc4;\n}\n\n.event-3-BLUES {\n  background-color: #4db6ac;\n}\n\n.event-4-BLUES {\n  background-color: #26a69a;\n}\n\n.app-header-SOUL {\n  background-color: #00acc1;\n}\n\n.event-0-SOUL {\n  background-color: #e0f7fa;\n}\n\n.event-1-SOUL {\n  background-color: #b2ebf2;\n}\n\n.event-2-SOUL {\n  background-color: #80deea;\n}\n\n.event-3-SOUL {\n  background-color: #4dd0e1;\n}\n\n.event-4-SOUL {\n  background-color: #26c6da;\n}\n\n.app-header-JAZZ {\n  background-color: #8e24aa;\n}\n\n.event-0-JAZZ {\n  background-color: #f3e5f5;\n}\n\n.event-1-JAZZ {\n  background-color: #e1bee7;\n}\n\n.event-2-JAZZ {\n  background-color: #ce93d8;\n}\n\n.event-3-JAZZ {\n  background-color: #ba68c8;\n}\n\n.event-4-JAZZ {\n  background-color: #ab47bc;\n}\n\n.app-header-ROCK {\n  background-color: #494949;\n}\n\n.event-0-ROCK {\n  background-color: #fafafa;\n}\n\n.event-1-ROCK {\n  background-color: #f5f5f5;\n}\n\n.event-2-ROCK {\n  background-color: #eeeeee;\n}\n\n.event-3-ROCK {\n  background-color: #e0e0e0;\n}\n\n.event-4-ROCK {\n  background-color: #bdbdbd;\n}\n\n.app-header-JOIKU {\n  background-color: #039be5;\n}\n\n.event-0-JOIKU {\n  background-color: #e1f5fe;\n}\n\n.event-1-JOIKU {\n  background-color: #b3e5fc;\n}\n\n.event-2-JOIKU {\n  background-color: #81d4fa;\n}\n\n.event-3-JOIKU {\n  background-color: #4fc3f7;\n}\n\n.event-4-JOIKU {\n  background-color: #29b6f6;\n}\n\n.app-header-TEKNO {\n  background-color: #039be5;\n}\n\n.event-0-TEKNO {\n  background-color: #e1f5fe;\n}\n\n.event-1-TEKNO {\n  background-color: #b3e5fc;\n}\n\n.event-2-TEKNO {\n  background-color: #81d4fa;\n}\n\n.event-3-TEKNO {\n  background-color: #4fc3f7;\n}\n\n.event-4-TEKNO {\n  background-color: #29b6f6;\n}\n\n/* Progress Bar */\n\n.progress {\n  float: left;\n  z-index: 99;\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: #e1bee7;\n  border-radius: 2px;\n  background-clip: padding-box;\n  margin: 0;\n  overflow: hidden;\n}\n\n.progress .indeterminate {\n  background-color: #8e24aa;\n}\n\n.progress .indeterminate:before {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.progress .indeterminate:after {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  -webkit-animation-delay: 1.15s;\n  animation-delay: 1.15s;\n}\n\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n.ripple {\n  position: relative;\n  overflow: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.ripple:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  -webkit-transform: scale(10, 10);\n          transform: scale(10, 10);\n  opacity: 0;\n  -webkit-transition: opacity 1s, -webkit-transform .5s;\n  transition: opacity 1s, -webkit-transform .5s;\n  transition: transform .5s, opacity 1s;\n  transition: transform .5s, opacity 1s, -webkit-transform .5s;\n}\n\n.ripple:active:after {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  opacity: .3;\n  -webkit-transition: 0s;\n  transition: 0s;\n}\n\n/* The snackbar - position it at the bottom and in the middle of the screen */\n\n#snackbar {\n  visibility: hidden; /* Hidden by default. Visible on click */\n  min-width: 300px; /* Set a default minimum width */\n  margin-left: -150px; /* Divide value of min-width by 2 */\n  background-color: #333; /* Black background color */\n  color: #fff; /* White text color */\n  text-align: center; /* Centered text */\n  border-radius: 2px; /* Rounded borders */\n  padding: 16px; /* Padding */\n  position: fixed; /* Sit on top of the screen */\n  z-index: 1; /* Add a z-index if needed */\n  left: 50%; /* Center the snackbar */\n  bottom: 15px; /* 30px from the bottom */\n}\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n\n#snackbar.show {\n  visibility: visible; /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n/* Animations to fade the snackbar in and out */\n\n@-webkit-keyframes fadein {\n  from {bottom: 0; opacity: 0;}\n  to {bottom: 15px; opacity: 1;}\n}\n\n@keyframes fadein {\n  from {bottom: 0; opacity: 0;}\n  to {bottom: 15px; opacity: 1;}\n}\n\n@-webkit-keyframes fadeout {\n  from {bottom: 15px; opacity: 1;}\n  to {bottom: 0; opacity: 0;}\n}\n\n@keyframes fadeout {\n  from {bottom: 15px; opacity: 1;}\n  to {bottom: 0; opacity: 0;}\n}\n\n.overlay {\n  display: none;\n  height: 100%;\n  width: 100%;\n  position: fixed; /* Stay in place */\n  z-index: 50; /* Sit on top */\n  left: 0;\n  top: 0;\n  background-color: rgb(0,0,0); /* Black fallback color */\n  background-color: rgba(0,0,0, 0.3); /* Black w/opacity */\n  overflow-x: hidden; /* Disable horizontal scroll */\n}\n\n.room-name {\n  font-size: 15em;\n}\n\n.room-status {\n  font-size: 5.5em;\n}\n\n.event-summary {\n  font-size: 2.5em;\n}\n\n.row-event-summary {\n  font-size: 1.5em;\n  white-space: nowrap;\n  width: 215px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.row-event-date {\n  font-size: 1.3em;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"overlay\" class=\"overlay\" (click)=\"toggleBooking(roomName)\"></div>\n<div id=\"overlay-main\" class=\"overlay\" (click)=\"toggleMenu()\"></div>\n\n<div id=\"toggle\">\n  <span class=\"dropdown-item-text mt-2 mb-5\">\n    <i class=\"fas fa-cog\"></i>\n    Settings\n  </span>\n  <div class=\"dropdown-divider\"></div>\n\n  <a class=\"dropdown-item\" href=\"#\" *ngIf=\"!isSignedIn\" (click)=\"handleAuthClick()\">\n    <i class=\"fab fa-google\"></i>\n    Authorize\n  </a>\n  <a class=\"dropdown-item\" href=\"#\" *ngIf=\"isSignedIn\" (click)=\"handleSignoutClick()\">\n    <i class=\"fas fa-sign-out-alt\"></i>\n    Sign Out\n  </a>\n  <div class=\"dropdown-divider\"></div>\n\n  <!--\n  <a class=\"dropdown-item\" href=\"#\" *ngIf=\"isSignedIn\" (click)=\"fetchEvents()\">\n    <i class=\"fas fa-cloud-download-alt\"></i>\n    Fetch events\n  </a>\n\n  <div class=\"dropdown-divider\"></div>\n  -->\n\n  <span class=\"dropdown-item-text\">\n    <i class=\"fas fa-th-large\"></i>\n    Rooms\n  </span>\n\n  <ng-container *ngFor=\"let room of rooms\">\n    <a class=\"dropdown-item\" (click)=\"chooseRoom(room.id)\">\n      {{room.name}}\n      <i class=\"fas fa-check\" *ngIf=\"chosenRoom === room.id\"></i></a>\n  </ng-container>\n\n\n</div>\n\n<div class=\"app-header app-header-{{roomName}} p-2\" (click)=\"toggleMenu()\" *ngIf=\"!isMobile\">\n  <i class=\"fas fa-calendar-alt fa-3x\"></i>\n</div>\n\n\n\n<ng-container *ngIf=\"events.length > 0 && !isMobile\">\n  <div class=\"m-2 pull-right\">\n    <div class=\"qrcode\"></div>\n  </div>\n  <ng-container *ngIf=\"isFree\">\n    <div class=\"jumbotron\">\n      <h1 class=\"display-1 room-name\">{{roomName}}</h1>\n\n      <h1 class=\"display-3 room-status\">Vapaa</h1>\n\n      <p class=\"lead event-summary\">Seuraava: {{events[0].summary}}, {{resolveNextEvent()}} klo {{events[0].start | date : 'HH:mm'}}</p>\n      <div class=\"row events-row\">\n        <ng-container *ngFor=\"let event of events; let i = index\">\n          <div class=\"col p-2 mr-1 event-{{i}}-{{roomName}}\">\n            <div class=\"row-event-summary\">{{event.summary}}</div>\n            <div class=\"mt-2 row-event-date\">\n              <span class=\"text-capitalize\">{{resolveEvent(event)}}</span>\n              klo {{event.start | date : 'HH:mm'}} - {{event.end | date : 'HH:mm'}}\n            </div>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!isFree && nowEvent\">\n    <div class=\"jumbotron\">\n      <h1 class=\"display-1 room-name\">{{roomName}}</h1>\n\n      <h1 class=\"display-4 room-status\">{{nowEvent.summary}} {{nowEvent.start | date : 'HH:mm'}} - {{nowEvent.end | date : 'HH:mm'}}</h1>\n\n      <p class=\"lead event-summary mt-3\">Seuraava: {{events[0].summary}}, {{resolveNextEvent()}} klo {{events[0].start | date :'HH:mm'}}</p>\n      <div class=\"row events-row\">\n        <ng-container *ngFor=\"let event of events; let i = index\">\n          <div class=\"col p-2 mr-1 event-{{i}}-{{roomName}}\">\n            <div class=\"row-event-summary\">{{event.summary}}</div>\n            <div class=\"mt-4 row-event-date\">\n              <span class=\"text-capitalize\">{{resolveEvent(event)}}</span>\n              klo {{event.start | date : 'HH:mm'}} - {{event.end | date : 'HH:mm'}}\n            </div>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </ng-container>\n\n\n</ng-container>\n\n<!-- mobile view -->\n<div class=\"mobile d-block d-sm-none\">\n  <div id=\"toggle-booking\">\n    <span class=\"dropdown-item-text mt-2 mb-5\">\n      <i class=\"far fa-calendar-alt\"></i>\n      {{roomName}}\n    </span>\n    <span class=\"dropdown-item-text mt-2\">\n      Tee varaus\n    </span>\n\n    <div class=\"dropdown-divider\"></div>\n\n    <a class=\"dropdown-item\" href=\"#\" (click)=\"bookRoom(15)\">\n      <i class=\"far fa-clock\"></i>\n      15 min\n    </a>\n\n    <a class=\"dropdown-item\" href=\"#\" (click)=\"bookRoom(30)\">\n      <i class=\"far fa-clock\"></i>\n      30 min\n    </a>\n\n    <a class=\"dropdown-item\" href=\"#\" (click)=\"bookRoom(45)\">\n      <i class=\"far fa-clock\"></i>\n      45 min\n    </a>\n\n    <a class=\"dropdown-item\" href=\"#\" (click)=\"bookRoom(60)\">\n      <i class=\"far fa-clock\"></i>\n      60 min\n    </a>\n\n  </div>\n\n\n  <div class=\"app-header-mobile app-header-{{roomName}} p-2\">\n    <i class=\"far fa-calendar-alt fa-3x mb-1\"></i>\n  </div>\n\n  <div class=\"progress\" style=\"display:none;\">\n    <div class=\"indeterminate\"></div>\n  </div>\n\n  <div class=\"text-center mt-5\" *ngIf=\"!isSignedIn && show\">\n    <div class=\"event-4-ROCK p-5 ripple\" (click)=\"handleAuthClickMobile()\">\n      <i class=\"fab fa-google fa-2x\"></i> Sign in with Google\n    </div>\n\n  </div>\n\n  <ng-container *ngIf=\"isSignedIn && show\">\n    <ng-container *ngFor=\"let room of rooms\">\n      <div class=\"room-header p-2 event-4-{{room.name}} mt-2 ripple\" (click)=\"toggleBooking(room)\">\n        <h1 class=\"display-4 mt-2\">{{room.name}}</h1>\n      </div>\n    </ng-container>\n  </ng-container>\n</div>\n\n<div id=\"snackbar\">\n  <ng-container *ngIf=\"success\">\n    Varaus onnistui. {{roomName}} varattu {{bookingTime}} min.\n  </ng-container>\n  <ng-container *ngIf=\"!success\">\n    Varaus epäonnistui.\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.CLIENT_ID = '205276725794-i5d0qsftbi64u3du6el9l1lt6gmdjc39.apps.googleusercontent.com';
        this.API_KEY = 'AIzaSyAKkhBrwtVPt6n1m4SIABXaXZ0zetUtTxQ';
        this.DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
        this.SCOPES = 'https://www.googleapis.com/auth/calendar';
        this.CALENDAR_BASE_URL = 'https://calendar.google.com/calendar/r?cid=';
        this.events = [];
        this.isSignedIn = false;
        this.isFree = false;
        this.BLUES = 'visma.com_1uj1dfbn5jtgu8bfcis9terc8s@group.calendar.google.com';
        this.SOUL = 'visma.com_sbg788eh8qlj1d5ipbvk0pghm8@group.calendar.google.com';
        this.JAZZ = 'visma.com_f62kg5sc74kmcfcs6kt61939ro@group.calendar.google.com';
        this.ROCK = 'visma.com_9bql35s40br3mdlngd8glo0sek@group.calendar.google.com';
        this.JOIKU = 'visma.com_2vdf38fprd1c94m8j1q0bm4prg@group.calendar.google.com';
        this.TEKNO = 'visma.com_kbbu7dto92de9qe51hnnmb5830@group.calendar.google.com';
        this.rooms = [
            { id: this.SOUL, name: 'SOUL' },
            { id: this.JAZZ, name: 'JAZZ' },
            { id: this.BLUES, name: 'BLUES' },
            { id: this.ROCK, name: 'ROCK' },
            { id: this.JOIKU, name: 'JOIKU' },
            { id: this.TEKNO, name: 'TEKNO' }
        ];
        this.isMobile = false;
        this.show = false;
        this.success = false;
        this.initClient = this.initClient.bind(this);
    }
    AppComponent.prototype.initClient = function () {
        var self = this;
        gapi.client.init({
            apiKey: this.API_KEY,
            clientId: this.CLIENT_ID,
            discoveryDocs: this.DISCOVERY_DOCS,
            scope: this.SCOPES
        }).then(function () {
            self.isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
        });
    };
    AppComponent.prototype.listUpcomingEvents = function () {
        var self = this;
        gapi.client.calendar.events.list({
            'calendarId': self.chosenRoom,
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 5,
            'orderBy': 'startTime'
        }).then(function (response) {
            self.events = response.result.items;
            var n = response.result.summary.split('-');
            self.roomName = n.splice(n.lastIndexOf(n), 1);
            if (self.events.length > 0) {
                for (var i = 0; i < self.events.length; i++) {
                    var event_1 = self.events[i];
                    var start = event_1.start.dateTime;
                    var end = event_1.end.dateTime;
                    if (!start) {
                        start = event_1.start.date;
                    }
                    if (!end) {
                        end = event_1.end.date;
                    }
                    self.events[i].start = start;
                    self.events[i].end = end;
                }
            }
            self.checkIsFree(response.result.items);
            self.generateQrCode();
        });
    };
    AppComponent.prototype.fetchEvents = function () {
        if (this.isSignedIn) {
            this.listUpcomingEvents();
        }
        else {
            this.events = [];
        }
    };
    AppComponent.prototype.handleAuthClick = function (event) {
        var self = this;
        self.isSignedIn = true;
        gapi.auth2.getAuthInstance().signIn();
    };
    AppComponent.prototype.handleAuthClickMobile = function () {
        gapi.auth2.getAuthInstance().signIn();
        this.show = true;
    };
    AppComponent.prototype.handleSignoutClick = function (event) {
        var self = this;
        self.isSignedIn = false;
        self.events = [];
        gapi.auth2.getAuthInstance().signOut();
        self.toggleMenu();
    };
    AppComponent.prototype.checkIsNow = function (event) {
        var now = (new Date());
        return new Date(event.start).getTime() < now.getTime() && now.getTime() < new Date(event.end).getTime();
    };
    AppComponent.prototype.checkIsFree = function (events) {
        for (var i = 0; i < events.length; i++) {
            if (this.checkIsNow(events[i])) {
                this.isFree = false;
                this.nowEvent = events[i];
                break;
            }
            else {
                this.isFree = true;
            }
        }
        if (!this.isFree) {
            this.events.splice(0, 1);
        }
    };
    AppComponent.prototype.resolveNow = function () {
        for (var i = 0; i < this.events.length; i++) {
            if (this.checkIsNow(this.events[i])) {
                this.isFree = false;
                break;
            }
            else {
                this.isFree = true;
            }
        }
    };
    AppComponent.prototype.resolveNextEvent = function () {
        var event = this.events[0];
        return this.resolveEvent(event);
    };
    AppComponent.prototype.resolveEvent = function (event) {
        var now = new Date();
        var start = new Date(event.start);
        var day = '';
        if (start.getDay() === now.getDay()) {
            day = 'tänään';
        }
        else if (start.getDay() === now.getDay() + 1) {
            day = 'huomenna';
        }
        else {
            day = start.getDate() + '.' + (start.getMonth() + 1);
        }
        return day;
    };
    AppComponent.prototype.toggleMenu = function () {
        $('#toggle').toggle('slide');
        $('#overlay-main').toggle();
    };
    AppComponent.prototype.toggleBooking = function (room) {
        this.roomName = room.name;
        this.chosenRoom = room.id;
        $('#toggle-booking').toggle('slide');
        $('#overlay').toggle();
    };
    AppComponent.prototype.bookRoom = function (bookingTime) {
        var self = this;
        $('.progress').show();
        this.bookingTime = bookingTime;
        var start = new Date();
        var end = new Date();
        end.setHours(start.getHours(), start.getMinutes() + bookingTime);
        var event = {
            'summary': ' Varattu',
            'description': 'Varaus tehty app:n kautta.',
            'start': {
                'dateTime': start.toISOString()
            },
            'end': {
                'dateTime': end.toISOString()
            }
        };
        $('#toggle-booking').toggle('slide');
        $('#overlay').toggle();
        var request = gapi.client.calendar.events.insert({
            'calendarId': self.chosenRoom,
            'resource': event
        }).then(function (response) {
            self.success = true;
            $('.progress').hide();
            $('#snackbar').addClass('show');
            setTimeout(function () { $('#snackbar').removeClass('show'); }, 3000);
        }, function (reason) {
            self.success = false;
            $('.progress').hide();
            $('#snackbar').addClass('show');
            setTimeout(function () { $('#snackbar').removeClass('show'); }, 3000);
        });
    };
    AppComponent.prototype.chooseRoom = function (room) {
        this.chosenRoom = room;
        this.listUpcomingEvents();
        console.log(this.chosenRoom);
    };
    AppComponent.prototype.generateQrCode = function () {
        var _this = this;
        console.log('called generate code');
        setTimeout(function () {
            $('.qrcode').html('');
            var qrCode = new QRCode($('.qrcode').get(0), _this.CALENDAR_BASE_URL + _this.chosenRoom);
        }, 1000);
    };
    AppComponent.prototype.ngOnInit = function () {
        gapi.load('client:auth2', this.initClient);
        var self = this;
        if ($('.mobile').is(':visible')) {
            $('.progress').show();
            this.isMobile = true;
        }
        if (!this.isMobile) {
            setInterval(function () {
                if (!self.isFree && self.nowEvent && new Date(self.nowEvent.end).getTime() < new Date().getTime()) {
                    self.fetchEvents();
                }
                else if (self.isFree) {
                    self.fetchEvents();
                }
            }, 10000);
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            $('.progress').hide();
            _this.show = true;
        }, 2500);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map