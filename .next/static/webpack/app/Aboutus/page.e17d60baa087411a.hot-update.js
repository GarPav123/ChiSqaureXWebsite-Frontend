"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Aboutus/page",{

/***/ "(app-pages-browser)/./src/app/components/IconBox.tsx":
/*!****************************************!*\
  !*** ./src/app/components/IconBox.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst IconBox = (param)=>{\n    let { imageUrl, text } = param;\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-2px \".concat(isHovered ? \"border-transparent\" : \"border-black\", \" p-4\"),\n        onMouseEnter: ()=>setIsHovered(true),\n        onMouseLeave: ()=>setIsHovered(false),\n        children: isHovered ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: text\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\pteja\\\\OneDrive\\\\Desktop\\\\Attempt\\\\testapp\\\\src\\\\app\\\\components\\\\IconBox.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: imageUrl,\n            alt: \"\",\n            width: 250,\n            height: 250\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\pteja\\\\OneDrive\\\\Desktop\\\\Attempt\\\\testapp\\\\src\\\\app\\\\components\\\\IconBox.tsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pteja\\\\OneDrive\\\\Desktop\\\\Attempt\\\\testapp\\\\src\\\\app\\\\components\\\\IconBox.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(IconBox, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n_c = IconBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconBox);\nvar _c;\n$RefreshReg$(_c, \"IconBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9JY29uQm94LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUNUO0FBTy9CLE1BQU1HLFVBQWtDO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUU7O0lBQ3pELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUzQyxxQkFDRSw4REFBQ087UUFDQ0MsV0FBVyxjQUFnRSxPQUFsREgsWUFBWSx1QkFBdUIsZ0JBQWU7UUFDM0VJLGNBQWMsSUFBTUgsYUFBYTtRQUNqQ0ksY0FBYyxJQUFNSixhQUFhO2tCQUVoQ0QsMEJBQ0MsOERBQUNFO1lBQUlDLFdBQVU7c0JBQWVKOzs7OztzQ0FFOUIsOERBQUNILG1EQUFLQTtZQUFDVSxLQUFLUjtZQUFVUyxLQUFJO1lBQUdDLE9BQU87WUFBS0MsUUFBUTs7Ozs7Ozs7Ozs7QUFJekQ7R0FoQk1aO0tBQUFBO0FBa0JOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9JY29uQm94LnRzeD81MDFlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxudHlwZSBJY29uQm94UHJvcHMgPSB7XHJcbiAgaW1hZ2VVcmw6IFwidGVzdGFwcFxccHVibGljXFxpbWFnZXNcXGRlc2t0b3AucG5nXCI7XHJcbiAgdGV4dDogXCJUaGlzIGlzIG5scCBib3hcIjtcclxufTtcclxuXHJcbmNvbnN0IEljb25Cb3g6IFJlYWN0LkZDPEljb25Cb3hQcm9wcz4gPSAoeyBpbWFnZVVybCwgdGV4dCB9KSA9PiB7XHJcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLTJweCAke2lzSG92ZXJlZCA/ICdib3JkZXItdHJhbnNwYXJlbnQnIDogJ2JvcmRlci1ibGFjayd9IHAtNGB9XHJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XHJcbiAgICA+XHJcbiAgICAgIHtpc0hvdmVyZWQgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPnt0ZXh0fTwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJcIiB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0gLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uQm94O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiSWNvbkJveCIsImltYWdlVXJsIiwidGV4dCIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/IconBox.tsx\n"));

/***/ })

});