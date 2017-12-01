webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- Routed views go here -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_batch_service__ = __webpack_require__("../../../../../src/app/services/batch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_authentication_authentication_component__ = __webpack_require__("../../../../../src/app/views/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_intern_opgeleverde_batches_intern_opgeleverde_batches_component__ = __webpack_require__("../../../../../src/app/views/intern-opgeleverde-batches/intern-opgeleverde-batches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_transform_id_pipe__ = __webpack_require__("../../../../../src/app/pipes/transform-id.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * Services
 */



/**
 * Angular Components
 */





var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__views_authentication_authentication_component__["a" /* AuthenticationComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__views_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'intern-opgeleverde-batches', component: __WEBPACK_IMPORTED_MODULE_11__views_intern_opgeleverde_batches_intern_opgeleverde_batches_component__["a" /* InternOpgeleverdeBatchesComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__views_dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__views_authentication_authentication_component__["a" /* AuthenticationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__views_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__views_intern_opgeleverde_batches_intern_opgeleverde_batches_component__["a" /* InternOpgeleverdeBatchesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_transform_id_pipe__["a" /* TransformIdPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_6__services_batch_service__["a" /* BatchService */],
                __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/classes/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, username, password, role_id, active) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role_id = role_id;
        this.active = active;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/transform-id.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransformIdPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransformIdPipe = (function () {
    function TransformIdPipe(userService) {
        this.userService = userService;
    }
    TransformIdPipe.prototype.transform = function (value, args) {
        var username = '';
        this.userService.getAllUsers().subscribe(function (res) {
            res.forEach(function (user) {
                console.log(user);
                if (user.user_id === value) {
                    username = user.user_name;
                }
            });
        });
        return username;
    };
    TransformIdPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'transformId'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], TransformIdPipe);
    return TransformIdPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.authenticateUser = function (username, password) {
        return this.http.post('/login', {
            'username': username,
            'password': password
        }).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('user') !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/batch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BatchService = (function () {
    function BatchService(http) {
        this.http = http;
    }
    BatchService.prototype.getAllBatches = function () {
        return this.http.get('/batches/getAllBatches').map(function (res) { return res.json(); });
    };
    BatchService.prototype.getInternOpgeleverdeBatches = function () {
        return this.http.get('/batches/getInternOpgeleverdeBatches').map(function (res) { return res.json(); });
    };
    BatchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BatchService);
    return BatchService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAllUsers = function () {
        return this.http.get('/users/getAllUsers').map(function (res) { return res.json(); });
    };
    UserService.prototype.getAllControleurs = function () {
        return this.http.get('/users/getAllControleurs').map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/views/authentication/authentication.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/authentication/authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>Login Form</h1>\r\n    {{diagnostic}}\r\n    <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" id=\"username\" required name=\"username\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" id=\"password\" name=\"password\">\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-success\">Login</button>\r\n    </form>\r\n    <br>\r\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showMessage\">\r\n        {{ message }}\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/authentication/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationComponent = (function () {
    function AuthenticationComponent(authenticationService, route, router) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__classes_user__["a" /* User */](1, '', '', 0, 0);
        this.showMessage = false;
        this.message = '';
    }
    AuthenticationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authenticationService.authenticateUser(this.user.username, this.user.password).subscribe(function (res) {
            if (res !== false) {
                _this.router.navigate(['/dashboard']);
                localStorage.setItem('user', res);
            }
            else {
                _this.showMessage = true;
                _this.message = 'Username or password invalid';
            }
        });
    };
    AuthenticationComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
        }
    };
    AuthenticationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-authentication',
            template: __webpack_require__("../../../../../src/app/views/authentication/authentication.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/authentication/authentication.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Dashboard</h1>\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <h2>Beheer</h2>\n            <button type=\"button\" class=\"btn btn-sm btn-primary\">Batch Beheer</button>\n            <button type=\"button\" class=\"btn btn-sm btn-primary\">Gebruikers Beheer</button>\n            <button type=\"button\" class=\"btn btn-sm btn-primary\">Verander Wachtwoord</button>\n            <button type=\"button\" class=\"btn btn-sm btn-primary\">Logs</button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <h2>Rapportages</h2>\n            <button type=\"button\" class=\"btn btn-sm btn-primary\">Globaal Overzicht</button>\n            <button type=\"button\" class=\"btn btn-sm btn-primary\">Verwerking Overzicht</button>\n            <button type=\"button\" class=\"btn btn-sm btn-primary\">Rapportages</button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <h2>Productie</h2>\n            <div class=\"row\">\n                <div class=\"col-2\">\n                    <p>Nieuw</p>\n                </div>\n                <div class=\"col-4\">\n                    <input type=\"text\" value=\"0\">\n                </div>\n                <div class=\"col-4\">\n                    <button type=\"button\" class=\"btn btn-sm btn-primary\">Toewijzen</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <h2>Controle</h2>\n            <div class=\"row\">\n                <div class=\"col-2\">\n                    <p>Opgeleverd Intern</p>\n                </div>\n                <div class=\"col-6\">\n                    <div class=\"row\">\n                        <div class=\"col-4\">\n                            <input type=\"text\" value=\"0\">\n                            <small class=\"form-text text-muted\">Totaal</small>\n                        </div>\n                        <div class=\"col-4\">\n                            <input type=\"text\" value=\"0\">\n                            <small class=\"form-text text-muted\">Nieuw Opgeleverd</small>\n                        </div>\n                        <div class=\"col-4\">\n                            <input type=\"text\" value=\"0\">\n                            <small class=\"form-text text-muted\">Intern Hersteld</small>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-4\">\n                    <a href=\"/intern-opgeleverde-batches\" class=\"btn btn-sm btn-primary\">Toewijzen</a>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-2\">\n                    <p>Controle Intern</p>\n                </div>\n                <div class=\"col-6\">\n                    <div class=\"row\">\n                        <div class=\"col-4\">\n                            <input type=\"text\" value=\"0\">\n                            <small class=\"form-text text-muted\">Totaal</small>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-4\">\n                    <button type=\"button\" class=\"btn btn-sm btn-primary\">Bekijken</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-primary\">Toon Alles</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/intern-opgeleverde-batches/intern-opgeleverde-batches.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/intern-opgeleverde-batches/intern-opgeleverde-batches.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Opgeleverde Batches Toewijzen</h1>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>Batch Name</th>\n                <th>Status</th>\n                <th>Assinged User</th>\n                <th>Controle User</th>\n                <th>Date last edit</th>\n            </tr>\n        </thead>\n        <tbody *ngFor=\"let batch of batches\">\n            <tr>\n                <td>{{ batch.batch_name }}</td>\n                <td>{{ batch.status }}</td>\n                <td>{{ batch.assinged_user}}</td>\n                <td>\n                    <select name=\"\" id=\"\">\n                        <option *ngFor=\"let controleur of controleurs\" [ngValue]=\"controleur.user_id\">{{ controleur.user_name }}</option>\n                    </select>\n                </td>\n                <td>{{ batch.date_last_edit }}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/intern-opgeleverde-batches/intern-opgeleverde-batches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternOpgeleverdeBatchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_batch_service__ = __webpack_require__("../../../../../src/app/services/batch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InternOpgeleverdeBatchesComponent = (function () {
    function InternOpgeleverdeBatchesComponent(batchService, userService) {
        this.batchService = batchService;
        this.userService = userService;
        this.batches = [];
        this.controleurs = [];
    }
    InternOpgeleverdeBatchesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.batchService.getInternOpgeleverdeBatches().subscribe(function (res) {
            _this.batches = res;
        });
        this.userService.getAllControleurs().subscribe(function (res) {
            _this.controleurs = res;
        });
    };
    InternOpgeleverdeBatchesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-intern-opgeleverde-batches',
            template: __webpack_require__("../../../../../src/app/views/intern-opgeleverde-batches/intern-opgeleverde-batches.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/intern-opgeleverde-batches/intern-opgeleverde-batches.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_batch_service__["a" /* BatchService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], InternOpgeleverdeBatchesComponent);
    return InternOpgeleverdeBatchesComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map