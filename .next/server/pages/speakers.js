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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitialSpeakerDataContext": function() { return /* binding */ InitialSpeakerDataContext; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/App */ "./src/App.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Tony\\Desktop\\MERN-STACK\\conference-app\\pages\\speakers.js";




const InitialSpeakerDataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(); // Integration of server-side generated codes with useContext on the client
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

async function getServerSideProps() {
  // Special function from Next.js to pass returned data to react component
  const {
    promisify
  } = __webpack_require__(/*! util */ "util");

  const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_4___default().readFile));
  const jsonFile = path__WEBPACK_IMPORTED_MODULE_3___default().resolve('./', 'db.json');
  let initialSpeakerData;

  try {
    const readFileData = await readFile(jsonFile);
    initialSpeakerData = JSON.parse(readFileData).speakers;
  } catch (e) {
    console.log('api/speakers error message: ', e);
  }

  return {
    props: {
      initialSpeakerData
    }
  };
}

const speakers = ({
  initialSpeakerData
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InitialSpeakerDataContext.Provider, {
    value: initialSpeakerData,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_App__WEBPACK_IMPORTED_MODULE_2__.default, {
      pageName: "Speakers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
/* harmony import */ var _pages_speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/speakers */ "./pages/speakers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const useSpeakerDataManager = () => {
  const initialSpeakerData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_pages_speakers__WEBPACK_IMPORTED_MODULE_3__.InitialSpeakerDataContext);
  const {
    0: {
      isLoading,
      speakerList
    },
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_SpeakerReducer__WEBPACK_IMPORTED_MODULE_1__.default, {
    isLoading: false,
    speakerList: initialSpeakerData
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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

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

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3BhZ2VzL3NwZWFrZXJzLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvSG9tZS5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU2lnbk1lVXAuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2Vycy5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy91c2VTcGVha2VyRGF0YU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvaWdub3JlZHxDOlxcVXNlcnNcXFRvbnlcXERlc2t0b3BcXE1FUk4tU1RBQ0tcXGNvbmZlcmVuY2UtYXBwXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dCIsIlJlYWN0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvbWlzaWZ5IiwicmVxdWlyZSIsInJlYWRGaWxlIiwiZnMiLCJqc29uRmlsZSIsInBhdGgiLCJpbml0aWFsU3BlYWtlckRhdGEiLCJyZWFkRmlsZURhdGEiLCJKU09OIiwicGFyc2UiLCJzcGVha2VycyIsImUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJDb25maWdDb250ZXh0IiwiY29uZmlnVmFsdWVzIiwic2hvd1NpZ25NZVVwIiwic2hvd1NwZWFrZXJTcGVha2luZ1NhdHVydGRheXMiLCJQYWdlVG9TaG93IiwicGFnZU5hbWUiLCJBcHAiLCJIZWFkZXIiLCJzaWdudXBDYWxsYmFjayIsImVtYWlsIiwiaW5kZXgiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImltYWdlUmVmIiwidXNlUmVmIiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxIYW5kbGVyIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNZW51IiwiU2lnbk1lVXAiLCJzZXRFbWFpbCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJpbmNsdWRlcyIsImFsZXJ0IiwiU3BlYWtlckRldGFpbCIsInNwZWFrZXJSZWMiLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImJpbyIsImZhdm9yaXRlIiwic3BlYWtlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiZmF2b3JpdGVWYWx1ZSIsInNwZWFrZXJMaXN0IiwibWFwIiwiaXRlbSIsInR5cGUiLCJkYXRhIiwiU3BlYWtlcnMiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJoYW5kbGVDaGFuZ2VTYXR1cmRheSIsImhhbmRsZUNoYW5nZVN1bmRheSIsIm5ld1NwZWFrZXJMaXN0IiwidXNlTWVtbyIsImZpbHRlciIsInNhdCIsInN1biIsInNvcnQiLCJhIiwiYiIsInNwZWFrZXJMaXN0RmlsdGVyZWQiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ1cGRhdGVEYXRhIiwiYXhpb3MiLCJmZXRjaGVkRGF0YSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLE1BQU1BLHlCQUF5QixnQkFBR0MsMERBQUEsRUFBbEMsQyxDQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7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R0FBUixDQUFZLFlBQVosQ0FBYjtBQUNILEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxTQUFPO0FBQUNxQixhQUFEO0FBQVlvQyxlQUFaO0FBQXlCVTtBQUF6QixHQUFQO0FBQ0gsQ0F6QkQ7O0FBMkJBLCtEQUFlQyxxQkFBZixFOzs7Ozs7Ozs7OztBQ2pDQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvc3BlYWtlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4uL3NyYy9BcHBcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJbml0aWFsU3BlYWtlckRhdGFDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuLy8gSW50ZWdyYXRpb24gb2Ygc2VydmVyLXNpZGUgZ2VuZXJhdGVkIGNvZGVzIHdpdGggdXNlQ29udGV4dCBvbiB0aGUgY2xpZW50XHJcbi8vIFNvbHV0aW9uIHRvIGdldFNlcnZlclNpZGVQcm9wczogV2hlbiB0aGUgY29udGVudCBjaGFuZ2VzLCBhbnkgcGFnZSByZXF1ZXN0IGNhdXNlcyB0aGUgc2VydmVyIHRvIGdlbmVyYXRlIG5ld1xyXG4vLyBjb2Rlcywgd2hpbGUgdGhhdCBpcyBnb2luZyBvbiwgb3RoZXIgcGFnZSByZXF1ZXN0cyB3aXRoaW4gdGhpcyBwZXJpb2QgZ2V0IG9sZCBjb250ZW50IHdoaWxlIHN1YnNlcXVlc3Qgb25lcyBnZXRcclxuLy8gdXBkYXRlZCBjb250ZW50LiBJdCBzY2FsZXMgdG8gaW5maW5pdHkuIFJ1biBidWlsZCBjb21tYW5kICducG0gcnVuIGJ1aWxkJyB0byBidWlsZCB0aGUgYXJ0aWZhY3QgZm9yIGRlcGxveW1lbnQuIFxyXG4vKipleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7IC8vIFNwZWNpYWwgZnVuY3Rpb24gZnJvbSBOZXh0LmpzIHRvIHBhc3MgcmV0dXJuZWQgZGF0YSB0byByZWFjdCBjb21wb25lbnRcclxuICAgIGNvbnN0IHtwcm9taXNpZnl9ID0gcmVxdWlyZShcInV0aWxcIik7XHJcbiAgICBjb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XHJcbiAgICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZSgnLi8nLCAnZGIuanNvbicpO1xyXG4gICAgbGV0IGluaXRpYWxTcGVha2VyRGF0YTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XHJcbiAgICAgICAgaW5pdGlhbFNwZWFrZXJEYXRhID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FwaS9zcGVha2VycyBlcnJvciBtZXNzYWdlOiAnLCBlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3JldmFsaWRhdGVWYWx1ZTogMSwgcHJvcHM6IHtpbml0aWFsU3BlYWtlckRhdGF9fTtcclxufSovXHJcblxyXG4vLyBJbnRlZ3JhdGlvbiBvZiBzZXJ2ZXItc2lkZSBnZW5lcmF0ZWQgY29kZXMgd2l0aCB1c2VDb250ZXh0IG9uIHRoZSBjbGllbnRcclxuLy8gRG93bnNpZGU6IE92ZXJsb2FkaW5nIHRoZSBzZXJ2ZXIgd2l0aCBwYWdlIHJlcXVlc3QgZm9yIGEgcGFydGljdWxhciBwYWdlXHJcbi8vIGFzIGl0IGhhcyB0byBkb3dubG9hZCBhbGwgdGhlIGNvbXBvbmVudHMuIEl0J3Mgb2sgaWYgY29udGVudCBkb2Vzbid0IGNoYW5nZSByZWd1bGFybHkgYW5kIHdpdGggcmVxdWVzdHMuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7IC8vIFNwZWNpYWwgZnVuY3Rpb24gZnJvbSBOZXh0LmpzIHRvIHBhc3MgcmV0dXJuZWQgZGF0YSB0byByZWFjdCBjb21wb25lbnRcclxuICAgIGNvbnN0IHtwcm9taXNpZnl9ID0gcmVxdWlyZShcInV0aWxcIik7XHJcbiAgICBjb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XHJcbiAgICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZSgnLi8nLCAnZGIuanNvbicpO1xyXG4gICAgbGV0IGluaXRpYWxTcGVha2VyRGF0YTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XHJcbiAgICAgICAgaW5pdGlhbFNwZWFrZXJEYXRhID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FwaS9zcGVha2VycyBlcnJvciBtZXNzYWdlOiAnLCBlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3Byb3BzOiB7aW5pdGlhbFNwZWFrZXJEYXRhfX07XHJcbn1cclxuXHJcblxyXG5jb25zdCBzcGVha2VycyA9ICh7aW5pdGlhbFNwZWFrZXJEYXRhfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxJbml0aWFsU3BlYWtlckRhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpbml0aWFsU3BlYWtlckRhdGF9PlxyXG4gICAgICAgIDxBcHAgcGFnZU5hbWU9XCJTcGVha2Vyc1wiIC8+XHJcbiAgICA8L0luaXRpYWxTcGVha2VyRGF0YUNvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG5pbXBvcnQgU3BlYWtlcnMgZnJvbSBcIi4vU3BlYWtlcnNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlnQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGNvbmZpZ1ZhbHVlcyA9IHtcclxuICAgIHNob3dTaWduTWVVcDogdHJ1ZSxcclxuICAgIHNob3dTcGVha2VyU3BlYWtpbmdTYXR1cnRkYXlzOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgUGFnZVRvU2hvdyA9IChwYWdlTmFtZSkgPT4ge1xyXG4gICAgaWYocGFnZU5hbWUgPT09IFwiSG9tZVwiKSByZXR1cm4gPEhvbWU+PC9Ib21lPjtcclxuICAgIGlmKHBhZ2VOYW1lID09PSBcIlNwZWFrZXJzXCIpIHJldHVybiA8U3BlYWtlcnM+PC9TcGVha2Vycz47XHJcbiAgICByZXR1cm4gPGRpdj5Ob3QgRm91bmQuPC9kaXY+O1xyXG59O1xyXG5cclxuY29uc3QgQXBwID0gKHtwYWdlTmFtZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbmZpZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbmZpZ1ZhbHVlc30+XHJcbiAgICAgICAgICAgIDxkaXY+eyBQYWdlVG9TaG93KHBhZ2VOYW1lKSB9PC9kaXY+XHJcbiAgICAgICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2lnbk1lVXAgZnJvbSBcIi4vU2lnbk1lVXBcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2lnbnVwQ2FsbGJhY2sgPSAoZW1haWwpID0+IGNvbnNvbGUubG9nKGBTaWduIHVwIGNhbGxlZCB3aXRoIGVtYWlsICR7ZW1haWx9YCk7IFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBqdW1ib3Ryb25oZWlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPk9jdG9iZXIgMTktMjAgMjAxOTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+IFNhbiBKb3NlLCBDYWxpZm9ybmlhLjwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IHRleHQtbGctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvU1ZDQ2xvZ28ucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TaWxpY29uIFZhbGxleSBDb2RlIENhbXA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMiB0ZXh0LWxnLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWduTWVVcCBzaWdudXBDYWxsYmFjaz17c2lnbnVwQ2FsbGJhY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL01lbnVcIjtcclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbWFyZ2ludG9wYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Ib21lPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1hcmdpbnRvcGJvdHRvbTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2RlIGNhbXAgaXMgYSBjb21tdW5pdHkgZXZlbnQgd2hlcmUgZGV2ZWxvcGVycyBsZWFybiBmcm9tZmVsbG93IGRldmVsb3BlcnMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgYWxzbyBoYXZlIGRldmVsb3BlciByZWxhdGVkIHRvcGljc3RoYXQgaW5jbHVkZXNvZnR3YXJlIGJyYW5kaW5nLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsIGlzc3VlcyBhcm91bmQgc29mdHdhcmUgYXMgd2VsbCBhcyBvdGhlciB0b3BpY3MgZGV2ZWxvcGVycyBhcmUgaW50ZXJlc3RlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIGhlYXJpbmcgYWJvdXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBpbmRleDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7cHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZyBzcmM9ey8vIHRyYW5zcGFyZW50IGdpZiByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUlDUkFcIiA6XHJcbiAgICAgICAgICAgICAgICBpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gYmctZGFyayBuYXZiYXItZGFya1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NwZWFrZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNwZWFrZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi9BcHBcIjtcclxuXHJcblxyXG5jb25zdCBTaWduTWVVcCA9ICh7c2lnbnVwQ2FsbGJhY2t9KSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XHJcbiAgICBcclxuICAgIHJldHVybiBjb250ZXh0LnNob3dTaWduTWVVcCA9PT0gZmFsc2UgPyBudWxsIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbWFpbC5pbmNsdWRlcyhcIkBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ251cENhbGxiYWNrKGVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2lnbiB1cCBjb25maXJtIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPkdldCBVcGRhdGVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IFNpZ25NZVVwOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSBcIi4vSW1hZ2VUb2dnbGVPblNjcm9sbFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBTcGVha2VyRGV0YWlsID0gUmVhY3QubWVtbyhcclxuICAgICh7c3BlYWtlclJlYywgb25IZWFydEZhdm9yaXRlSGFuZGxlcn0pID0+IHtcclxuICAgICAgICBjb25zdCB7aWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGV9ID0gc3BlYWtlclJlYztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTQgY2FyZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGwgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvYncvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YH0gLz5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBmYXZvcml0ZSA/IFwiaGVhcnRyZWRidXR0b25cIiA6IFwiaGVhcnRkYXJrYnV0dG9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25IZWFydEZhdm9yaXRlSGFuZGxlcihlLCBzcGVha2VyUmVjKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2ZpcnN0TmFtZX0ge2xhc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntiaW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckRldGFpbDsiLCJcclxuY29uc3Qgc3BlYWtlclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlRmF2b3JpdGUgPSAoZmF2b3JpdGVWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZS5zcGVha2VyTGlzdC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSByZXR1cm4gey4uLml0ZW0sIGZhdm9yaXRlOiBmYXZvcml0ZVZhbHVlfTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwic2V0U3BlYWtlckxpc3RcIjogey8vIFNwcmVhZHMgdGhlIHN0YXRlIGFuZCByZXBsYWNlcyBvbGQgZGF0YSB3aXRoIG5ldyBzdGF0ZSwgaS5lLCBzcGVha2VyTGlzdCBhbmQgaXNMb2FkaW5nXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwZWFrZXJMaXN0OiBhY3Rpb24uZGF0YSwgaXNMb2FkaW5nOiBmYWxzZX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJmYXZvcml0ZVwiOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwZWFrZXJMaXN0OiB1cGRhdGVGYXZvcml0ZSh0cnVlKX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJ1bmZhdm9yaXRlXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IHVwZGF0ZUZhdm9yaXRlKGZhbHNlKX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJSZWR1Y2VyOyIsImltcG9ydCBSZWFjdCwgeyBcclxuICAgIHVzZVN0YXRlLFxyXG4gICAgdXNlQ29udGV4dCxcclxuICAgIHVzZUNhbGxiYWNrLFxyXG4gICAgdXNlTWVtb1xyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gXCIuL1NwZWFrZXJEZXRhaWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gXCIuL3VzZVNwZWFrZXJEYXRhTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3Qge2lzTG9hZGluZywgc3BlYWtlckxpc3QsIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZX0gPSB1c2VTcGVha2VyRGF0YU1hbmFnZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTYXR1cmRheSA9ICgpID0+IHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4gc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcclxuXHJcbiAgICBjb25zdCBuZXdTcGVha2VyTGlzdCA9IHVzZU1lbW8oLy8gVXNlIHVzZU1lbW8gdG8gY2FjaGUgdmFsdWUgZnJvbSBjb21wbGV4IGNvbXB1dGF0aW9uIGZvciBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb25cclxuICAgICAgICAoKSA9PiBzcGVha2VyTGlzdFxyXG4gICAgICAgIC5maWx0ZXIoKHtzYXQsIHN1bn0pID0+IChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bikpXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIGlmKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pLCBbc3BlYWtpbmdTYXR1cmRheSwgc3BlYWtpbmdTdW5kYXksIHNwZWFrZXJMaXN0XVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nID8gW10gOiBuZXdTcGVha2VyTGlzdDtcclxuXHJcbiAgICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IHVzZUNhbGxiYWNrKChlLCBzcGVha2VyUmVjKSA9PiB7IC8vIFVzZSB1c2VDYWxsYmFjayB0b2dldGhlciB3aXRoIFJlYWN0Lm1lbW8gdG8gY2FjaGUgZnVuYywgc2VlIFNwZWFrZXJEZXRhaWxcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TGFvZGluZy4uLi48L2Rpdj47XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXIgbWFyZ2ludG9wYm90dG9tNSBjaGVja2JveC1iaWdnZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2hvd1NwZWFrZXJTcGVha2luZ1NhdHVydGRheXMgPT09IGZhbHNlID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXJMaXN0RmlsdGVyZWQubWFwKChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyUmVjPXtzcGVha2VyUmVjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3BlYWtlclJlZHVjZXIgZnJvbSBcIi4vU3BlYWtlclJlZHVjZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge0luaXRpYWxTcGVha2VyRGF0YUNvbnRleHR9IGZyb20gXCIuLi9wYWdlcy9zcGVha2Vyc1wiO1xyXG5cclxuXHJcbmNvbnN0IHVzZVNwZWFrZXJEYXRhTWFuYWdlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxTcGVha2VyRGF0YSA9IHVzZUNvbnRleHQoSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dCk7XHJcbiAgICBjb25zdCBbe2lzTG9hZGluZywgc3BlYWtlckxpc3R9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJSZWR1Y2VyLCB7aXNMb2FkaW5nOiBmYWxzZSwgc3BlYWtlckxpc3Q6IGluaXRpYWxTcGVha2VyRGF0YX0pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNwZWFrZXJGYXZvcml0ZSA9IChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXhpb3MucHV0KGAvYXBpL3NwZWFrZXJzLyR7c3BlYWtlclJlYy5pZH1gLCB7Li4uc3BlYWtlclJlYywgZmF2b3JpdGU6ICFzcGVha2VyUmVjLmZhdm9yaXRlfSk7XHJcbiAgICAgICAgICAgIHNwZWFrZXJSZWMuZmF2b3JpdGUgPT09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwidW5mYXZvcml0ZVwiLCBpZDogc3BlYWtlclJlYy5pZH0pIDogXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJmYXZvcml0ZVwiLCBpZDogc3BlYWtlclJlYy5pZH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBkYXRlRGF0YSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoZWREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9zcGVha2Vyc1wiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcInNldFNwZWFrZXJMaXN0XCIsIGRhdGE6IHJlc3VsdC5kYXRhfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaGVkRGF0YSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gY29uc29sZS5sb2coXCJDbGVhbnVwISEhXCIpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB7aXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgdG9nZ2xlU3BlYWtlckZhdm9yaXRlfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNwZWFrZXJEYXRhTWFuYWdlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9