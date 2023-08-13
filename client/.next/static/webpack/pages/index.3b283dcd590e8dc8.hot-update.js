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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ButtonIcon */ \"./components/ButtonIcon.tsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/IconSidebar */ \"./icons/IconSidebar.tsx\");\n/* harmony import */ var _icons_IconArrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/icons/IconArrow */ \"./icons/IconArrow.tsx\");\n/* harmony import */ var _icons_IconInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/icons/IconInfo */ \"./icons/IconInfo.tsx\");\n/* harmony import */ var _icons_IconModeBug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/icons/IconModeBug */ \"./icons/IconModeBug.tsx\");\n/* harmony import */ var _icons_iconModeExplain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/icons/iconModeExplain */ \"./icons/iconModeExplain.tsx\");\n/* harmony import */ var _icons_IconModeRefractor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/icons/IconModeRefractor */ \"./icons/IconModeRefractor.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction index() {\n    _s();\n    const [mes, setMes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading\");\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInput = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:8080/api/prompt\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    prompt: input\n                })\n            });\n            console.log(\"successfully posted data\");\n            // server respnonse\n            const data = await response.json();\n            setMes(data.prompted_data);\n            console.log(\"successfully received data:\", mes);\n        } catch (error) {\n            console.error(\"Failed to send Form ->\", error);\n        }\n    };\n    // sidebar settings\n    const [sidebar, setSideBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleSidebar = ()=>{\n        setSideBar(!sidebar);\n    };\n    // all mode settings:\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"one\");\n    const toggleSwitch = (activeTab)=>{\n        setMode(activeTab);\n    };\n    const spring = {\n        type: \"spring\",\n        stiffness: 700,\n        damping: 30\n    };\n    // info menu\n    const [infoMenu, setInfoMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleInfoMenu = ()=>{\n        setInfoMenu(!infoMenu);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-screen bg-white flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sidebar: sidebar,\n                toggleSidebar: toggleSidebar\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"button-container\",\n                className: \"\".concat(sidebar ? \"hidden\" : \"visible\", \" absolute top-4 left-4\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    icon: _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    text: \"Open sidebar\",\n                    onClick: toggleSidebar\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: \"w-full bg-white flex flex-col items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"info-menu\",\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"button-container\",\n                        className: \"absolute top-4 right-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            icon: _icons_IconInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            text: \"Click for more Info\",\n                            onClick: toggleInfo\n                        }, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"mode-container\",\n                        className: \"w-full flex flex-col justify-between items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"mode-switch\",\n                            \"data-isOn\": mode,\n                            className: \"relative mt-8 w-1/3 h-14 flex bg-light-green cursor-pointer rounded-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {\n                                    className: \"absolute w-1/3 h-full p-1\",\n                                    layout: true,\n                                    transition: spring,\n                                    animate: {\n                                        x: mode === \"one\" ? \"0%\" : mode === \"two\" ? \"100%\" : \"200%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"white-ball\",\n                                        className: \"w-full h-full bg-white rounded-2xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>toggleSwitch(\"one\"),\n                                    className: \"selected-mode flex-1 flex z-10 justify-center items-center gap-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconModeBug__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 22\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: \"Bug\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>toggleSwitch(\"two\"),\n                                    className: \"selected-mode flex-1 flex z-10 justify-center items-center gap-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_iconModeExplain__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                                lineNumber: 117,\n                                                columnNumber: 20\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 117,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: \"Explain\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>toggleSwitch(\"three\"),\n                                    className: \"selected-mode flex-1 flex z-10 justify-center items-center gap-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconModeRefractor__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                                lineNumber: 124,\n                                                columnNumber: 20\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: \"Refractor\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 125,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"prompt-container\",\n                        className: \"mb-12 w-full flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            id: \"prompt-bar\",\n                            className: \"bg-light-green px-6 py-4 w-3/5 flex justify-between items-center rounded-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"prompt\",\n                                    id: \"prompt-block\",\n                                    className: \"bg-transparent w-full min-h-[16px] max-h-[200px] h-6 outline-none resize-none\",\n                                    placeholder: \"Enter a prompt ...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"h-4 w-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconArrow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"AuNZ5irgXTZIdbsfRvAxEPLaFaA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzFDLDBEQUFXQTs7Ozs7Ozs7OztzREFDakIsOERBQUMwQztzREFBSTs7Ozs7Ozs7Ozs7OzhDQUVULDhEQUFDQTtvQ0FDQ0ssU0FBUyxJQUFNZCxhQUFhO29DQUM1QlUsV0FBVTs7c0RBRVYsOERBQUNEO3NEQUFJLDRFQUFDekMsOERBQWVBOzs7Ozs7Ozs7O3NEQUNyQiw4REFBQ3lDO3NEQUFJOzs7Ozs7Ozs7Ozs7OENBRVAsOERBQUNBO29DQUNDSyxTQUFTLElBQU1kLGFBQWE7b0NBQzVCVSxXQUFVOztzREFFViw4REFBQ0Q7c0RBQUksNEVBQUN4QyxnRUFBaUJBOzs7Ozs7Ozs7O3NEQUN2Qiw4REFBQ3dDO3NEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJWCw4REFBQ0E7d0JBQUlFLElBQUc7d0JBQW1CRCxXQUFVO2tDQUNuQyw0RUFBQ1c7NEJBQUtWLElBQUc7NEJBQWFELFdBQVU7OzhDQUM5Qiw4REFBQ1k7b0NBQ0NDLE1BQUs7b0NBQ0xaLElBQUc7b0NBQ0hELFdBQVU7b0NBQ1ZjLGFBQVk7Ozs7Ozs4Q0FFZCw4REFBQ0M7b0NBQ0NmLFdBQVU7OENBRVYsNEVBQUM3Qyx3REFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDeEI7R0FqS1NLO0FBbUtULCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuaW1wb3J0IEJ1dHRvbkljb24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25JY29uJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlYmFyJ1xuaW1wb3J0IEljb25TaWRlYmFyIGZyb20gJ0AvaWNvbnMvSWNvblNpZGViYXInXG5pbXBvcnQgSWNvbkFycm93IGZyb20gJ0AvaWNvbnMvSWNvbkFycm93J1xuaW1wb3J0IEljb25JbmZvIGZyb20gJ0AvaWNvbnMvSWNvbkluZm8nXG5pbXBvcnQgSWNvbk1vZGVCdWcgZnJvbSAnQC9pY29ucy9JY29uTW9kZUJ1ZydcbmltcG9ydCBJY29uTW9kZUV4cGxhaW4gZnJvbSAnQC9pY29ucy9pY29uTW9kZUV4cGxhaW4nXG5pbXBvcnQgSWNvbk1vZGVSZWZyYWN0b3IgZnJvbSAnQC9pY29ucy9JY29uTW9kZVJlZnJhY3RvcidcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG5cbiAgY29uc3QgW21lcywgc2V0TWVzXSA9IHVzZVN0YXRlKFwiTG9hZGluZ1wiKVxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Byb21wdFwiLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByb21wdDogaW5wdXQgfSlcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IHBvc3RlZCBkYXRhJylcblxuICAgICAgLy8gc2VydmVyIHJlc3Bub25zZVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgc2V0TWVzKGRhdGEucHJvbXB0ZWRfZGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgcmVjZWl2ZWQgZGF0YTonLCBtZXMpXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIEZvcm0gLT5cIiwgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLy8gc2lkZWJhciBzZXR0aW5nc1xuICBjb25zdCBbc2lkZWJhciwgc2V0U2lkZUJhcl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgc2V0U2lkZUJhcighc2lkZWJhcilcbiAgfVxuXG5cblxuXG4gIC8vIGFsbCBtb2RlIHNldHRpbmdzOlxuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwib25lXCIpXG5cbiAgY29uc3QgdG9nZ2xlU3dpdGNoID0gKGFjdGl2ZVRhYjogc3RyaW5nKSA9PiB7XG4gICAgc2V0TW9kZShhY3RpdmVUYWIpXG4gIH1cblxuXG4gIGNvbnN0IHNwcmluZyA9IHtcbiAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgIHN0aWZmbmVzczogNzAwLFxuICAgIGRhbXBpbmc6IDMwXG4gIH1cblxuXG4gIC8vIGluZm8gbWVudVxuXG4gIGNvbnN0IFtpbmZvTWVudSwgc2V0SW5mb01lbnVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdG9nZ2xlSW5mb01lbnUgPSAoKSA9PiB7XG4gICAgc2V0SW5mb01lbnUoIWluZm9NZW51KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLXNjcmVlbiBiZy13aGl0ZSBmbGV4XCI+XG4gICAgICA8U2lkZWJhciBzaWRlYmFyPXtzaWRlYmFyfSB0b2dnbGVTaWRlYmFyPXt0b2dnbGVTaWRlYmFyfS8+XG4gICAgICA8ZGl2IGlkPVwiYnV0dG9uLWNvbnRhaW5lclwiIGNsYXNzTmFtZT17YCR7c2lkZWJhciA/ICdoaWRkZW4nIDogJ3Zpc2libGUnfSBhYnNvbHV0ZSB0b3AtNCBsZWZ0LTRgfT5cbiAgICAgICAgPEJ1dHRvbkljb24gaWNvbj17SWNvblNpZGViYXJ9IHRleHQ9XCJPcGVuIHNpZGViYXJcIiBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGlkPVwiaW5mby1tZW51XCIgY2xhc3NOYW1lPVwiXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJidXR0b24tY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNFwiPlxuICAgICAgICAgIDxCdXR0b25JY29uIGljb249e0ljb25JbmZvfSB0ZXh0PVwiQ2xpY2sgZm9yIG1vcmUgSW5mb1wiIG9uQ2xpY2s9e3RvZ2dsZUluZm99Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJtb2RlLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwibW9kZS1zd2l0Y2hcIiBkYXRhLWlzT249e21vZGV9IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTggdy0xLzMgaC0xNCBmbGV4IGJnLWxpZ2h0LWdyZWVuIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtMnhsXCI+XG4gICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctMS8zIGgtZnVsbCBwLTFcIlxuICAgICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXtzcHJpbmd9XG4gICAgICAgICAgICBhbmltYXRlPXt7IFxuICAgICAgICAgICAgICB4OiBtb2RlID09PSBcIm9uZVwiIFxuICAgICAgICAgICAgICAgICAgPyAnMCUnIFxuICAgICAgICAgICAgICAgICAgOiBtb2RlID09PSBcInR3b1wiXG4gICAgICAgICAgICAgICAgICAgICAgPyAnMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICcyMDAlJyxcbiAgICAgICAgICAgIH19IFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aGl0ZS1iYWxsXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bFwiPjwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVN3aXRjaChcIm9uZVwiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0ZWQtbW9kZSBmbGV4LTEgZmxleCB6LTEwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PjxJY29uTW9kZUJ1ZyAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+QnVnPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlU3dpdGNoKFwidHdvXCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RlZC1tb2RlIGZsZXgtMSBmbGV4IHotMTAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj48SWNvbk1vZGVFeHBsYWluIC8+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+RXhwbGFpbjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTd2l0Y2goXCJ0aHJlZVwiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0ZWQtbW9kZSBmbGV4LTEgZmxleCB6LTEwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+PEljb25Nb2RlUmVmcmFjdG9yIC8+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+UmVmcmFjdG9yPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwcm9tcHQtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwibWItMTIgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8Zm9ybSBpZD1cInByb21wdC1iYXJcIiBjbGFzc05hbWU9XCJiZy1saWdodC1ncmVlbiBweC02IHB5LTQgdy0zLzUgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHJvdW5kZWQtMnhsXCI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgICAgIG5hbWU9XCJwcm9tcHRcIiBcbiAgICAgICAgICAgICAgaWQ9XCJwcm9tcHQtYmxvY2tcIiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdy1mdWxsIG1pbi1oLVsxNnB4XSBtYXgtaC1bMjAwcHhdIGgtNiBvdXRsaW5lLW5vbmUgcmVzaXplLW5vbmVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgcHJvbXB0IC4uLlwiXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbkFycm93IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb21wdFwiPjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgIG5hbWU9XCJwcm9tcHRcIiBcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwPntpbnB1dH08L3A+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdC1idG5cIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtYmx1ZS03MDBcIj5IaTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXN1bHQtdGV4dFwiPlxuICAgICAgICAgIHttZXN9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJCdXR0b25JY29uIiwiU2lkZWJhciIsIkljb25TaWRlYmFyIiwiSWNvbkFycm93IiwiSWNvbkluZm8iLCJJY29uTW9kZUJ1ZyIsIkljb25Nb2RlRXhwbGFpbiIsIkljb25Nb2RlUmVmcmFjdG9yIiwiaW5kZXgiLCJtZXMiLCJzZXRNZXMiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9tcHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImpzb24iLCJwcm9tcHRlZF9kYXRhIiwiZXJyb3IiLCJzaWRlYmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZVNpZGViYXIiLCJtb2RlIiwic2V0TW9kZSIsInRvZ2dsZVN3aXRjaCIsImFjdGl2ZVRhYiIsInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiaW5mb01lbnUiLCJzZXRJbmZvTWVudSIsInRvZ2dsZUluZm9NZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJpY29uIiwidGV4dCIsIm9uQ2xpY2siLCJ0b2dnbGVJbmZvIiwiZGF0YS1pc09uIiwibGF5b3V0IiwidHJhbnNpdGlvbiIsImFuaW1hdGUiLCJ4IiwiZm9ybSIsInRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});