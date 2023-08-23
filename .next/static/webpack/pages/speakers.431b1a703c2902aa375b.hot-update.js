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
/* harmony import */ var _SpeakerReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerReducer */ "./src/SpeakerReducer.js");
/* harmony import */ var _pages_speakers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/speakers */ "./pages/speakers.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();





var useSpeakerDataManager = function useSpeakerDataManager() {
  _s();

  var initialSpeakerData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_pages_speakers__WEBPACK_IMPORTED_MODULE_2__.InitialSpeakerDataContext);

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_SpeakerReducer__WEBPACK_IMPORTED_MODULE_1__.default, {
    isLoading: false,
    speakerList: initialSpeakerData
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

_s(useSpeakerDataManager, "0pWAcgsXk3IIHE/+KWuHvzikQSA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZVNwZWFrZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJpbml0aWFsU3BlYWtlckRhdGEiLCJ1c2VDb250ZXh0IiwiSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dCIsInVzZVJlZHVjZXIiLCJzcGVha2VyUmVkdWNlciIsImlzTG9hZGluZyIsInNwZWFrZXJMaXN0IiwiZGlzcGF0Y2giLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJzcGVha2VyUmVjIiwiZmF2b3JpdGUiLCJ0eXBlIiwiaWQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFBQTs7QUFDaEMsTUFBTUMsa0JBQWtCLEdBQUdDLGlEQUFVLENBQUNDLHNFQUFELENBQXJDOztBQURnQyxvQkFFYUMsaURBQVUsQ0FBQ0Msb0RBQUQsRUFBaUI7QUFBQ0MsYUFBUyxFQUFFLEtBQVo7QUFBbUJDLGVBQVcsRUFBRU47QUFBaEMsR0FBakIsQ0FGdkI7QUFBQTtBQUFBLE1BRXhCSyxTQUZ3QixnQkFFeEJBLFNBRndCO0FBQUEsTUFFYkMsV0FGYSxnQkFFYkEsV0FGYTtBQUFBLE1BRUNDLFFBRkQ7O0FBS2hDLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsVUFBRCxFQUFnQjtBQUMxQ0EsY0FBVSxDQUFDQyxRQUFYLEtBQXdCLElBQXhCLEdBQ1FILFFBQVEsQ0FBQztBQUFDSSxVQUFJLEVBQUUsWUFBUDtBQUFxQkMsUUFBRSxFQUFFSCxVQUFVLENBQUNHO0FBQXBDLEtBQUQsQ0FEaEIsR0FFUUwsUUFBUSxDQUFDO0FBQUNJLFVBQUksRUFBRSxVQUFQO0FBQW1CQyxRQUFFLEVBQUVILFVBQVUsQ0FBQ0c7QUFBbEMsS0FBRCxDQUZoQjtBQUdILEdBSkQ7O0FBTUFDLGtEQUFTLENBQUMsWUFBTTtBQUVaLFdBQU87QUFBQSxhQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQU47QUFBQSxLQUFQO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLFNBQU87QUFBQ1YsYUFBUyxFQUFUQSxTQUFEO0FBQVlDLGVBQVcsRUFBWEEsV0FBWjtBQUF5QkUseUJBQXFCLEVBQXJCQTtBQUF6QixHQUFQO0FBQ0gsQ0FqQkQ7O0dBQU1ULHFCOztBQW1CTiwrREFBZUEscUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuNDMxYjFhNzAzYzI5MDJhYTM3NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3BlYWtlclJlZHVjZXIgZnJvbSBcIi4vU3BlYWtlclJlZHVjZXJcIjtcclxuaW1wb3J0IHtJbml0aWFsU3BlYWtlckRhdGFDb250ZXh0fSBmcm9tIFwiLi4vcGFnZXMvc3BlYWtlcnNcIjtcclxuXHJcblxyXG5jb25zdCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3BlYWtlckRhdGEgPSB1c2VDb250ZXh0KEluaXRpYWxTcGVha2VyRGF0YUNvbnRleHQpO1xyXG4gICAgY29uc3QgW3tpc0xvYWRpbmcsIHNwZWFrZXJMaXN0fSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwge2lzTG9hZGluZzogZmFsc2UsIHNwZWFrZXJMaXN0OiBpbml0aWFsU3BlYWtlckRhdGF9KTtcclxuXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU3BlYWtlckZhdm9yaXRlID0gKHNwZWFrZXJSZWMpID0+IHtcclxuICAgICAgICBzcGVha2VyUmVjLmZhdm9yaXRlID09PSB0cnVlID9cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInVuZmF2b3JpdGVcIiwgaWQ6IHNwZWFrZXJSZWMuaWR9KSA6IFxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZmF2b3JpdGVcIiwgaWQ6IHNwZWFrZXJSZWMuaWR9KTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNvbnNvbGUubG9nKFwiQ2xlYW51cCEhIVwiKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4ge2lzTG9hZGluZywgc3BlYWtlckxpc3QsIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZX07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTcGVha2VyRGF0YU1hbmFnZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==