(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("validate-core", [], factory);
	else if(typeof exports === 'object')
		exports["validate-core"] = factory();
	else
		root["validate-core"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _validators = _interopRequireDefault(__webpack_require__(/*! ./validators */ \"./src/validators/index.js\"));\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// Runs the validators specified by the constraints object:\n// - If validation fails, it will return an array with the errors.\n// - Otherwise it will return undefined.\nvar _default = function _default(value, constraints) {\n  var results = [];\n  if (!(0, _utils.isDefined)(constraints)) return; // Loops through each constraints, finds the correct validator and run it.\n\n  var _arr = Object.keys(constraints);\n\n  for (var _i = 0; _i < _arr.length; _i++) {\n    var rule = _arr[_i];\n    var validator = _validators.default[rule];\n    if (!(0, _utils.isFunction)(validator)) throw new Error('Invalid validator!');\n    var constraint = constraints[rule];\n    var result = validator(value, constraint);\n\n    if (result) {\n      results.push((0, _utils.isArray)(result) ? _toConsumableArray(result) : result);\n    }\n  }\n\n  if (results.length) return results;\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/index.js?");

/***/ }),

/***/ "./src/regexp.js":
/*!***********************!*\
  !*** ./src/regexp.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  EMPTY_STRING: /^\\s*$/,\n  EMAIL: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])$/i,\n  // eslint-disable-line no-control-regex\n  FORMAT_REGEXP: /(%?)%\\{([^}]+)\\}/g,\n  URL: function URL(_ref) {\n    var allowLocal = _ref.allowLocal,\n        schemes = _ref.schemes;\n    var regexp = '^' + // protocol identifier\n    '(?:(?:' + schemes.join('|') + ')://)' + // user:pass authentication\n    '(?:\\\\S+(?::\\\\S*)?@)?' + '(?:';\n    var tld = \"(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff]{2,}))\";\n\n    if (allowLocal) {\n      tld += '?';\n    } else {\n      regexp += // IP address exclusion\n      // private & local networks\n      '(?!(?:10|127)(?:\\\\.\\\\d{1,3}){3})' + '(?!(?:169\\\\.254|192\\\\.168)(?:\\\\.\\\\d{1,3}){2})' + '(?!172\\\\.(?:1[6-9]|2\\\\d|3[0-1])(?:\\\\.\\\\d{1,3}){2})';\n    }\n\n    regexp += // IP address dotted notation octets\n    // excludes loopback network 0.0.0.0\n    // excludes reserved space >= 224.0.0.0\n    // excludes network & broacast addresses\n    // (first & last IP address of each class)\n    '(?:[1-9]\\\\d?|1\\\\d\\\\d|2[01]\\\\d|22[0-3])' + '(?:\\\\.(?:1?\\\\d{1,2}|2[0-4]\\\\d|25[0-5])){2}' + '(?:\\\\.(?:[1-9]\\\\d?|1\\\\d\\\\d|2[0-4]\\\\d|25[0-4]))' + '|' + // host name\n    \"(?:(?:[a-z\\\\u00a1-\\\\uffff0-9]-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)\" + // domain name\n    \"(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff0-9]-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)*\" + tld + ')' + // port number\n    '(?::\\\\d{2,5})?' + // resource path\n    '(?:[/?#]\\\\S*)?' + '$';\n    return new RegExp(regexp, 'i');\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/regexp.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.prettify = exports.formatMessage = exports.capitalize = exports.unique = exports.contains = exports.isHash = exports.isArray = exports.isString = exports.isEmpty = exports.isDefined = exports.isDate = exports.isObject = exports.isBoolean = exports.isFloat = exports.isInteger = exports.isFunction = exports.isNumber = exports.result = void 0;\n\nvar _regexp = _interopRequireDefault(__webpack_require__(/*! ./regexp */ \"./src/regexp.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// If the given argument is a call: function the and: function return the value otherwise just return the value. Additional arguments will be passed as arguments to the function.\n// Example:\n// ```\n// result('foo') // 'foo'\n// result(Math.max, 1, 2) // 2\n// ```\nvar result = function result(value) {\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  return isFunction(value) ? value.apply(null, args) : value;\n}; // Checks if the value is a number. This function does not consider NaN a number like many other `isNumber` functions do.\n\n\nexports.result = result;\n\nvar isNumber = function isNumber(value) {\n  return typeof value === 'number' && !isNaN(value);\n}; // Returns false if the object is not a function\n\n\nexports.isNumber = isNumber;\n\nvar isFunction = function isFunction(value) {\n  return typeof value === 'function';\n}; // A simple check to verify that the value is an integer. Uses `isNumber` and a simple modulo check.\n\n\nexports.isFunction = isFunction;\n\nvar isInteger = function isInteger(value) {\n  return isNumber(value) && value % 1 === 0;\n}; // A simple check to verify that the value is a float. Uses `isNumber` and 'isInteger' functions\n\n\nexports.isInteger = isInteger;\n\nvar isFloat = function isFloat(value) {\n  return isNumber(value) && !isInteger(value);\n}; // Checks if the value is a boolean\n\n\nexports.isFloat = isFloat;\n\nvar isBoolean = function isBoolean(value) {\n  return typeof value === 'boolean';\n}; // Uses the `Object` function to check if the given argument is an object.\n\n\nexports.isBoolean = isBoolean;\n\nvar isObject = function isObject(obj) {\n  return obj === Object(obj);\n}; // Simply checks if the object is an instance of a date\n\n\nexports.isObject = isObject;\n\nvar isDate = function isDate(obj) {\n  return obj instanceof Date;\n}; // Returns false if the object is `null` of `undefined`\n\n\nexports.isDate = isDate;\n\nvar isDefined = function isDefined(obj) {\n  return obj !== null && obj !== undefined;\n}; // Check if value is empty\n\n\nexports.isDefined = isDefined;\n\nvar isEmpty = function isEmpty(value) {\n  // Null and undefined are empty\n  if (!isDefined(value)) return true; // functions are non empty\n\n  if (isFunction(value)) return false; // Whitespace only strings are empty\n\n  if (isString(value)) return _regexp.default.EMPTY_STRING.test(value); // For arrays we use the length property\n\n  if (isArray(value)) return value.length === 0; // Dates have no attributes but aren't empty\n\n  if (isDate(value)) return false; // If we find at least one property we consider it non empty\n\n  if (isObject(value)) {\n    for (var attr in value) {\n      return !attr;\n    }\n\n    return true;\n  }\n\n  return false;\n}; // Checks if value is a string\n\n\nexports.isEmpty = isEmpty;\n\nvar isString = function isString(value) {\n  return typeof value === 'string';\n}; // Check if calue is an array\n\n\nexports.isString = isString;\n\nvar isArray = function isArray(value) {\n  return {}.toString.call(value) === '[object Array]';\n}; // Checks if the object is a hash, which is equivalent to an object that is neither an array, a function nor a date.\n\n\nexports.isArray = isArray;\n\nvar isHash = function isHash(value) {\n  return isObject(value) && !isArray(value) && !isFunction(value) && !isDate(value);\n}; // checks if an object or an array contains a value\n\n\nexports.isHash = isHash;\n\nvar contains = function contains(obj, value) {\n  if (!isDefined(obj)) return false;\n  if (isArray(obj)) return obj.indexOf(value) !== -1;\n  return value in obj;\n}; // Removes duplicates in an array\n\n\nexports.contains = contains;\n\nvar unique = function unique(array) {\n  if (!isArray(array)) return array;\n  return array.filter(function (el, index, array) {\n    return array.indexOf(el) === index;\n  });\n}; // Capitalizes a string\n\n\nexports.unique = unique;\n\nvar capitalize = function capitalize(str) {\n  if (!isString(str)) return str;\n  return str[0].toUpperCase() + str.slice(1);\n}; // Formats the specified strings with the given values like so:\n// ```\n// format(\"Foo: %{foo}\", {foo: \"bar\"}) // \"Foo bar\"\n// ```\n// If you want to write %{...} without having it replaced simply prefix it with % like this `Foo: %%{foo}` and it will be returned as `\"Foo: %{foo}\"`\n\n\nexports.capitalize = capitalize;\n\nvar formatMessage = function formatMessage(str, vals) {\n  if (!isString(str)) return str;\n  return str.replace(_regexp.default.FORMAT_REGEXP, function (m0, m1, m2) {\n    return m1 === '%' ? \"%{\".concat(m2, \"}\") : String(vals[m2]);\n  });\n}; // \"Prettifies\" the given string. Prettifying means replacing [.\\_-] with spaces as well as splitting camel case words.\n\n\nexports.formatMessage = formatMessage;\n\nvar prettify = function prettify(str) {\n  // If there are more than 2 decimals round it to two\n  if (isNumber(str)) return str * 100 % 1 === 0 ? \"\".concat(str) : parseFloat(Math.round(str * 100) / 100).toFixed(2);\n  if (isArray(str)) return str.map(function (s) {\n    return prettify(s);\n  }).join(', ');\n  if (isObject(str)) return str.toString();\n  return (// Ensure the string is actually a string\n    \"\".concat(str) // Splits keys separated by periods\n    .replace(/([^\\s])\\.([^\\s])/g, '$1 $2') // Removes backslashes\n    .replace(/\\\\+/g, '') // Replaces _ and - with space\n    .replace(/[_-]/g, ' ') // Splits camel cased words\n    .replace(/([a-z])([A-Z])/g, function (m0, m1, m2) {\n      return \"\".concat(m1, \" \").concat(m2.toLowerCase());\n    }).toLowerCase()\n  );\n};\n\nexports.prettify = prettify;\n\n//# sourceURL=webpack://validate-core/./src/utils.js?");

