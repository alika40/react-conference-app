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
var InitialSpeakerDataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();

var speakers = function speakers(_ref) {
  var initialSpeakerData = _ref.initialSpeakerData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InitialSpeakerDataContext.Provider, {
    value: initialSpeakerData,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_App__WEBPACK_IMPORTED_MODULE_2__.default, {
      pageName: "Speakers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 12
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (speakers); // import path from "path";
// import fs from "fs";
// export const InitialSpeakerDataContext = React.createContext();
// Integration of server-side generated codes with useContext on the client
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

/*export async function getServerSideProps() { // Special function from Next.js to pass returned data to react component
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

    return {props: {initialSpeakerData}};
}


const speakers = ({initialSpeakerData}) => {
    return <InitialSpeakerDataContext.Provider value={initialSpeakerData}>
        <App pageName="Speakers" />
    </InitialSpeakerDataContext.Provider>;
};*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3BlYWtlcnMuanMiXSwibmFtZXMiOlsiSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dCIsIlJlYWN0Iiwic3BlYWtlcnMiLCJpbml0aWFsU3BlYWtlckRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUtPLElBQU1BLHlCQUF5QixnQkFBR0MsMERBQUEsRUFBbEM7O0FBb0JQLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTBCO0FBQUEsTUFBeEJDLGtCQUF3QixRQUF4QkEsa0JBQXdCO0FBQ3ZDLHNCQUFPLDhEQUFDLHlCQUFELENBQTJCLFFBQTNCO0FBQW9DLFNBQUssRUFBRUEsa0JBQTNDO0FBQUEsMkJBQ0gsOERBQUMsNkNBQUQ7QUFBSyxjQUFRLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBR0gsQ0FKRDs7QUFPQSwrREFBZUQsUUFBZixFLENBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmIwMTk4NmU5NjhkOWQ1MzE3MTBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4uL3NyYy9BcHBcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJbml0aWFsU3BlYWtlckRhdGFDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7IC8vIFNwZWNpYWwgZnVuY3Rpb24gZnJvbSBOZXh0LmpzIHRvIHBhc3MgcmV0dXJuZWQgZGF0YSB0byByZWFjdCBjb21wb25lbnRcclxuICAgIGNvbnN0IHtwcm9taXNpZnl9ID0gcmVxdWlyZShcInV0aWxcIik7XHJcbiAgICBjb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XHJcbiAgICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZSgnLi8nLCAnZGIuanNvbicpO1xyXG4gICAgbGV0IGluaXRpYWxTcGVha2VyRGF0YTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XHJcbiAgICAgICAgaW5pdGlhbFNwZWFrZXJEYXRhID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FwaS9zcGVha2VycyBlcnJvciBtZXNzYWdlOiAnLCBlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3Byb3BzOiB7IGluaXRpYWxTcGVha2VyRGF0YSB9fTtcclxufVxyXG5cclxuXHJcbmNvbnN0IHNwZWFrZXJzID0gKHtpbml0aWFsU3BlYWtlckRhdGF9KSA9PiB7XHJcbiAgICByZXR1cm4gPEluaXRpYWxTcGVha2VyRGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2luaXRpYWxTcGVha2VyRGF0YX0+XHJcbiAgICAgICAgPEFwcCBwYWdlTmFtZT1cIlNwZWFrZXJzXCIgLz5cclxuICAgIDwvSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3BlYWtlcnM7XHJcblxyXG4vLyBpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG4vLyBpbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IEluaXRpYWxTcGVha2VyRGF0YUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG4vLyBJbnRlZ3JhdGlvbiBvZiBzZXJ2ZXItc2lkZSBnZW5lcmF0ZWQgY29kZXMgd2l0aCB1c2VDb250ZXh0IG9uIHRoZSBjbGllbnRcclxuLy8gU29sdXRpb24gdG8gZ2V0U2VydmVyU2lkZVByb3BzOiBXaGVuIHRoZSBjb250ZW50IGNoYW5nZXMsIGFueSBwYWdlIHJlcXVlc3QgY2F1c2VzIHRoZSBzZXJ2ZXIgdG8gZ2VuZXJhdGUgbmV3XHJcbi8vIGNvZGVzLCB3aGlsZSB0aGF0IGlzIGdvaW5nIG9uLCBvdGhlciBwYWdlIHJlcXVlc3RzIHdpdGhpbiB0aGlzIHBlcmlvZCBnZXQgb2xkIGNvbnRlbnQgd2hpbGUgc3Vic2VxdWVzdCBvbmVzIGdldFxyXG4vLyB1cGRhdGVkIGNvbnRlbnQuIEl0IHNjYWxlcyB0byBpbmZpbml0eS4gUnVuIGJ1aWxkIGNvbW1hbmQgJ25wbSBydW4gYnVpbGQnIHRvIGJ1aWxkIHRoZSBhcnRpZmFjdCBmb3IgZGVwbG95bWVudC4gXHJcbi8qKmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHsgLy8gU3BlY2lhbCBmdW5jdGlvbiBmcm9tIE5leHQuanMgdG8gcGFzcyByZXR1cm5lZCBkYXRhIHRvIHJlYWN0IGNvbXBvbmVudFxyXG4gICAgY29uc3Qge3Byb21pc2lmeX0gPSByZXF1aXJlKFwidXRpbFwiKTtcclxuICAgIGNvbnN0IHJlYWRGaWxlID0gcHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcclxuICAgIGNvbnN0IGpzb25GaWxlID0gcGF0aC5yZXNvbHZlKCcuLycsICdkYi5qc29uJyk7XHJcbiAgICBsZXQgaW5pdGlhbFNwZWFrZXJEYXRhO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcclxuICAgICAgICBpbml0aWFsU3BlYWtlckRhdGEgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXBpL3NwZWFrZXJzIGVycm9yIG1lc3NhZ2U6ICcsIGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7cmV2YWxpZGF0ZVZhbHVlOiAxLCBwcm9wczoge2luaXRpYWxTcGVha2VyRGF0YX19O1xyXG59Ki9cclxuXHJcbi8vIEludGVncmF0aW9uIG9mIHNlcnZlci1zaWRlIGdlbmVyYXRlZCBjb2RlcyB3aXRoIHVzZUNvbnRleHQgb24gdGhlIGNsaWVudFxyXG4vLyBEb3duc2lkZTogT3ZlcmxvYWRpbmcgdGhlIHNlcnZlciB3aXRoIHBhZ2UgcmVxdWVzdCBmb3IgYSBwYXJ0aWN1bGFyIHBhZ2VcclxuLy8gYXMgaXQgaGFzIHRvIGRvd25sb2FkIGFsbCB0aGUgY29tcG9uZW50cy4gSXQncyBvayBpZiBjb250ZW50IGRvZXNuJ3QgY2hhbmdlIHJlZ3VsYXJseSBhbmQgd2l0aCByZXF1ZXN0cy5cclxuLypleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkgeyAvLyBTcGVjaWFsIGZ1bmN0aW9uIGZyb20gTmV4dC5qcyB0byBwYXNzIHJldHVybmVkIGRhdGEgdG8gcmVhY3QgY29tcG9uZW50XHJcbiAgICBjb25zdCB7cHJvbWlzaWZ5fSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xyXG4gICAgY29uc3QgcmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xyXG4gICAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoJy4vJywgJ2RiLmpzb24nKTtcclxuICAgIGxldCBpbml0aWFsU3BlYWtlckRhdGE7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgICAgIGluaXRpYWxTcGVha2VyRGF0YSA9IEpTT04ucGFyc2UocmVhZEZpbGVEYXRhKS5zcGVha2VycztcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhcGkvc3BlYWtlcnMgZXJyb3IgbWVzc2FnZTogJywgZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtwcm9wczoge2luaXRpYWxTcGVha2VyRGF0YX19O1xyXG59XHJcblxyXG5cclxuY29uc3Qgc3BlYWtlcnMgPSAoe2luaXRpYWxTcGVha2VyRGF0YX0pID0+IHtcclxuICAgIHJldHVybiA8SW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17aW5pdGlhbFNwZWFrZXJEYXRhfT5cclxuICAgICAgICA8QXBwIHBhZ2VOYW1lPVwiU3BlYWtlcnNcIiAvPlxyXG4gICAgPC9Jbml0aWFsU3BlYWtlckRhdGFDb250ZXh0LlByb3ZpZGVyPjtcclxufTsqLyJdLCJzb3VyY2VSb290IjoiIn0=