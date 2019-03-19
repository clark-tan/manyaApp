(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-my-kids-my-kids-module"],{

/***/ "./src/app/personal/my-kids/my-kids.module.ts":
/*!****************************************************!*\
  !*** ./src/app/personal/my-kids/my-kids.module.ts ***!
  \****************************************************/
/*! exports provided: MyKidsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyKidsPageModule", function() { return MyKidsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_kids_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-kids.page */ "./src/app/personal/my-kids/my-kids.page.ts");







var routes = [
    {
        path: '',
        component: _my_kids_page__WEBPACK_IMPORTED_MODULE_6__["MyKidsPage"]
    }
];
var MyKidsPageModule = /** @class */ (function () {
    function MyKidsPageModule() {
    }
    MyKidsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_kids_page__WEBPACK_IMPORTED_MODULE_6__["MyKidsPage"]]
        })
    ], MyKidsPageModule);
    return MyKidsPageModule;
}());



/***/ }),

/***/ "./src/app/personal/my-kids/my-kids.page.html":
/*!****************************************************!*\
  !*** ./src/app/personal/my-kids/my-kids.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>myKids</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/personal/my-kids/my-kids.page.scss":
/*!****************************************************!*\
  !*** ./src/app/personal/my-kids/my-kids.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsL215LWtpZHMvbXkta2lkcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/personal/my-kids/my-kids.page.ts":
/*!**************************************************!*\
  !*** ./src/app/personal/my-kids/my-kids.page.ts ***!
  \**************************************************/
/*! exports provided: MyKidsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyKidsPage", function() { return MyKidsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyKidsPage = /** @class */ (function () {
    function MyKidsPage() {
    }
    MyKidsPage.prototype.ngOnInit = function () {
    };
    MyKidsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-kids',
            template: __webpack_require__(/*! ./my-kids.page.html */ "./src/app/personal/my-kids/my-kids.page.html"),
            styles: [__webpack_require__(/*! ./my-kids.page.scss */ "./src/app/personal/my-kids/my-kids.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyKidsPage);
    return MyKidsPage;
}());



/***/ })

}]);
//# sourceMappingURL=personal-my-kids-my-kids-module.js.map