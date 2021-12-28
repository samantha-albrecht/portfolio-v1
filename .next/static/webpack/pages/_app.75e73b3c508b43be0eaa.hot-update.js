"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.scss */ \"./components/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/samanthaalbrecht/Documents/GitHub/my-portfolio/components/Header/Header.js\";\n\n\n\nvar navItems = [{\n  name: 'Work',\n  isSubNav: true\n}, {\n  name: 'Process',\n  isSubNav: true\n}, {\n  name: 'Experience',\n  isSubNav: true\n}, {\n  name: 'Books',\n  isSubNav: false\n}, {\n  name: 'About',\n  isSubNav: false\n}];\n\nfunction SubNav() {\n  var _this = this;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n      children: navItems.filter(function (navItem) {\n        return navItem.isSubNav;\n      }).map(function (navItem) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n          className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n          children: navItem.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 34\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, this);\n}\n\n_c = SubNav;\n\nfunction FullNav() {\n  var _this2 = this;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n      children: navItems.map(function (navItem) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n          className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n          children: navItem.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 43\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 9\n  }, this);\n}\n\n_c2 = FullNav;\n\nfunction Header() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()((_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header), (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().copy)),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"Samantha Albrecht\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().subNav),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SubNav, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().fullNav),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FullNav, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n        href: \"#\",\n        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().secondaryButton),\n        children: \"Contact\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, this);\n}\n\n_c3 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"SubNav\");\n$RefreshReg$(_c2, \"FullNav\");\n$RefreshReg$(_c3, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFJRSxRQUFRLEdBQUcsQ0FDWDtBQUFFQyxFQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsRUFBQUEsUUFBUSxFQUFFO0FBQTFCLENBRFcsRUFFWDtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsU0FBUjtBQUFtQkMsRUFBQUEsUUFBUSxFQUFFO0FBQTdCLENBRlcsRUFHWDtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsWUFBUjtBQUFzQkMsRUFBQUEsUUFBUSxFQUFFO0FBQWhDLENBSFcsRUFJWDtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsRUFBQUEsUUFBUSxFQUFFO0FBQTNCLENBSlcsRUFLWDtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsRUFBQUEsUUFBUSxFQUFFO0FBQTNCLENBTFcsQ0FBZjs7QUFRQSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQ2Qsc0JBQ0k7QUFBQSwyQkFDSTtBQUFBLGdCQUNLSCxRQUFRLENBQ1JJLE1BREEsQ0FDUSxVQUFBQyxPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDSCxRQUFaO0FBQUEsT0FEZixFQUVBSSxHQUZBLENBRUssVUFBQUQsT0FBTztBQUFBLDRCQUFJO0FBQUksbUJBQVMsRUFBRVAsb0VBQWY7QUFBQSxvQkFBZ0NPLE9BQU8sQ0FBQ0o7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSjtBQUFBLE9BRlo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0tBWFFFOztBQWFULFNBQVNJLE9BQVQsR0FBbUI7QUFBQTs7QUFDZixzQkFDSTtBQUFBLDJCQUNJO0FBQUEsZ0JBQ0tQLFFBQVEsQ0FBQ00sR0FBVCxDQUFjLFVBQUFELE9BQU87QUFBQSw0QkFBSTtBQUFJLG1CQUFTLEVBQUVQLG9FQUFmO0FBQUEsb0JBQWdDTyxPQUFPLENBQUNKO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUo7QUFBQSxPQUFyQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDs7TUFSUU07O0FBVVQsU0FBU0MsTUFBVCxHQUFrQjtBQUNkLHNCQUNJO0FBQVEsYUFBUyxFQUFFVCxpREFBRSxDQUFDRCxtRUFBRCxFQUFnQkEsaUVBQWhCLENBQXJCO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFFQSxtRUFBaEI7QUFBQSw2QkFDSSw4REFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFNSTtBQUFLLGVBQVMsRUFBRUEsb0VBQWhCO0FBQUEsOEJBQ0ksOERBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQVksaUJBQVMsRUFBRUEsNEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDs7TUFmUVU7QUFnQlQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzP2YzMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2NzcydcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuXG5sZXQgbmF2SXRlbXMgPSBbXG4gICAgeyBuYW1lOiAnV29yaycsIGlzU3ViTmF2OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnUHJvY2VzcycsIGlzU3ViTmF2OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnRXhwZXJpZW5jZScsIGlzU3ViTmF2OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnQm9va3MnLCBpc1N1Yk5hdjogZmFsc2UgfSxcbiAgICB7IG5hbWU6ICdBYm91dCcsIGlzU3ViTmF2OiBmYWxzZSB9LFxuXTtcblxuZnVuY3Rpb24gU3ViTmF2KCkgeyAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7bmF2SXRlbXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCBuYXZJdGVtID0+IG5hdkl0ZW0uaXNTdWJOYXYgKVxuICAgICAgICAgICAgICAgIC5tYXAoIG5hdkl0ZW0gPT4gPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW19PntuYXZJdGVtLm5hbWV9PC9saT4gKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gRnVsbE5hdigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoIG5hdkl0ZW0gPT4gPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW19PntuYXZJdGVtLm5hbWV9PC9saT4gKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbihzdHlsZXMuaGVhZGVyLCBzdHlsZXMuY29weSl9PlxuICAgICAgICAgICAgPGgxPlNhbWFudGhhIEFsYnJlY2h0PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ViTmF2fT5cbiAgICAgICAgICAgICAgICA8U3ViTmF2IC8+XG4gICAgICAgICAgICAgICAgey8qIE9wZW4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnVsbE5hdn0+XG4gICAgICAgICAgICAgICAgPEZ1bGxOYXYgLz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZGFyeUJ1dHRvbn0+Q29udGFjdDwvYT5cbiAgICAgICAgICAgICAgICB7LyogQ2xvc2UgKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+ICAgIFxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbiIsIm5hdkl0ZW1zIiwibmFtZSIsImlzU3ViTmF2IiwiU3ViTmF2IiwiZmlsdGVyIiwibmF2SXRlbSIsIm1hcCIsIkZ1bGxOYXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJjb3B5Iiwic3ViTmF2IiwiZnVsbE5hdiIsInNlY29uZGFyeUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/Header.js\n");

/***/ })

});