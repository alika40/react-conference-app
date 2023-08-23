(function() {
var exports = {};
exports.id = "pages/api/speakers/[id]";
exports.ids = ["pages/api/speakers/[id]"];
exports.modules = {

/***/ "./pages/api/speakers/[id].js":
/*!************************************!*\
  !*** ./pages/api/speakers/[id].js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
//import speakerData from "../../../src/speakerData";



const {
  promisify
} = __webpack_require__(/*! util */ "util");

const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));
const writeFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile));

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function handler(req, res) {
  //res.status(200).send(JSON.stringify(speakerData, null, 2));
  const method = req === null || req === void 0 ? void 0 : req.method;
  const id = parseInt(req === null || req === void 0 ? void 0 : req.query.id);
  const recordFromBody = req === null || req === void 0 ? void 0 : req.body;

  if (method != "PUT") {
    res.status(501).send(`Method ${method} not implemented!`);
  } else {
    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./', 'db.json');

    try {
      const readFileData = await readFile(jsonFile);
      await delay(100);
      const data = JSON.parse(readFileData);

      if (!data.speakers) {
        res.status(404).send('ERROR: Request failed with status code 404');
      } else {
        const newSpeakerArray = data.speakers.map(rec => rec.id === id ? recordFromBody : rec);
        writeFile(jsonFile, JSON.stringify({
          speakers: newSpeakerArray
        }, null, 2));
        console.log(`PUT: api/speakers/${id} status code: 200`);
      }
    } catch (e) {
      console.log('api/speakers error message: ', e);
    }
  }
}

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/speakers/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC8uL3BhZ2VzL2FwaS9zcGVha2Vycy9baWRdLmpzIiwid2VicGFjazovL2NvbmZlcmVuY2UtYXBwL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9jb25mZXJlbmNlLWFwcC9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6WyJwcm9taXNpZnkiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJmcyIsIndyaXRlRmlsZSIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaWQiLCJwYXJzZUludCIsInF1ZXJ5IiwicmVjb3JkRnJvbUJvZHkiLCJib2R5Iiwic3RhdHVzIiwic2VuZCIsImpzb25GaWxlIiwicGF0aCIsInJlYWRGaWxlRGF0YSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJzcGVha2VycyIsIm5ld1NwZWFrZXJBcnJheSIsIm1hcCIsInJlYyIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTTtBQUFDQTtBQUFELElBQWNDLG1CQUFPLENBQUMsa0JBQUQsQ0FBM0I7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNHLG9EQUFELENBQTFCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSixTQUFTLENBQUNHLHFEQUFELENBQTNCOztBQUNBLE1BQU1FLEtBQUssR0FBSUMsRUFBRCxJQUFRLElBQUlDLE9BQUosQ0FBYUMsT0FBRCxJQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUFuQyxDQUF0Qjs7QUFFZSxlQUFlSSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDNUM7QUFFQSxRQUFNQyxNQUFNLEdBQUdGLEdBQUgsYUFBR0EsR0FBSCx1QkFBR0EsR0FBRyxDQUFFRSxNQUFwQjtBQUNBLFFBQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDSixHQUFELGFBQUNBLEdBQUQsdUJBQUNBLEdBQUcsQ0FBRUssS0FBTCxDQUFXRixFQUFaLENBQW5CO0FBQ0EsUUFBTUcsY0FBYyxHQUFHTixHQUFILGFBQUdBLEdBQUgsdUJBQUdBLEdBQUcsQ0FBRU8sSUFBNUI7O0FBRUEsTUFBR0wsTUFBTSxJQUFJLEtBQWIsRUFBb0I7QUFDaEJELE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXNCLFVBQVNQLE1BQU8sbUJBQXRDO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsVUFBTVEsUUFBUSxHQUFHQyxtREFBQSxDQUFhLElBQWIsRUFBbUIsU0FBbkIsQ0FBakI7O0FBQ0EsUUFBRztBQUNDLFlBQU1DLFlBQVksR0FBRyxNQUFNckIsUUFBUSxDQUFDbUIsUUFBRCxDQUFuQztBQUNBLFlBQU1oQixLQUFLLENBQUMsR0FBRCxDQUFYO0FBQ0EsWUFBTW1CLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVgsQ0FBYjs7QUFDQSxVQUFHLENBQUNDLElBQUksQ0FBQ0csUUFBVCxFQUFtQjtBQUNmZixXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQiw0Q0FBckI7QUFDSCxPQUZELE1BRU87QUFDSCxjQUFNUSxlQUFlLEdBQUdKLElBQUksQ0FBQ0csUUFBTCxDQUFjRSxHQUFkLENBQW1CQyxHQUFELElBQVNBLEdBQUcsQ0FBQ2hCLEVBQUosS0FBV0EsRUFBWCxHQUFnQkcsY0FBaEIsR0FBaUNhLEdBQTVELENBQXhCO0FBQ0ExQixpQkFBUyxDQUFDaUIsUUFBRCxFQUFXSSxJQUFJLENBQUNNLFNBQUwsQ0FBZTtBQUFDSixrQkFBUSxFQUFFQztBQUFYLFNBQWYsRUFBNEMsSUFBNUMsRUFBa0QsQ0FBbEQsQ0FBWCxDQUFUO0FBQ0FJLGVBQU8sQ0FBQ0MsR0FBUixDQUFhLHFCQUFvQm5CLEVBQUcsbUJBQXBDO0FBQ0g7QUFDSixLQVhELENBV0UsT0FBTW9CLENBQU4sRUFBUztBQUNQRixhQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixFQUE0Q0MsQ0FBNUM7QUFDSDtBQUNKO0FBQ0osQzs7Ozs7Ozs7Ozs7QUNwQ0QsZ0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvYXBpL3NwZWFrZXJzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBzcGVha2VyRGF0YSBmcm9tIFwiLi4vLi4vLi4vc3JjL3NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcblxyXG5jb25zdCB7cHJvbWlzaWZ5fSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xyXG5jb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XHJcbmNvbnN0IHdyaXRlRmlsZSA9IHByb21pc2lmeShmcy53cml0ZUZpbGUpO1xyXG5jb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIC8vcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoc3BlYWtlckRhdGEsIG51bGwsIDIpKTtcclxuXHJcbiAgICBjb25zdCBtZXRob2QgPSByZXE/Lm1ldGhvZDtcclxuICAgIGNvbnN0IGlkID0gcGFyc2VJbnQocmVxPy5xdWVyeS5pZCk7XHJcbiAgICBjb25zdCByZWNvcmRGcm9tQm9keSA9IHJlcT8uYm9keTtcclxuXHJcbiAgICBpZihtZXRob2QgIT0gXCJQVVRcIikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAxKS5zZW5kKGBNZXRob2QgJHttZXRob2R9IG5vdCBpbXBsZW1lbnRlZCFgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoJy4vJywgJ2RiLmpzb24nKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcclxuICAgICAgICAgICAgYXdhaXQgZGVsYXkoMTAwKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVhZEZpbGVEYXRhKTtcclxuICAgICAgICAgICAgaWYoIWRhdGEuc3BlYWtlcnMpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKCdFUlJPUjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NwZWFrZXJBcnJheSA9IGRhdGEuc3BlYWtlcnMubWFwKChyZWMpID0+IHJlYy5pZCA9PT0gaWQgPyByZWNvcmRGcm9tQm9keSA6IHJlYyk7XHJcbiAgICAgICAgICAgICAgICB3cml0ZUZpbGUoanNvbkZpbGUsIEpTT04uc3RyaW5naWZ5KHtzcGVha2VyczogbmV3U3BlYWtlckFycmF5fSwgbnVsbCwgMikpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFBVVDogYXBpL3NwZWFrZXJzLyR7aWR9IHN0YXR1cyBjb2RlOiAyMDBgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXBpL3NwZWFrZXJzIGVycm9yIG1lc3NhZ2U6ICcsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9