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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Process_contentContainer__30D92 {\\n  grid-area: 2/2/3/3;\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  position: relative;\\n  z-index: 3;\\n}\\n\\n.Process_contentInnerTitle__U_2iP {\\n  grid-area: 1/1/2/5;\\n  padding: 100px 16px 0;\\n}\\n\\n.Process_caption__1KSGt {\\n  font-family: var(--mono-font-family);\\n  font-weight: var(--mono-font-weight-regular);\\n  font-size: var(--font-size-ms);\\n  line-height: 130%;\\n  color: var(--caption-color);\\n  margin-bottom: 4px;\\n  position: relative;\\n}\\n.Process_caption__1KSGt::before {\\n  content: \\\"\\\";\\n  display: block;\\n  width: 1.5px;\\n  background-color: var(--caption-color);\\n  top: 2px;\\n  left: -16px;\\n  height: 16px;\\n  position: absolute;\\n}\\n\\n.Process_sectionTitle__1lA9Z {\\n  font-size: var(--font-size-2xl);\\n  font-weight: var(--font-weight-book);\\n  line-height: 130%;\\n  margin: 0 0 48px 0;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Process.module.scss\",\"webpack://../../../design-tokens/_scss-variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,kBAAA;EACA,aAAA;EACA,qCAAA;EACA,kBAAA;EACA,UAAA;AADF;;AAIA;EACE,kBAAA;EACA,qBAAA;AADF;;AAIA;ECAE,oCAAA;EACA,4CAAA;EACA,8BAAA;EACA,iBAAA;EACA,2BALqB;EAMrB,kBAAA;EACA,kBAAA;ADAF;ACEE;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,sCAbmB;EAcnB,QAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;ADAJ;;AAZA;ECiCE,+BAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBDnC4B;AAkB9B\",\"sourcesContent\":[\"@import \\\"../../../design-tokens/scss-variables.scss\\\";\\n\\n.contentContainer {\\n  grid-area: 2 / 2 / 3 / 3;\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  position: relative;\\n  z-index: 3;\\n}\\n\\n.contentInnerTitle {\\n  grid-area: 1 / 1 / 2 / 5;\\n  padding: 100px 16px 0;\\n}\\n\\n.caption {\\n  @include caption();\\n}\\n\\n.sectionTitle {\\n  @include title-2xl($margin: 0 0 48px 0);\\n}\\n\",\"// Spacers\\n$spacer-xs: 4px;\\n$spacer-s: 8px;\\n$spacer-m: 16px;\\n$spacer-l: 24px;\\n$spacer-xl: 32px;\\n\\n// Breakpoints\\n$breakpoint-s: 640px;\\n$breakpoint-m: 768px;\\n$breakpoint-l: 1024px;\\n$breakpoint-xl: 1280px;\\n\\n// Typography\\n@mixin caption($color: var(--caption-color)) {\\n  font-family: var(--mono-font-family);\\n  font-weight: var(--mono-font-weight-regular);\\n  font-size: var(--font-size-ms);\\n  line-height: 130%;\\n  color: $color;\\n  margin-bottom: 4px;\\n  position: relative;\\n\\n  &::before {\\n    content: \\\"\\\";\\n    display: block;\\n    width: 1.5px;\\n    background-color: $color;\\n    top: 2px;\\n    left: -16px;\\n    height: 16px;\\n    position: absolute;\\n  }\\n}\\n\\n@mixin caption-s($margin: 0 0 4px 0) {\\n  font-family: var(--mono-font-family);\\n  font-weight: var(--mono-font-weight-regular);\\n  font-size: var(--font-size-s);\\n  line-height: 130%;\\n  color: var(--caption-color);\\n  margin: $margin;\\n}\\n\\n@mixin title-3xl($margin: 0) {\\n  font-size: var(--font-size-3xl);\\n  font-weight: var(--font-weight-medium);\\n  line-height: 130%;\\n  margin: $margin;\\n}\\n\\n@mixin title-2xl($margin: 0) {\\n  font-size: var(--font-size-2xl);\\n  font-weight: var(--font-weight-book);\\n  line-height: 130%;\\n  margin: $margin;\\n}\\n\\n@mixin title-xl($margin: 0) {\\n  font-size: var(--font-size-xl);\\n  font-weight: var(--font-weight-medium);\\n  line-height: 130%;\\n  margin: $margin;\\n}\\n\\n@mixin title-l($margin: 0) {\\n  font-size: var(--font-size-l);\\n  font-weight: var(--font-weight-medium);\\n  line-height: 130%;\\n  margin: $margin;\\n}\\n\\n@mixin title-m($margin: 0) {\\n  font-size: var(--font-size-m);\\n  font-weight: var(--font-weight-book);\\n  line-height: 130%;\\n  margin: $margin;\\n}\\n\\n@mixin body() {\\n  font-family: var(--font-family);\\n  font-weight: var(--font-weight-light);\\n  font-size: var(--font-size-ms);\\n  font-style: normal;\\n  line-height: 180%;\\n  letter-spacing: 0.03rem;\\n  background-color: var(--background-color);\\n  color: var(--text-color);\\n}\\n\\n@mixin nav() {\\n  font-family: var(--mono-font-family);\\n  font-weight: var(--mono-font-weight-regular);\\n  font-style: normal;\\n  font-size: var(--font-size-s);\\n  color: var(--nav-color);\\n  line-height: 130%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"contentContainer\": \"Process_contentContainer__30D92\",\n\t\"contentInnerTitle\": \"Process_contentInnerTitle__U_2iP\",\n\t\"caption\": \"Process_caption__1KSGt\",\n\t\"sectionTitle\": \"Process_sectionTitle__1lA9Z\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVs0XSEuL2NvbXBvbmVudHMvaG9tZXBhZ2UvUHJvY2Vzcy9Qcm9jZXNzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw0RUFBNEUsdUJBQXVCLGtCQUFrQiwwQ0FBMEMsdUJBQXVCLGVBQWUsR0FBRyx1Q0FBdUMsdUJBQXVCLDBCQUEwQixHQUFHLDZCQUE2Qix5Q0FBeUMsaURBQWlELG1DQUFtQyxzQkFBc0IsZ0NBQWdDLHVCQUF1Qix1QkFBdUIsR0FBRyxtQ0FBbUMsa0JBQWtCLG1CQUFtQixpQkFBaUIsMkNBQTJDLGFBQWEsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxrQ0FBa0Msb0NBQW9DLHlDQUF5QyxzQkFBc0IsdUJBQXVCLEdBQUcsT0FBTyw0SUFBNEksV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsYUFBYSxrRkFBa0YsdUJBQXVCLDZCQUE2QixrQkFBa0IsMENBQTBDLHVCQUF1QixlQUFlLEdBQUcsd0JBQXdCLDZCQUE2QiwwQkFBMEIsR0FBRyxjQUFjLHVCQUF1QixHQUFHLG1CQUFtQiw0Q0FBNEMsR0FBRyxpQ0FBaUMsaUJBQWlCLGtCQUFrQixrQkFBa0IsbUJBQW1CLHlDQUF5Qyx1QkFBdUIsd0JBQXdCLHlCQUF5QixpRUFBaUUseUNBQXlDLGlEQUFpRCxtQ0FBbUMsc0JBQXNCLGtCQUFrQix1QkFBdUIsdUJBQXVCLGlCQUFpQixvQkFBb0IscUJBQXFCLG1CQUFtQiwrQkFBK0IsZUFBZSxrQkFBa0IsbUJBQW1CLHlCQUF5QixLQUFLLEdBQUcsMENBQTBDLHlDQUF5QyxpREFBaUQsa0NBQWtDLHNCQUFzQixnQ0FBZ0Msb0JBQW9CLEdBQUcsa0NBQWtDLG9DQUFvQywyQ0FBMkMsc0JBQXNCLG9CQUFvQixHQUFHLGtDQUFrQyxvQ0FBb0MseUNBQXlDLHNCQUFzQixvQkFBb0IsR0FBRyxpQ0FBaUMsbUNBQW1DLDJDQUEyQyxzQkFBc0Isb0JBQW9CLEdBQUcsZ0NBQWdDLGtDQUFrQywyQ0FBMkMsc0JBQXNCLG9CQUFvQixHQUFHLGdDQUFnQyxrQ0FBa0MseUNBQXlDLHNCQUFzQixvQkFBb0IsR0FBRyxtQkFBbUIsb0NBQW9DLDBDQUEwQyxtQ0FBbUMsdUJBQXVCLHNCQUFzQiw0QkFBNEIsOENBQThDLDZCQUE2QixHQUFHLGtCQUFrQix5Q0FBeUMsaURBQWlELHVCQUF1QixrQ0FBa0MsNEJBQTRCLHNCQUFzQixHQUFHLHFCQUFxQjtBQUNyOEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWVwYWdlL1Byb2Nlc3MvUHJvY2Vzcy5tb2R1bGUuc2Nzcz9lNDM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Qcm9jZXNzX2NvbnRlbnRDb250YWluZXJfXzMwRDkyIHtcXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLlByb2Nlc3NfY29udGVudElubmVyVGl0bGVfX1VfMmlQIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvNTtcXG4gIHBhZGRpbmc6IDEwMHB4IDE2cHggMDtcXG59XFxuXFxuLlByb2Nlc3NfY2FwdGlvbl9fMUtTR3Qge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8tZm9udC1mYW1pbHkpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLW1vbm8tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tcyk7XFxuICBsaW5lLWhlaWdodDogMTMwJTtcXG4gIGNvbG9yOiB2YXIoLS1jYXB0aW9uLWNvbG9yKTtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLlByb2Nlc3NfY2FwdGlvbl9fMUtTR3Q6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEuNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FwdGlvbi1jb2xvcik7XFxuICB0b3A6IDJweDtcXG4gIGxlZnQ6IC0xNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uUHJvY2Vzc19zZWN0aW9uVGl0bGVfXzFsQTlaIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTJ4bCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9vayk7XFxuICBsaW5lLWhlaWdodDogMTMwJTtcXG4gIG1hcmdpbjogMCAwIDQ4cHggMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL1Byb2Nlc3MubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi9kZXNpZ24tdG9rZW5zL19zY3NzLXZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQ0FFLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBTHFCO0VBTXJCLGtCQUFBO0VBQ0Esa0JBQUE7QURBRjtBQ0VFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBYm1CO0VBY25CLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEQUo7O0FBWkE7RUNpQ0UsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JEbkM0QjtBQWtCOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vLi4vZGVzaWduLXRva2Vucy9zY3NzLXZhcmlhYmxlcy5zY3NzXFxcIjtcXG5cXG4uY29udGVudENvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5jb250ZW50SW5uZXJUaXRsZSB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDU7XFxuICBwYWRkaW5nOiAxMDBweCAxNnB4IDA7XFxufVxcblxcbi5jYXB0aW9uIHtcXG4gIEBpbmNsdWRlIGNhcHRpb24oKTtcXG59XFxuXFxuLnNlY3Rpb25UaXRsZSB7XFxuICBAaW5jbHVkZSB0aXRsZS0yeGwoJG1hcmdpbjogMCAwIDQ4cHggMCk7XFxufVxcblwiLFwiLy8gU3BhY2Vyc1xcbiRzcGFjZXIteHM6IDRweDtcXG4kc3BhY2VyLXM6IDhweDtcXG4kc3BhY2VyLW06IDE2cHg7XFxuJHNwYWNlci1sOiAyNHB4O1xcbiRzcGFjZXIteGw6IDMycHg7XFxuXFxuLy8gQnJlYWtwb2ludHNcXG4kYnJlYWtwb2ludC1zOiA2NDBweDtcXG4kYnJlYWtwb2ludC1tOiA3NjhweDtcXG4kYnJlYWtwb2ludC1sOiAxMDI0cHg7XFxuJGJyZWFrcG9pbnQteGw6IDEyODBweDtcXG5cXG4vLyBUeXBvZ3JhcGh5XFxuQG1peGluIGNhcHRpb24oJGNvbG9yOiB2YXIoLS1jYXB0aW9uLWNvbG9yKSkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8tZm9udC1mYW1pbHkpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLW1vbm8tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tcyk7XFxuICBsaW5lLWhlaWdodDogMTMwJTtcXG4gIGNvbG9yOiAkY29sb3I7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAmOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxLjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xcbiAgICB0b3A6IDJweDtcXG4gICAgbGVmdDogLTE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gY2FwdGlvbi1zKCRtYXJnaW46IDAgMCA0cHggMCkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8tZm9udC1mYW1pbHkpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLW1vbm8tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zKTtcXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xcbiAgY29sb3I6IHZhcigtLWNhcHRpb24tY29sb3IpO1xcbiAgbWFyZ2luOiAkbWFyZ2luO1xcbn1cXG5cXG5AbWl4aW4gdGl0bGUtM3hsKCRtYXJnaW46IDApIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTN4bCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xcbiAgbWFyZ2luOiAkbWFyZ2luO1xcbn1cXG5cXG5AbWl4aW4gdGl0bGUtMnhsKCRtYXJnaW46IDApIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTJ4bCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9vayk7XFxuICBsaW5lLWhlaWdodDogMTMwJTtcXG4gIG1hcmdpbjogJG1hcmdpbjtcXG59XFxuXFxuQG1peGluIHRpdGxlLXhsKCRtYXJnaW46IDApIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XFxuICBtYXJnaW46ICRtYXJnaW47XFxufVxcblxcbkBtaXhpbiB0aXRsZS1sKCRtYXJnaW46IDApIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogMTMwJTtcXG4gIG1hcmdpbjogJG1hcmdpbjtcXG59XFxuXFxuQG1peGluIHRpdGxlLW0oJG1hcmdpbjogMCkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9vayk7XFxuICBsaW5lLWhlaWdodDogMTMwJTtcXG4gIG1hcmdpbjogJG1hcmdpbjtcXG59XFxuXFxuQG1peGluIGJvZHkoKSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1zKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxODAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuQG1peGluIG5hdigpIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vLWZvbnQtZmFtaWx5KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1tb25vLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcyk7XFxuICBjb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiUHJvY2Vzc19jb250ZW50Q29udGFpbmVyX18zMEQ5MlwiLFxuXHRcImNvbnRlbnRJbm5lclRpdGxlXCI6IFwiUHJvY2Vzc19jb250ZW50SW5uZXJUaXRsZV9fVV8yaVBcIixcblx0XCJjYXB0aW9uXCI6IFwiUHJvY2Vzc19jYXB0aW9uX18xS1NHdFwiLFxuXHRcInNlY3Rpb25UaXRsZVwiOiBcIlByb2Nlc3Nfc2VjdGlvblRpdGxlX18xbEE5WlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/homepage/Process/Process.module.scss\n");

/***/ })

});