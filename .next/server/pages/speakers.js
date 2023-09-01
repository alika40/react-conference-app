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
/* harmony import */ var _favoriteClickCountContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favoriteClickCountContext */ "./src/favoriteClickCountContext.js");

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\App.js";





const ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const configValues = {
  showSignMeUp: true,
  showSpeakerSpeakingSaturtdays: true
};

const PageToShow = pageName => {
  if (pageName === "Home") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 36
  }, undefined);
  if (pageName === "Speakers") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 40
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Not Found."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 12
  }, undefined);
};

const App = ({
  pageName
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {
    value: configValues,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GlobalState__WEBPACK_IMPORTED_MODULE_4__.GlobalProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_favoriteClickCountContext__WEBPACK_IMPORTED_MODULE_5__.FavoriteClickCountProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: PageToShow(pageName)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
    error,
    hasError,
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
    forceImageRerender,
    imageRerenderIdentifier
  } = (0,_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_2__.default)();
  const provider = {
    error,
    hasError,
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
    forceImageRerender,
    imageRerenderIdentifier
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {
    value: provider,
    children: [" ", children, " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\Header.js";



const Header = () => {
  const signupCallback = email => console.log(`Sign up called with email ${email}`);

  const {
    favoriteClickCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_3__.GlobalContext);
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
          lineNumber: 14,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: " San Jose, California."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["Click Count: ", favoriteClickCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-8 text-lg-right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/SVCClogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Silicon Valley Code Camp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row col-12 text-lg-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignMeUp__WEBPACK_IMPORTED_MODULE_2__.default, {
            signupCallback: signupCallback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\ImageToggleOnScroll.js";



const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
  const {
    imageRerenderIdentifier
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_2__.GlobalContext);
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
  }, [imageRerenderIdentifier]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: // transparent gif required
    isLoading ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAICRA" : inView ? secondaryImg : primaryImg,
    ref: imageRef,
    alt: ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
/* harmony import */ var _favoriteClickCountContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favoriteClickCountContext */ "./src/favoriteClickCountContext.js");

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
    incrementFavoriteClickCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_favoriteClickCountContext__WEBPACK_IMPORTED_MODULE_3__.FavoriteClickCountContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "card-img-top",
      primaryImg: `/static/speakers/bw/speaker-${id}.jpg`,
      secondaryImg: `/static/speakers/speaker-${id}.jpg`,
      alt: `${firstName} ${lastName}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
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
          lineNumber: 21,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
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
      lineNumber: 19,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./src/actionType.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const SpeakerReducer = (state, action) => {
  const updateFavorite = favoriteValue => {
    return state.speakerList.map(item => {
      if (item.id === action.id) return _objectSpread(_objectSpread({}, item), {}, {
        favorite: favoriteValue
      });
      return item;
    });
  };

  const {
    ERRORED,
    FAVORITE,
    UNFAVORITE,
    SPEAKER_LIST,
    FORCE_IMAGE_RERENDER,
    INCREMENT_FAVORITE_CLICK_COUNT
  } = _actionType__WEBPACK_IMPORTED_MODULE_0__.actionType;

  switch (action.type) {
    case SPEAKER_LIST:
      {
        // Spreads the state and replaces old data with new state, i.e, speakerList and isLoading
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: action.data,
          isLoading: false,
          hasError: false
        });
      }

    case FAVORITE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(true)
        });
      }

    case UNFAVORITE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(false)
        });
      }

    case INCREMENT_FAVORITE_CLICK_COUNT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          favoriteClickCount: state.favoriteClickCount + 1
        });
      }

    case ERRORED:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          hasError: true,
          error: action.error
        });
      }

    case FORCE_IMAGE_RERENDER:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          imageRerenderIdentifier: new Date().getTime()
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SpeakerReducer);

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
    toggleSpeakerFavorite,
    hasError,
    error,
    forceImageRerender
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_6__.GlobalContext);

  const handleChangeSaturday = () => {
    forceImageRerender();
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    forceImageRerender();
    setSpeakingSunday(!speakingSunday);
  };

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
  if (hasError === true) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 34
  }, undefined);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Laoding...."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 26
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
                lineNumber: 71,
                columnNumber: 41
              }, undefined), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
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
                lineNumber: 81,
                columnNumber: 41
              }, undefined), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
              lineNumber: 97,
              columnNumber: 37
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

/***/ }),

/***/ "./src/actionType.js":
/*!***************************!*\
  !*** ./src/actionType.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionType": function() { return /* binding */ actionType; }
/* harmony export */ });
const actionType = {
  ERRORED: "errored",
  FAVORITE: "favorite",
  UNFAVORITE: "unfavorite",
  SPEAKER_LIST: "setSpeakerList",
  FORCE_IMAGE_RERENDER: "forceImageRerender",
  INCREMENT_FAVORITE_CLICK_COUNT: "incrementFavoriteClickCount"
};

/***/ }),

/***/ "./src/favoriteClickCountContext.js":
/*!******************************************!*\
  !*** ./src/favoriteClickCountContext.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteClickCountContext": function() { return /* binding */ FavoriteClickCountContext; },
/* harmony export */   "FavoriteClickCountProvider": function() { return /* binding */ FavoriteClickCountProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\favoriteClickCountContext.js";


const FavoriteClickCountContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const FavoriteClickCountProvider = ({
  children
}) => {
  const {
    incrementFavoriteClickCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_2__.GlobalContext);
  const provider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return {
      incrementFavoriteClickCount
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteClickCountContext.Provider, {
    value: provider,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

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
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionType */ "./src/actionType.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const useSpeakerDataManager = () => {
  const isMountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false); //Handles error that occurs when navigates away before the state is set or data is fetched

  const {
    ERRORED,
    FAVORITE,
    UNFAVORITE,
    SPEAKER_LIST,
    FORCE_IMAGE_RERENDER,
    INCREMENT_FAVORITE_CLICK_COUNT
  } = _actionType__WEBPACK_IMPORTED_MODULE_3__.actionType;
  const {
    0: {
      error,
      hasError,
      isLoading,
      speakerList,
      favoriteClickCount,
      imageRerenderIdentifier
    },
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_SpeakerReducer__WEBPACK_IMPORTED_MODULE_1__.default, {
    isLoading: true,
    speakerList: [],
    favoriteClickCount: 0,
    error: null,
    hasError: false,
    imageRerenderIdentifier: 0
  });

  const incrementFavoriteClickCount = () => dispatch({
    type: INCREMENT_FAVORITE_CLICK_COUNT
  });

  const forceImageRerender = () => dispatch({
    type: FORCE_IMAGE_RERENDER
  });

  const toggleSpeakerFavorite = speakerRec => {
    const updateData = async () => {
      axios__WEBPACK_IMPORTED_MODULE_2___default().put(`/api/speakers/${speakerRec.id}`, _objectSpread(_objectSpread({}, speakerRec), {}, {
        favorite: !speakerRec.favorite
      }));
      speakerRec.favorite === true ? dispatch({
        type: UNFAVORITE,
        id: speakerRec.id
      }) : dispatch({
        type: FAVORITE,
        id: speakerRec.id
      });
    };

    updateData();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isMountRef.current = true; //if(isMountRef.current) can also be used to cancell fetch calls when use navigates away immediately without waiting requested data 

    const fetchedData = async () => {
      try {
        let result = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/speakers");
        if (isMountRef.current) dispatch({
          type: SPEAKER_LIST,
          data: result.data
        });
      } catch (e) {
        if (isMountRef.current) dispatch({
          type: ERRORED,
          error: e
        });
      }
    };

    fetchedData();
    return () => isMountRef.current = false;
  }, []);
  return {
    error,
    hasError,
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
    forceImageRerender,
    imageRerenderIdentifier
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3BhZ2VzL3NwZWFrZXJzLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvSG9tZS5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU2lnbk1lVXAuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2Vycy5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9hY3Rpb25UeXBlLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL2Zhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvdXNlU3BlYWtlckRhdGFNYW5hZ2VyLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvaWdub3JlZHxDOlxcVXNlcnNcXFRvbnlcXERlc2t0b3BcXE1FUk4tU1RBQ0tcXGNvbmZlcmVuY2UtYXBwXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsic3BlYWtlcnMiLCJDb25maWdDb250ZXh0IiwiUmVhY3QiLCJjb25maWdWYWx1ZXMiLCJzaG93U2lnbk1lVXAiLCJzaG93U3BlYWtlclNwZWFraW5nU2F0dXJ0ZGF5cyIsIlBhZ2VUb1Nob3ciLCJwYWdlTmFtZSIsIkFwcCIsIkdsb2JhbENvbnRleHQiLCJHbG9iYWxQcm92aWRlciIsImNoaWxkcmVuIiwiZXJyb3IiLCJoYXNFcnJvciIsImlzTG9hZGluZyIsInNwZWFrZXJMaXN0IiwiZmF2b3JpdGVDbGlja0NvdW50IiwidG9nZ2xlU3BlYWtlckZhdm9yaXRlIiwiaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50IiwiZm9yY2VJbWFnZVJlcmVuZGVyIiwiaW1hZ2VSZXJlbmRlcklkZW50aWZpZXIiLCJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJwcm92aWRlciIsIkhlYWRlciIsInNpZ251cENhbGxiYWNrIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwidXNlQ29udGV4dCIsImluZGV4IiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsImluVmlldyIsInNldEluVmlldyIsInVzZVN0YXRlIiwic2V0SXNMb2FkaW5nIiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2Nyb2xsSGFuZGxlciIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTWVudSIsIlNpZ25NZVVwIiwic2V0RW1haWwiLCJjb250ZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5jbHVkZXMiLCJhbGVydCIsIlNwZWFrZXJEZXRhaWwiLCJzcGVha2VyUmVjIiwib25IZWFydEZhdm9yaXRlSGFuZGxlciIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJiaW8iLCJmYXZvcml0ZSIsIkZhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQiLCJTcGVha2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidXBkYXRlRmF2b3JpdGUiLCJmYXZvcml0ZVZhbHVlIiwibWFwIiwiaXRlbSIsIkVSUk9SRUQiLCJGQVZPUklURSIsIlVORkFWT1JJVEUiLCJTUEVBS0VSX0xJU1QiLCJGT1JDRV9JTUFHRV9SRVJFTkRFUiIsIklOQ1JFTUVOVF9GQVZPUklURV9DTElDS19DT1VOVCIsImFjdGlvblR5cGUiLCJ0eXBlIiwiZGF0YSIsIkRhdGUiLCJnZXRUaW1lIiwiU3BlYWtlcnMiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJoYW5kbGVDaGFuZ2VTYXR1cmRheSIsImhhbmRsZUNoYW5nZVN1bmRheSIsIm5ld1NwZWFrZXJMaXN0IiwidXNlTWVtbyIsImZpbHRlciIsInNhdCIsInN1biIsInNvcnQiLCJhIiwiYiIsInNwZWFrZXJMaXN0RmlsdGVyZWQiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlIiwiY3JlYXRlQ29udGV4dCIsIkZhdm9yaXRlQ2xpY2tDb3VudFByb3ZpZGVyIiwiaXNNb3VudFJlZiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVwZGF0ZURhdGEiLCJheGlvcyIsImZldGNoZWREYXRhIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLE1BQU1BLFFBQVEsR0FBRyxtQkFBTyw4REFBQyw2Q0FBRDtBQUFLLFVBQVEsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBeEI7O0FBSUEsK0RBQWVBLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQyxhQUFhLGdCQUFHQywwREFBQSxFQUF0QjtBQUVQLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsY0FBWSxFQUFFLElBREc7QUFFakJDLCtCQUE2QixFQUFFO0FBRmQsQ0FBckI7O0FBS0EsTUFBTUMsVUFBVSxHQUFJQyxRQUFELElBQWM7QUFDN0IsTUFBR0EsUUFBUSxLQUFLLE1BQWhCLEVBQXdCLG9CQUFPLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUN4QixNQUFHQSxRQUFRLEtBQUssVUFBaEIsRUFBNEIsb0JBQU8sOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQzVCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxDQUpEOztBQU1BLE1BQU1DLEdBQUcsR0FBRyxDQUFDO0FBQUNEO0FBQUQsQ0FBRCxLQUFnQjtBQUN4QixzQkFDSSw4REFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUVKLFlBQS9CO0FBQUEsMkJBQ0ksOERBQUMsd0RBQUQ7QUFBQSw2QkFDSSw4REFBQyxrRkFBRDtBQUFBLCtCQUNJO0FBQUEsb0JBQU9HLFVBQVUsQ0FBQ0MsUUFBRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFNO0FBQ1o2RCxjQUFVLENBQUNwRSxPQUFYLEdBQXFCLElBQXJCLENBRFksQ0FFWjs7QUFDQSxVQUFNeUUsV0FBVyxHQUFHLFlBQVk7QUFDNUIsVUFBSTtBQUNBLFlBQUlDLE1BQU0sR0FBRyxNQUFNRixnREFBQSxDQUFVLGVBQVYsQ0FBbkI7QUFDQSxZQUFHSixVQUFVLENBQUNwRSxPQUFkLEVBQXVCcUUsUUFBUSxDQUFDO0FBQUUzQixjQUFJLEVBQUVKLFlBQVI7QUFBc0JLLGNBQUksRUFBRStCLE1BQU0sQ0FBQy9CO0FBQW5DLFNBQUQsQ0FBUjtBQUMxQixPQUhELENBR0UsT0FBTTdCLENBQU4sRUFBUztBQUNQLFlBQUdzRCxVQUFVLENBQUNwRSxPQUFkLEVBQXVCcUUsUUFBUSxDQUFDO0FBQUUzQixjQUFJLEVBQUVQLE9BQVI7QUFBaUJoRSxlQUFLLEVBQUUyQztBQUF4QixTQUFELENBQVI7QUFDMUI7QUFDSixLQVBEOztBQVFBMkQsZUFBVztBQUVYLFdBQU8sTUFBTUwsVUFBVSxDQUFDcEUsT0FBWCxHQUFxQixLQUFsQztBQUNILEdBZFEsRUFjTixFQWRNLENBQVQ7QUFnQkEsU0FBTztBQUFDN0IsU0FBRDtBQUNDQyxZQUREO0FBRUNDLGFBRkQ7QUFHQ0MsZUFIRDtBQUlDQyxzQkFKRDtBQUtDQyx5QkFMRDtBQU1DQywrQkFORDtBQU9DQyxzQkFQRDtBQVFDQztBQVJELEdBQVA7QUFTSCxDQWpFRDs7QUFtRUEsK0RBQWVDLHFCQUFmLEU7Ozs7Ozs7Ozs7O0FDekVBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9zcGVha2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi4vc3JjL0FwcFwiO1xyXG5cclxuXHJcbmNvbnN0IHNwZWFrZXJzID0gKCkgPT4gIDxBcHAgcGFnZU5hbWU9XCJTcGVha2Vyc1wiIC8+O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGVha2VyczsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuaW1wb3J0IFNwZWFrZXJzIGZyb20gXCIuL1NwZWFrZXJzXCI7XHJcbmltcG9ydCB7IEdsb2JhbFByb3ZpZGVyIH0gZnJvbSBcIi4vR2xvYmFsU3RhdGVcIjtcclxuaW1wb3J0IHsgRmF2b3JpdGVDbGlja0NvdW50UHJvdmlkZXIgfSBmcm9tIFwiLi9mYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0XCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbmZpZ0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBjb25maWdWYWx1ZXMgPSB7XHJcbiAgICBzaG93U2lnbk1lVXA6IHRydWUsXHJcbiAgICBzaG93U3BlYWtlclNwZWFraW5nU2F0dXJ0ZGF5czogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IFBhZ2VUb1Nob3cgPSAocGFnZU5hbWUpID0+IHtcclxuICAgIGlmKHBhZ2VOYW1lID09PSBcIkhvbWVcIikgcmV0dXJuIDxIb21lPjwvSG9tZT47XHJcbiAgICBpZihwYWdlTmFtZSA9PT0gXCJTcGVha2Vyc1wiKSByZXR1cm4gPFNwZWFrZXJzPjwvU3BlYWtlcnM+O1xyXG4gICAgcmV0dXJuIDxkaXY+Tm90IEZvdW5kLjwvZGl2PjtcclxufTtcclxuXHJcbmNvbnN0IEFwcCA9ICh7cGFnZU5hbWV9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb25maWdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb25maWdWYWx1ZXN9PlxyXG4gICAgICAgICAgICA8R2xvYmFsUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8RmF2b3JpdGVDbGlja0NvdW50UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57IFBhZ2VUb1Nob3cocGFnZU5hbWUpIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRmF2b3JpdGVDbGlja0NvdW50UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvR2xvYmFsUHJvdmlkZXI+XHJcbiAgICAgICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gXCIuL3VzZVNwZWFrZXJEYXRhTWFuYWdlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgaGFzRXJyb3IsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIHNwZWFrZXJMaXN0LFxyXG4gICAgICAgIGZhdm9yaXRlQ2xpY2tDb3VudCxcclxuICAgICAgICB0b2dnbGVTcGVha2VyRmF2b3JpdGUsXHJcbiAgICAgICAgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50LFxyXG4gICAgICAgIGZvcmNlSW1hZ2VSZXJlbmRlcixcclxuICAgICAgICBpbWFnZVJlcmVuZGVySWRlbnRpZmllclxyXG4gICAgICB9ID0gdXNlU3BlYWtlckRhdGFNYW5hZ2VyKCk7XHJcbiAgICBcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSB7XHJcbiAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgaGFzRXJyb3IsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIHNwZWFrZXJMaXN0LFxyXG4gICAgICAgIGZhdm9yaXRlQ2xpY2tDb3VudCxcclxuICAgICAgICB0b2dnbGVTcGVha2VyRmF2b3JpdGUsXHJcbiAgICAgICAgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50LFxyXG4gICAgICAgIGZvcmNlSW1hZ2VSZXJlbmRlcixcclxuICAgICAgICBpbWFnZVJlcmVuZGVySWRlbnRpZmllciAgXHJcbiAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb3ZpZGVyfT4geyBjaGlsZHJlbiB9IDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgKTtcclxufTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2lnbk1lVXAgZnJvbSBcIi4vU2lnbk1lVXBcIjtcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCIuL0dsb2JhbFN0YXRlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNpZ251cENhbGxiYWNrID0gKGVtYWlsKSA9PiBjb25zb2xlLmxvZyhgU2lnbiB1cCBjYWxsZWQgd2l0aCBlbWFpbCAke2VtYWlsfWApOyBcclxuICAgIGNvbnN0IHtmYXZvcml0ZUNsaWNrQ291bnR9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIGp1bWJvdHJvbmhlaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+T2N0b2JlciAxOS0yMCAyMDE5PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2VcIj4gU2FuIEpvc2UsIENhbGlmb3JuaWEuPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+Q2xpY2sgQ291bnQ6IHtmYXZvcml0ZUNsaWNrQ291bnR9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTggdGV4dC1sZy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9TVkNDbG9nby5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlNpbGljb24gVmFsbGV5IENvZGUgQ2FtcDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sLTEyIHRleHQtbGctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ25NZVVwIHNpZ251cENhbGxiYWNrPXtzaWdudXBDYWxsYmFja30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4vTWVudVwiO1xyXG5cclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtYXJnaW50b3Bib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkhvbWU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWFyZ2ludG9wYm90dG9tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvZGUgY2FtcCBpcyBhIGNvbW11bml0eSBldmVudCB3aGVyZSBkZXZlbG9wZXJzIGxlYXJuIGZyb21mZWxsb3cgZGV2ZWxvcGVycy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBhbHNvIGhhdmUgZGV2ZWxvcGVyIHJlbGF0ZWQgdG9waWNzdGhhdCBpbmNsdWRlc29mdHdhcmUgYnJhbmRpbmcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnYWwgaXNzdWVzIGFyb3VuZCBzb2Z0d2FyZSBhcyB3ZWxsIGFzIG90aGVyIHRvcGljcyBkZXZlbG9wZXJzIGFyZSBpbnRlcmVzdGVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gaGVhcmluZyBhYm91dC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGluZGV4OyIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCIuL0dsb2JhbFN0YXRlXCI7XHJcblxyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7cHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nfSkgPT4ge1xyXG4gICAgY29uc3Qge2ltYWdlUmVyZW5kZXJJZGVudGlmaWVyfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHNldEluVmlldyhpc0luVmlldygpKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIH0sIFtpbWFnZVJlcmVuZGVySWRlbnRpZmllcl0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWcgc3JjPXsvLyB0cmFuc3BhcmVudCBnaWYgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFJQ1JBXCIgOlxyXG4gICAgICAgICAgICAgICAgaW5WaWV3ID8gc2Vjb25kYXJ5SW1nIDogcHJpbWFyeUltZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlZj17aW1hZ2VSZWZ9XHJcbiAgICAgICAgICAgIGFsdD1cIlwiLz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIGJnLWRhcmsgbmF2YmFyLWRhcmtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zcGVha2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TcGVha2VyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4vQXBwXCI7XHJcblxyXG5cclxuY29uc3QgU2lnbk1lVXAgPSAoe3NpZ251cENhbGxiYWNrfSkgPT4ge1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gY29udGV4dC5zaG93U2lnbk1lVXAgPT09IGZhbHNlID8gbnVsbCA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZW1haWwuaW5jbHVkZXMoXCJAXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWdudXBDYWxsYmFjayhlbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInNpZ24gdXAgY29uZmlybSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5HZXQgVXBkYXRlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBTaWduTWVVcDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tIFwiLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsXCI7XHJcbmltcG9ydCB7IEZhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQgfSBmcm9tIFwiLi9mYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFNwZWFrZXJEZXRhaWwgPSBSZWFjdC5tZW1vKFxyXG4gICAgKHtzcGVha2VyUmVjLCBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlvLCBmYXZvcml0ZX0gPSBzcGVha2VyUmVjO1xyXG4gICAgICAgIGNvbnN0IHtpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnR9ID0gdXNlQ29udGV4dChGYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbC00IGNhcmRtaW5cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2J3L3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWB9IC8+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgZmF2b3JpdGUgPyBcImhlYXJ0cmVkYnV0dG9uXCIgOiBcImhlYXJ0ZGFya2J1dHRvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyKGUsIHNwZWFrZXJSZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2ZpcnN0TmFtZX0ge2xhc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntiaW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckRldGFpbDsiLCJpbXBvcnQgeyBhY3Rpb25UeXBlIH0gZnJvbSBcIi4vYWN0aW9uVHlwZVwiO1xyXG5cclxuXHJcbmNvbnN0IFNwZWFrZXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZUZhdm9yaXRlID0gKGZhdm9yaXRlVmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RhdGUuc3BlYWtlckxpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgcmV0dXJuIHsuLi5pdGVtLCBmYXZvcml0ZTogZmF2b3JpdGVWYWx1ZX07XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIEVSUk9SRUQsXHJcbiAgICAgICAgICAgIEZBVk9SSVRFLFxyXG4gICAgICAgICAgICBVTkZBVk9SSVRFLFxyXG4gICAgICAgICAgICBTUEVBS0VSX0xJU1QsXHJcbiAgICAgICAgICAgIEZPUkNFX0lNQUdFX1JFUkVOREVSLFxyXG4gICAgICAgICAgICBJTkNSRU1FTlRfRkFWT1JJVEVfQ0xJQ0tfQ09VTlRcclxuICAgICAgICB9ID0gYWN0aW9uVHlwZTtcclxuICAgIFxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBTUEVBS0VSX0xJU1Q6IHsvLyBTcHJlYWRzIHRoZSBzdGF0ZSBhbmQgcmVwbGFjZXMgb2xkIGRhdGEgd2l0aCBuZXcgc3RhdGUsIGkuZSwgc3BlYWtlckxpc3QgYW5kIGlzTG9hZGluZ1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcGVha2VyTGlzdDogYWN0aW9uLmRhdGEsIGlzTG9hZGluZzogZmFsc2UsIGhhc0Vycm9yOiBmYWxzZX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkFWT1JJVEU6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IHVwZGF0ZUZhdm9yaXRlKHRydWUpfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkZBVk9SSVRFOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwZWFrZXJMaXN0OiB1cGRhdGVGYXZvcml0ZShmYWxzZSl9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIElOQ1JFTUVOVF9GQVZPUklURV9DTElDS19DT1VOVDoge1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBmYXZvcml0ZUNsaWNrQ291bnQ6IHN0YXRlLmZhdm9yaXRlQ2xpY2tDb3VudCArIDF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEVSUk9SRUQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzRXJyb3I6IHRydWUsIGVycm9yOiBhY3Rpb24uZXJyb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEZPUkNFX0lNQUdFX1JFUkVOREVSOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGltYWdlUmVyZW5kZXJJZGVudGlmaWVyOiBuZXcgRGF0ZSgpLmdldFRpbWUoKX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJSZWR1Y2VyOyIsImltcG9ydCBSZWFjdCwgeyBcclxuICAgIHVzZVN0YXRlLFxyXG4gICAgdXNlQ29udGV4dCxcclxuICAgIHVzZUNhbGxiYWNrLFxyXG4gICAgdXNlTWVtb1xyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gXCIuL1NwZWFrZXJEZXRhaWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4vR2xvYmFsU3RhdGVcIjtcclxuXHJcblxyXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzcGVha2luZ1NhdHVyZGF5LCBzZXRTcGVha2luZ1NhdHVyZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgc3BlYWtlckxpc3QsXHJcbiAgICAgICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlLFxyXG4gICAgICAgIGhhc0Vycm9yLFxyXG4gICAgICAgIGVycm9yLFxyXG4gICAgICAgIGZvcmNlSW1hZ2VSZXJlbmRlclxyXG4gICAgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNhdHVyZGF5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yY2VJbWFnZVJlcmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRTcGVha2luZ1NhdHVyZGF5KCFzcGVha2luZ1NhdHVyZGF5KTtcclxuICAgICAgICAgICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcmNlSW1hZ2VSZXJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICBjb25zdCBuZXdTcGVha2VyTGlzdCA9IHVzZU1lbW8oLy8gVXNlIHVzZU1lbW8gdG8gY2FjaGUgdmFsdWUgZnJvbSBjb21wbGV4IGNvbXB1dGF0aW9uIGZvciBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb25cclxuICAgICAgICAoKSA9PiBzcGVha2VyTGlzdFxyXG4gICAgICAgIC5maWx0ZXIoKHtzYXQsIHN1bn0pID0+IChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bikpXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIGlmKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pLCBbc3BlYWtpbmdTYXR1cmRheSwgc3BlYWtpbmdTdW5kYXksIHNwZWFrZXJMaXN0XVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nID8gW10gOiBuZXdTcGVha2VyTGlzdDtcclxuXHJcbiAgICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IHVzZUNhbGxiYWNrKChlLCBzcGVha2VyUmVjKSA9PiB7IC8vIFVzZSB1c2VDYWxsYmFjayB0b2dldGhlciB3aXRoIFJlYWN0Lm1lbW8gdG8gY2FjaGUgZnVuYywgc2VlIFNwZWFrZXJEZXRhaWxcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmKGhhc0Vycm9yID09PSB0cnVlKSByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cclxuICAgIGlmKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TGFvZGluZy4uLi48L2Rpdj47XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXIgbWFyZ2ludG9wYm90dG9tNSBjaGVja2JveC1iaWdnZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2hvd1NwZWFrZXJTcGVha2luZ1NhdHVydGRheXMgPT09IGZhbHNlID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXJMaXN0RmlsdGVyZWQubWFwKChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyUmVjPXtzcGVha2VyUmVjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzOyIsIlxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZSA9IHtcclxuICAgIEVSUk9SRUQ6IFwiZXJyb3JlZFwiLFxyXG4gICAgRkFWT1JJVEU6IFwiZmF2b3JpdGVcIixcclxuICAgIFVORkFWT1JJVEU6IFwidW5mYXZvcml0ZVwiLFxyXG4gICAgU1BFQUtFUl9MSVNUOiBcInNldFNwZWFrZXJMaXN0XCIsXHJcbiAgICBGT1JDRV9JTUFHRV9SRVJFTkRFUjogXCJmb3JjZUltYWdlUmVyZW5kZXJcIixcclxuICAgIElOQ1JFTUVOVF9GQVZPUklURV9DTElDS19DT1VOVDogXCJpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnRcIixcclxufTsiLCJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VNZW1vfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCIuL0dsb2JhbFN0YXRlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgRmF2b3JpdGVDbGlja0NvdW50UHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3Qge2luY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSAgdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnR9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb3ZpZGVyfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRmF2b3JpdGVDbGlja0NvdW50Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgICBcclxufTsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3BlYWtlclJlZHVjZXIgZnJvbSBcIi4vU3BlYWtlclJlZHVjZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25UeXBlIH0gZnJvbSBcIi4vYWN0aW9uVHlwZVwiO1xyXG5cclxuXHJcbmNvbnN0IHVzZVNwZWFrZXJEYXRhTWFuYWdlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzTW91bnRSZWYgPSB1c2VSZWYoZmFsc2UpOyAvL0hhbmRsZXMgZXJyb3IgdGhhdCBvY2N1cnMgd2hlbiBuYXZpZ2F0ZXMgYXdheSBiZWZvcmUgdGhlIHN0YXRlIGlzIHNldCBvciBkYXRhIGlzIGZldGNoZWRcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIEVSUk9SRUQsXHJcbiAgICAgICAgICAgIEZBVk9SSVRFLFxyXG4gICAgICAgICAgICBVTkZBVk9SSVRFLFxyXG4gICAgICAgICAgICBTUEVBS0VSX0xJU1QsXHJcbiAgICAgICAgICAgIEZPUkNFX0lNQUdFX1JFUkVOREVSLFxyXG4gICAgICAgICAgICBJTkNSRU1FTlRfRkFWT1JJVEVfQ0xJQ0tfQ09VTlRcclxuICAgICAgICB9ID0gYWN0aW9uVHlwZTtcclxuICAgICAgICBcclxuICAgIGNvbnN0IFt7ZXJyb3IsXHJcbiAgICAgICAgICAgIGhhc0Vycm9yLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmcsIFxyXG4gICAgICAgICAgICBzcGVha2VyTGlzdCxcclxuICAgICAgICAgICAgZmF2b3JpdGVDbGlja0NvdW50LFxyXG4gICAgICAgICAgICBpbWFnZVJlcmVuZGVySWRlbnRpZmllcn0sIGRpc3BhdGNoIF0gPSB1c2VSZWR1Y2VyKFNwZWFrZXJSZWR1Y2VyLCB7ICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyTGlzdDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZUNsaWNrQ291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0Vycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlUmVyZW5kZXJJZGVudGlmaWVyOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCA9ICgpID0+IGRpc3BhdGNoKHt0eXBlOiBJTkNSRU1FTlRfRkFWT1JJVEVfQ0xJQ0tfQ09VTlR9KTtcclxuXHJcbiAgICBjb25zdCBmb3JjZUltYWdlUmVyZW5kZXIgPSAoKSA9PiBkaXNwYXRjaCh7dHlwZTogRk9SQ0VfSU1BR0VfUkVSRU5ERVJ9KTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVTcGVha2VyRmF2b3JpdGUgPSAoc3BlYWtlclJlYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGF4aW9zLnB1dChgL2FwaS9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwgey4uLnNwZWFrZXJSZWMsIGZhdm9yaXRlOiAhc3BlYWtlclJlYy5mYXZvcml0ZX0pO1xyXG4gICAgICAgICAgICBzcGVha2VyUmVjLmZhdm9yaXRlID09PSB0cnVlID9cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBVTkZBVk9SSVRFLCBpZDogc3BlYWtlclJlYy5pZH0pIDogXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogRkFWT1JJVEUsIGlkOiBzcGVha2VyUmVjLmlkfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGRhdGVEYXRhKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaXNNb3VudFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAvL2lmKGlzTW91bnRSZWYuY3VycmVudCkgY2FuIGFsc28gYmUgdXNlZCB0byBjYW5jZWxsIGZldGNoIGNhbGxzIHdoZW4gdXNlIG5hdmlnYXRlcyBhd2F5IGltbWVkaWF0ZWx5IHdpdGhvdXQgd2FpdGluZyByZXF1ZXN0ZWQgZGF0YSBcclxuICAgICAgICBjb25zdCBmZXRjaGVkRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3NwZWFrZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYoaXNNb3VudFJlZi5jdXJyZW50KSBkaXNwYXRjaCh7IHR5cGU6IFNQRUFLRVJfTElTVCwgZGF0YTogcmVzdWx0LmRhdGF9KTtcclxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc01vdW50UmVmLmN1cnJlbnQpIGRpc3BhdGNoKHsgdHlwZTogRVJST1JFRCwgZXJyb3I6IGV9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmV0Y2hlZERhdGEoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGlzTW91bnRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB7ZXJyb3IsXHJcbiAgICAgICAgICAgIGhhc0Vycm9yLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgICAgIHNwZWFrZXJMaXN0LFxyXG4gICAgICAgICAgICBmYXZvcml0ZUNsaWNrQ291bnQsXHJcbiAgICAgICAgICAgIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZSxcclxuICAgICAgICAgICAgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50LFxyXG4gICAgICAgICAgICBmb3JjZUltYWdlUmVyZW5kZXIsXHJcbiAgICAgICAgICAgIGltYWdlUmVyZW5kZXJJZGVudGlmaWVyIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTcGVha2VyRGF0YU1hbmFnZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9