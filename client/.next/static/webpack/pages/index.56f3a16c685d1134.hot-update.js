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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction index() {\n    _s();\n    const [mes, setMes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading\");\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInput = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:8080/api/prompt\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    prompt: input\n                })\n            });\n            console.log(\"successfully posted data\");\n            // server respnonse\n            const data = await response.json();\n            setMes(data.prompted_data);\n            console.log(\"successfully received data:\", mes);\n        } catch (error) {\n            console.error(\"Failed to send Form ->\", error);\n        }\n    };\n    // sidebar settings\n    const [sidebar, setSideBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleSidebar = ()=>{\n        setSideBar(!sidebar);\n    };\n    const sidebarVariants = {\n        hidden: {\n            x: \"-100%\",\n            opacity: 0\n        },\n        visible: {\n            x: 0,\n            opacity: 1\n        }\n    };\n    // all mode settings:\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"one\");\n    const toggleSwitch = (activeTab)=>{\n        setMode(activeTab);\n    };\n    const spring = {\n        type: \"spring\",\n        stiffness: 700,\n        damping: 30\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen bg-white flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                id: \"sidebar\",\n                className: \"w-1/5 grid place-items-center bg-blue-200\",\n                initial: false,\n                animate: sidebar ? \"visible\" : \"hidden\",\n                variants: sidebarVariants,\n                children: \"Sidemenu\"\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleSidebar,\n                className: \"absolute top-4 left-4 w-11 h-11 bg-white grid place-items-center rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    stroke: \"currentColor\",\n                    fill: \"none\",\n                    \"stroke-width\": \"2\",\n                    viewBox: \"0 0 24 24\",\n                    \"stroke-linecap\": \"round\",\n                    \"stroke-linejoin\": \"round\",\n                    className: \"h-4 w-4 text-white dark:text-black\",\n                    height: \"1em\",\n                    width: \"1em\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                            x: \"3\",\n                            y: \"3\",\n                            width: \"18\",\n                            height: \"18\",\n                            rx: \"2\",\n                            ry: \"2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                            x1: \"9\",\n                            y1: \"3\",\n                            x2: \"9\",\n                            y2: \"21\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: \"w-4/5 bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"mode-container\",\n                    className: \"w-full h-full flex justify-center items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"mode-switch\",\n                        \"data-isOn\": mode,\n                        className: \"w-1/3 h-14 flex bg-light-green rounded-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                className: \"absolute w-1/3 p-2\",\n                                layout: true,\n                                transition: spring,\n                                animate: {\n                                    x: mode === \"one\" ? \"0%\" : mode === \"two\" ? \"100%\" : \"200%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"white-ball\",\n                                    className: \"bg-white toprounded-2xl\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>toggleSwitch(\"one\"),\n                                className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                children: \"Bug\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>toggleSwitch(\"two\"),\n                                className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                children: \"Explain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>toggleSwitch(\"three\"),\n                                className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                children: \"Refractor\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"fuoqoAxUkv8Q//Mcmf6hMA5wTRM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDQ08sU0FBUyxJQUFNYixhQUFhO2dDQUM1Qk8sV0FBVTswQ0FDVDs7Ozs7OzBDQUNILDhEQUFDRDtnQ0FDQ08sU0FBUyxJQUFNYixhQUFhO2dDQUM1Qk8sV0FBVTswQ0FDWDs7Ozs7OzBDQUNELDhEQUFDRDtnQ0FDQ08sU0FBUyxJQUFNYixhQUFhO2dDQUM1Qk8sV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDYjtHQXJKUzFDO0FBdUpULCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG5cbiAgY29uc3QgW21lcywgc2V0TWVzXSA9IHVzZVN0YXRlKFwiTG9hZGluZ1wiKVxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Byb21wdFwiLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByb21wdDogaW5wdXQgfSlcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IHBvc3RlZCBkYXRhJylcblxuICAgICAgLy8gc2VydmVyIHJlc3Bub25zZVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgc2V0TWVzKGRhdGEucHJvbXB0ZWRfZGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgcmVjZWl2ZWQgZGF0YTonLCBtZXMpXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIEZvcm0gLT5cIiwgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLy8gc2lkZWJhciBzZXR0aW5nc1xuICBjb25zdCBbc2lkZWJhciwgc2V0U2lkZUJhcl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgc2V0U2lkZUJhcighc2lkZWJhcilcbiAgfVxuXG4gIGNvbnN0IHNpZGViYXJWYXJpYW50cyA9e1xuICAgIGhpZGRlbjoge1xuICAgICAgeDogXCItMTAwJVwiLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH0sXG4gICAgdmlzaWJsZToge1xuICAgICAgeDogMCxcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG4gIH1cblxuXG5cblxuICAvLyBhbGwgbW9kZSBzZXR0aW5nczpcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIm9uZVwiKVxuXG4gIGNvbnN0IHRvZ2dsZVN3aXRjaCA9IChhY3RpdmVUYWI6IHN0cmluZykgPT4ge1xuICAgIHNldE1vZGUoYWN0aXZlVGFiKVxuICB9XG5cblxuICBjb25zdCBzcHJpbmcgPSB7XG4gICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICBzdGlmZm5lc3M6IDcwMCxcbiAgICBkYW1waW5nOiAzMFxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGJnLXdoaXRlIGZsZXhcIj5cbiAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICBpZD1cInNpZGViYXJcIiBcbiAgICAgICAgY2xhc3NOYW1lPVwidy0xLzUgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgYmctYmx1ZS0yMDBcIlxuICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgYW5pbWF0ZT17c2lkZWJhciA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nfVxuICAgICAgICB2YXJpYW50cz17c2lkZWJhclZhcmlhbnRzfVxuICAgICAgPlxuICAgICAgICBTaWRlbWVudVxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgb25DbGljaz17dG9nZ2xlU2lkZWJhcn1cbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgbGVmdC00IHctMTEgaC0xMSBiZy13aGl0ZSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciByb3VuZGVkLWxnXCJcbiAgICAgICAgPlxuICAgICAgICA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtd2hpdGUgZGFyazp0ZXh0LWJsYWNrXCIgaGVpZ2h0PVwiMWVtXCIgd2lkdGg9XCIxZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHJlY3QgeD1cIjNcIiB5PVwiM1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD5cbiAgICAgICAgICA8bGluZSB4MT1cIjlcIiB5MT1cIjNcIiB4Mj1cIjlcIiB5Mj1cIjIxXCI+PC9saW5lPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBpZD1cIm1haW5cIiBjbGFzc05hbWU9XCJ3LTQvNSBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGlkPVwibW9kZS1jb250YWluZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cIm1vZGUtc3dpdGNoXCIgZGF0YS1pc09uPXttb2RlfSBjbGFzc05hbWU9XCJ3LTEvMyBoLTE0IGZsZXggYmctbGlnaHQtZ3JlZW4gcm91bmRlZC0yeGxcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0xLzMgcC0yXCJcbiAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgdHJhbnNpdGlvbj17c3ByaW5nfVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBcbiAgICAgICAgICAgICAgeDogbW9kZSA9PT0gXCJvbmVcIiBcbiAgICAgICAgICAgICAgICAgID8gJzAlJyBcbiAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gXCJ0d29cIlxuICAgICAgICAgICAgICAgICAgICAgID8gJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnMjAwJScsXG4gICAgICAgICAgICB9fSBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGlkPVwid2hpdGUtYmFsbFwiIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRvcHJvdW5kZWQtMnhsXCI+PC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlU3dpdGNoKFwib25lXCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RlZC1tb2RlIGZsZXgtMSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciB6LTEwXCJcbiAgICAgICAgICAgICAgPkJ1ZzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlU3dpdGNoKFwidHdvXCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RlZC1tb2RlIGZsZXgtMSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciB6LTEwXCJcbiAgICAgICAgICAgID5FeHBsYWluPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTd2l0Y2goXCJ0aHJlZVwiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0ZWQtbW9kZSBmbGV4LTEgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgei0xMFwiXG4gICAgICAgICAgICA+UmVmcmFjdG9yPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb21wdFwiPjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgIG5hbWU9XCJwcm9tcHRcIiBcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwPntpbnB1dH08L3A+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdC1idG5cIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtYmx1ZS03MDBcIj5IaTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXN1bHQtdGV4dFwiPlxuICAgICAgICAgIHttZXN9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJpbmRleCIsIm1lcyIsInNldE1lcyIsImlucHV0Iiwic2V0SW5wdXQiLCJoYW5kbGVJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb21wdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwianNvbiIsInByb21wdGVkX2RhdGEiLCJlcnJvciIsInNpZGViYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlU2lkZWJhciIsInNpZGViYXJWYXJpYW50cyIsImhpZGRlbiIsIngiLCJvcGFjaXR5IiwidmlzaWJsZSIsIm1vZGUiLCJzZXRNb2RlIiwidG9nZ2xlU3dpdGNoIiwiYWN0aXZlVGFiIiwic3ByaW5nIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImluaXRpYWwiLCJhbmltYXRlIiwidmFyaWFudHMiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwic3Ryb2tlIiwiZmlsbCIsInN0cm9rZS13aWR0aCIsInZpZXdCb3giLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsImhlaWdodCIsIndpZHRoIiwieG1sbnMiLCJyZWN0IiwieSIsInJ4IiwicnkiLCJsaW5lIiwieDEiLCJ5MSIsIngyIiwieTIiLCJkYXRhLWlzT24iLCJsYXlvdXQiLCJ0cmFuc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});