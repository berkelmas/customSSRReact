(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-HomePage"],{

/***/ "./src/client/app/pages/HomePage.js":
/*!******************************************!*\
  !*** ./src/client/app/pages/HomePage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\nvar HomePage = function HomePage() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var users = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.user;\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"HOME PAGE \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/secondpage\"\n  }, \"GO TO SECOND PAGE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Deneme\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/client/app/pages/HomePage.js?");

/***/ })

}]);