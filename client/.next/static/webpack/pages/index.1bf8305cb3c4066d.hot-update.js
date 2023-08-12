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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonIcon */ \"./components/ButtonIcon.tsx\");\n/* harmony import */ var _ButtonBoth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonBoth */ \"./components/ButtonBoth.tsx\");\n/* harmony import */ var _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/IconSidebar */ \"./icons/IconSidebar.tsx\");\n/* harmony import */ var _icons_IconProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/icons/IconProfile */ \"./icons/IconProfile.tsx\");\n\n\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { sidebar, toggleSidebar } = param;\n    const sidebarVariants = {\n        hidden: {\n            width: 0,\n            opacity: 0\n        },\n        visible: {\n            width: \"20%\",\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        id: \"sidebar\",\n        className: \"relative h-full p-4 bg-light-green-400 flex flex-col justify-start\",\n        initial: false,\n        animate: sidebar ? \"visible\" : \"hidden\",\n        variants: sidebarVariants,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"top-buttons\",\n                className: \"w-full flex flex-row justify-start gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonBoth__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        icon: _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        text: \"New chat\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        onClick: toggleSidebar\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"profile-btn\",\n                className: \"absolute bottom-4 w-full pr-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonBoth__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    icon: _icons_IconProfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    text: \"adam.warzynski\"\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFDRDtBQUNBO0FBRVE7QUFDQTtBQU83QyxNQUFNTSxVQUFrQztRQUFDLEVBQUVDLE9BQU8sRUFBRUMsYUFBYSxFQUFFO0lBRS9ELE1BQU1DLGtCQUFrQjtRQUNwQkMsUUFBUTtZQUNOQyxPQUFPO1lBQ1BDLFNBQVM7UUFDWDtRQUNBQyxTQUFTO1lBQ1BGLE9BQU87WUFDUEMsU0FBUztRQUNYO0lBQ0o7SUFHQSxxQkFDSSw4REFBQ1gsaURBQU1BLENBQUNhLEdBQUc7UUFDUEMsSUFBRztRQUNIQyxXQUFVO1FBQ1ZDLFNBQVM7UUFDVEMsU0FBU1gsVUFBVSxZQUFZO1FBQy9CWSxVQUFVVjs7MEJBRVYsOERBQUNLO2dCQUFJQyxJQUFHO2dCQUFjQyxXQUFVOztrQ0FDNUIsOERBQUNiLG1EQUFVQTt3QkFBQ2lCLE1BQU1oQiwwREFBV0E7d0JBQUVpQixNQUFLOzs7Ozs7a0NBQ3BDLDhEQUFDbkIsbURBQVVBO3dCQUFDa0IsTUFBTWhCLDBEQUFXQTt3QkFBRWtCLFNBQVNkOzs7Ozs7Ozs7Ozs7MEJBRzVDLDhEQUFDTTtnQkFBSUMsSUFBRztnQkFBY0MsV0FBVTswQkFDNUIsNEVBQUNiLG1EQUFVQTtvQkFBQ2lCLE1BQU1mLDBEQUFXQTtvQkFBRWdCLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBEO0tBaENNZjtBQWtDTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGViYXIudHN4PzdhODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBCdXR0b25JY29uIGZyb20gJy4vQnV0dG9uSWNvbidcbmltcG9ydCBCdXR0b25Cb3RoIGZyb20gJy4vQnV0dG9uQm90aCdcblxuaW1wb3J0IEljb25TaWRlYmFyIGZyb20gJ0AvaWNvbnMvSWNvblNpZGViYXInXG5pbXBvcnQgSWNvblByb2ZpbGUgZnJvbSAnQC9pY29ucy9JY29uUHJvZmlsZSdcblxuaW50ZXJmYWNlIFNpZGViYXJQcm9wc3tcbiAgICBzaWRlYmFyOiBib29sZWFuXG4gICAgdG9nZ2xlU2lkZWJhcjogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgU2lkZWJhcjogUmVhY3QuRkM8U2lkZWJhclByb3BzPiA9ICh7IHNpZGViYXIsIHRvZ2dsZVNpZGViYXIgfSkgPT4ge1xuXG4gICAgY29uc3Qgc2lkZWJhclZhcmlhbnRzID0ge1xuICAgICAgICBoaWRkZW46IHtcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0sXG4gICAgICAgIHZpc2libGU6IHtcbiAgICAgICAgICB3aWR0aDogXCIyMCVcIixcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgaWQ9XCJzaWRlYmFyXCIgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGwgcC00IGJnLWxpZ2h0LWdyZWVuLTQwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnRcIlxuICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgICAgICBhbmltYXRlPXtzaWRlYmFyID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9XG4gICAgICAgICAgICB2YXJpYW50cz17c2lkZWJhclZhcmlhbnRzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidG9wLWJ1dHRvbnNcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbkJvdGggaWNvbj17SWNvblNpZGViYXJ9IHRleHQ9XCJOZXcgY2hhdFwiLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uSWNvbiBpY29uPXtJY29uU2lkZWJhcn0gb25DbGljaz17dG9nZ2xlU2lkZWJhcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvZmlsZS1idG5cIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCB3LWZ1bGwgcHItOFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25Cb3RoIGljb249e0ljb25Qcm9maWxlfSB0ZXh0PVwiYWRhbS53YXJ6eW5za2lcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiQnV0dG9uSWNvbiIsIkJ1dHRvbkJvdGgiLCJJY29uU2lkZWJhciIsIkljb25Qcm9maWxlIiwiU2lkZWJhciIsInNpZGViYXIiLCJ0b2dnbGVTaWRlYmFyIiwic2lkZWJhclZhcmlhbnRzIiwiaGlkZGVuIiwid2lkdGgiLCJvcGFjaXR5IiwidmlzaWJsZSIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ2YXJpYW50cyIsImljb24iLCJ0ZXh0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidebar.tsx\n"));

/***/ })

});