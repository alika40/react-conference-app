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
      speakerList
    },
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_SpeakerReducer__WEBPACK_IMPORTED_MODULE_1__.default, {
    isLoading: true,
    speakerList: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3BhZ2VzL3NwZWFrZXJzLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvSG9tZS5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU2lnbk1lVXAuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2Vycy5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy91c2VTcGVha2VyRGF0YU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9pZ25vcmVkfEM6XFxVc2Vyc1xcVG9ueVxcRGVza3RvcFxcTUVSTi1TVEFDS1xcY29uZmVyZW5jZS1hcHBcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJzcGVha2VycyIsIkNvbmZpZ0NvbnRleHQiLCJSZWFjdCIsImNvbmZpZ1ZhbHVlcyIsInNob3dTaWduTWVVcCIsInNob3dTcGVha2VyU3BlYWtpbmdTYXR1cnRkYXlzIiwiUGFnZVRvU2hvdyIsInBhZ2VOYW1lIiwiQXBwIiwiSGVhZGVyIiwic2lnbnVwQ2FsbGJhY2siLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJpblZpZXciLCJzZXRJblZpZXciLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNjcm9sbEhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1lbnUiLCJTaWduTWVVcCIsInNldEVtYWlsIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbmNsdWRlcyIsImFsZXJ0IiwiU3BlYWtlckRldGFpbCIsInNwZWFrZXJSZWMiLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImJpbyIsImZhdm9yaXRlIiwic3BlYWtlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiZmF2b3JpdGVWYWx1ZSIsInNwZWFrZXJMaXN0IiwibWFwIiwiaXRlbSIsInR5cGUiLCJkYXRhIiwiU3BlYWtlcnMiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJoYW5kbGVDaGFuZ2VTYXR1cmRheSIsImhhbmRsZUNoYW5nZVN1bmRheSIsIm5ld1NwZWFrZXJMaXN0IiwidXNlTWVtbyIsImZpbHRlciIsInNhdCIsInN1biIsInNvcnQiLCJhIiwiYiIsInNwZWFrZXJMaXN0RmlsdGVyZWQiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ1cGRhdGVEYXRhIiwiYXhpb3MiLCJmZXRjaGVkRGF0YSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNuQixzQkFBTyw4REFBQyw2Q0FBRDtBQUFLLFlBQVEsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILENBRkQ7O0FBS0EsK0RBQWVBLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQyxhQUFhLGdCQUFHQywwREFBQSxFQUF0QjtBQUVQLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsY0FBWSxFQUFFLElBREc7QUFFakJDLCtCQUE2QixFQUFFO0FBRmQsQ0FBckI7O0FBS0EsTUFBTUMsVUFBVSxHQUFJQyxRQUFELElBQWM7QUFDN0IsTUFBR0EsUUFBUSxLQUFLLE1BQWhCLEVBQXdCLG9CQUFPLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUN4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Q0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9zcGVha2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi4vc3JjL0FwcFwiO1xyXG5cclxuXHJcbmNvbnN0IHNwZWFrZXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxBcHAgcGFnZU5hbWU9XCJTcGVha2Vyc1wiIC8+O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG5pbXBvcnQgU3BlYWtlcnMgZnJvbSBcIi4vU3BlYWtlcnNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlnQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGNvbmZpZ1ZhbHVlcyA9IHtcclxuICAgIHNob3dTaWduTWVVcDogdHJ1ZSxcclxuICAgIHNob3dTcGVha2VyU3BlYWtpbmdTYXR1cnRkYXlzOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgUGFnZVRvU2hvdyA9IChwYWdlTmFtZSkgPT4ge1xyXG4gICAgaWYocGFnZU5hbWUgPT09IFwiSG9tZVwiKSByZXR1cm4gPEhvbWU+PC9Ib21lPjtcclxuICAgIGlmKHBhZ2VOYW1lID09PSBcIlNwZWFrZXJzXCIpIHJldHVybiA8U3BlYWtlcnM+PC9TcGVha2Vycz47XHJcbiAgICByZXR1cm4gPGRpdj5Ob3QgRm91bmQuPC9kaXY+O1xyXG59O1xyXG5cclxuY29uc3QgQXBwID0gKHtwYWdlTmFtZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbmZpZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbmZpZ1ZhbHVlc30+XHJcbiAgICAgICAgICAgIDxkaXY+eyBQYWdlVG9TaG93KHBhZ2VOYW1lKSB9PC9kaXY+XHJcbiAgICAgICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2lnbk1lVXAgZnJvbSBcIi4vU2lnbk1lVXBcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2lnbnVwQ2FsbGJhY2sgPSAoZW1haWwpID0+IGNvbnNvbGUubG9nKGBTaWduIHVwIGNhbGxlZCB3aXRoIGVtYWlsICR7ZW1haWx9YCk7IFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBqdW1ib3Ryb25oZWlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPk9jdG9iZXIgMTktMjAgMjAxOTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+IFNhbiBKb3NlLCBDYWxpZm9ybmlhLjwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IHRleHQtbGctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvU1ZDQ2xvZ28ucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TaWxpY29uIFZhbGxleSBDb2RlIENhbXA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMiB0ZXh0LWxnLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWduTWVVcCBzaWdudXBDYWxsYmFjaz17c2lnbnVwQ2FsbGJhY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL01lbnVcIjtcclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbWFyZ2ludG9wYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Ib21lPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1hcmdpbnRvcGJvdHRvbTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2RlIGNhbXAgaXMgYSBjb21tdW5pdHkgZXZlbnQgd2hlcmUgZGV2ZWxvcGVycyBsZWFybiBmcm9tZmVsbG93IGRldmVsb3BlcnMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgYWxzbyBoYXZlIGRldmVsb3BlciByZWxhdGVkIHRvcGljc3RoYXQgaW5jbHVkZXNvZnR3YXJlIGJyYW5kaW5nLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsIGlzc3VlcyBhcm91bmQgc29mdHdhcmUgYXMgd2VsbCBhcyBvdGhlciB0b3BpY3MgZGV2ZWxvcGVycyBhcmUgaW50ZXJlc3RlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIGhlYXJpbmcgYWJvdXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBpbmRleDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7cHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZyBzcmM9ey8vIHRyYW5zcGFyZW50IGdpZiByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUlDUkFcIiA6XHJcbiAgICAgICAgICAgICAgICBpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gYmctZGFyayBuYXZiYXItZGFya1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NwZWFrZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNwZWFrZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi9BcHBcIjtcclxuXHJcblxyXG5jb25zdCBTaWduTWVVcCA9ICh7c2lnbnVwQ2FsbGJhY2t9KSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XHJcbiAgICBcclxuICAgIHJldHVybiBjb250ZXh0LnNob3dTaWduTWVVcCA9PT0gZmFsc2UgPyBudWxsIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbWFpbC5pbmNsdWRlcyhcIkBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ251cENhbGxiYWNrKGVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2lnbiB1cCBjb25maXJtIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPkdldCBVcGRhdGVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IFNpZ25NZVVwOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSBcIi4vSW1hZ2VUb2dnbGVPblNjcm9sbFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBTcGVha2VyRGV0YWlsID0gUmVhY3QubWVtbyhcclxuICAgICh7c3BlYWtlclJlYywgb25IZWFydEZhdm9yaXRlSGFuZGxlcn0pID0+IHtcclxuICAgICAgICBjb25zdCB7aWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGV9ID0gc3BlYWtlclJlYztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTQgY2FyZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGwgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvYncvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YH0gLz5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBmYXZvcml0ZSA/IFwiaGVhcnRyZWRidXR0b25cIiA6IFwiaGVhcnRkYXJrYnV0dG9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25IZWFydEZhdm9yaXRlSGFuZGxlcihlLCBzcGVha2VyUmVjKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2ZpcnN0TmFtZX0ge2xhc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntiaW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckRldGFpbDsiLCJcclxuY29uc3Qgc3BlYWtlclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlRmF2b3JpdGUgPSAoZmF2b3JpdGVWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZS5zcGVha2VyTGlzdC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSByZXR1cm4gey4uLml0ZW0sIGZhdm9yaXRlOiBmYXZvcml0ZVZhbHVlfTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwic2V0U3BlYWtlckxpc3RcIjogey8vIFNwcmVhZHMgdGhlIHN0YXRlIGFuZCByZXBsYWNlcyBvbGQgZGF0YSB3aXRoIG5ldyBzdGF0ZSwgaS5lLCBzcGVha2VyTGlzdCBhbmQgaXNMb2FkaW5nXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwZWFrZXJMaXN0OiBhY3Rpb24uZGF0YSwgaXNMb2FkaW5nOiBmYWxzZX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJmYXZvcml0ZVwiOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwZWFrZXJMaXN0OiB1cGRhdGVGYXZvcml0ZSh0cnVlKX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJ1bmZhdm9yaXRlXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IHVwZGF0ZUZhdm9yaXRlKGZhbHNlKX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJSZWR1Y2VyOyIsImltcG9ydCBSZWFjdCwgeyBcclxuICAgIHVzZVN0YXRlLFxyXG4gICAgdXNlQ29udGV4dCxcclxuICAgIHVzZUNhbGxiYWNrLFxyXG4gICAgdXNlTWVtb1xyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gXCIuL1NwZWFrZXJEZXRhaWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gXCIuL3VzZVNwZWFrZXJEYXRhTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3Qge2lzTG9hZGluZywgc3BlYWtlckxpc3QsIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZX0gPSB1c2VTcGVha2VyRGF0YU1hbmFnZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTYXR1cmRheSA9ICgpID0+IHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4gc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcclxuXHJcbiAgICBjb25zdCBuZXdTcGVha2VyTGlzdCA9IHVzZU1lbW8oLy8gVXNlIHVzZU1lbW8gdG8gY2FjaGUgdmFsdWUgZnJvbSBjb21wbGV4IGNvbXB1dGF0aW9uIGZvciBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb25cclxuICAgICAgICAoKSA9PiBzcGVha2VyTGlzdFxyXG4gICAgICAgIC5maWx0ZXIoKHtzYXQsIHN1bn0pID0+IChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bikpXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIGlmKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pLCBbc3BlYWtpbmdTYXR1cmRheSwgc3BlYWtpbmdTdW5kYXksIHNwZWFrZXJMaXN0XVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nID8gW10gOiBuZXdTcGVha2VyTGlzdDtcclxuXHJcbiAgICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IHVzZUNhbGxiYWNrKChlLCBzcGVha2VyUmVjKSA9PiB7IC8vIFVzZSB1c2VDYWxsYmFjayB0b2dldGhlciB3aXRoIFJlYWN0Lm1lbW8gdG8gY2FjaGUgZnVuYywgc2VlIFNwZWFrZXJEZXRhaWxcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TGFvZGluZy4uLi48L2Rpdj47XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXIgbWFyZ2ludG9wYm90dG9tNSBjaGVja2JveC1iaWdnZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2hvd1NwZWFrZXJTcGVha2luZ1NhdHVydGRheXMgPT09IGZhbHNlID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXJMaXN0RmlsdGVyZWQubWFwKChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyUmVjPXtzcGVha2VyUmVjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3BlYWtlclJlZHVjZXIgZnJvbSBcIi4vU3BlYWtlclJlZHVjZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmNvbnN0IHVzZVNwZWFrZXJEYXRhTWFuYWdlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt7aXNMb2FkaW5nLCBzcGVha2VyTGlzdH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlclJlZHVjZXIsIHtpc0xvYWRpbmc6IHRydWUsIHNwZWFrZXJMaXN0OiBbXX0pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNwZWFrZXJGYXZvcml0ZSA9IChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXhpb3MucHV0KGAvYXBpL3NwZWFrZXJzLyR7c3BlYWtlclJlYy5pZH1gLCB7Li4uc3BlYWtlclJlYywgZmF2b3JpdGU6ICFzcGVha2VyUmVjLmZhdm9yaXRlfSk7XHJcbiAgICAgICAgICAgIHNwZWFrZXJSZWMuZmF2b3JpdGUgPT09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwidW5mYXZvcml0ZVwiLCBpZDogc3BlYWtlclJlYy5pZH0pIDogXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJmYXZvcml0ZVwiLCBpZDogc3BlYWtlclJlYy5pZH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBkYXRlRGF0YSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoZWREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9zcGVha2Vyc1wiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcInNldFNwZWFrZXJMaXN0XCIsIGRhdGE6IHJlc3VsdC5kYXRhfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaGVkRGF0YSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gY29uc29sZS5sb2coXCJDbGVhbnVwISEhXCIpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB7aXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgdG9nZ2xlU3BlYWtlckZhdm9yaXRlfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNwZWFrZXJEYXRhTWFuYWdlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=