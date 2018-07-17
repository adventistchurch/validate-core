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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validators = _interopRequireDefault(__webpack_require__(/*! ./validators */ "./src/validators/index.js"));

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Runs the validators specified by the constraints object:
// - If validation fails, it will return an array with the errors.
// - Otherwise it will return undefined.
var _default = function _default(value, constraints) {
  var results = [];
  if (!(0, _utils.isDefined)(constraints)) return; // Loops through each constraints, finds the correct validator and run it.

  var _arr = Object.keys(constraints);

  for (var _i = 0; _i < _arr.length; _i++) {
    var rule = _arr[_i];
    var validator = _validators.default[rule];
    if (!(0, _utils.isFunction)(validator)) throw new Error('Invalid validator!');
    var constraint = constraints[rule];
    var result = validator(value, constraint);

    if (result) {
      results.push((0, _utils.isArray)(result) ? _toConsumableArray(result) : result);
    }
  }

  if (results.length) return results;
};

exports.default = _default;

/***/ }),

/***/ "./src/regexp.js":
/*!***********************!*\
  !*** ./src/regexp.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  EMPTY_STRING: /^\s*$/,
  EMAIL: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,
  // eslint-disable-line no-control-regex
  FORMAT_REGEXP: /(%?)%\{([^}]+)\}/g,
  PHONE_US: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
  URL: function URL(_ref) {
    var allowLocal = _ref.allowLocal,
        schemes = _ref.schemes;
    var regexp = '^' + // protocol identifier
    '(?:(?:' + schemes.join('|') + ')://)' + // user:pass authentication
    '(?:\\S+(?::\\S*)?@)?' + '(?:';
    var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";

    if (allowLocal) {
      tld += '?';
    } else {
      regexp += // IP address exclusion
      // private & local networks
      '(?!(?:10|127)(?:\\.\\d{1,3}){3})' + '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' + '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})';
    }

    regexp += // IP address dotted notation octets
    // excludes loopback network 0.0.0.0
    // excludes reserved space >= 224.0.0.0
    // excludes network & broacast addresses
    // (first & last IP address of each class)
    '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' + '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' + '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' + '|' + // host name
    "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" + // domain name
    "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" + tld + ')' + // port number
    '(?::\\d{2,5})?' + // resource path
    '(?:[/?#]\\S*)?' + '$';
    return new RegExp(regexp, 'i');
  }
};
exports.default = _default;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prettify = exports.formatMessage = exports.capitalize = exports.unique = exports.contains = exports.isHash = exports.isArray = exports.isString = exports.isEmpty = exports.isDefined = exports.isDate = exports.isObject = exports.isBoolean = exports.isFloat = exports.isInteger = exports.isFunction = exports.isNumber = exports.result = void 0;

var _regexp = _interopRequireDefault(__webpack_require__(/*! ./regexp */ "./src/regexp.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// If the given argument is a call: function the and: function return the value otherwise just return the value. Additional arguments will be passed as arguments to the function.
// Example:
// ```
// result('foo') // 'foo'
// result(Math.max, 1, 2) // 2
// ```
var result = function result(value) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return isFunction(value) ? value.apply(null, args) : value;
}; // Checks if the value is a number. This function does not consider NaN a number like many other `isNumber` functions do.


exports.result = result;

var isNumber = function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}; // Returns false if the object is not a function


exports.isNumber = isNumber;

var isFunction = function isFunction(value) {
  return typeof value === 'function';
}; // A simple check to verify that the value is an integer. Uses `isNumber` and a simple modulo check.


exports.isFunction = isFunction;

var isInteger = function isInteger(value) {
  return isNumber(value) && value % 1 === 0;
}; // A simple check to verify that the value is a float. Uses `isNumber` and 'isInteger' functions


exports.isInteger = isInteger;

var isFloat = function isFloat(value) {
  return isNumber(value) && !isInteger(value);
}; // Checks if the value is a boolean


exports.isFloat = isFloat;

var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
}; // Uses the `Object` function to check if the given argument is an object.


exports.isBoolean = isBoolean;

var isObject = function isObject(obj) {
  return obj === Object(obj);
}; // Simply checks if the object is an instance of a date


exports.isObject = isObject;

