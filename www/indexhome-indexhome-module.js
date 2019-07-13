(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indexhome-indexhome-module"],{

/***/ "./src/app/indexhome/indexhome.module.ts":
/*!***********************************************!*\
  !*** ./src/app/indexhome/indexhome.module.ts ***!
  \***********************************************/
/*! exports provided: IndexhomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexhomePageModule", function() { return IndexhomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _indexhome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indexhome.page */ "./src/app/indexhome/indexhome.page.ts");







var routes = [
    {
        path: '',
        component: _indexhome_page__WEBPACK_IMPORTED_MODULE_6__["IndexhomePage"]
    }
];
var IndexhomePageModule = /** @class */ (function () {
    function IndexhomePageModule() {
    }
    IndexhomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_indexhome_page__WEBPACK_IMPORTED_MODULE_6__["IndexhomePage"]]
        })
    ], IndexhomePageModule);
    return IndexhomePageModule;
}());



/***/ }),

/***/ "./src/app/indexhome/indexhome.page.html":
/*!***********************************************!*\
  !*** ./src/app/indexhome/indexhome.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content padding>\n  <ion-item color=\"primary\">\n   <ion-label text-wrap text-center>\n          <ion-text>\n              MANUAL TERAPÉUTICO\n          </ion-text> <p></p>\n          <ion-text>\n              <ion-label text-wrap >ÍNDICE DE CAPÍTULOS Y AUTORES</ion-label>\n          </ion-text>\n          </ion-label> \n  </ion-item>\n   \n<ion-list >\n  <div *ngFor=\"let data of indexdata\">\n    &nbsp;\n      <ion-list-header color=\"primary\">{{data.section}}</ion-list-header>\n      <ion-item *ngFor=\"let subc of data.subsec\" [routerLink]=\"subc.section\" [ngClass]=\"getClCss(subc.pos)\">\n        <ion-label text-wrap>\n            <ion-text color=\"primary\">\n                <h2>{{subc.title}}</h2>\n              </ion-text><p></p>\n              <ion-text><h6>{{subc.authors}}</h6></ion-text>\n          </ion-label>\n     </ion-item>\n  </div>\n  \n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/indexhome/indexhome.page.scss":
/*!***********************************************!*\
  !*** ./src/app/indexhome/indexhome.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4aG9tZS9pbmRleGhvbWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/indexhome/indexhome.page.ts":
/*!*********************************************!*\
  !*** ./src/app/indexhome/indexhome.page.ts ***!
  \*********************************************/
/*! exports provided: IndexhomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexhomePage", function() { return IndexhomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/index.service */ "./src/app/services/index.service.ts");
/* harmony import */ var _services_app_routing_preloader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app-routing-preloader.service */ "./src/app/services/app-routing-preloader.service.ts");




var IndexhomePage = /** @class */ (function () {
    function IndexhomePage(data, routingService) {
        this.data = data;
        this.routingService = routingService;
    }
    IndexhomePage.prototype.ngOnInit = function () {
        this.getData();
    };
    /* preload main content page resources */
    IndexhomePage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('maincontent')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* function for returning data of index from json using the service */
    IndexhomePage.prototype.getData = function () {
        var _this = this;
        this.data.getIndexData().subscribe(function (data) {
            _this.indexdata = data;
        });
    };
    /* changes background color of index item based on its position,
    to change the colors, you can set variables in variables.scss for odd and even to your liking */
    IndexhomePage.prototype.getClCss = function (pos) {
        var res = pos % 2;
        if (res === 0) {
            return 'odd';
        }
        else {
            return 'even';
        }
    };
    IndexhomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-indexhome',
            template: __webpack_require__(/*! ./indexhome.page.html */ "./src/app/indexhome/indexhome.page.html"),
            styles: [__webpack_require__(/*! ./indexhome.page.scss */ "./src/app/indexhome/indexhome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_index_service__WEBPACK_IMPORTED_MODULE_2__["IndexService"], _services_app_routing_preloader_service__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"]])
    ], IndexhomePage);
    return IndexhomePage;
}());



/***/ }),

/***/ "./src/app/services/index.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/index.service.ts ***!
  \*******************************************/
/*! exports provided: IndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexService", function() { return IndexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var IndexService = /** @class */ (function () {
    function IndexService(http) {
        this.http = http;
    }
    IndexService.prototype.getIndexData = function () {
        return this.http.get('/assets/doc/index.json');
    };
    IndexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /* service for loading index content from json */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IndexService);
    return IndexService;
}());



/***/ })

}]);
//# sourceMappingURL=indexhome-indexhome-module.js.map