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

module.exports = "#toggle {\n  width: 350px;\n  background: #ccc;\n  display: none;\n  z-index: 100;\n  float: left;\n  position: fixed;\n}\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0 !important;\n  height: 100vh;\n}\n\n.events-row {\n  position: fixed;\n  right: 30px;\n  bottom: 50px;\n  left: 20px;\n}\n\n.app-header {\n  width: 100%;\n  background-color: #555555;\n  color: #fafafa;\n  cursor: pointer;\n}\n\n.app-header-BLUES {\n  background-color: #00897b;\n}\n\n.event-0-BLUES {\n  background-color: #e0f2f1;\n}\n\n.event-1-BLUES {\n  background-color: #b2dfdb;\n}\n\n.event-2-BLUES {\n  background-color: #80cbc4;\n}\n\n.event-3-BLUES {\n  background-color: #4db6ac;\n}\n\n.event-4-BLUES {\n  background-color: #26a69a;\n}\n\n.app-header-SOUL {\n  background-color: #00acc1;\n}\n\n.event-0-SOUL {\n  background-color: #e0f7fa;\n}\n\n.event-1-SOUL {\n  background-color: #b2ebf2;\n}\n\n.event-2-SOUL {\n  background-color: #80deea;\n}\n\n.event-3-SOUL {\n  background-color: #4dd0e1;\n}\n\n.event-4-SOUL {\n  background-color: #26c6da;\n}\n\n.app-header-JAZZ {\n  background-color: #8e24aa;\n}\n\n.event-0-JAZZ {\n  background-color: #f3e5f5;\n}\n\n.event-1-JAZZ {\n  background-color: #e1bee7;\n}\n\n.event-2-JAZZ {\n  background-color: #ce93d8;\n}\n\n.event-3-JAZZ {\n  background-color: #ba68c8;\n}\n\n.event-4-JAZZ {\n  background-color: #ab47bc;\n}\n\n.app-header-ROCK {\n  background-color: #494949;\n}\n\n.event-0-ROCK {\n  background-color: #fafafa;\n}\n\n.event-1-ROCK {\n  background-color: #f5f5f5;\n}\n\n.event-2-ROCK {\n  background-color: #eeeeee;\n}\n\n.event-3-ROCK {\n  background-color: #e0e0e0;\n}\n\n.event-4-ROCK {\n  background-color: #bdbdbd;\n}\n\n.app-header-JOIKU {\n  background-color: #039be5;\n}\n\n.event-0-JOIKU {\n  background-color: #e1f5fe;\n}\n\n.event-1-JOIKU {\n  background-color: #b3e5fc;\n}\n\n.event-2-JOIKU {\n  background-color: #81d4fa;\n}\n\n.event-3-JOIKU {\n  background-color: #4fc3f7;\n}\n\n.event-4-JOIKU {\n  background-color: #29b6f6;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header app-header-{{roomName}} p-2\" (click)=\"showMenu()\">\n  <i class=\"fas fa-bars fa-3x\"></i>\n</div>\n\n<div id=\"toggle\">\n  <span class=\"dropdown-item-text\">\n    <i class=\"fas fa-cog\"></i>\n    Settings\n  </span>\n\n  <div class=\"dropdown-divider\"></div>\n\n  <a class=\"dropdown-item\" href=\"#\" *ngIf=\"!isSignedIn\" (click)=\"handleAuthClick()\">\n    <i class=\"fab fa-google\"></i>\n    Authorize\n  </a>\n  <a class=\"dropdown-item\" href=\"#\" *ngIf=\"isSignedIn\" (click)=\"handleSignoutClick()\">\n    <i class=\"fas fa-sign-out-alt\"></i>\n    Sign Out\n  </a>\n  <a class=\"dropdown-item\" href=\"#\" *ngIf=\"isSignedIn\" (click)=\"fetchEvents()\">\n    <i class=\"fas fa-cloud-download-alt\"></i>\n    Fetch events\n  </a>\n\n  <div class=\"dropdown-divider\"></div>\n\n  <span class=\"dropdown-item-text\">\n    <i class=\"fas fa-th-large\"></i>\n    Rooms\n  </span>\n\n  <a class=\"dropdown-item\" (click)=\"chooseRoom(JAZZ)\">\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option1\" checked>\n      <label class=\"form-check-label\">\n        Jazz\n      </label>\n    </div>\n  </a>\n  <a class=\"dropdown-item\" (click)=\"chooseRoom(SOUL)\">\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option1\">\n      <label class=\"form-check-label\">\n        Soul\n      </label>\n    </div>\n  </a>\n  <a class=\"dropdown-item\" (click)=\"chooseRoom(ROCK)\">\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option1\">\n      <label class=\"form-check-label\">\n        Rock\n      </label>\n    </div>\n  </a>\n  <a class=\"dropdown-item\" (click)=\"chooseRoom(BLUES)\">\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option1\">\n      <label class=\"form-check-label\">\n        Blues\n      </label>\n    </div>\n  </a>\n  <a class=\"dropdown-item\" (click)=\"chooseRoom(JOIKU)\">\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option1\">\n      <label class=\"form-check-label\">\n        Joiku\n      </label>\n    </div>\n  </a>\n\n  <div class=\"dropdown-divider\"></div>\n\n  <a class=\"dropdown-item\" href=\"#\" (click)=\"showMenu()\">\n    Close\n  </a>\n\n</div>\n\n<ng-container *ngIf=\"events.length > 0\">\n    <ng-container *ngIf=\"isFree\">\n      <div class=\"jumbotron\">\n        <h1 class=\"display-1 mt-2\">{{roomName}}</h1>\n        <h1 class=\"display-3\">Vapaa</h1>\n        <p class=\"lead\">Seuraava: {{events[0].summary}}, {{resolveNextEvent()}} klo {{events[0].start | date : 'HH:mm'}}</p>\n        <div class=\"row events-row\">\n          <ng-container *ngFor=\"let event of events; let i = index\">\n            <div class=\"col p-2 mr-1 event-{{i}}-{{roomName}}\">\n              <div>{{event.summary}}</div>\n              <div class=\"mt-4\">\n                <span class=\"text-capitalize\">{{resolveEvent(event)}}</span>\n                klo {{event.start | date : 'HH:mm'}} - {{event.end | date : 'HH:mm'}}\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"!isFree && nowEvent\">\n      <div class=\"jumbotron\">\n        <h1 class=\"display-1 mt-2\">{{roomName}}</h1>\n        <h1 class=\"display-4\">{{nowEvent.summary}}</h1>\n        <p class=\"lead\">\n          {{nowEvent.start | date : 'HH:mm'}} - {{nowEvent.end | date : 'HH:mm'}}\n          <br />\n          {{nowEvent.creator.displayName}}\n        </p>\n        <p class=\"lead\">Seuraava: {{events[0].summary}}, {{resolveNextEvent()}} klo {{events[0].start | date : 'HH:mm'}}</p>\n        <div class=\"row events-row\">\n          <ng-container *ngFor=\"let event of events; let i = index\">\n            <div class=\"col p-2 mr-1 event-{{i}}-{{roomName}}\">\n              <div>{{event.summary}}</div>\n              <div class=\"mt-4\">\n                <span class=\"text-capitalize\">{{resolveEvent(event)}}</span>\n                klo {{event.start | date : 'HH:mm'}} - {{event.end | date : 'HH:mm'}}\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n</ng-container>\n"

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
        this.events = [];
        this.isSignedIn = false;
        this.isFree = false;
        this.BLUES = 'visma.com_1uj1dfbn5jtgu8bfcis9terc8s@group.calendar.google.com';
        this.SOUL = 'visma.com_sbg788eh8qlj1d5ipbvk0pghm8@group.calendar.google.com';
        this.JAZZ = 'visma.com_f62kg5sc74kmcfcs6kt61939ro@group.calendar.google.com';
        this.ROCK = 'visma.com_9bql35s40br3mdlngd8glo0sek@group.calendar.google.com';
        this.JOIKU = 'visma.com_2vdf38fprd1c94m8j1q0bm4prg@group.calendar.google.com';
        this.chosenRoom = this.JAZZ;
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
        self.events = [];
        self.listUpcomingEvents();
        gapi.auth2.getAuthInstance().signIn();
    };
    AppComponent.prototype.handleSignoutClick = function (event) {
        var self = this;
        self.isSignedIn = false;
        self.events = [];
        gapi.auth2.getAuthInstance().signOut();
        self.showMenu();
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
    AppComponent.prototype.showMenu = function () {
        $('#toggle').toggle('slide');
    };
    AppComponent.prototype.chooseRoom = function (room) {
        this.chosenRoom = room;
        this.listUpcomingEvents();
    };
    AppComponent.prototype.ngOnInit = function () {
        gapi.load('client:auth2', this.initClient);
        var self = this;
        setInterval(function () {
            var date = new Date();
            if (date.getMinutes() % 5 === 0) {
                self.fetchEvents();
            }
        }, 10000);
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