var isDate = function isDate(obj) {
  return obj instanceof Date;
}; // Returns false if the object is `null` of `undefined`


exports.isDate = isDate;

var isDefined = function isDefined(obj) {
  return obj !== null && obj !== undefined;
}; // Check if value is empty


exports.isDefined = isDefined;

var isEmpty = function isEmpty(value) {
  // Null and undefined are empty
  if (!isDefined(value)) return true; // functions are non empty

  if (isFunction(value)) return false; // Whitespace only strings are empty

  if (isString(value)) return _regexp.default.EMPTY_STRING.test(value); // For arrays we use the length property

  if (isArray(value)) return value.length === 0; // Dates have no attributes but aren't empty

  if (isDate(value)) return false; // If we find at least one property we consider it non empty

  if (isObject(value)) {
    for (var attr in value) {
      return !attr;
    }

    return true;
  }

  return false;
}; // Checks if value is a string


exports.isEmpty = isEmpty;

var isString = function isString(value) {
  return typeof value === 'string';
}; // Check if calue is an array


exports.isString = isString;

var isArray = function isArray(value) {
  return {}.toString.call(value) === '[object Array]';
}; // Checks if the object is a hash, which is equivalent to an object that is neither an array, a function nor a date.


exports.isArray = isArray;

var isHash = function isHash(value) {
  return isObject(value) && !isArray(value) && !isFunction(value) && !isDate(value);
}; // checks if an object or an array contains a value


exports.isHash = isHash;

var contains = function contains(obj, value) {
  if (!isDefined(obj)) return false;
  if (isArray(obj)) return obj.indexOf(value) !== -1;
  return value in obj;
}; // Removes duplicates in an array


exports.contains = contains;

var unique = function unique(array) {
  if (!isArray(array)) return array;
  return array.filter(function (el, index, array) {
    return array.indexOf(el) === index;
  });
}; // Capitalizes a string


exports.unique = unique;

var capitalize = function capitalize(str) {
  if (!isString(str)) return str;
  return str[0].toUpperCase() + str.slice(1);
}; // Formats the specified strings with the given values like so:
// ```
// format("Foo: %{foo}", {foo: "bar"}) // "Foo bar"
// ```
// If you want to write %{...} without having it replaced simply prefix it with % like this `Foo: %%{foo}` and it will be returned as `"Foo: %{foo}"`


exports.capitalize = capitalize;

var formatMessage = function formatMessage(str, vals) {
  if (!isString(str)) return str;
  return str.replace(_regexp.default.FORMAT_REGEXP, function (m0, m1, m2) {
    return m1 === '%' ? "%{".concat(m2, "}") : String(vals[m2]);
  });
}; // "Prettifies" the given string. Prettifying means replacing [.\_-] with spaces as well as splitting camel case words.


exports.formatMessage = formatMessage;

var prettify = function prettify(str) {
  // If there are more than 2 decimals round it to two
  if (isNumber(str)) return str * 100 % 1 === 0 ? "".concat(str) : parseFloat(Math.round(str * 100) / 100).toFixed(2);
  if (isArray(str)) return str.map(function (s) {
    return prettify(s);
  }).join(', ');
  if (isObject(str)) return str.toString();
  return (// Ensure the string is actually a string
    "".concat(str) // Splits keys separated by periods
    .replace(/([^\s])\.([^\s])/g, '$1 $2') // Removes backslashes
    .replace(/\\+/g, '') // Replaces _ and - with space
    .replace(/[_-]/g, ' ') // Splits camel cased words
    .replace(/([a-z])([A-Z])/g, function (m0, m1, m2) {
      return "".concat(m1, " ").concat(m2.toLowerCase());
    }).toLowerCase()
  );
};

exports.prettify = prettify;

/***/ }),

/***/ "./src/validators/date.js":
/*!********************************!*\
  !*** ./src/validators/date.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _datetime = _interopRequireDefault(__webpack_require__(/*! ./datetime */ "./src/validators/datetime.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(value, options) {
  return (0, _datetime.default)(value, _objectSpread({}, options, {
    dateOnly: true
  }));
};

exports.default = _default;

/***/ }),

