(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      消息中心\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div *ngFor=\"let item of datalist\" (click)=\"toMessage()\">\n    <p class=\"message-time\">{{item.Sendtime}}</p>\n    <ion-card (click)=\"toMessage()\">\n      <ion-card-content>\n        This is content, without any paragraph or header tags, within an\n        ion-card-content element.\n      </ion-card-content>\n      <ion-item>\n        <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n        <ion-label>管理员</ion-label>\n        <ion-button fill=\"outline\" slot=\"end\">更多</ion-button>\n      </ion-item>\n    </ion-card>\n  </div> -->\n  <div>\n    <p class=\"message-time\">2019-03-10 15:48</p>\n    <ion-card (click)=\"toMessage()\">\n      <ion-card-content>\n        This is content, without any paragraph or header tags, within an\n        ion-card-content element.\n      </ion-card-content>\n      <ion-item>\n        <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n        <ion-label>管理员</ion-label>\n        <ion-button fill=\"outline\" slot=\"end\">更多</ion-button>\n      </ion-item>\n    </ion-card>\n  </div>\n\n  <div>\n    <p class=\"message-time\">2019-03-10 15:48</p>\n    <ion-card (click)=\"toMessage()\">\n      <ion-card-content>\n        This is content, without any paragraph or header tags, within an\n        ion-card-content element.\n      </ion-card-content>\n      <ion-item>\n        <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n        <ion-label>管理员</ion-label>\n        <ion-button fill=\"outline\" slot=\"end\">更多</ion-button>\n      </ion-item>\n    </ion-card>\n  </div>\n\n  <div>\n    <p class=\"message-time\">2019-03-10 15:48</p>\n    <ion-card (click)=\"toMessage()\">\n      <ion-card-content>\n        This is content, without any paragraph or header tags, within an\n        ion-card-content element.\n      </ion-card-content>\n      <ion-item>\n        <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n        <ion-label>管理员</ion-label>\n        <ion-button fill=\"outline\" slot=\"end\">更多</ion-button>\n      </ion-item>\n    </ion-card>\n  </div>\n\n  <div>\n    <p class=\"message-time\">2019-03-10 15:48</p>\n    <ion-card (click)=\"toMessage()\">\n      <ion-card-content>\n        This is content, without any paragraph or header tags, within an\n        ion-card-content element.\n      </ion-card-content>\n      <ion-item>\n        <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n        <ion-label>管理员</ion-label>\n        <ion-button fill=\"outline\" slot=\"end\">更多</ion-button>\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-time {\n  text-align: center;\n  background: #e5e5e5;\n  color: #ffffff;\n  margin: 10px auto;\n  font-size: 12px;\n  max-width: 120px;\n  padding: 2px 4px;\n  border-radius: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGFyay9Eb2N1bWVudHMvcGVyc29uYWwvd2ViL21vYmlsZS9hcHBGcmFtZS9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtdGltZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var Tab2Page = /** @class */ (function () {
    function Tab2Page(router, events) {
        this.router = router;
        this.events = events;
    }
    Tab2Page.prototype.toMessage = function () {
        var _this = this;
        this.events.subscribe("bevents", function (params) {
            // 接收B页面发布的数据
            console.log("接收数据为: " + params);
            // this.tabs.select(2);
            // 取消订阅
            _this.events.unsubscribe("bevents");
        });
        this.router.navigate(["message"], {
            queryParams: {
                page: "message"
            }
        });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tab2",
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map