self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useSpeakerDataManager */ "./src/useSpeakerDataManager.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\Speakers.js",
    _this = undefined,
    _s = $RefreshSig$();








var Speakers = function Speakers() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      speakingSaturday = _useState[0],
      setSpeakingSaturday = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      speakingSunday = _useState2[0],
      setSpeakingSunday = _useState2[1];

  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_5__.ConfigContext);

  var _useSpeakerDataManage = (0,_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_6__.default)(),
      isLoading = _useSpeakerDataManage.isLoading,
      speakerList = _useSpeakerDataManage.speakerList,
      toggleSpeakerFavorite = _useSpeakerDataManage.toggleSpeakerFavorite;

  var handleChangeSaturday = function handleChangeSaturday() {
    return setSpeakingSaturday(!speakingSaturday);
  };

  var handleChangeSunday = function handleChangeSunday() {
    return setSpeakingSunday(!speakingSunday);
  };

  var newSpeakerList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)( // Use useMemo to cache value from complex computation for performance optimization
  function () {
    return speakerList.filter(function (_ref) {
      var sat = _ref.sat,
          sun = _ref.sun;
      return speakingSaturday && sat || speakingSunday && sun;
    }).sort(function (a, b) {
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      return 0;
    });
  }, [speakingSaturday, speakingSunday, speakerList]);
  var speakerListFiltered = isLoading ? [] : newSpeakerList;
  var heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e, speakerRec) {
    // Use useCallback together with React.memo to cache func, see SpeakerDetail
    e.preventDefault();
    toggleSpeakerFavorite(speakerRec);
  }, []);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Laoding...."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 26
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 1
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 1
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "btn-toolbar margintopbottom5 checkbox-bigger",
        children: context.showSpeakerSpeakingSaturtdays === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "hide",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                className: "form-check-input",
                type: "checkbox",
                onChange: handleChangeSaturday,
                checked: speakingSaturday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 1
              }, _this), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 1
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 1
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                className: "form-check-input",
                type: "checkbox",
                onChange: handleChangeSunday,
                checked: speakingSunday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 1
              }, _this), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 1
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 1
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 1
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 1
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-deck",
          children: speakerListFiltered.map(function (speakerRec) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__.default, {
              speakerRec: speakerRec,
              onHeartFavoriteHandler: heartFavoriteHandler
            }, speakerRec.id, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 1
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 1
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 1
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 1
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 1
  }, _this);
};

_s(Speakers, "0UjeEmHbue2ahDeXkkgngUl1n4U=", false, function () {
  return [_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_6__.default];
});

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c;

