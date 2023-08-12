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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ButtonIcon */ \"./components/ButtonIcon.tsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/IconSidebar */ \"./icons/IconSidebar.tsx\");\n/* harmony import */ var _icons_IconArrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/icons/IconArrow */ \"./icons/IconArrow.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction index() {\n    _s();\n    const [mes, setMes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading\");\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInput = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:8080/api/prompt\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    prompt: input\n                })\n            });\n            console.log(\"successfully posted data\");\n            // server respnonse\n            const data = await response.json();\n            setMes(data.prompted_data);\n            console.log(\"successfully received data:\", mes);\n        } catch (error) {\n            console.error(\"Failed to send Form ->\", error);\n        }\n    };\n    // sidebar settings\n    const [sidebar, setSideBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleSidebar = ()=>{\n        setSideBar(!sidebar);\n    };\n    // all mode settings:\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"one\");\n    const toggleSwitch = (activeTab)=>{\n        setMode(activeTab);\n    };\n    const spring = {\n        type: \"spring\",\n        stiffness: 700,\n        damping: 30\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-screen bg-white flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sidebar: sidebar,\n                toggleSidebar: toggleSidebar\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"button-container\",\n                className: \"\".concat(sidebar ? \"hidden\" : \"visible\", \" absolute top-4 left-4\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    icon: _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    text: \"Open sidebar\",\n                    onClick: toggleSidebar\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: \"w-full bg-white flex flex-col items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"mode-container\",\n                        className: \"w-full flex flex-col justify-between items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"mode-switch\",\n                            \"data-isOn\": mode,\n                            className: \"relative mt-8 w-1/3 h-14 flex bg-light-green cursor-pointer rounded-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                    className: \"absolute w-1/3 h-full p-1\",\n                                    layout: true,\n                                    transition: spring,\n                                    animate: {\n                                        x: mode === \"one\" ? \"0%\" : mode === \"two\" ? \"100%\" : \"200%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"white-ball\",\n                                        className: \"w-full h-full bg-white rounded-2xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>toggleSwitch(\"one\"),\n                                    className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                    children: \"Bug\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>toggleSwitch(\"two\"),\n                                    className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                    children: \"Explain\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>toggleSwitch(\"three\"),\n                                    className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                    children: \"Refractor\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"prompt-container\",\n                        className: \"mb-12 w-full flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            id: \"prompt-bar\",\n                            className: \"bg-light-green px-6 py-6 w-3/5 h-14 flex justify-between items-center rounded-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"prompt\",\n                                    id: \"prompt-block\",\n                                    className: \"bg-transparent w-full h-full max-h-[200px] resize-none\",\n                                    placeholder: \"Enter a prompt ...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"h-4 w-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconArrow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"fuoqoAxUkv8Q//Mcmf6hMA5wTRM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVYsNEVBQUN0Qyx3REFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDeEI7R0E1SVNDO0FBOElULCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuaW1wb3J0IEJ1dHRvbkljb24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25JY29uJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlYmFyJ1xuaW1wb3J0IEljb25TaWRlYmFyIGZyb20gJ0AvaWNvbnMvSWNvblNpZGViYXInXG5pbXBvcnQgSWNvbkFycm93IGZyb20gJ0AvaWNvbnMvSWNvbkFycm93J1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcblxuICBjb25zdCBbbWVzLCBzZXRNZXNdID0gdXNlU3RhdGUoXCJMb2FkaW5nXCIpXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIilcblxuICBjb25zdCBoYW5kbGVJbnB1dCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcHJvbXB0XCIsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJvbXB0OiBpbnB1dCB9KVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgcG9zdGVkIGRhdGEnKVxuXG4gICAgICAvLyBzZXJ2ZXIgcmVzcG5vbnNlXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBzZXRNZXMoZGF0YS5wcm9tcHRlZF9kYXRhKVxuICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NmdWxseSByZWNlaXZlZCBkYXRhOicsIG1lcylcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgRm9ybSAtPlwiLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBzaWRlYmFyIHNldHRpbmdzXG4gIGNvbnN0IFtzaWRlYmFyLCBzZXRTaWRlQmFyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXG5cbiAgY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcbiAgICBzZXRTaWRlQmFyKCFzaWRlYmFyKVxuICB9XG5cblxuXG5cbiAgLy8gYWxsIG1vZGUgc2V0dGluZ3M6XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJvbmVcIilcblxuICBjb25zdCB0b2dnbGVTd2l0Y2ggPSAoYWN0aXZlVGFiOiBzdHJpbmcpID0+IHtcbiAgICBzZXRNb2RlKGFjdGl2ZVRhYilcbiAgfVxuXG5cbiAgY29uc3Qgc3ByaW5nID0ge1xuICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgc3RpZmZuZXNzOiA3MDAsXG4gICAgZGFtcGluZzogMzBcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLXNjcmVlbiBiZy13aGl0ZSBmbGV4XCI+XG4gICAgICA8U2lkZWJhciBzaWRlYmFyPXtzaWRlYmFyfSB0b2dnbGVTaWRlYmFyPXt0b2dnbGVTaWRlYmFyfS8+XG4gICAgICA8ZGl2IGlkPVwiYnV0dG9uLWNvbnRhaW5lclwiIGNsYXNzTmFtZT17YCR7c2lkZWJhciA/ICdoaWRkZW4nIDogJ3Zpc2libGUnfSBhYnNvbHV0ZSB0b3AtNCBsZWZ0LTRgfT5cbiAgICAgICAgPEJ1dHRvbkljb24gaWNvbj17SWNvblNpZGViYXJ9IHRleHQ9XCJPcGVuIHNpZGViYXJcIiBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGlkPVwibW9kZS1jb250YWluZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cIm1vZGUtc3dpdGNoXCIgZGF0YS1pc09uPXttb2RlfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC04IHctMS8zIGgtMTQgZmxleCBiZy1saWdodC1ncmVlbiBjdXJzb3ItcG9pbnRlciByb3VuZGVkLTJ4bFwiPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTEvMyBoLWZ1bGwgcC0xXCJcbiAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgdHJhbnNpdGlvbj17c3ByaW5nfVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBcbiAgICAgICAgICAgICAgeDogbW9kZSA9PT0gXCJvbmVcIiBcbiAgICAgICAgICAgICAgICAgID8gJzAlJyBcbiAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gXCJ0d29cIlxuICAgICAgICAgICAgICAgICAgICAgID8gJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnMjAwJScsXG4gICAgICAgICAgICB9fSBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGlkPVwid2hpdGUtYmFsbFwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGxcIj48L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTd2l0Y2goXCJvbmVcIil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGVkLW1vZGUgZmxleC0xIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHotMTBcIlxuICAgICAgICAgICAgICA+QnVnPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTd2l0Y2goXCJ0d29cIil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGVkLW1vZGUgZmxleC0xIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHotMTBcIlxuICAgICAgICAgICAgPkV4cGxhaW48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVN3aXRjaChcInRocmVlXCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RlZC1tb2RlIGZsZXgtMSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciB6LTEwXCJcbiAgICAgICAgICAgID5SZWZyYWN0b3I8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwcm9tcHQtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwibWItMTIgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8Zm9ybSBpZD1cInByb21wdC1iYXJcIiBjbGFzc05hbWU9XCJiZy1saWdodC1ncmVlbiBweC02IHB5LTYgdy0zLzUgaC0xNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcm91bmRlZC0yeGxcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgbmFtZT1cInByb21wdFwiIFxuICAgICAgICAgICAgICBpZD1cInByb21wdC1ibG9ja1wiIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCB3LWZ1bGwgaC1mdWxsIG1heC1oLVsyMDBweF0gcmVzaXplLW5vbmVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgcHJvbXB0IC4uLlwiXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbkFycm93IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb21wdFwiPjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgIG5hbWU9XCJwcm9tcHRcIiBcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwPntpbnB1dH08L3A+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdC1idG5cIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtYmx1ZS03MDBcIj5IaTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXN1bHQtdGV4dFwiPlxuICAgICAgICAgIHttZXN9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJCdXR0b25JY29uIiwiU2lkZWJhciIsIkljb25TaWRlYmFyIiwiSWNvbkFycm93IiwiaW5kZXgiLCJtZXMiLCJzZXRNZXMiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9tcHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImpzb24iLCJwcm9tcHRlZF9kYXRhIiwiZXJyb3IiLCJzaWRlYmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZVNpZGViYXIiLCJtb2RlIiwic2V0TW9kZSIsInRvZ2dsZVN3aXRjaCIsImFjdGl2ZVRhYiIsInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJpY29uIiwidGV4dCIsIm9uQ2xpY2siLCJkYXRhLWlzT24iLCJsYXlvdXQiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsIngiLCJmb3JtIiwidGV4dGFyZWEiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});