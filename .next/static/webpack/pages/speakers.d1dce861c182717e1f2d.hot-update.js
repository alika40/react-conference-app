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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Tony_Desktop_MERN_STACK_conference_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var useSpeakerDataManager = function useSpeakerDataManager() {
  _s();

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_SpeakerReducer__WEBPACK_IMPORTED_MODULE_4__.default, {
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
                axios__WEBPACK_IMPORTED_MODULE_5__.default.put("/api/speakers/".concat(speakerRec.id), _objectSpread(_objectSpread({}, speakerRec), {}, {
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
                return axios__WEBPACK_IMPORTED_MODULE_5__.default.get("/api/speakers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZVNwZWFrZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlclJlZHVjZXIiLCJpc0xvYWRpbmciLCJzcGVha2VyTGlzdCIsImRpc3BhdGNoIiwidG9nZ2xlU3BlYWtlckZhdm9yaXRlIiwic3BlYWtlclJlYyIsInVwZGF0ZURhdGEiLCJheGlvcyIsImlkIiwiZmF2b3JpdGUiLCJ0eXBlIiwidXNlRWZmZWN0IiwiZmV0Y2hlZERhdGEiLCJyZXN1bHQiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQUE7O0FBQUEsb0JBQ2FDLGlEQUFVLENBQUNDLG9EQUFELEVBQWlCO0FBQUNDLGFBQVMsRUFBRSxJQUFaO0FBQWtCQyxlQUFXLEVBQUU7QUFBL0IsR0FBakIsQ0FEdkI7QUFBQTtBQUFBLE1BQ3hCRCxTQUR3QixnQkFDeEJBLFNBRHdCO0FBQUEsTUFDYkMsV0FEYSxnQkFDYkEsV0FEYTtBQUFBLE1BQ0NDLFFBREQ7O0FBR2hDLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsVUFBRCxFQUFnQjtBQUMxQyxRQUFNQyxVQUFVO0FBQUEsaVRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQyw4REFBQSx5QkFBMkJGLFVBQVUsQ0FBQ0csRUFBdEMsbUNBQWdESCxVQUFoRDtBQUE0REksMEJBQVEsRUFBRSxDQUFDSixVQUFVLENBQUNJO0FBQWxGO0FBQ0FKLDBCQUFVLENBQUNJLFFBQVgsS0FBd0IsSUFBeEIsR0FDSU4sUUFBUSxDQUFDO0FBQUNPLHNCQUFJLEVBQUUsWUFBUDtBQUFxQkYsb0JBQUUsRUFBRUgsVUFBVSxDQUFDRztBQUFwQyxpQkFBRCxDQURaLEdBRUlMLFFBQVEsQ0FBQztBQUFDTyxzQkFBSSxFQUFFLFVBQVA7QUFBbUJGLG9CQUFFLEVBQUVILFVBQVUsQ0FBQ0c7QUFBbEMsaUJBQUQsQ0FGWjs7QUFGZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFWRixVQUFVO0FBQUE7QUFBQTtBQUFBLE9BQWhCOztBQU1BQSxjQUFVO0FBQ2IsR0FSRDs7QUFVQUssa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsV0FBVztBQUFBLGtUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0dMLDhDQUFBLENBQVUsZUFBVixDQURIOztBQUFBO0FBQ1pNLHNCQURZO0FBRWhCVix3QkFBUSxDQUFDO0FBQUVPLHNCQUFJLEVBQUUsZ0JBQVI7QUFBMEJJLHNCQUFJLEVBQUVELE1BQU0sQ0FBQ0M7QUFBdkMsaUJBQUQsQ0FBUjs7QUFGZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBWEYsV0FBVztBQUFBO0FBQUE7QUFBQSxPQUFqQjs7QUFJQUEsZUFBVztBQUVYLFdBQU87QUFBQSxhQUFNRyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQU47QUFBQSxLQUFQO0FBQ0gsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLFNBQU87QUFBQ2YsYUFBUyxFQUFUQSxTQUFEO0FBQVlDLGVBQVcsRUFBWEEsV0FBWjtBQUF5QkUseUJBQXFCLEVBQXJCQTtBQUF6QixHQUFQO0FBQ0gsQ0F4QkQ7O0dBQU1OLHFCOztBQTBCTiwrREFBZUEscUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuZDFkY2U4NjFjMTgyNzE3ZTFmMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3BlYWtlclJlZHVjZXIgZnJvbSBcIi4vU3BlYWtlclJlZHVjZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmNvbnN0IHVzZVNwZWFrZXJEYXRhTWFuYWdlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt7aXNMb2FkaW5nLCBzcGVha2VyTGlzdH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlclJlZHVjZXIsIHtpc0xvYWRpbmc6IHRydWUsIHNwZWFrZXJMaXN0OiBbXX0pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNwZWFrZXJGYXZvcml0ZSA9IChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXhpb3MucHV0KGAvYXBpL3NwZWFrZXJzLyR7c3BlYWtlclJlYy5pZH1gLCB7Li4uc3BlYWtlclJlYywgZmF2b3JpdGU6ICFzcGVha2VyUmVjLmZhdm9yaXRlfSk7XHJcbiAgICAgICAgICAgIHNwZWFrZXJSZWMuZmF2b3JpdGUgPT09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwidW5mYXZvcml0ZVwiLCBpZDogc3BlYWtlclJlYy5pZH0pIDogXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJmYXZvcml0ZVwiLCBpZDogc3BlYWtlclJlYy5pZH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBkYXRlRGF0YSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoZWREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9zcGVha2Vyc1wiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcInNldFNwZWFrZXJMaXN0XCIsIGRhdGE6IHJlc3VsdC5kYXRhfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaGVkRGF0YSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gY29uc29sZS5sb2coXCJDbGVhbnVwISEhXCIpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB7aXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgdG9nZ2xlU3BlYWtlckZhdm9yaXRlfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNwZWFrZXJEYXRhTWFuYWdlcjsiXSwic291cmNlUm9vdCI6IiJ9