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
/* harmony import */ var _speakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speakerData */ "./src/speakerData.js");
/* harmony import */ var _SpeakerReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerReducer */ "./src/SpeakerReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //import {InitialSpeakerDataContext} from "../pages/speakers";

var useSpeakerDataManager = function useSpeakerDataManager() {
  _s();

  // const initialSpeakerData = useContext(InitialSpeakerDataContext);
  // const [{isLoading, speakerList}, dispatch] = useReducer(speakerReducer, {isLoading: false, speakerList: initialSpeakerData});
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_SpeakerReducer__WEBPACK_IMPORTED_MODULE_5__.default, {
    isLoading: true,
    speakerList: []
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
    }();

    updateData();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    // new Promise((resolve) => setTimeout(() => resolve(), 100))
    // .then(() => dispatch({ type: "setSpeakerList", data: speakerData}) );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZVNwZWFrZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlclJlZHVjZXIiLCJpc0xvYWRpbmciLCJzcGVha2VyTGlzdCIsImRpc3BhdGNoIiwidG9nZ2xlU3BlYWtlckZhdm9yaXRlIiwic3BlYWtlclJlYyIsInVwZGF0ZURhdGEiLCJheGlvcyIsImlkIiwiZmF2b3JpdGUiLCJ0eXBlIiwidXNlRWZmZWN0IiwiZmV0Y2hlZERhdGEiLCJyZXN1bHQiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBR0EsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQUE7O0FBQ2hDO0FBQ0E7QUFGZ0Msb0JBSWFDLGlEQUFVLENBQUNDLG9EQUFELEVBQWlCO0FBQUNDLGFBQVMsRUFBRSxJQUFaO0FBQWtCQyxlQUFXLEVBQUU7QUFBL0IsR0FBakIsQ0FKdkI7QUFBQTtBQUFBLE1BSXhCRCxTQUp3QixnQkFJeEJBLFNBSndCO0FBQUEsTUFJYkMsV0FKYSxnQkFJYkEsV0FKYTtBQUFBLE1BSUNDLFFBSkQ7O0FBTWhDLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsVUFBRCxFQUFnQjtBQUMxQyxRQUFNQyxVQUFVO0FBQUEsaVRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQyw4REFBQSx5QkFBMkJGLFVBQVUsQ0FBQ0csRUFBdEMsbUNBQWdESCxVQUFoRDtBQUE0REksMEJBQVEsRUFBRSxDQUFDSixVQUFVLENBQUNJO0FBQWxGO0FBQ0FKLDBCQUFVLENBQUNJLFFBQVgsS0FBd0IsSUFBeEIsR0FDSU4sUUFBUSxDQUFDO0FBQUNPLHNCQUFJLEVBQUUsWUFBUDtBQUFxQkYsb0JBQUUsRUFBRUgsVUFBVSxDQUFDRztBQUFwQyxpQkFBRCxDQURaLEdBRUlMLFFBQVEsQ0FBQztBQUFDTyxzQkFBSSxFQUFFLFVBQVA7QUFBbUJGLG9CQUFFLEVBQUVILFVBQVUsQ0FBQ0c7QUFBbEMsaUJBQUQsQ0FGWjs7QUFGZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFWRixVQUFVO0FBQUE7QUFBQTtBQUFBLE9BQWhCOztBQU1BQSxjQUFVO0FBQ2IsR0FSRDs7QUFVQUssa0RBQVMsQ0FBQyxZQUFNO0FBQ1o7QUFDQTtBQUNBLFFBQU1DLFdBQVc7QUFBQSxrVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNHTCw4Q0FBQSxDQUFVLGVBQVYsQ0FESDs7QUFBQTtBQUNaTSxzQkFEWTtBQUVoQlYsd0JBQVEsQ0FBQztBQUFFTyxzQkFBSSxFQUFFLGdCQUFSO0FBQTBCSSxzQkFBSSxFQUFFRCxNQUFNLENBQUNDO0FBQXZDLGlCQUFELENBQVI7O0FBRmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVhGLFdBQVc7QUFBQTtBQUFBO0FBQUEsT0FBakI7O0FBSUFBLGVBQVc7QUFFWCxXQUFPO0FBQUEsYUFBTUcsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixDQUFOO0FBQUEsS0FBUDtBQUNILEdBVlEsRUFVTixFQVZNLENBQVQ7QUFZQSxTQUFPO0FBQUNmLGFBQVMsRUFBVEEsU0FBRDtBQUFZQyxlQUFXLEVBQVhBLFdBQVo7QUFBeUJFLHlCQUFxQixFQUFyQkE7QUFBekIsR0FBUDtBQUNILENBN0JEOztHQUFNTixxQjs7QUErQk4sK0RBQWVBLHFCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjM0MWMxMzU2ZDc0Y2Y0MDczNzE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHNwZWFrZXJEYXRhIGZyb20gXCIuL3NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCBzcGVha2VyUmVkdWNlciBmcm9tIFwiLi9TcGVha2VyUmVkdWNlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vaW1wb3J0IHtJbml0aWFsU3BlYWtlckRhdGFDb250ZXh0fSBmcm9tIFwiLi4vcGFnZXMvc3BlYWtlcnNcIjtcclxuXHJcblxyXG5jb25zdCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBpbml0aWFsU3BlYWtlckRhdGEgPSB1c2VDb250ZXh0KEluaXRpYWxTcGVha2VyRGF0YUNvbnRleHQpO1xyXG4gICAgLy8gY29uc3QgW3tpc0xvYWRpbmcsIHNwZWFrZXJMaXN0fSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwge2lzTG9hZGluZzogZmFsc2UsIHNwZWFrZXJMaXN0OiBpbml0aWFsU3BlYWtlckRhdGF9KTtcclxuXHJcbiAgICBjb25zdCBbe2lzTG9hZGluZywgc3BlYWtlckxpc3R9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJSZWR1Y2VyLCB7aXNMb2FkaW5nOiB0cnVlLCBzcGVha2VyTGlzdDogW119KTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVTcGVha2VyRmF2b3JpdGUgPSAoc3BlYWtlclJlYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGF4aW9zLnB1dChgL2FwaS9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwgey4uLnNwZWFrZXJSZWMsIGZhdm9yaXRlOiAhc3BlYWtlclJlYy5mYXZvcml0ZX0pO1xyXG4gICAgICAgICAgICBzcGVha2VyUmVjLmZhdm9yaXRlID09PSB0cnVlID9cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInVuZmF2b3JpdGVcIiwgaWQ6IHNwZWFrZXJSZWMuaWR9KSA6IFxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZmF2b3JpdGVcIiwgaWQ6IHNwZWFrZXJSZWMuaWR9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZURhdGEoKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIDEwMCkpXHJcbiAgICAgICAgLy8gLnRoZW4oKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcInNldFNwZWFrZXJMaXN0XCIsIGRhdGE6IHNwZWFrZXJEYXRhfSkgKTtcclxuICAgICAgICBjb25zdCBmZXRjaGVkRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvc3BlYWtlcnNcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzZXRTcGVha2VyTGlzdFwiLCBkYXRhOiByZXN1bHQuZGF0YX0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmV0Y2hlZERhdGEoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNvbnNvbGUubG9nKFwiQ2xlYW51cCEhIVwiKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4ge2lzTG9hZGluZywgc3BlYWtlckxpc3QsIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZX07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTcGVha2VyRGF0YU1hbmFnZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==