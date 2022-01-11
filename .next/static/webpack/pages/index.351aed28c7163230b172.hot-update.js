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

/***/ "./components/homepage/Books/Books.js":
/*!********************************************!*\
  !*** ./components/homepage/Books/Books.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SectionContainer_SectionContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SectionContainer/SectionContainer */ \"./components/SectionContainer/SectionContainer.js\");\n/* harmony import */ var _Books_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Books.module.scss */ \"./components/homepage/Books/Books.module.scss\");\n/* harmony import */ var _Books_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Books_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/samanthaalbrecht/Documents/GitHub/my-portfolio/components/homepage/Books/Books.js\";\n\n\n\n\n\nfunction BooksContent() {\n  var _this = this;\n\n  var books = [{\n    title: 'Permission To Screw Up',\n    author: 'Kristen Hadeed',\n    coverImage: '/img/books/permission-to-screw-up.jpg'\n  }, {\n    title: 'Daring Greatly',\n    author: 'Brene Brown',\n    coverImage: '/img/books/daring-greatly.jpg'\n  }, {\n    title: 'Atomic Habits',\n    author: 'James Clear',\n    coverImage: '/img/books/atomic-habits.jpg'\n  }, {\n    title: 'Start With Why',\n    author: 'Simon Sinek',\n    coverImage: '/img/books/start-with-why.jpg'\n  }, {\n    title: 'Leaders Eat Last',\n    author: 'Simon Sinek',\n    coverImage: '/img/books/leaders-eat-last.jpg'\n  }, {\n    title: 'The Accidental Creative',\n    author: 'Todd Henry',\n    coverImage: '/img/books/accidental-creative.jpg'\n  }, {\n    title: 'Quiet',\n    author: 'Susan Cain',\n    coverImage: '/img/books/quiet.jpg'\n  }, {\n    title: 'Make Your Bed',\n    author: 'Admiral William H. McRaven',\n    coverImage: '/img/books/make-your-bed.jpg'\n  }, {\n    title: 'Man\\'s Search For Meaning',\n    author: 'Viktor E. Frankl',\n    coverImage: '/img/books/mans-search-for-meaning.jpg'\n  }, {\n    title: 'Complete Guide to Money',\n    author: 'Dave Ramsey',\n    coverImage: '/img/books/complete-guide-to-money.jpg'\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (_Books_module_scss__WEBPACK_IMPORTED_MODULE_3___default().booksContainer),\n    children: books.map(function (book, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: (_Books_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookGroup),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: (_Books_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookCoverImage),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: book.coverImage,\n            alt: \"Book cover image: \".concat(book.title),\n            layout: \"fill\",\n            objectFit: \"contain\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          className: (_Books_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookTitle),\n          children: book.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          className: (_Books_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookAuthor),\n          children: book.author\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }, _this)]\n      }, index, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 9\n  }, this);\n}\n\n_c = BooksContent;\n\nfunction Books() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n    id: \"books\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_SectionContainer_SectionContainer__WEBPACK_IMPORTED_MODULE_0__.default, {\n      section: 'Books',\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: (_Books_module_scss__WEBPACK_IMPORTED_MODULE_3___default().contentContainer),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: (_Books_module_scss__WEBPACK_IMPORTED_MODULE_3___default().contentInnerTitle),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: (_Books_module_scss__WEBPACK_IMPORTED_MODULE_3___default().caption),\n            children: \"Books\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n            className: (_Books_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sectionTitle),\n            children: \"What I'm reading\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            className: (_Books_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookBody),\n            children: \"I haven\\u2019t always been an avid reader, but in the last two years I've developed a love for reading. I read because I crave new thoughts, ideas, and perspectives that inspire, teach, and challenge me.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            className: (_Books_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookBodyBold),\n            children: \"These are a few of my favorites:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(BooksContent, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 9\n  }, this);\n}\n\n_c2 = Books;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Books);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"BooksContent\");\n$RefreshReg$(_c2, \"Books\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWVwYWdlL0Jvb2tzL0Jvb2tzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNHLFlBQVQsR0FBd0I7QUFBQTs7QUFDcEIsTUFBTUMsS0FBSyxHQUFFLENBQ1Q7QUFDSUMsSUFBQUEsS0FBSyxFQUFFLHdCQURYO0FBRUlDLElBQUFBLE1BQU0sRUFBRSxnQkFGWjtBQUdJQyxJQUFBQSxVQUFVLEVBQUU7QUFIaEIsR0FEUyxFQU9UO0FBQ0lGLElBQUFBLEtBQUssRUFBRSxnQkFEWDtBQUVJQyxJQUFBQSxNQUFNLEVBQUUsYUFGWjtBQUdJQyxJQUFBQSxVQUFVLEVBQUU7QUFIaEIsR0FQUyxFQVlUO0FBQ0lGLElBQUFBLEtBQUssRUFBRSxlQURYO0FBRUlDLElBQUFBLE1BQU0sRUFBRSxhQUZaO0FBR0lDLElBQUFBLFVBQVUsRUFBRTtBQUhoQixHQVpTLEVBaUJUO0FBQ0lGLElBQUFBLEtBQUssRUFBRSxnQkFEWDtBQUVJQyxJQUFBQSxNQUFNLEVBQUUsYUFGWjtBQUdJQyxJQUFBQSxVQUFVLEVBQUU7QUFIaEIsR0FqQlMsRUFzQlQ7QUFDSUYsSUFBQUEsS0FBSyxFQUFFLGtCQURYO0FBRUlDLElBQUFBLE1BQU0sRUFBRSxhQUZaO0FBR0lDLElBQUFBLFVBQVUsRUFBRTtBQUhoQixHQXRCUyxFQTJCVDtBQUNJRixJQUFBQSxLQUFLLEVBQUUseUJBRFg7QUFFSUMsSUFBQUEsTUFBTSxFQUFFLFlBRlo7QUFHSUMsSUFBQUEsVUFBVSxFQUFFO0FBSGhCLEdBM0JTLEVBZ0NUO0FBQ0lGLElBQUFBLEtBQUssRUFBRSxPQURYO0FBRUlDLElBQUFBLE1BQU0sRUFBRSxZQUZaO0FBR0lDLElBQUFBLFVBQVUsRUFBRTtBQUhoQixHQWhDUyxFQXFDVDtBQUNJRixJQUFBQSxLQUFLLEVBQUUsZUFEWDtBQUVJQyxJQUFBQSxNQUFNLEVBQUUsNEJBRlo7QUFHSUMsSUFBQUEsVUFBVSxFQUFFO0FBSGhCLEdBckNTLEVBMENUO0FBQ0lGLElBQUFBLEtBQUssRUFBRSwyQkFEWDtBQUVJQyxJQUFBQSxNQUFNLEVBQUUsa0JBRlo7QUFHSUMsSUFBQUEsVUFBVSxFQUFFO0FBSGhCLEdBMUNTLEVBK0NUO0FBQ0lGLElBQUFBLEtBQUssRUFBRSx5QkFEWDtBQUVJQyxJQUFBQSxNQUFNLEVBQUUsYUFGWjtBQUdJQyxJQUFBQSxVQUFVLEVBQUU7QUFIaEIsR0EvQ1MsQ0FBYjtBQXNEQSxzQkFDSTtBQUFLLGFBQVMsRUFBRU4sMEVBQWhCO0FBQUEsY0FDS0csS0FBSyxDQUFDSyxHQUFOLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsMEJBRVI7QUFBSyxpQkFBUyxFQUFFVixxRUFBaEI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVBLDBFQUFoQjtBQUFBLGlDQUNJLDhEQUFDLG1EQUFEO0FBQ0EsZUFBRyxFQUFFUyxJQUFJLENBQUNILFVBRFY7QUFFQSxlQUFHLDhCQUF1QkcsSUFBSSxDQUFDTCxLQUE1QixDQUZIO0FBR0Esa0JBQU0sRUFBQyxNQUhQO0FBSUEscUJBQVMsRUFBQztBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBU0k7QUFBRyxtQkFBUyxFQUFFSixxRUFBZDtBQUFBLG9CQUFpQ1MsSUFBSSxDQUFDTDtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKLGVBVUk7QUFBRyxtQkFBUyxFQUFFSixzRUFBZDtBQUFBLG9CQUFrQ1MsSUFBSSxDQUFDSjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUEsU0FBdUNLLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUTtBQUFBLEtBQVg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQkg7O0tBM0VRUjs7QUE2RVQsU0FBU2EsS0FBVCxHQUFpQjtBQUNiLHNCQUNJO0FBQVMsTUFBRSxFQUFDLE9BQVo7QUFBQSwyQkFDSSw4REFBQyx1RUFBRDtBQUFrQixhQUFPLEVBQUUsT0FBM0I7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVmLDRFQUFoQjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRUEsNkVBQWhCO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFFQSxtRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFJLHFCQUFTLEVBQUVBLHdFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBRyxxQkFBUyxFQUFFQSxvRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJO0FBQUcscUJBQVMsRUFBRUEsd0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBT0ksOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7TUFoQlFlO0FBa0JULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm9va3MvQm9va3MuanM/ODdmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VjdGlvbkNvbnRhaW5lciBmcm9tIFwiLi4vLi4vU2VjdGlvbkNvbnRhaW5lci9TZWN0aW9uQ29udGFpbmVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0Jvb2tzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZnVuY3Rpb24gQm9va3NDb250ZW50KCkge1xuICAgIGNvbnN0IGJvb2tzID1bXG4gICAgICAgIHsgXG4gICAgICAgICAgICB0aXRsZTogJ1Blcm1pc3Npb24gVG8gU2NyZXcgVXAnLFxuICAgICAgICAgICAgYXV0aG9yOiAnS3Jpc3RlbiBIYWRlZWQnLFxuICAgICAgICAgICAgY292ZXJJbWFnZTogJy9pbWcvYm9va3MvcGVybWlzc2lvbi10by1zY3Jldy11cC5qcGcnLFxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgeyBcbiAgICAgICAgICAgIHRpdGxlOiAnRGFyaW5nIEdyZWF0bHknLFxuICAgICAgICAgICAgYXV0aG9yOiAnQnJlbmUgQnJvd24nLFxuICAgICAgICAgICAgY292ZXJJbWFnZTogJy9pbWcvYm9va3MvZGFyaW5nLWdyZWF0bHkuanBnJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIHRpdGxlOiAnQXRvbWljIEhhYml0cycsXG4gICAgICAgICAgICBhdXRob3I6ICdKYW1lcyBDbGVhcicsXG4gICAgICAgICAgICBjb3ZlckltYWdlOiAnL2ltZy9ib29rcy9hdG9taWMtaGFiaXRzLmpwZycsXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICB0aXRsZTogJ1N0YXJ0IFdpdGggV2h5JyxcbiAgICAgICAgICAgIGF1dGhvcjogJ1NpbW9uIFNpbmVrJyxcbiAgICAgICAgICAgIGNvdmVySW1hZ2U6ICcvaW1nL2Jvb2tzL3N0YXJ0LXdpdGgtd2h5LmpwZycsXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICB0aXRsZTogJ0xlYWRlcnMgRWF0IExhc3QnLFxuICAgICAgICAgICAgYXV0aG9yOiAnU2ltb24gU2luZWsnLFxuICAgICAgICAgICAgY292ZXJJbWFnZTogJy9pbWcvYm9va3MvbGVhZGVycy1lYXQtbGFzdC5qcGcnLFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgdGl0bGU6ICdUaGUgQWNjaWRlbnRhbCBDcmVhdGl2ZScsXG4gICAgICAgICAgICBhdXRob3I6ICdUb2RkIEhlbnJ5JyxcbiAgICAgICAgICAgIGNvdmVySW1hZ2U6ICcvaW1nL2Jvb2tzL2FjY2lkZW50YWwtY3JlYXRpdmUuanBnJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIHRpdGxlOiAnUXVpZXQnLFxuICAgICAgICAgICAgYXV0aG9yOiAnU3VzYW4gQ2FpbicsXG4gICAgICAgICAgICBjb3ZlckltYWdlOiAnL2ltZy9ib29rcy9xdWlldC5qcGcnLFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgdGl0bGU6ICdNYWtlIFlvdXIgQmVkJyxcbiAgICAgICAgICAgIGF1dGhvcjogJ0FkbWlyYWwgV2lsbGlhbSBILiBNY1JhdmVuJyxcbiAgICAgICAgICAgIGNvdmVySW1hZ2U6ICcvaW1nL2Jvb2tzL21ha2UteW91ci1iZWQuanBnJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIHRpdGxlOiAnTWFuXFwncyBTZWFyY2ggRm9yIE1lYW5pbmcnLFxuICAgICAgICAgICAgYXV0aG9yOiAnVmlrdG9yIEUuIEZyYW5rbCcsXG4gICAgICAgICAgICBjb3ZlckltYWdlOiAnL2ltZy9ib29rcy9tYW5zLXNlYXJjaC1mb3ItbWVhbmluZy5qcGcnLFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgdGl0bGU6ICdDb21wbGV0ZSBHdWlkZSB0byBNb25leScsXG4gICAgICAgICAgICBhdXRob3I6ICdEYXZlIFJhbXNleScsXG4gICAgICAgICAgICBjb3ZlckltYWdlOiAnL2ltZy9ib29rcy9jb21wbGV0ZS1ndWlkZS10by1tb25leS5qcGcnLFxuICAgICAgICB9LFxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9va3NDb250YWluZXJ9PlxuICAgICAgICAgICAge2Jvb2tzLm1hcCggKGJvb2ssIGluZGV4KSA9PiBcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb2tHcm91cH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9va0NvdmVySW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Jvb2suY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YEJvb2sgY292ZXIgaW1hZ2U6ICR7Ym9vay50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib29rVGl0bGV9Pntib29rLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9va0F1dGhvcn0+e2Jvb2suYXV0aG9yfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gQm9va3MoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJib29rc1wiPlxuICAgICAgICAgICAgPFNlY3Rpb25Db250YWluZXIgc2VjdGlvbj17J0Jvb2tzJ30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50SW5uZXJUaXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcHRpb259PkJvb2tzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvblRpdGxlfT5XaGF0IEknbSByZWFkaW5nPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvb2tCb2R5fT5JIGhhdmVu4oCZdCBhbHdheXMgYmVlbiBhbiBhdmlkIHJlYWRlciwgYnV0IGluIHRoZSBsYXN0IHR3byB5ZWFycyBJJ3ZlIGRldmVsb3BlZCBhIGxvdmUgZm9yIHJlYWRpbmcuIEkgcmVhZCBiZWNhdXNlIEkgY3JhdmUgbmV3IHRob3VnaHRzLCBpZGVhcywgYW5kIHBlcnNwZWN0aXZlcyB0aGF0IGluc3BpcmUsIHRlYWNoLCBhbmQgY2hhbGxlbmdlIG1lLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvb2tCb2R5Qm9sZH0+VGhlc2UgYXJlIGEgZmV3IG9mIG15IGZhdm9yaXRlczo8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Qm9va3NDb250ZW50Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va3M7Il0sIm5hbWVzIjpbIlNlY3Rpb25Db250YWluZXIiLCJzdHlsZXMiLCJJbWFnZSIsIkJvb2tzQ29udGVudCIsImJvb2tzIiwidGl0bGUiLCJhdXRob3IiLCJjb3ZlckltYWdlIiwiYm9va3NDb250YWluZXIiLCJtYXAiLCJib29rIiwiaW5kZXgiLCJib29rR3JvdXAiLCJib29rQ292ZXJJbWFnZSIsImJvb2tUaXRsZSIsImJvb2tBdXRob3IiLCJCb29rcyIsImNvbnRlbnRDb250YWluZXIiLCJjb250ZW50SW5uZXJUaXRsZSIsImNhcHRpb24iLCJzZWN0aW9uVGl0bGUiLCJib29rQm9keSIsImJvb2tCb2R5Qm9sZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/homepage/Books/Books.js\n");

/***/ })

});