$RefreshReg$(_c, "Speakers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbmZpZ0NvbnRleHQiLCJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJpc0xvYWRpbmciLCJzcGVha2VyTGlzdCIsInRvZ2dsZVNwZWFrZXJGYXZvcml0ZSIsImhhbmRsZUNoYW5nZVNhdHVyZGF5IiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwibmV3U3BlYWtlckxpc3QiLCJ1c2VNZW1vIiwiZmlsdGVyIiwic2F0Iiwic3VuIiwic29ydCIsImEiLCJiIiwiZmlyc3ROYW1lIiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwic3BlYWtlclJlYyIsInByZXZlbnREZWZhdWx0Iiwic2hvd1NwZWFrZXJTcGVha2luZ1NhdHVydGRheXMiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0ksSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUN5QkMsK0NBQVEsQ0FBQyxJQUFELENBRGpDO0FBQUEsTUFDaEJDLGdCQURnQjtBQUFBLE1BQ0VDLG1CQURGOztBQUFBLG1CQUVxQkYsK0NBQVEsQ0FBQyxJQUFELENBRjdCO0FBQUEsTUFFaEJHLGNBRmdCO0FBQUEsTUFFQUMsaUJBRkE7O0FBR3ZCLE1BQU1DLE9BQU8sR0FBR0MsaURBQVUsQ0FBQ0MsK0NBQUQsQ0FBMUI7O0FBSHVCLDhCQUtpQ0MsK0RBQXFCLEVBTHREO0FBQUEsTUFLaEJDLFNBTGdCLHlCQUtoQkEsU0FMZ0I7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QkFDQTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLG9CQUVJb0IsbUJBQW1CLENBQUNPLEdBQXBCLENBQXdCLFVBQUNILFVBQUQsRUFBZ0I7QUFDeEMsZ0NBQ0osOERBQUMsbURBQUQ7QUFFNEMsd0JBQVUsRUFBRUEsVUFGeEQ7QUFHNEMsb0NBQXNCLEVBQUVIO0FBSHBFLGVBQ3lDRyxVQUFVLENBQUNJLEVBRHBEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREk7QUFNeUMsV0FQekM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESTtBQW1EQyxDQWhGRDs7R0FBTWhDLFE7VUFLa0RTLDJEOzs7S0FMbERULFE7QUFtRk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYWE0ZmFhNmI2YjRlNmNiNzhmNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gICAgdXNlU3RhdGUsXHJcbiAgICB1c2VDb250ZXh0LFxyXG4gICAgdXNlQ2FsbGJhY2ssXHJcbiAgICB1c2VNZW1vXHJcbiAgICB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gXCIuL1NwZWFrZXJEZXRhaWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gXCIuL3VzZVNwZWFrZXJEYXRhTWFuYWdlclwiO1xyXG5cclxuXHJcbiAgICBjb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzcGVha2luZ1NhdHVyZGF5LCBzZXRTcGVha2luZ1NhdHVyZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHtpc0xvYWRpbmcsIHNwZWFrZXJMaXN0LCB0b2dnbGVTcGVha2VyRmF2b3JpdGV9ID0gdXNlU3BlYWtlckRhdGFNYW5hZ2VyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiBzZXRTcGVha2luZ1NhdHVyZGF5KCFzcGVha2luZ1NhdHVyZGF5KTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHNldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XHJcblxyXG4gICAgY29uc3QgbmV3U3BlYWtlckxpc3QgPSB1c2VNZW1vKC8vIFVzZSB1c2VNZW1vIHRvIGNhY2hlIHZhbHVlIGZyb20gY29tcGxleCBjb21wdXRhdGlvbiBmb3IgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uXHJcbiAgICAoKSA9PiBzcGVha2VyTGlzdFxyXG4gICAgLmZpbHRlcigoe3NhdCwgc3VufSkgPT4gKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKSlcclxuICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBpZihhLmZpcnN0TmFtZSA8IGIuZmlyc3ROYW1lKSByZXR1cm4gLTE7XHJcbiAgICBpZihhLmZpcnN0TmFtZSA+IGIuZmlyc3ROYW1lKSByZXR1cm4gMTtcclxuICAgIHJldHVybiAwO1xyXG4gICAgfSksIFtzcGVha2luZ1NhdHVyZGF5LCBzcGVha2luZ1N1bmRheSwgc3BlYWtlckxpc3RdXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmcgPyBbXSA6IG5ld1NwZWFrZXJMaXN0O1xyXG5cclxuICAgIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIHNwZWFrZXJSZWMpID0+IHsgLy8gVXNlIHVzZUNhbGxiYWNrIHRvZ2V0aGVyIHdpdGggUmVhY3QubWVtbyB0byBjYWNoZSBmdW5jLCBzZWUgU3BlYWtlckRldGFpbFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TGFvZGluZy4uLi48L2Rpdj47XHJcblxyXG4gICAgcmV0dXJuIChcclxuPGRpdj5cclxuPEhlYWRlciAvPlxyXG48TWVudSAvPlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciBtYXJnaW50b3Bib3R0b201IGNoZWNrYm94LWJpZ2dlclwiPlxyXG4gICAge1xyXG4gICAgY29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nU2F0dXJ0ZGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxyXG48ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG48bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG48aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhdHVyZGF5fVxyXG4gICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cclxuICAgIC8+XHJcbiAgICBTYXR1cmRheSBTcGVha2Vyc1xyXG48L2xhYmVsPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG48bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG48aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cclxuICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxyXG4gICAgLz5cclxuICAgIFN1bmRheSBTcGVha2Vyc1xyXG48L2xhYmVsPlxyXG48L2Rpdj5cclxuPC9kaXY+KVxyXG4gICAgfVxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cclxuICAgIHtcclxuICAgIHNwZWFrZXJMaXN0RmlsdGVyZWQubWFwKChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG48U3BlYWtlckRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlclJlYz17c3BlYWtlclJlY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyPXtoZWFydEZhdm9yaXRlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICApO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==