(function() {
var exports = {};
exports.id = "pages/speakers";
exports.ids = ["pages/speakers"];
exports.modules = {

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/App */ "./src/App.js");

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\pages\\speakers.js";



const speakers = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_App__WEBPACK_IMPORTED_MODULE_2__.default, {
  pageName: "Speakers"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 25
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (speakers);

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigContext": function() { return /* binding */ ConfigContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speakers */ "./src/Speakers.js");
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\App.js";




const ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const configValues = {
  showSignMeUp: true,
  showSpeakerSpeakingSaturtdays: true
};

const PageToShow = pageName => {
  if (pageName === "Home") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 36
  }, undefined);
  if (pageName === "Speakers") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 40
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Not Found."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 12
  }, undefined);
};

const App = ({
  pageName
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {
    value: configValues,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GlobalState__WEBPACK_IMPORTED_MODULE_4__.GlobalProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: PageToShow(pageName)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/GlobalState.js":
/*!****************************!*\
  !*** ./src/GlobalState.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": function() { return /* binding */ GlobalContext; },
/* harmony export */   "GlobalProvider": function() { return /* binding */ GlobalProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSpeakerDataManager */ "./src/useSpeakerDataManager.js");

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\GlobalState.js";


const GlobalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const GlobalProvider = ({
  children
}) => {
  const {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount
  } = (0,_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_2__.default)();
  const provider = {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {
    value: provider,
    children: [" ", children, " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 13
  }, undefined);
};

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignMeUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignMeUp */ "./src/SignMeUp.js");

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\Header.js";


const Header = () => {
  const signupCallback = email => console.log(`Sign up called with email ${email}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jumbotron jumbotronheight",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-4 text-left",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: "October 19-20 2019"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: " San Jose, California."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-8 text-lg-right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/SVCClogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Silicon Valley Code Camp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row col-12 text-lg-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignMeUp__WEBPACK_IMPORTED_MODULE_2__.default, {
            signupCallback: signupCallback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\Home.js";




const index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col margintopbottom",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "margintopbottom10",
            children: "Code camp is a community event where developers learn fromfellow developers. We also have developer related topicsthat includesoftware branding, legal issues around software as well as other topics developers are interested in hearing about."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\ImageToggleOnScroll.js";


const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: inView,
    1: setInView
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const scrollHandler = () => setInView(isInView());

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: // transparent gif required
    isLoading ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAICRA" : inView ? secondaryImg : primaryImg,
    ref: imageRef,
    alt: ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\Menu.js";


const Menu = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-expand-sm bg-dark navbar-dark",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "navbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "navbar-nav",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item active",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/speakers",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Speaker"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/SignMeUp.js":
/*!*************************!*\
  !*** ./src/SignMeUp.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\SignMeUp.js";



const SignMeUp = ({
  signupCallback
}) => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  return context.showSignMeUp === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          placeholder: "Enter Email",
          type: "email",
          name: "email",
          value: email,
          onChange: e => setEmail(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
        }, undefined), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          disabled: !email.includes("@"),
          onClick: () => {
            signupCallback(email);
            setEmail("");
            alert("sign up confirm!");
          },
          className: "btn",
          type: "submit",
          children: "Get Updates"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignMeUp);

/***/ }),

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
/* harmony import */ var _useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSpeakerDataManager */ "./src/useSpeakerDataManager.js");

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\SpeakerDetail.js";



const SpeakerDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(({
  speakerRec,
  onHeartFavoriteHandler
}) => {
  const {
    id,
    firstName,
    lastName,
    bio,
    favorite
  } = speakerRec;
  const {
    favoriteClickCount,
    incrementFavoriteClickCount
  } = (0,_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "card-img-top",
      primaryImg: `/static/speakers/bw/speaker-${id}.jpg`,
      secondaryImg: `/static/speakers/speaker-${id}.jpg`,
      alt: `${firstName} ${lastName}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: favorite ? "heartredbutton" : "heartdarkbutton",
          onClick: e => {
            onHeartFavoriteHandler(e, speakerRec);
            incrementFavoriteClickCount();
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: ["Click Count: ", favoriteClickCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (SpeakerDetail);

/***/ }),

/***/ "./src/SpeakerReducer.js":
/*!*******************************!*\
  !*** ./src/SpeakerReducer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const speakerReducer = (state, action) => {
  const updateFavorite = favoriteValue => {
    return state.speakerList.map(item => {
      if (item.id === action.id) return _objectSpread(_objectSpread({}, item), {}, {
        favorite: favoriteValue
      });
      return item;
    });
  };

  switch (action.type) {
    case "setSpeakerList":
      {
        // Spreads the state and replaces old data with new state, i.e, speakerList and isLoading
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: action.data,
          isLoading: false
        });
      }

    case "favorite":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(true)
        });
      }

    case "unfavorite":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(false)
        });
      }

    case "incrementFavoriteClickCount":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          favoriteClickCount: state.favoriteClickCount + 1
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (speakerReducer);

/***/ }),

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\Speakers.js";







const Speakers = () => {
  const {
    0: speakingSaturday,
    1: setSpeakingSaturday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: speakingSunday,
    1: setSpeakingSunday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_5__.ConfigContext);
  const {
    isLoading,
    speakerList,
    toggleSpeakerFavorite
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_6__.GlobalContext);

  const handleChangeSaturday = () => setSpeakingSaturday(!speakingSaturday);

  const handleChangeSunday = () => setSpeakingSunday(!speakingSunday);

  const newSpeakerList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)( // Use useMemo to cache value from complex computation for performance optimization
  () => speakerList.filter(({
    sat,
    sun
  }) => speakingSaturday && sat || speakingSunday && sun).sort((a, b) => {
    if (a.firstName < b.firstName) return -1;
    if (a.firstName > b.firstName) return 1;
    return 0;
  }), [speakingSaturday, speakingSunday, speakerList]);
  const speakerListFiltered = isLoading ? [] : newSpeakerList;
  const heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, speakerRec) => {
    // Use useCallback together with React.memo to cache func, see SpeakerDetail
    e.preventDefault();
    toggleSpeakerFavorite(speakerRec);
  }, []);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Laoding...."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 26
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "btn-toolbar margintopbottom5 checkbox-bigger",
        children: context.showSpeakerSpeakingSaturtdays === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "hide",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                className: "form-check-input",
                type: "checkbox",
                onChange: handleChangeSaturday,
                checked: speakingSaturday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 41
              }, undefined), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 33
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                className: "form-check-input",
                type: "checkbox",
                onChange: handleChangeSunday,
                checked: speakingSunday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 41
              }, undefined), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-deck",
          children: speakerListFiltered.map(speakerRec => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__.default, {
              speakerRec: speakerRec,
              onHeartFavoriteHandler: heartFavoriteHandler
            }, speakerRec.id, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 37
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

/***/ }),

