(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maincontent-maincontent-module"],{

/***/ "./src/app/maincontent/maincontent.module.ts":
/*!***************************************************!*\
  !*** ./src/app/maincontent/maincontent.module.ts ***!
  \***************************************************/
/*! exports provided: MaincontentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaincontentPageModule", function() { return MaincontentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _maincontent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maincontent.page */ "./src/app/maincontent/maincontent.page.ts");







var routes = [
    {
        path: '',
        component: _maincontent_page__WEBPACK_IMPORTED_MODULE_6__["MaincontentPage"]
    }
];
var MaincontentPageModule = /** @class */ (function () {
    function MaincontentPageModule() {
    }
    MaincontentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_maincontent_page__WEBPACK_IMPORTED_MODULE_6__["MaincontentPage"]]
        })
    ], MaincontentPageModule);
    return MaincontentPageModule;
}());



/***/ }),

/***/ "./src/app/maincontent/maincontent.page.html":
/*!***************************************************!*\
  !*** ./src/app/maincontent/maincontent.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">MANUAL TERAPÉUTICO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <div\n      #panelx>\n      <ion-img src=\"/assets/images/1.png\"></ion-img>\n      <ion-img src=\"/assets/images/2.png\"></ion-img>\n      <ion-img src=\"/assets/images/3.png\"></ion-img>\n      <ion-img src=\"/assets/images/4.png\"></ion-img>\n    </div>  \n    <div\n    #panel1>\n    <ion-img src=\"/assets/images/5.png\"></ion-img>\n    <ion-img src=\"/assets/images/6.png\"></ion-img>\n    <ion-img src=\"/assets/images/7.png\"></ion-img>\n    <ion-img src=\"/assets/images/8.png\"></ion-img>\n    <ion-img src=\"/assets/images/9.png\"></ion-img>\n    <ion-img src=\"/assets/images/10.png\"></ion-img>\n    <ion-img src=\"/assets/images/11.png\"></ion-img>\n    <ion-img src=\"/assets/images/12.png\"></ion-img>\n    <ion-img src=\"/assets/images/13.png\"></ion-img>\n    <ion-img src=\"/assets/images/14.png\"></ion-img>\n    <ion-img src=\"/assets/images/15.png\"></ion-img>\n    <ion-img src=\"/assets/images/16.png\"></ion-img>\n </div>\n <div\n     \n     #panel2>\n     <ion-img src=\"/assets/images/17.png\"></ion-img>\n     <ion-img src=\"/assets/images/18.png\"></ion-img>\n     <ion-img src=\"/assets/images/19.png\"></ion-img>\n     <ion-img src=\"/assets/images/20.png\"></ion-img>\n     <ion-img src=\"/assets/images/21.png\"></ion-img>\n     <ion-img src=\"/assets/images/22.png\"></ion-img>\n     <ion-img src=\"/assets/images/23.png\"></ion-img>\n     <ion-img src=\"/assets/images/24.png\"></ion-img>\n     <ion-img src=\"/assets/images/25.png\"></ion-img>\n\n  </div>\n  <div\n     #panel3>\n     <ion-img src=\"/assets/images/26.png\"></ion-img>\n     <ion-img src=\"/assets/images/27.png\"></ion-img>\n     <ion-img src=\"/assets/images/28.png\"></ion-img>\n     <ion-img src=\"/assets/images/29.png\"></ion-img>\n     <ion-img src=\"/assets/images/30.png\"></ion-img>\n     <ion-img src=\"/assets/images/31.png\"></ion-img>\n     <ion-img src=\"/assets/images/32.png\"></ion-img>\n     <ion-img src=\"/assets/images/33.png\"></ion-img>\n     <ion-img src=\"/assets/images/34.png\"></ion-img>\n     <ion-img src=\"/assets/images/35.png\"></ion-img>\n     <ion-img src=\"/assets/images/36.png\"></ion-img>\n     <ion-img src=\"/assets/images/37.png\"></ion-img>\n     <ion-img src=\"/assets/images/38.png\"></ion-img>\n     <ion-img src=\"/assets/images/39.png\"></ion-img>\n     <ion-img src=\"/assets/images/40.png\"></ion-img>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/maincontent/maincontent.page.scss":
/*!***************************************************!*\
  !*** ./src/app/maincontent/maincontent.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L21haW5jb250ZW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/maincontent/maincontent.page.ts":
/*!*************************************************!*\
  !*** ./src/app/maincontent/maincontent.page.ts ***!
  \*************************************************/
/*! exports provided: MaincontentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaincontentPage", function() { return MaincontentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MaincontentPage = /** @class */ (function () {
    function MaincontentPage(activatedRoute, loadingController) {
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.selectedSection = 0;
        this.selectedSection = Number(this.activatedRoute.snapshot.paramMap.get('section'));
    }
    MaincontentPage.prototype.ngOnInit = function () {
        this.loadpage();
    };
    /* Function for loading page,1 second delay is to allow dom to define page bounderies used for scrolling
    to specific pannel based on the index option selected */
    MaincontentPage.prototype.loadpage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'bubbles',
                            message: 'Going to section...',
                            translucent: true
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        setTimeout(function () {
                            _this.panelPos1 = _this.panel1.nativeElement.getBoundingClientRect().top;
                            _this.panelPos2 = _this.panel2.nativeElement.getBoundingClientRect().top;
                            _this.panelPos3 = _this.panel3.nativeElement.getBoundingClientRect().top;
                            _this.openPannel(_this.selectedSection);
                            loading.dismiss();
                        }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    /* function called with index position passed from index page,
    this then calls scrollTo function which uses the page bounderies of selected panel to scroll to
    the pannel selected */
    MaincontentPage.prototype.openPannel = function (numb) {
        if (numb === 1) {
            this.scrollTo(0, this.panelPos1);
        }
        if (numb === 2) {
            this.scrollTo(0, this.panelPos2);
        }
        if (numb === 3) {
            this.scrollTo(0, this.panelPos3);
        }
    };
    MaincontentPage.prototype.scrollTo = function (x, y) {
        this.content.scrollToPoint(x, y + 20, 300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], MaincontentPage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('panel1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MaincontentPage.prototype, "panel1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('panel2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MaincontentPage.prototype, "panel2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('panel3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MaincontentPage.prototype, "panel3", void 0);
    MaincontentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maincontent',
            template: __webpack_require__(/*! ./maincontent.page.html */ "./src/app/maincontent/maincontent.page.html"),
            styles: [__webpack_require__(/*! ./maincontent.page.scss */ "./src/app/maincontent/maincontent.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], MaincontentPage);
    return MaincontentPage;
}());



/***/ })

}]);
//# sourceMappingURL=maincontent-maincontent-module.js.map