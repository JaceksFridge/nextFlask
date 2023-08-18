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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ButtonIcon */ \"./components/ButtonIcon.tsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _components_KeyModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/KeyModal */ \"./components/KeyModal.tsx\");\n/* harmony import */ var _components_AboutModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/AboutModal */ \"./components/AboutModal.tsx\");\n/* harmony import */ var _components_ModeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ModeSwitch */ \"./components/ModeSwitch.tsx\");\n/* harmony import */ var _components_MenuInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/MenuInfo */ \"./components/MenuInfo.tsx\");\n/* harmony import */ var _components_PromptForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/PromptForm */ \"./components/PromptForm.tsx\");\n/* harmony import */ var _components_Overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Overlay */ \"./components/Overlay.tsx\");\n/* harmony import */ var _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/icons/IconSidebar */ \"./icons/IconSidebar.tsx\");\n/* harmony import */ var _icons_IconInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/icons/IconInfo */ \"./icons/IconInfo.tsx\");\n/* harmony import */ var _icons_IconProfile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/icons/IconProfile */ \"./icons/IconProfile.tsx\");\n/* harmony import */ var _icons_iconPlus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/icons/iconPlus */ \"./icons/iconPlus.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction index() {\n    _s();\n    const [mes, setMes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading\");\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInput = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:8080/api/prompt\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    prompt: input\n                })\n            });\n            console.log(\"successfully posted data\");\n            // server respnonse\n            const data = await response.json();\n            setMes(data.prompted_data);\n            console.log(\"successfully received data:\", mes);\n        } catch (error) {\n            console.error(\"Failed to send Form ->\", error);\n        }\n    };\n    // Sidebar\n    const [sidebar, setSideBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleSidebar = ()=>{\n        setSideBar(!sidebar);\n    };\n    // all mode settings:\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"one\");\n    const toggleSwitch = (activeTab)=>{\n        setMode(activeTab);\n    };\n    // MenuInfo\n    const [infoMenu, setInfoMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleInfoMenu = ()=>{\n        if (true) {\n            const info = document.querySelector(\"#button-info #icon-btn\");\n            if (info) {\n                info.classList.toggle(\"bg-light-green\");\n            }\n        }\n        setInfoMenu(!infoMenu);\n    };\n    // Output\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [bin, setBin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const showBin = (e)=>{\n        setBin(!bin);\n    };\n    // Modes\n    const [modeMenu, setModeMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleModeMenu = (e)=>{\n        setModeMenu(!modeMenu);\n    };\n    const modes = {\n        \"bug\": \"icon\",\n        \"explain\": \"icon\",\n        \"refractor\": \"icon\"\n    };\n    // MenuInfo Modal\n    const [keyModal, setKeyModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [aboutModal, setAboutModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleKeyModal = ()=>{\n        setKeyModal(!keyModal);\n    };\n    const toggleAboutModal = ()=>{\n        setAboutModal(!aboutModal);\n    };\n    // Overlay\n    const [overlay, setOverlay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOverlay = ()=>{\n        setOverlay(!overlay);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-screen bg-white flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sidebar: sidebar,\n                toggleSidebar: toggleSidebar\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"button-container\",\n                className: \"\".concat(sidebar ? \"hidden\" : \"visible\", \" absolute top-4 left-4\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    icon: _icons_IconSidebar__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                    text: \"Open sidebar\",\n                    onClick: toggleSidebar\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: \"w-full bg-white flex flex-col items-center justify-between\",\n                children: [\n                    overlay ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Overlay__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 22\n                    }, this) : null,\n                    infoMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        toggleAboutModal: toggleAboutModal,\n                        toggleKeyModal: toggleKeyModal\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 23\n                    }, this) : null,\n                    keyModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KeyModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 23\n                    }, this) : null,\n                    aboutModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 25\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"button-info\",\n                        className: \"absolute top-4 right-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            icon: _icons_IconInfo__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n                            text: \"Click for more Info\",\n                            onClick: toggleInfoMenu\n                        }, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 144,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"mode-container\",\n                        className: \"w-full flex flex-col justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"mode-btn\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: toggleModeMenu,\n                                        children: \"mode\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                        lineNumber: 148,\n                                        columnNumber: 13\n                                    }, this),\n                                    modeMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"mode-menu\",\n                                        className: \"aboslute z-20 w-40 h-52\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: \"bug\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                                lineNumber: 153,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: \"explain\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                                lineNumber: 154,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: \"refractor\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                                lineNumber: 155,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                        lineNumber: 152,\n                                        columnNumber: 13\n                                    }, this) : null\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 147,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ModeSwitch__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                mode: mode,\n                                toggleSwitch: toggleSwitch\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 161,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this),\n                    output ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"output-container\",\n                        className: \"w-3/5 h-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"output-block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"question-block\",\n                                    onClick: showBin,\n                                    className: \"relative bg-light-green w-full h-14 px-6 py-4 flex items-center gap-6 rounded-2xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconProfile__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 174,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            id: \"user-question\",\n                                            children: \"How to plant a carrot?\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 175,\n                                            columnNumber: 17\n                                        }, this),\n                                        bin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            id: \"bin-icon\",\n                                            className: \"absolute right-6\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_iconPlus__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                                lineNumber: 178,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                            lineNumber: 177,\n                                            columnNumber: 19\n                                        }, this) : null\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 169,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"answer-block\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 184,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 168,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 164,\n                        columnNumber: 13\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PromptForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        input: input,\n                        handleInput: handleInput,\n                        handleSubmit: handleSubmit\n                    }, void 0, false, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 188,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"UwrVga2MyFed7ooekKURhz6pqWM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVTs7c0RBRVYsOERBQUM3RCwyREFBV0E7Ozs7O3NEQUNaLDhEQUFDbUU7NENBQUVMLElBQUc7c0RBQWdCOzs7Ozs7d0NBQ3JCbEIsb0JBQ0MsOERBQUNnQjs0Q0FBSUUsSUFBRzs0Q0FBV0QsV0FBVTtzREFDM0IsNEVBQUM1RCx3REFBUUE7Ozs7Ozs7OzttREFHWDs7Ozs7Ozs4Q0FHSiw4REFBQzJEO29DQUFJRSxJQUFHOzs7Ozs7Ozs7Ozs7Ozs7OytCQUdWO2tDQUNKLDhEQUFDbEUsOERBQVVBO3dCQUFDUyxPQUFPQTt3QkFBT0UsYUFBYUE7d0JBQWFJLGNBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQjFFO0dBMU1TVDtBQTRNVCwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQnV0dG9uSWNvbiBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uSWNvbidcbmltcG9ydCBTaWRlYmFyIGZyb20gJ0AvY29tcG9uZW50cy9zaWRlYmFyJ1xuaW1wb3J0IEtleU1vZGFsIGZyb20gJ0AvY29tcG9uZW50cy9LZXlNb2RhbCdcbmltcG9ydCBBYm91dE1vZGFsIGZyb20gJ0AvY29tcG9uZW50cy9BYm91dE1vZGFsJ1xuaW1wb3J0IE1vZGVTd2l0Y2ggZnJvbSAnQC9jb21wb25lbnRzL01vZGVTd2l0Y2gnXG5pbXBvcnQgTWVudUluZm8gZnJvbSAnQC9jb21wb25lbnRzL01lbnVJbmZvJ1xuaW1wb3J0IFByb21wdEZvcm0gZnJvbSAnQC9jb21wb25lbnRzL1Byb21wdEZvcm0nXG5pbXBvcnQgT3ZlcmxheSBmcm9tICdAL2NvbXBvbmVudHMvT3ZlcmxheSdcblxuaW1wb3J0IEljb25TaWRlYmFyIGZyb20gJ0AvaWNvbnMvSWNvblNpZGViYXInXG5pbXBvcnQgSWNvbkluZm8gZnJvbSAnQC9pY29ucy9JY29uSW5mbydcbmltcG9ydCBJY29uUHJvZmlsZSBmcm9tICdAL2ljb25zL0ljb25Qcm9maWxlJ1xuaW1wb3J0IEljb25QbHVzIGZyb20gJ0AvaWNvbnMvaWNvblBsdXMnXG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuXG4gIGNvbnN0IFttZXMsIHNldE1lc10gPSB1c2VTdGF0ZShcIkxvYWRpbmdcIilcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0ID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9wcm9tcHRcIiwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcm9tcHQ6IGlucHV0IH0pXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NmdWxseSBwb3N0ZWQgZGF0YScpXG5cbiAgICAgIC8vIHNlcnZlciByZXNwbm9uc2VcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIHNldE1lcyhkYXRhLnByb21wdGVkX2RhdGEpXG4gICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IHJlY2VpdmVkIGRhdGE6JywgbWVzKVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBGb3JtIC0+XCIsIGVycm9yKVxuICAgIH1cbiAgfVxuXG5cblxuXG4gIC8vIFNpZGViYXJcbiAgY29uc3QgW3NpZGViYXIsIHNldFNpZGVCYXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG5cbiAgY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcbiAgICBzZXRTaWRlQmFyKCFzaWRlYmFyKVxuICB9XG5cblxuICAvLyBhbGwgbW9kZSBzZXR0aW5nczpcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIm9uZVwiKVxuICBjb25zdCB0b2dnbGVTd2l0Y2ggPSAoYWN0aXZlVGFiOiBzdHJpbmcpID0+IHtcbiAgICBzZXRNb2RlKGFjdGl2ZVRhYilcbiAgfVxuXG5cblxuXG4gIC8vIE1lbnVJbmZvXG4gIGNvbnN0IFtpbmZvTWVudSwgc2V0SW5mb01lbnVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdG9nZ2xlSW5mb01lbnUgPSAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi1pbmZvICNpY29uLWJ0blwiKTtcblxuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgaW5mby5jbGFzc0xpc3QudG9nZ2xlKCdiZy1saWdodC1ncmVlbicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEluZm9NZW51KCFpbmZvTWVudSk7XG4gIH1cblxuXG4gIC8vIE91dHB1dFxuICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtiaW4sIHNldEJpbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzaG93QmluID0gKGU6IGFueSkgPT4ge1xuICAgIHNldEJpbighYmluKVxuICB9XG5cblxuICAvLyBNb2Rlc1xuICBjb25zdCBbbW9kZU1lbnUsIHNldE1vZGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHRvZ2dsZU1vZGVNZW51ID0gKGU6IGFueSkgPT4ge1xuICAgIHNldE1vZGVNZW51KCFtb2RlTWVudSlcbiAgfVxuXG4gIGNvbnN0IG1vZGVzID0ge1xuICAgIFwiYnVnXCI6IFwiaWNvblwiLFxuICAgIFwiZXhwbGFpblwiOiBcImljb25cIixcbiAgICBcInJlZnJhY3RvclwiOiBcImljb25cIlxuICB9XG5cblxuICAvLyBNZW51SW5mbyBNb2RhbFxuICBjb25zdCBba2V5TW9kYWwsIHNldEtleU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbYWJvdXRNb2RhbCwgc2V0QWJvdXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0b2dnbGVLZXlNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRLZXlNb2RhbCgha2V5TW9kYWwpXG4gIH1cblxuICBjb25zdCB0b2dnbGVBYm91dE1vZGFsID0gKCkgPT4ge1xuICAgIHNldEFib3V0TW9kYWwoIWFib3V0TW9kYWwpXG4gIH1cblxuXG4gIC8vIE92ZXJsYXlcbiAgY29uc3QgW292ZXJsYXksIHNldE92ZXJsYXldID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHRvZ2dsZU92ZXJsYXkgPSAoKSA9PiB7XG4gICAgc2V0T3ZlcmxheSghb3ZlcmxheSlcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLXNjcmVlbiBiZy13aGl0ZSBmbGV4XCI+XG4gICAgICA8U2lkZWJhciBzaWRlYmFyPXtzaWRlYmFyfSB0b2dnbGVTaWRlYmFyPXt0b2dnbGVTaWRlYmFyfS8+XG4gICAgICA8ZGl2IGlkPVwiYnV0dG9uLWNvbnRhaW5lclwiIGNsYXNzTmFtZT17YCR7c2lkZWJhciA/ICdoaWRkZW4nIDogJ3Zpc2libGUnfSBhYnNvbHV0ZSB0b3AtNCBsZWZ0LTRgfT5cbiAgICAgICAgPEJ1dHRvbkljb24gaWNvbj17SWNvblNpZGViYXJ9IHRleHQ9XCJPcGVuIHNpZGViYXJcIiBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuXG4gICAgICAgIHtvdmVybGF5ID8gKCA8T3ZlcmxheSAvPiApIDogbnVsbCB9XG4gICAgICAgIFxuICAgICAgICB7aW5mb01lbnUgPyAoIDxNZW51SW5mbyB0b2dnbGVBYm91dE1vZGFsPXt0b2dnbGVBYm91dE1vZGFsfSB0b2dnbGVLZXlNb2RhbD17dG9nZ2xlS2V5TW9kYWx9IC8+ICkgOiAoIG51bGwgKX1cbiAgICAgICAge2tleU1vZGFsID8gKCA8S2V5TW9kYWwgLz4gKSA6IG51bGwgfVxuICAgICAgICB7YWJvdXRNb2RhbCA/ICggPEFib3V0TW9kYWwgLz4gKSA6IG51bGwgfVxuXG5cbiAgICAgICAgPGRpdiBpZD1cImJ1dHRvbi1pbmZvXCIgY2xhc3NOYW1lPXtcImFic29sdXRlIHRvcC00IHJpZ2h0LTRcIn0+XG4gICAgICAgICAgPEJ1dHRvbkljb24gaWNvbj17SWNvbkluZm99IHRleHQ9XCJDbGljayBmb3IgbW9yZSBJbmZvXCIgb25DbGljaz17dG9nZ2xlSW5mb01lbnV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJtb2RlLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwibW9kZS1idG5cIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTW9kZU1lbnV9XG4gICAgICAgICAgICA+bW9kZTwvYnV0dG9uPlxuICAgICAgICAgICAge21vZGVNZW51ID8gKFxuICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGUtbWVudVwiIGNsYXNzTmFtZT1cImFib3NsdXRlIHotMjAgdy00MCBoLTUyXCI+XG4gICAgICAgICAgICAgIDxkaXY+YnVnPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+ZXhwbGFpbjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PnJlZnJhY3RvcjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kZVN3aXRjaCBtb2RlPXttb2RlfSB0b2dnbGVTd2l0Y2g9e3RvZ2dsZVN3aXRjaH0vPlxuICAgICAgPC9kaXY+XG4gICAgICAgIHtvdXRwdXQgPyAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgaWQ9XCJvdXRwdXQtY29udGFpbmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMy81IGgtYXV0b1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm91dHB1dC1ibG9ja1wiPlxuICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGlkPVwicXVlc3Rpb24tYmxvY2tcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dCaW59XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctbGlnaHQtZ3JlZW4gdy1mdWxsIGgtMTQgcHgtNiBweS00IGZsZXggaXRlbXMtY2VudGVyIGdhcC02IHJvdW5kZWQtMnhsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uUHJvZmlsZSAvPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwidXNlci1xdWVzdGlvblwiPkhvdyB0byBwbGFudCBhIGNhcnJvdD88L3A+XG4gICAgICAgICAgICAgICAge2JpbiA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJiaW4taWNvblwiIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25QbHVzIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICl9ICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJhbnN3ZXItYmxvY2tcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbCB9XG4gICAgICAgIDxQcm9tcHRGb3JtIGlucHV0PXtpbnB1dH0gaGFuZGxlSW5wdXQ9e2hhbmRsZUlucHV0fSBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH0vPlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb21wdFwiPjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgIG5hbWU9XCJwcm9tcHRcIiBcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwPntpbnB1dH08L3A+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdC1idG5cIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtYmx1ZS03MDBcIj5IaTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXN1bHQtdGV4dFwiPlxuICAgICAgICAgIHttZXN9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b25JY29uIiwiU2lkZWJhciIsIktleU1vZGFsIiwiQWJvdXRNb2RhbCIsIk1vZGVTd2l0Y2giLCJNZW51SW5mbyIsIlByb21wdEZvcm0iLCJPdmVybGF5IiwiSWNvblNpZGViYXIiLCJJY29uSW5mbyIsIkljb25Qcm9maWxlIiwiSWNvblBsdXMiLCJpbmRleCIsIm1lcyIsInNldE1lcyIsImlucHV0Iiwic2V0SW5wdXQiLCJoYW5kbGVJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb21wdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwianNvbiIsInByb21wdGVkX2RhdGEiLCJlcnJvciIsInNpZGViYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlU2lkZWJhciIsIm1vZGUiLCJzZXRNb2RlIiwidG9nZ2xlU3dpdGNoIiwiYWN0aXZlVGFiIiwiaW5mb01lbnUiLCJzZXRJbmZvTWVudSIsInRvZ2dsZUluZm9NZW51IiwiaW5mbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm91dHB1dCIsInNldE91dHB1dCIsImJpbiIsInNldEJpbiIsInNob3dCaW4iLCJtb2RlTWVudSIsInNldE1vZGVNZW51IiwidG9nZ2xlTW9kZU1lbnUiLCJtb2RlcyIsImtleU1vZGFsIiwic2V0S2V5TW9kYWwiLCJhYm91dE1vZGFsIiwic2V0QWJvdXRNb2RhbCIsInRvZ2dsZUtleU1vZGFsIiwidG9nZ2xlQWJvdXRNb2RhbCIsIm92ZXJsYXkiLCJzZXRPdmVybGF5IiwidG9nZ2xlT3ZlcmxheSIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaWNvbiIsInRleHQiLCJvbkNsaWNrIiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});