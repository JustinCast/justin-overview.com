(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#link-ul {\r\n  list-style-type: none;\r\n  width: 70%;\r\n  padding: 0;\r\n}\r\n.link-li {\r\n  display: inline-block;\r\n  margin: 1%;\r\n}\r\n.white {\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n  color: #fcf5e4\r\n}\r\na:hover{\r\n  color: #3c3b3d\r\n}\r\nnav {\r\n  background-color: transparent;\r\n  color: #3c3b3d;\r\n  background-image: linear-gradient(to right,  #cfccd2,transparent);\r\n  font-weight: 200;\r\n}\r\n#avatar {\r\n  border: 3px solid #fcf5e4;\r\n  background-color: transparent;\r\n  border-radius: 110px;\r\n  height: 20%;\r\n  width: 20%;\r\n  margin: auto;\r\n  margin-top: 5%;\r\n}\r\n#avatar:hover {\r\n  background-color: #fcf5e4;\r\n  border: 3px solid black;\r\n}\r\nmat-expansion-panel {\r\n  width: 50%;\r\n  margin: auto;\r\n  background-color: rgba(229,225,232, 0.7);\r\n}\r\nmat-panel-title {\r\n  color: #2b2b2c;\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n}\r\n#download-btn {\r\n  background-color: #e5e1e8;\r\n  color: #444344;\r\n  font-size: 15px\r\n}\r\n#panel-text {\r\n  font-size: 18px;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #e5e1e8;\r\n  margin: 1em 0;\r\n  padding: 0;\r\n}\r\nmat-tab-group{\r\n  margin: auto;\r\n  width: 70%;\r\n  background: rgba(229,225,232, 0.7)\r\n}\r\np{\r\n  text-align: justify;\r\n  color: black;\r\n  margin: 2%;\r\n  font-size: 20px\r\n}\r\n#tech-ul{\r\n  margin: auto;\r\n  padding: 0;\r\n  list-style-type: none\r\n}\r\n.tech-li {\r\n  font-size: 25px;\r\n  display: inline-block;\r\n  margin: 1%;\r\n}\r\n.footer {\r\n  background: rgba(30,29,30, 0.1);\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  color: white;\r\n  height: 5%;\r\n\r\n  font-size: 30px;\r\n  text-align: center;\r\n}\r\n#complementary-ul{\r\n  width: 50%;\r\n  padding-top: 2%;\r\n  list-style-type: decimal;\r\n}\r\nh5 {\r\n  color: #2b2b2c\r\n}\r\n.comp-li{\r\n  color: #2b2b2c;\r\n  font-size: 25px\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar shadow-lg p-1 pl-4 pt-0 pr-4 mb-5\">\n    <h3>Justin A. Castillo</h3>\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link white\" href=\"https://www.instagram.com/justin1524/\" target=\"_blank\">\n        <i class=\"fa fa-instagram\"></i>\n      </a>\n      <a class=\"nav-item nav-link white\" href=\"https://www.facebook.com/justin.castillo.7503314\" target=\"_blank\">\n        <i class=\"fa fa-facebook\"></i>\n      </a>\n      <a class=\"nav-item nav-link white\" href=\"https://github.com/JustinCast\" target=\"_blank\">\n        <i class=\"fa fa-github\"></i>\n      </a>\n      <a class=\"nav-item nav-link white\" href=\"https://www.linkedin.com/in/justin-alberto-castillo-valladares-82723a121\" target=\"_blank\">\n        <i class=\"fa fa-linkedin\"></i>\n      </a>\n      <!-- <a class=\"nav-item nav-link white\" href=\"/\" target=\"_blank\">\n        <i class=\"fa fa-envelope\"></i>\n      </a> -->\n    </div>\n  </div>\n</nav>\n<div class=\"container text-center mt-8\">\n  <img class=\"card shadow-sm p-1\"  id=\"avatar\" src=\"../assets/avatar.png\" alt=\"avatar\">\n  <h1 class=\"text-white m-4\">FullStack Engineer</h1>\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>My Overview</mat-panel-title>\n      </mat-expansion-panel-header>\n      <div id=\"panel-text\" class=\"container mt-2\">\n        Visionary - I always say that the future is on the Web & cloud. GraphQL enthusiast and Web Assembly explorer.\n      </div>\n      <hr style=\"color: #c2bcb1\">\n      <div class=\"container\">\n        <button id=\"download-btn\" mat-button>Download CV</button>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n<mat-tab-group class=\"shadow-lg p-0 pt-0 mb-5 rounded card mt-4\">\n  <mat-tab style=\"color: black\">\n    <ng-template mat-tab-label>\n      <h5 class=\"m-0\">About</h5>\n      <i class=\"material-icons ml-1 align\">account_circle</i>\n    </ng-template>\n    <p>\n      I'm a student at Instituto Tecnológico de Costa Rica and actually I'm also\n      a Freelancer in my free time, currently I live in Aguas Zarcas, San Carlos. I really love Web Development and my favorite Framework is Angular but I also like JavaScript.\n      One of my favorites hobbies is make some exercise and see some series on Netflix.\n    </p>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <h5 class=\"m-0\">Projects</h5>\n      <i class=\"material-icons ml-1 align\">playlist_add_check</i>\n    </ng-template>\n    <p>\n      I've already worked in important projects like \n      <i>\n        Sistema de Gestión de Averías del Acueducto de la Municipalidad de San Carlos\n      </i>\n      wich was developed in Android from June 2017 to June 2018. <br>\n      I also developed \n      <i>\n        <a href=\"https://arbol-esperanza.herokuapp.com\">\n          Arbol de Esperanza Foundation Website\n        </a>\n      </i>\n      which was developed in Angular during 2018.\n    </p>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <h5 class=\"m-0\">Experience</h5>\n      <i class=\"material-icons ml-1 align\">work</i>\n      </ng-template>  \n    <p>\n      I've teach some <strong>Web Development Courses</strong> in Angular and HTML5 to TEC student. In addition I've make two conferences, \n      one in 2017 for <i>Semana TEC Activity</i> wich name was \"Introduction to TypeScript\" and the other for <i>San Carlos Technology Summit 2018</i> wich name as\n      <strong>Introduction to GraphQL</strong>.\n      In 2017 I travel to UNAN León - Nicaragua to teach how to build Nodejs Aplications with TypeScript.\n    </p>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <h5 class=\"m-0\">Tech Skills</h5>\n      <i class=\"material-icons ml-1 align\">code</i>\n    </ng-template>  \n    <ul id=\"tech-ul container\">\n      <li class=\"tech-li\"><button color=\"warn\" mat-raised-button>Angularjs</button></li>\n      <li class=\"tech-li\"><button style=\"background: green; color: white\" mat-raised-button>Nodejs</button></li>\n      <li class=\"tech-li\"><button style=\"background: red; color: white\" mat-raised-button>Angular 2+</button></li>\n      <li class=\"tech-li\"><button style=\"background: #64DD17; color: white\" mat-raised-button>MongoDB</button></li>\n      <li class=\"tech-li\"><button style=\"background: #3E2723; color: white\" mat-raised-button>MS SQL Server</button></li>\n      <li class=\"tech-li\"><button style=\"background: #01579B; color: white\" mat-raised-button>PostgresSQL</button></li>\n      <li class=\"tech-li\"><button style=\"background: #B3E5FC; color: black\" mat-raised-button>Bootstrap</button></li>\n      <li class=\"tech-li\"><button style=\"background: #AA00FF; color: white\" mat-raised-button>Angular Material</button></li>\n      <li class=\"tech-li\"><button style=\"background: #7E57C2; color: white\" mat-raised-button>GraphQL (beginner)</button></li>\n      <li class=\"tech-li\"><button style=\"background: #FF4081; color: white\" mat-raised-button>Apollo (beginner)</button></li>\n      <li class=\"tech-li\"><button style=\"background: #304FFE; color: white\" mat-raised-button>C#</button></li>\n      <li class=\"tech-li\"><button style=\"background: #827717; color: white\" mat-raised-button>Java</button></li>\n      <li class=\"tech-li\"><button style=\"background: #EEFF41; color: black\" mat-raised-button>JavaScript</button></li>\n      <li class=\"tech-li\"><button style=\"background: #1DE9B6; color: black\" mat-raised-button>C</button></li>\n      <li class=\"tech-li\"><button style=\"background: #E8EAF6; color: black\" mat-raised-button>C++</button></li>\n    </ul>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <h5 class=\"m-0\">Extra Courses & Complementary</h5>\n      <i class=\"material-icons ml-1 align\">assignment</i>\n    </ng-template>\n    <ul id=\"complementary-ul\">\n      <li class=\"comp-li\">Diploma in Banking and Finance</li>\n      <li class=\"comp-li\">Angular Teaching Certificate</li>\n      <li class=\"comp-li\">TypeScript Teaching Certificate</li>\n    </ul>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <h5 class=\"m-0\">Rate me</h5>\n      <i class=\"material-icons ml-1 align\">star</i>\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n\n<footer class=\"footer shadow-lg p-1\">\n  <div class=\"container\">\n    <span>&copy; {{year}}</span>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var d = new Date();
        this.year = d.getFullYear();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.background { background-color: #444344; padding-top: 0.5%; color: white}';
        document.getElementsByTagName('head')[0].appendChild(style);
        var ul = document.getElementsByClassName("mat-expansion-panel-content");
        ul[0].classList.add('background');
        // mat-tab-label-container
        var tabHeader = document.createElement('style');
        tabHeader.type = 'text/css';
        tabHeader.innerHTML = '.tab { background-color: white}';
        document.getElementsByTagName('head')[0].appendChild(style);
        var el = document.getElementsByClassName("mat-tab-label-container");
        el[0].classList.add('tab');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Justin\Documents\ProyectosAngular\justin-overview.com\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map