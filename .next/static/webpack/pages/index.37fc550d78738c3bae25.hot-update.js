/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/homepage/Process/Process.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/homepage/Process/Process.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Process_contentContainer__30D92 {\\n  grid-area: 2/2/3/3;\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-template-rows: repeat(2, auto);\\n  position: relative;\\n  z-index: 3;\\n}\\n\\n.Process_contentInnerTitle__U_2iP {\\n  grid-area: 1/1/2/5;\\n  padding: 100px 16px 0;\\n}\\n\\n.Process_caption__1KSGt {\\n  font-family: var(--mono-font-family);\\n  font-weight: var(--mono-font-weight-regular);\\n  font-size: var(--font-size-ms);\\n  line-height: 130%;\\n  color: var(--caption-color);\\n  margin-bottom: 4px;\\n  position: relative;\\n}\\n.Process_caption__1KSGt::before {\\n  content: \\\"\\\";\\n  display: block;\\n  width: 1.5px;\\n  background-color: var(--caption-color);\\n  top: 2px;\\n  left: -16px;\\n  height: 16px;\\n  position: absolute;\\n}\\n\\n.Process_sectionTitle__1lA9Z {\\n  font-size: var(--font-size-2xl);\\n  font-weight: var(--font-weight-book);\\n  line-height: 130%;\\n  margin: 0 0 48px 0;\\n}\\n\\n.Process_processContainer__2pmdh {\\n  padding: 16px 16px 48px;\\n}\\n\\n.Process_processDefine__2plw9 {\\n  grid-area: 2/1/3/2;\\n}\\n\\n.Process_processDescription__3bdiy {\\n  border-bottom: 1px solid var(--border);\\n}\\n\\n.Process_toolsList__2KTF7 {\\n  font-size: var(--font-size-s);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Process.module.scss\",\"webpack://../../../design-tokens/_scss-variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,kBAAA;EACA,aAAA;EACA,qCAAA;EACA,mCAAA;EACA,kBAAA;EACA,UAAA;AADF;;AAIA;EACE,kBAAA;EACA,qBAAA;AADF;;AAIA;ECDE,oCAAA;EACA,4CAAA;EACA,8BAAA;EACA,iBAAA;EACA,2BALqB;EAMrB,kBAAA;EACA,kBAAA;ADCF;ACCE;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,sCAbmB;EAcnB,QAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;ADCJ;;AAZA;ECgCE,+BAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBDlC4B;AAkB9B;;AAfA;EACE,uBAAA;AAkBF;;AAfA;EACE,kBAAA;AAkBF;;AAfA;EACE,sCAAA;AAkBF;;AAfA;EACE,6BAAA;AAkBF\",\"sourcesContent\":[\"@import \\\"../../../design-tokens/scss-variables.scss\\\";\\n\\n.contentContainer {\\n  grid-area: 2 / 2 / 3 / 3;\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-template-rows: repeat(2, auto);\\n  position: relative;\\n  z-index: 3;\\n}\\n\\n.contentInnerTitle {\\n  grid-area: 1 / 1 / 2 / 5;\\n  padding: 100px 16px 0;\\n}\\n\\n.caption {\\n  @include caption();\\n}\\n\\n.sectionTitle {\\n  @include title-2xl($margin: 0 0 48px 0);\\n}\\n\\n.processContainer {\\n  padding: 16px 16px 48px;\\n}\\n\\n.processDefine {\\n  grid-area: 2 / 1 / 3 / 2;\\n}\\n\\n.processDescription {\\n  border-bottom: 1px solid var(--border);\\n}\\n\\n.toolsList {\\n  font-size: var(--font-size-s);\\n}\\n\",\"// Spacers\\n$spacer-xs: 4px;\\n$spacer-s: 8px;\\n$spacer-m: 16px;\\n$spacer-l: 24px;\\n$spacer-xl: 32px;\\n\\n// Breakpoints\\n$breakpoint-s: 640px;\\n$breakpoint-m: 768px;\\n$breakpoint-l: 1024px;\\n$breakpoint-xl: 1280px;\\n\\n// Typography\\n@mixin caption($color: var(--caption-color)) {\\n  font-family: var(--mono-font-family);\\n  font-weight: var(--mono-font-weight-regular);\\n  font-size: var(--font-size-ms);\\n  line-height: 130%;\\n  color: $color;\\n  margin-bottom: 4px;\\n  position: relative;\\n\\n  &::before {\\n    content: \\\"\\\";\\n    display: block;\\n    width: 1.5px;\\n    background-color: $color;\\n    top: 2px;\\n    left: -16px;\\n    height: 16px;\\n    position: absolute;\\n  }\\n}\\n\\n@mixin caption-s($margin: 0 0 4px 0) {\\n  font-family: var(--mono-font-family);\\n  font-weight: var(--mono-font-weight-regular);\\n  font-size: var(--font-size-s);\\n  line-height: 130%;\\n  color: var(--caption-color);\\n  margin: $margin;\\n}\\n\\n@mixin title-3xl($margin: 0) {\\n  font-size: var(--font-size-3xl);\\n  font-weight: var(--font-weight-medium);\\n  line-height: 130%;\\n  margin: $margin;\\n}\\n\\n@mixin title-2xl($margin: 0) {\\n  font-size: var(--font-size-2xl);\\n  font-weight: var(--font-weight-book);\\n  line-height: 130%;\\n  margin: $margin;\\n}\\n\\n@mixin title-xl($margin: 0) {\\n  font-size: var(--font-size-xl);\\n  font-weight: var(--font-weight-medium);\\n  line-height: 130%;\\n  margin: $margin;\\n}\\n\\n@mixin title-l($margin: 0) {\\n  font-size: var(--font-size-l);\\n  font-weight: var(--font-weight-medium);\\n  line-height: 130%;\\n  margin: $margin;\\n}\\n\\n@mixin title-m($margin: 0) {\\n  font-size: var(--font-size-m);\\n  font-weight: var(--font-weight-book);\\n  line-height: 130%;\\n  margin: $margin;\\n}\\n\\n@mixin body() {\\n  font-family: var(--font-family);\\n  font-weight: var(--font-weight-light);\\n  font-size: var(--font-size-ms);\\n  font-style: normal;\\n  line-height: 180%;\\n  letter-spacing: 0.03rem;\\n  background-color: var(--background-color);\\n  color: var(--text-color);\\n}\\n\\n@mixin nav() {\\n  font-family: var(--mono-font-family);\\n  font-weight: var(--mono-font-weight-regular);\\n  font-style: normal;\\n  font-size: var(--font-size-s);\\n  color: var(--nav-color);\\n  line-height: 130%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"contentContainer\": \"Process_contentContainer__30D92\",\n\t\"contentInnerTitle\": \"Process_contentInnerTitle__U_2iP\",\n\t\"caption\": \"Process_caption__1KSGt\",\n\t\"sectionTitle\": \"Process_sectionTitle__1lA9Z\",\n\t\"processContainer\": \"Process_processContainer__2pmdh\",\n\t\"processDefine\": \"Process_processDefine__2plw9\",\n\t\"processDescription\": \"Process_processDescription__3bdiy\",\n\t\"toolsList\": \"Process_toolsList__2KTF7\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVs0XSEuL2NvbXBvbmVudHMvaG9tZXBhZ2UvUHJvY2Vzcy9Qcm9jZXNzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw0RUFBNEUsdUJBQXVCLGtCQUFrQiwwQ0FBMEMsd0NBQXdDLHVCQUF1QixlQUFlLEdBQUcsdUNBQXVDLHVCQUF1QiwwQkFBMEIsR0FBRyw2QkFBNkIseUNBQXlDLGlEQUFpRCxtQ0FBbUMsc0JBQXNCLGdDQUFnQyx1QkFBdUIsdUJBQXVCLEdBQUcsbUNBQW1DLGtCQUFrQixtQkFBbUIsaUJBQWlCLDJDQUEyQyxhQUFhLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsa0NBQWtDLG9DQUFvQyx5Q0FBeUMsc0JBQXNCLHVCQUF1QixHQUFHLHNDQUFzQyw0QkFBNEIsR0FBRyxtQ0FBbUMsdUJBQXVCLEdBQUcsd0NBQXdDLDJDQUEyQyxHQUFHLCtCQUErQixrQ0FBa0MsR0FBRyxPQUFPLDRJQUE0SSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLGFBQWEsUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsaUZBQWlGLHVCQUF1Qiw2QkFBNkIsa0JBQWtCLDBDQUEwQyx3Q0FBd0MsdUJBQXVCLGVBQWUsR0FBRyx3QkFBd0IsNkJBQTZCLDBCQUEwQixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsbUJBQW1CLDRDQUE0QyxHQUFHLHVCQUF1Qiw0QkFBNEIsR0FBRyxvQkFBb0IsNkJBQTZCLEdBQUcseUJBQXlCLDJDQUEyQyxHQUFHLGdCQUFnQixrQ0FBa0MsR0FBRyxpQ0FBaUMsaUJBQWlCLGtCQUFrQixrQkFBa0IsbUJBQW1CLHlDQUF5Qyx1QkFBdUIsd0JBQXdCLHlCQUF5QixpRUFBaUUseUNBQXlDLGlEQUFpRCxtQ0FBbUMsc0JBQXNCLGtCQUFrQix1QkFBdUIsdUJBQXVCLGlCQUFpQixvQkFBb0IscUJBQXFCLG1CQUFtQiwrQkFBK0IsZUFBZSxrQkFBa0IsbUJBQW1CLHlCQUF5QixLQUFLLEdBQUcsMENBQTBDLHlDQUF5QyxpREFBaUQsa0NBQWtDLHNCQUFzQixnQ0FBZ0Msb0JBQW9CLEdBQUcsa0NBQWtDLG9DQUFvQywyQ0FBMkMsc0JBQXNCLG9CQUFvQixHQUFHLGtDQUFrQyxvQ0FBb0MseUNBQXlDLHNCQUFzQixvQkFBb0IsR0FBRyxpQ0FBaUMsbUNBQW1DLDJDQUEyQyxzQkFBc0Isb0JBQW9CLEdBQUcsZ0NBQWdDLGtDQUFrQywyQ0FBMkMsc0JBQXNCLG9CQUFvQixHQUFHLGdDQUFnQyxrQ0FBa0MseUNBQXlDLHNCQUFzQixvQkFBb0IsR0FBRyxtQkFBbUIsb0NBQW9DLDBDQUEwQyxtQ0FBbUMsdUJBQXVCLHNCQUFzQiw0QkFBNEIsOENBQThDLDZCQUE2QixHQUFHLGtCQUFrQix5Q0FBeUMsaURBQWlELHVCQUF1QixrQ0FBa0MsNEJBQTRCLHNCQUFzQixHQUFHLHFCQUFxQjtBQUM5bko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvUHJvY2Vzcy9Qcm9jZXNzLm1vZHVsZS5zY3NzP2U0MzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlByb2Nlc3NfY29udGVudENvbnRhaW5lcl9fMzBEOTIge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5Qcm9jZXNzX2NvbnRlbnRJbm5lclRpdGxlX19VXzJpUCB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzU7XFxuICBwYWRkaW5nOiAxMDBweCAxNnB4IDA7XFxufVxcblxcbi5Qcm9jZXNzX2NhcHRpb25fXzFLU0d0IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vLWZvbnQtZmFtaWx5KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1tb25vLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbXMpO1xcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XFxuICBjb2xvcjogdmFyKC0tY2FwdGlvbi1jb2xvcik7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5Qcm9jZXNzX2NhcHRpb25fXzFLU0d0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxLjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcHRpb24tY29sb3IpO1xcbiAgdG9wOiAycHg7XFxuICBsZWZ0OiAtMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLlByb2Nlc3Nfc2VjdGlvblRpdGxlX18xbEE5WiB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0yeGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvb2spO1xcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XFxuICBtYXJnaW46IDAgMCA0OHB4IDA7XFxufVxcblxcbi5Qcm9jZXNzX3Byb2Nlc3NDb250YWluZXJfXzJwbWRoIHtcXG4gIHBhZGRpbmc6IDE2cHggMTZweCA0OHB4O1xcbn1cXG5cXG4uUHJvY2Vzc19wcm9jZXNzRGVmaW5lX18ycGx3OSB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxufVxcblxcbi5Qcm9jZXNzX3Byb2Nlc3NEZXNjcmlwdGlvbl9fM2JkaXkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxufVxcblxcbi5Qcm9jZXNzX3Rvb2xzTGlzdF9fMktURjcge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcyk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9Qcm9jZXNzLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vZGVzaWduLXRva2Vucy9fc2Nzcy12YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQ0RFLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBTHFCO0VBTXJCLGtCQUFBO0VBQ0Esa0JBQUE7QURDRjtBQ0NFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBYm1CO0VBY25CLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEQ0o7O0FBWkE7RUNnQ0UsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JEbEM0QjtBQWtCOUI7O0FBZkE7RUFDRSx1QkFBQTtBQWtCRjs7QUFmQTtFQUNFLGtCQUFBO0FBa0JGOztBQWZBO0VBQ0Usc0NBQUE7QUFrQkY7O0FBZkE7RUFDRSw2QkFBQTtBQWtCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi8uLi9kZXNpZ24tdG9rZW5zL3Njc3MtdmFyaWFibGVzLnNjc3NcXFwiO1xcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uY29udGVudElubmVyVGl0bGUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA1O1xcbiAgcGFkZGluZzogMTAwcHggMTZweCAwO1xcbn1cXG5cXG4uY2FwdGlvbiB7XFxuICBAaW5jbHVkZSBjYXB0aW9uKCk7XFxufVxcblxcbi5zZWN0aW9uVGl0bGUge1xcbiAgQGluY2x1ZGUgdGl0bGUtMnhsKCRtYXJnaW46IDAgMCA0OHB4IDApO1xcbn1cXG5cXG4ucHJvY2Vzc0NvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxNnB4IDE2cHggNDhweDtcXG59XFxuXFxuLnByb2Nlc3NEZWZpbmUge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbn1cXG5cXG4ucHJvY2Vzc0Rlc2NyaXB0aW9uIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbn1cXG5cXG4udG9vbHNMaXN0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXMpO1xcbn1cXG5cIixcIi8vIFNwYWNlcnNcXG4kc3BhY2VyLXhzOiA0cHg7XFxuJHNwYWNlci1zOiA4cHg7XFxuJHNwYWNlci1tOiAxNnB4O1xcbiRzcGFjZXItbDogMjRweDtcXG4kc3BhY2VyLXhsOiAzMnB4O1xcblxcbi8vIEJyZWFrcG9pbnRzXFxuJGJyZWFrcG9pbnQtczogNjQwcHg7XFxuJGJyZWFrcG9pbnQtbTogNzY4cHg7XFxuJGJyZWFrcG9pbnQtbDogMTAyNHB4O1xcbiRicmVha3BvaW50LXhsOiAxMjgwcHg7XFxuXFxuLy8gVHlwb2dyYXBoeVxcbkBtaXhpbiBjYXB0aW9uKCRjb2xvcjogdmFyKC0tY2FwdGlvbi1jb2xvcikpIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vLWZvbnQtZmFtaWx5KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1tb25vLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbXMpO1xcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XFxuICBjb2xvcjogJGNvbG9yO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgJjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMS41cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcXG4gICAgdG9wOiAycHg7XFxuICAgIGxlZnQ6IC0xNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIH1cXG59XFxuXFxuQG1peGluIGNhcHRpb24tcygkbWFyZ2luOiAwIDAgNHB4IDApIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vLWZvbnQtZmFtaWx5KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1tb25vLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcyk7XFxuICBsaW5lLWhlaWdodDogMTMwJTtcXG4gIGNvbG9yOiB2YXIoLS1jYXB0aW9uLWNvbG9yKTtcXG4gIG1hcmdpbjogJG1hcmdpbjtcXG59XFxuXFxuQG1peGluIHRpdGxlLTN4bCgkbWFyZ2luOiAwKSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0zeGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogMTMwJTtcXG4gIG1hcmdpbjogJG1hcmdpbjtcXG59XFxuXFxuQG1peGluIHRpdGxlLTJ4bCgkbWFyZ2luOiAwKSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0yeGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvb2spO1xcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XFxuICBtYXJnaW46ICRtYXJnaW47XFxufVxcblxcbkBtaXhpbiB0aXRsZS14bCgkbWFyZ2luOiAwKSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xcbiAgbWFyZ2luOiAkbWFyZ2luO1xcbn1cXG5cXG5AbWl4aW4gdGl0bGUtbCgkbWFyZ2luOiAwKSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XFxuICBtYXJnaW46ICRtYXJnaW47XFxufVxcblxcbkBtaXhpbiB0aXRsZS1tKCRtYXJnaW46IDApIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW0pO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvb2spO1xcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XFxuICBtYXJnaW46ICRtYXJnaW47XFxufVxcblxcbkBtaXhpbiBib2R5KCkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1saWdodCk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tcyk7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMTgwJTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbkBtaXhpbiBuYXYoKSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9uby1mb250LWZhbWlseSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbW9uby1mb250LXdlaWdodC1yZWd1bGFyKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXMpO1xcbiAgY29sb3I6IHZhcigtLW5hdi1jb2xvcik7XFxuICBsaW5lLWhlaWdodDogMTMwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGVudENvbnRhaW5lclwiOiBcIlByb2Nlc3NfY29udGVudENvbnRhaW5lcl9fMzBEOTJcIixcblx0XCJjb250ZW50SW5uZXJUaXRsZVwiOiBcIlByb2Nlc3NfY29udGVudElubmVyVGl0bGVfX1VfMmlQXCIsXG5cdFwiY2FwdGlvblwiOiBcIlByb2Nlc3NfY2FwdGlvbl9fMUtTR3RcIixcblx0XCJzZWN0aW9uVGl0bGVcIjogXCJQcm9jZXNzX3NlY3Rpb25UaXRsZV9fMWxBOVpcIixcblx0XCJwcm9jZXNzQ29udGFpbmVyXCI6IFwiUHJvY2Vzc19wcm9jZXNzQ29udGFpbmVyX18ycG1kaFwiLFxuXHRcInByb2Nlc3NEZWZpbmVcIjogXCJQcm9jZXNzX3Byb2Nlc3NEZWZpbmVfXzJwbHc5XCIsXG5cdFwicHJvY2Vzc0Rlc2NyaXB0aW9uXCI6IFwiUHJvY2Vzc19wcm9jZXNzRGVzY3JpcHRpb25fXzNiZGl5XCIsXG5cdFwidG9vbHNMaXN0XCI6IFwiUHJvY2Vzc190b29sc0xpc3RfXzJLVEY3XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/homepage/Process/Process.module.scss\n");

/***/ })

});