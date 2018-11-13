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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Add buttons to initiate auth sequence and sign out-->\n<button *ngIf=\"!isSignedIn\" (click)=\"handleAuthClick()\">Authorize</button>\n<button *ngIf=\"isSignedIn\" (click)=\"handleSignoutClick()\">Sign Out</button>\n\n<button (click)=\"fetchEvents()\">Fetch events</button>\n<i class=\"fas fa-bars\"></i>\n\n\n<ng-container *ngIf=\"isFree\">\n  <div class=\"row m-1\">\n    <div class=\"col border p-2 mr-1\">\n      <p>Free</p>\n    </div>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"!isFree && nowEvent\">\n  <div class=\"row m-1\">\n    <div class=\"col border p-2 mr-1\">\n      <div>{{nowEvent.summary}}</div>\n      <div>{{nowEvent.start | date : 'dd.MM.yyyy HH:mm'}}</div>\n      <div>{{nowEvent.end | date : 'dd.MM.yyyy HH:mm'}}</div>\n    </div>\n  </div>\n</ng-container>\n\n\n<div class=\"row m-1\">\n  <ng-container *ngFor=\"let event of events\">\n    <div class=\"col border p-2 mr-1\">\n      <div>{{event.summary}}</div>\n      <div>{{event.start | date : 'dd.MM.yyyy HH:mm'}}</div>\n      <div>{{event.end | date : 'dd.MM.yyyy HH:mm'}}</div>\n    </div>\n  </ng-container>\n</div>\n"

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
        this.DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
        this.SCOPES = "https://www.googleapis.com/auth/calendar";
        this.events = [];
        this.isSignedIn = false;
        this.isFree = false;
        this.BLUES = 'visma.com_1uj1dfbn5jtgu8bfcis9terc8s@group.calendar.google.com';
        this.SOUL = 'visma.com_sbg788eh8qlj1d5ipbvk0pghm8@group.calendar.google.com';
        this.JAZZ = 'visma.com_f62kg5sc74kmcfcs6kt61939ro@group.calendar.google.com';
        this.ROCK = 'visma.com_9bql35s40br3mdlngd8glo0sek@group.calendar.google.com';
        this.JOIKU = 'visma.com_2vdf38fprd1c94m8j1q0bm4prg@group.calendar.google.com';
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
            'calendarId': self.JOIKU,
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 5,
            'orderBy': 'startTime'
        }).then(function (response) {
            self.events = response.result.items;
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
            console.log('fetching events end');
            self.checkIsFree(response.result.items);
        });
    };
    AppComponent.prototype.fetchEvents = function () {
        console.log('is signed ' + this.isSignedIn);
        console.log('fetching events');
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
    AppComponent.prototype.ngOnInit = function () {
        gapi.load('client:auth2', this.initClient);
        var self = this;
        setInterval(function () {
            var date = new Date();
            console.log(date.getMinutes());
            if (date.getMinutes() % 2 === 0) {
                self.fetchEvents();
            }
        }, 60000);
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