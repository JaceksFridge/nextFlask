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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ButtonIcon */ \"./components/ButtonIcon.tsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/IconSidebar */ \"./icons/IconSidebar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction index() {\n    _s();\n    const [mes, setMes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading\");\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInput = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:8080/api/prompt\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    prompt: input\n                })\n            });\n            console.log(\"successfully posted data\");\n            // server respnonse\n            const data = await response.json();\n            setMes(data.prompted_data);\n            console.log(\"successfully received data:\", mes);\n        } catch (error) {\n            console.error(\"Failed to send Form ->\", error);\n        }\n    };\n    // sidebar settings\n    const [sidebar, setSideBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleSidebar = ()=>{\n        setSideBar(!sidebar);\n    };\n    // all mode settings:\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"one\");\n    const toggleSwitch = (activeTab)=>{\n        setMode(activeTab);\n    };\n    const spring = {\n        type: \"spring\",\n        stiffness: 700,\n        damping: 30\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-screen bg-white flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sidebar: sidebar,\n                toggleSidebar: toggleSidebar\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"button-container\",\n                className: \"\".concat(sidebar ? \"hidden\" : \"visible\", \" absolute top-4 left-4\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    icon: _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    text: \"Open sidebar\",\n                    onClick: toggleSidebar\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: \"w-full bg-white flex flex-col items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"mode-container\",\n                        className: \"w-full flex flex-col justify-between items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"mode-switch\",\n                            \"data-isOn\": mode,\n                            className: \"relative mt-8 w-1/3 h-14 flex bg-light-green cursor-pointer rounded-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                    className: \"absolute w-1/3 h-full p-1\",\n                                    layout: true,\n                                    transition: spring,\n                                    animate: {\n                                        x: mode === \"one\" ? \"0%\" : mode === \"two\" ? \"100%\" : \"200%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"white-ball\",\n                                        className: \"w-full h-full bg-white rounded-2xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>toggleSwitch(\"one\"),\n                                    className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                    children: \"Bug\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>toggleSwitch(\"two\"),\n                                    className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                    children: \"Explain\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>toggleSwitch(\"three\"),\n                                    className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                    children: \"Refractor\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"prompt-container\",\n                        className: \"mb-8 w-full flex flex-col items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"prompt-bar\",\n                            className: \"bg-light-green w-1/2 h-14 rounded-2xl\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"fuoqoAxUkv8Q//Mcmf6hMA5wTRM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuaW1wb3J0IEJ1dHRvbkljb24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25JY29uJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlYmFyJ1xuaW1wb3J0IEljb25TaWRlYmFyIGZyb20gJ0AvaWNvbnMvSWNvblNpZGViYXInXG5cblxuZnVuY3Rpb24gaW5kZXgoKSB7XG5cbiAgY29uc3QgW21lcywgc2V0TWVzXSA9IHVzZVN0YXRlKFwiTG9hZGluZ1wiKVxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Byb21wdFwiLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByb21wdDogaW5wdXQgfSlcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IHBvc3RlZCBkYXRhJylcblxuICAgICAgLy8gc2VydmVyIHJlc3Bub25zZVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgc2V0TWVzKGRhdGEucHJvbXB0ZWRfZGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgcmVjZWl2ZWQgZGF0YTonLCBtZXMpXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIEZvcm0gLT5cIiwgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLy8gc2lkZWJhciBzZXR0aW5nc1xuICBjb25zdCBbc2lkZWJhciwgc2V0U2lkZUJhcl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgc2V0U2lkZUJhcighc2lkZWJhcilcbiAgfVxuXG5cblxuXG4gIC8vIGFsbCBtb2RlIHNldHRpbmdzOlxuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwib25lXCIpXG5cbiAgY29uc3QgdG9nZ2xlU3dpdGNoID0gKGFjdGl2ZVRhYjogc3RyaW5nKSA9PiB7XG4gICAgc2V0TW9kZShhY3RpdmVUYWIpXG4gIH1cblxuXG4gIGNvbnN0IHNwcmluZyA9IHtcbiAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgIHN0aWZmbmVzczogNzAwLFxuICAgIGRhbXBpbmc6IDMwXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1zY3JlZW4gYmctd2hpdGUgZmxleFwiPlxuICAgICAgPFNpZGViYXIgc2lkZWJhcj17c2lkZWJhcn0gdG9nZ2xlU2lkZWJhcj17dG9nZ2xlU2lkZWJhcn0vPlxuICAgICAgPGRpdiBpZD1cImJ1dHRvbi1jb250YWluZXJcIiBjbGFzc05hbWU9e2Ake3NpZGViYXIgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ30gYWJzb2x1dGUgdG9wLTQgbGVmdC00YH0+XG4gICAgICAgIDxCdXR0b25JY29uIGljb249e0ljb25TaWRlYmFyfSB0ZXh0PVwiT3BlbiBzaWRlYmFyXCIgb25DbGljaz17dG9nZ2xlU2lkZWJhcn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBpZD1cIm1vZGUtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJtb2RlLXN3aXRjaFwiIGRhdGEtaXNPbj17bW9kZX0gY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtOCB3LTEvMyBoLTE0IGZsZXggYmctbGlnaHQtZ3JlZW4gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC0yeGxcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0xLzMgaC1mdWxsIHAtMVwiXG4gICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3NwcmluZ31cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgXG4gICAgICAgICAgICAgIHg6IG1vZGUgPT09IFwib25lXCIgXG4gICAgICAgICAgICAgICAgICA/ICcwJScgXG4gICAgICAgICAgICAgICAgICA6IG1vZGUgPT09IFwidHdvXCJcbiAgICAgICAgICAgICAgICAgICAgICA/ICcxMDAlJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJzIwMCUnLFxuICAgICAgICAgICAgfX0gXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBpZD1cIndoaXRlLWJhbGxcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsXCI+PC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlU3dpdGNoKFwib25lXCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RlZC1tb2RlIGZsZXgtMSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciB6LTEwXCJcbiAgICAgICAgICAgICAgPkJ1ZzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlU3dpdGNoKFwidHdvXCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RlZC1tb2RlIGZsZXgtMSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciB6LTEwXCJcbiAgICAgICAgICAgID5FeHBsYWluPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTd2l0Y2goXCJ0aHJlZVwiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0ZWQtbW9kZSBmbGV4LTEgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgei0xMFwiXG4gICAgICAgICAgICA+UmVmcmFjdG9yPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicHJvbXB0LWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cIm1iLTggdy1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cInByb21wdC1iYXJcIiBjbGFzc05hbWU9XCJiZy1saWdodC1ncmVlbiB3LTEvMiBoLTE0IHJvdW5kZWQtMnhsXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb21wdFwiPjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgIG5hbWU9XCJwcm9tcHRcIiBcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwPntpbnB1dH08L3A+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdC1idG5cIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtYmx1ZS03MDBcIj5IaTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXN1bHQtdGV4dFwiPlxuICAgICAgICAgIHttZXN9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJCdXR0b25JY29uIiwiU2lkZWJhciIsIkljb25TaWRlYmFyIiwiaW5kZXgiLCJtZXMiLCJzZXRNZXMiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9tcHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImpzb24iLCJwcm9tcHRlZF9kYXRhIiwiZXJyb3IiLCJzaWRlYmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZVNpZGViYXIiLCJtb2RlIiwic2V0TW9kZSIsInRvZ2dsZVN3aXRjaCIsImFjdGl2ZVRhYiIsInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJpY29uIiwidGV4dCIsIm9uQ2xpY2siLCJkYXRhLWlzT24iLCJsYXlvdXQiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsIngiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});