/***/ }),

/***/ "./src/validators/date.js":
/*!********************************!*\
  !*** ./src/validators/date.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _datetime = _interopRequireDefault(__webpack_require__(/*! ./datetime */ \"./src/validators/datetime.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar _default = function _default(value, options) {\n  return (0, _datetime.default)(value, _objectSpread({}, options, {\n    dateOnly: true\n  }));\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/date.js?");

/***/ }),

/***/ "./src/validators/datetime.js":
/*!************************************!*\
  !*** ./src/validators/datetime.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.defaults = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaults = {\n  earlierThan: null,\n  laterThan: null,\n  dateOnly: false,\n  message: null,\n  allowEmpty: false,\n  notValid: 'must be a valid date (${value})',\n  dateOnlyMessage: 'must be a date only (${value})',\n  tooEarly: 'must be no earlier than %{date}',\n  tooLate: 'must be no later than %{date}',\n  formatMessage: _utils.formatMessage\n};\nexports.defaults = defaults;\n\nvar _default = function _default(value, options) {\n  var _defaults$options = _objectSpread({}, defaults, options),\n      allowEmpty = _defaults$options.allowEmpty,\n      earlierThan = _defaults$options.earlierThan,\n      laterThan = _defaults$options.laterThan,\n      dateOnly = _defaults$options.dateOnly,\n      dateOnlyMessage = _defaults$options.dateOnlyMessage,\n      message = _defaults$options.message,\n      notValid = _defaults$options.notValid,\n      tooEarly = _defaults$options.tooEarly,\n      tooLate = _defaults$options.tooLate,\n      formatMessage = _defaults$options.formatMessage;\n\n  var istNotDefined = !(0, _utils.isDefined)(value); // Empty values are fine\n\n  if (allowEmpty && istNotDefined) return;\n  var errors = []; // 86400000 is the number of milliseconds in a day, this is used to remove the time from the date\n\n  if (istNotDefined || isNaN(value) || dateOnly && value % 86400000 !== 0) return formatMessage(message || (dateOnly ? dateOnlyMessage : notValid), {\n    date: value\n  });\n\n  if ((0, _utils.isDefined)(earlierThan) && !isNaN(earlierThan) && value < earlierThan) {\n    errors.push(formatMessage(message || tooEarly, {\n      date: earlierThan\n    }));\n  }\n\n  if ((0, _utils.isDefined)(laterThan) && !isNaN(laterThan) && value > laterThan) {\n    errors.push(formatMessage(message || tooLate, {\n      date: laterThan\n    }));\n  }\n\n  if (errors.length) return (0, _utils.unique)(errors);\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/datetime.js?");

/***/ }),

