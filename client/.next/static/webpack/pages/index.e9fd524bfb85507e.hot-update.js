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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sidebar */ \"./components/sidebar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction index() {\n    _s();\n    const [mes, setMes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading\");\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInput = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:8080/api/prompt\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    prompt: input\n                })\n            });\n            console.log(\"successfully posted data\");\n            // server respnonse\n            const data = await response.json();\n            setMes(data.prompted_data);\n            console.log(\"successfully received data:\", mes);\n        } catch (error) {\n            console.error(\"Failed to send Form ->\", error);\n        }\n    };\n    // sidebar settings\n    const [sidebar, setSideBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleSidebar = ()=>{\n        setSideBar(!sidebar);\n    };\n    // all mode settings:\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"one\");\n    const toggleSwitch = (activeTab)=>{\n        setMode(activeTab);\n    };\n    const spring = {\n        type: \"spring\",\n        stiffness: 700,\n        damping: 30\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen bg-white flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sidebar: sidebar,\n                toggleSidebar: toggleSidebar\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"sidbar-button\",\n                onClick: toggleSidebar,\n                className: \"\".concat(sidebar ? \"hidden\" : \"visible\", \" absolute top-4 left-4 w-11 h-11 bg-white grid place-items-center rounded-lg\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    stroke: \"currentColor\",\n                    fill: \"none\",\n                    \"stroke-width\": \"2\",\n                    viewBox: \"0 0 24 24\",\n                    \"stroke-linecap\": \"round\",\n                    \"stroke-linejoin\": \"round\",\n                    className: \"h-4 w-4 text-white dark:text-black\",\n                    height: \"1em\",\n                    width: \"1em\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                            x: \"3\",\n                            y: \"3\",\n                            width: \"18\",\n                            height: \"18\",\n                            rx: \"2\",\n                            ry: \"2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                            x1: \"9\",\n                            y1: \"3\",\n                            x2: \"9\",\n                            y2: \"21\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: sidebar ? \"w-full bg-white\" : \"w-full bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"mode-container\",\n                    className: \"w-full h-full flex justify-center items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"mode-switch\",\n                        \"data-isOn\": mode,\n                        className: \"relative w-1/3 h-14 flex bg-light-green cursor-pointer rounded-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                className: \"absolute w-1/3 h-full p-1\",\n                                layout: true,\n                                transition: spring,\n                                animate: {\n                                    x: mode === \"one\" ? \"0%\" : mode === \"two\" ? \"100%\" : \"200%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"white-ball\",\n                                    className: \"w-full h-full bg-white rounded-2xl\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>toggleSwitch(\"one\"),\n                                className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                children: \"Bug\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>toggleSwitch(\"two\"),\n                                className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                children: \"Explain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>toggleSwitch(\"three\"),\n                                className: \"selected-mode flex-1 grid place-items-center z-10\",\n                                children: \"Refractor\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacek/Desktop/nextFlask/client/pages/index.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"fuoqoAxUkv8Q//Mcmf6hMA5wTRM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDRCw4REFBQ0Q7Z0NBQ0NJLFNBQVMsSUFBTVYsYUFBYTtnQ0FDNUJPLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ2I7R0FuSVNyQztBQXFJVCwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhcidcblxuXG5mdW5jdGlvbiBpbmRleCgpIHtcblxuICBjb25zdCBbbWVzLCBzZXRNZXNdID0gdXNlU3RhdGUoXCJMb2FkaW5nXCIpXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIilcblxuICBjb25zdCBoYW5kbGVJbnB1dCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcHJvbXB0XCIsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJvbXB0OiBpbnB1dCB9KVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgcG9zdGVkIGRhdGEnKVxuXG4gICAgICAvLyBzZXJ2ZXIgcmVzcG5vbnNlXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBzZXRNZXMoZGF0YS5wcm9tcHRlZF9kYXRhKVxuICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NmdWxseSByZWNlaXZlZCBkYXRhOicsIG1lcylcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgRm9ybSAtPlwiLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBzaWRlYmFyIHNldHRpbmdzXG4gIGNvbnN0IFtzaWRlYmFyLCBzZXRTaWRlQmFyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXG5cbiAgY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcbiAgICBzZXRTaWRlQmFyKCFzaWRlYmFyKVxuICB9XG5cblxuXG5cbiAgLy8gYWxsIG1vZGUgc2V0dGluZ3M6XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJvbmVcIilcblxuICBjb25zdCB0b2dnbGVTd2l0Y2ggPSAoYWN0aXZlVGFiOiBzdHJpbmcpID0+IHtcbiAgICBzZXRNb2RlKGFjdGl2ZVRhYilcbiAgfVxuXG5cbiAgY29uc3Qgc3ByaW5nID0ge1xuICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgc3RpZmZuZXNzOiA3MDAsXG4gICAgZGFtcGluZzogMzBcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBiZy13aGl0ZSBmbGV4XCI+XG4gICAgICA8U2lkZWJhciBzaWRlYmFyPXtzaWRlYmFyfSB0b2dnbGVTaWRlYmFyPXt0b2dnbGVTaWRlYmFyfS8+XG4gICAgICA8YnV0dG9uIFxuICAgICAgICBpZD1cInNpZGJhci1idXR0b25cIlxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfVxuICAgICAgICBjbGFzc05hbWU9e2Ake3NpZGViYXIgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ30gYWJzb2x1dGUgdG9wLTQgbGVmdC00IHctMTEgaC0xMSBiZy13aGl0ZSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciByb3VuZGVkLWxnYH1cbiAgICAgICAgPlxuICAgICAgICA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtd2hpdGUgZGFyazp0ZXh0LWJsYWNrXCIgaGVpZ2h0PVwiMWVtXCIgd2lkdGg9XCIxZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHJlY3QgeD1cIjNcIiB5PVwiM1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD5cbiAgICAgICAgICA8bGluZSB4MT1cIjlcIiB5MT1cIjNcIiB4Mj1cIjlcIiB5Mj1cIjIxXCI+PC9saW5lPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBpZD1cIm1haW5cIiBjbGFzc05hbWU9e3NpZGViYXIgPyBcInctZnVsbCBiZy13aGl0ZVwiIDogXCJ3LWZ1bGwgYmctd2hpdGVcIn0+XG4gICAgICAgIDxkaXYgaWQ9XCJtb2RlLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwibW9kZS1zd2l0Y2hcIiBkYXRhLWlzT249e21vZGV9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMS8zIGgtMTQgZmxleCBiZy1saWdodC1ncmVlbiBjdXJzb3ItcG9pbnRlciByb3VuZGVkLTJ4bFwiPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTEvMyBoLWZ1bGwgcC0xXCJcbiAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgdHJhbnNpdGlvbj17c3ByaW5nfVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBcbiAgICAgICAgICAgICAgeDogbW9kZSA9PT0gXCJvbmVcIiBcbiAgICAgICAgICAgICAgICAgID8gJzAlJyBcbiAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gXCJ0d29cIlxuICAgICAgICAgICAgICAgICAgICAgID8gJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnMjAwJScsXG4gICAgICAgICAgICB9fSBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGlkPVwid2hpdGUtYmFsbFwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGxcIj48L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTd2l0Y2goXCJvbmVcIil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGVkLW1vZGUgZmxleC0xIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHotMTBcIlxuICAgICAgICAgICAgICA+QnVnPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTd2l0Y2goXCJ0d29cIil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGVkLW1vZGUgZmxleC0xIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHotMTBcIlxuICAgICAgICAgICAgPkV4cGxhaW48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVN3aXRjaChcInRocmVlXCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RlZC1tb2RlIGZsZXgtMSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciB6LTEwXCJcbiAgICAgICAgICAgID5SZWZyYWN0b3I8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJvbXB0XCI+PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgbmFtZT1cInByb21wdFwiIFxuICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHA+e2lucHV0fTwvcD5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0LWJ0blwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1ibHVlLTcwMFwiPkhpPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInJlc3VsdC10ZXh0XCI+XG4gICAgICAgICAge21lc31cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIlNpZGViYXIiLCJpbmRleCIsIm1lcyIsInNldE1lcyIsImlucHV0Iiwic2V0SW5wdXQiLCJoYW5kbGVJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb21wdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwianNvbiIsInByb21wdGVkX2RhdGEiLCJlcnJvciIsInNpZGViYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlU2lkZWJhciIsIm1vZGUiLCJzZXRNb2RlIiwidG9nZ2xlU3dpdGNoIiwiYWN0aXZlVGFiIiwic3ByaW5nIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJpZCIsIm9uQ2xpY2siLCJzdmciLCJzdHJva2UiLCJmaWxsIiwic3Ryb2tlLXdpZHRoIiwidmlld0JveCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwiaGVpZ2h0Iiwid2lkdGgiLCJ4bWxucyIsInJlY3QiLCJ4IiwieSIsInJ4IiwicnkiLCJsaW5lIiwieDEiLCJ5MSIsIngyIiwieTIiLCJkYXRhLWlzT24iLCJsYXlvdXQiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});