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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction index() {\n    _s();\n    const [mes, setMes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading\");\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInput = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:8080/api/prompt\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    prompt: input\n                })\n            });\n            console.log(\"successfully posted data\");\n            // server respnonse\n            const data = await response.json();\n            setMes(data.prompted_data);\n            console.log(\"successfully received data:\", mes);\n        } catch (error) {\n            console.error(\"Failed to send Form ->\", error);\n        }\n    };\n    // sidebar settings\n    const [sidebar, setSideBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleSidebar = ()=>{\n        setSideBar(!sidebar);\n    };\n    // all mode settings:\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"one\");\n    const toggleSwitch = (activeTab)=>{\n        setMode(activeTab);\n    };\n    const spring = {\n        type: \"spring\",\n        stiffness: 700,\n        damping: 30\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"sidebar\",\n                className: \"\",\n                children: \"Sidemenu\"\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleSidebar,\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    stroke: \"currentColor\",\n                    fill: \"none\",\n                    \"stroke-width\": \"2\",\n                    viewBox: \"0 0 24 24\",\n                    \"stroke-linecap\": \"round\",\n                    \"stroke-linejoin\": \"round\",\n                    className: \"h-4 w-4 text-white dark:text-black\",\n                    height: \"1em\",\n                    width: \"1em\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                            x: \"3\",\n                            y: \"3\",\n                            width: \"18\",\n                            height: \"18\",\n                            rx: \"2\",\n                            ry: \"2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                            x1: \"9\",\n                            y1: \"3\",\n                            x2: \"9\",\n                            y2: \"21\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"mode-container\",\n                    className: \"px-4 py-4 flex justify-center items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"mode-switch\",\n                        \"data-isOn\": mode,\n                        className: \"relative w-1/3 h-14 px-1 py-1 bg-light-green rounded-2xl flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                className: \"handle bg-white h-12 m-auto absolute top-0 bottom-0 w-1/3 rounded-2xl\",\n                                layout: true,\n                                transition: spring,\n                                animate: {\n                                    x: mode === \"one\" ? \"0%\" : mode === \"two\" ? \"100%\" : \"200%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>toggleSwitch(\"one\"),\n                                className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                children: \"Bug\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>toggleSwitch(\"two\"),\n                                className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                children: \"Explain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>toggleSwitch(\"three\"),\n                                className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                children: \"Refractor\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"fuoqoAxUkv8Q//Mcmf6hMA5wTRM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG5cbiAgY29uc3QgW21lcywgc2V0TWVzXSA9IHVzZVN0YXRlKFwiTG9hZGluZ1wiKVxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Byb21wdFwiLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByb21wdDogaW5wdXQgfSlcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IHBvc3RlZCBkYXRhJylcblxuICAgICAgLy8gc2VydmVyIHJlc3Bub25zZVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgc2V0TWVzKGRhdGEucHJvbXB0ZWRfZGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgcmVjZWl2ZWQgZGF0YTonLCBtZXMpXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIEZvcm0gLT5cIiwgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLy8gc2lkZWJhciBzZXR0aW5nc1xuICBjb25zdCBbc2lkZWJhciwgc2V0U2lkZUJhcl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgc2V0U2lkZUJhcighc2lkZWJhcilcbiAgfVxuXG4gIC8vIGFsbCBtb2RlIHNldHRpbmdzOlxuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwib25lXCIpXG5cbiAgY29uc3QgdG9nZ2xlU3dpdGNoID0gKGFjdGl2ZVRhYjogc3RyaW5nKSA9PiB7XG4gICAgc2V0TW9kZShhY3RpdmVUYWIpXG4gIH1cblxuXG4gIGNvbnN0IHNwcmluZyA9IHtcbiAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgIHN0aWZmbmVzczogNzAwLFxuICAgIGRhbXBpbmc6IDMwXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgaWQ9XCJzaWRlYmFyXCIgY2xhc3NOYW1lPVwiXCI+U2lkZW1lbnU8L2Rpdj5cbiAgICAgIDxidXR0b24gXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9XG4gICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgID5cbiAgICAgICAgPHN2ZyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ibGFja1wiIGhlaWdodD1cIjFlbVwiIHdpZHRoPVwiMWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+XG4gICAgICAgICAgPGxpbmUgeDE9XCI5XCIgeTE9XCIzXCIgeDI9XCI5XCIgeTI9XCIyMVwiPjwvbGluZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtb2RlLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInB4LTQgcHktNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJtb2RlLXN3aXRjaFwiIGRhdGEtaXNPbj17bW9kZX0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xLzMgaC0xNCBweC0xIHB5LTEgYmctbGlnaHQtZ3JlZW4gcm91bmRlZC0yeGwgZmxleFwiPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoYW5kbGUgYmctd2hpdGUgaC0xMiBtLWF1dG8gYWJzb2x1dGUgdG9wLTAgYm90dG9tLTAgdy0xLzMgcm91bmRlZC0yeGxcIlxuICAgICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXtzcHJpbmd9XG4gICAgICAgICAgICBhbmltYXRlPXt7IFxuICAgICAgICAgICAgICB4OiBtb2RlID09PSBcIm9uZVwiIFxuICAgICAgICAgICAgICAgICAgPyAnMCUnIFxuICAgICAgICAgICAgICAgICAgOiBtb2RlID09PSBcInR3b1wiXG4gICAgICAgICAgICAgICAgICAgICAgPyAnMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICcyMDAlJyxcbiAgICAgICAgICAgIH19IFxuICAgICAgICAgID48L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTd2l0Y2goXCJvbmVcIil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGVkLW1vZGUgZmxleC0xIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHotMTBcIlxuICAgICAgICAgICAgICA+QnVnPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTd2l0Y2goXCJ0d29cIil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGVkLW1vZGUgZmxleC0xIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHotMTBcIlxuICAgICAgICAgICAgPkV4cGxhaW48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVN3aXRjaChcInRocmVlXCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RlZC1tb2RlIGZsZXgtMSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciB6LTEwXCJcbiAgICAgICAgICAgID5SZWZyYWN0b3I8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJvbXB0XCI+PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgbmFtZT1cInByb21wdFwiIFxuICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHA+e2lucHV0fTwvcD5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0LWJ0blwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1ibHVlLTcwMFwiPkhpPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInJlc3VsdC10ZXh0XCI+XG4gICAgICAgICAge21lc31cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsImluZGV4IiwibWVzIiwic2V0TWVzIiwiaW5wdXQiLCJzZXRJbnB1dCIsImhhbmRsZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvbXB0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJqc29uIiwicHJvbXB0ZWRfZGF0YSIsImVycm9yIiwic2lkZWJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVTaWRlYmFyIiwibW9kZSIsInNldE1vZGUiLCJ0b2dnbGVTd2l0Y2giLCJhY3RpdmVUYWIiLCJzcHJpbmciLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInN0cm9rZSIsImZpbGwiLCJzdHJva2Utd2lkdGgiLCJ2aWV3Qm94Iiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJoZWlnaHQiLCJ3aWR0aCIsInhtbG5zIiwicmVjdCIsIngiLCJ5IiwicngiLCJyeSIsImxpbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImRhdGEtaXNPbiIsImxheW91dCIsInRyYW5zaXRpb24iLCJhbmltYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});