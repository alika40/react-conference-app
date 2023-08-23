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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\SpeakerDetail.js",
    _this = undefined;


 //import useSpeakerDataManager from "./useSpeakerDataManager";

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
      lineNumber: 16,
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
          lineNumber: 23,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEZXRhaWwuanMiXSwibmFtZXMiOlsiU3BlYWtlckRldGFpbCIsIlJlYWN0Iiwic3BlYWtlclJlYyIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUtBLElBQU1BLGFBQWEsZ0JBQUdDLGlEQUFBLE1BQ2xCLGtCQUEwQztBQUFBLE1BQXhDQyxVQUF3QyxRQUF4Q0EsVUFBd0M7QUFBQSxNQUE1QkMsc0JBQTRCLFFBQTVCQSxzQkFBNEI7QUFBQSxNQUMvQkMsRUFEK0IsR0FDV0YsVUFEWCxDQUMvQkUsRUFEK0I7QUFBQSxNQUMzQkMsU0FEMkIsR0FDV0gsVUFEWCxDQUMzQkcsU0FEMkI7QUFBQSxNQUNoQkMsUUFEZ0IsR0FDV0osVUFEWCxDQUNoQkksUUFEZ0I7QUFBQSxNQUNOQyxHQURNLEdBQ1dMLFVBRFgsQ0FDTkssR0FETTtBQUFBLE1BQ0RDLFFBREMsR0FDV04sVUFEWCxDQUNETSxRQURDLEVBR3RDOztBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUEsNEJBQ0ksOERBQUMseURBQUQ7QUFBcUIsZUFBUyxFQUFDLGNBQS9CO0FBQ29CLGdCQUFVLHdDQUFpQ0osRUFBakMsU0FEOUI7QUFFb0Isa0JBQVkscUNBQThCQSxFQUE5QixTQUZoQztBQUdvQixTQUFHLFlBQUtDLFNBQUwsY0FBa0JDLFFBQWxCO0FBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLGdDQUNJO0FBQ0ksbUJBQVMsRUFBR0UsUUFBUSxHQUFHLGdCQUFILEdBQXNCLGlCQUQ5QztBQUVJLGlCQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBTztBQUNKTixrQ0FBc0IsQ0FBQ00sQ0FBRCxFQUFJUCxVQUFKLENBQXRCLENBREksQ0FFSjtBQUNIO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVFJO0FBQUEscUJBQU9HLFNBQVAsT0FBbUJDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVlJO0FBQUEsa0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJILENBN0JpQixDQUF0QjtNQUFNUCxhO0FBaUNOLCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjNlMjhhZjg1M2UxNzc0ZjQ5ZGMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gXCIuL0ltYWdlVG9nZ2xlT25TY3JvbGxcIjtcclxuLy9pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gXCIuL3VzZVNwZWFrZXJEYXRhTWFuYWdlclwiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgU3BlYWtlckRldGFpbCA9IFJlYWN0Lm1lbW8oXHJcbiAgICAoe3NwZWFrZXJSZWMsIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXJ9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2lkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlfSA9IHNwZWFrZXJSZWM7XHJcblxyXG4gICAgICAgIC8vY29uc3Qge2Zhdm9yaXRlQ2xpY2tDb3VudCwgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50fSA9IHVzZVNwZWFrZXJEYXRhTWFuYWdlcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTQgY2FyZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGwgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvYncvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YH0gLz5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBmYXZvcml0ZSA/IFwiaGVhcnRyZWRidXR0b25cIiA6IFwiaGVhcnRkYXJrYnV0dG9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcihlLCBzcGVha2VyUmVjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntmaXJzdE5hbWV9IHtsYXN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGg1PkNsaWNrIENvdW50OiB7ZmF2b3JpdGVDbGlja0NvdW50fTwvaDU+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntiaW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckRldGFpbDsiXSwic291cmNlUm9vdCI6IiJ9