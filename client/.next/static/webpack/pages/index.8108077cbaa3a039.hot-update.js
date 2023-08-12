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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonIcon */ \"./components/ButtonIcon.tsx\");\n/* harmony import */ var _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/icons/IconSidebar */ \"./icons/IconSidebar.tsx\");\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { sidebar } = param;\n    const sidebarVariants = {\n        hidden: {\n            width: 0\n        },\n        visible: {\n            width: \"20%\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        id: \"sidebar\",\n        className: \"bg-blue-200 flex flex-col justify-start\",\n        initial: false,\n        animate: sidebar ? \"visible\" : \"hidden\",\n        variants: sidebarVariants,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"top-buttons\",\n            className: \"bg-blue-500 w-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                icon: _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                lineNumber: 33,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQUNhO0FBQ0Q7QUFFUTtBQU03QyxNQUFNSSxVQUFrQztRQUFDLEVBQUVDLE9BQU8sRUFBRTtJQUVoRCxNQUFNQyxrQkFBa0I7UUFDcEJDLFFBQVE7WUFDTkMsT0FBTztRQUNUO1FBQ0FDLFNBQVM7WUFDUEQsT0FBTztRQUNUO0lBQ0o7SUFJQSxxQkFDSSw4REFBQ1AsaURBQU1BLENBQUNTLEdBQUc7UUFDUEMsSUFBRztRQUNIQyxXQUFVO1FBQ1ZDLFNBQVM7UUFDVEMsU0FBU1QsVUFBVSxZQUFZO1FBQy9CVSxVQUFVVDtrQkFFViw0RUFBQ0k7WUFBSUMsSUFBRztZQUFjQyxXQUFVO3NCQUM1Qiw0RUFBQ1YsbURBQVVBO2dCQUFDYyxNQUFNYiwwREFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0M7S0ExQk1DO0FBNEJOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2lkZWJhci50c3g/N2E4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEJ1dHRvbkljb24gZnJvbSAnLi9CdXR0b25JY29uJ1xuXG5pbXBvcnQgSWNvblNpZGViYXIgZnJvbSAnQC9pY29ucy9JY29uU2lkZWJhcidcblxuaW50ZXJmYWNlIFNpZGViYXJQcm9wc3tcbiAgICBzaWRlYmFyOiBib29sZWFuXG59XG5cbmNvbnN0IFNpZGViYXI6IFJlYWN0LkZDPFNpZGViYXJQcm9wcz4gPSAoeyBzaWRlYmFyIH0pID0+IHtcblxuICAgIGNvbnN0IHNpZGViYXJWYXJpYW50cyA9IHtcbiAgICAgICAgaGlkZGVuOiB7XG4gICAgICAgICAgd2lkdGg6IDBcbiAgICAgICAgfSxcbiAgICAgICAgdmlzaWJsZToge1xuICAgICAgICAgIHdpZHRoOiBcIjIwJVwiXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBpZD1cInNpZGViYXJcIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtMjAwIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydFwiXG4gICAgICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3NpZGViYXIgPyAndmlzaWJsZScgOiAnaGlkZGVuJ31cbiAgICAgICAgICAgIHZhcmlhbnRzPXtzaWRlYmFyVmFyaWFudHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b3AtYnV0dG9uc1wiIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25JY29uIGljb249e0ljb25TaWRlYmFyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkJ1dHRvbkljb24iLCJJY29uU2lkZWJhciIsIlNpZGViYXIiLCJzaWRlYmFyIiwic2lkZWJhclZhcmlhbnRzIiwiaGlkZGVuIiwid2lkdGgiLCJ2aXNpYmxlIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInZhcmlhbnRzIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidebar.tsx\n"));

/***/ })

});