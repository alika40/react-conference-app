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



const speakers = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_App__WEBPACK_IMPORTED_MODULE_2__.default, {
    pageName: "Speakers"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, undefined);
};

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

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\src\\App.js";



const ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const configValues = {
  showSignMeUp: true,
  showSpeakerSpeakingSaturtdays: true
};

const PageToShow = pageName => {
  if (pageName === "Home") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 36
  }, undefined);
  if (pageName === "Speakers") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 40
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Not Found."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 12
  }, undefined);
};

const App = ({
  pageName
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {
    value: configValues,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: PageToShow(pageName)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "card-img-top",
      primaryImg: `/static/speakers/bw/speaker-${id}.jpg`,
      secondaryImg: `/static/speakers/speaker-${id}.jpg`,
      alt: `${firstName} ${lastName}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: favorite ? "heartredbutton" : "heartdarkbutton",
          onClick: e => onHeartFavoriteHandler(e, speakerRec)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
      if (item.id === action.sessionid) return _objectSpread(_objectSpread({}, item), {}, {
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
/* harmony import */ var _useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useSpeakerDataManager */ "./src/useSpeakerDataManager.js");

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
  } = (0,_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_6__.default)();

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
    lineNumber: 42,
    columnNumber: 26
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
                lineNumber: 56,
                columnNumber: 41
              }, undefined), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
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
                lineNumber: 66,
                columnNumber: 41
              }, undefined), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
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
              lineNumber: 82,
              columnNumber: 37
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

/***/ }),

/***/ "./src/speakerData.js":
/*!****************************!*\
  !*** ./src/speakerData.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const speakerData = [{
  id: 1530,
  firstName: "Tammy",
  lastName: "Baker",
  sat: false,
  sun: true,
  favorite: true,
  bio: "Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at Molekule Inc., Cantaloupe Systems, E-Color, and Untangle Inc."
}, {
  id: 5996,
  firstName: "Craig",
  lastName: "Berntson",
  favorite: true,
  bio: "Craig has a passion for community and helping other developers improve their skills. He writes the column \"Software Gardening\" in DotNet Curry Magazine and is the co-author of \"Continuous Integration in .NET\" available from Manning.",
  sat: true,
  sun: true
}, {
  id: 10803,
  firstName: "Eugene",
  lastName: "Chuvyrov",
  sat: true,
  sun: false,
  favorite: false,
  bio: "Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners."
}, {
  id: 1124,
  firstName: "Douglas",
  lastName: "Crockford",
  sat: true,
  sun: false,
  favorite: true,
  bio: "Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma."
}, {
  id: 41808,
  firstName: "Paul",
  lastName: "Everitt",
  sat: true,
  sun: true,
  favorite: false,
  bio: "Paul is the PyCharm and WebStorm Developer Advocate at JetBrains. Before that, Paul was a partner at Agendaless Consulting and co-founder of Zope Corporation, taking the first open source application server through $14M of funding."
}, {
  id: 1269,
  firstName: "Arun",
  lastName: "Gupta",
  favorite: false,
  bio: "Arun Gupta is a Principal Open Source Technologist at Amazon Web Services. He has built and led developer communities for 12+ years at Sun, Oracle, Red Hat and Couchbase.",
  sat: false,
  sun: true
}, {
  id: 1725,
  firstName: "Brad",
  lastName: "Irby",
  favorite: false,
  bio: "Brad is an accomplished .NET software architect specializing in Domain Driven Design and Event Driven Architectures.",
  sat: true,
  sun: false
}, {
  id: 18805,
  firstName: "Mickey W.",
  lastName: "Mantle",
  sat: true,
  sun: true,
  favorite: false,
  bio: "Mickey has been developing software systems and products for over 40 years, as a systems programmer, Tech Lead, Manager, VP Engineering, CTO, COO, and now CEO/CTO of his own company."
}, {
  id: 8367,
  firstName: "Gayle Laakmann",
  lastName: "McDowell",
  sat: true,
  sun: false,
  favorite: false,
  bio: "Gayle Laakmann McDowell is the founder and CEO of CareerCup.com and the author of three best selling books."
}, {
  id: 187,
  firstName: "Dave",
  lastName: "Nielsen",
  favorite: false,
  bio: "As Head of Ecosystem Programs, Dave uses emerging technologies and open source projects like Microservices, Serverless & Kubernetes to bring the magic of Redis to the broader community.",
  sat: true,
  sun: true
}, {
  id: 823,
  firstName: "Kevin",
  lastName: "Nilson",
  sat: false,
  sun: true,
  favorite: true,
  bio: "Team Lead of the Chromecast Technical Solutions Engineer team, a Java Champion and three time JavaOne Rock Star Presenter. Kevin has spoken at conferences such as JavaOne, Devoxx, JAX, O'Reilly Fluent, Silicon Valley Code Camp, JAX and HTML5DevConf."
}, {
  id: 8590,
  firstName: "Chris",
  lastName: "Richardson",
  favorite: false,
  bio: "Chris Richardson is a developer and architect. He is a Java Champion, a JavaOne rock star and the author of POJOs in Action, which describes how to build enterprise Java applications with frameworks such as Spring and Hibernate.",
  sat: true,
  sun: false
}, {
  id: 10808,
  firstName: "Antony",
  lastName: "Ross",
  favorite: false,
  bio: "Antony Ross is a consultant specializing in data science and machine learning applied to sports performance. He has worked closely with USC and UCLA and is presently involved with the Recurse Center in New York researching deep learning and voice recognition.",
  sat: true,
  sun: false
}, {
  id: 6548,
  firstName: "Steve",
  lastName: "Souders",
  sat: true,
  sun: false,
  favorite: true,
  bio: "Steve works at SpeedCurve on the interplay between performance and design. He previously served as Google's Head Performance Engineer, Chief Performance Yahoo!, and Chief Performance Officer at Fastly."
}];
/* harmony default export */ __webpack_exports__["default"] = (speakerData);

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
/* harmony import */ var _speakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speakerData */ "./src/speakerData.js");
/* harmony import */ var _SpeakerReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerReducer */ "./src/SpeakerReducer.js");




const useSpeakerDataManager = () => {
  const {
    0: {
      isLoading,
      speakerList
    },
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_SpeakerReducer__WEBPACK_IMPORTED_MODULE_2__.default, {
    isLoading: true,
    speakerList: []
  });

  const toggleSpeakerFavorite = speakerRec => {
    speakerRec.favorite === true ? dispatch({
      type: "unfavorite",
      id: speakerRec.id
    }) : dispatch({
      type: "favorite",
      id: speakerRec.id
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    new Promise(resolve => {
      setTimeout(() => resolve(), 100);
    }).then(() => {
      dispatch({
        type: "setSpeakerList",
        data: _speakerData__WEBPACK_IMPORTED_MODULE_1__.default
      });
    });
    return () => console.log("Cleanup!!!");
  }, []);
  return {
    isLoading,
    speakerList,
    toggleSpeakerFavorite
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useSpeakerDataManager);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3BhZ2VzL3NwZWFrZXJzLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvSG9tZS5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU2lnbk1lVXAuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2Vycy5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9zcGVha2VyRGF0YS5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy91c2VTcGVha2VyRGF0YU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2lnbm9yZWR8QzpcXFVzZXJzXFxUb255XFxEZXNrdG9wXFxNRVJOLVNUQUNLXFxjb25mZXJlbmNlLWFwcFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbInNwZWFrZXJzIiwiQ29uZmlnQ29udGV4dCIsIlJlYWN0IiwiY29uZmlnVmFsdWVzIiwic2hvd1NpZ25NZVVwIiwic2hvd1NwZWFrZXJTcGVha2luZ1NhdHVydGRheXMiLCJQYWdlVG9TaG93IiwicGFnZU5hbWUiLCJBcHAiLCJIZWFkZXIiLCJzaWdudXBDYWxsYmFjayIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsImluVmlldyIsInNldEluVmlldyIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2Nyb2xsSGFuZGxlciIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTWVudSIsIlNpZ25NZVVwIiwic2V0RW1haWwiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiYWxlcnQiLCJTcGVha2VyRGV0YWlsIiwic3BlYWtlclJlYyIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiLCJzcGVha2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidXBkYXRlRmF2b3JpdGUiLCJmYXZvcml0ZVZhbHVlIiwic3BlYWtlckxpc3QiLCJtYXAiLCJpdGVtIiwic2Vzc2lvbmlkIiwidHlwZSIsImRhdGEiLCJTcGVha2VycyIsInNwZWFraW5nU2F0dXJkYXkiLCJzZXRTcGVha2luZ1NhdHVyZGF5Iiwic3BlYWtpbmdTdW5kYXkiLCJzZXRTcGVha2luZ1N1bmRheSIsInRvZ2dsZVNwZWFrZXJGYXZvcml0ZSIsInVzZVNwZWFrZXJEYXRhTWFuYWdlciIsImhhbmRsZUNoYW5nZVNhdHVyZGF5IiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwibmV3U3BlYWtlckxpc3QiLCJ1c2VNZW1vIiwiZmlsdGVyIiwic2F0Iiwic3VuIiwic29ydCIsImEiLCJiIiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJwcmV2ZW50RGVmYXVsdCIsInNwZWFrZXJEYXRhIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNuQixzQkFBTyw4REFBQyw2Q0FBRDtBQUFLLFlBQVEsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILENBRkQ7O0FBS0EsK0RBQWVBLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQyxhQUFhLGdCQUFHQywwREFBQSxFQUF0QjtBQUVQLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsY0FBWSxFQUFFLElBREc7QUFFakJDLCtCQUE2QixFQUFFO0FBRmQsQ0FBckI7O0FBS0EsTUFBTUMsVUFBVSxHQUFJQyxRQUFELElBQWM7QUFDN0IsTUFBR0EsUUFBUSxLQUFLLE1BQWhCLEVBQXdCLG9CQUFPLDhEQUFDLDBDQUFEO0FBQUE7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TUFBTTtBQUNaLFFBQUl3RCxPQUFKLENBQWFDLE9BQUQsSUFBYTtBQUNyQkMsZ0JBQVUsQ0FBQyxNQUFNRCxPQUFPLEVBQWQsRUFBa0IsR0FBbEIsQ0FBVjtBQUNILEtBRkQsRUFHQ0UsSUFIRCxDQUdNLE1BQU07QUFDUkwsY0FBUSxDQUFDO0FBQ0x4QixZQUFJLEVBQUUsZ0JBREQ7QUFFTEMsWUFBSSxFQUFFc0IsaURBQVdBO0FBRlosT0FBRCxDQUFSO0FBSUgsS0FSRDtBQVNBLFdBQU8sTUFBTTNFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FBYjtBQUNILEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxTQUFPO0FBQUNVLGFBQUQ7QUFBWXFDLGVBQVo7QUFBeUJXO0FBQXpCLEdBQVA7QUFDSCxDQXRCRDs7QUF3QkEsK0RBQWVDLHFCQUFmLEU7Ozs7Ozs7Ozs7O0FDN0JBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9zcGVha2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi4vc3JjL0FwcFwiO1xyXG5cclxuXHJcbmNvbnN0IHNwZWFrZXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxBcHAgcGFnZU5hbWU9XCJTcGVha2Vyc1wiIC8+O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG5pbXBvcnQgU3BlYWtlcnMgZnJvbSBcIi4vU3BlYWtlcnNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlnQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGNvbmZpZ1ZhbHVlcyA9IHtcclxuICAgIHNob3dTaWduTWVVcDogdHJ1ZSxcclxuICAgIHNob3dTcGVha2VyU3BlYWtpbmdTYXR1cnRkYXlzOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgUGFnZVRvU2hvdyA9IChwYWdlTmFtZSkgPT4ge1xyXG4gICAgaWYocGFnZU5hbWUgPT09IFwiSG9tZVwiKSByZXR1cm4gPEhvbWU+PC9Ib21lPjtcclxuICAgIGlmKHBhZ2VOYW1lID09PSBcIlNwZWFrZXJzXCIpIHJldHVybiA8U3BlYWtlcnM+PC9TcGVha2Vycz47XHJcbiAgICByZXR1cm4gPGRpdj5Ob3QgRm91bmQuPC9kaXY+O1xyXG59O1xyXG5cclxuY29uc3QgQXBwID0gKHtwYWdlTmFtZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbmZpZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbmZpZ1ZhbHVlc30+XHJcbiAgICAgICAgICAgIDxkaXY+eyBQYWdlVG9TaG93KHBhZ2VOYW1lKSB9PC9kaXY+XHJcbiAgICAgICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2lnbk1lVXAgZnJvbSBcIi4vU2lnbk1lVXBcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2lnbnVwQ2FsbGJhY2sgPSAoZW1haWwpID0+IGNvbnNvbGUubG9nKGBTaWduIHVwIGNhbGxlZCB3aXRoIGVtYWlsICR7ZW1haWx9YCk7IFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBqdW1ib3Ryb25oZWlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPk9jdG9iZXIgMTktMjAgMjAxOTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+IFNhbiBKb3NlLCBDYWxpZm9ybmlhLjwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IHRleHQtbGctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvU1ZDQ2xvZ28ucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TaWxpY29uIFZhbGxleSBDb2RlIENhbXA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMiB0ZXh0LWxnLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWduTWVVcCBzaWdudXBDYWxsYmFjaz17c2lnbnVwQ2FsbGJhY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL01lbnVcIjtcclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbWFyZ2ludG9wYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Ib21lPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1hcmdpbnRvcGJvdHRvbTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2RlIGNhbXAgaXMgYSBjb21tdW5pdHkgZXZlbnQgd2hlcmUgZGV2ZWxvcGVycyBsZWFybiBmcm9tZmVsbG93IGRldmVsb3BlcnMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgYWxzbyBoYXZlIGRldmVsb3BlciByZWxhdGVkIHRvcGljc3RoYXQgaW5jbHVkZXNvZnR3YXJlIGJyYW5kaW5nLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsIGlzc3VlcyBhcm91bmQgc29mdHdhcmUgYXMgd2VsbCBhcyBvdGhlciB0b3BpY3MgZGV2ZWxvcGVycyBhcmUgaW50ZXJlc3RlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIGhlYXJpbmcgYWJvdXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBpbmRleDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7cHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZyBzcmM9ey8vIHRyYW5zcGFyZW50IGdpZiByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUlDUkFcIiA6XHJcbiAgICAgICAgICAgICAgICBpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gYmctZGFyayBuYXZiYXItZGFya1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NwZWFrZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNwZWFrZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi9BcHBcIjtcclxuXHJcblxyXG5jb25zdCBTaWduTWVVcCA9ICh7c2lnbnVwQ2FsbGJhY2t9KSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XHJcbiAgICBcclxuICAgIHJldHVybiBjb250ZXh0LnNob3dTaWduTWVVcCA9PT0gZmFsc2UgPyBudWxsIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbWFpbC5pbmNsdWRlcyhcIkBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ251cENhbGxiYWNrKGVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2lnbiB1cCBjb25maXJtIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPkdldCBVcGRhdGVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IFNpZ25NZVVwOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSBcIi4vSW1hZ2VUb2dnbGVPblNjcm9sbFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBTcGVha2VyRGV0YWlsID0gUmVhY3QubWVtbyhcclxuICAgICh7c3BlYWtlclJlYywgb25IZWFydEZhdm9yaXRlSGFuZGxlcn0pID0+IHtcclxuICAgICAgICBjb25zdCB7aWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGV9ID0gc3BlYWtlclJlYztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTQgY2FyZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGwgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvYncvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YH0gLz5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBmYXZvcml0ZSA/IFwiaGVhcnRyZWRidXR0b25cIiA6IFwiaGVhcnRkYXJrYnV0dG9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25IZWFydEZhdm9yaXRlSGFuZGxlcihlLCBzcGVha2VyUmVjKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2ZpcnN0TmFtZX0ge2xhc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntiaW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckRldGFpbDsiLCJcclxuY29uc3Qgc3BlYWtlclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlRmF2b3JpdGUgPSAoZmF2b3JpdGVWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZS5zcGVha2VyTGlzdC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gYWN0aW9uLnNlc3Npb25pZCkgcmV0dXJuIHsuLi5pdGVtLCBmYXZvcml0ZTogZmF2b3JpdGVWYWx1ZX07XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcInNldFNwZWFrZXJMaXN0XCI6IHsvLyBTcHJlYWRzIHRoZSBzdGF0ZSBhbmQgcmVwbGFjZXMgb2xkIGRhdGEgd2l0aCBuZXcgc3RhdGUsIGkuZSwgc3BlYWtlckxpc3QgYW5kIGlzTG9hZGluZ1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcGVha2VyTGlzdDogYWN0aW9uLmRhdGEsIGlzTG9hZGluZzogZmFsc2V9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiZmF2b3JpdGVcIjoge1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcGVha2VyTGlzdDogdXBkYXRlRmF2b3JpdGUodHJ1ZSl9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwidW5mYXZvcml0ZVwiOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwZWFrZXJMaXN0OiB1cGRhdGVGYXZvcml0ZShmYWxzZSl9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGVha2VyUmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QsIHsgXHJcbiAgICB1c2VTdGF0ZSxcclxuICAgIHVzZUNvbnRleHQsXHJcbiAgICB1c2VDYWxsYmFjayxcclxuICAgIHVzZU1lbW9cclxufSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgU3BlYWtlckRldGFpbCBmcm9tIFwiLi9TcGVha2VyRGV0YWlsXCI7XHJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi9BcHBcIjtcclxuaW1wb3J0IHVzZVNwZWFrZXJEYXRhTWFuYWdlciBmcm9tIFwiLi91c2VTcGVha2VyRGF0YU1hbmFnZXJcIjtcclxuXHJcblxyXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzcGVha2luZ1NhdHVyZGF5LCBzZXRTcGVha2luZ1NhdHVyZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHtpc0xvYWRpbmcsIHNwZWFrZXJMaXN0LCB0b2dnbGVTcGVha2VyRmF2b3JpdGV9ID0gdXNlU3BlYWtlckRhdGFNYW5hZ2VyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiBzZXRTcGVha2luZ1NhdHVyZGF5KCFzcGVha2luZ1NhdHVyZGF5KTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHNldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XHJcblxyXG4gICAgY29uc3QgbmV3U3BlYWtlckxpc3QgPSB1c2VNZW1vKC8vIFVzZSB1c2VNZW1vIHRvIGNhY2hlIHZhbHVlIGZyb20gY29tcGxleCBjb21wdXRhdGlvbiBmb3IgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uXHJcbiAgICAgICAgKCkgPT4gc3BlYWtlckxpc3RcclxuICAgICAgICAuZmlsdGVyKCh7c2F0LCBzdW59KSA9PiAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pKVxyXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihhLmZpcnN0TmFtZSA8IGIuZmlyc3ROYW1lKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICBpZihhLmZpcnN0TmFtZSA+IGIuZmlyc3ROYW1lKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9KSwgW3NwZWFraW5nU2F0dXJkYXksIHNwZWFraW5nU3VuZGF5LCBzcGVha2VyTGlzdF1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZyA/IFtdIDogbmV3U3BlYWtlckxpc3Q7XHJcblxyXG4gICAgY29uc3QgaGVhcnRGYXZvcml0ZUhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSwgc3BlYWtlclJlYykgPT4geyAvLyBVc2UgdXNlQ2FsbGJhY2sgdG9nZXRoZXIgd2l0aCBSZWFjdC5tZW1vIHRvIGNhY2hlIGZ1bmMsIHNlZSBTcGVha2VyRGV0YWlsXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZihpc0xvYWRpbmcpIHJldHVybiA8ZGl2Pkxhb2RpbmcuLi4uPC9kaXY+O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyIG1hcmdpbnRvcGJvdHRvbTUgY2hlY2tib3gtYmlnZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNob3dTcGVha2VyU3BlYWtpbmdTYXR1cnRkYXlzID09PSBmYWxzZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU3VuZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdW5kYXkgU3BlYWtlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyTGlzdEZpbHRlcmVkLm1hcCgoc3BlYWtlclJlYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyRGV0YWlsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzcGVha2VyUmVjLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlclJlYz17c3BlYWtlclJlY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyczsiLCJjb25zdCBzcGVha2VyRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDE1MzAsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJUYW1teVwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJCYWtlclwiLFxyXG4gICAgICBzYXQ6IGZhbHNlLFxyXG4gICAgICBzdW46IHRydWUsXHJcbiAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgICBiaW86IFwiVGFtbXkgaGFzIGhlbGQgYSBudW1iZXIgb2YgZXhlY3V0aXZlIGFuZCBtYW5hZ2VtZW50IHJvbGVzIG92ZXIgdGhlIHBhc3QgMTUgeWVhcnMsIGluY2x1ZGluZyBWUCBlbmdpbmVlcmluZyBSb2xlcyBhdCBNb2xla3VsZSBJbmMuLCBDYW50YWxvdXBlIFN5c3RlbXMsIEUtQ29sb3IsIGFuZCBVbnRhbmdsZSBJbmMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA1OTk2LFxyXG4gICAgICBmaXJzdE5hbWU6IFwiQ3JhaWdcIixcclxuICAgICAgbGFzdE5hbWU6IFwiQmVybnRzb25cIixcclxuICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICAgIGJpbzogXCJDcmFpZyBoYXMgYSBwYXNzaW9uIGZvciBjb21tdW5pdHkgYW5kIGhlbHBpbmcgb3RoZXIgZGV2ZWxvcGVycyBpbXByb3ZlIHRoZWlyIHNraWxscy4gSGUgd3JpdGVzIHRoZSBjb2x1bW4gXFxcIlNvZnR3YXJlIEdhcmRlbmluZ1xcXCIgaW4gRG90TmV0IEN1cnJ5IE1hZ2F6aW5lIGFuZCBpcyB0aGUgY28tYXV0aG9yIG9mIFxcXCJDb250aW51b3VzIEludGVncmF0aW9uIGluIC5ORVRcXFwiIGF2YWlsYWJsZSBmcm9tIE1hbm5pbmcuXCIsXHJcbiAgICAgIHNhdDogdHJ1ZSxcclxuICAgICAgc3VuOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTA4MDMsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJFdWdlbmVcIixcclxuICAgICAgbGFzdE5hbWU6IFwiQ2h1dnlyb3ZcIixcclxuICAgICAgc2F0OiB0cnVlLFxyXG4gICAgICBzdW46IGZhbHNlLFxyXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgIGJpbzogXCJFdWdlbmUgQ2h1dnlyb3YgaXMgIGEgU2VuaW9yIENsb3VkIEFyY2hpdGVjdCBhdCBNaWNyb3NvZnQuIEhlIHdvcmtzIGRpcmVjdGx5IHdpdGggYm90aCBzdGFydHVwcyBhbmQgZW50ZXJwcmlzZXMgdG8gZW5hYmxlIHRoZWlyIHNvbHV0aW9ucyBpbiBNaWNyb3NvZnQgY2xvdWQsIGFuZCB0byBtYWtlIEF6dXJlIGJldHRlciBhcyBhIHJlc3VsdCBvZiB0aGlzIHdvcmsgd2l0aCBwYXJ0bmVycy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDExMjQsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJEb3VnbGFzXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIkNyb2NrZm9yZFwiLFxyXG4gICAgICBzYXQ6IHRydWUsXHJcbiAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgICBiaW86IFwiRG91Z2xhcyBDcm9ja2ZvcmQgZGlzY292ZXJlZCB0aGUgSlNPTiBEYXRhIEludGVyY2hhbmdlIEZvcm1hdC4gSGUgaXMgYWxzbyB0aGUgYXV0aG9yIG9mIF9KYXZhU2NyaXB0OiBUaGUgR29vZCBQYXJ0c18uIEhlIGhhcyBiZWVuIGNhbGxlZCBhIGd1cnUsIGJ1dCBoZSBpcyBhY3R1YWxseSBtb3JlIG9mIGEgbWFoYXRtYS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQxODA4LFxyXG4gICAgICBmaXJzdE5hbWU6IFwiUGF1bFwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJFdmVyaXR0XCIsXHJcbiAgICAgIHNhdDogdHJ1ZSxcclxuICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgIGJpbzogXCJQYXVsIGlzIHRoZSBQeUNoYXJtIGFuZCBXZWJTdG9ybSBEZXZlbG9wZXIgQWR2b2NhdGUgYXQgSmV0QnJhaW5zLiBCZWZvcmUgdGhhdCwgUGF1bCB3YXMgYSBwYXJ0bmVyIGF0IEFnZW5kYWxlc3MgQ29uc3VsdGluZyBhbmQgY28tZm91bmRlciBvZiBab3BlIENvcnBvcmF0aW9uLCB0YWtpbmcgdGhlIGZpcnN0IG9wZW4gc291cmNlIGFwcGxpY2F0aW9uIHNlcnZlciB0aHJvdWdoICQxNE0gb2YgZnVuZGluZy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEyNjksXHJcbiAgICAgIGZpcnN0TmFtZTogXCJBcnVuXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIkd1cHRhXCIsXHJcbiAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgICAgYmlvOiBcIkFydW4gR3VwdGEgaXMgYSBQcmluY2lwYWwgT3BlbiBTb3VyY2UgVGVjaG5vbG9naXN0IGF0IEFtYXpvbiBXZWIgU2VydmljZXMuIEhlIGhhcyBidWlsdCBhbmQgbGVkIGRldmVsb3BlciBjb21tdW5pdGllcyBmb3IgMTIrIHllYXJzIGF0IFN1biwgT3JhY2xlLCBSZWQgSGF0IGFuZCBDb3VjaGJhc2UuXCIsXHJcbiAgICAgIHNhdDogZmFsc2UsXHJcbiAgICAgIHN1bjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDE3MjUsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJCcmFkXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIklyYnlcIixcclxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICBiaW86IFwiQnJhZCBpcyBhbiBhY2NvbXBsaXNoZWQgLk5FVCBzb2Z0d2FyZSBhcmNoaXRlY3Qgc3BlY2lhbGl6aW5nIGluIERvbWFpbiBEcml2ZW4gRGVzaWduIGFuZCBFdmVudCBEcml2ZW4gQXJjaGl0ZWN0dXJlcy5cIixcclxuICAgICAgc2F0OiB0cnVlLFxyXG4gICAgICBzdW46IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTg4MDUsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJNaWNrZXkgVy5cIixcclxuICAgICAgbGFzdE5hbWU6IFwiTWFudGxlXCIsXHJcbiAgICAgIHNhdDogdHJ1ZSxcclxuICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgIGJpbzogXCJNaWNrZXkgaGFzIGJlZW4gZGV2ZWxvcGluZyBzb2Z0d2FyZSBzeXN0ZW1zIGFuZCBwcm9kdWN0cyBmb3Igb3ZlciA0MCB5ZWFycywgYXMgYSBzeXN0ZW1zIHByb2dyYW1tZXIsIFRlY2ggTGVhZCwgTWFuYWdlciwgVlAgRW5naW5lZXJpbmcsIENUTywgQ09PLCBhbmQgbm93IENFTy9DVE8gb2YgaGlzIG93biBjb21wYW55LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogODM2NyxcclxuICAgICAgZmlyc3ROYW1lOiBcIkdheWxlIExhYWttYW5uXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIk1jRG93ZWxsXCIsXHJcbiAgICAgIHNhdDogdHJ1ZSxcclxuICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICBiaW86IFwiR2F5bGUgTGFha21hbm4gTWNEb3dlbGwgaXMgdGhlIGZvdW5kZXIgYW5kIENFTyBvZiBDYXJlZXJDdXAuY29tIGFuZCB0aGUgYXV0aG9yIG9mIHRocmVlIGJlc3Qgc2VsbGluZyBib29rcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDE4NyxcclxuICAgICAgZmlyc3ROYW1lOiBcIkRhdmVcIixcclxuICAgICAgbGFzdE5hbWU6IFwiTmllbHNlblwiLFxyXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgIGJpbzogXCJBcyBIZWFkIG9mIEVjb3N5c3RlbSBQcm9ncmFtcywgRGF2ZSB1c2VzIGVtZXJnaW5nIHRlY2hub2xvZ2llcyBhbmQgb3BlbiBzb3VyY2UgcHJvamVjdHMgbGlrZSBNaWNyb3NlcnZpY2VzLCBTZXJ2ZXJsZXNzICYgS3ViZXJuZXRlcyB0byBicmluZyB0aGUgbWFnaWMgb2YgUmVkaXMgdG8gdGhlIGJyb2FkZXIgY29tbXVuaXR5LlwiLFxyXG4gICAgICBzYXQ6IHRydWUsXHJcbiAgICAgIHN1bjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDgyMyxcclxuICAgICAgZmlyc3ROYW1lOiBcIktldmluXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIk5pbHNvblwiLFxyXG4gICAgICBzYXQ6IGZhbHNlLFxyXG4gICAgICBzdW46IHRydWUsXHJcbiAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgICBiaW86IFwiVGVhbSBMZWFkIG9mIHRoZSBDaHJvbWVjYXN0IFRlY2huaWNhbCBTb2x1dGlvbnMgRW5naW5lZXIgdGVhbSwgYSBKYXZhIENoYW1waW9uIGFuZCB0aHJlZSB0aW1lIEphdmFPbmUgUm9jayBTdGFyIFByZXNlbnRlci4gS2V2aW4gaGFzIHNwb2tlbiBhdCBjb25mZXJlbmNlcyBzdWNoIGFzIEphdmFPbmUsIERldm94eCwgSkFYLCBPJ1JlaWxseSBGbHVlbnQsIFNpbGljb24gVmFsbGV5IENvZGUgQ2FtcCwgSkFYIGFuZCBIVE1MNURldkNvbmYuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA4NTkwLFxyXG4gICAgICBmaXJzdE5hbWU6IFwiQ2hyaXNcIixcclxuICAgICAgbGFzdE5hbWU6IFwiUmljaGFyZHNvblwiLFxyXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgIGJpbzogXCJDaHJpcyBSaWNoYXJkc29uIGlzIGEgZGV2ZWxvcGVyIGFuZCBhcmNoaXRlY3QuIEhlIGlzIGEgSmF2YSBDaGFtcGlvbiwgYSBKYXZhT25lIHJvY2sgc3RhciBhbmQgdGhlIGF1dGhvciBvZiBQT0pPcyBpbiBBY3Rpb24sIHdoaWNoIGRlc2NyaWJlcyBob3cgdG8gYnVpbGQgZW50ZXJwcmlzZSBKYXZhIGFwcGxpY2F0aW9ucyB3aXRoIGZyYW1ld29ya3Mgc3VjaCBhcyBTcHJpbmcgYW5kIEhpYmVybmF0ZS5cIixcclxuICAgICAgc2F0OiB0cnVlLFxyXG4gICAgICBzdW46IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTA4MDgsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJBbnRvbnlcIixcclxuICAgICAgbGFzdE5hbWU6IFwiUm9zc1wiLFxyXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgIGJpbzogXCJBbnRvbnkgUm9zcyBpcyBhIGNvbnN1bHRhbnQgc3BlY2lhbGl6aW5nIGluIGRhdGEgc2NpZW5jZSBhbmQgbWFjaGluZSBsZWFybmluZyBhcHBsaWVkIHRvIHNwb3J0cyBwZXJmb3JtYW5jZS4gSGUgaGFzIHdvcmtlZCBjbG9zZWx5IHdpdGggVVNDIGFuZCBVQ0xBIGFuZCBpcyBwcmVzZW50bHkgaW52b2x2ZWQgd2l0aCB0aGUgUmVjdXJzZSBDZW50ZXIgaW4gTmV3IFlvcmsgcmVzZWFyY2hpbmcgZGVlcCBsZWFybmluZyBhbmQgdm9pY2UgcmVjb2duaXRpb24uXCIsXHJcbiAgICAgIHNhdDogdHJ1ZSxcclxuICAgICAgc3VuOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDY1NDgsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJTdGV2ZVwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJTb3VkZXJzXCIsXHJcbiAgICAgIHNhdDogdHJ1ZSxcclxuICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICAgIGJpbzogXCJTdGV2ZSB3b3JrcyBhdCBTcGVlZEN1cnZlIG9uIHRoZSBpbnRlcnBsYXkgYmV0d2VlbiBwZXJmb3JtYW5jZSBhbmQgZGVzaWduLiBIZSBwcmV2aW91c2x5IHNlcnZlZCBhcyBHb29nbGUncyBIZWFkIFBlcmZvcm1hbmNlIEVuZ2luZWVyLCBDaGllZiBQZXJmb3JtYW5jZSBZYWhvbyEsIGFuZCBDaGllZiBQZXJmb3JtYW5jZSBPZmZpY2VyIGF0IEZhc3RseS5cIlxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3BlYWtlckRhdGE7IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzcGVha2VyRGF0YSBmcm9tIFwiLi9zcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQgc3BlYWtlclJlZHVjZXIgZnJvbSBcIi4vU3BlYWtlclJlZHVjZXJcIjtcclxuXHJcblxyXG5jb25zdCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbe2lzTG9hZGluZywgc3BlYWtlckxpc3R9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJSZWR1Y2VyLCB7aXNMb2FkaW5nOiB0cnVlLCBzcGVha2VyTGlzdDogW119KTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVTcGVha2VyRmF2b3JpdGUgPSAoc3BlYWtlclJlYykgPT4ge1xyXG4gICAgICAgIHNwZWFrZXJSZWMuZmF2b3JpdGUgPT09IHRydWUgP1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJ1bmZhdm9yaXRlXCIsIGlkOiBzcGVha2VyUmVjLmlkfSkgOiBkaXNwYXRjaCh7dHlwZTogXCJmYXZvcml0ZVwiLCBpZDogc3BlYWtlclJlYy5pZH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCAxMDApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNldFNwZWFrZXJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBzcGVha2VyRGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY29uc29sZS5sb2coXCJDbGVhbnVwISEhXCIpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB7aXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgdG9nZ2xlU3BlYWtlckZhdm9yaXRlfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNwZWFrZXJEYXRhTWFuYWdlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==