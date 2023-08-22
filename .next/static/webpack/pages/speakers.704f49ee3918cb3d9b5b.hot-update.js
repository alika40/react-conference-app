self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "InitialSpeakerDataContext": function() { return /* binding */ InitialSpeakerDataContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/App */ "./src/App.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\pages\\speakers.js",
    _this = undefined;



var __N_SSP = true;
var InitialSpeakerDataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(); // Integration of server-side generated codes with useContext on the client
// Solution to getServerSideProps: When the content changes, any page request causes the server to generate new
// codes, while that is going on, other page requests within this period get old content while subsequest ones get
// updated content. It scales to infinity. Run build command 'npm run build' to build the artifact for deployment. 

/**export async function getStaticProps() { // Special function from Next.js to pass returned data to react component
    const {promisify} = require("util");
    const readFile = promisify(fs.readFile);
    const jsonFile = path.resolve('./', 'db.json');
    let initialSpeakerData;
    
    try {
        const readFileData = await readFile(jsonFile);
        initialSpeakerData = JSON.parse(readFileData).speakers;
    } catch(e) {
        console.log('api/speakers error message: ', e);
    }

    return {revalidateValue: 1, props: {initialSpeakerData}};
}*/
// Integration of server-side generated codes with useContext on the client
// Downside: Overloading the server with page request for a particular page
// as it has to download all the components. It's ok if content doesn't change regularly and with requests.

var speakers = function speakers(_ref) {
  var initialSpeakerData = _ref.initialSpeakerData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InitialSpeakerDataContext.Provider, {
    value: initialSpeakerData,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_App__WEBPACK_IMPORTED_MODULE_2__.default, {
      pageName: "Speakers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 12
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (speakers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3BlYWtlcnMuanMiXSwibmFtZXMiOlsiSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dCIsIlJlYWN0Iiwic3BlYWtlcnMiLCJpbml0aWFsU3BlYWtlckRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUtPLElBQU1BLHlCQUF5QixnQkFBR0MsMERBQUEsRUFBbEMsQyxDQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFrQkEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBMEI7QUFBQSxNQUF4QkMsa0JBQXdCLFFBQXhCQSxrQkFBd0I7QUFDdkMsc0JBQU8sOERBQUMseUJBQUQsQ0FBMkIsUUFBM0I7QUFBb0MsU0FBSyxFQUFFQSxrQkFBM0M7QUFBQSwyQkFDSCw4REFBQyw2Q0FBRDtBQUFLLGNBQVEsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFHSCxDQUpEOztBQU9BLCtEQUFlRCxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjcwNGY0OWVlMzkxOGNiM2Q5YjViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4uL3NyYy9BcHBcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJbml0aWFsU3BlYWtlckRhdGFDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuLy8gSW50ZWdyYXRpb24gb2Ygc2VydmVyLXNpZGUgZ2VuZXJhdGVkIGNvZGVzIHdpdGggdXNlQ29udGV4dCBvbiB0aGUgY2xpZW50XHJcbi8vIFNvbHV0aW9uIHRvIGdldFNlcnZlclNpZGVQcm9wczogV2hlbiB0aGUgY29udGVudCBjaGFuZ2VzLCBhbnkgcGFnZSByZXF1ZXN0IGNhdXNlcyB0aGUgc2VydmVyIHRvIGdlbmVyYXRlIG5ld1xyXG4vLyBjb2Rlcywgd2hpbGUgdGhhdCBpcyBnb2luZyBvbiwgb3RoZXIgcGFnZSByZXF1ZXN0cyB3aXRoaW4gdGhpcyBwZXJpb2QgZ2V0IG9sZCBjb250ZW50IHdoaWxlIHN1YnNlcXVlc3Qgb25lcyBnZXRcclxuLy8gdXBkYXRlZCBjb250ZW50LiBJdCBzY2FsZXMgdG8gaW5maW5pdHkuIFJ1biBidWlsZCBjb21tYW5kICducG0gcnVuIGJ1aWxkJyB0byBidWlsZCB0aGUgYXJ0aWZhY3QgZm9yIGRlcGxveW1lbnQuIFxyXG4vKipleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7IC8vIFNwZWNpYWwgZnVuY3Rpb24gZnJvbSBOZXh0LmpzIHRvIHBhc3MgcmV0dXJuZWQgZGF0YSB0byByZWFjdCBjb21wb25lbnRcclxuICAgIGNvbnN0IHtwcm9taXNpZnl9ID0gcmVxdWlyZShcInV0aWxcIik7XHJcbiAgICBjb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XHJcbiAgICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZSgnLi8nLCAnZGIuanNvbicpO1xyXG4gICAgbGV0IGluaXRpYWxTcGVha2VyRGF0YTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XHJcbiAgICAgICAgaW5pdGlhbFNwZWFrZXJEYXRhID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FwaS9zcGVha2VycyBlcnJvciBtZXNzYWdlOiAnLCBlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3JldmFsaWRhdGVWYWx1ZTogMSwgcHJvcHM6IHtpbml0aWFsU3BlYWtlckRhdGF9fTtcclxufSovXHJcblxyXG4vLyBJbnRlZ3JhdGlvbiBvZiBzZXJ2ZXItc2lkZSBnZW5lcmF0ZWQgY29kZXMgd2l0aCB1c2VDb250ZXh0IG9uIHRoZSBjbGllbnRcclxuLy8gRG93bnNpZGU6IE92ZXJsb2FkaW5nIHRoZSBzZXJ2ZXIgd2l0aCBwYWdlIHJlcXVlc3QgZm9yIGEgcGFydGljdWxhciBwYWdlXHJcbi8vIGFzIGl0IGhhcyB0byBkb3dubG9hZCBhbGwgdGhlIGNvbXBvbmVudHMuIEl0J3Mgb2sgaWYgY29udGVudCBkb2Vzbid0IGNoYW5nZSByZWd1bGFybHkgYW5kIHdpdGggcmVxdWVzdHMuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7IC8vIFNwZWNpYWwgZnVuY3Rpb24gZnJvbSBOZXh0LmpzIHRvIHBhc3MgcmV0dXJuZWQgZGF0YSB0byByZWFjdCBjb21wb25lbnRcclxuICAgIGNvbnN0IHtwcm9taXNpZnl9ID0gcmVxdWlyZShcInV0aWxcIik7XHJcbiAgICBjb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XHJcbiAgICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZSgnLi8nLCAnZGIuanNvbicpO1xyXG4gICAgbGV0IGluaXRpYWxTcGVha2VyRGF0YTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XHJcbiAgICAgICAgaW5pdGlhbFNwZWFrZXJEYXRhID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FwaS9zcGVha2VycyBlcnJvciBtZXNzYWdlOiAnLCBlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3Byb3BzOiB7aW5pdGlhbFNwZWFrZXJEYXRhfX07XHJcbn1cclxuXHJcblxyXG5jb25zdCBzcGVha2VycyA9ICh7aW5pdGlhbFNwZWFrZXJEYXRhfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxJbml0aWFsU3BlYWtlckRhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpbml0aWFsU3BlYWtlckRhdGF9PlxyXG4gICAgICAgIDxBcHAgcGFnZU5hbWU9XCJTcGVha2Vyc1wiIC8+XHJcbiAgICA8L0luaXRpYWxTcGVha2VyRGF0YUNvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=