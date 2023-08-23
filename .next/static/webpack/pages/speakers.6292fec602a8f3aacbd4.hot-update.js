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
      dispatch = _useReducer[1];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZVNwZWFrZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJpbml0aWFsU3BlYWtlckRhdGEiLCJ1c2VDb250ZXh0IiwiSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dCIsInVzZVJlZHVjZXIiLCJzcGVha2VyUmVkdWNlciIsImlzTG9hZGluZyIsInNwZWFrZXJMaXN0IiwiZGlzcGF0Y2giLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJzcGVha2VyUmVjIiwidXBkYXRlRGF0YSIsImF4aW9zIiwiaWQiLCJmYXZvcml0ZSIsInR5cGUiLCJ1c2VFZmZlY3QiLCJmZXRjaGVkRGF0YSIsInJlc3VsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFBQTs7QUFDaEMsTUFBTUMsa0JBQWtCLEdBQUdDLGlEQUFVLENBQUNDLHNFQUFELENBQXJDOztBQURnQyxvQkFFYUMsaURBQVUsQ0FBQ0Msb0RBQUQsRUFBaUI7QUFBQ0MsYUFBUyxFQUFFLEtBQVo7QUFBbUJDLGVBQVcsRUFBRU47QUFBaEMsR0FBakIsQ0FGdkI7QUFBQTtBQUFBLE1BRXhCSyxTQUZ3QixnQkFFeEJBLFNBRndCO0FBQUEsTUFFYkMsV0FGYSxnQkFFYkEsV0FGYTtBQUFBLE1BRUNDLFFBRkQ7O0FBSWhDLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsVUFBRCxFQUFnQjtBQUMxQyxRQUFNQyxVQUFVO0FBQUEsaVRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQyw4REFBQSx5QkFBMkJGLFVBQVUsQ0FBQ0csRUFBdEMsbUNBQWdESCxVQUFoRDtBQUE0REksMEJBQVEsRUFBRSxDQUFDSixVQUFVLENBQUNJO0FBQWxGO0FBQ0FKLDBCQUFVLENBQUNJLFFBQVgsS0FBd0IsSUFBeEIsR0FDSU4sUUFBUSxDQUFDO0FBQUNPLHNCQUFJLEVBQUUsWUFBUDtBQUFxQkYsb0JBQUUsRUFBRUgsVUFBVSxDQUFDRztBQUFwQyxpQkFBRCxDQURaLEdBRUlMLFFBQVEsQ0FBQztBQUFDTyxzQkFBSSxFQUFFLFVBQVA7QUFBbUJGLG9CQUFFLEVBQUVILFVBQVUsQ0FBQ0c7QUFBbEMsaUJBQUQsQ0FGWjs7QUFGZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFWRixVQUFVO0FBQUE7QUFBQTtBQUFBLE9BQWhCLENBRDBDLENBTzFDOztBQUNILEdBUkQ7O0FBVUFLLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLFdBQVc7QUFBQSxrVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNHTCw4Q0FBQSxDQUFVLGVBQVYsQ0FESDs7QUFBQTtBQUNaTSxzQkFEWTtBQUVoQlYsd0JBQVEsQ0FBQztBQUFFTyxzQkFBSSxFQUFFLGdCQUFSO0FBQTBCSSxzQkFBSSxFQUFFRCxNQUFNLENBQUNDO0FBQXZDLGlCQUFELENBQVI7O0FBRmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVhGLFdBQVc7QUFBQTtBQUFBO0FBQUEsT0FBakIsQ0FEWSxDQUtaOzs7QUFFQSxXQUFPO0FBQUEsYUFBTUcsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixDQUFOO0FBQUEsS0FBUDtBQUNILEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxTQUFPO0FBQUNmLGFBQVMsRUFBVEEsU0FBRDtBQUFZQyxlQUFXLEVBQVhBLFdBQVo7QUFBeUJFLHlCQUFxQixFQUFyQkE7QUFBekIsR0FBUDtBQUNILENBekJEOztHQUFNVCxxQjs7QUEyQk4sK0RBQWVBLHFCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjYyOTJmZWM2MDJhOGYzYWFjYmQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHNwZWFrZXJSZWR1Y2VyIGZyb20gXCIuL1NwZWFrZXJSZWR1Y2VyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtJbml0aWFsU3BlYWtlckRhdGFDb250ZXh0fSBmcm9tIFwiLi4vcGFnZXMvc3BlYWtlcnNcIjtcclxuXHJcblxyXG5jb25zdCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3BlYWtlckRhdGEgPSB1c2VDb250ZXh0KEluaXRpYWxTcGVha2VyRGF0YUNvbnRleHQpO1xyXG4gICAgY29uc3QgW3tpc0xvYWRpbmcsIHNwZWFrZXJMaXN0fSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwge2lzTG9hZGluZzogZmFsc2UsIHNwZWFrZXJMaXN0OiBpbml0aWFsU3BlYWtlckRhdGF9KTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVTcGVha2VyRmF2b3JpdGUgPSAoc3BlYWtlclJlYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGF4aW9zLnB1dChgL2FwaS9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwgey4uLnNwZWFrZXJSZWMsIGZhdm9yaXRlOiAhc3BlYWtlclJlYy5mYXZvcml0ZX0pO1xyXG4gICAgICAgICAgICBzcGVha2VyUmVjLmZhdm9yaXRlID09PSB0cnVlID9cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInVuZmF2b3JpdGVcIiwgaWQ6IHNwZWFrZXJSZWMuaWR9KSA6IFxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZmF2b3JpdGVcIiwgaWQ6IHNwZWFrZXJSZWMuaWR9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vdXBkYXRlRGF0YSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoZWREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9zcGVha2Vyc1wiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcInNldFNwZWFrZXJMaXN0XCIsIGRhdGE6IHJlc3VsdC5kYXRhfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL2ZldGNoZWREYXRhKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiBjb25zb2xlLmxvZyhcIkNsZWFudXAhISFcIik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHtpc0xvYWRpbmcsIHNwZWFrZXJMaXN0LCB0b2dnbGVTcGVha2VyRmF2b3JpdGV9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyOyJdLCJzb3VyY2VSb290IjoiIn0=