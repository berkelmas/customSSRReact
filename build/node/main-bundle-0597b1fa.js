module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"pages-HomePage":"pages-HomePage","pages-SecondPage":"pages-SecondPage"}[chunkId]||chunkId) + "-bundle-" + {"pages-HomePage":"5120d361","pages-SecondPage":"b137b7f8"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/node/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/app/main-node.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/app/App.js":
/*!*******************************!*\
  !*** ./src/client/app/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store_reducers_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/reducers/index */ \"./src/client/app/store/reducers/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ \"./src/client/app/routes.js\");\n\n\n // REACT ROUTER\n\n\n // REDUX\n\n\n\n\n\n\n\nvar App;\n\nif (typeof window !== \"undefined\") {\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__[\"createStore\"])(_store_reducers_index__WEBPACK_IMPORTED_MODULE_9__[\"default\"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_6__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_7___default.a)));\n\n  App = function App() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"BrowserRouter\"], null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_10__[\"routes\"])));\n  };\n} else {\n  App = function App(props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n      store: props.store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n      context: {},\n      location: props.location\n    }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_10__[\"routes\"])));\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/app/App.js?");

/***/ }),

/***/ "./src/client/app/main-node.js":
/*!*************************************!*\
  !*** ./src/client/app/main-node.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/client/app/App.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/client/app/main-node.js?");

/***/ }),

/***/ "./src/client/app/routes.js":
/*!**********************************!*\
  !*** ./src/client/app/routes.js ***!
  \**********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\nvar HomePage = loadable({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"pages-HomePage\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | pages-HomePage */ \"pages-HomePage\").then(__webpack_require__.bind(null, /*! ./pages/HomePage */ \"./src/client/app/pages/HomePage.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/HomePage */ \"./src/client/app/pages/HomePage.js\");\n    }\n\n    return eval('require.resolve')(\"./pages/HomePage\");\n  }\n});\nvar SecondPage = loadable({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"pages-SecondPage\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | pages-SecondPage */ \"pages-SecondPage\").then(__webpack_require__.bind(null, /*! ./pages/SecondPage */ \"./src/client/app/pages/SecondPage.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/SecondPage */ \"./src/client/app/pages/SecondPage.js\");\n    }\n\n    return eval('require.resolve')(\"./pages/SecondPage\");\n  }\n});\nvar routes = [{\n  path: \"/homepage\",\n  component: HomePage\n}, {\n  path: \"/secondpage\",\n  component: SecondPage\n}];\n\n//# sourceURL=webpack:///./src/client/app/routes.js?");

/***/ }),

/***/ "./src/client/app/store/reducers/index.js":
/*!************************************************!*\
  !*** ./src/client/app/store/reducers/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-reducer */ \"./src/client/app/store/reducers/users-reducer.js\");\n\n\nvar RootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  user: _users_reducer__WEBPACK_IMPORTED_MODULE_1__[\"usersReducer\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (RootReducer);\n\n//# sourceURL=webpack:///./src/client/app/store/reducers/index.js?");

/***/ }),

/***/ "./src/client/app/store/reducers/users-reducer.js":
/*!********************************************************!*\
  !*** ./src/client/app/store/reducers/users-reducer.js ***!
  \********************************************************/
/*! exports provided: usersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usersReducer\", function() { return usersReducer; });\n/* harmony import */ var _types_user_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/user-types */ \"./src/client/app/store/types/user-types.js\");\n\nvar initialState = [];\nvar usersReducer = function usersReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _types_user_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_USERS\"]:\n      return action.payload;\n\n    default:\n      return initialState;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/app/store/reducers/users-reducer.js?");

/***/ }),

/***/ "./src/client/app/store/types/user-types.js":
/*!**************************************************!*\
  !*** ./src/client/app/store/types/user-types.js ***!
  \**************************************************/
/*! exports provided: GET_USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_USERS\", function() { return GET_USERS; });\nvar GET_USERS = 'get_users_type';\n\n//# sourceURL=webpack:///./src/client/app/store/types/user-types.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/component\");\n\n//# sourceURL=webpack:///external_%22@loadable/component%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });