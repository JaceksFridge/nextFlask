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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonIcon */ \"./components/ButtonIcon.tsx\");\n/* harmony import */ var _ButtonBoth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonBoth */ \"./components/ButtonBoth.tsx\");\n/* harmony import */ var _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/IconSidebar */ \"./icons/IconSidebar.tsx\");\n/* harmony import */ var _icons_IconProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/icons/IconProfile */ \"./icons/IconProfile.tsx\");\n/* harmony import */ var _icons_iconChat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/icons/iconChat */ \"./icons/iconChat.tsx\");\n\n\n\n\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { sidebar, toggleSidebar } = param;\n    const sidebarVariants = {\n        hidden: {\n            width: 0,\n            padding: 0\n        },\n        visible: {\n            width: \"20%\"\n        }\n    };\n    const elementVariants = {\n        hidden: {\n            opacity: 0,\n            scale: 0.4\n        },\n        visible: {\n            opacity: 1,\n            scale: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n        id: \"sidebar\",\n        className: \"relative h-full p-4 bg-light-green-400 flex flex-col justify-start overflow-hidden\",\n        initial: false,\n        animate: sidebar ? \"visible\" : \"hidden\",\n        variants: sidebarVariants,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                id: \"top-buttons\",\n                className: \"w-full flex flex-row justify-start gap-2 overflow-hidden\",\n                variants: elementVariants,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonBoth__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        icon: _icons_IconProfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        text: \"New Chat\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        text: \"Close sidebar\",\n                        onClick: toggleSidebar\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"history\",\n                className: \"multiline-ellipsis\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"my-4 text-xs\",\n                        children: \"Recents\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"history-card\",\n                        className: \"h-28 w-full mb-2 p-4 bg-white rounded-lg overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"history-card-top\",\n                                className: \"mb-2 flex items-center gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_iconChat__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-sm\",\n                                        children: \"How to plant a carrot?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"history-text\",\n                                className: \"text-xs multiline-ellipsis\",\n                                children: \"Here are a few steps on how to plant a carrot in your garden: Chose the right location. Carrots need full sun and well-drained soil ...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"history-bin\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"history-card\",\n                        className: \"h-28 w-full mb-2 p-4 rounded-lg overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"history-card-top\",\n                                className: \"mb-2 flex items-center gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_iconChat__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-sm\",\n                                        children: \"How to plant a carrot?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"history-text\",\n                                className: \"text-xs multiline-ellipsis\",\n                                children: \"Here are a few steps on how to plant a carrot in your garden: Chose the right location. Carrots need full sun and well-drained soil ...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"history-bin\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"history-card\",\n                        className: \"h-28 w-full mb-2 p-4 rounded-lg overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"history-card-top\",\n                                className: \"mb-2 flex items-center gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_iconChat__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-sm\",\n                                        children: \"How to plant a carrot?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"history-text\",\n                                className: \"text-xs multiline-ellipsis\",\n                                children: \"Here are a few steps on how to plant a carrot in your garden: Chose the right location. Carrots need full sun and well-drained soil ...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"history-bin\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                id: \"profile-btn\",\n                className: \"absolute bottom-4 w-full pr-8 overflow-hidden\",\n                variants: elementVariants,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonBoth__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    icon: _icons_IconProfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    text: \"adam.warzynski\"\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNhO0FBQ0Q7QUFDQTtBQUVRO0FBQ0E7QUFDSDtBQUNIO0FBT3ZDLE1BQU1RLFVBQWtDO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUU7SUFFL0QsTUFBTUMsa0JBQWtCO1FBQ3BCQyxRQUFRO1lBQ05DLE9BQU87WUFDUEMsU0FBUztRQUNYO1FBQ0FDLFNBQVM7WUFDUEYsT0FBTztRQUNUO0lBQ0o7SUFFQSxNQUFNRyxrQkFBa0I7UUFDcEJKLFFBQVE7WUFDSkssU0FBUztZQUNUQyxPQUFPO1FBQ1g7UUFDQUgsU0FBUztZQUNMRSxTQUFTO1lBQ1RDLE9BQU87UUFDWDtJQUNKO0lBRUEscUJBQ0ksOERBQUNqQixpREFBTUEsQ0FBQ2tCLEdBQUc7UUFDUEMsSUFBRztRQUNIQyxXQUFVO1FBQ1ZDLFNBQVM7UUFDVEMsU0FBU2QsVUFBVSxZQUFZO1FBQy9CZSxVQUFVYjs7MEJBRVYsOERBQUNWLGlEQUFNQSxDQUFDa0IsR0FBRztnQkFBQ0MsSUFBRztnQkFBY0MsV0FBVTtnQkFBMkRHLFVBQVVSOztrQ0FDeEcsOERBQUNiLG1EQUFVQTt3QkFBQ3NCLE1BQU1uQiwwREFBUUE7d0JBQUVvQixNQUFLOzs7Ozs7a0NBQ2pDLDhEQUFDeEIsbURBQVVBO3dCQUFDdUIsTUFBTXJCLDBEQUFXQTt3QkFBRXNCLE1BQUs7d0JBQWdCQyxTQUFTakI7Ozs7Ozs7Ozs7OzswQkFFakUsOERBQUNTO2dCQUFJQyxJQUFHO2dCQUFVQyxXQUFVOztrQ0FDeEIsOERBQUNPO3dCQUFHUCxXQUFVO2tDQUFlOzs7Ozs7a0NBQzdCLDhEQUFDRjt3QkFBSUMsSUFBRzt3QkFBZUMsV0FBVTs7MENBQzdCLDhEQUFDRjtnQ0FBSUMsSUFBRztnQ0FBbUJDLFdBQVU7O2tEQUNqQyw4REFBQ2QsdURBQVFBOzs7OztrREFDVCw4REFBQ3NCO3dDQUFHUixXQUFVO2tEQUFVOzs7Ozs7Ozs7Ozs7MENBRTVCLDhEQUFDUztnQ0FBRVYsSUFBRztnQ0FBZUMsV0FBVTswQ0FBNkI7Ozs7OzswQ0FJNUQsOERBQUNGO2dDQUFJQyxJQUFHOzs7Ozs7Ozs7Ozs7a0NBRVosOERBQUNEO3dCQUFJQyxJQUFHO3dCQUFlQyxXQUFVOzswQ0FDN0IsOERBQUNGO2dDQUFJQyxJQUFHO2dDQUFtQkMsV0FBVTs7a0RBQ2pDLDhEQUFDZCx1REFBUUE7Ozs7O2tEQUNULDhEQUFDc0I7d0NBQUdSLFdBQVU7a0RBQVU7Ozs7Ozs7Ozs7OzswQ0FFNUIsOERBQUNTO2dDQUFFVixJQUFHO2dDQUFlQyxXQUFVOzBDQUE2Qjs7Ozs7OzBDQUk1RCw4REFBQ0Y7Z0NBQUlDLElBQUc7Ozs7Ozs7Ozs7OztrQ0FFWiw4REFBQ0Q7d0JBQUlDLElBQUc7d0JBQWVDLFdBQVU7OzBDQUM3Qiw4REFBQ0Y7Z0NBQUlDLElBQUc7Z0NBQW1CQyxXQUFVOztrREFDakMsOERBQUNkLHVEQUFRQTs7Ozs7a0RBQ1QsOERBQUNzQjt3Q0FBR1IsV0FBVTtrREFBVTs7Ozs7Ozs7Ozs7OzBDQUU1Qiw4REFBQ1M7Z0NBQUVWLElBQUc7Z0NBQWVDLFdBQVU7MENBQTZCOzs7Ozs7MENBSTVELDhEQUFDRjtnQ0FBSUMsSUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUloQiw4REFBQ25CLGlEQUFNQSxDQUFDa0IsR0FBRztnQkFBQ0MsSUFBRztnQkFBY0MsV0FBVTtnQkFBZ0RHLFVBQVVSOzBCQUM3Riw0RUFBQ2IsbURBQVVBO29CQUFDc0IsTUFBTXBCLDBEQUFXQTtvQkFBRXFCLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBEO0tBN0VNbEI7QUErRU4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLnRzeD83YTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgQnV0dG9uSWNvbiBmcm9tICcuL0J1dHRvbkljb24nXG5pbXBvcnQgQnV0dG9uQm90aCBmcm9tICcuL0J1dHRvbkJvdGgnXG5cbmltcG9ydCBJY29uU2lkZWJhciBmcm9tICdAL2ljb25zL0ljb25TaWRlYmFyJ1xuaW1wb3J0IEljb25Qcm9maWxlIGZyb20gJ0AvaWNvbnMvSWNvblByb2ZpbGUnXG5pbXBvcnQgSWNvblBsdXMgZnJvbSAnQC9pY29ucy9JY29uUHJvZmlsZSdcbmltcG9ydCBJY29uQ2hhdCBmcm9tICdAL2ljb25zL2ljb25DaGF0J1xuXG5pbnRlcmZhY2UgU2lkZWJhclByb3Bze1xuICAgIHNpZGViYXI6IGJvb2xlYW5cbiAgICB0b2dnbGVTaWRlYmFyOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBTaWRlYmFyOiBSZWFjdC5GQzxTaWRlYmFyUHJvcHM+ID0gKHsgc2lkZWJhciwgdG9nZ2xlU2lkZWJhciB9KSA9PiB7XG5cbiAgICBjb25zdCBzaWRlYmFyVmFyaWFudHMgPSB7XG4gICAgICAgIGhpZGRlbjoge1xuICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHZpc2libGU6IHtcbiAgICAgICAgICB3aWR0aDogXCIyMCVcIixcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRWYXJpYW50cyA9IHtcbiAgICAgICAgaGlkZGVuOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgc2NhbGU6IDAuNFxuICAgICAgICB9LFxuICAgICAgICB2aXNpYmxlOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgaWQ9XCJzaWRlYmFyXCIgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGwgcC00IGJnLWxpZ2h0LWdyZWVuLTQwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgICAgICAgYW5pbWF0ZT17c2lkZWJhciA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nfVxuICAgICAgICAgICAgdmFyaWFudHM9e3NpZGViYXJWYXJpYW50c31cbiAgICAgICAgPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgaWQ9XCJ0b3AtYnV0dG9uc1wiIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtcm93IGp1c3RpZnktc3RhcnQgZ2FwLTIgb3ZlcmZsb3ctaGlkZGVuXCIgdmFyaWFudHM9e2VsZW1lbnRWYXJpYW50c30+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbkJvdGggaWNvbj17SWNvblBsdXN9IHRleHQ9XCJOZXcgQ2hhdFwiLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uSWNvbiBpY29uPXtJY29uU2lkZWJhcn0gdGV4dD1cIkNsb3NlIHNpZGViYXJcIiBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfSAvPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImhpc3RvcnlcIiBjbGFzc05hbWU9XCJtdWx0aWxpbmUtZWxsaXBzaXNcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXktNCB0ZXh0LXhzXCI+UmVjZW50czwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImhpc3RvcnktY2FyZFwiIGNsYXNzTmFtZT1cImgtMjggdy1mdWxsIG1iLTIgcC00IGJnLXdoaXRlIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJoaXN0b3J5LWNhcmQtdG9wXCIgY2xhc3NOYW1lPVwibWItMiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25DaGF0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zbVwiPkhvdyB0byBwbGFudCBhIGNhcnJvdD88L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJoaXN0b3J5LXRleHRcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIG11bHRpbGluZS1lbGxpcHNpc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSGVyZSBhcmUgYSBmZXcgc3RlcHMgb24gaG93IHRvIHBsYW50IGEgY2Fycm90IGluIHlvdXIgZ2FyZGVuOiBDaG9zZSB0aGUgcmlnaHQgbG9jYXRpb24uIFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2Fycm90cyBuZWVkIGZ1bGwgc3VuIGFuZCB3ZWxsLWRyYWluZWQgc29pbCAuLi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaGlzdG9yeS1iaW5cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaGlzdG9yeS1jYXJkXCIgY2xhc3NOYW1lPVwiaC0yOCB3LWZ1bGwgbWItMiBwLTQgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImhpc3RvcnktY2FyZC10b3BcIiBjbGFzc05hbWU9XCJtYi0yIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkNoYXQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+SG93IHRvIHBsYW50IGEgY2Fycm90PzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImhpc3RvcnktdGV4dFwiIGNsYXNzTmFtZT1cInRleHQteHMgbXVsdGlsaW5lLWVsbGlwc2lzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBIZXJlIGFyZSBhIGZldyBzdGVwcyBvbiBob3cgdG8gcGxhbnQgYSBjYXJyb3QgaW4geW91ciBnYXJkZW46IENob3NlIHRoZSByaWdodCBsb2NhdGlvbi4gXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXJyb3RzIG5lZWQgZnVsbCBzdW4gYW5kIHdlbGwtZHJhaW5lZCBzb2lsIC4uLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJoaXN0b3J5LWJpblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJoaXN0b3J5LWNhcmRcIiBjbGFzc05hbWU9XCJoLTI4IHctZnVsbCBtYi0yIHAtNCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaGlzdG9yeS1jYXJkLXRvcFwiIGNsYXNzTmFtZT1cIm1iLTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQ2hhdCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc21cIj5Ib3cgdG8gcGxhbnQgYSBjYXJyb3Q/PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiaGlzdG9yeS10ZXh0XCIgY2xhc3NOYW1lPVwidGV4dC14cyBtdWx0aWxpbmUtZWxsaXBzaXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhlcmUgYXJlIGEgZmV3IHN0ZXBzIG9uIGhvdyB0byBwbGFudCBhIGNhcnJvdCBpbiB5b3VyIGdhcmRlbjogQ2hvc2UgdGhlIHJpZ2h0IGxvY2F0aW9uLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcnJvdHMgbmVlZCBmdWxsIHN1biBhbmQgd2VsbC1kcmFpbmVkIHNvaWwgLi4uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImhpc3RvcnktYmluXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgaWQ9XCJwcm9maWxlLWJ0blwiIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IHctZnVsbCBwci04IG92ZXJmbG93LWhpZGRlblwiIHZhcmlhbnRzPXtlbGVtZW50VmFyaWFudHN9PlxuICAgICAgICAgICAgICAgIDxCdXR0b25Cb3RoIGljb249e0ljb25Qcm9maWxlfSB0ZXh0PVwiYWRhbS53YXJ6eW5za2lcIi8+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkJ1dHRvbkljb24iLCJCdXR0b25Cb3RoIiwiSWNvblNpZGViYXIiLCJJY29uUHJvZmlsZSIsIkljb25QbHVzIiwiSWNvbkNoYXQiLCJTaWRlYmFyIiwic2lkZWJhciIsInRvZ2dsZVNpZGViYXIiLCJzaWRlYmFyVmFyaWFudHMiLCJoaWRkZW4iLCJ3aWR0aCIsInBhZGRpbmciLCJ2aXNpYmxlIiwiZWxlbWVudFZhcmlhbnRzIiwib3BhY2l0eSIsInNjYWxlIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInZhcmlhbnRzIiwiaWNvbiIsInRleHQiLCJvbkNsaWNrIiwiaDMiLCJoNCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sidebar.tsx\n"));

/***/ })

});