/***/ "./src/validators/email.js":
/*!*********************************!*\
  !*** ./src/validators/email.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.defaults = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nvar _regexp = _interopRequireDefault(__webpack_require__(/*! ../regexp */ \"./src/regexp.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaults = {\n  message: 'is not a valid email',\n  allowEmpty: false\n};\nexports.defaults = defaults;\n\nvar _default = function _default(value, options) {\n  var _defaults$options = _objectSpread({}, defaults, options),\n      allowEmpty = _defaults$options.allowEmpty,\n      message = _defaults$options.message;\n\n  var isNotDefined = !(0, _utils.isDefined)(value);\n  if (allowEmpty && isNotDefined) return;\n\n  if (isNotDefined || !(0, _utils.isString)(value) || !_regexp.default.EMAIL.exec(value)) {\n    return message;\n  }\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/email.js?");

/***/ }),

/***/ "./src/validators/equality.js":
/*!************************************!*\
  !*** ./src/validators/equality.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.defaults = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaults = {\n  allowEmpty: false,\n  attribute: null,\n  comparator: function comparator(a, b) {\n    return a === b;\n  },\n  message: 'is not equal to %{attribute}',\n  formatMessage: _utils.formatMessage\n};\nexports.defaults = defaults;\n\nvar _default = function _default(value, options) {\n  if ((0, _utils.isString)(options)) {\n    options = {\n      attribute: options\n    };\n  }\n\n  var _defaults$options = _objectSpread({}, defaults, options),\n      allowEmpty = _defaults$options.allowEmpty,\n      attribute = _defaults$options.attribute,\n      comparator = _defaults$options.comparator,\n      message = _defaults$options.message,\n      formatMessage = _defaults$options.formatMessage;\n\n  if (allowEmpty && !(0, _utils.isDefined)(value)) return;\n\n  if (!allowEmpty && (0, _utils.isEmpty)(attribute)) {\n    throw new Error('The attribute must be non empty');\n  }\n\n  if (!comparator(value, attribute)) {\n    return formatMessage(message, {\n      attribute: (0, _utils.prettify)(attribute)\n    });\n  }\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/equality.js?");

/***/ }),

