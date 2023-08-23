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
    }(); //updateData();

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
    }(); //fetchedData();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZVNwZWFrZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJpbml0aWFsU3BlYWtlckRhdGEiLCJ1c2VDb250ZXh0IiwiSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dCIsInVzZVJlZHVjZXIiLCJzcGVha2VyUmVkdWNlciIsImlzTG9hZGluZyIsInNwZWFrZXJMaXN0IiwiZGlzcGF0Y2giLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJzcGVha2VyUmVjIiwidXBkYXRlRGF0YSIsImF4aW9zIiwiaWQiLCJmYXZvcml0ZSIsInR5cGUiLCJ1c2VFZmZlY3QiLCJmZXRjaGVkRGF0YSIsInJlc3VsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQUE7O0FBQ2hDLE1BQU1DLGtCQUFrQixHQUFHQyxpREFBVSxDQUFDQyxzRUFBRCxDQUFyQzs7QUFEZ0Msb0JBRWFDLGlEQUFVLENBQUNDLG9EQUFELEVBQWlCO0FBQUNDLGFBQVMsRUFBRSxLQUFaO0FBQW1CQyxlQUFXLEVBQUVOO0FBQWhDLEdBQWpCLENBRnZCO0FBQUE7QUFBQSxNQUV4QkssU0FGd0IsZ0JBRXhCQSxTQUZ3QjtBQUFBLE1BRWJDLFdBRmEsZ0JBRWJBLFdBRmE7QUFBQSxNQUVDQyxRQUZELG1CQUloQzs7O0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxVQUFELEVBQWdCO0FBQzFDLFFBQU1DLFVBQVU7QUFBQSxpVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLDhEQUFBLHlCQUEyQkYsVUFBVSxDQUFDRyxFQUF0QyxtQ0FBZ0RILFVBQWhEO0FBQTRESSwwQkFBUSxFQUFFLENBQUNKLFVBQVUsQ0FBQ0k7QUFBbEY7QUFDQUosMEJBQVUsQ0FBQ0ksUUFBWCxLQUF3QixJQUF4QixHQUNJTixRQUFRLENBQUM7QUFBQ08sc0JBQUksRUFBRSxZQUFQO0FBQXFCRixvQkFBRSxFQUFFSCxVQUFVLENBQUNHO0FBQXBDLGlCQUFELENBRFosR0FFSUwsUUFBUSxDQUFDO0FBQUNPLHNCQUFJLEVBQUUsVUFBUDtBQUFtQkYsb0JBQUUsRUFBRUgsVUFBVSxDQUFDRztBQUFsQyxpQkFBRCxDQUZaOztBQUZlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVZGLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEIsQ0FEMEMsQ0FPMUM7O0FBQ0gsR0FSRDs7QUFVQUssa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsV0FBVztBQUFBLGtUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0dMLDhDQUFBLENBQVUsZUFBVixDQURIOztBQUFBO0FBQ1pNLHNCQURZO0FBRWhCVix3QkFBUSxDQUFDO0FBQUVPLHNCQUFJLEVBQUUsZ0JBQVI7QUFBMEJJLHNCQUFJLEVBQUVELE1BQU0sQ0FBQ0M7QUFBdkMsaUJBQUQsQ0FBUjs7QUFGZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBWEYsV0FBVztBQUFBO0FBQUE7QUFBQSxPQUFqQixDQURZLENBS1o7OztBQUVBLFdBQU87QUFBQSxhQUFNRyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQU47QUFBQSxLQUFQO0FBQ0gsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLFNBQU87QUFBQ2YsYUFBUyxFQUFUQSxTQUFEO0FBQVlDLGVBQVcsRUFBWEEsV0FBWjtBQUF5QkUseUJBQXFCLEVBQXJCQTtBQUF6QixHQUFQO0FBQ0gsQ0EzQkQ7O0dBQU1ULHFCOztBQTZCTiwrREFBZUEscUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYjMxNDQ4NTBlNDc0YzQ2MDc4ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgc3BlYWtlckRhdGEgZnJvbSBcIi4vc3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHNwZWFrZXJSZWR1Y2VyIGZyb20gXCIuL1NwZWFrZXJSZWR1Y2VyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtJbml0aWFsU3BlYWtlckRhdGFDb250ZXh0fSBmcm9tIFwiLi4vcGFnZXMvc3BlYWtlcnNcIjtcclxuXHJcblxyXG5jb25zdCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3BlYWtlckRhdGEgPSB1c2VDb250ZXh0KEluaXRpYWxTcGVha2VyRGF0YUNvbnRleHQpO1xyXG4gICAgY29uc3QgW3tpc0xvYWRpbmcsIHNwZWFrZXJMaXN0fSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwge2lzTG9hZGluZzogZmFsc2UsIHNwZWFrZXJMaXN0OiBpbml0aWFsU3BlYWtlckRhdGF9KTtcclxuXHJcbiAgICAvL2NvbnN0IFt7aXNMb2FkaW5nLCBzcGVha2VyTGlzdH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlclJlZHVjZXIsIHtpc0xvYWRpbmc6IHRydWUsIHNwZWFrZXJMaXN0OiBbXX0pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNwZWFrZXJGYXZvcml0ZSA9IChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXhpb3MucHV0KGAvYXBpL3NwZWFrZXJzLyR7c3BlYWtlclJlYy5pZH1gLCB7Li4uc3BlYWtlclJlYywgZmF2b3JpdGU6ICFzcGVha2VyUmVjLmZhdm9yaXRlfSk7XHJcbiAgICAgICAgICAgIHNwZWFrZXJSZWMuZmF2b3JpdGUgPT09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwidW5mYXZvcml0ZVwiLCBpZDogc3BlYWtlclJlYy5pZH0pIDogXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJmYXZvcml0ZVwiLCBpZDogc3BlYWtlclJlYy5pZH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy91cGRhdGVEYXRhKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hlZERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3NwZWFrZXJzXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic2V0U3BlYWtlckxpc3RcIiwgZGF0YTogcmVzdWx0LmRhdGF9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vZmV0Y2hlZERhdGEoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNvbnNvbGUubG9nKFwiQ2xlYW51cCEhIVwiKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4ge2lzTG9hZGluZywgc3BlYWtlckxpc3QsIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZX07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTcGVha2VyRGF0YU1hbmFnZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==