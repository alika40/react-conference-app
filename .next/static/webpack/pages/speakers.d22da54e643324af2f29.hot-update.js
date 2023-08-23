self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/useSpeakerDataManager.js":
/*!**************************************!*\
  !*** ./src/useSpeakerDataManager.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SpeakerReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerReducer */ "./src/SpeakerReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _pages_speakers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/speakers */ "./pages/speakers.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import speakerData from "./speakerData";





var useSpeakerDataManager = function useSpeakerDataManager() {
  _s();

  var initialSpeakerData = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_pages_speakers__WEBPACK_IMPORTED_MODULE_5__.InitialSpeakerDataContext);

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_SpeakerReducer__WEBPACK_IMPORTED_MODULE_4__.default, {
    isLoading: false,
    speakerList: initialSpeakerData
  }),
      _useReducer$ = _useReducer[0],
      isLoading = _useReducer$.isLoading,
      speakerList = _useReducer$.speakerList,
      dispatch = _useReducer[1]; //const [{isLoading, speakerList}, dispatch] = useReducer(speakerReducer, {isLoading: true, speakerList: []});


  var toggleSpeakerFavorite = function toggleSpeakerFavorite(speakerRec) {
    var updateData = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios__WEBPACK_IMPORTED_MODULE_6__.default.put("/api/speakers/".concat(speakerRec.id), _objectSpread(_objectSpread({}, speakerRec), {}, {
                  favorite: !speakerRec.favorite
                }));
                speakerRec.favorite === true ? dispatch({
                  type: "unfavorite",
                  id: speakerRec.id
                }) : dispatch({
                  type: "favorite",
                  id: speakerRec.id
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function updateData() {
        return _ref.apply(this, arguments);
      };
    }();

    updateData();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var fetchedData = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var result;
        return C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_6__.default.get("/api/speakers");

              case 2:
                result = _context2.sent;
                dispatch({
                  type: "setSpeakerList",
                  data: result.data
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchedData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchedData();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZVNwZWFrZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJpbml0aWFsU3BlYWtlckRhdGEiLCJ1c2VDb250ZXh0IiwiSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dCIsInVzZVJlZHVjZXIiLCJzcGVha2VyUmVkdWNlciIsImlzTG9hZGluZyIsInNwZWFrZXJMaXN0IiwiZGlzcGF0Y2giLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJzcGVha2VyUmVjIiwidXBkYXRlRGF0YSIsImF4aW9zIiwiaWQiLCJmYXZvcml0ZSIsInR5cGUiLCJ1c2VFZmZlY3QiLCJmZXRjaGVkRGF0YSIsInJlc3VsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQUE7O0FBQ2hDLE1BQU1DLGtCQUFrQixHQUFHQyxpREFBVSxDQUFDQyxzRUFBRCxDQUFyQzs7QUFEZ0Msb0JBRWFDLGlEQUFVLENBQUNDLG9EQUFELEVBQWlCO0FBQUNDLGFBQVMsRUFBRSxLQUFaO0FBQW1CQyxlQUFXLEVBQUVOO0FBQWhDLEdBQWpCLENBRnZCO0FBQUE7QUFBQSxNQUV4QkssU0FGd0IsZ0JBRXhCQSxTQUZ3QjtBQUFBLE1BRWJDLFdBRmEsZ0JBRWJBLFdBRmE7QUFBQSxNQUVDQyxRQUZELG1CQUloQzs7O0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxVQUFELEVBQWdCO0FBQzFDLFFBQU1DLFVBQVU7QUFBQSxpVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLDhEQUFBLHlCQUEyQkYsVUFBVSxDQUFDRyxFQUF0QyxtQ0FBZ0RILFVBQWhEO0FBQTRESSwwQkFBUSxFQUFFLENBQUNKLFVBQVUsQ0FBQ0k7QUFBbEY7QUFDQUosMEJBQVUsQ0FBQ0ksUUFBWCxLQUF3QixJQUF4QixHQUNJTixRQUFRLENBQUM7QUFBQ08sc0JBQUksRUFBRSxZQUFQO0FBQXFCRixvQkFBRSxFQUFFSCxVQUFVLENBQUNHO0FBQXBDLGlCQUFELENBRFosR0FFSUwsUUFBUSxDQUFDO0FBQUNPLHNCQUFJLEVBQUUsVUFBUDtBQUFtQkYsb0JBQUUsRUFBRUgsVUFBVSxDQUFDRztBQUFsQyxpQkFBRCxDQUZaOztBQUZlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVZGLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBTUFBLGNBQVU7QUFDYixHQVJEOztBQVVBSyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxXQUFXO0FBQUEsa1RBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDR0wsOENBQUEsQ0FBVSxlQUFWLENBREg7O0FBQUE7QUFDWk0sc0JBRFk7QUFFaEJWLHdCQUFRLENBQUM7QUFBRU8sc0JBQUksRUFBRSxnQkFBUjtBQUEwQkksc0JBQUksRUFBRUQsTUFBTSxDQUFDQztBQUF2QyxpQkFBRCxDQUFSOztBQUZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFYRixXQUFXO0FBQUE7QUFBQTtBQUFBLE9BQWpCOztBQUlBQSxlQUFXO0FBRVgsV0FBTztBQUFBLGFBQU1HLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FBTjtBQUFBLEtBQVA7QUFDSCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsU0FBTztBQUFDZixhQUFTLEVBQVRBLFNBQUQ7QUFBWUMsZUFBVyxFQUFYQSxXQUFaO0FBQXlCRSx5QkFBcUIsRUFBckJBO0FBQXpCLEdBQVA7QUFDSCxDQTNCRDs7R0FBTVQscUI7O0FBNkJOLCtEQUFlQSxxQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy5kMjJkYTU0ZTY0MzMyNGFmMmYyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBzcGVha2VyRGF0YSBmcm9tIFwiLi9zcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQgc3BlYWtlclJlZHVjZXIgZnJvbSBcIi4vU3BlYWtlclJlZHVjZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge0luaXRpYWxTcGVha2VyRGF0YUNvbnRleHR9IGZyb20gXCIuLi9wYWdlcy9zcGVha2Vyc1wiO1xyXG5cclxuXHJcbmNvbnN0IHVzZVNwZWFrZXJEYXRhTWFuYWdlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxTcGVha2VyRGF0YSA9IHVzZUNvbnRleHQoSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dCk7XHJcbiAgICBjb25zdCBbe2lzTG9hZGluZywgc3BlYWtlckxpc3R9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJSZWR1Y2VyLCB7aXNMb2FkaW5nOiBmYWxzZSwgc3BlYWtlckxpc3Q6IGluaXRpYWxTcGVha2VyRGF0YX0pO1xyXG5cclxuICAgIC8vY29uc3QgW3tpc0xvYWRpbmcsIHNwZWFrZXJMaXN0fSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwge2lzTG9hZGluZzogdHJ1ZSwgc3BlYWtlckxpc3Q6IFtdfSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU3BlYWtlckZhdm9yaXRlID0gKHNwZWFrZXJSZWMpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBheGlvcy5wdXQoYC9hcGkvc3BlYWtlcnMvJHtzcGVha2VyUmVjLmlkfWAsIHsuLi5zcGVha2VyUmVjLCBmYXZvcml0ZTogIXNwZWFrZXJSZWMuZmF2b3JpdGV9KTtcclxuICAgICAgICAgICAgc3BlYWtlclJlYy5mYXZvcml0ZSA9PT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJ1bmZhdm9yaXRlXCIsIGlkOiBzcGVha2VyUmVjLmlkfSkgOiBcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImZhdm9yaXRlXCIsIGlkOiBzcGVha2VyUmVjLmlkfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGRhdGVEYXRhKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hlZERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3NwZWFrZXJzXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic2V0U3BlYWtlckxpc3RcIiwgZGF0YTogcmVzdWx0LmRhdGF9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZldGNoZWREYXRhKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiBjb25zb2xlLmxvZyhcIkNsZWFudXAhISFcIik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHtpc0xvYWRpbmcsIHNwZWFrZXJMaXN0LCB0b2dnbGVTcGVha2VyRmF2b3JpdGV9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyOyJdLCJzb3VyY2VSb290IjoiIn0=