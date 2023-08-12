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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ButtonIcon */ \"./components/ButtonIcon.tsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/IconSidebar */ \"./icons/IconSidebar.tsx\");\n/* harmony import */ var _icons_IconArrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/icons/IconArrow */ \"./icons/IconArrow.tsx\");\n/* harmony import */ var _icons_IconModeBug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/icons/IconModeBug */ \"./icons/IconModeBug.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction index() {\n    _s();\n    const [mes, setMes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading\");\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInput = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:8080/api/prompt\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    prompt: input\n                })\n            });\n            console.log(\"successfully posted data\");\n            // server respnonse\n            const data = await response.json();\n            setMes(data.prompted_data);\n            console.log(\"successfully received data:\", mes);\n        } catch (error) {\n            console.error(\"Failed to send Form ->\", error);\n        }\n    };\n    // sidebar settings\n    const [sidebar, setSideBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleSidebar = ()=>{\n        setSideBar(!sidebar);\n    };\n    // all mode settings:\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"one\");\n    const toggleSwitch = (activeTab)=>{\n        setMode(activeTab);\n    };\n    const spring = {\n        type: \"spring\",\n        stiffness: 700,\n        damping: 30\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-screen bg-white flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sidebar: sidebar,\n                toggleSidebar: toggleSidebar\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"button-container\",\n                className: \"\".concat(sidebar ? \"hidden\" : \"visible\", \" absolute top-4 left-4\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    icon: _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    text: \"Open sidebar\",\n                    onClick: toggleSidebar\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: \"w-full bg-white flex flex-col items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"mode-container\",\n                        className: \"w-full flex flex-col justify-between items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"mode-switch\",\n                            \"data-isOn\": mode,\n                            className: \"relative mt-8 w-1/3 h-14 flex bg-light-green cursor-pointer rounded-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                    className: \"absolute w-1/3 h-full p-1\",\n                                    layout: true,\n                                    transition: spring,\n                                    animate: {\n                                        x: mode === \"one\" ? \"0%\" : mode === \"two\" ? \"100%\" : \"200%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"white-ball\",\n                                        className: \"w-full h-full bg-white rounded-2xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>toggleSwitch(\"one\"),\n                                    className: \"selected-mode flex-1 flex flex-col justify-center items-center z-10\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconModeBug__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 24\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: \"Bug\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>toggleSwitch(\"two\"),\n                                    className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconModeBug__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: \"Explain\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>toggleSwitch(\"three\"),\n                                    className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconModeBug__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: \"Refractor\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 112,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"prompt-container\",\n                        className: \"mb-12 w-full flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            id: \"prompt-bar\",\n                            className: \"bg-light-green px-6 py-4 w-3/5 flex justify-between items-center rounded-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"prompt\",\n                                    id: \"prompt-block\",\n                                    className: \"bg-transparent w-full min-h-[16px] max-h-[200px] h-6 outline-none resize-none\",\n                                    placeholder: \"Enter a prompt ...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"h-4 w-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconArrow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"fuoqoAxUkv8Q//Mcmf6hMA5wTRM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7a0NBSVgsOERBQUNBO3dCQUFJRSxJQUFHO3dCQUFtQkQsV0FBVTtrQ0FDbkMsNEVBQUNVOzRCQUFLVCxJQUFHOzRCQUFhRCxXQUFVOzs4Q0FDOUIsOERBQUNXO29DQUNDQyxNQUFLO29DQUNMWCxJQUFHO29DQUNIRCxXQUFVO29DQUNWYSxhQUFZOzs7Ozs7OENBRWQsOERBQUNDO29DQUNDZCxXQUFVOzhDQUVWLDRFQUFDdkMsd0RBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ3hCO0dBdkpTRTtBQXlKVCwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmltcG9ydCBCdXR0b25JY29uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uSWNvbidcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhcidcbmltcG9ydCBJY29uU2lkZWJhciBmcm9tICdAL2ljb25zL0ljb25TaWRlYmFyJ1xuaW1wb3J0IEljb25BcnJvdyBmcm9tICdAL2ljb25zL0ljb25BcnJvdydcbmltcG9ydCBJY29uTW9kZUJ1ZyBmcm9tICdAL2ljb25zL0ljb25Nb2RlQnVnJ1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcblxuICBjb25zdCBbbWVzLCBzZXRNZXNdID0gdXNlU3RhdGUoXCJMb2FkaW5nXCIpXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIilcblxuICBjb25zdCBoYW5kbGVJbnB1dCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcHJvbXB0XCIsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJvbXB0OiBpbnB1dCB9KVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgcG9zdGVkIGRhdGEnKVxuXG4gICAgICAvLyBzZXJ2ZXIgcmVzcG5vbnNlXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBzZXRNZXMoZGF0YS5wcm9tcHRlZF9kYXRhKVxuICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NmdWxseSByZWNlaXZlZCBkYXRhOicsIG1lcylcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgRm9ybSAtPlwiLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBzaWRlYmFyIHNldHRpbmdzXG4gIGNvbnN0IFtzaWRlYmFyLCBzZXRTaWRlQmFyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXG5cbiAgY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcbiAgICBzZXRTaWRlQmFyKCFzaWRlYmFyKVxuICB9XG5cblxuXG5cbiAgLy8gYWxsIG1vZGUgc2V0dGluZ3M6XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJvbmVcIilcblxuICBjb25zdCB0b2dnbGVTd2l0Y2ggPSAoYWN0aXZlVGFiOiBzdHJpbmcpID0+IHtcbiAgICBzZXRNb2RlKGFjdGl2ZVRhYilcbiAgfVxuXG5cbiAgY29uc3Qgc3ByaW5nID0ge1xuICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgc3RpZmZuZXNzOiA3MDAsXG4gICAgZGFtcGluZzogMzBcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLXNjcmVlbiBiZy13aGl0ZSBmbGV4XCI+XG4gICAgICA8U2lkZWJhciBzaWRlYmFyPXtzaWRlYmFyfSB0b2dnbGVTaWRlYmFyPXt0b2dnbGVTaWRlYmFyfS8+XG4gICAgICA8ZGl2IGlkPVwiYnV0dG9uLWNvbnRhaW5lclwiIGNsYXNzTmFtZT17YCR7c2lkZWJhciA/ICdoaWRkZW4nIDogJ3Zpc2libGUnfSBhYnNvbHV0ZSB0b3AtNCBsZWZ0LTRgfT5cbiAgICAgICAgPEJ1dHRvbkljb24gaWNvbj17SWNvblNpZGViYXJ9IHRleHQ9XCJPcGVuIHNpZGViYXJcIiBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGlkPVwibW9kZS1jb250YWluZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cIm1vZGUtc3dpdGNoXCIgZGF0YS1pc09uPXttb2RlfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC04IHctMS8zIGgtMTQgZmxleCBiZy1saWdodC1ncmVlbiBjdXJzb3ItcG9pbnRlciByb3VuZGVkLTJ4bFwiPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTEvMyBoLWZ1bGwgcC0xXCJcbiAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgdHJhbnNpdGlvbj17c3ByaW5nfVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBcbiAgICAgICAgICAgICAgeDogbW9kZSA9PT0gXCJvbmVcIiBcbiAgICAgICAgICAgICAgICAgID8gJzAlJyBcbiAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gXCJ0d29cIlxuICAgICAgICAgICAgICAgICAgICAgID8gJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnMjAwJScsXG4gICAgICAgICAgICB9fSBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGlkPVwid2hpdGUtYmFsbFwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGxcIj48L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTd2l0Y2goXCJvbmVcIil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGVkLW1vZGUgZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHotMTBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+PEljb25Nb2RlQnVnIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PkJ1ZzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVN3aXRjaChcInR3b1wiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0ZWQtbW9kZSBmbGV4LTEgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgei0xMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uTW9kZUJ1ZyAvPlxuICAgICAgICAgICAgICA8ZGl2PkV4cGxhaW48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlU3dpdGNoKFwidGhyZWVcIil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGVkLW1vZGUgZmxleC0xIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHotMTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbk1vZGVCdWcgLz5cbiAgICAgICAgICAgICAgPGRpdj5SZWZyYWN0b3I8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInByb21wdC1jb250YWluZXJcIiBjbGFzc05hbWU9XCJtYi0xMiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxmb3JtIGlkPVwicHJvbXB0LWJhclwiIGNsYXNzTmFtZT1cImJnLWxpZ2h0LWdyZWVuIHB4LTYgcHktNCB3LTMvNSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcm91bmRlZC0yeGxcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgbmFtZT1cInByb21wdFwiIFxuICAgICAgICAgICAgICBpZD1cInByb21wdC1ibG9ja1wiIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCB3LWZ1bGwgbWluLWgtWzE2cHhdIG1heC1oLVsyMDBweF0gaC02IG91dGxpbmUtbm9uZSByZXNpemUtbm9uZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBwcm9tcHQgLi4uXCJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uQXJyb3cgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJvbXB0XCI+PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgbmFtZT1cInByb21wdFwiIFxuICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHA+e2lucHV0fTwvcD5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0LWJ0blwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1ibHVlLTcwMFwiPkhpPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInJlc3VsdC10ZXh0XCI+XG4gICAgICAgICAge21lc31cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkJ1dHRvbkljb24iLCJTaWRlYmFyIiwiSWNvblNpZGViYXIiLCJJY29uQXJyb3ciLCJJY29uTW9kZUJ1ZyIsImluZGV4IiwibWVzIiwic2V0TWVzIiwiaW5wdXQiLCJzZXRJbnB1dCIsImhhbmRsZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvbXB0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJqc29uIiwicHJvbXB0ZWRfZGF0YSIsImVycm9yIiwic2lkZWJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVTaWRlYmFyIiwibW9kZSIsInNldE1vZGUiLCJ0b2dnbGVTd2l0Y2giLCJhY3RpdmVUYWIiLCJzcHJpbmciLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaWNvbiIsInRleHQiLCJvbkNsaWNrIiwiZGF0YS1pc09uIiwibGF5b3V0IiwidHJhbnNpdGlvbiIsImFuaW1hdGUiLCJ4IiwiZm9ybSIsInRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});