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

/***/ "./components/ModeSwitch.tsx":
/*!***********************************!*\
  !*** ./components/ModeSwitch.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _icons_IconModeBug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/IconModeBug */ \"./icons/IconModeBug.tsx\");\n/* harmony import */ var _icons_iconModeExplain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/icons/iconModeExplain */ \"./icons/iconModeExplain.tsx\");\n/* harmony import */ var _icons_IconModeRefractor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/IconModeRefractor */ \"./icons/IconModeRefractor.tsx\");\n\n\n\n\n\n\nconst ModeSwitch = (param)=>{\n    let { mode, toggleSwitch } = param;\n    const spring = {\n        type: \"spring\",\n        stiffness: 700,\n        damping: 30\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"mode-switch\",\n        \"data-isOn\": mode,\n        className: \"relative mt-8 w-1/3 h-14 flex bg-light-green cursor-pointer rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: \"absolute z-10 w-1/3 h-full p-1\",\n                layout: true,\n                transition: spring,\n                animate: {\n                    x: mode === \"one\" ? \"0%\" : mode === \"two\" ? \"100%\" : \"200%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"white-ball\",\n                    className: \"w-full h-full bg-white rounded-2xl\"\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>toggleSwitch(\"one\"),\n                className: \"selected-mode flex-1 flex z-10 justify-center items-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconModeBug__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 18\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Bug\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>toggleSwitch(\"two\"),\n                className: \"selected-mode flex-1 flex z-10 justify-center items-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_iconModeExplain__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 18\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Explain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>toggleSwitch(\"three\"),\n                className: \"selected-mode flex-1 flex z-10 justify-center items-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconModeRefractor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 18\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Refractor\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/components/ModeSwitch.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ModeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModeSwitch);\nvar _c;\n$RefreshReg$(_c, \"ModeSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGVTd2l0Y2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDYTtBQUVPO0FBQ1E7QUFDSTtBQU96RCxNQUFNSyxhQUF3QztRQUFDLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFO0lBRWpFLE1BQU1DLFNBQVM7UUFDWEMsTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLFNBQVM7SUFDYjtJQUdGLHFCQUNFLDhEQUFDQztRQUFJQyxJQUFHO1FBQWNDLGFBQVdSO1FBQU1TLFdBQVU7OzBCQUM3Qyw4REFBQ2QsaURBQU1BLENBQUNXLEdBQUc7Z0JBQ1BHLFdBQVU7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFlBQVlUO2dCQUNaVSxTQUFTO29CQUNUQyxHQUFHYixTQUFTLFFBQ04sT0FDQUEsU0FBUyxRQUNMLFNBQ0E7Z0JBQ1Y7MEJBRUEsNEVBQUNNO29CQUFJQyxJQUFHO29CQUFhRSxXQUFVOzs7Ozs7Ozs7OzswQkFFbkMsOERBQUNIO2dCQUNHUSxTQUFTLElBQU1iLGFBQWE7Z0JBQzVCUSxXQUFVOztrQ0FFViw4REFBQ0g7a0NBQUksNEVBQUNWLDBEQUFXQTs7Ozs7Ozs7OztrQ0FDakIsOERBQUNVO2tDQUFJOzs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNBO2dCQUNHUSxTQUFTLElBQU1iLGFBQWE7Z0JBQzVCUSxXQUFVOztrQ0FFViw4REFBQ0g7a0NBQUksNEVBQUNULDhEQUFlQTs7Ozs7Ozs7OztrQ0FDckIsOERBQUNTO2tDQUFJOzs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNBO2dCQUNHUSxTQUFTLElBQU1iLGFBQWE7Z0JBQzVCUSxXQUFVOztrQ0FFViw4REFBQ0g7a0NBQUksNEVBQUNSLGdFQUFpQkE7Ozs7Ozs7Ozs7a0NBQ3ZCLDhEQUFDUTtrQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpCO0tBaERNUDtBQWtETiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vZGVTd2l0Y2gudHN4P2JkZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuaW1wb3J0IEljb25Nb2RlQnVnIGZyb20gJ0AvaWNvbnMvSWNvbk1vZGVCdWcnXG5pbXBvcnQgSWNvbk1vZGVFeHBsYWluIGZyb20gJ0AvaWNvbnMvaWNvbk1vZGVFeHBsYWluJ1xuaW1wb3J0IEljb25Nb2RlUmVmcmFjdG9yIGZyb20gJ0AvaWNvbnMvSWNvbk1vZGVSZWZyYWN0b3InXG5cbnR5cGUgTW9kZVN3aXRjaFByb3BzID0ge1xuICAgIG1vZGU6IHN0cmluZztcbiAgICB0b2dnbGVTd2l0Y2g6IGFueTtcbn1cblxuY29uc3QgTW9kZVN3aXRjaDogUmVhY3QuRkM8TW9kZVN3aXRjaFByb3BzPiA9ICh7IG1vZGUsIHRvZ2dsZVN3aXRjaCB9KSA9PiB7XG5cbiAgICBjb25zdCBzcHJpbmcgPSB7XG4gICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgIHN0aWZmbmVzczogNzAwLFxuICAgICAgICBkYW1waW5nOiAzMFxuICAgIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm1vZGUtc3dpdGNoXCIgZGF0YS1pc09uPXttb2RlfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC04IHctMS8zIGgtMTQgZmxleCBiZy1saWdodC1ncmVlbiBjdXJzb3ItcG9pbnRlciByb3VuZGVkLTJ4bFwiPlxuICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHotMTAgdy0xLzMgaC1mdWxsIHAtMVwiXG4gICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3NwcmluZ31cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgXG4gICAgICAgICAgICB4OiBtb2RlID09PSBcIm9uZVwiIFxuICAgICAgICAgICAgICAgID8gJzAlJyBcbiAgICAgICAgICAgICAgICA6IG1vZGUgPT09IFwidHdvXCJcbiAgICAgICAgICAgICAgICAgICAgPyAnMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgOiAnMjAwJScsXG4gICAgICAgICAgICB9fSBcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBpZD1cIndoaXRlLWJhbGxcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsXCI+PC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVN3aXRjaChcIm9uZVwiKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGVkLW1vZGUgZmxleC0xIGZsZXggei0xMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PjxJY29uTW9kZUJ1ZyAvPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5CdWc8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTd2l0Y2goXCJ0d29cIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RlZC1tb2RlIGZsZXgtMSBmbGV4IHotMTAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj48SWNvbk1vZGVFeHBsYWluIC8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkV4cGxhaW48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTd2l0Y2goXCJ0aHJlZVwiKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGVkLW1vZGUgZmxleC0xIGZsZXggei0xMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PjxJY29uTW9kZVJlZnJhY3RvciAvPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5SZWZyYWN0b3I8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kZVN3aXRjaFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiSWNvbk1vZGVCdWciLCJJY29uTW9kZUV4cGxhaW4iLCJJY29uTW9kZVJlZnJhY3RvciIsIk1vZGVTd2l0Y2giLCJtb2RlIiwidG9nZ2xlU3dpdGNoIiwic3ByaW5nIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJkaXYiLCJpZCIsImRhdGEtaXNPbiIsImNsYXNzTmFtZSIsImxheW91dCIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwieCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ModeSwitch.tsx\n"));

/***/ })

});