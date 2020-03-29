exports.ids = ["pages-HomePage"];
exports.modules = {

/***/ "./src/client/app/pages/HomePage.js":
/*!******************************************!*\
  !*** ./src/client/app/pages/HomePage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/users-actions */ \"./src/client/app/store/actions/users-actions.js\");\n\n\n\n\n\nvar HomePage = function HomePage() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var users = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.user;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {}, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"HOME PAGE \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/secondpage\"\n  }, \"GO TO SECOND PAGE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"USERS\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Deneme\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/client/app/pages/HomePage.js?");

/***/ }),

/***/ "./src/client/app/store/actions/users-actions.js":
/*!*******************************************************!*\
  !*** ./src/client/app/store/actions/users-actions.js ***!
  \*******************************************************/
/*! exports provided: getUsersAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsersAction\", function() { return getUsersAction; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types_user_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/user-types */ \"./src/client/app/store/types/user-types.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar getUsersAction = function getUsersAction() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://jsonplaceholder.typicode.com/users');\n\n            case 2:\n              res = _context.sent;\n              dispatch({\n                type: _types_user_types__WEBPACK_IMPORTED_MODULE_1__[\"GET_USERS\"],\n                payload: res.data\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/client/app/store/actions/users-actions.js?");

/***/ })

};;