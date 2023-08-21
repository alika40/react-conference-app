self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/useSpeakerDataManager.js":
/*!**************************************!*\
  !*** ./src/useSpeakerDataManager.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _speakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speakerData */ "./src/speakerData.js");
/* harmony import */ var _SpeakerReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerReducer */ "./src/SpeakerReducer.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();





var useSpeakerDataManager = function useSpeakerDataManager() {
  _s();

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_SpeakerReducer__WEBPACK_IMPORTED_MODULE_2__.default, {
    isLoading: true,
    speakerList: []
  }),
      _useReducer$ = _useReducer[0],
      isLoading = _useReducer$.isLoading,
      speakerList = _useReducer$.speakerList,
      dispatch = _useReducer[1];

  var toggleSpeakerFavorite = function toggleSpeakerFavorite(speakerRec) {
    speakerRec.favorite === true ? dispatch({
      type: "unfavorite",
      id: speakerRec.id
    }) : dispatch({
      type: "favorite",
      id: speakerRec.id
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    new Promise(function (resolve) {
      setTimeout(function () {
        return resolve();
      }, 100);
    }).then(function () {
      dispatch({
        type: "setSpeakerList",
        data: _speakerData__WEBPACK_IMPORTED_MODULE_1__.default
      });
    });
    return function () {
      return console.log("Cleanup!!!");
    };
  }, []);
  return {
    isLoading: isLoading,
    speakerList: speakerList,
    toggleSpeakerFavorite: toggleSpeakerFavorite
  };
};

_s(useSpeakerDataManager, "kRv9j7ZFr5XQSP6HKU6AFdqFvxI=");

/* harmony default export */ __webpack_exports__["default"] = (useSpeakerDataManager);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZVNwZWFrZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlclJlZHVjZXIiLCJpc0xvYWRpbmciLCJzcGVha2VyTGlzdCIsImRpc3BhdGNoIiwidG9nZ2xlU3BlYWtlckZhdm9yaXRlIiwic3BlYWtlclJlYyIsImZhdm9yaXRlIiwidHlwZSIsImlkIiwidXNlRWZmZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsImRhdGEiLCJzcGVha2VyRGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUFBOztBQUFBLG9CQUNhQyxpREFBVSxDQUFDQyxvREFBRCxFQUFpQjtBQUFDQyxhQUFTLEVBQUUsSUFBWjtBQUFrQkMsZUFBVyxFQUFFO0FBQS9CLEdBQWpCLENBRHZCO0FBQUE7QUFBQSxNQUN4QkQsU0FEd0IsZ0JBQ3hCQSxTQUR3QjtBQUFBLE1BQ2JDLFdBRGEsZ0JBQ2JBLFdBRGE7QUFBQSxNQUNDQyxRQUREOztBQUdoQyxNQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLFVBQUQsRUFBZ0I7QUFDMUNBLGNBQVUsQ0FBQ0MsUUFBWCxLQUF3QixJQUF4QixHQUNJSCxRQUFRLENBQUM7QUFBQ0ksVUFBSSxFQUFFLFlBQVA7QUFBcUJDLFFBQUUsRUFBRUgsVUFBVSxDQUFDRztBQUFwQyxLQUFELENBRFosR0FDd0RMLFFBQVEsQ0FBQztBQUFDSSxVQUFJLEVBQUUsVUFBUDtBQUFtQkMsUUFBRSxFQUFFSCxVQUFVLENBQUNHO0FBQWxDLEtBQUQsQ0FEaEU7QUFFSCxHQUhEOztBQUtBQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3JCQyxnQkFBVSxDQUFDO0FBQUEsZUFBTUQsT0FBTyxFQUFiO0FBQUEsT0FBRCxFQUFrQixHQUFsQixDQUFWO0FBQ0gsS0FGRCxFQUdDRSxJQUhELENBR00sWUFBTTtBQUNSVixjQUFRLENBQUM7QUFDTEksWUFBSSxFQUFFLGdCQUREO0FBRUxPLFlBQUksRUFBRUMsaURBQVdBO0FBRlosT0FBRCxDQUFSO0FBSUgsS0FSRDtBQVNBLFdBQU87QUFBQSxhQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQU47QUFBQSxLQUFQO0FBQ0gsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBLFNBQU87QUFBQ2hCLGFBQVMsRUFBVEEsU0FBRDtBQUFZQyxlQUFXLEVBQVhBLFdBQVo7QUFBeUJFLHlCQUFxQixFQUFyQkE7QUFBekIsR0FBUDtBQUNILENBdEJEOztHQUFNTixxQjs7QUF3Qk4sK0RBQWVBLHFCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmE2ZDc0NDlhMDM3OGNlNTIxNzY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHNwZWFrZXJEYXRhIGZyb20gXCIuL3NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCBzcGVha2VyUmVkdWNlciBmcm9tIFwiLi9TcGVha2VyUmVkdWNlclwiO1xyXG5cclxuXHJcbmNvbnN0IHVzZVNwZWFrZXJEYXRhTWFuYWdlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt7aXNMb2FkaW5nLCBzcGVha2VyTGlzdH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlclJlZHVjZXIsIHtpc0xvYWRpbmc6IHRydWUsIHNwZWFrZXJMaXN0OiBbXX0pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNwZWFrZXJGYXZvcml0ZSA9IChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICAgICAgc3BlYWtlclJlYy5mYXZvcml0ZSA9PT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInVuZmF2b3JpdGVcIiwgaWQ6IHNwZWFrZXJSZWMuaWR9KSA6IGRpc3BhdGNoKHt0eXBlOiBcImZhdm9yaXRlXCIsIGlkOiBzcGVha2VyUmVjLmlkfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIDEwMCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwic2V0U3BlYWtlckxpc3RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNwZWFrZXJEYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjb25zb2xlLmxvZyhcIkNsZWFudXAhISFcIik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHtpc0xvYWRpbmcsIHNwZWFrZXJMaXN0LCB0b2dnbGVTcGVha2VyRmF2b3JpdGV9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyOyJdLCJzb3VyY2VSb290IjoiIn0=