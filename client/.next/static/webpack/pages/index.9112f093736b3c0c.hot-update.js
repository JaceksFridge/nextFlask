"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/sidebar.tsx":
/*!********************************!*\
  !*** ./components/sidebar.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconButton */ \"./components/IconButton.tsx\");\n\n\n\n\nconst Sidebar = (param)=>{\n    let { sidebar } = param;\n    const iconSidebar = \"./icons/IconSidebar\";\n    const sidebarVariants = {\n        hidden: {\n            width: 0\n        },\n        visible: {\n            width: \"20%\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        id: \"sidebar\",\n        className: \"grid place-items-center bg-blue-200\",\n        initial: false,\n        animate: sidebar ? \"visible\" : \"hidden\",\n        variants: sidebarVariants,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"new-chat\",\n                children: \"New chat\"\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IconButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                icon: iconSidebar\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFDRDtBQVFyQyxNQUFNRyxVQUFrQztRQUFDLEVBQUVDLE9BQU8sRUFBRTtJQUdoRCxNQUFNQyxjQUFjO0lBRXBCLE1BQU1DLGtCQUFrQjtRQUNwQkMsUUFBUTtZQUNOQyxPQUFPO1FBQ1Q7UUFDQUMsU0FBUztZQUNQRCxPQUFPO1FBQ1Q7SUFDSjtJQUlBLHFCQUNJLDhEQUFDUCxpREFBTUEsQ0FBQ1MsR0FBRztRQUNQQyxJQUFHO1FBQ0hDLFdBQVU7UUFDVkMsU0FBUztRQUNUQyxTQUFTVixVQUFVLFlBQVk7UUFDL0JXLFVBQVVUOzswQkFFViw4REFBQ0k7Z0JBQUlDLElBQUc7MEJBQVc7Ozs7OzswQkFDbkIsOERBQUNULG1EQUFVQTtnQkFBQ2MsTUFBTVg7Ozs7Ozs7Ozs7OztBQUc5QjtLQTVCTUY7QUE4Qk4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLnRzeD83YTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuL0ljb25CdXR0b24nXG5cblxuXG5pbnRlcmZhY2UgU2lkZWJhclByb3Bze1xuICAgIHNpZGViYXI6IGJvb2xlYW5cbn1cblxuY29uc3QgU2lkZWJhcjogUmVhY3QuRkM8U2lkZWJhclByb3BzPiA9ICh7IHNpZGViYXIgfSkgPT4ge1xuXG5cbiAgICBjb25zdCBpY29uU2lkZWJhciA9ICcuL2ljb25zL0ljb25TaWRlYmFyJ1xuXG4gICAgY29uc3Qgc2lkZWJhclZhcmlhbnRzID0ge1xuICAgICAgICBoaWRkZW46IHtcbiAgICAgICAgICB3aWR0aDogMFxuICAgICAgICB9LFxuICAgICAgICB2aXNpYmxlOiB7XG4gICAgICAgICAgd2lkdGg6IFwiMjAlXCJcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgIGlkPVwic2lkZWJhclwiIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgYmctYmx1ZS0yMDBcIlxuICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgICAgICBhbmltYXRlPXtzaWRlYmFyID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9XG4gICAgICAgICAgICB2YXJpYW50cz17c2lkZWJhclZhcmlhbnRzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibmV3LWNoYXRcIj5OZXcgY2hhdDwvZGl2PlxuICAgICAgICAgICAgPEljb25CdXR0b24gaWNvbj17aWNvblNpZGViYXJ9IC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkljb25CdXR0b24iLCJTaWRlYmFyIiwic2lkZWJhciIsImljb25TaWRlYmFyIiwic2lkZWJhclZhcmlhbnRzIiwiaGlkZGVuIiwid2lkdGgiLCJ2aXNpYmxlIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInZhcmlhbnRzIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidebar.tsx\n"));

/***/ })

});