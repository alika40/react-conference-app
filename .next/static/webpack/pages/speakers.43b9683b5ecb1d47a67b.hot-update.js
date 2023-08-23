self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
/* harmony import */ var _useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSpeakerDataManager */ "./src/useSpeakerDataManager.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\SpeakerDetail.js",
    _this = undefined;




var SpeakerDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(_c = function _c(_ref) {
  var speakerRec = _ref.speakerRec,
      onHeartFavoriteHandler = _ref.onHeartFavoriteHandler;
  var id = speakerRec.id,
      firstName = speakerRec.firstName,
      lastName = speakerRec.lastName,
      bio = speakerRec.bio,
      favorite = speakerRec.favorite; //const {favoriteClickCount, incrementFavoriteClickCount} = useSpeakerDataManager();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "card-img-top",
      primaryImg: "/static/speakers/bw/speaker-".concat(id, ".jpg"),
      secondaryImg: "/static/speakers/speaker-".concat(id, ".jpg"),
      alt: "".concat(firstName, " ").concat(lastName)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: favorite ? "heartredbutton" : "heartdarkbutton",
          onClick: function onClick(e) {
            onHeartFavoriteHandler(e, speakerRec); //incrementFavoriteClickCount();
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }, _this);
});
_c2 = SpeakerDetail;
/* harmony default export */ __webpack_exports__["default"] = (SpeakerDetail);

var _c, _c2;

$RefreshReg$(_c, "SpeakerDetail$React.memo");
$RefreshReg$(_c2, "SpeakerDetail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEZXRhaWwuanMiXSwibmFtZXMiOlsiU3BlYWtlckRldGFpbCIsIlJlYWN0Iiwic3BlYWtlclJlYyIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUEsSUFBTUEsYUFBYSxnQkFBR0MsaURBQUEsTUFDbEIsa0JBQTBDO0FBQUEsTUFBeENDLFVBQXdDLFFBQXhDQSxVQUF3QztBQUFBLE1BQTVCQyxzQkFBNEIsUUFBNUJBLHNCQUE0QjtBQUFBLE1BQy9CQyxFQUQrQixHQUNXRixVQURYLENBQy9CRSxFQUQrQjtBQUFBLE1BQzNCQyxTQUQyQixHQUNXSCxVQURYLENBQzNCRyxTQUQyQjtBQUFBLE1BQ2hCQyxRQURnQixHQUNXSixVQURYLENBQ2hCSSxRQURnQjtBQUFBLE1BQ05DLEdBRE0sR0FDV0wsVUFEWCxDQUNOSyxHQURNO0FBQUEsTUFDREMsUUFEQyxHQUNXTixVQURYLENBQ0RNLFFBREMsRUFHdEM7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQSw0QkFDSSw4REFBQyx5REFBRDtBQUFxQixlQUFTLEVBQUMsY0FBL0I7QUFDb0IsZ0JBQVUsd0NBQWlDSixFQUFqQyxTQUQ5QjtBQUVvQixrQkFBWSxxQ0FBOEJBLEVBQTlCLFNBRmhDO0FBR29CLFNBQUcsWUFBS0MsU0FBTCxjQUFrQkMsUUFBbEI7QUFIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUEsZ0NBQ0k7QUFDSSxtQkFBUyxFQUFHRSxRQUFRLEdBQUcsZ0JBQUgsR0FBc0IsaUJBRDlDO0FBRUksaUJBQU8sRUFBRSxpQkFBQ0MsQ0FBRCxFQUFPO0FBQ0pOLGtDQUFzQixDQUFDTSxDQUFELEVBQUlQLFVBQUosQ0FBdEIsQ0FESSxDQUVKO0FBQ0g7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBUUk7QUFBQSxxQkFBT0csU0FBUCxPQUFtQkMsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBWUk7QUFBQSxrQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1QkgsQ0E3QmlCLENBQXRCO01BQU1QLGE7QUFpQ04sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuNDNiOTY4M2I1ZWNiMWQ0N2E2N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSBcIi4vSW1hZ2VUb2dnbGVPblNjcm9sbFwiO1xyXG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gXCIuL3VzZVNwZWFrZXJEYXRhTWFuYWdlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBTcGVha2VyRGV0YWlsID0gUmVhY3QubWVtbyhcclxuICAgICh7c3BlYWtlclJlYywgb25IZWFydEZhdm9yaXRlSGFuZGxlcn0pID0+IHtcclxuICAgICAgICBjb25zdCB7aWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGV9ID0gc3BlYWtlclJlYztcclxuXHJcbiAgICAgICAgLy9jb25zdCB7ZmF2b3JpdGVDbGlja0NvdW50LCBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnR9ID0gdXNlU3BlYWtlckRhdGFNYW5hZ2VyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtNCBjYXJkbWluXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gfSAvPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGZhdm9yaXRlID8gXCJoZWFydHJlZGJ1dHRvblwiIDogXCJoZWFydGRhcmtidXR0b25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyKGUsIHNwZWFrZXJSZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2ZpcnN0TmFtZX0ge2xhc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aDU+Q2xpY2sgQ291bnQ6IHtmYXZvcml0ZUNsaWNrQ291bnR9PC9oNT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyRGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=