/***/ "./src/validators/exclusion.js":
/*!*************************************!*\
  !*** ./src/validators/exclusion.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.defaults = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaults = {\n  message: '%{value} is restricted',\n  allowEmpty: false,\n  within: [],\n  formatMessage: _utils.formatMessage\n};\nexports.defaults = defaults;\n\nvar _default = function _default(value, options) {\n  if ((0, _utils.isArray)(options)) {\n    options = {\n      within: options\n    };\n  }\n\n  var _defaults$options = _objectSpread({}, defaults, options),\n      allowEmpty = _defaults$options.allowEmpty,\n      within = _defaults$options.within,\n      message = _defaults$options.message,\n      formatMessage = _defaults$options.formatMessage; // When empty values are fine\n\n\n  if (allowEmpty && !(0, _utils.isDefined)(value)) return;\n  if (!(0, _utils.contains)(within, value)) return;\n\n  if ((0, _utils.isString)(within[value])) {\n    value = within[value];\n  }\n\n  return formatMessage(message, {\n    value: value\n  });\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/exclusion.js?");

/***/ }),

/***/ "./src/validators/format.js":
/*!**********************************!*\
  !*** ./src/validators/format.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.defaults = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaults = {\n  message: 'format is invalid',\n  allowEmpty: false,\n  flags: null,\n  pattern: null\n};\nexports.defaults = defaults;\n\nvar _default = function _default(value, options) {\n  var isNotDefined = !(0, _utils.isDefined)(value);\n  if (!(0, _utils.isDefined)(options)) throw new Error('Missing format options!');\n\n  if ((0, _utils.isString)(options) || options instanceof RegExp) {\n    options = {\n      pattern: options\n    };\n  } // Merge defaults and options\n\n\n  var _defaults$options = _objectSpread({}, defaults, options),\n      allowEmpty = _defaults$options.allowEmpty,\n      message = _defaults$options.message,\n      flags = _defaults$options.flags,\n      pattern = _defaults$options.pattern; // Whern empty values are allowed\n\n\n  if (allowEmpty && isNotDefined) return;\n  if (!(0, _utils.isString)(value)) return message;\n  var pttrn = (0, _utils.isString)(pattern) ? new RegExp(pattern, flags) : pattern;\n  var match = pttrn.exec(value);\n\n  if (!match || match[0].length !== value.length) {\n    return message;\n  }\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/format.js?");

/***/ }),

