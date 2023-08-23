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




const InitialSpeakerDataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
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
      lineNumber: 29,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (speakers); // import path from "path";
// import fs from "fs";
// export const InitialSpeakerDataContext = React.createContext();
// Integration of server-side generated codes with useContext on the client
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

/*export async function getServerSideProps() { // Special function from Next.js to pass returned data to react component
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

    return {props: {initialSpeakerData}};
}


const speakers = ({initialSpeakerData}) => {
    return <InitialSpeakerDataContext.Provider value={initialSpeakerData}>
        <App pageName="Speakers" />
    </InitialSpeakerDataContext.Provider>;
};*/

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

 //import useSpeakerDataManager from "./useSpeakerDataManager";

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
  } = speakerRec; //const {favoriteClickCount, incrementFavoriteClickCount} = useSpeakerDataManager();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "card-img-top",
      primaryImg: `/static/speakers/bw/speaker-${id}.jpg`,
      secondaryImg: `/static/speakers/speaker-${id}.jpg`,
      alt: `${firstName} ${lastName}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: favorite ? "heartredbutton" : "heartdarkbutton",
          onClick: e => {
            onHeartFavoriteHandler(e, speakerRec); //incrementFavoriteClickCount();
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
    // case "incrementFavoriteClickCount": {
    //     return {...state, favoriteClickCount: state.favoriteClickCount + 1};
    // }

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




 // import speakerData from "./SpeakerData";

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
    // new Promise((resolve) => setTimeout(() => resolve(), 100))
    // .then(() => dispatch({ type: "setSpeakerList", data: speakerData}) );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3BhZ2VzL3NwZWFrZXJzLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvSG9tZS5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwLy4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU2lnbk1lVXAuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy9TcGVha2Vycy5qcyIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3NyYy91c2VTcGVha2VyRGF0YU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vY29uZmVyZW5jZS1hcHAvaWdub3JlZHxDOlxcVXNlcnNcXFRvbnlcXERlc2t0b3BcXE1FUk4tU1RBQ0tcXGNvbmZlcmVuY2UtYXBwXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dCIsIlJlYWN0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvbWlzaWZ5IiwicmVxdWlyZSIsInJlYWRGaWxlIiwiZnMiLCJqc29uRmlsZSIsInBhdGgiLCJpbml0aWFsU3BlYWtlckRhdGEiLCJyZWFkRmlsZURhdGEiLCJKU09OIiwicGFyc2UiLCJzcGVha2VycyIsImUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJDb25maWdDb250ZXh0IiwiY29uZmlnVmFsdWVzIiwic2hvd1NpZ25NZVVwIiwic2hvd1NwZWFrZXJTcGVha2luZ1NhdHVydGRheXMiLCJQYWdlVG9TaG93IiwicGFnZU5hbWUiLCJBcHAiLCJIZWFkZXIiLCJzaWdudXBDYWxsYmFjayIsImVtYWlsIiwiaW5kZXgiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImltYWdlUmVmIiwidXNlUmVmIiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxIYW5kbGVyIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNZW51IiwiU2lnbk1lVXAiLCJzZXRFbWFpbCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJpbmNsdWRlcyIsImFsZXJ0IiwiU3BlYWtlckRldGFpbCIsInNwZWFrZXJSZWMiLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImJpbyIsImZhdm9yaXRlIiwic3BlYWtlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiZmF2b3JpdGVWYWx1ZSIsInNwZWFrZXJMaXN0IiwibWFwIiwiaXRlbSIsInR5cGUiLCJkYXRhIiwiU3BlYWtlcnMiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJoYW5kbGVDaGFuZ2VTYXR1cmRheSIsImhhbmRsZUNoYW5nZVN1bmRheSIsIm5ld1NwZWFrZXJMaXN0IiwidXNlTWVtbyIsImZpbHRlciIsInNhdCIsInN1biIsInNvcnQiLCJhIiwiYiIsInNwZWFrZXJMaXN0RmlsdGVyZWQiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ1cGRhdGVEYXRhIiwiYXhpb3MiLCJmZXRjaGVkRGF0YSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLE1BQU1BLHlCQUF5QixnQkFBR0MsMERBQUEsRUFBbEM7QUFHQSxlQUFlQyxrQkFBZixHQUFvQztBQUFFO0FBQ3pD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WTtBQUM1QixVQUFJQyxNQUFNLEdBQUcsTUFBTUYsZ0RBQUEsQ0FBVSxlQUFWLENBQW5CO0FBQ0FILGNBQVEsQ0FBQztBQUFFdkIsWUFBSSxFQUFFLGdCQUFSO0FBQTBCQyxZQUFJLEVBQUUyQixNQUFNLENBQUMzQjtBQUF2QyxPQUFELENBQVI7QUFDSCxLQUhEOztBQUlBMEIsZUFBVztBQUVYLFdBQU8sTUFBTXhGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FBYjtBQUNILEdBVlEsRUFVTixFQVZNLENBQVQ7QUFZQSxTQUFPO0FBQUNxQixhQUFEO0FBQVlvQyxlQUFaO0FBQXlCVTtBQUF6QixHQUFQO0FBQ0gsQ0EzQkQ7O0FBNkJBLCtEQUFlQyxxQkFBZixFOzs7Ozs7Ozs7OztBQ3BDQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvc3BlYWtlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4uL3NyYy9BcHBcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJbml0aWFsU3BlYWtlckRhdGFDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7IC8vIFNwZWNpYWwgZnVuY3Rpb24gZnJvbSBOZXh0LmpzIHRvIHBhc3MgcmV0dXJuZWQgZGF0YSB0byByZWFjdCBjb21wb25lbnRcclxuICAgIGNvbnN0IHtwcm9taXNpZnl9ID0gcmVxdWlyZShcInV0aWxcIik7XHJcbiAgICBjb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XHJcbiAgICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZSgnLi8nLCAnZGIuanNvbicpO1xyXG4gICAgbGV0IGluaXRpYWxTcGVha2VyRGF0YTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XHJcbiAgICAgICAgaW5pdGlhbFNwZWFrZXJEYXRhID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FwaS9zcGVha2VycyBlcnJvciBtZXNzYWdlOiAnLCBlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3Byb3BzOiB7IGluaXRpYWxTcGVha2VyRGF0YSB9fTtcclxufVxyXG5cclxuXHJcbmNvbnN0IHNwZWFrZXJzID0gKHtpbml0aWFsU3BlYWtlckRhdGF9KSA9PiB7XHJcbiAgICByZXR1cm4gPEluaXRpYWxTcGVha2VyRGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2luaXRpYWxTcGVha2VyRGF0YX0+XHJcbiAgICAgICAgPEFwcCBwYWdlTmFtZT1cIlNwZWFrZXJzXCIgLz5cclxuICAgIDwvSW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3BlYWtlcnM7XHJcblxyXG4vLyBpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG4vLyBpbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IEluaXRpYWxTcGVha2VyRGF0YUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG4vLyBJbnRlZ3JhdGlvbiBvZiBzZXJ2ZXItc2lkZSBnZW5lcmF0ZWQgY29kZXMgd2l0aCB1c2VDb250ZXh0IG9uIHRoZSBjbGllbnRcclxuLy8gU29sdXRpb24gdG8gZ2V0U2VydmVyU2lkZVByb3BzOiBXaGVuIHRoZSBjb250ZW50IGNoYW5nZXMsIGFueSBwYWdlIHJlcXVlc3QgY2F1c2VzIHRoZSBzZXJ2ZXIgdG8gZ2VuZXJhdGUgbmV3XHJcbi8vIGNvZGVzLCB3aGlsZSB0aGF0IGlzIGdvaW5nIG9uLCBvdGhlciBwYWdlIHJlcXVlc3RzIHdpdGhpbiB0aGlzIHBlcmlvZCBnZXQgb2xkIGNvbnRlbnQgd2hpbGUgc3Vic2VxdWVzdCBvbmVzIGdldFxyXG4vLyB1cGRhdGVkIGNvbnRlbnQuIEl0IHNjYWxlcyB0byBpbmZpbml0eS4gUnVuIGJ1aWxkIGNvbW1hbmQgJ25wbSBydW4gYnVpbGQnIHRvIGJ1aWxkIHRoZSBhcnRpZmFjdCBmb3IgZGVwbG95bWVudC4gXHJcbi8qKmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHsgLy8gU3BlY2lhbCBmdW5jdGlvbiBmcm9tIE5leHQuanMgdG8gcGFzcyByZXR1cm5lZCBkYXRhIHRvIHJlYWN0IGNvbXBvbmVudFxyXG4gICAgY29uc3Qge3Byb21pc2lmeX0gPSByZXF1aXJlKFwidXRpbFwiKTtcclxuICAgIGNvbnN0IHJlYWRGaWxlID0gcHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcclxuICAgIGNvbnN0IGpzb25GaWxlID0gcGF0aC5yZXNvbHZlKCcuLycsICdkYi5qc29uJyk7XHJcbiAgICBsZXQgaW5pdGlhbFNwZWFrZXJEYXRhO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcclxuICAgICAgICBpbml0aWFsU3BlYWtlckRhdGEgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXBpL3NwZWFrZXJzIGVycm9yIG1lc3NhZ2U6ICcsIGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7cmV2YWxpZGF0ZVZhbHVlOiAxLCBwcm9wczoge2luaXRpYWxTcGVha2VyRGF0YX19O1xyXG59Ki9cclxuXHJcbi8vIEludGVncmF0aW9uIG9mIHNlcnZlci1zaWRlIGdlbmVyYXRlZCBjb2RlcyB3aXRoIHVzZUNvbnRleHQgb24gdGhlIGNsaWVudFxyXG4vLyBEb3duc2lkZTogT3ZlcmxvYWRpbmcgdGhlIHNlcnZlciB3aXRoIHBhZ2UgcmVxdWVzdCBmb3IgYSBwYXJ0aWN1bGFyIHBhZ2VcclxuLy8gYXMgaXQgaGFzIHRvIGRvd25sb2FkIGFsbCB0aGUgY29tcG9uZW50cy4gSXQncyBvayBpZiBjb250ZW50IGRvZXNuJ3QgY2hhbmdlIHJlZ3VsYXJseSBhbmQgd2l0aCByZXF1ZXN0cy5cclxuLypleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkgeyAvLyBTcGVjaWFsIGZ1bmN0aW9uIGZyb20gTmV4dC5qcyB0byBwYXNzIHJldHVybmVkIGRhdGEgdG8gcmVhY3QgY29tcG9uZW50XHJcbiAgICBjb25zdCB7cHJvbWlzaWZ5fSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xyXG4gICAgY29uc3QgcmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xyXG4gICAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoJy4vJywgJ2RiLmpzb24nKTtcclxuICAgIGxldCBpbml0aWFsU3BlYWtlckRhdGE7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgICAgIGluaXRpYWxTcGVha2VyRGF0YSA9IEpTT04ucGFyc2UocmVhZEZpbGVEYXRhKS5zcGVha2VycztcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhcGkvc3BlYWtlcnMgZXJyb3IgbWVzc2FnZTogJywgZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtwcm9wczoge2luaXRpYWxTcGVha2VyRGF0YX19O1xyXG59XHJcblxyXG5cclxuY29uc3Qgc3BlYWtlcnMgPSAoe2luaXRpYWxTcGVha2VyRGF0YX0pID0+IHtcclxuICAgIHJldHVybiA8SW5pdGlhbFNwZWFrZXJEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17aW5pdGlhbFNwZWFrZXJEYXRhfT5cclxuICAgICAgICA8QXBwIHBhZ2VOYW1lPVwiU3BlYWtlcnNcIiAvPlxyXG4gICAgPC9Jbml0aWFsU3BlYWtlckRhdGFDb250ZXh0LlByb3ZpZGVyPjtcclxufTsqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG5pbXBvcnQgU3BlYWtlcnMgZnJvbSBcIi4vU3BlYWtlcnNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlnQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGNvbmZpZ1ZhbHVlcyA9IHtcclxuICAgIHNob3dTaWduTWVVcDogdHJ1ZSxcclxuICAgIHNob3dTcGVha2VyU3BlYWtpbmdTYXR1cnRkYXlzOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgUGFnZVRvU2hvdyA9IChwYWdlTmFtZSkgPT4ge1xyXG4gICAgaWYocGFnZU5hbWUgPT09IFwiSG9tZVwiKSByZXR1cm4gPEhvbWU+PC9Ib21lPjtcclxuICAgIGlmKHBhZ2VOYW1lID09PSBcIlNwZWFrZXJzXCIpIHJldHVybiA8U3BlYWtlcnM+PC9TcGVha2Vycz47XHJcbiAgICByZXR1cm4gPGRpdj5Ob3QgRm91bmQuPC9kaXY+O1xyXG59O1xyXG5cclxuY29uc3QgQXBwID0gKHtwYWdlTmFtZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbmZpZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbmZpZ1ZhbHVlc30+XHJcbiAgICAgICAgICAgIDxkaXY+eyBQYWdlVG9TaG93KHBhZ2VOYW1lKSB9PC9kaXY+XHJcbiAgICAgICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2lnbk1lVXAgZnJvbSBcIi4vU2lnbk1lVXBcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2lnbnVwQ2FsbGJhY2sgPSAoZW1haWwpID0+IGNvbnNvbGUubG9nKGBTaWduIHVwIGNhbGxlZCB3aXRoIGVtYWlsICR7ZW1haWx9YCk7IFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBqdW1ib3Ryb25oZWlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPk9jdG9iZXIgMTktMjAgMjAxOTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+IFNhbiBKb3NlLCBDYWxpZm9ybmlhLjwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IHRleHQtbGctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvU1ZDQ2xvZ28ucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TaWxpY29uIFZhbGxleSBDb2RlIENhbXA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMiB0ZXh0LWxnLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWduTWVVcCBzaWdudXBDYWxsYmFjaz17c2lnbnVwQ2FsbGJhY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL01lbnVcIjtcclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbWFyZ2ludG9wYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Ib21lPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1hcmdpbnRvcGJvdHRvbTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2RlIGNhbXAgaXMgYSBjb21tdW5pdHkgZXZlbnQgd2hlcmUgZGV2ZWxvcGVycyBsZWFybiBmcm9tZmVsbG93IGRldmVsb3BlcnMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgYWxzbyBoYXZlIGRldmVsb3BlciByZWxhdGVkIHRvcGljc3RoYXQgaW5jbHVkZXNvZnR3YXJlIGJyYW5kaW5nLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsIGlzc3VlcyBhcm91bmQgc29mdHdhcmUgYXMgd2VsbCBhcyBvdGhlciB0b3BpY3MgZGV2ZWxvcGVycyBhcmUgaW50ZXJlc3RlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIGhlYXJpbmcgYWJvdXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBpbmRleDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7cHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZyBzcmM9ey8vIHRyYW5zcGFyZW50IGdpZiByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUlDUkFcIiA6XHJcbiAgICAgICAgICAgICAgICBpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gYmctZGFyayBuYXZiYXItZGFya1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NwZWFrZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNwZWFrZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi9BcHBcIjtcclxuXHJcblxyXG5jb25zdCBTaWduTWVVcCA9ICh7c2lnbnVwQ2FsbGJhY2t9KSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XHJcbiAgICBcclxuICAgIHJldHVybiBjb250ZXh0LnNob3dTaWduTWVVcCA9PT0gZmFsc2UgPyBudWxsIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbWFpbC5pbmNsdWRlcyhcIkBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ251cENhbGxiYWNrKGVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2lnbiB1cCBjb25maXJtIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPkdldCBVcGRhdGVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IFNpZ25NZVVwOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSBcIi4vSW1hZ2VUb2dnbGVPblNjcm9sbFwiO1xyXG4vL2ltcG9ydCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgZnJvbSBcIi4vdXNlU3BlYWtlckRhdGFNYW5hZ2VyXCI7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBTcGVha2VyRGV0YWlsID0gUmVhY3QubWVtbyhcclxuICAgICh7c3BlYWtlclJlYywgb25IZWFydEZhdm9yaXRlSGFuZGxlcn0pID0+IHtcclxuICAgICAgICBjb25zdCB7aWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGV9ID0gc3BlYWtlclJlYztcclxuXHJcbiAgICAgICAgLy9jb25zdCB7ZmF2b3JpdGVDbGlja0NvdW50LCBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnR9ID0gdXNlU3BlYWtlckRhdGFNYW5hZ2VyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtNCBjYXJkbWluXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gfSAvPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGZhdm9yaXRlID8gXCJoZWFydHJlZGJ1dHRvblwiIDogXCJoZWFydGRhcmtidXR0b25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyKGUsIHNwZWFrZXJSZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2ZpcnN0TmFtZX0ge2xhc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aDU+Q2xpY2sgQ291bnQ6IHtmYXZvcml0ZUNsaWNrQ291bnR9PC9oNT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyRGV0YWlsOyIsIlxyXG5jb25zdCBzcGVha2VyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVGYXZvcml0ZSA9IChmYXZvcml0ZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNwZWFrZXJMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZihpdGVtLmlkID09PSBhY3Rpb24uaWQpIHJldHVybiB7Li4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWV9O1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJzZXRTcGVha2VyTGlzdFwiOiB7Ly8gU3ByZWFkcyB0aGUgc3RhdGUgYW5kIHJlcGxhY2VzIG9sZCBkYXRhIHdpdGggbmV3IHN0YXRlLCBpLmUsIHNwZWFrZXJMaXN0IGFuZCBpc0xvYWRpbmdcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IGFjdGlvbi5kYXRhLCBpc0xvYWRpbmc6IGZhbHNlfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcImZhdm9yaXRlXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IHVwZGF0ZUZhdm9yaXRlKHRydWUpfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInVuZmF2b3JpdGVcIjoge1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcGVha2VyTGlzdDogdXBkYXRlRmF2b3JpdGUoZmFsc2UpfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2FzZSBcImluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudFwiOiB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7Li4uc3RhdGUsIGZhdm9yaXRlQ2xpY2tDb3VudDogc3RhdGUuZmF2b3JpdGVDbGlja0NvdW50ICsgMX07XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJSZWR1Y2VyOyIsImltcG9ydCBSZWFjdCwgeyBcclxuICAgIHVzZVN0YXRlLFxyXG4gICAgdXNlQ29udGV4dCxcclxuICAgIHVzZUNhbGxiYWNrLFxyXG4gICAgdXNlTWVtb1xyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gXCIuL1NwZWFrZXJEZXRhaWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gXCIuL3VzZVNwZWFrZXJEYXRhTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3Qge2lzTG9hZGluZywgc3BlYWtlckxpc3QsIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZX0gPSB1c2VTcGVha2VyRGF0YU1hbmFnZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTYXR1cmRheSA9ICgpID0+IHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4gc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcclxuXHJcbiAgICBjb25zdCBuZXdTcGVha2VyTGlzdCA9IHVzZU1lbW8oLy8gVXNlIHVzZU1lbW8gdG8gY2FjaGUgdmFsdWUgZnJvbSBjb21wbGV4IGNvbXB1dGF0aW9uIGZvciBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb25cclxuICAgICAgICAoKSA9PiBzcGVha2VyTGlzdFxyXG4gICAgICAgIC5maWx0ZXIoKHtzYXQsIHN1bn0pID0+IChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bikpXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIGlmKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pLCBbc3BlYWtpbmdTYXR1cmRheSwgc3BlYWtpbmdTdW5kYXksIHNwZWFrZXJMaXN0XVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nID8gW10gOiBuZXdTcGVha2VyTGlzdDtcclxuXHJcbiAgICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IHVzZUNhbGxiYWNrKChlLCBzcGVha2VyUmVjKSA9PiB7IC8vIFVzZSB1c2VDYWxsYmFjayB0b2dldGhlciB3aXRoIFJlYWN0Lm1lbW8gdG8gY2FjaGUgZnVuYywgc2VlIFNwZWFrZXJEZXRhaWxcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TGFvZGluZy4uLi48L2Rpdj47XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXIgbWFyZ2ludG9wYm90dG9tNSBjaGVja2JveC1iaWdnZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2hvd1NwZWFrZXJTcGVha2luZ1NhdHVydGRheXMgPT09IGZhbHNlID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXJMaXN0RmlsdGVyZWQubWFwKChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyUmVjPXtzcGVha2VyUmVjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3BlYWtlclJlZHVjZXIgZnJvbSBcIi4vU3BlYWtlclJlZHVjZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge0luaXRpYWxTcGVha2VyRGF0YUNvbnRleHR9IGZyb20gXCIuLi9wYWdlcy9zcGVha2Vyc1wiO1xyXG4vLyBpbXBvcnQgc3BlYWtlckRhdGEgZnJvbSBcIi4vU3BlYWtlckRhdGFcIjtcclxuXHJcblxyXG5jb25zdCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3BlYWtlckRhdGEgPSB1c2VDb250ZXh0KEluaXRpYWxTcGVha2VyRGF0YUNvbnRleHQpO1xyXG4gICAgY29uc3QgW3tpc0xvYWRpbmcsIHNwZWFrZXJMaXN0fSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwge2lzTG9hZGluZzogZmFsc2UsIHNwZWFrZXJMaXN0OiBpbml0aWFsU3BlYWtlckRhdGF9KTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVTcGVha2VyRmF2b3JpdGUgPSAoc3BlYWtlclJlYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGF4aW9zLnB1dChgL2FwaS9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwgey4uLnNwZWFrZXJSZWMsIGZhdm9yaXRlOiAhc3BlYWtlclJlYy5mYXZvcml0ZX0pO1xyXG4gICAgICAgICAgICBzcGVha2VyUmVjLmZhdm9yaXRlID09PSB0cnVlID9cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInVuZmF2b3JpdGVcIiwgaWQ6IHNwZWFrZXJSZWMuaWR9KSA6IFxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZmF2b3JpdGVcIiwgaWQ6IHNwZWFrZXJSZWMuaWR9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZURhdGEoKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIDEwMCkpXHJcbiAgICAgICAgLy8gLnRoZW4oKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcInNldFNwZWFrZXJMaXN0XCIsIGRhdGE6IHNwZWFrZXJEYXRhfSkgKTtcclxuICAgICAgICBjb25zdCBmZXRjaGVkRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvc3BlYWtlcnNcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzZXRTcGVha2VyTGlzdFwiLCBkYXRhOiByZXN1bHQuZGF0YX0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmV0Y2hlZERhdGEoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNvbnNvbGUubG9nKFwiQ2xlYW51cCEhIVwiKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4ge2lzTG9hZGluZywgc3BlYWtlckxpc3QsIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZX07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTcGVha2VyRGF0YU1hbmFnZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==