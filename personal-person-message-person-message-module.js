(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-person-message-person-message-module"],{

/***/ "./src/app/personal/person-message/person-message.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/personal/person-message/person-message.module.ts ***!
  \******************************************************************/
/*! exports provided: PersonMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonMessagePageModule", function() { return PersonMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _person_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./person-message.page */ "./src/app/personal/person-message/person-message.page.ts");







var routes = [
    {
        path: '',
        component: _person_message_page__WEBPACK_IMPORTED_MODULE_6__["PersonMessagePage"]
    }
];
var PersonMessagePageModule = /** @class */ (function () {
    function PersonMessagePageModule() {
    }
    PersonMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_person_message_page__WEBPACK_IMPORTED_MODULE_6__["PersonMessagePage"]]
        })
    ], PersonMessagePageModule);
    return PersonMessagePageModule;
}());



/***/ }),

/***/ "./src/app/personal/person-message/person-message.page.html":
/*!******************************************************************!*\
  !*** ./src/app/personal/person-message/person-message.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"canGoBack()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>个人信息</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      姓名：张三\n    </ion-item>\n    <ion-item>\n      性别：男\n    </ion-item>\n    <ion-item>\n      电话：18812341234\n    </ion-item>\n    <ion-item>\n      邮箱：123@qq.com\n    </ion-item>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/personal/person-message/person-message.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/personal/person-message/person-message.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsL3BlcnNvbi1tZXNzYWdlL3BlcnNvbi1tZXNzYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/personal/person-message/person-message.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/personal/person-message/person-message.page.ts ***!
  \****************************************************************/
/*! exports provided: PersonMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonMessagePage", function() { return PersonMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PersonMessagePage = /** @class */ (function () {
    // 执行接收操作
    function PersonMessagePage(activeRoute, nav) {
        this.activeRoute = activeRoute;
        this.nav = nav;
        this.activeRoute.queryParams.subscribe(function (params) {
            console.log(params);
        });
    }
    PersonMessagePage.prototype.ngOnInit = function () { };
    // 返回按钮
    PersonMessagePage.prototype.canGoBack = function () {
        this.nav.back();
    };
    PersonMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-person-message",
            template: __webpack_require__(/*! ./person-message.page.html */ "./src/app/personal/person-message/person-message.page.html"),
            styles: [__webpack_require__(/*! ./person-message.page.scss */ "./src/app/personal/person-message/person-message.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], PersonMessagePage);
    return PersonMessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=personal-person-message-person-message-module.js.map