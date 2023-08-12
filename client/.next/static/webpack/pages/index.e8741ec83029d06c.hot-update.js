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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction index() {\n    _s();\n    const [mes, setMes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading\");\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInput = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:8080/api/prompt\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    prompt: input\n                })\n            });\n            console.log(\"successfully posted data\");\n            // server respnonse\n            const data = await response.json();\n            setMes(data.prompted_data);\n            console.log(\"successfully received data:\", mes);\n        } catch (error) {\n            console.error(\"Failed to send Form ->\", error);\n        }\n    };\n    // all mode settings:\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"one\");\n    const toggleSwitch = (activeTab)=>{\n        setMode(activeTab);\n    };\n    const spring = {\n        type: \"spring\",\n        stiffness: 700,\n        damping: 30\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app w-screen h-screen overflow-hidden relative bg-gray-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute w-10 h-10 left-4 top-4 z-10 rounded-lg border border-gray-200 flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    stroke: \"currentColor\",\n                    fill: \"none\",\n                    \"stroke-width\": \"2\",\n                    viewBox: \"0 0 24 24\",\n                    \"stroke-linecap\": \"round\",\n                    \"stroke-linejoin\": \"round\",\n                    className: \"h-4 w-4 text-white dark:text-black\",\n                    height: \"1em\",\n                    width: \"1em\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                            x: \"3\",\n                            y: \"3\",\n                            width: \"18\",\n                            height: \"18\",\n                            rx: \"2\",\n                            ry: \"2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                            x1: \"9\",\n                            y1: \"3\",\n                            x2: \"9\",\n                            y2: \"21\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white w-full h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"mode-container\",\n                    className: \"px-4 py-4 flex justify-center items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"mode-switch\",\n                        \"data-isOn\": mode,\n                        className: \"relative w-1/3 h-14 px-1 py-1 bg-light-green rounded-2xl flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                className: \"handle bg-white h-12 m-auto absolute top-0 bottom-0 w-auto rounded-2xl\",\n                                layout: true,\n                                transition: spring,\n                                animate: {\n                                    x: mode === \"one\" ? \"0%\" : mode === \"two\" ? \"100%\" : \"200%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>toggleSwitch(\"one\"),\n                                className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                children: \"Bug\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>toggleSwitch(\"two\"),\n                                className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                children: \"Explain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>toggleSwitch(\"three\"),\n                                className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                children: \"Refractor\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"ZUygc5CCdhI4KK9ImtcT7iUK+x4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDRDtBQUV0QyxTQUFTRzs7SUFFUCxNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0osK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1PLGNBQWMsQ0FBQ0M7UUFDbkJGLFNBQVNFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUVBLE1BQU1DLGVBQWUsT0FBT0g7UUFDMUJBLEVBQUVJLGNBQWM7UUFFaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxvQ0FBb0M7Z0JBQy9EQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsUUFBUWY7Z0JBQU07WUFDdkM7WUFDQWdCLFFBQVFDLEdBQUcsQ0FBQztZQUVaLG1CQUFtQjtZQUNuQixNQUFNQyxPQUFPLE1BQU1WLFNBQVNXLElBQUk7WUFDaENwQixPQUFPbUIsS0FBS0UsYUFBYTtZQUN6QkosUUFBUUMsR0FBRyxDQUFDLCtCQUErQm5CO1FBRTdDLEVBQUUsT0FBT3VCLE9BQU87WUFDZEwsUUFBUUssS0FBSyxDQUFDLDBCQUEwQkE7UUFDMUM7SUFDRjtJQUlBLHFCQUFxQjtJQUNyQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBRzVCLCtDQUFRQSxDQUFTO0lBRXpDLE1BQU02QixlQUFlLENBQUNDO1FBQ3BCRixRQUFRRTtJQUNWO0lBR0EsTUFBTUMsU0FBUztRQUNiQyxNQUFNO1FBQ05DLFdBQVc7UUFDWEMsU0FBUztJQUNYO0lBR0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBT0QsV0FBVTswQkFDaEIsNEVBQUNFO29CQUFJQyxRQUFPO29CQUFlQyxNQUFLO29CQUFPQyxnQkFBYTtvQkFBSUMsU0FBUTtvQkFBWUMsa0JBQWU7b0JBQVFDLG1CQUFnQjtvQkFBUVIsV0FBVTtvQkFBcUNTLFFBQU87b0JBQU1DLE9BQU07b0JBQU1DLE9BQU07O3NDQUN2TSw4REFBQ0M7NEJBQUtDLEdBQUU7NEJBQUlDLEdBQUU7NEJBQUlKLE9BQU07NEJBQUtELFFBQU87NEJBQUtNLElBQUc7NEJBQUlDLElBQUc7Ozs7OztzQ0FDbkQsOERBQUNDOzRCQUFLQyxJQUFHOzRCQUFJQyxJQUFHOzRCQUFJQyxJQUFHOzRCQUFJQyxJQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHbEMsOERBQUN0QjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUl1QixJQUFHO29CQUFpQnRCLFdBQVU7OEJBQ2pDLDRFQUFDRDt3QkFBSXVCLElBQUc7d0JBQWNDLGFBQVdoQzt3QkFBTVMsV0FBVTs7MENBQy9DLDhEQUFDbkMsaURBQU1BLENBQUNrQyxHQUFHO2dDQUNYQyxXQUFVO2dDQUNWd0IsTUFBTTtnQ0FDTkMsWUFBWTlCO2dDQUNaK0IsU0FBUztvQ0FDUGIsR0FBR3RCLFNBQVMsUUFDTixPQUNBQSxTQUFTLFFBQ0wsU0FDQTtnQ0FDWjs7Ozs7OzBDQUVBLDhEQUFDUTtnQ0FDQzRCLFNBQVMsSUFBTWxDLGFBQWE7Z0NBQzVCTyxXQUFVOzBDQUNUOzs7Ozs7MENBQ0gsOERBQUNEO2dDQUNDNEIsU0FBUyxJQUFNbEMsYUFBYTtnQ0FDNUJPLFdBQVU7MENBQ1g7Ozs7OzswQ0FDRCw4REFBQ0Q7Z0NBQ0M0QixTQUFTLElBQU1sQyxhQUFhO2dDQUM1Qk8sV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDYjtHQXBIU2xDO0FBc0hULCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG5cbiAgY29uc3QgW21lcywgc2V0TWVzXSA9IHVzZVN0YXRlKFwiTG9hZGluZ1wiKVxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Byb21wdFwiLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByb21wdDogaW5wdXQgfSlcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IHBvc3RlZCBkYXRhJylcblxuICAgICAgLy8gc2VydmVyIHJlc3Bub25zZVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgc2V0TWVzKGRhdGEucHJvbXB0ZWRfZGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgcmVjZWl2ZWQgZGF0YTonLCBtZXMpXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIEZvcm0gLT5cIiwgZXJyb3IpXG4gICAgfVxuICB9XG5cblxuXG4gIC8vIGFsbCBtb2RlIHNldHRpbmdzOlxuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwib25lXCIpXG5cbiAgY29uc3QgdG9nZ2xlU3dpdGNoID0gKGFjdGl2ZVRhYjogc3RyaW5nKSA9PiB7XG4gICAgc2V0TW9kZShhY3RpdmVUYWIpXG4gIH1cblxuXG4gIGNvbnN0IHNwcmluZyA9IHtcbiAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgIHN0aWZmbmVzczogNzAwLFxuICAgIGRhbXBpbmc6IDMwXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHAgdy1zY3JlZW4gaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIGJnLWdyYXktOTAwXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFic29sdXRlIHctMTAgaC0xMCBsZWZ0LTQgdG9wLTQgei0xMCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPHN2ZyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ibGFja1wiIGhlaWdodD1cIjFlbVwiIHdpZHRoPVwiMWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+XG4gICAgICAgICAgPGxpbmUgeDE9XCI5XCIgeTE9XCIzXCIgeDI9XCI5XCIgeTI9XCIyMVwiPjwvbGluZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgICA8ZGl2IGlkPVwibW9kZS1jb250YWluZXJcIiBjbGFzc05hbWU9XCJweC00IHB5LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwibW9kZS1zd2l0Y2hcIiBkYXRhLWlzT249e21vZGV9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMS8zIGgtMTQgcHgtMSBweS0xIGJnLWxpZ2h0LWdyZWVuIHJvdW5kZWQtMnhsIGZsZXhcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFuZGxlIGJnLXdoaXRlIGgtMTIgbS1hdXRvIGFic29sdXRlIHRvcC0wIGJvdHRvbS0wIHctYXV0byByb3VuZGVkLTJ4bFwiXG4gICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3NwcmluZ31cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgXG4gICAgICAgICAgICAgIHg6IG1vZGUgPT09IFwib25lXCIgXG4gICAgICAgICAgICAgICAgICA/ICcwJScgXG4gICAgICAgICAgICAgICAgICA6IG1vZGUgPT09IFwidHdvXCJcbiAgICAgICAgICAgICAgICAgICAgICA/ICcxMDAlJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJzIwMCUnLFxuICAgICAgICAgICAgfX0gXG4gICAgICAgICAgPjwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVN3aXRjaChcIm9uZVwiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0ZWQtbW9kZSBmbGV4LTEgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgei0xMFwiXG4gICAgICAgICAgICAgID5CdWc8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVN3aXRjaChcInR3b1wiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0ZWQtbW9kZSBmbGV4LTEgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgei0xMFwiXG4gICAgICAgICAgICA+RXhwbGFpbjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlU3dpdGNoKFwidGhyZWVcIil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGVkLW1vZGUgZmxleC0xIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHotMTBcIlxuICAgICAgICAgICAgPlJlZnJhY3RvcjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYmxvY2tcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcm9tcHRcIj48L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICBuYW1lPVwicHJvbXB0XCIgXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cD57aW5wdXR9PC9wPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXQtYnRuXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LWJsdWUtNzAwXCI+SGk8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVzdWx0LXRleHRcIj5cbiAgICAgICAgICB7bWVzfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiaW5kZXgiLCJtZXMiLCJzZXRNZXMiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9tcHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImpzb24iLCJwcm9tcHRlZF9kYXRhIiwiZXJyb3IiLCJtb2RlIiwic2V0TW9kZSIsInRvZ2dsZVN3aXRjaCIsImFjdGl2ZVRhYiIsInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwic3ZnIiwic3Ryb2tlIiwiZmlsbCIsInN0cm9rZS13aWR0aCIsInZpZXdCb3giLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsImhlaWdodCIsIndpZHRoIiwieG1sbnMiLCJyZWN0IiwieCIsInkiLCJyeCIsInJ5IiwibGluZSIsIngxIiwieTEiLCJ4MiIsInkyIiwiaWQiLCJkYXRhLWlzT24iLCJsYXlvdXQiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});