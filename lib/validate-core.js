'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var REGEXP = {
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

var isNumber = function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}; // Returns false if the object is not a function

var isFunction = function isFunction(value) {
  return typeof value === 'function';
}; // A simple check to verify that the value is an integer. Uses `isNumber` and a simple modulo check.

var isInteger = function isInteger(value) {
  return isNumber(value) && value % 1 === 0;
}; // A simple check to verify that the value is a float. Uses `isNumber` and 'isInteger' functions

var isFloat = function isFloat(value) {
  return isNumber(value) && !isInteger(value);
}; // Checks if the value is a boolean

var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
}; // Uses the `Object` function to check if the given argument is an object.

var isObject = function isObject(obj) {
  return obj === Object(obj);
}; // Simply checks if the object is an instance of a date

var isDate = function isDate(obj) {
  return obj instanceof Date;
}; // Returns false if the object is `null` of `undefined`

var isDefined = function isDefined(obj) {
  return obj !== null && obj !== undefined;
}; // Check if value is empty

var isEmpty = function isEmpty(value) {
  // Null and undefined are empty
  if (!isDefined(value)) return true; // functions are non empty

  if (isFunction(value)) return false; // Whitespace only strings are empty

  if (isString(value)) return REGEXP.EMPTY_STRING.test(value); // For arrays we use the length property

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

var isString = function isString(value) {
  return typeof value === 'string';
}; // Check if calue is an array

var isArray = function isArray(value) {
  return {}.toString.call(value) === '[object Array]';
}; // Checks if the object is a hash, which is equivalent to an object that is neither an array, a function nor a date.

var isHash = function isHash(value) {
  return isObject(value) && !isArray(value) && !isFunction(value) && !isDate(value);
}; // checks if an object or an array contains a value

var contains = function contains(obj, value) {
  if (!isDefined(obj)) return false;
  if (isArray(obj)) return obj.indexOf(value) !== -1;
  return value in obj;
}; // Removes duplicates in an array

var unique = function unique(array) {
  if (!isArray(array)) return array;
  return array.filter(function (el, index, array) {
    return array.indexOf(el) === index;
  });
}; // Capitalizes a string

var capitalize = function capitalize(str) {
  if (!isString(str)) return str;
  return str[0].toUpperCase() + str.slice(1);
}; // Formats the specified strings with the given values like so:
// ```
// format("Foo: %{foo}", {foo: "bar"}) // "Foo bar"
// ```
// If you want to write %{...} without having it replaced simply prefix it with % like this `Foo: %%{foo}` and it will be returned as `"Foo: %{foo}"`

var formatMessage = function formatMessage(str, vals) {
  if (!isString(str)) return str;
  return str.replace(REGEXP.FORMAT_REGEXP, function (m0, m1, m2) {
    return m1 === '%' ? "%{".concat(m2, "}") : String(vals[m2]);
  });
}; // "Prettifies" the given string. Prettifying means replacing [.\_-] with spaces as well as splitting camel case words.

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

var defaults = {
  earlierThan: null,
  laterThan: null,
  dateOnly: false,
  message: null,
  notValid: 'must be a valid date (${value})',
  dateOnlyMessage: 'must be a date (not a datetime)',
  tooEarly: 'must be no earlier than %{date}',
  tooLate: 'must be no later than %{date}',
  formatMessage: formatMessage
};
var datetime = (function (value, options) {
  var _defaults$options = _objectSpread({}, defaults, options),
      earlierThan = _defaults$options.earlierThan,
      laterThan = _defaults$options.laterThan,
      dateOnly = _defaults$options.dateOnly,
      dateOnlyMessage = _defaults$options.dateOnlyMessage,
      message = _defaults$options.message,
      notValid = _defaults$options.notValid,
      tooEarly = _defaults$options.tooEarly,
      tooLate = _defaults$options.tooLate,
      formatMessage$$1 = _defaults$options.formatMessage;

  var istNotDefined = !isDefined(value); // Empty values are fine

  if (istNotDefined) return;
  var errors = []; // 86400000 is the number of milliseconds in a day, this is used to remove the time from the date

  if (istNotDefined || isNaN(value) || dateOnly && value % 86400000 !== 0) return formatMessage$$1(message || (dateOnly ? dateOnlyMessage : notValid), {
    date: value
  });

  if (isDefined(earlierThan) && !isNaN(earlierThan) && value < earlierThan) {
    errors.push(formatMessage$$1(message || tooEarly, {
      date: earlierThan
    }));
  }

  if (isDefined(laterThan) && !isNaN(laterThan) && value > laterThan) {
    errors.push(formatMessage$$1(message || tooLate, {
      date: laterThan
    }));
  }

  if (errors.length) return unique(errors);
});

var date = (function (value, options) {
  return datetime(value, _objectSpread({}, options, {
    dateOnly: true
  }));
});

var defaults$1 = {
  message: 'is not a valid email',
  pattern: REGEXP.EMAIL
};
var email = (function (value, options) {
  var _defaults$options = _objectSpread({}, defaults$1, options),
      message = _defaults$options.message,
      pattern = _defaults$options.pattern;

  var isNotDefined = !isDefined(value);
  if (isNotDefined) return;

  if (isNotDefined || !isString(value) || !pattern.exec(value)) {
    return message;
  }
});

var defaults$2 = {
  allowEmpty: false,
  attribute: null,
  comparator: function comparator(a, b) {
    return a === b;
  },
  message: 'is not equal to %{attribute}',
  formatMessage: formatMessage
};
var equality = (function (value, options) {
  if (isString(options)) {
    options = {
      attribute: options
    };
  }

  var _defaults$options = _objectSpread({}, defaults$2, options),
      allowEmpty = _defaults$options.allowEmpty,
      attribute = _defaults$options.attribute,
      comparator = _defaults$options.comparator,
      message = _defaults$options.message,
      formatMessage$$1 = _defaults$options.formatMessage;

  if (isEmpty(attribute)) return;
  if (allowEmpty && isEmpty(value)) return;

  if (!comparator(value, attribute)) {
    return formatMessage$$1(message, {
      attribute: prettify(attribute)
    });
  }
});

var defaults$3 = {
  message: '%{value} is restricted',
  within: [],
  formatMessage: formatMessage
};
var exclusion = (function (value, options) {
  if (isArray(options)) {
    options = {
      within: options
    };
  }

  var _defaults$options = _objectSpread({}, defaults$3, options),
      within = _defaults$options.within,
      message = _defaults$options.message,
      formatMessage$$1 = _defaults$options.formatMessage; // empty values are fine


  if (!isDefined(value)) return;
  if (!contains(within, value)) return;

  if (isString(within[value])) {
    value = within[value];
  }

  return formatMessage$$1(message, {
    value: value
  });
});

var defaults$4 = {
  message: 'format is invalid',
  flags: null,
  pattern: null
};
var format = (function (value, options) {
  if (!isDefined(options)) throw new Error('Missing format options!');

  if (isString(options) || options instanceof RegExp) {
    options = {
      pattern: options
    };
  } // Merge defaults and options


  var _defaults$options = _objectSpread({}, defaults$4, options),
      message = _defaults$options.message,
      flags = _defaults$options.flags,
      pattern = _defaults$options.pattern; // empty values are allowed


  if (!isDefined(value)) return;
  if (!isString(value)) return message;
  var pttrn = isString(pattern) ? new RegExp(pattern, flags) : pattern;

  if (!pttrn.test(value)) {
    return message;
  }
});

var defaults$5 = {
  message: '"%{value}" is not included in the list',
  within: [],
  formatMessage: formatMessage
};
var inclusion = (function (value, options) {
  if (isArray(options)) {
    options = {
      within: options
    };
  }

  var _defaults$options = _objectSpread({}, defaults$5, options),
      message = _defaults$options.message,
      within = _defaults$options.within,
      formatMessage$$1 = _defaults$options.formatMessage; // When empty values are fine


  if (!isDefined(value)) return; // When is contained

  if (contains(within, value)) return;
  return formatMessage$$1(message, {
    value: value
  });
});

var defaults$6 = {
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
  formatMessage: formatMessage
};
var length = (function (value, options) {
  var _defaults$options = _objectSpread({}, defaults$6, options),
      is = _defaults$options.is,
      maximum = _defaults$options.maximum,
      message = _defaults$options.message,
      minimum = _defaults$options.minimum,
      notValid = _defaults$options.notValid,
      tokenizer = _defaults$options.tokenizer,
      tooLong = _defaults$options.tooLong,
      tooShort = _defaults$options.tooShort,
      wrongLength = _defaults$options.wrongLength,
      formatMessage$$1 = _defaults$options.formatMessage; // Empty values are allowed


  if (!isDefined(value)) return;
  var errors = [];
  var length = tokenizer(value).length;
  if (!isNumber(length)) return notValid; // Exact (is) check

  if (isNumber(is) && length !== is) {
    errors.push(formatMessage$$1(wrongLength, {
      is: is
    }));
  } // Minimum check


  if (isNumber(minimum) && length < minimum) {
    errors.push(formatMessage$$1(tooShort, {
      minimum: minimum
    }));
  } // Maximum check


  if (isNumber(maximum) && length > maximum) {
    errors.push(formatMessage$$1(tooLong, {
      maximum: maximum
    }));
  }

  if (errors.length > 0) return message || errors;
});

var defaults$7 = {
  strict: false,
  onlyInteger: false,
  odd: false,
  even: false,
  message: null,
  noStrings: false,
  notValid: 'must be a valid number',
  notNumber: 'is not a number',
  notInteger: 'must be an integer',
  notOdd: 'must be an odd number',
  notEven: 'must be an even number',
  mustBe: 'must be %{type} %{count}',
  notGreaterThan: 'must be greater than %{count}',
  notGreaterThanOrEqualTo: 'must be greater than or equal to %{count}',
  notEqualTo: 'must be equal to %{count}',
  notLessThan: 'must be less than %{count}',
  notLessThanOrEqualTo: 'must be less than or equal to %{count}',
  notDivisibleBy: 'must be divisible by %{count}',
  formatMessage: formatMessage
};
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
var numericality = (function (value, options) {
  var errors = [];

  var _defaults$options = _objectSpread({}, defaults$7, options),
      strict = _defaults$options.strict,
      onlyInteger = _defaults$options.onlyInteger,
      odd = _defaults$options.odd,
      even = _defaults$options.even,
      formatMessage$$1 = _defaults$options.formatMessage,
      message = _defaults$options.message,
      mustBe = _defaults$options.mustBe,
      noStrings = _defaults$options.noStrings,
      notEven = _defaults$options.notEven,
      notOdd = _defaults$options.notOdd,
      notInteger = _defaults$options.notInteger,
      notNumber = _defaults$options.notNumber,
      notValid = _defaults$options.notValid; // If empty values are fine


  if (!isDefined(value)) return; // Strict will check that it is a valid looking number

  if (isString(value) && strict) {
    var pattern = "^-?(0|[1-9]\\d*)".concat(onlyInteger ? '' : '(\\.\\d+)?', "$");

    if (!new RegExp(pattern).test(value)) {
      return message || notNumber;
    }
  } // Coerce the value to a number unless we're being strict.


  if (noStrings !== true && isString(value) && !isEmpty(value)) {
    value = +value;
  } // If it's not a number we shouldn't continue since it will compare it.


  if (!isNumber(value)) return message || notValid;
  if (!options) return; // Same logic as above, sort of. Don't bother with comparisons if this
  // doesn't pass.

  if (onlyInteger && !isInteger(value)) return message || notInteger;

  var _arr = Object.keys(checks);

  for (var _i = 0; _i < _arr.length; _i++) {
    var checkName = _arr[_i];
    var count = options[checkName];

    if (isNumber(count) && !checks[checkName](value, count)) {
      // This picks the default message if specified
      // For example the greaterThan check uses the message from
      // this.notGreaterThan so we capitalize the name and prepend "not"
      var key = 'not' + capitalize(checkName);
      var msg = options[key] || mustBe;
      errors.push(formatMessage$$1(msg, {
        count: count,
        type: prettify(checkName)
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
});

var defaults$8 = {
  allowEmpty: false,
  message: "can't be blank" // Presence validates that the value isn't empty

};
var presence = (function (value, options) {
  var _defaults$options = _objectSpread({}, defaults$8, options),
      allowEmpty = _defaults$options.allowEmpty,
      message = _defaults$options.message;

  if (allowEmpty !== false ? !isDefined(value) : isEmpty(value)) {
    return message;
  }
});

var defaults$9 = {
  message: 'must be of type %{type}',
  formatMessage: formatMessage,
  type: null
};
var type = (function (value, options) {
  if (isString(options)) {
    options = {
      type: options
    };
  }

  var _defaults$options = _objectSpread({}, defaults$9, options),
      message = _defaults$options.message,
      type = _defaults$options.type;

  if (!isDefined(type)) throw new Error('No type was specified');
  if (!isDefined(value)) return;
  var types = {
    array: isArray,
    boolean: isBoolean,
    date: isDate,
    float: isFloat,
    function: isFunction,
    integer: isInteger,
    number: isNumber,
    object: function object(value) {
      return isHash(value);
    },
    string: isString
  };
  var check = isFunction(type) ? type : types[type];
  if (!isFunction(check)) throw new Error("".concat(type, " must be a function."));

  if (!check(value, options)) {
    var msg = isFunction(message) ? message(value, options) : isFunction(type) ? 'must be of the correct type' : message;
    return formatMessage(msg, {
      type: type
    });
  }
});

var defaults$a = {
  allowLocal: false,
  message: 'is not a valid url',
  schemes: ['http', 'https'] // A URL validator that is used to validate URLs with the ability to
  // restrict schemes and some domains.

};
var url = (function (value, options) {
  var _defaults$options = _objectSpread({}, defaults$a, options),
      allowLocal = _defaults$options.allowLocal,
      message = _defaults$options.message,
      schemes = _defaults$options.schemes;

  if (!isDefined(value)) return;
  if (!isString(value)) return message;

  if (!REGEXP.URL({
    allowLocal: allowLocal,
    schemes: schemes
  }).exec(value)) {
    return message;
  }
});

var validators = {
  date: date,
  datetime: datetime,
  email: email,
  equality: equality,
  exclusion: exclusion,
  format: format,
  inclusion: inclusion,
  length: length,
  numericality: numericality,
  presence: presence,
  type: type,
  url: url
};

// - If validation fails, it will return an array with the errors.
// - Otherwise it will return undefined

var validate = (function (value, constraints) {
  var results = [];
  if (!isDefined(constraints)) return; // Loops through each constraints, finds the correct validator and run it.

  for (var constraint in constraints) {
    var validator = validators[constraint];
    if (!isFunction(validator)) throw new Error("Unknow validator \"".concat(validator, "\""));
    var result$$1 = validator(value, constraints[constraint]);

    if (result$$1) {
      results.push(isArray(result$$1) ? _toConsumableArray(result$$1) : result$$1);
    }
  }

  if (results.length) return results;
});

module.exports = validate;
//# sourceMappingURL=validate-core.js.map
