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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonIcon */ \"./components/ButtonIcon.tsx\");\n/* harmony import */ var _ButtonBoth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonBoth */ \"./components/ButtonBoth.tsx\");\n/* harmony import */ var _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/IconSidebar */ \"./icons/IconSidebar.tsx\");\n/* harmony import */ var _icons_IconProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/icons/IconProfile */ \"./icons/IconProfile.tsx\");\n\n\n\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { sidebar, toggleSidebar } = param;\n    const sidebarVariants = {\n        hidden: {\n            width: 0,\n            padding: 0\n        },\n        visible: {\n            width: \"20%\"\n        }\n    };\n    const elementVariants = {\n        hidden: {\n            opacity: 0,\n            scale: 0.4\n        },\n        visible: {\n            opacity: 1,\n            scale: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        id: \"sidebar\",\n        className: \"relative h-full p-4 bg-light-green-400 flex flex-col justify-start overflow-hidden\",\n        initial: false,\n        animate: sidebar ? \"visible\" : \"hidden\",\n        variants: sidebarVariants,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                id: \"top-buttons\",\n                className: \"w-full flex flex-row justify-start gap-2 overflow-hidden\",\n                variants: elementVariants,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonBoth__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        icon: _icons_IconProfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        text: \"New Chat\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        text: \"Close sidebar\",\n                        onClick: toggleSidebar\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"history\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Recents\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"history-card\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"history-card-top\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"icon\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {}, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"history-text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"history-bin\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                id: \"profile-btn\",\n                className: \"absolute bottom-4 w-full pr-8 overflow-hidden\",\n                variants: elementVariants,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonBoth__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    icon: _icons_IconProfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    text: \"adam.warzynski\"\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/sidebar.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFDRDtBQUNBO0FBRVE7QUFDQTtBQUNIO0FBTzFDLE1BQU1PLFVBQWtDO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUU7SUFFL0QsTUFBTUMsa0JBQWtCO1FBQ3BCQyxRQUFRO1lBQ05DLE9BQU87WUFDUEMsU0FBUztRQUNYO1FBQ0FDLFNBQVM7WUFDUEYsT0FBTztRQUNUO0lBQ0o7SUFFQSxNQUFNRyxrQkFBa0I7UUFDcEJKLFFBQVE7WUFDSkssU0FBUztZQUNUQyxPQUFPO1FBQ1g7UUFDQUgsU0FBUztZQUNMRSxTQUFTO1lBQ1RDLE9BQU87UUFDWDtJQUNKO0lBRUEscUJBQ0ksOERBQUNoQixpREFBTUEsQ0FBQ2lCLEdBQUc7UUFDUEMsSUFBRztRQUNIQyxXQUFVO1FBQ1ZDLFNBQVM7UUFDVEMsU0FBU2QsVUFBVSxZQUFZO1FBQy9CZSxVQUFVYjs7MEJBRVYsOERBQUNULGlEQUFNQSxDQUFDaUIsR0FBRztnQkFBQ0MsSUFBRztnQkFBY0MsV0FBVTtnQkFBMkRHLFVBQVVSOztrQ0FDeEcsOERBQUNaLG1EQUFVQTt3QkFBQ3FCLE1BQU1sQiwwREFBUUE7d0JBQUVtQixNQUFLOzs7Ozs7a0NBQ2pDLDhEQUFDdkIsbURBQVVBO3dCQUFDc0IsTUFBTXBCLDBEQUFXQTt3QkFBRXFCLE1BQUs7d0JBQWdCQyxTQUFTakI7Ozs7Ozs7Ozs7OzswQkFFakUsOERBQUNTO2dCQUFJQyxJQUFHOztrQ0FDSiw4REFBQ1E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ1Q7d0JBQUlDLElBQUc7OzBDQUNKLDhEQUFDRDtnQ0FBSUMsSUFBRzs7a0RBQ0osOERBQUNEO3dDQUFJQyxJQUFHOzs7Ozs7a0RBQ1IsOERBQUNTOzs7Ozs7Ozs7OzswQ0FFTCw4REFBQ1Y7Z0NBQUlDLElBQUc7Ozs7OzswQ0FDUiw4REFBQ0Q7Z0NBQUlDLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJaEIsOERBQUNsQixpREFBTUEsQ0FBQ2lCLEdBQUc7Z0JBQUNDLElBQUc7Z0JBQWNDLFdBQVU7Z0JBQWdERyxVQUFVUjswQkFDN0YsNEVBQUNaLG1EQUFVQTtvQkFBQ3FCLE1BQU1uQiwwREFBV0E7b0JBQUVvQixNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlwRDtLQXBETWxCO0FBc0ROLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2lkZWJhci50c3g/N2E4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEJ1dHRvbkljb24gZnJvbSAnLi9CdXR0b25JY29uJ1xuaW1wb3J0IEJ1dHRvbkJvdGggZnJvbSAnLi9CdXR0b25Cb3RoJ1xuXG5pbXBvcnQgSWNvblNpZGViYXIgZnJvbSAnQC9pY29ucy9JY29uU2lkZWJhcidcbmltcG9ydCBJY29uUHJvZmlsZSBmcm9tICdAL2ljb25zL0ljb25Qcm9maWxlJ1xuaW1wb3J0IEljb25QbHVzIGZyb20gJ0AvaWNvbnMvSWNvblByb2ZpbGUnXG5cbmludGVyZmFjZSBTaWRlYmFyUHJvcHN7XG4gICAgc2lkZWJhcjogYm9vbGVhblxuICAgIHRvZ2dsZVNpZGViYXI6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFNpZGViYXI6IFJlYWN0LkZDPFNpZGViYXJQcm9wcz4gPSAoeyBzaWRlYmFyLCB0b2dnbGVTaWRlYmFyIH0pID0+IHtcblxuICAgIGNvbnN0IHNpZGViYXJWYXJpYW50cyA9IHtcbiAgICAgICAgaGlkZGVuOiB7XG4gICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgfSxcbiAgICAgICAgdmlzaWJsZToge1xuICAgICAgICAgIHdpZHRoOiBcIjIwJVwiLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudFZhcmlhbnRzID0ge1xuICAgICAgICBoaWRkZW46IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBzY2FsZTogMC40XG4gICAgICAgIH0sXG4gICAgICAgIHZpc2libGU6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBpZD1cInNpZGViYXJcIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbCBwLTQgYmctbGlnaHQtZ3JlZW4tNDAwIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgICAgICBhbmltYXRlPXtzaWRlYmFyID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9XG4gICAgICAgICAgICB2YXJpYW50cz17c2lkZWJhclZhcmlhbnRzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8bW90aW9uLmRpdiBpZD1cInRvcC1idXR0b25zXCIgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1yb3cganVzdGlmeS1zdGFydCBnYXAtMiBvdmVyZmxvdy1oaWRkZW5cIiB2YXJpYW50cz17ZWxlbWVudFZhcmlhbnRzfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uQm90aCBpY29uPXtJY29uUGx1c30gdGV4dD1cIk5ldyBDaGF0XCIvPlxuICAgICAgICAgICAgICAgIDxCdXR0b25JY29uIGljb249e0ljb25TaWRlYmFyfSB0ZXh0PVwiQ2xvc2Ugc2lkZWJhclwiIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9IC8+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgIDxoMz5SZWNlbnRzPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaGlzdG9yeS1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJoaXN0b3J5LWNhcmQtdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaGlzdG9yeS10ZXh0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJoaXN0b3J5LWJpblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGlkPVwicHJvZmlsZS1idG5cIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCB3LWZ1bGwgcHItOCBvdmVyZmxvdy1oaWRkZW5cIiB2YXJpYW50cz17ZWxlbWVudFZhcmlhbnRzfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uQm90aCBpY29uPXtJY29uUHJvZmlsZX0gdGV4dD1cImFkYW0ud2Fyenluc2tpXCIvPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJCdXR0b25JY29uIiwiQnV0dG9uQm90aCIsIkljb25TaWRlYmFyIiwiSWNvblByb2ZpbGUiLCJJY29uUGx1cyIsIlNpZGViYXIiLCJzaWRlYmFyIiwidG9nZ2xlU2lkZWJhciIsInNpZGViYXJWYXJpYW50cyIsImhpZGRlbiIsIndpZHRoIiwicGFkZGluZyIsInZpc2libGUiLCJlbGVtZW50VmFyaWFudHMiLCJvcGFjaXR5Iiwic2NhbGUiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJhbmltYXRlIiwidmFyaWFudHMiLCJpY29uIiwidGV4dCIsIm9uQ2xpY2siLCJoMyIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidebar.tsx\n"));

/***/ })

});