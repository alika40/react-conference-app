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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZVNwZWFrZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlclJlZHVjZXIiLCJpc0xvYWRpbmciLCJzcGVha2VyTGlzdCIsImRpc3BhdGNoIiwidG9nZ2xlU3BlYWtlckZhdm9yaXRlIiwic3BlYWtlclJlYyIsImZhdm9yaXRlIiwidHlwZSIsImlkIiwidXNlRWZmZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsImRhdGEiLCJzcGVha2VyRGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUFBOztBQUFBLG9CQUNhQyxpREFBVSxDQUFDQyxvREFBRCxFQUFpQjtBQUFDQyxhQUFTLEVBQUUsSUFBWjtBQUFrQkMsZUFBVyxFQUFFO0FBQS9CLEdBQWpCLENBRHZCO0FBQUE7QUFBQSxNQUN4QkQsU0FEd0IsZ0JBQ3hCQSxTQUR3QjtBQUFBLE1BQ2JDLFdBRGEsZ0JBQ2JBLFdBRGE7QUFBQSxNQUNDQyxRQUREOztBQUdoQyxNQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLFVBQUQsRUFBZ0I7QUFDMUNBLGNBQVUsQ0FBQ0MsUUFBWCxLQUF3QixJQUF4QixHQUErQkgsUUFBUSxDQUFDO0FBQUNJLFVBQUksRUFBRSxZQUFQO0FBQXFCQyxRQUFFLEVBQUVILFVBQVUsQ0FBQ0c7QUFBcEMsS0FBRCxDQUF2QyxHQUFtRkwsUUFBUSxDQUFDO0FBQUNJLFVBQUksRUFBRSxVQUFQO0FBQW1CQyxRQUFFLEVBQUVILFVBQVUsQ0FBQ0c7QUFBbEMsS0FBRCxDQUEzRjtBQUNILEdBRkQ7O0FBSUFDLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDckJDLGdCQUFVLENBQUM7QUFBQSxlQUFNRCxPQUFPLEVBQWI7QUFBQSxPQUFELEVBQWtCLEdBQWxCLENBQVY7QUFDSCxLQUZELEVBR0NFLElBSEQsQ0FHTSxZQUFNO0FBQ1JWLGNBQVEsQ0FBQztBQUNMSSxZQUFJLEVBQUUsZ0JBREQ7QUFFTE8sWUFBSSxFQUFFQyxpREFBV0E7QUFGWixPQUFELENBQVI7QUFJSCxLQVJEO0FBU0EsV0FBTztBQUFBLGFBQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FBTjtBQUFBLEtBQVA7QUFDSCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsU0FBTztBQUFDaEIsYUFBUyxFQUFUQSxTQUFEO0FBQVlDLGVBQVcsRUFBWEEsV0FBWjtBQUF5QkUseUJBQXFCLEVBQXJCQTtBQUF6QixHQUFQO0FBQ0gsQ0FyQkQ7O0dBQU1OLHFCOztBQXVCTiwrREFBZUEscUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuNGU1YzM1NjgxN2JiYTg0ODY5NzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSBcIi4vc3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHNwZWFrZXJSZWR1Y2VyIGZyb20gXCIuL1NwZWFrZXJSZWR1Y2VyXCI7XHJcblxyXG5cclxuY29uc3QgdXNlU3BlYWtlckRhdGFNYW5hZ2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3tpc0xvYWRpbmcsIHNwZWFrZXJMaXN0fSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwge2lzTG9hZGluZzogdHJ1ZSwgc3BlYWtlckxpc3Q6IFtdfSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU3BlYWtlckZhdm9yaXRlID0gKHNwZWFrZXJSZWMpID0+IHtcclxuICAgICAgICBzcGVha2VyUmVjLmZhdm9yaXRlID09PSB0cnVlID8gZGlzcGF0Y2goe3R5cGU6IFwidW5mYXZvcml0ZVwiLCBpZDogc3BlYWtlclJlYy5pZH0pIDogZGlzcGF0Y2goe3R5cGU6IFwiZmF2b3JpdGVcIiwgaWQ6IHNwZWFrZXJSZWMuaWR9KTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgMTAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzZXRTcGVha2VyTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogc3BlYWtlckRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNvbnNvbGUubG9nKFwiQ2xlYW51cCEhIVwiKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4ge2lzTG9hZGluZywgc3BlYWtlckxpc3QsIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZX07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTcGVha2VyRGF0YU1hbmFnZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==