/***/ "./src/validators/datetime.js":
/*!************************************!*\
  !*** ./src/validators/datetime.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaults = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaults = {
  earlierThan: null,
  laterThan: null,
  dateOnly: false,
  message: null,
  notValid: 'must be a valid date (${value})',
  dateOnlyMessage: 'must be a date only (${value})',
  tooEarly: 'must be no earlier than %{date}',
  tooLate: 'must be no later than %{date}',
  formatMessage: _utils.formatMessage
};
exports.defaults = defaults;

var _default = function _default(value, options) {
  var _defaults$options = _objectSpread({}, defaults, options),
      earlierThan = _defaults$options.earlierThan,
      laterThan = _defaults$options.laterThan,
      dateOnly = _defaults$options.dateOnly,
      dateOnlyMessage = _defaults$options.dateOnlyMessage,
      message = _defaults$options.message,
      notValid = _defaults$options.notValid,
      tooEarly = _defaults$options.tooEarly,
      tooLate = _defaults$options.tooLate,
      formatMessage = _defaults$options.formatMessage;

  var istNotDefined = !(0, _utils.isDefined)(value); // Empty values are fine

  if (istNotDefined) return;
  var errors = []; // 86400000 is the number of milliseconds in a day, this is used to remove the time from the date

  if (istNotDefined || isNaN(value) || dateOnly && value % 86400000 !== 0) return formatMessage(message || (dateOnly ? dateOnlyMessage : notValid), {
    date: value
  });

  if ((0, _utils.isDefined)(earlierThan) && !isNaN(earlierThan) && value < earlierThan) {
    errors.push(formatMessage(message || tooEarly, {
      date: earlierThan
    }));
  }

  if ((0, _utils.isDefined)(laterThan) && !isNaN(laterThan) && value > laterThan) {
    errors.push(formatMessage(message || tooLate, {
      date: laterThan
    }));
  }

  if (errors.length) return (0, _utils.unique)(errors);
};

exports.default = _default;

/***/ }),

/***/ "./src/validators/email.js":
/*!*********************************!*\
  !*** ./src/validators/email.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaults = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils.js");

var _regexp = _interopRequireDefault(__webpack_require__(/*! ../regexp */ "./src/regexp.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaults = {
  message: 'is not a valid email',
  pattern: _regexp.default.EMAIL
};
exports.defaults = defaults;

var _default = function _default(value, options) {
  var _defaults$options = _objectSpread({}, defaults, options),
      message = _defaults$options.message,
      pattern = _defaults$options.pattern;

  var isNotDefined = !(0, _utils.isDefined)(value);
  if (isNotDefined) return;

  if (isNotDefined || !(0, _utils.isString)(value) || !pattern.exec(value)) {
    return message;
  }
};

exports.default = _default;

/***/ }),

/***/ "./src/validators/equality.js":
/*!************************************!*\
  !*** ./src/validators/equality.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaults = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaults = {
  allowEmpty: false,
  attribute: null,
  comparator: function comparator(a, b) {
    return a === b;
  },
  message: 'is not equal to %{attribute}',
  formatMessage: _utils.formatMessage
};
exports.defaults = defaults;

var _default = function _default(value, options) {
  if ((0, _utils.isString)(options)) {
    options = {
      attribute: options
    };
  }

  var _defaults$options = _objectSpread({}, defaults, options),
      allowEmpty = _defaults$options.allowEmpty,
      attribute = _defaults$options.attribute,
      comparator = _defaults$options.comparator,
      message = _defaults$options.message,
      formatMessage = _defaults$options.formatMessage;

  if (allowEmpty && !(0, _utils.isDefined)(value)) return;

  if (!allowEmpty && (0, _utils.isEmpty)(attribute)) {
    throw new Error('The attribute must be non empty');
  }

  if (!comparator(value, attribute)) {
    return formatMessage(message, {
      attribute: (0, _utils.prettify)(attribute)
    });
  }
};

exports.default = _default;

/***/ }),

