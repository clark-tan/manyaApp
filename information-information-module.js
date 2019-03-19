(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["information-information-module"],{

/***/ "./src/app/information/information.module.ts":
/*!***************************************************!*\
  !*** ./src/app/information/information.module.ts ***!
  \***************************************************/
/*! exports provided: InformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageModule", function() { return InformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information.page */ "./src/app/information/information.page.ts");







var routes = [
    {
        path: '',
        component: _information_page__WEBPACK_IMPORTED_MODULE_6__["InformationPage"]
    }
];
var InformationPageModule = /** @class */ (function () {
    function InformationPageModule() {
    }
    InformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_information_page__WEBPACK_IMPORTED_MODULE_6__["InformationPage"]]
        })
    ], InformationPageModule);
    return InformationPageModule;
}());



/***/ }),

/***/ "./src/app/information/information.page.html":
/*!***************************************************!*\
  !*** ./src/app/information/information.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"canGoBack()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>资讯详情</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title>Card Title</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      Keep close to Nature's heart... and break clear away, once in awhile, and\n      climb a mountain or spend a week in the woods. Wash your spirit clean.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n      <ion-label>ion-item in a card, icon left, button right</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n    </ion-item>\n\n    <ion-card-content>\n      This is content, without any paragraph or header tags, within an\n      ion-card-content element.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item href=\"#\" class=\"activated\">\n      <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n      <ion-label>Card Link Item 1 .activated</ion-label>\n    </ion-item>\n\n    <ion-item href=\"#\">\n      <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n      <ion-label>Card Link Item 2</ion-label>\n    </ion-item>\n\n    <ion-item class=\"activated\">\n      <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n      <ion-label>Card Button Item 1 .activated</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n      <ion-label>Card Button Item 2</ion-label>\n    </ion-item>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/information/information.page.scss":
/*!***************************************************!*\
  !*** ./src/app/information/information.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/information/information.page.ts":
/*!*************************************************!*\
  !*** ./src/app/information/information.page.ts ***!
  \*************************************************/
/*! exports provided: InformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPage", function() { return InformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var InformationPage = /** @class */ (function () {
    // 执行接收操作
    function InformationPage(activeRoute, nav) {
        this.activeRoute = activeRoute;
        this.nav = nav;
        this.activeRoute.queryParams.subscribe(function (params) {
            console.log(params);
        });
    }
    InformationPage.prototype.ngOnInit = function () { };
    // 返回按钮
    InformationPage.prototype.canGoBack = function () {
        this.nav.back();
    };
    InformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-information",
            template: __webpack_require__(/*! ./information.page.html */ "./src/app/information/information.page.html"),
            styles: [__webpack_require__(/*! ./information.page.scss */ "./src/app/information/information.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], InformationPage);
    return InformationPage;
}());



/***/ })

}]);
//# sourceMappingURL=information-information-module.js.map