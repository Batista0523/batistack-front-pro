"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contacts",{

/***/ "./src/helpers/apiCall.js":
/*!********************************!*\
  !*** ./src/helpers/apiCall.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addItem\": function() { return /* binding */ addItem; },\n/* harmony export */   \"deleteItem\": function() { return /* binding */ deleteItem; },\n/* harmony export */   \"getAllItems\": function() { return /* binding */ getAllItems; },\n/* harmony export */   \"getItem\": function() { return /* binding */ getItem; },\n/* harmony export */   \"updateItem\": function() { return /* binding */ updateItem; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst URL = \"https://my-prortfolio-backend.onrender.com\";\nconst handleResponse = (response)=>{\n    const data = response.data;\n    if (data) {\n        return data;\n    } else {\n        console.error(\"Unexpected response format:\", response.data);\n        throw new Error(\"Unexpected response format \");\n    }\n};\nconst handleError = (error)=>{\n    console.error(error);\n    throw error;\n};\nconst getAllItems = (endpoint)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(URL, \"/\").concat(endpoint)).then(handleResponse).catch(handleError);\n};\nconst getItem = (endpoint, id)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(URL, \"/\").concat(endpoint, \"/\").concat(id)).then(handleResponse).catch(handleError);\n};\nconst addItem = (endpoint, data)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(URL, \"/\").concat(endpoint), data, {\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    }).then(handleResponse).catch(handleError);\n};\nconst updateItem = (endpoint, id, data)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"\".concat(URL, \"/\").concat(endpoint, \"/\").concat(id), data, {\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    }).then(handleResponse).catch(handleError);\n};\nconst deleteItem = (endpoint, id)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](\"\".concat(URL, \"/\").concat(endpoint, \"/\").concat(id)).then(handleResponse).catch(handleError);\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9hcGlDYWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxNQUFNQyw0Q0FBb0M7QUFFaEQsTUFBTUcsaUJBQWlCLENBQUNDLFdBQWE7SUFDbkMsTUFBTUMsT0FBT0QsU0FBU0MsSUFBSTtJQUMxQixJQUFJQSxNQUFNO1FBQ1IsT0FBT0E7SUFDVCxPQUFPO1FBQ0xDLFFBQVFDLEtBQUssQ0FBQywrQkFBK0JILFNBQVNDLElBQUk7UUFDMUQsTUFBTSxJQUFJRyxNQUFNLCtCQUErQjtJQUNqRCxDQUFDO0FBQ0g7QUFFQSxNQUFNQyxjQUFjLENBQUNGLFFBQVU7SUFDN0JELFFBQVFDLEtBQUssQ0FBQ0E7SUFDZCxNQUFNQSxNQUFNO0FBQ2Q7QUFFQSxNQUFNRyxjQUFjLENBQUNDLFdBQWE7SUFDaEMsT0FBT2IsaURBQ0QsQ0FBQyxHQUFVYSxPQUFQWixLQUFJLEtBQVksT0FBVFksV0FDZEUsSUFBSSxDQUFDVixnQkFDTFcsS0FBSyxDQUFDTDtBQUNYO0FBRUEsTUFBTU0sVUFBVSxDQUFDSixVQUFVSyxLQUFPO0lBQ2hDLE9BQU9sQixpREFDRCxDQUFDLEdBQVVhLE9BQVBaLEtBQUksS0FBZWlCLE9BQVpMLFVBQVMsS0FBTSxPQUFISyxLQUMxQkgsSUFBSSxDQUFDVixnQkFDTFcsS0FBSyxDQUFDTDtBQUNYO0FBRUEsTUFBTVEsVUFBVSxDQUFDTixVQUFVTixPQUFTO0lBQ2xDLE9BQU9QLGtEQUNBLENBQUMsR0FBVWEsT0FBUFosS0FBSSxLQUFZLE9BQVRZLFdBQVlOLE1BQU07UUFDaENjLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7SUFDRixHQUNDTixJQUFJLENBQUNWLGdCQUNMVyxLQUFLLENBQUNMO0FBQ1g7QUFFQSxNQUFNVyxhQUFhLENBQUNULFVBQVVLLElBQUlYLE9BQVM7SUFDekMsT0FBT1AsaURBQ0QsQ0FBQyxHQUFVYSxPQUFQWixLQUFJLEtBQWVpQixPQUFaTCxVQUFTLEtBQU0sT0FBSEssS0FBTVgsTUFBTTtRQUNyQ2MsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtJQUNGLEdBQ0NOLElBQUksQ0FBQ1YsZ0JBQ0xXLEtBQUssQ0FBQ0w7QUFDWDtBQUVBLE1BQU1hLGFBQWEsQ0FBQ1gsVUFBVUssS0FBTztJQUNuQyxPQUFPbEIsdURBQ0UsQ0FBQyxHQUFVYSxPQUFQWixLQUFJLEtBQWVpQixPQUFaTCxVQUFTLEtBQU0sT0FBSEssS0FDN0JILElBQUksQ0FBQ1YsZ0JBQ0xXLEtBQUssQ0FBQ0w7QUFDWDtBQUVpRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVscGVycy9hcGlDYWxsLmpzPzQ1ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBVUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERVBMT1lFRF9VUkw7XG5cbmNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKHJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICBpZiAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIHJlc3BvbnNlIGZvcm1hdDpcIiwgcmVzcG9uc2UuZGF0YSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCByZXNwb25zZSBmb3JtYXQgXCIpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcikgPT4ge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgdGhyb3cgZXJyb3I7XG59O1xuXG5jb25zdCBnZXRBbGxJdGVtcyA9IChlbmRwb2ludCkgPT4ge1xuICByZXR1cm4gYXhpb3NcbiAgICAuZ2V0KGAke1VSTH0vJHtlbmRwb2ludH1gKVxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxuICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG59O1xuXG5jb25zdCBnZXRJdGVtID0gKGVuZHBvaW50LCBpZCkgPT4ge1xuICByZXR1cm4gYXhpb3NcbiAgICAuZ2V0KGAke1VSTH0vJHtlbmRwb2ludH0vJHtpZH1gKVxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxuICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG59O1xuXG5jb25zdCBhZGRJdGVtID0gKGVuZHBvaW50LCBkYXRhKSA9PiB7XG4gIHJldHVybiBheGlvc1xuICAgIC5wb3N0KGAke1VSTH0vJHtlbmRwb2ludH1gLCBkYXRhLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxuICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG59O1xuXG5jb25zdCB1cGRhdGVJdGVtID0gKGVuZHBvaW50LCBpZCwgZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3NcbiAgICAucHV0KGAke1VSTH0vJHtlbmRwb2ludH0vJHtpZH1gLCBkYXRhLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxuICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG59O1xuXG5jb25zdCBkZWxldGVJdGVtID0gKGVuZHBvaW50LCBpZCkgPT4ge1xuICByZXR1cm4gYXhpb3NcbiAgICAuZGVsZXRlKGAke1VSTH0vJHtlbmRwb2ludH0vJHtpZH1gKVxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKSAgXG4gICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbn07XG5cbmV4cG9ydCB7IGdldEFsbEl0ZW1zLCBnZXRJdGVtLCBhZGRJdGVtLCB1cGRhdGVJdGVtLCBkZWxldGVJdGVtIH07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfREVQTE9ZRURfVVJMIiwiaGFuZGxlUmVzcG9uc2UiLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImhhbmRsZUVycm9yIiwiZ2V0QWxsSXRlbXMiLCJlbmRwb2ludCIsImdldCIsInRoZW4iLCJjYXRjaCIsImdldEl0ZW0iLCJpZCIsImFkZEl0ZW0iLCJwb3N0IiwiaGVhZGVycyIsInVwZGF0ZUl0ZW0iLCJwdXQiLCJkZWxldGVJdGVtIiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/apiCall.js\n"));

/***/ })

});