/***/ "./src/validators/exclusion.js":
/*!*************************************!*\
  !*** ./src/validators/exclusion.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaults = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaults = {
  message: '%{value} is restricted',
  within: [],
  formatMessage: _utils.formatMessage
};
exports.defaults = defaults;

var _default = function _default(value, options) {
  if ((0, _utils.isArray)(options)) {
    options = {
      within: options
    };
  }

  var _defaults$options = _objectSpread({}, defaults, options),
      within = _defaults$options.within,
      message = _defaults$options.message,
      formatMessage = _defaults$options.formatMessage; // empty values are fine


  if (!(0, _utils.isDefined)(value)) return;
  if (!(0, _utils.contains)(within, value)) return;

  if ((0, _utils.isString)(within[value])) {
    value = within[value];
  }

  return formatMessage(message, {
    value: value
  });
};

exports.default = _default;

/***/ }),

/***/ "./src/validators/format.js":
/*!**********************************!*\
  !*** ./src/validators/format.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaults = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaults = {
  message: 'format is invalid',
  flags: null,
  pattern: null
};
exports.defaults = defaults;

var _default = function _default(value, options) {
  if (!(0, _utils.isDefined)(options)) throw new Error('Missing format options!');

  if ((0, _utils.isString)(options) || options instanceof RegExp) {
    options = {
      pattern: options
    };
  } // Merge defaults and options


  var _defaults$options = _objectSpread({}, defaults, options),
      message = _defaults$options.message,
      flags = _defaults$options.flags,
      pattern = _defaults$options.pattern; // empty values are allowed


  if (!(0, _utils.isDefined)(value)) return;
  if (!(0, _utils.isString)(value)) return message;
  var pttrn = (0, _utils.isString)(pattern) ? new RegExp(pattern, flags) : pattern;
  var match = pttrn.exec(value);

  if (!match || match[0].length !== value.length) {
    return message;
  }
};

exports.default = _default;

/***/ }),

/***/ "./src/validators/inclusion.js":
/*!*************************************!*\
  !*** ./src/validators/inclusion.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaults = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaults = {
  message: '"%{value}" is not included in the list',
  within: [],
  formatMessage: _utils.formatMessage
};
exports.defaults = defaults;

var _default = function _default(value, options) {
  if ((0, _utils.isArray)(options)) {
    options = {
      within: options
    };
  }

  var _defaults$options = _objectSpread({}, defaults, options),
      message = _defaults$options.message,
      within = _defaults$options.within,
      formatMessage = _defaults$options.formatMessage; // When empty values are fine


  if (!(0, _utils.isDefined)(value)) return; // When is contained

  if ((0, _utils.contains)(within, value)) return;
  return formatMessage(message, {
    value: value
  });
};

exports.default = _default;

/***/ }),

/***/ "./src/validators/index.js":
/*!*********************************!*\
  !*** ./src/validators/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _date = _interopRequireDefault(__webpack_require__(/*! ./date */ "./src/validators/date.js"));

var _datetime = _interopRequireDefault(__webpack_require__(/*! ./datetime */ "./src/validators/datetime.js"));

var _email = _interopRequireDefault(__webpack_require__(/*! ./email */ "./src/validators/email.js"));

var _equality = _interopRequireDefault(__webpack_require__(/*! ./equality */ "./src/validators/equality.js"));

var _exclusion = _interopRequireDefault(__webpack_require__(/*! ./exclusion */ "./src/validators/exclusion.js"));

var _format = _interopRequireDefault(__webpack_require__(/*! ./format */ "./src/validators/format.js"));

var _inclusion = _interopRequireDefault(__webpack_require__(/*! ./inclusion */ "./src/validators/inclusion.js"));

var _length = _interopRequireDefault(__webpack_require__(/*! ./length */ "./src/validators/length.js"));

var _numericality = _interopRequireDefault(__webpack_require__(/*! ./numericality */ "./src/validators/numericality.js"));

var _presence = _interopRequireDefault(__webpack_require__(/*! ./presence */ "./src/validators/presence.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/validators/type.js"));

var _url = _interopRequireDefault(__webpack_require__(/*! ./url */ "./src/validators/url.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  date: _date.default,
  datetime: _datetime.default,
  email: _email.default,
  equality: _equality.default,
  exclusion: _exclusion.default,
  format: _format.default,
  inclusion: _inclusion.default,
  length: _length.default,
  numericality: _numericality.default,
  presence: _presence.default,
  type: _type.default,
  url: _url.default
};
exports.default = _default;

/***/ }),

