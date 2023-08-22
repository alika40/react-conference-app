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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_speakers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/speakers */ "./pages/speakers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const useSpeakerDataManager = () => {
  // const initialSpeakerData = useContext(InitialSpeakerDataContext);
  // const [{isLoading, speakerList}, dispatch] = useReducer(speakerReducer, {isLoading: false, speakerList: initialSpeakerData});
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
    const updateData = async () => {
      axios__WEBPACK_IMPORTED_MODULE_3___default().put(`/api/speakers/${speakerRec.id}`, _objectSpread(_objectSpread({}, speakerRec), {}, {
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
    // new Promise((resolve) => setTimeout(() => resolve(), 100))
    // .then(() => dispatch({ type: "setSpeakerList", data: speakerData}) );
    const fetchedData = async () => {
      let result = await axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/speakers");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3BhZ2VzL3NwZWFrZXJzLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvSG9tZS5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU2lnbk1lVXAuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2Vycy5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9zcGVha2VyRGF0YS5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy91c2VTcGVha2VyRGF0YU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvaWdub3JlZHxDOlxcVXNlcnNcXFRvbnlcXERlc2t0b3BcXE1FUk4tU1RBQ0tcXGNvbmZlcmVuY2UtYXBwXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dCIsIlJlYWN0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvbWlzaWZ5IiwicmVxdWlyZSIsInJlYWRGaWxlIiwiZnMiLCJqc29uRmlsZSIsInBhdGgiLCJpbml0aWFsU3BlYWtlckRhdGEiLCJyZWFkRmlsZURhdGEiLCJKU09OIiwicGFyc2UiLCJzcGVha2VycyIsImUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJDb25maWdDb250ZXh0IiwiY29uZmlnVmFsdWVzIiwic2hvd1NpZ25NZVVwIiwic2hvd1NwZWFrZXJTcGVha2luZ1NhdHVydGRheXMiLCJQYWdlVG9TaG93IiwicGFnZU5hbWUiLCJBcHAiLCJIZWFkZXIiLCJzaWdudXBDYWxsYmFjayIsImVtYWlsIiwiaW5kZXgiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImltYWdlUmVmIiwidXNlUmVmIiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxIYW5kbGVyIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNZW51IiwiU2lnbk1lVXAiLCJzZXRFbWFpbCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJpbmNsdWRlcyIsImFsZXJ0IiwiU3BlYWtlckRldGFpbCIsInNwZWFrZXJSZWMiLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImJpbyIsImZhdm9yaXRlIiwic3BlYWtlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiZmF2b3JpdGVWYWx1ZSIsInNwZWFrZXJMaXN0IiwibWFwIiwiaXRlbSIsInR5cGUiLCJkYXRhIiwiU3BlYWtlcnMiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJoYW5kbGVDaGFuZ2VTYXR1cmRheSIsImhhbmRsZUNoYW5nZVN1bmRheSIsIm5ld1NwZWFrZXJMaXN0IiwidXNlTWVtbyIsImZpbHRlciIsInNhdCIsInN1biIsInNvcnQiLCJhIiwiYiIsInNwZWFrZXJMaXN0RmlsdGVyZWQiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwicHJldmVudERlZmF1bHQiLCJzcGVha2VyRGF0YSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVwZGF0ZURhdGEiLCJheGlvcyIsImZldGNoZWREYXRhIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR08sTUFB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YWdlcy9zcGVha2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi4vc3JjL0FwcFwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEluaXRpYWxTcGVha2VyRGF0YUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG4vLyBJbnRlZ3JhdGlvbiBvZiBzZXJ2ZXItc2lkZSBnZW5lcmF0ZWQgY29kZXMgd2l0aCB1c2VDb250ZXh0IG9uIHRoZSBjbGllbnRcclxuLy8gU29sdXRpb24gdG8gZ2V0U2VydmVyU2lkZVByb3BzOiBXaGVuIHRoZSBjb250ZW50IGNoYW5nZXMsIGFueSBwYWdlIHJlcXVlc3QgY2F1c2VzIHRoZSBzZXJ2ZXIgdG8gZ2VuZXJhdGUgbmV3XHJcbi8vIGNvZGVzLCB3aGlsZSB0aGF0IGlzIGdvaW5nIG9uLCBvdGhlciBwYWdlIHJlcXVlc3RzIHdpdGhpbiB0aGlzIHBlcmlvZCBnZXQgb2xkIGNvbnRlbnQgd2hpbGUgc3Vic2VxdWVzdCBvbmVzIGdldFxyXG4vLyB1cGRhdGVkIGNvbnRlbnQuIEl0IHNjYWxlcyB0byBpbmZpbml0eS4gUnVuIGJ1aWxkIGNvbW1hbmQgJ25wbSBydW4gYnVpbGQnIHRvIGJ1aWxkIHRoZSBhcnRpZmFjdCBmb3IgZGVwbG95bWVudC4gXHJcbi8qKmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHsgLy8gU3BlY2lhbCBmdW5jdGlvbiBmcm9tIE5leHQuanMgdG8gcGFzcyByZXR1cm5lZCBkYXRhIHRvIHJlYWN0IGNvbXBvbmVudFxyXG4gICAgY29uc3Qge3Byb21pc2lmeX0gPSByZXF1aXJlKFwidXRpbFwiKTtcclxuICAgIGNvbnN0IHJlYWRGaWxlID0gcHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcclxuICAgIGNvbnN0IGpzb25GaWxlID0gcGF0aC5yZXNvbHZlKCcuLycsICdkYi5qc29uJyk7XHJcbiAgICBsZXQgaW5pdGlhbFNwZWFrZXJEYXRhO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcclxuICAgICAgICBpbml0aWFsU3BlYWtlckRhdGEgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXBpL3NwZWFrZXJzIGVycm9yIG1lc3NhZ2U6ICcsIGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7cmV2YWxpZGF0ZVZhbHVlOiAxLCBwcm9wczoge2luaXRpYWxTcGVha2VyRGF0YX19O1xyXG59Ki9cclxuXHJcbi8vIEludGVncmF0aW9uIG9mIHNlcnZlci1zaWRlIGdlbmVyYXRlZCBjb2RlcyB3aXRoIHVzZUNvbnRleHQgb24gdGhlIGNsaWVudFxyXG4vLyBEb3duc2lkZTogT3ZlcmxvYWRpbmcgdGhlIHNlcnZlciB3aXRoIHBhZ2UgcmVxdWVzdCBmb3IgYSBwYXJ0aWN1bGFyIHBhZ2VcclxuLy8gYXMgaXQgaGFzIHRvIGRvd25sb2FkIGFsbCB0aGUgY29tcG9uZW50cy4gSXQncyBvayBpZiBjb250ZW50IGRvZXNuJ3QgY2hhbmdlIHJlZ3VsYXJseSBhbmQgd2l0aCByZXF1ZXN0cy5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHsgLy8gU3BlY2lhbCBmdW5jdGlvbiBmcm9tIE5leHQuanMgdG8gcGFzcyByZXR1cm5lZCBkYXRhIHRvIHJlYWN0IGNvbXBvbmVudFxyXG4gICAgY29uc3Qge3Byb21pc2lmeX0gPSByZXF1aXJlKFwidXRpbFwiKTtcclxuICAgIGNvbnN0IHJlYWRGaWxlID0gcHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcclxuICAgIGNvbnN0IGpzb25GaWxlID0gcGF0aC5yZXNvbHZlKCcuLycsICdkYi5qc29uJyk7XHJcbiAgICBsZXQgaW5pdGlhbFNwZWFrZXJEYXRhO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcclxuICAgICAgICBpbml0aWFsU3BlYWtlckRhdGEgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXBpL3NwZWFrZXJzIGVycm9yIG1lc3NhZ2U6ICcsIGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7cHJvcHM6IHtpbml0aWFsU3BlYWtlckRhdGF9fTtcclxufVxyXG5cclxuXHJcbmNvbnN0IHNwZWFrZXJzID0gKHtpbml0aWFsU3BlYWtlckRhdGF9KSA9PiB7XHJcbiAgICByZXR1cm4gPEluaXRpYWxTcGVha2VyRGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2luaXRpYWxTcGVha2VyRGF0YX0+XHJcbiAgICAgICAgPEFwcCBwYWdlTmFtZT1cIlNwZWFrZXJzXCIgLz5cclxuICAgIDwvSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3BlYWtlcnM7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XHJcbmltcG9ydCBTcGVha2VycyBmcm9tIFwiLi9TcGVha2Vyc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb25maWdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgY29uZmlnVmFsdWVzID0ge1xyXG4gICAgc2hvd1NpZ25NZVVwOiB0cnVlLFxyXG4gICAgc2hvd1NwZWFrZXJTcGVha2luZ1NhdHVydGRheXM6IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCBQYWdlVG9TaG93ID0gKHBhZ2VOYW1lKSA9PiB7XHJcbiAgICBpZihwYWdlTmFtZSA9PT0gXCJIb21lXCIpIHJldHVybiA8SG9tZT48L0hvbWU+O1xyXG4gICAgaWYocGFnZU5hbWUgPT09IFwiU3BlYWtlcnNcIikgcmV0dXJuIDxTcGVha2Vycz48L1NwZWFrZXJzPjtcclxuICAgIHJldHVybiA8ZGl2Pk5vdCBGb3VuZC48L2Rpdj47XHJcbn07XHJcblxyXG5jb25zdCBBcHAgPSAoe3BhZ2VOYW1lfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29uZmlnQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29uZmlnVmFsdWVzfT5cclxuICAgICAgICAgICAgPGRpdj57IFBhZ2VUb1Nob3cocGFnZU5hbWUpIH08L2Rpdj5cclxuICAgICAgICA8L0NvbmZpZ0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaWduTWVVcCBmcm9tIFwiLi9TaWduTWVVcFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzaWdudXBDYWxsYmFjayA9IChlbWFpbCkgPT4gY29uc29sZS5sb2coYFNpZ24gdXAgY2FsbGVkIHdpdGggZW1haWwgJHtlbWFpbH1gKTsgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIGp1bWJvdHJvbmhlaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+T2N0b2JlciAxOS0yMCAyMDE5PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2VcIj4gU2FuIEpvc2UsIENhbGlmb3JuaWEuPC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTggdGV4dC1sZy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9TVkNDbG9nby5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlNpbGljb24gVmFsbGV5IENvZGUgQ2FtcDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sLTEyIHRleHQtbGctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ25NZVVwIHNpZ251cENhbGxiYWNrPXtzaWdudXBDYWxsYmFja30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4vTWVudVwiO1xyXG5cclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtYXJnaW50b3Bib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkhvbWU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWFyZ2ludG9wYm90dG9tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvZGUgY2FtcCBpcyBhIGNvbW11bml0eSBldmVudCB3aGVyZSBkZXZlbG9wZXJzIGxlYXJuIGZyb21mZWxsb3cgZGV2ZWxvcGVycy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBhbHNvIGhhdmUgZGV2ZWxvcGVyIHJlbGF0ZWQgdG9waWNzdGhhdCBpbmNsdWRlc29mdHdhcmUgYnJhbmRpbmcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnYWwgaXNzdWVzIGFyb3VuZCBzb2Z0d2FyZSBhcyB3ZWxsIGFzIG90aGVyIHRvcGljcyBkZXZlbG9wZXJzIGFyZSBpbnRlcmVzdGVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gaGVhcmluZyBhYm91dC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGluZGV4OyIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsID0gKHtwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWd9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHNldEluVmlldyhpc0luVmlldygpKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aW1nIHNyYz17Ly8gdHJhbnNwYXJlbnQgZ2lmIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmcgPyBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQVAvLy93QUFBQ0g1QkFFQUFBQUFMQUFBQUFBQkFBRUFBSUNSQVwiIDpcclxuICAgICAgICAgICAgICAgIGluVmlldyA/IHNlY29uZGFyeUltZyA6IHByaW1hcnlJbWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWY9e2ltYWdlUmVmfVxyXG4gICAgICAgICAgICBhbHQ9XCJcIi8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTWVudSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBiZy1kYXJrIG5hdmJhci1kYXJrXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3BlYWtlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U3BlYWtlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuL0FwcFwiO1xyXG5cclxuXHJcbmNvbnN0IFNpZ25NZVVwID0gKHtzaWdudXBDYWxsYmFja30pID0+IHtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGNvbnRleHQuc2hvd1NpZ25NZVVwID09PSBmYWxzZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVtYWlsLmluY2x1ZGVzKFwiQFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbnVwQ2FsbGJhY2soZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJzaWduIHVwIGNvbmZpcm0hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+R2V0IFVwZGF0ZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgU2lnbk1lVXA7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tIFwiLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFNwZWFrZXJEZXRhaWwgPSBSZWFjdC5tZW1vKFxyXG4gICAgKHtzcGVha2VyUmVjLCBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlvLCBmYXZvcml0ZX0gPSBzcGVha2VyUmVjO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtNCBjYXJkbWluXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gfSAvPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGZhdm9yaXRlID8gXCJoZWFydHJlZGJ1dHRvblwiIDogXCJoZWFydGRhcmtidXR0b25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyKGUsIHNwZWFrZXJSZWMpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Zmlyc3ROYW1lfSB7bGFzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyRGV0YWlsOyIsIlxyXG5jb25zdCBzcGVha2VyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVGYXZvcml0ZSA9IChmYXZvcml0ZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNwZWFrZXJMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZihpdGVtLmlkID09PSBhY3Rpb24uaWQpIHJldHVybiB7Li4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWV9O1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJzZXRTcGVha2VyTGlzdFwiOiB7Ly8gU3ByZWFkcyB0aGUgc3RhdGUgYW5kIHJlcGxhY2VzIG9sZCBkYXRhIHdpdGggbmV3IHN0YXRlLCBpLmUsIHNwZWFrZXJMaXN0IGFuZCBpc0xvYWRpbmdcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IGFjdGlvbi5kYXRhLCBpc0xvYWRpbmc6IGZhbHNlfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcImZhdm9yaXRlXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IHVwZGF0ZUZhdm9yaXRlKHRydWUpfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInVuZmF2b3JpdGVcIjoge1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcGVha2VyTGlzdDogdXBkYXRlRmF2b3JpdGUoZmFsc2UpfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3BlYWtlclJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0LCB7IFxyXG4gICAgdXNlU3RhdGUsXHJcbiAgICB1c2VDb250ZXh0LFxyXG4gICAgdXNlQ2FsbGJhY2ssXHJcbiAgICB1c2VNZW1vXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IFNwZWFrZXJEZXRhaWwgZnJvbSBcIi4vU3BlYWtlckRldGFpbFwiO1xyXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4vQXBwXCI7XHJcbmltcG9ydCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgZnJvbSBcIi4vdXNlU3BlYWtlckRhdGFNYW5hZ2VyXCI7XHJcblxyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCB7aXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgdG9nZ2xlU3BlYWtlckZhdm9yaXRlfSA9IHVzZVNwZWFrZXJEYXRhTWFuYWdlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNhdHVyZGF5ID0gKCkgPT4gc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTdW5kYXkgPSAoKSA9PiBzZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xyXG5cclxuICAgIGNvbnN0IG5ld1NwZWFrZXJMaXN0ID0gdXNlTWVtbygvLyBVc2UgdXNlTWVtbyB0byBjYWNoZSB2YWx1ZSBmcm9tIGNvbXBsZXggY29tcHV0YXRpb24gZm9yIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvblxyXG4gICAgICAgICgpID0+IHNwZWFrZXJMaXN0XHJcbiAgICAgICAgLmZpbHRlcigoe3NhdCwgc3VufSkgPT4gKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKSlcclxuICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgaWYoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSksIFtzcGVha2luZ1NhdHVyZGF5LCBzcGVha2luZ1N1bmRheSwgc3BlYWtlckxpc3RdXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmcgPyBbXSA6IG5ld1NwZWFrZXJMaXN0O1xyXG5cclxuICAgIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIHNwZWFrZXJSZWMpID0+IHsgLy8gVXNlIHVzZUNhbGxiYWNrIHRvZ2V0aGVyIHdpdGggUmVhY3QubWVtbyB0byBjYWNoZSBmdW5jLCBzZWUgU3BlYWtlckRldGFpbFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVTcGVha2VyRmF2b3JpdGUoc3BlYWtlclJlYyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5MYW9kaW5nLi4uLjwvZGl2PjtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciBtYXJnaW50b3Bib3R0b201IGNoZWNrYm94LWJpZ2dlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nU2F0dXJ0ZGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhdHVyZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU2F0dXJkYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdHVyZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1N1bmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlckxpc3RGaWx0ZXJlZC5tYXAoKHNwZWFrZXJSZWMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlclJlYy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXJSZWM9e3NwZWFrZXJSZWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyPXtoZWFydEZhdm9yaXRlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7IiwiY29uc3Qgc3BlYWtlckRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxNTMwLFxyXG4gICAgICBmaXJzdE5hbWU6IFwiVGFtbXlcIixcclxuICAgICAgbGFzdE5hbWU6IFwiQmFrZXJcIixcclxuICAgICAgc2F0OiBmYWxzZSxcclxuICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgYmlvOiBcIlRhbW15IGhhcyBoZWxkIGEgbnVtYmVyIG9mIGV4ZWN1dGl2ZSBhbmQgbWFuYWdlbWVudCByb2xlcyBvdmVyIHRoZSBwYXN0IDE1IHllYXJzLCBpbmNsdWRpbmcgVlAgZW5naW5lZXJpbmcgUm9sZXMgYXQgTW9sZWt1bGUgSW5jLiwgQ2FudGFsb3VwZSBTeXN0ZW1zLCBFLUNvbG9yLCBhbmQgVW50YW5nbGUgSW5jLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNTk5NixcclxuICAgICAgZmlyc3ROYW1lOiBcIkNyYWlnXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIkJlcm50c29uXCIsXHJcbiAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgICBiaW86IFwiQ3JhaWcgaGFzIGEgcGFzc2lvbiBmb3IgY29tbXVuaXR5IGFuZCBoZWxwaW5nIG90aGVyIGRldmVsb3BlcnMgaW1wcm92ZSB0aGVpciBza2lsbHMuIEhlIHdyaXRlcyB0aGUgY29sdW1uIFxcXCJTb2Z0d2FyZSBHYXJkZW5pbmdcXFwiIGluIERvdE5ldCBDdXJyeSBNYWdhemluZSBhbmQgaXMgdGhlIGNvLWF1dGhvciBvZiBcXFwiQ29udGludW91cyBJbnRlZ3JhdGlvbiBpbiAuTkVUXFxcIiBhdmFpbGFibGUgZnJvbSBNYW5uaW5nLlwiLFxyXG4gICAgICBzYXQ6IHRydWUsXHJcbiAgICAgIHN1bjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEwODAzLFxyXG4gICAgICBmaXJzdE5hbWU6IFwiRXVnZW5lXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIkNodXZ5cm92XCIsXHJcbiAgICAgIHNhdDogdHJ1ZSxcclxuICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICBiaW86IFwiRXVnZW5lIENodXZ5cm92IGlzICBhIFNlbmlvciBDbG91ZCBBcmNoaXRlY3QgYXQgTWljcm9zb2Z0LiBIZSB3b3JrcyBkaXJlY3RseSB3aXRoIGJvdGggc3RhcnR1cHMgYW5kIGVudGVycHJpc2VzIHRvIGVuYWJsZSB0aGVpciBzb2x1dGlvbnMgaW4gTWljcm9zb2Z0IGNsb3VkLCBhbmQgdG8gbWFrZSBBenVyZSBiZXR0ZXIgYXMgYSByZXN1bHQgb2YgdGhpcyB3b3JrIHdpdGggcGFydG5lcnMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMTI0LFxyXG4gICAgICBmaXJzdE5hbWU6IFwiRG91Z2xhc1wiLFxyXG4gICAgICBsYXN0TmFtZTogXCJDcm9ja2ZvcmRcIixcclxuICAgICAgc2F0OiB0cnVlLFxyXG4gICAgICBzdW46IGZhbHNlLFxyXG4gICAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgYmlvOiBcIkRvdWdsYXMgQ3JvY2tmb3JkIGRpc2NvdmVyZWQgdGhlIEpTT04gRGF0YSBJbnRlcmNoYW5nZSBGb3JtYXQuIEhlIGlzIGFsc28gdGhlIGF1dGhvciBvZiBfSmF2YVNjcmlwdDogVGhlIEdvb2QgUGFydHNfLiBIZSBoYXMgYmVlbiBjYWxsZWQgYSBndXJ1LCBidXQgaGUgaXMgYWN0dWFsbHkgbW9yZSBvZiBhIG1haGF0bWEuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA0MTgwOCxcclxuICAgICAgZmlyc3ROYW1lOiBcIlBhdWxcIixcclxuICAgICAgbGFzdE5hbWU6IFwiRXZlcml0dFwiLFxyXG4gICAgICBzYXQ6IHRydWUsXHJcbiAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICBiaW86IFwiUGF1bCBpcyB0aGUgUHlDaGFybSBhbmQgV2ViU3Rvcm0gRGV2ZWxvcGVyIEFkdm9jYXRlIGF0IEpldEJyYWlucy4gQmVmb3JlIHRoYXQsIFBhdWwgd2FzIGEgcGFydG5lciBhdCBBZ2VuZGFsZXNzIENvbnN1bHRpbmcgYW5kIGNvLWZvdW5kZXIgb2YgWm9wZSBDb3Jwb3JhdGlvbiwgdGFraW5nIHRoZSBmaXJzdCBvcGVuIHNvdXJjZSBhcHBsaWNhdGlvbiBzZXJ2ZXIgdGhyb3VnaCAkMTRNIG9mIGZ1bmRpbmcuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMjY5LFxyXG4gICAgICBmaXJzdE5hbWU6IFwiQXJ1blwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJHdXB0YVwiLFxyXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgIGJpbzogXCJBcnVuIEd1cHRhIGlzIGEgUHJpbmNpcGFsIE9wZW4gU291cmNlIFRlY2hub2xvZ2lzdCBhdCBBbWF6b24gV2ViIFNlcnZpY2VzLiBIZSBoYXMgYnVpbHQgYW5kIGxlZCBkZXZlbG9wZXIgY29tbXVuaXRpZXMgZm9yIDEyKyB5ZWFycyBhdCBTdW4sIE9yYWNsZSwgUmVkIEhhdCBhbmQgQ291Y2hiYXNlLlwiLFxyXG4gICAgICBzYXQ6IGZhbHNlLFxyXG4gICAgICBzdW46IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxNzI1LFxyXG4gICAgICBmaXJzdE5hbWU6IFwiQnJhZFwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJJcmJ5XCIsXHJcbiAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgICAgYmlvOiBcIkJyYWQgaXMgYW4gYWNjb21wbGlzaGVkIC5ORVQgc29mdHdhcmUgYXJjaGl0ZWN0IHNwZWNpYWxpemluZyBpbiBEb21haW4gRHJpdmVuIERlc2lnbiBhbmQgRXZlbnQgRHJpdmVuIEFyY2hpdGVjdHVyZXMuXCIsXHJcbiAgICAgIHNhdDogdHJ1ZSxcclxuICAgICAgc3VuOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDE4ODA1LFxyXG4gICAgICBmaXJzdE5hbWU6IFwiTWlja2V5IFcuXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIk1hbnRsZVwiLFxyXG4gICAgICBzYXQ6IHRydWUsXHJcbiAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICBiaW86IFwiTWlja2V5IGhhcyBiZWVuIGRldmVsb3Bpbmcgc29mdHdhcmUgc3lzdGVtcyBhbmQgcHJvZHVjdHMgZm9yIG92ZXIgNDAgeWVhcnMsIGFzIGEgc3lzdGVtcyBwcm9ncmFtbWVyLCBUZWNoIExlYWQsIE1hbmFnZXIsIFZQIEVuZ2luZWVyaW5nLCBDVE8sIENPTywgYW5kIG5vdyBDRU8vQ1RPIG9mIGhpcyBvd24gY29tcGFueS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDgzNjcsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJHYXlsZSBMYWFrbWFublwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJNY0Rvd2VsbFwiLFxyXG4gICAgICBzYXQ6IHRydWUsXHJcbiAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgICAgYmlvOiBcIkdheWxlIExhYWttYW5uIE1jRG93ZWxsIGlzIHRoZSBmb3VuZGVyIGFuZCBDRU8gb2YgQ2FyZWVyQ3VwLmNvbSBhbmQgdGhlIGF1dGhvciBvZiB0aHJlZSBiZXN0IHNlbGxpbmcgYm9va3MuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxODcsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJEYXZlXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIk5pZWxzZW5cIixcclxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICBiaW86IFwiQXMgSGVhZCBvZiBFY29zeXN0ZW0gUHJvZ3JhbXMsIERhdmUgdXNlcyBlbWVyZ2luZyB0ZWNobm9sb2dpZXMgYW5kIG9wZW4gc291cmNlIHByb2plY3RzIGxpa2UgTWljcm9zZXJ2aWNlcywgU2VydmVybGVzcyAmIEt1YmVybmV0ZXMgdG8gYnJpbmcgdGhlIG1hZ2ljIG9mIFJlZGlzIHRvIHRoZSBicm9hZGVyIGNvbW11bml0eS5cIixcclxuICAgICAgc2F0OiB0cnVlLFxyXG4gICAgICBzdW46IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA4MjMsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJLZXZpblwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJOaWxzb25cIixcclxuICAgICAgc2F0OiBmYWxzZSxcclxuICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgYmlvOiBcIlRlYW0gTGVhZCBvZiB0aGUgQ2hyb21lY2FzdCBUZWNobmljYWwgU29sdXRpb25zIEVuZ2luZWVyIHRlYW0sIGEgSmF2YSBDaGFtcGlvbiBhbmQgdGhyZWUgdGltZSBKYXZhT25lIFJvY2sgU3RhciBQcmVzZW50ZXIuIEtldmluIGhhcyBzcG9rZW4gYXQgY29uZmVyZW5jZXMgc3VjaCBhcyBKYXZhT25lLCBEZXZveHgsIEpBWCwgTydSZWlsbHkgRmx1ZW50LCBTaWxpY29uIFZhbGxleSBDb2RlIENhbXAsIEpBWCBhbmQgSFRNTDVEZXZDb25mLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogODU5MCxcclxuICAgICAgZmlyc3ROYW1lOiBcIkNocmlzXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIlJpY2hhcmRzb25cIixcclxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICBiaW86IFwiQ2hyaXMgUmljaGFyZHNvbiBpcyBhIGRldmVsb3BlciBhbmQgYXJjaGl0ZWN0LiBIZSBpcyBhIEphdmEgQ2hhbXBpb24sIGEgSmF2YU9uZSByb2NrIHN0YXIgYW5kIHRoZSBhdXRob3Igb2YgUE9KT3MgaW4gQWN0aW9uLCB3aGljaCBkZXNjcmliZXMgaG93IHRvIGJ1aWxkIGVudGVycHJpc2UgSmF2YSBhcHBsaWNhdGlvbnMgd2l0aCBmcmFtZXdvcmtzIHN1Y2ggYXMgU3ByaW5nIGFuZCBIaWJlcm5hdGUuXCIsXHJcbiAgICAgIHNhdDogdHJ1ZSxcclxuICAgICAgc3VuOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEwODA4LFxyXG4gICAgICBmaXJzdE5hbWU6IFwiQW50b255XCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIlJvc3NcIixcclxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICBiaW86IFwiQW50b255IFJvc3MgaXMgYSBjb25zdWx0YW50IHNwZWNpYWxpemluZyBpbiBkYXRhIHNjaWVuY2UgYW5kIG1hY2hpbmUgbGVhcm5pbmcgYXBwbGllZCB0byBzcG9ydHMgcGVyZm9ybWFuY2UuIEhlIGhhcyB3b3JrZWQgY2xvc2VseSB3aXRoIFVTQyBhbmQgVUNMQSBhbmQgaXMgcHJlc2VudGx5IGludm9sdmVkIHdpdGggdGhlIFJlY3Vyc2UgQ2VudGVyIGluIE5ldyBZb3JrIHJlc2VhcmNoaW5nIGRlZXAgbGVhcm5pbmcgYW5kIHZvaWNlIHJlY29nbml0aW9uLlwiLFxyXG4gICAgICBzYXQ6IHRydWUsXHJcbiAgICAgIHN1bjogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA2NTQ4LFxyXG4gICAgICBmaXJzdE5hbWU6IFwiU3RldmVcIixcclxuICAgICAgbGFzdE5hbWU6IFwiU291ZGVyc1wiLFxyXG4gICAgICBzYXQ6IHRydWUsXHJcbiAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgICBiaW86IFwiU3RldmUgd29ya3MgYXQgU3BlZWRDdXJ2ZSBvbiB0aGUgaW50ZXJwbGF5IGJldHdlZW4gcGVyZm9ybWFuY2UgYW5kIGRlc2lnbi4gSGUgcHJldmlvdXNseSBzZXJ2ZWQgYXMgR29vZ2xlJ3MgSGVhZCBQZXJmb3JtYW5jZSBFbmdpbmVlciwgQ2hpZWYgUGVyZm9ybWFuY2UgWWFob28hLCBhbmQgQ2hpZWYgUGVyZm9ybWFuY2UgT2ZmaWNlciBhdCBGYXN0bHkuXCJcclxuICAgIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJEYXRhOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSBcIi4vc3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHNwZWFrZXJSZWR1Y2VyIGZyb20gXCIuL1NwZWFrZXJSZWR1Y2VyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtJbml0aWFsU3BlYWtlckRhdGFDb250ZXh0fSBmcm9tIFwiLi4vcGFnZXMvc3BlYWtlcnNcIjtcclxuXHJcblxyXG5jb25zdCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBpbml0aWFsU3BlYWtlckRhdGEgPSB1c2VDb250ZXh0KEluaXRpYWxTcGVha2VyRGF0YUNvbnRleHQpO1xyXG4gICAgLy8gY29uc3QgW3tpc0xvYWRpbmcsIHNwZWFrZXJMaXN0fSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwge2lzTG9hZGluZzogZmFsc2UsIHNwZWFrZXJMaXN0OiBpbml0aWFsU3BlYWtlckRhdGF9KTtcclxuXHJcbiAgICBjb25zdCBbe2lzTG9hZGluZywgc3BlYWtlckxpc3R9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJSZWR1Y2VyLCB7aXNMb2FkaW5nOiB0cnVlLCBzcGVha2VyTGlzdDogW119KTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVTcGVha2VyRmF2b3JpdGUgPSAoc3BlYWtlclJlYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGF4aW9zLnB1dChgL2FwaS9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwgey4uLnNwZWFrZXJSZWMsIGZhdm9yaXRlOiAhc3BlYWtlclJlYy5mYXZvcml0ZX0pO1xyXG4gICAgICAgICAgICBzcGVha2VyUmVjLmZhdm9yaXRlID09PSB0cnVlID9cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInVuZmF2b3JpdGVcIiwgaWQ6IHNwZWFrZXJSZWMuaWR9KSA6IFxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZmF2b3JpdGVcIiwgaWQ6IHNwZWFrZXJSZWMuaWR9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZURhdGEoKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIDEwMCkpXHJcbiAgICAgICAgLy8gLnRoZW4oKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcInNldFNwZWFrZXJMaXN0XCIsIGRhdGE6IHNwZWFrZXJEYXRhfSkgKTtcclxuICAgICAgICBjb25zdCBmZXRjaGVkRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvc3BlYWtlcnNcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzZXRTcGVha2VyTGlzdFwiLCBkYXRhOiByZXN1bHQuZGF0YX0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmV0Y2hlZERhdGEoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNvbnNvbGUubG9nKFwiQ2xlYW51cCEhIVwiKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4ge2lzTG9hZGluZywgc3BlYWtlckxpc3QsIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZX07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTcGVha2VyRGF0YU1hbmFnZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==