/***/ "./src/useSpeakerDataManager.js":
/*!**************************************!*\
  !*** ./src/useSpeakerDataManager.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpeakerReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerReducer */ "./src/SpeakerReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const useSpeakerDataManager = () => {
  const {
    0: {
      isLoading,
      speakerList,
      favoriteClickCount
    },
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_SpeakerReducer__WEBPACK_IMPORTED_MODULE_1__.default, {
    isLoading: true,
    speakerList: [],
    favoriteClickCount: 10
  });

  const incrementFavoriteClickCount = () => dispatch({
    type: "incrementFavoriteClickCount"
  });

  const toggleSpeakerFavorite = speakerRec => {
    const updateData = async () => {
      axios__WEBPACK_IMPORTED_MODULE_2___default().put(`/api/speakers/${speakerRec.id}`, _objectSpread(_objectSpread({}, speakerRec), {}, {
        favorite: !speakerRec.favorite
      }));
      speakerRec.favorite === true ? dispatch({
        type: "unfavorite",
        id: speakerRec.id
      }) : dispatch({
        type: "favorite",
        id: speakerRec.id
      });
    };

    updateData();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchedData = async () => {
      let result = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/speakers");
      dispatch({
        type: "setSpeakerList",
        data: result.data
      });
    };

    fetchedData();
    return () => console.log("Cleanup!!!");
  }, []);
  return {
    isLoading,
    speakerList,
    favoriteClickCount,
    incrementFavoriteClickCount,
    toggleSpeakerFavorite
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useSpeakerDataManager);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/speakers.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3BhZ2VzL3NwZWFrZXJzLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvSG9tZS5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU2lnbk1lVXAuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2Vycy5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy91c2VTcGVha2VyRGF0YU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9pZ25vcmVkfEM6XFxVc2Vyc1xcVG9ueVxcRGVza3RvcFxcTUVSTi1TVEFDS1xcY29uZmVyZW5jZS1hcHBcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJzcGVha2VycyIsIkNvbmZpZ0NvbnRleHQiLCJSZWFjdCIsImNvbmZpZ1ZhbHVlcyIsInNob3dTaWduTWVVcCIsInNob3dTcGVha2VyU3BlYWtpbmdTYXR1cnRkYXlzIiwiUGFnZVRvU2hvdyIsInBhZ2VOYW1lIiwiQXBwIiwiR2xvYmFsQ29udGV4dCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0xvYWRpbmciLCJzcGVha2VyTGlzdCIsImZhdm9yaXRlQ2xpY2tDb3VudCIsInRvZ2dsZVNwZWFrZXJGYXZvcml0ZSIsImluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCIsInVzZVNwZWFrZXJEYXRhTWFuYWdlciIsInByb3ZpZGVyIiwiSGVhZGVyIiwic2lnbnVwQ2FsbGJhY2siLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJpblZpZXciLCJzZXRJblZpZXciLCJ1c2VTdGF0ZSIsInNldElzTG9hZGluZyIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNjcm9sbEhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1lbnUiLCJTaWduTWVVcCIsInNldEVtYWlsIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbmNsdWRlcyIsImFsZXJ0IiwiU3BlYWtlckRldGFpbCIsInNwZWFrZXJSZWMiLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImJpbyIsImZhdm9yaXRlIiwic3BlYWtlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiZmF2b3JpdGVWYWx1ZSIsIm1hcCIsIml0ZW0iLCJ0eXBlIiwiZGF0YSIsIlNwZWFrZXJzIiwic3BlYWtpbmdTYXR1cmRheSIsInNldFNwZWFraW5nU2F0dXJkYXkiLCJzcGVha2luZ1N1bmRheSIsInNldFNwZWFraW5nU3VuZGF5IiwiaGFuZGxlQ2hhbmdlU2F0dXJkYXkiLCJoYW5kbGVDaGFuZ2VTdW5kYXkiLCJuZXdTcGVha2VyTGlzdCIsInVzZU1lbW8iLCJmaWx0ZXIiLCJzYXQiLCJzdW4iLCJzb3J0IiwiYSIsImIiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwiaGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwidXBkYXRlRGF0YSIsImF4aW9zIiwiZmV0Y2hlZERhdGEiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsTUFBTUEsUUFBUSxHQUFHLG1CQUFPLDhEQUFDLDZDQUFEO0FBQUssVUFBUSxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF4Qjs7QUFJQSwrREFBZUEsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLE1BQU1DLGFBQWEsZ0JBQUdDLDBEQUFBLEVBQXRCO0FBRVAsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxjQUFZLEVBQUUsSUFERztBQUVqQkMsK0JBQTZCLEVBQUU7QUFGZCxDQUFyQjs7QUFLQSxNQUFNQyxVQUFVLEdBQUlDLFFBQUQsSUFBYztBQUM3QixNQUFHQSxRQUFRLEtBQUssTUFBaEIsRUFBd0Isb0JBQU8sOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ3hCLE1BQUdBLFFBQVEsS0FBSyxVQUFoQixFQUE0QixvQkFBTyw4REFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDNUIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILENBSkQ7O0FBTUEsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFBQ0Q7QUFBRCxDQUFELEtBQWdCO0FBQ3hCLHNCQUNJLDhEQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRUosWUFBL0I7QUFBQSwyQkFDSSw4REFBQyx3REFBRDtBQUFBLDZCQUNJO0FBQUEsa0JBQU9HLFVBQVUsQ0FBQ0MsUUFBRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU9ILENBUkQ7O0FBV0EsK0RBQWVDLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUdPLE1BQU1DLGFBQWEsZ0JBQUdQLDBEQUFBLEVBQXRCO0FBR0EsTUFBTVEsY0FBYyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdCO0FBRTFDLFFBQU07QUFDRkMsYUFERTtBQUVGQyxlQUZFO0FBR0ZDLHNCQUhFO0FBSUZDLHlCQUpFO0FBS0ZDO0FBTEUsTUFNQUMsK0RBQXFCLEVBTjNCO0FBUUUsUUFBTUMsUUFBUSxHQUFHO0FBQ2ZOLGFBRGU7QUFFZkMsZUFGZTtBQUdmQyxzQkFIZTtBQUlmQyx5QkFKZTtBQUtmQztBQUxlLEdBQWpCO0FBUUYsc0JBQ1EsOERBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFRSxRQUEvQjtBQUFBLG9CQUE0Q1AsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFI7QUFHSCxDQXJCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7QUFDQTtBQUdPLE1BQU1RLE1BQU0sR0FBRyxNQUFNO0FBQ3hCLFFBQU1DLGNBQWMsR0FBSUMsS0FBRCxJQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBYSw2QkFBNEJGLEtBQU0sRUFBL0MsQ0FBbEM7O0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBSSxtQkFBUyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUtJO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBLGdDQUNJO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBS0k7QUFBSyxtQkFBUyxFQUFDLDBCQUFmO0FBQUEsaUNBQ0ksOERBQUMsOENBQUQ7QUFBVSwwQkFBYyxFQUFFRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBbUJILENBckJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlA7QUFDQTtBQUNBOztBQUdBLE1BQU1JLEtBQUssR0FBRyxNQUFNO0FBQ2hCLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLDhEQUFDLHVDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFJSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUkscUJBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXFCSCxDQXRCRDs7QUF3QkMsK0RBQWVBLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JEOztBQUdBLE1BQU1DLG1CQUFtQixHQUFHLENBQUM7QUFBQ0MsWUFBRDtBQUFhQztBQUFiLENBQUQsS0FBZ0M7QUFFeEQsUUFBTUMsUUFBUSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBdkI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLCtDQUFRLENBQUMsS0FBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDcEIsU0FBRDtBQUFBLE9BQVlxQjtBQUFaLE1BQTRCRCwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7O0FBRUEsUUFBTUUsUUFBUSxHQUFHLE1BQU07QUFDbkIsVUFBTUMsSUFBSSxHQUFHUCxRQUFRLENBQUNRLE9BQVQsQ0FBaUJDLHFCQUFqQixFQUFiO0FBQ0EsV0FBT0YsSUFBSSxDQUFDRyxHQUFMLElBQVksQ0FBWixJQUFpQkgsSUFBSSxDQUFDSSxNQUFMLElBQWVDLE1BQU0sQ0FBQ0MsV0FBOUM7QUFDSCxHQUhEOztBQUtBLFFBQU1DLGFBQWEsR0FBRyxNQUFNWCxTQUFTLENBQUNHLFFBQVEsRUFBVCxDQUFyQzs7QUFFQVMsa0RBQVMsQ0FBQyxNQUFNO0FBQ1pWLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FGLGFBQVMsQ0FBQ0csUUFBUSxFQUFULENBQVQ7QUFDQU0sVUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0YsYUFBbEM7QUFDQSxXQUFPLE1BQU1GLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNILGFBQXJDLENBQWI7QUFDSCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBUUEsc0JBQ0k7QUFBSyxPQUFHLEVBQUU7QUFDRjlCLGFBQVMsR0FBRyw2RUFBSCxHQUNUa0IsTUFBTSxHQUFHSCxZQUFILEdBQWtCRCxVQUZoQztBQUlJLE9BQUcsRUFBRUUsUUFKVDtBQUtJLE9BQUcsRUFBQztBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFILENBN0JEOztBQStCQSwrREFBZUgsbUJBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUdPLE1BQU1xQixJQUFJLEdBQUcsTUFBTTtBQUN0QixzQkFDSTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw2QkFDSTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBLGlDQUNJLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0k7QUFBRyx1QkFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQU1JO0FBQUksbUJBQVMsRUFBQyxVQUFkO0FBQUEsaUNBQ0ksOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFdBQVg7QUFBQSxtQ0FDSTtBQUFHLHVCQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFtQkgsQ0FwQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pQO0FBQ0E7O0FBR0EsTUFBTUMsUUFBUSxHQUFHLENBQUM7QUFBQzNCO0FBQUQsQ0FBRCxLQUFzQjtBQUNuQyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVEyQjtBQUFSLE1BQW9CaEIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTWlCLE9BQU8sR0FBR0MsaURBQVUsQ0FBQ2pELCtDQUFELENBQTFCO0FBRUEsU0FBT2dELE9BQU8sQ0FBQzdDLFlBQVIsS0FBeUIsS0FBekIsR0FBaUMsSUFBakMsZ0JBQ0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDJCQUNJO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDSTtBQUNJLHFCQUFXLEVBQUMsYUFEaEI7QUFFSSxjQUFJLEVBQUMsT0FGVDtBQUdJLGNBQUksRUFBQyxPQUhUO0FBSUksZUFBSyxFQUFFaUIsS0FKWDtBQUtJLGtCQUFRLEVBQUk4QixDQUFELElBQU9ILFFBQVEsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVY7QUFMOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESix1QkFRSTtBQUNJLGtCQUFRLEVBQUUsQ0FBQ2hDLEtBQUssQ0FBQ2lDLFFBQU4sQ0FBZSxHQUFmLENBRGY7QUFFSSxpQkFBTyxFQUNILE1BQU07QUFDRmxDLDBCQUFjLENBQUNDLEtBQUQsQ0FBZDtBQUNBMkIsb0JBQVEsQ0FBQyxFQUFELENBQVI7QUFDQU8saUJBQUssQ0FBQyxrQkFBRCxDQUFMO0FBQ0gsV0FQVDtBQVNJLG1CQUFTLEVBQUMsS0FUZDtBQVVJLGNBQUksRUFBQyxRQVZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFI7QUEwQkgsQ0E5QkQ7O0FBZ0NDLCtEQUFlUixRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENEO0FBQ0E7QUFDQTtBQUlBLE1BQU1TLGFBQWEsZ0JBQUd0RCxpREFBQSxDQUNsQixDQUFDO0FBQUN1RCxZQUFEO0FBQWFDO0FBQWIsQ0FBRCxLQUEwQztBQUN0QyxRQUFNO0FBQUNDLE1BQUQ7QUFBS0MsYUFBTDtBQUFnQkMsWUFBaEI7QUFBMEJDLE9BQTFCO0FBQStCQztBQUEvQixNQUEyQ04sVUFBakQ7QUFDQSxRQUFNO0FBQUMzQyxzQkFBRDtBQUFxQkU7QUFBckIsTUFBb0RDLCtEQUFxQixFQUEvRTtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUEsNEJBQ0ksOERBQUMseURBQUQ7QUFBcUIsZUFBUyxFQUFDLGNBQS9CO0FBQ29CLGdCQUFVLEVBQUcsK0JBQThCMEMsRUFBRyxNQURsRTtBQUVvQixrQkFBWSxFQUFHLDRCQUEyQkEsRUFBRyxNQUZqRTtBQUdvQixTQUFHLEVBQUcsR0FBRUMsU0FBVSxJQUFHQyxRQUFTO0FBSGxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFNSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxnQ0FDSTtBQUNJLG1CQUFTLEVBQUdFLFFBQVEsR0FBRyxnQkFBSCxHQUFzQixpQkFEOUM7QUFFSSxpQkFBTyxFQUFHWixDQUFELElBQU87QUFDWk8sa0NBQXNCLENBQUNQLENBQUQsRUFBSU0sVUFBSixDQUF0QjtBQUNBekMsdUNBQTJCO0FBQzlCO0FBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQU9JO0FBQUEscUJBQU80QyxTQUFQLE9BQW1CQyxRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBVUk7QUFBQSxvQ0FBa0IvQyxrQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKLGVBV0k7QUFBQSxrQkFBT2dEO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFzQkgsQ0ExQmlCLENBQXRCO0FBOEJBLCtEQUFlTixhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQSxNQUFNUSxjQUFjLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3RDLFFBQU1DLGNBQWMsR0FBSUMsYUFBRCxJQUFtQjtBQUN0QyxXQUFPSCxLQUFLLENBQUNwRCxXQUFOLENBQWtCd0QsR0FBbEIsQ0FBdUJDLElBQUQsSUFBVTtBQUNuQyxVQUFHQSxJQUFJLENBQUNYLEVBQUwsS0FBWU8sTUFBTSxDQUFDUCxFQUF0QixFQUEwQix1Q0FBV1csSUFBWDtBQUFpQlAsZ0JBQVEsRUFBRUs7QUFBM0I7QUFDMUIsYUFBT0UsSUFBUDtBQUNILEtBSE0sQ0FBUDtBQUlILEdBTEQ7O0FBT0EsVUFBT0osTUFBTSxDQUFDSyxJQUFkO0FBQ0ksU0FBSyxnQkFBTDtBQUF1QjtBQUFDO0FBQ3BCLCtDQUFXTixLQUFYO0FBQWtCcEQscUJBQVcsRUFBRXFELE1BQU0sQ0FBQ00sSUFBdEM7QUFBNEM1RCxtQkFBUyxFQUFFO0FBQXZEO0FBQ0g7O0FBQ0QsU0FBSyxVQUFMO0FBQWlCO0FBQ2IsK0NBQVdxRCxLQUFYO0FBQWtCcEQscUJBQVcsRUFBRXNELGNBQWMsQ0FBQyxJQUFEO0FBQTdDO0FBQ0g7O0FBQ0QsU0FBSyxZQUFMO0FBQW1CO0FBQ2YsK0NBQVdGLEtBQVg7QUFBa0JwRCxxQkFBVyxFQUFFc0QsY0FBYyxDQUFDLEtBQUQ7QUFBN0M7QUFDSDs7QUFDRCxTQUFLLDZCQUFMO0FBQW9DO0FBQ2hDLCtDQUFXRixLQUFYO0FBQWtCbkQsNEJBQWtCLEVBQUVtRCxLQUFLLENBQUNuRCxrQkFBTixHQUEyQjtBQUFqRTtBQUNIOztBQUNEO0FBQVMsYUFBT21ELEtBQVA7QUFiYjtBQWVILENBdkJEOztBQXlCQSwrREFBZUQsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTVMsUUFBUSxHQUFHLE1BQU07QUFDbkIsUUFBTTtBQUFBLE9BQUNDLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQTBDM0MsK0NBQVEsQ0FBQyxJQUFELENBQXhEO0FBQ0EsUUFBTTtBQUFBLE9BQUM0QyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDN0MsK0NBQVEsQ0FBQyxJQUFELENBQXBEO0FBQ0EsUUFBTWlCLE9BQU8sR0FBR0MsaURBQVUsQ0FBQ2pELCtDQUFELENBQTFCO0FBRUEsUUFBTTtBQUNGVyxhQURFO0FBRUZDLGVBRkU7QUFHRkU7QUFIRSxNQUlGbUMsaURBQVUsQ0FBQ3pDLHVEQUFELENBSmQ7O0FBTUEsUUFBTXFFLG9CQUFvQixHQUFHLE1BQU1ILG1CQUFtQixDQUFDLENBQUNELGdCQUFGLENBQXREOztBQUNBLFFBQU1LLGtCQUFrQixHQUFHLE1BQU1GLGlCQUFpQixDQUFDLENBQUNELGNBQUYsQ0FBbEQ7O0FBRUEsUUFBTUksY0FBYyxHQUFHQyw4Q0FBTyxFQUFDO0FBQzNCLFFBQU1wRSxXQUFXLENBQ2hCcUUsTUFESyxDQUNFLENBQUM7QUFBQ0MsT0FBRDtBQUFNQztBQUFOLEdBQUQsS0FBaUJWLGdCQUFnQixJQUFJUyxHQUFyQixJQUE4QlAsY0FBYyxJQUFJUSxHQURsRSxFQUVMQyxJQUZLLENBRUEsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDUixRQUFHRCxDQUFDLENBQUMxQixTQUFGLEdBQWMyQixDQUFDLENBQUMzQixTQUFuQixFQUE4QixPQUFPLENBQUMsQ0FBUjtBQUM5QixRQUFHMEIsQ0FBQyxDQUFDMUIsU0FBRixHQUFjMkIsQ0FBQyxDQUFDM0IsU0FBbkIsRUFBOEIsT0FBTyxDQUFQO0FBQzlCLFdBQU8sQ0FBUDtBQUNILEdBTkMsQ0FEb0IsRUFPbEIsQ0FBQ2MsZ0JBQUQsRUFBbUJFLGNBQW5CLEVBQW1DL0QsV0FBbkMsQ0FQa0IsQ0FBOUI7QUFVQSxRQUFNMkUsbUJBQW1CLEdBQUc1RSxTQUFTLEdBQUcsRUFBSCxHQUFRb0UsY0FBN0M7QUFFQSxRQUFNUyxvQkFBb0IsR0FBR0Msa0RBQVcsQ0FBQyxDQUFDdkMsQ0FBRCxFQUFJTSxVQUFKLEtBQW1CO0FBQUU7QUFDMUROLEtBQUMsQ0FBQ3dDLGNBQUY7QUFDQTVFLHlCQUFxQixDQUFDMEMsVUFBRCxDQUFyQjtBQUNILEdBSHVDLEVBR3JDLEVBSHFDLENBQXhDO0FBS0EsTUFBRzdDLFNBQUgsRUFBYyxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBRWQsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUksOERBQUMsdUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUlJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsOENBQWY7QUFBQSxrQkFFUXFDLE9BQU8sQ0FBQzVDLDZCQUFSLEtBQTBDLEtBQTFDLEdBQWtELElBQWxELGdCQUNJO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsbUNBQ0k7QUFBTyx1QkFBUyxFQUFDLGtCQUFqQjtBQUFBLHNDQUNJO0FBQU8seUJBQVMsRUFBQyxrQkFBakI7QUFDSSxvQkFBSSxFQUFDLFVBRFQ7QUFFSSx3QkFBUSxFQUFFeUUsb0JBRmQ7QUFHSSx1QkFBTyxFQUFFSjtBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQVdJO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFBLG1DQUNJO0FBQU8sdUJBQVMsRUFBQyxrQkFBakI7QUFBQSxzQ0FDSTtBQUFPLHlCQUFTLEVBQUMsa0JBQWpCO0FBQ0ksb0JBQUksRUFBQyxVQURUO0FBRUksd0JBQVEsRUFBRUssa0JBRmQ7QUFHSSx1QkFBTyxFQUFFSDtBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBNEJJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxvQkFFUVksbUJBQW1CLENBQUNuQixHQUFwQixDQUF5QlosVUFBRCxJQUFnQjtBQUNwQyxnQ0FDSSw4REFBQyxtREFBRDtBQUVJLHdCQUFVLEVBQUVBLFVBRmhCO0FBR0ksb0NBQXNCLEVBQUVnQztBQUg1QixlQUNTaEMsVUFBVSxDQUFDRSxFQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBTUgsV0FQRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFtREgsQ0FwRkQ7O0FBdUZBLCtEQUFlYyxRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNeEQscUJBQXFCLEdBQUcsTUFBTTtBQUNoQyxRQUFNO0FBQUEsT0FBQztBQUFDTCxlQUFEO0FBQVlDLGlCQUFaO0FBQXlCQztBQUF6QixLQUFEO0FBQUEsT0FBZ0Q4RTtBQUFoRCxNQUE0REMsaURBQVUsQ0FDaEI3QixvREFEZ0IsRUFFaEI7QUFDSXBELGFBQVMsRUFBRSxJQURmO0FBRUlDLGVBQVcsRUFBRSxFQUZqQjtBQUdJQyxzQkFBa0IsRUFBRTtBQUh4QixHQUZnQixDQUE1RTs7QUFTQSxRQUFNRSwyQkFBMkIsR0FBRyxNQUFNNEUsUUFBUSxDQUFDO0FBQUNyQixRQUFJLEVBQUU7QUFBUCxHQUFELENBQWxEOztBQUVBLFFBQU14RCxxQkFBcUIsR0FBSTBDLFVBQUQsSUFBZ0I7QUFDMUMsVUFBTXFDLFVBQVUsR0FBRyxZQUFZO0FBQzNCQyxzREFBQSxDQUFXLGlCQUFnQnRDLFVBQVUsQ0FBQ0UsRUFBRyxFQUF6QyxrQ0FBZ0RGLFVBQWhEO0FBQTRETSxnQkFBUSxFQUFFLENBQUNOLFVBQVUsQ0FBQ007QUFBbEY7QUFDQU4sZ0JBQVUsQ0FBQ00sUUFBWCxLQUF3QixJQUF4QixHQUNJNkIsUUFBUSxDQUFDO0FBQUNyQixZQUFJLEVBQUUsWUFBUDtBQUFxQlosVUFBRSxFQUFFRixVQUFVLENBQUNFO0FBQXBDLE9BQUQsQ0FEWixHQUVJaUMsUUFBUSxDQUFDO0FBQUNyQixZQUFJLEVBQUUsVUFBUDtBQUFtQlosVUFBRSxFQUFFRixVQUFVLENBQUNFO0FBQWxDLE9BQUQsQ0FGWjtBQUdILEtBTEQ7O0FBTUFtQyxjQUFVO0FBQ2IsR0FSRDs7QUFVQW5ELGtEQUFTLENBQUMsTUFBTTtBQUNaLFVBQU1xRCxXQUFXLEdBQUcsWUFBWTtBQUM1QixVQUFJQyxNQUFNLEdBQUcsTUFBTUYsZ0RBQUEsQ0FBVSxlQUFWLENBQW5CO0FBQ0FILGNBQVEsQ0FBQztBQUFFckIsWUFBSSxFQUFFLGdCQUFSO0FBQTBCQyxZQUFJLEVBQUV5QixNQUFNLENBQUN6QjtBQUF2QyxPQUFELENBQVI7QUFDSCxLQUhEOztBQUlBd0IsZUFBVztBQUVYLFdBQU8sTUFBTTFFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FBYjtBQUNILEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxTQUFPO0FBQUNYLGFBQUQ7QUFBWUMsZUFBWjtBQUF5QkMsc0JBQXpCO0FBQTZDRSwrQkFBN0M7QUFBMEVEO0FBQTFFLEdBQVA7QUFDSCxDQWpDRDs7QUFtQ0EsK0RBQWVFLHFCQUFmLEU7Ozs7Ozs7Ozs7O0FDeENBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9zcGVha2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi4vc3JjL0FwcFwiO1xyXG5cclxuXHJcbmNvbnN0IHNwZWFrZXJzID0gKCkgPT4gIDxBcHAgcGFnZU5hbWU9XCJTcGVha2Vyc1wiIC8+O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGVha2VyczsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuaW1wb3J0IFNwZWFrZXJzIGZyb20gXCIuL1NwZWFrZXJzXCI7XHJcbmltcG9ydCB7IEdsb2JhbFByb3ZpZGVyIH0gZnJvbSBcIi4vR2xvYmFsU3RhdGVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlnQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGNvbmZpZ1ZhbHVlcyA9IHtcclxuICAgIHNob3dTaWduTWVVcDogdHJ1ZSxcclxuICAgIHNob3dTcGVha2VyU3BlYWtpbmdTYXR1cnRkYXlzOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgUGFnZVRvU2hvdyA9IChwYWdlTmFtZSkgPT4ge1xyXG4gICAgaWYocGFnZU5hbWUgPT09IFwiSG9tZVwiKSByZXR1cm4gPEhvbWU+PC9Ib21lPjtcclxuICAgIGlmKHBhZ2VOYW1lID09PSBcIlNwZWFrZXJzXCIpIHJldHVybiA8U3BlYWtlcnM+PC9TcGVha2Vycz47XHJcbiAgICByZXR1cm4gPGRpdj5Ob3QgRm91bmQuPC9kaXY+O1xyXG59O1xyXG5cclxuY29uc3QgQXBwID0gKHtwYWdlTmFtZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbmZpZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbmZpZ1ZhbHVlc30+XHJcbiAgICAgICAgICAgIDxHbG9iYWxQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXY+eyBQYWdlVG9TaG93KHBhZ2VOYW1lKSB9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvR2xvYmFsUHJvdmlkZXI+XHJcbiAgICAgICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gXCIuL3VzZVNwZWFrZXJEYXRhTWFuYWdlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgICAgICBzcGVha2VyTGlzdCxcclxuICAgICAgICBmYXZvcml0ZUNsaWNrQ291bnQsXHJcbiAgICAgICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlLFxyXG4gICAgICAgIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCxcclxuICAgICAgfSA9IHVzZVNwZWFrZXJEYXRhTWFuYWdlcigpO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0ge1xyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgICAgICBzcGVha2VyTGlzdCxcclxuICAgICAgICBmYXZvcml0ZUNsaWNrQ291bnQsXHJcbiAgICAgICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlLFxyXG4gICAgICAgIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCxcclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvdmlkZXJ9PiB7IGNoaWxkcmVuIH0gPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICApO1xyXG59OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNpZ25NZVVwIGZyb20gXCIuL1NpZ25NZVVwXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNpZ251cENhbGxiYWNrID0gKGVtYWlsKSA9PiBjb25zb2xlLmxvZyhgU2lnbiB1cCBjYWxsZWQgd2l0aCBlbWFpbCAke2VtYWlsfWApOyBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24ganVtYm90cm9uaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2VcIj5PY3RvYmVyIDE5LTIwIDIwMTk8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPiBTYW4gSm9zZSwgQ2FsaWZvcm5pYS48L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tOCB0ZXh0LWxnLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL1NWQ0Nsb2dvLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+U2lsaWNvbiBWYWxsZXkgQ29kZSBDYW1wPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2wtMTIgdGV4dC1sZy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lnbk1lVXAgc2lnbnVwQ2FsbGJhY2s9e3NpZ251cENhbGxiYWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9NZW51XCI7XHJcblxyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG1hcmdpbnRvcGJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+SG9tZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYXJnaW50b3Bib3R0b20xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29kZSBjYW1wIGlzIGEgY29tbXVuaXR5IGV2ZW50IHdoZXJlIGRldmVsb3BlcnMgbGVhcm4gZnJvbWZlbGxvdyBkZXZlbG9wZXJzLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGFsc28gaGF2ZSBkZXZlbG9wZXIgcmVsYXRlZCB0b3BpY3N0aGF0IGluY2x1ZGVzb2Z0d2FyZSBicmFuZGluZywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdhbCBpc3N1ZXMgYXJvdW5kIHNvZnR3YXJlIGFzIHdlbGwgYXMgb3RoZXIgdG9waWNzIGRldmVsb3BlcnMgYXJlIGludGVyZXN0ZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbiBoZWFyaW5nIGFib3V0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgaW5kZXg7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoe3ByaW1hcnlJbWcsIHNlY29uZGFyeUltZ30pID0+IHtcclxuXHJcbiAgICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4gc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWcgc3JjPXsvLyB0cmFuc3BhcmVudCBnaWYgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFJQ1JBXCIgOlxyXG4gICAgICAgICAgICAgICAgaW5WaWV3ID8gc2Vjb25kYXJ5SW1nIDogcHJpbWFyeUltZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlZj17aW1hZ2VSZWZ9XHJcbiAgICAgICAgICAgIGFsdD1cIlwiLz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIGJnLWRhcmsgbmF2YmFyLWRhcmtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zcGVha2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TcGVha2VyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4vQXBwXCI7XHJcblxyXG5cclxuY29uc3QgU2lnbk1lVXAgPSAoe3NpZ251cENhbGxiYWNrfSkgPT4ge1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gY29udGV4dC5zaG93U2lnbk1lVXAgPT09IGZhbHNlID8gbnVsbCA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZW1haWwuaW5jbHVkZXMoXCJAXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWdudXBDYWxsYmFjayhlbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInNpZ24gdXAgY29uZmlybSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5HZXQgVXBkYXRlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBTaWduTWVVcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gXCIuL0ltYWdlVG9nZ2xlT25TY3JvbGxcIjtcclxuaW1wb3J0IHVzZVNwZWFrZXJEYXRhTWFuYWdlciBmcm9tIFwiLi91c2VTcGVha2VyRGF0YU1hbmFnZXJcIjtcclxuXHJcblxyXG5cclxuY29uc3QgU3BlYWtlckRldGFpbCA9IFJlYWN0Lm1lbW8oXHJcbiAgICAoe3NwZWFrZXJSZWMsIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXJ9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2lkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlfSA9IHNwZWFrZXJSZWM7XHJcbiAgICAgICAgY29uc3Qge2Zhdm9yaXRlQ2xpY2tDb3VudCwgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50fSA9IHVzZVNwZWFrZXJEYXRhTWFuYWdlcigpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtNCBjYXJkbWluXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gfSAvPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGZhdm9yaXRlID8gXCJoZWFydHJlZGJ1dHRvblwiIDogXCJoZWFydGRhcmtidXR0b25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcihlLCBzcGVha2VyUmVjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntmaXJzdE5hbWV9IHtsYXN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+Q2xpY2sgQ291bnQ6IHtmYXZvcml0ZUNsaWNrQ291bnR9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YmlvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJEZXRhaWw7IiwiXHJcbmNvbnN0IHNwZWFrZXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZUZhdm9yaXRlID0gKGZhdm9yaXRlVmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RhdGUuc3BlYWtlckxpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgcmV0dXJuIHsuLi5pdGVtLCBmYXZvcml0ZTogZmF2b3JpdGVWYWx1ZX07XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcInNldFNwZWFrZXJMaXN0XCI6IHsvLyBTcHJlYWRzIHRoZSBzdGF0ZSBhbmQgcmVwbGFjZXMgb2xkIGRhdGEgd2l0aCBuZXcgc3RhdGUsIGkuZSwgc3BlYWtlckxpc3QgYW5kIGlzTG9hZGluZ1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcGVha2VyTGlzdDogYWN0aW9uLmRhdGEsIGlzTG9hZGluZzogZmFsc2V9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiZmF2b3JpdGVcIjoge1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcGVha2VyTGlzdDogdXBkYXRlRmF2b3JpdGUodHJ1ZSl9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwidW5mYXZvcml0ZVwiOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwZWFrZXJMaXN0OiB1cGRhdGVGYXZvcml0ZShmYWxzZSl9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50XCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZmF2b3JpdGVDbGlja0NvdW50OiBzdGF0ZS5mYXZvcml0ZUNsaWNrQ291bnQgKyAxfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3BlYWtlclJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0LCB7IFxyXG4gICAgdXNlU3RhdGUsXHJcbiAgICB1c2VDb250ZXh0LFxyXG4gICAgdXNlQ2FsbGJhY2ssXHJcbiAgICB1c2VNZW1vXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IFNwZWFrZXJEZXRhaWwgZnJvbSBcIi4vU3BlYWtlckRldGFpbFwiO1xyXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4vQXBwXCI7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi9HbG9iYWxTdGF0ZVwiO1xyXG5cclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgICAgICBzcGVha2VyTGlzdCxcclxuICAgICAgICB0b2dnbGVTcGVha2VyRmF2b3JpdGVcclxuICAgIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTYXR1cmRheSA9ICgpID0+IHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4gc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcclxuXHJcbiAgICBjb25zdCBuZXdTcGVha2VyTGlzdCA9IHVzZU1lbW8oLy8gVXNlIHVzZU1lbW8gdG8gY2FjaGUgdmFsdWUgZnJvbSBjb21wbGV4IGNvbXB1dGF0aW9uIGZvciBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb25cclxuICAgICAgICAoKSA9PiBzcGVha2VyTGlzdFxyXG4gICAgICAgIC5maWx0ZXIoKHtzYXQsIHN1bn0pID0+IChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bikpXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIGlmKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pLCBbc3BlYWtpbmdTYXR1cmRheSwgc3BlYWtpbmdTdW5kYXksIHNwZWFrZXJMaXN0XVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nID8gW10gOiBuZXdTcGVha2VyTGlzdDtcclxuXHJcbiAgICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IHVzZUNhbGxiYWNrKChlLCBzcGVha2VyUmVjKSA9PiB7IC8vIFVzZSB1c2VDYWxsYmFjayB0b2dldGhlciB3aXRoIFJlYWN0Lm1lbW8gdG8gY2FjaGUgZnVuYywgc2VlIFNwZWFrZXJEZXRhaWxcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TGFvZGluZy4uLi48L2Rpdj47XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXIgbWFyZ2ludG9wYm90dG9tNSBjaGVja2JveC1iaWdnZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2hvd1NwZWFrZXJTcGVha2luZ1NhdHVydGRheXMgPT09IGZhbHNlID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXJMaXN0RmlsdGVyZWQubWFwKChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyUmVjPXtzcGVha2VyUmVjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3BlYWtlclJlZHVjZXIgZnJvbSBcIi4vU3BlYWtlclJlZHVjZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmNvbnN0IHVzZVNwZWFrZXJEYXRhTWFuYWdlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt7aXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgZmF2b3JpdGVDbGlja0NvdW50IH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyUmVkdWNlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlckxpc3Q6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlQ2xpY2tDb3VudDogMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQgPSAoKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnRcIn0pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNwZWFrZXJGYXZvcml0ZSA9IChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXhpb3MucHV0KGAvYXBpL3NwZWFrZXJzLyR7c3BlYWtlclJlYy5pZH1gLCB7Li4uc3BlYWtlclJlYywgZmF2b3JpdGU6ICFzcGVha2VyUmVjLmZhdm9yaXRlfSk7XHJcbiAgICAgICAgICAgIHNwZWFrZXJSZWMuZmF2b3JpdGUgPT09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwidW5mYXZvcml0ZVwiLCBpZDogc3BlYWtlclJlYy5pZH0pIDogXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJmYXZvcml0ZVwiLCBpZDogc3BlYWtlclJlYy5pZH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBkYXRlRGF0YSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoZWREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9zcGVha2Vyc1wiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcInNldFNwZWFrZXJMaXN0XCIsIGRhdGE6IHJlc3VsdC5kYXRhfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaGVkRGF0YSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gY29uc29sZS5sb2coXCJDbGVhbnVwISEhXCIpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB7aXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgZmF2b3JpdGVDbGlja0NvdW50LCBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQsIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZX07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTcGVha2VyRGF0YU1hbmFnZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9