/***/ "./src/validators/length.js":
/*!**********************************!*\
  !*** ./src/validators/length.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaults = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaults = {
  is: null,
  maximum: null,
  minimum: null,
  notValid: 'has an incorrect length',
  wrongLength: 'is the wrong length (should be %{is} characters)',
  tooShort: 'is too short (minimum is %{minimum} characters)',
  tooLong: 'is too long (maximum is %{maximum} characters)',
  tokenizer: function tokenizer(value) {
    return value;
  },
  formatMessage: _utils.formatMessage
};
exports.defaults = defaults;

var _default = function _default(value, options) {
  var _defaults$options = _objectSpread({}, defaults, options),
      is = _defaults$options.is,
      maximum = _defaults$options.maximum,
      message = _defaults$options.message,
      minimum = _defaults$options.minimum,
      notValid = _defaults$options.notValid,
      tokenizer = _defaults$options.tokenizer,
      tooLong = _defaults$options.tooLong,
      tooShort = _defaults$options.tooShort,
      wrongLength = _defaults$options.wrongLength,
      formatMessage = _defaults$options.formatMessage;

  var isNotDefined = !(0, _utils.isDefined)(value); // Empty values are allowed

  if (isNotDefined) return;
  var errors = [];
  var length = isNotDefined ? null : tokenizer(value).length;
  if (!(0, _utils.isNumber)(length)) return notValid; // Exact (is) check

  if ((0, _utils.isNumber)(is) && length !== is) {
    errors.push(formatMessage(wrongLength, {
      is: is
    }));
  } // Minimum check


  if ((0, _utils.isNumber)(minimum) && length < minimum) {
    errors.push(formatMessage(tooShort, {
      minimum: minimum
    }));
  } // Maximum check


  if ((0, _utils.isNumber)(maximum) && length > maximum) {
    errors.push(formatMessage(tooLong, {
      maximum: maximum
    }));
  }

  if (errors.length > 0) return message || errors;
};

exports.default = _default;

/***/ }),

/***/ "./src/validators/numericality.js":
/*!****************************************!*\
  !*** ./src/validators/numericality.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaults = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaults = {
  strict: false,
  onlyInteger: false,
  odd: false,
  even: false,
  message: null,
  noStrings: true,
  notValid: 'must be a valid number',
  notNumber: 'is not a number',
  notInteger: 'must be an integer',
  notOdd: 'must be an odd number',
  notEven: 'must be an even number',
  mustBe: 'must be %{type} %{count}'
};
exports.defaults = defaults;
var checks = {
  greaterThan: function greaterThan(v, c) {
    return v > c;
  },
  greaterThanOrEqualTo: function greaterThanOrEqualTo(v, c) {
    return v >= c;
  },
  equalTo: function equalTo(v, c) {
    return v === c;
  },
  lessThan: function lessThan(v, c) {
    return v < c;
  },
  lessThanOrEqualTo: function lessThanOrEqualTo(v, c) {
    return v <= c;
  },
  divisibleBy: function divisibleBy(v, c) {
    return v % c === 0;
  }
};

var _default = function _default(value, options) {
  var errors = [];

  var _defaults$options = _objectSpread({}, defaults, options),
      strict = _defaults$options.strict,
      onlyInteger = _defaults$options.onlyInteger,
      odd = _defaults$options.odd,
      even = _defaults$options.even,
      message = _defaults$options.message,
      mustBe = _defaults$options.mustBe,
      noStrings = _defaults$options.noStrings,
      notEven = _defaults$options.notEven,
      notOdd = _defaults$options.notOdd,
      notInteger = _defaults$options.notInteger,
      notNumber = _defaults$options.notNumber,
      notValid = _defaults$options.notValid; // If empty values are fine


  if ((0, _utils.isDefined)(value)) return; // Strict will check that it is a valid looking number

  if ((0, _utils.isString)(value) && strict) {
    var pattern = "^-?(0|[1-9]\\d*)".concat(onlyInteger ? '' : '(\\.\\d+)?', "$");

    if (!new RegExp(pattern).test(value)) {
      return message || notNumber;
    }
  } // Coerce the value to a number unless we're being strict.


  if (noStrings !== true && (0, _utils.isString)(value) && !(0, _utils.isEmpty)(value)) {
    value = +value;
  } // If it's not a number we shouldn't continue since it will compare it.


  if (!(0, _utils.isNumber)(value)) return message || notValid; // Same logic as above, sort of. Don't bother with comparisons if this
  // doesn't pass.

  if (onlyInteger && !(0, _utils.isInteger)(value)) return message || notInteger;

  for (var checkName in Object.keys(checks)) {
    var count = options[checkName];

    if ((0, _utils.isNumber)(count) && !checks[checkName](value, count)) {
      // This picks the default message if specified
      // For example the greaterThan check uses the message from
      // this.notGreaterThan so we capitalize the name and prepend "not"
      var key = 'not' + (0, _utils.capitalize)(checkName);
      var msg = options[key] || mustBe;
      errors.push((0, _utils.format)(msg, {
        count: count,
        type: (0, _utils.prettify)(checkName)
      }));
    }
  }

  if (odd && value % 2 !== 1) {
    errors.push(notOdd);
  }

  if (even && value % 2 !== 0) {
    errors.push(notEven);
  }

  if (errors.length) return message || errors;
};

exports.default = _default;

/***/ }),