/***/ "./src/validators/inclusion.js":
/*!*************************************!*\
  !*** ./src/validators/inclusion.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.defaults = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaults = {\n  allowEmpty: false,\n  message: '\"%{value}\" is not included in the list',\n  within: [],\n  formatMessage: _utils.formatMessage\n};\nexports.defaults = defaults;\n\nvar _default = function _default(value, options) {\n  if ((0, _utils.isArray)(options)) {\n    options = {\n      within: options\n    };\n  }\n\n  var _defaults$options = _objectSpread({}, defaults, options),\n      allowEmpty = _defaults$options.allowEmpty,\n      message = _defaults$options.message,\n      within = _defaults$options.within,\n      formatMessage = _defaults$options.formatMessage; // When empty values are fine\n\n\n  if (allowEmpty && !(0, _utils.isDefined)(value)) return; // When is contained\n\n  if ((0, _utils.contains)(within, value)) return;\n  return formatMessage(message, {\n    value: value\n  });\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/inclusion.js?");

/***/ }),

/***/ "./src/validators/index.js":
/*!*********************************!*\
  !*** ./src/validators/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _date = _interopRequireDefault(__webpack_require__(/*! ./date */ \"./src/validators/date.js\"));\n\nvar _datetime = _interopRequireDefault(__webpack_require__(/*! ./datetime */ \"./src/validators/datetime.js\"));\n\nvar _email = _interopRequireDefault(__webpack_require__(/*! ./email */ \"./src/validators/email.js\"));\n\nvar _equality = _interopRequireDefault(__webpack_require__(/*! ./equality */ \"./src/validators/equality.js\"));\n\nvar _exclusion = _interopRequireDefault(__webpack_require__(/*! ./exclusion */ \"./src/validators/exclusion.js\"));\n\nvar _format = _interopRequireDefault(__webpack_require__(/*! ./format */ \"./src/validators/format.js\"));\n\nvar _inclusion = _interopRequireDefault(__webpack_require__(/*! ./inclusion */ \"./src/validators/inclusion.js\"));\n\nvar _length = _interopRequireDefault(__webpack_require__(/*! ./length */ \"./src/validators/length.js\"));\n\nvar _numericality = _interopRequireDefault(__webpack_require__(/*! ./numericality */ \"./src/validators/numericality.js\"));\n\nvar _presence = _interopRequireDefault(__webpack_require__(/*! ./presence */ \"./src/validators/presence.js\"));\n\nvar _type = _interopRequireDefault(__webpack_require__(/*! ./type */ \"./src/validators/type.js\"));\n\nvar _url = _interopRequireDefault(__webpack_require__(/*! ./url */ \"./src/validators/url.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  date: _date.default,\n  datetime: _datetime.default,\n  email: _email.default,\n  equality: _equality.default,\n  exclusion: _exclusion.default,\n  format: _format.default,\n  inclusion: _inclusion.default,\n  length: _length.default,\n  numericality: _numericality.default,\n  presence: _presence.default,\n  type: _type.default,\n  url: _url.default\n};\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/index.js?");

/***/ }),

/***/ "./src/validators/length.js":
/*!**********************************!*\
  !*** ./src/validators/length.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.defaults = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaults = {\n  allowEmpty: false,\n  is: null,\n  maximum: null,\n  minimum: null,\n  notValid: 'has an incorrect length',\n  wrongLength: 'is the wrong length (should be %{is} characters)',\n  tooShort: 'is too short (minimum is %{minimum} characters)',\n  tooLong: 'is too long (maximum is %{maximum} characters)',\n  tokenizer: function tokenizer(value) {\n    return value;\n  },\n  formatMessage: _utils.formatMessage\n};\nexports.defaults = defaults;\n\nvar _default = function _default(value, options) {\n  var _defaults$options = _objectSpread({}, defaults, options),\n      allowEmpty = _defaults$options.allowEmpty,\n      is = _defaults$options.is,\n      maximum = _defaults$options.maximum,\n      message = _defaults$options.message,\n      minimum = _defaults$options.minimum,\n      notValid = _defaults$options.notValid,\n      tokenizer = _defaults$options.tokenizer,\n      tooLong = _defaults$options.tooLong,\n      tooShort = _defaults$options.tooShort,\n      wrongLength = _defaults$options.wrongLength,\n      formatMessage = _defaults$options.formatMessage;\n\n  var isNotDefined = !(0, _utils.isDefined)(value); // When empty values are allowed\n\n  if (allowEmpty && isNotDefined) return;\n  var errors = [];\n  var length = isNotDefined ? null : tokenizer(value).length;\n  if (!(0, _utils.isNumber)(length)) return notValid; // Exact (is) check\n\n  if ((0, _utils.isNumber)(is) && length !== is) {\n    errors.push(formatMessage(wrongLength, {\n      is: is\n    }));\n  } // Minimum check\n\n\n  if ((0, _utils.isNumber)(minimum) && length < minimum) {\n    errors.push(formatMessage(tooShort, {\n      minimum: minimum\n    }));\n  } // Maximum check\n\n\n  if ((0, _utils.isNumber)(maximum) && length > maximum) {\n    errors.push(formatMessage(tooLong, {\n      maximum: maximum\n    }));\n  }\n\n  if (errors.length > 0) return message || errors;\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/length.js?");

/***/ }),

