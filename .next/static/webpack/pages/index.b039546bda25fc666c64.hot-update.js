/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/homepage/Books/Books.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/homepage/Books/Books.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Books_contentContainer__3w3yB {\\n  grid-area: 2/2/3/3;\\n  display: grid;\\n  grid-template-rows: repeat(2, auto);\\n  position: relative;\\n  z-index: 3;\\n}\\n\\n.Books_contentInnerTitle__2ga5L {\\n  grid-area: 1/1/2/2;\\n  padding: 16px 16px 0;\\n}\\n\\n.Books_caption__2vnma {\\n  font-family: var(--mono-font-family);\\n  font-weight: var(--mono-font-weight-regular);\\n  font-size: var(--font-size-ms);\\n  line-height: 130%;\\n  color: var(--caption-color);\\n  margin-bottom: 8px;\\n  position: relative;\\n}\\n.Books_caption__2vnma::before {\\n  content: \\\"\\\";\\n  display: block;\\n  width: 1.5px;\\n  background-color: var(--caption-color);\\n  top: 2px;\\n  left: -16px;\\n  height: 16px;\\n  position: absolute;\\n}\\n\\n.Books_sectionTitle__1ZVjA {\\n  font-size: var(--font-size-xl);\\n  font-weight: var(--font-weight-book);\\n  line-height: 130%;\\n  margin: 0 0 48px 0;\\n}\\n@media (min-width: 768px) {\\n  .Books_sectionTitle__1ZVjA {\\n    font-size: var(--font-size-2xl);\\n  }\\n}\\n\\n.Books_bookContainer__3GHnW {\\n  padding: 16px;\\n}\\n\\n.Books_placeholder__BgFU_ {\\n  width: 145px;\\n  height: 220px;\\n  background-color: var(--dk-gray-200);\\n}\\n\\n.Books_bookBodyBold__q02TN {\\n  font-weight: var(--font-weight-medium);\\n  margin-top: 16px;\\n}\\n\\n@media (min-width: 1024px) {\\n  .Books_contentContainer__3w3yB {\\n    grid-template-rows: repeat(4, auto);\\n  }\\n\\n  .Books_contentInnerTitle__2ga5L {\\n    grid-area: 1/1/2/4;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Books.module.scss\",\"webpack://../../../design-tokens/_scss-variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,kBAAA;EACA,aAAA;EACA,mCAAA;EACA,kBAAA;EACA,UAAA;AADF;;AAIA;EACE,kBAAA;EACA,oBAAA;AADF;;AAIA;ECAE,oCAAA;EACA,4CAAA;EACA,8BAAA;EACA,iBAAA;EACA,2BALqB;EAMrB,kBAAA;EACA,kBAAA;ADAF;ACEE;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,sCAbmB;EAcnB,QAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;ADAJ;;AAZA;ECyCE,8BAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBD3C4B;AAkB9B;AC2BE;ED9CF;IC+CI,+BAAA;EDxBF;AACF;;AApBA;EACE,aAAA;AAuBF;;AApBA;EACE,YAAA;EACA,aAAA;EACA,oCAAA;AAuBF;;AApBA;EACE,sCAAA;EACA,gBAAA;AAuBF;;AApBA;EACE;IACE,mCAAA;EAuBF;;EApBA;IACE,kBAAA;EAuBF;AACF\",\"sourcesContent\":[\"@import \\\"../../../design-tokens/scss-variables.scss\\\";\\n\\n.contentContainer {\\n  grid-area: 2 / 2 / 3 / 3;\\n  display: grid;\\n  grid-template-rows: repeat(2, auto);\\n  position: relative;\\n  z-index: 3;\\n}\\n\\n.contentInnerTitle {\\n  grid-area: 1 / 1 / 2 / 2;\\n  padding: 16px 16px 0;\\n}\\n\\n.caption {\\n  @include caption();\\n}\\n\\n.sectionTitle {\\n  @include title-2xl($margin: 0 0 48px 0);\\n}\\n\\n.bookContainer {\\n  padding: 16px;\\n}\\n\\n.placeholder {\\n  width: 145px;\\n  height: 220px;\\n  background-color: var(--dk-gray-200);\\n}\\n\\n.bookBodyBold {\\n  font-weight: var(--font-weight-medium);\\n  margin-top: 16px;\\n}\\n\\n@media (min-width: $breakpoint-l) {\\n  .contentContainer {\\n    grid-template-rows: repeat(4, auto);\\n  }\\n\\n  .contentInnerTitle {\\n    grid-area: 1 / 1 / 2 / 4;\\n  }\\n}\\n\",\"// Spacers\\n$spacer-xs: 4px;\\n$spacer-s: 8px;\\n$spacer-m: 16px;\\n$spacer-l: 24px;\\n$spacer-xl: 32px;\\n\\n// Breakpoints\\n$breakpoint-s: 640px;\\n$breakpoint-m: 768px;\\n$breakpoint-l: 1024px;\\n$breakpoint-xl: 1280px;\\n\\n// Typography\\n@mixin caption($color: var(--caption-color)) {\\n  font-family: var(--mono-font-family);\\n  font-weight: var(--mono-font-weight-regular);\\n  font-size: var(--font-size-ms);\\n  line-height: 130%;\\n  color: $color;\\n  margin-bottom: 8px;\\n  position: relative;\\n\\n  &::before {\\n    content: \\\"\\\";\\n    display: block;\\n    width: 1.5px;\\n    background-color: $color;\\n    top: 2px;\\n    left: -16px;\\n    height: 16px;\\n    position: absolute;\\n  }\\n}\\n\\n@mixin caption-s($margin: 0 0 4px 0) {\\n  font-family: var(--mono-font-family);\\n  font-weight: var(--mono-font-weight-regular);\\n  font-size: var(--font-size-xs);\\n  line-height: 130%;\\n  color: var(--caption-color);\\n  margin: $margin;\\n\\n  @media (min-width: $breakpoint-m) {\\n    font-size: var(--font-size-s);\\n  }\\n}\\n\\n@mixin title-3xl($margin: 0) {\\n  font-size: var(--font-size-2xl);\\n  font-weight: var(--font-weight-medium);\\n  line-height: 120%;\\n  margin: $margin;\\n\\n  @media (min-width: $breakpoint-l) {\\n    font-size: var(--font-size-3xl);\\n  }\\n}\\n\\n@mixin title-2xl($margin: 0) {\\n  font-size: var(--font-size-xl);\\n  font-weight: var(--font-weight-book);\\n  line-height: 130%;\\n  margin: $margin;\\n\\n  @media (min-width: $breakpoint-m) {\\n    font-size: var(--font-size-2xl);\\n  }\\n}\\n\\n@mixin title-xl($margin: 0) {\\n  font-size: var(--font-size-l);\\n  font-weight: var(--font-weight-medium);\\n  line-height: 130%;\\n  margin: $margin;\\n\\n  @media (min-width: $breakpoint-m) {\\n    font-size: var(--font-size-xl);\\n  }\\n}\\n\\n@mixin title-l($margin: 0) {\\n  font-size: var(--font-size-m);\\n  font-weight: var(--font-weight-medium);\\n  line-height: 130%;\\n  margin: $margin;\\n\\n  @media (min-width: $breakpoint-m) {\\n    font-size: var(--font-size-l);\\n  }\\n}\\n\\n@mixin title-m($margin: 0) {\\n  font-size: var(--font-size-s);\\n  font-weight: var(--font-weight-book);\\n  line-height: 130%;\\n  margin: $margin;\\n\\n  @media (min-width: $breakpoint-m) {\\n    font-size: var(--font-size-m);\\n  }\\n}\\n\\n@mixin body() {\\n  font-family: var(--font-family);\\n  font-weight: var(--font-weight-book);\\n  font-size: var(--font-size-ms);\\n  font-style: normal;\\n  line-height: 180%;\\n  letter-spacing: 0.03rem;\\n  background-color: var(--background-color);\\n  color: var(--text-color);\\n  -webkit-font-smoothing: antialiased;\\n}\\n\\n@mixin nav() {\\n  font-family: var(--mono-font-family);\\n  font-weight: var(--mono-font-weight-regular);\\n  font-style: normal;\\n  font-size: var(--font-size-s);\\n  color: var(--nav-color);\\n  line-height: 130%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"contentContainer\": \"Books_contentContainer__3w3yB\",\n\t\"contentInnerTitle\": \"Books_contentInnerTitle__2ga5L\",\n\t\"caption\": \"Books_caption__2vnma\",\n\t\"sectionTitle\": \"Books_sectionTitle__1ZVjA\",\n\t\"bookContainer\": \"Books_bookContainer__3GHnW\",\n\t\"placeholder\": \"Books_placeholder__BgFU_\",\n\t\"bookBodyBold\": \"Books_bookBodyBold__q02TN\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVs0XSEuL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm9va3MvQm9va3MubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDBFQUEwRSx1QkFBdUIsa0JBQWtCLHdDQUF3Qyx1QkFBdUIsZUFBZSxHQUFHLHFDQUFxQyx1QkFBdUIseUJBQXlCLEdBQUcsMkJBQTJCLHlDQUF5QyxpREFBaUQsbUNBQW1DLHNCQUFzQixnQ0FBZ0MsdUJBQXVCLHVCQUF1QixHQUFHLGlDQUFpQyxrQkFBa0IsbUJBQW1CLGlCQUFpQiwyQ0FBMkMsYUFBYSxnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLGdDQUFnQyxtQ0FBbUMseUNBQXlDLHNCQUFzQix1QkFBdUIsR0FBRyw2QkFBNkIsZ0NBQWdDLHNDQUFzQyxLQUFLLEdBQUcsaUNBQWlDLGtCQUFrQixHQUFHLCtCQUErQixpQkFBaUIsa0JBQWtCLHlDQUF5QyxHQUFHLGdDQUFnQywyQ0FBMkMscUJBQXFCLEdBQUcsZ0NBQWdDLG9DQUFvQywwQ0FBMEMsS0FBSyx1Q0FBdUMseUJBQXlCLEtBQUssR0FBRyxPQUFPLDBJQUEwSSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxhQUFhLE9BQU8sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sZ0ZBQWdGLHVCQUF1Qiw2QkFBNkIsa0JBQWtCLHdDQUF3Qyx1QkFBdUIsZUFBZSxHQUFHLHdCQUF3Qiw2QkFBNkIseUJBQXlCLEdBQUcsY0FBYyx1QkFBdUIsR0FBRyxtQkFBbUIsNENBQTRDLEdBQUcsb0JBQW9CLGtCQUFrQixHQUFHLGtCQUFrQixpQkFBaUIsa0JBQWtCLHlDQUF5QyxHQUFHLG1CQUFtQiwyQ0FBMkMscUJBQXFCLEdBQUcsdUNBQXVDLHVCQUF1QiwwQ0FBMEMsS0FBSywwQkFBMEIsK0JBQStCLEtBQUssR0FBRyxpQ0FBaUMsaUJBQWlCLGtCQUFrQixrQkFBa0IsbUJBQW1CLHlDQUF5Qyx1QkFBdUIsd0JBQXdCLHlCQUF5QixpRUFBaUUseUNBQXlDLGlEQUFpRCxtQ0FBbUMsc0JBQXNCLGtCQUFrQix1QkFBdUIsdUJBQXVCLGlCQUFpQixvQkFBb0IscUJBQXFCLG1CQUFtQiwrQkFBK0IsZUFBZSxrQkFBa0IsbUJBQW1CLHlCQUF5QixLQUFLLEdBQUcsMENBQTBDLHlDQUF5QyxpREFBaUQsbUNBQW1DLHNCQUFzQixnQ0FBZ0Msb0JBQW9CLHlDQUF5QyxvQ0FBb0MsS0FBSyxHQUFHLGtDQUFrQyxvQ0FBb0MsMkNBQTJDLHNCQUFzQixvQkFBb0IseUNBQXlDLHNDQUFzQyxLQUFLLEdBQUcsa0NBQWtDLG1DQUFtQyx5Q0FBeUMsc0JBQXNCLG9CQUFvQix5Q0FBeUMsc0NBQXNDLEtBQUssR0FBRyxpQ0FBaUMsa0NBQWtDLDJDQUEyQyxzQkFBc0Isb0JBQW9CLHlDQUF5QyxxQ0FBcUMsS0FBSyxHQUFHLGdDQUFnQyxrQ0FBa0MsMkNBQTJDLHNCQUFzQixvQkFBb0IseUNBQXlDLG9DQUFvQyxLQUFLLEdBQUcsZ0NBQWdDLGtDQUFrQyx5Q0FBeUMsc0JBQXNCLG9CQUFvQix5Q0FBeUMsb0NBQW9DLEtBQUssR0FBRyxtQkFBbUIsb0NBQW9DLHlDQUF5QyxtQ0FBbUMsdUJBQXVCLHNCQUFzQiw0QkFBNEIsOENBQThDLDZCQUE2Qix3Q0FBd0MsR0FBRyxrQkFBa0IseUNBQXlDLGlEQUFpRCx1QkFBdUIsa0NBQWtDLDRCQUE0QixzQkFBc0IsR0FBRyxxQkFBcUI7QUFDdmtMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lcGFnZS9Cb29rcy9Cb29rcy5tb2R1bGUuc2Nzcz83ZDZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Cb29rc19jb250ZW50Q29udGFpbmVyX18zdzN5QiB7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uQm9va3NfY29udGVudElubmVyVGl0bGVfXzJnYTVMIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIHBhZGRpbmc6IDE2cHggMTZweCAwO1xcbn1cXG5cXG4uQm9va3NfY2FwdGlvbl9fMnZubWEge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8tZm9udC1mYW1pbHkpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLW1vbm8tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tcyk7XFxuICBsaW5lLWhlaWdodDogMTMwJTtcXG4gIGNvbG9yOiB2YXIoLS1jYXB0aW9uLWNvbG9yKTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLkJvb2tzX2NhcHRpb25fXzJ2bm1hOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxLjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcHRpb24tY29sb3IpO1xcbiAgdG9wOiAycHg7XFxuICBsZWZ0OiAtMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLkJvb2tzX3NlY3Rpb25UaXRsZV9fMVpWakEge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvb2spO1xcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XFxuICBtYXJnaW46IDAgMCA0OHB4IDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLkJvb2tzX3NlY3Rpb25UaXRsZV9fMVpWakEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0yeGwpO1xcbiAgfVxcbn1cXG5cXG4uQm9va3NfYm9va0NvbnRhaW5lcl9fM0dIblcge1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLkJvb2tzX3BsYWNlaG9sZGVyX19CZ0ZVXyB7XFxuICB3aWR0aDogMTQ1cHg7XFxuICBoZWlnaHQ6IDIyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGstZ3JheS0yMDApO1xcbn1cXG5cXG4uQm9va3NfYm9va0JvZHlCb2xkX19xMDJUTiB7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5Cb29rc19jb250ZW50Q29udGFpbmVyX18zdzN5QiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pO1xcbiAgfVxcblxcbiAgLkJvb2tzX2NvbnRlbnRJbm5lclRpdGxlX18yZ2E1TCB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvNDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0Jvb2tzLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vZGVzaWduLXRva2Vucy9fc2Nzcy12YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUNBRSxvQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUxxQjtFQU1yQixrQkFBQTtFQUNBLGtCQUFBO0FEQUY7QUNFRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQWJtQjtFQWNuQixRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBREFKOztBQVpBO0VDeUNFLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCRDNDNEI7QUFrQjlCO0FDMkJFO0VEOUNGO0lDK0NJLCtCQUFBO0VEeEJGO0FBQ0Y7O0FBcEJBO0VBQ0UsYUFBQTtBQXVCRjs7QUFwQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FBdUJGOztBQXBCQTtFQUNFLHNDQUFBO0VBQ0EsZ0JBQUE7QUF1QkY7O0FBcEJBO0VBQ0U7SUFDRSxtQ0FBQTtFQXVCRjs7RUFwQkE7SUFDRSxrQkFBQTtFQXVCRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uLy4uLy4uL2Rlc2lnbi10b2tlbnMvc2Nzcy12YXJpYWJsZXMuc2Nzc1xcXCI7XFxuXFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLmNvbnRlbnRJbm5lclRpdGxlIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gIHBhZGRpbmc6IDE2cHggMTZweCAwO1xcbn1cXG5cXG4uY2FwdGlvbiB7XFxuICBAaW5jbHVkZSBjYXB0aW9uKCk7XFxufVxcblxcbi5zZWN0aW9uVGl0bGUge1xcbiAgQGluY2x1ZGUgdGl0bGUtMnhsKCRtYXJnaW46IDAgMCA0OHB4IDApO1xcbn1cXG5cXG4uYm9va0NvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4ucGxhY2Vob2xkZXIge1xcbiAgd2lkdGg6IDE0NXB4O1xcbiAgaGVpZ2h0OiAyMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRrLWdyYXktMjAwKTtcXG59XFxuXFxuLmJvb2tCb2R5Qm9sZCB7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sKSB7XFxuICAuY29udGVudENvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pO1xcbiAgfVxcblxcbiAgLmNvbnRlbnRJbm5lclRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xcbiAgfVxcbn1cXG5cIixcIi8vIFNwYWNlcnNcXG4kc3BhY2VyLXhzOiA0cHg7XFxuJHNwYWNlci1zOiA4cHg7XFxuJHNwYWNlci1tOiAxNnB4O1xcbiRzcGFjZXItbDogMjRweDtcXG4kc3BhY2VyLXhsOiAzMnB4O1xcblxcbi8vIEJyZWFrcG9pbnRzXFxuJGJyZWFrcG9pbnQtczogNjQwcHg7XFxuJGJyZWFrcG9pbnQtbTogNzY4cHg7XFxuJGJyZWFrcG9pbnQtbDogMTAyNHB4O1xcbiRicmVha3BvaW50LXhsOiAxMjgwcHg7XFxuXFxuLy8gVHlwb2dyYXBoeVxcbkBtaXhpbiBjYXB0aW9uKCRjb2xvcjogdmFyKC0tY2FwdGlvbi1jb2xvcikpIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vLWZvbnQtZmFtaWx5KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1tb25vLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbXMpO1xcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XFxuICBjb2xvcjogJGNvbG9yO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgJjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMS41cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcXG4gICAgdG9wOiAycHg7XFxuICAgIGxlZnQ6IC0xNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIH1cXG59XFxuXFxuQG1peGluIGNhcHRpb24tcygkbWFyZ2luOiAwIDAgNHB4IDApIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vLWZvbnQtZmFtaWx5KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1tb25vLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XFxuICBjb2xvcjogdmFyKC0tY2FwdGlvbi1jb2xvcik7XFxuICBtYXJnaW46ICRtYXJnaW47XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbSkge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zKTtcXG4gIH1cXG59XFxuXFxuQG1peGluIHRpdGxlLTN4bCgkbWFyZ2luOiAwKSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0yeGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogMTIwJTtcXG4gIG1hcmdpbjogJG1hcmdpbjtcXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sKSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTN4bCk7XFxuICB9XFxufVxcblxcbkBtaXhpbiB0aXRsZS0yeGwoJG1hcmdpbjogMCkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvb2spO1xcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XFxuICBtYXJnaW46ICRtYXJnaW47XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbSkge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0yeGwpO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gdGl0bGUteGwoJG1hcmdpbjogMCkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xcbiAgbWFyZ2luOiAkbWFyZ2luO1xcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW0pIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gdGl0bGUtbCgkbWFyZ2luOiAwKSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XFxuICBtYXJnaW46ICRtYXJnaW47XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbSkge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sKTtcXG4gIH1cXG59XFxuXFxuQG1peGluIHRpdGxlLW0oJG1hcmdpbjogMCkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcyk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9vayk7XFxuICBsaW5lLWhlaWdodDogMTMwJTtcXG4gIG1hcmdpbjogJG1hcmdpbjtcXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tKSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW0pO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYm9keSgpIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9vayk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tcyk7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMTgwJTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuQG1peGluIG5hdigpIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vLWZvbnQtZmFtaWx5KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1tb25vLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcyk7XFxuICBjb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiQm9va3NfY29udGVudENvbnRhaW5lcl9fM3czeUJcIixcblx0XCJjb250ZW50SW5uZXJUaXRsZVwiOiBcIkJvb2tzX2NvbnRlbnRJbm5lclRpdGxlX18yZ2E1TFwiLFxuXHRcImNhcHRpb25cIjogXCJCb29rc19jYXB0aW9uX18ydm5tYVwiLFxuXHRcInNlY3Rpb25UaXRsZVwiOiBcIkJvb2tzX3NlY3Rpb25UaXRsZV9fMVpWakFcIixcblx0XCJib29rQ29udGFpbmVyXCI6IFwiQm9va3NfYm9va0NvbnRhaW5lcl9fM0dIbldcIixcblx0XCJwbGFjZWhvbGRlclwiOiBcIkJvb2tzX3BsYWNlaG9sZGVyX19CZ0ZVX1wiLFxuXHRcImJvb2tCb2R5Qm9sZFwiOiBcIkJvb2tzX2Jvb2tCb2R5Qm9sZF9fcTAyVE5cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/homepage/Books/Books.module.scss\n");

/***/ })

});