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
/******/ 			var chunk = require("./" + chunkId + ".main.js");
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/app/pages/HomePage.js":
/*!******************************************!*\
  !*** ./src/client/app/pages/HomePage.js ***!
  \******************************************/
/*! exports provided: homePageLoadData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homePageLoadData\", function() { return homePageLoadData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/users-actions */ \"./src/client/app/store/actions/users-actions.js\");\n\n\n\n\n\nvar HomePage = function HomePage() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var users = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.user;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch(Object(_store_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__[\"getUsersAction\"])());\n  }, []);\n\n  var renderUsers = function renderUsers() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, users && users.map(function (user) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        key: user.id\n      }, user.name);\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"HOME PAGE \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/secondpage\"\n  }, \"GO TO SECOND PAGE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"USERS\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, renderUsers())));\n};\n\nvar homePageLoadData = function homePageLoadData(store) {\n  return store.dispatch(Object(_store_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__[\"getUsersAction\"])());\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/client/app/pages/HomePage.js?");

/***/ }),

/***/ "./src/client/app/routes.js":
/*!**********************************!*\
  !*** ./src/client/app/routes.js ***!
  \**********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/HomePage */ \"./src/client/app/pages/HomePage.js\");\n\nvar HomePage = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"pages-HomePage\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/HomePage */ \"./src/client/app/pages/HomePage.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/HomePage */ \"./src/client/app/pages/HomePage.js\");\n    }\n\n    return eval('require.resolve')(\"./pages/HomePage\");\n  }\n});\nvar SecondPage = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"pages-SecondPage\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | pages-SecondPage */ \"pages-SecondPage\").then(__webpack_require__.bind(null, /*! ./pages/SecondPage */ \"./src/client/app/pages/SecondPage.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/SecondPage */ \"./src/client/app/pages/SecondPage.js\");\n    }\n\n    return eval('require.resolve')(\"./pages/SecondPage\");\n  }\n});\n\nvar routes = [{\n  path: \"/homepage\",\n  component: HomePage,\n  loadData: _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__[\"homePageLoadData\"]\n}, {\n  path: \"/secondpage\",\n  component: SecondPage\n}];\n\n//# sourceURL=webpack:///./src/client/app/routes.js?");

/***/ }),

/***/ "./src/client/app/store/actions/users-actions.js":
/*!*******************************************************!*\
  !*** ./src/client/app/store/actions/users-actions.js ***!
  \*******************************************************/
/*! exports provided: getUsersAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsersAction\", function() { return getUsersAction; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types_user_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/user-types */ \"./src/client/app/store/types/user-types.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar getUsersAction = function getUsersAction() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://jsonplaceholder.typicode.com/users');\n\n            case 2:\n              res = _context.sent;\n              dispatch({\n                type: _types_user_types__WEBPACK_IMPORTED_MODULE_1__[\"GET_USERS\"],\n                payload: res.data\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/client/app/store/actions/users-actions.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usersReducer\", function() { return usersReducer; });\n/* harmony import */ var _types_user_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/user-types */ \"./src/client/app/store/types/user-types.js\");\n\nvar initialState;\n\nif (typeof window !== \"undefined\") {\n  initialState = window.INITIAL_STATE.user;\n} else {\n  initialState = [];\n}\n\nvar usersReducer = function usersReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _types_user_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_USERS\"]:\n      return action.payload;\n\n    default:\n      return initialState;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/app/store/reducers/users-reducer.js?");

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

/***/ "./src/server/main.js":
/*!****************************!*\
  !*** ./src/server/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/app/routes */ \"./src/client/app/routes.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _client_app_store_reducers_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../client/app/store/reducers/index */ \"./src/client/app/store/reducers/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(\"/build\", express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_4___default.a.join(__dirname, \"../../build\")));\nvar nodeStats = path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(__dirname, \"../../build/node/loadable-stats.json\");\nvar webStats = path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(__dirname, \"../../build/client/loadable-stats.json\");\napp.get(\"*\", function (req, res) {\n  // REDUX STORE\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"createStore\"])(_client_app_store_reducers_index__WEBPACK_IMPORTED_MODULE_11__[\"default\"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_10__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_9___default.a)));\n  var routesMatched = Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"matchRoutes\"])(_client_app_routes__WEBPACK_IMPORTED_MODULE_7__[\"routes\"], req.path);\n  var promises = routesMatched.map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  });\n  Promise.all(promises).then(function () {\n    var nodeExtractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_6__[\"ChunkExtractor\"]({\n      statsFile: nodeStats\n    });\n\n    var _nodeExtractor$requir = nodeExtractor.requireEntrypoint(),\n        App = _nodeExtractor$requir[\"default\"];\n\n    var webExtractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_6__[\"ChunkExtractor\"]({\n      statsFile: webStats\n    });\n    var jsx = webExtractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, {\n      location: req.path,\n      store: store\n    }));\n    var html = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(jsx);\n    res.set(\"content-type\", \"text/html\");\n    res.send(\"\\n        <!DOCTYPE html>\\n        <html lang=\\\"tr\\\">\\n          <head>\\n          \".concat(webExtractor.getLinkTags(), \"\\n          \").concat(webExtractor.getStyleTags(), \"\\n          </head>\\n          <body>\\n            <div id=\\\"main\\\">\").concat(html, \"</div>\\n            <script>\\n              window.INITIAL_STATE = \").concat(JSON.stringify(store.getState()), \"\\n            </script>\\n            \").concat(webExtractor.getScriptTags(), \"\\n          </body>\\n        </html>\\n      \"));\n  });\n});\napp.listen(4000, function () {\n  return console.log(\"KALKTIM...\");\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"src/server\"))\n\n//# sourceURL=webpack:///./src/server/main.js?");

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

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/server\");\n\n//# sourceURL=webpack:///external_%22@loadable/server%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

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