/***/ "./src/validators/numericality.js":
/*!****************************************!*\
  !*** ./src/validators/numericality.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.defaults = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaults = {\n  allowEmpty: false,\n  strict: false,\n  onlyInteger: false,\n  odd: false,\n  even: false,\n  message: null,\n  noStrings: true,\n  notValid: 'must be a valid number',\n  notNumber: 'is not a number',\n  notInteger: 'must be an integer',\n  notOdd: 'must be an odd number',\n  notEven: 'must be an even number',\n  mustBe: 'must be %{type} %{count}'\n};\nexports.defaults = defaults;\nvar checks = {\n  greaterThan: function greaterThan(v, c) {\n    return v > c;\n  },\n  greaterThanOrEqualTo: function greaterThanOrEqualTo(v, c) {\n    return v >= c;\n  },\n  equalTo: function equalTo(v, c) {\n    return v === c;\n  },\n  lessThan: function lessThan(v, c) {\n    return v < c;\n  },\n  lessThanOrEqualTo: function lessThanOrEqualTo(v, c) {\n    return v <= c;\n  },\n  divisibleBy: function divisibleBy(v, c) {\n    return v % c === 0;\n  }\n};\n\nvar _default = function _default(value, options) {\n  var errors = [];\n\n  var _defaults$options = _objectSpread({}, defaults, options),\n      allowEmpty = _defaults$options.allowEmpty,\n      strict = _defaults$options.strict,\n      onlyInteger = _defaults$options.onlyInteger,\n      odd = _defaults$options.odd,\n      even = _defaults$options.even,\n      message = _defaults$options.message,\n      mustBe = _defaults$options.mustBe,\n      noStrings = _defaults$options.noStrings,\n      notEven = _defaults$options.notEven,\n      notOdd = _defaults$options.notOdd,\n      notInteger = _defaults$options.notInteger,\n      notNumber = _defaults$options.notNumber,\n      notValid = _defaults$options.notValid; // If empty values are fine\n\n\n  if (allowEmpty && !(0, _utils.isDefined)(value)) return; // Strict will check that it is a valid looking number\n\n  if ((0, _utils.isString)(value) && strict) {\n    var pattern = \"^-?(0|[1-9]\\\\d*)\".concat(onlyInteger ? '' : '(\\\\.\\\\d+)?', \"$\");\n\n    if (!new RegExp(pattern).test(value)) {\n      return message || notNumber;\n    }\n  } // Coerce the value to a number unless we're being strict.\n\n\n  if (noStrings !== true && (0, _utils.isString)(value) && !(0, _utils.isEmpty)(value)) {\n    value = +value;\n  } // If it's not a number we shouldn't continue since it will compare it.\n\n\n  if (!(0, _utils.isNumber)(value)) return message || notValid; // Same logic as above, sort of. Don't bother with comparisons if this\n  // doesn't pass.\n\n  if (onlyInteger && !(0, _utils.isInteger)(value)) return message || notInteger;\n\n  for (var checkName in Object.keys(checks)) {\n    var count = options[checkName];\n\n    if ((0, _utils.isNumber)(count) && !checks[checkName](value, count)) {\n      // This picks the default message if specified\n      // For example the greaterThan check uses the message from\n      // this.notGreaterThan so we capitalize the name and prepend \"not\"\n      var key = 'not' + (0, _utils.capitalize)(checkName);\n      var msg = options[key] || mustBe;\n      errors.push((0, _utils.format)(msg, {\n        count: count,\n        type: (0, _utils.prettify)(checkName)\n      }));\n    }\n  }\n\n  if (odd && value % 2 !== 1) {\n    errors.push(notOdd);\n  }\n\n  if (even && value % 2 !== 0) {\n    errors.push(notEven);\n  }\n\n  if (errors.length) return message || errors;\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/numericality.js?");

/***/ }),