/***/ "./src/validators/presence.js":
/*!************************************!*\
  !*** ./src/validators/presence.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaults = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaults = {
  allowEmpty: false,
  message: "can't be blank" // Presence validates that the value isn't empty

};
exports.defaults = defaults;

var _default = function _default(value, options) {
  var _defaults$options = _objectSpread({}, defaults, options),
      allowEmpty = _defaults$options.allowEmpty,
      message = _defaults$options.message;

  if (allowEmpty !== false ? !(0, _utils.isDefined)(value) : (0, _utils.isEmpty)(value)) {
    return message;
  }
};

exports.default = _default;

/***/ }),

/***/ "./src/validators/type.js":
/*!********************************!*\
  !*** ./src/validators/type.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaults = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaults = {
  message: 'must be of type %{type}',
  formatMessage: _utils.formatMessage,
  type: null
};
exports.defaults = defaults;

var _default = function _default(value, options) {
  if ((0, _utils.isString)(options)) {
    options = {
      type: options
    };
  }

  var _defaults$options = _objectSpread({}, defaults, options),
      message = _defaults$options.message,
      type = _defaults$options.type;

  if (!(0, _utils.isDefined)(type)) throw new Error('No type was specified');
  if (!(0, _utils.isDefined)(value)) return;
  var types = {
    array: _utils.isArray,
    boolean: _utils.isBoolean,
    date: _utils.isDate,
    float: _utils.isFloat,
    function: _utils.isFunction,
    integer: _utils.isInteger,
    number: _utils.isNumber,
    object: function object(value) {
      return (0, _utils.isHash)(value);
    },
    string: _utils.isString
  };
  var check = (0, _utils.isFunction)(type) ? type : types[type];
  if (!(0, _utils.isFunction)(check)) throw new Error("".concat(type, " must be a function."));

  if (!check(value, options)) {
    var msg = (0, _utils.isFunction)(message) ? message(value, options) : (0, _utils.isFunction)(type) ? 'must be of the correct type' : message;
    return (0, _utils.formatMessage)(msg, {
      type: type
    });
  }
};

exports.default = _default;

/***/ }),

/***/ "./src/validators/url.js":
/*!*******************************!*\
  !*** ./src/validators/url.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaults = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils.js");

var _regexp = _interopRequireDefault(__webpack_require__(/*! ../regexp */ "./src/regexp.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaults = {
  allowLocal: false,
  message: 'is not a valid url',
  schemes: ['http', 'https'] // A URL validator that is used to validate URLs with the ability to
  // restrict schemes and some domains.

};
exports.defaults = defaults;

var _default = function _default(value, options) {
  var _defaults$options = _objectSpread({}, defaults, options),
      allowLocal = _defaults$options.allowLocal,
      message = _defaults$options.message,
      schemes = _defaults$options.schemes;

  if (!(0, _utils.isDefined)(value)) return;
  if (!(0, _utils.isString)(value)) return message;

  if (!_regexp.default.URL({
    allowLocal: allowLocal,
    schemes: schemes
  }).exec(value)) {
    return message;
  }
};

exports.default = _default;

/***/ })

/******/ });
});
//# sourceMappingURL=validate-core.js.map