/***/ "./src/validators/presence.js":
/*!************************************!*\
  !*** ./src/validators/presence.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.defaults = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaults = {\n  allowEmpty: false,\n  message: \"can't be blank\" // Presence validates that the value isn't empty\n\n};\nexports.defaults = defaults;\n\nvar _default = function _default(value, options) {\n  var _defaults$options = _objectSpread({}, defaults, options),\n      allowEmpty = _defaults$options.allowEmpty,\n      message = _defaults$options.message;\n\n  if (allowEmpty !== false ? !(0, _utils.isDefined)(value) : (0, _utils.isEmpty)(value)) {\n    return message;\n  }\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/presence.js?");

/***/ }),

/***/ "./src/validators/type.js":
/*!********************************!*\
  !*** ./src/validators/type.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.defaults = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaults = {\n  allowEmpty: false,\n  message: 'must be of type %{type}',\n  formatMessage: _utils.formatMessage,\n  type: null\n};\nexports.defaults = defaults;\n\nvar _default = function _default(value, options) {\n  if ((0, _utils.isString)(options)) {\n    options = {\n      type: options\n    };\n  }\n\n  var _defaults$options = _objectSpread({}, defaults, options),\n      allowEmpty = _defaults$options.allowEmpty,\n      message = _defaults$options.message,\n      type = _defaults$options.type;\n\n  if (!(0, _utils.isDefined)(type)) throw new Error('No type was specified');\n  if (allowEmpty && !(0, _utils.isDefined)(value)) return;\n  var types = {\n    array: _utils.isArray,\n    boolean: _utils.isBoolean,\n    date: _utils.isDate,\n    float: _utils.isFloat,\n    function: _utils.isFunction,\n    integer: _utils.isInteger,\n    number: _utils.isNumber,\n    object: function object(value) {\n      return (0, _utils.isHash)(value);\n    },\n    string: _utils.isString\n  };\n  var check = (0, _utils.isFunction)(type) ? type : types[type];\n  if (!(0, _utils.isFunction)(check)) throw new Error(\"\".concat(type, \" must be a function.\"));\n\n  if (!check(value, options)) {\n    var msg = (0, _utils.isFunction)(message) ? message(value, options) : (0, _utils.isFunction)(type) ? 'must be of the correct type' : message;\n    return (0, _utils.formatMessage)(msg, {\n      type: type\n    });\n  }\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/type.js?");

/***/ }),

/***/ "./src/validators/url.js":
/*!*******************************!*\
  !*** ./src/validators/url.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.defaults = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nvar _regexp = _interopRequireDefault(__webpack_require__(/*! ../regexp */ \"./src/regexp.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaults = {\n  allowEmpty: false,\n  allowLocal: false,\n  message: 'is not a valid url',\n  schemes: ['http', 'https'] // A URL validator that is used to validate URLs with the ability to\n  // restrict schemes and some domains.\n\n};\nexports.defaults = defaults;\n\nvar _default = function _default(value, options) {\n  var _defaults$options = _objectSpread({}, defaults, options),\n      allowEmpty = _defaults$options.allowEmpty,\n      allowLocal = _defaults$options.allowLocal,\n      message = _defaults$options.message,\n      schemes = _defaults$options.schemes;\n\n  if (allowEmpty && !(0, _utils.isDefined)(value)) return;\n  if (!(0, _utils.isString)(value)) return message;\n\n  if (!_regexp.default.URL({\n    allowLocal: allowLocal,\n    schemes: schemes\n  }).exec(value)) {\n    return message;\n  }\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://validate-core/./src/validators/url.js?");

/***/ })

/******/ });
});