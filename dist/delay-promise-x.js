/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2018-present",
  "date": "2019-08-05T21:27:59.614Z",
  "describe": "",
  "description": "Create a delayed promise.",
  "file": "delay-promise-x.js",
  "hash": "fa6d97bda7ae63748ccf",
  "license": "MIT",
  "version": "1.0.28"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["delayPromiseX"] = factory();
	else
		root["delayPromiseX"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
var attempt = function attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
};

/* harmony default export */ __webpack_exports__["a"] = (attempt);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

var castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

var toObject = function toObject(value) {
  return castObject(Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value));
};

/* harmony default export */ __webpack_exports__["a"] = (toObject);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
var toBoolean = function toBoolean(value) {
  return !!value;
};

/* harmony default export */ __webpack_exports__["a"] = (toBoolean);



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
var to_boolean_x_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var to_string_tag_x_esm = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js
var has_to_string_tag_x_esm = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(3);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// EXTERNAL MODULE: ./node_modules/trim-x/dist/trim-x.esm.js + 1 modules
var trim_x_esm = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/white-space-x/dist/white-space-x.esm.js
var white_space_x_esm = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var SPACE = ' ';
var RegExpCtr = /none/.constructor;
var reNormalize2018 = new RegExpCtr("[".concat(white_space_x_esm["a" /* default */], "]+"), 'g');
var replace = SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2019).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

var normalize_space_x_esm_normalizeSpace = function normalizeSpace(string) {
  return replace.call(Object(trim_x_esm["a" /* default */])(string), reNormalize2018, SPACE);
};

/* harmony default export */ var normalize_space_x_esm = (normalize_space_x_esm_normalizeSpace);


// EXTERNAL MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js
var to_string_x_esm = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js
var require_coercible_to_string_x_esm = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var EMPTY_STRING = '';
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace_comments_x_esm_replace = EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

var replace_comments_x_esm_replaceComments = function replaceComments(string, replacement) {
  return replace_comments_x_esm_replace.call(Object(require_coercible_to_string_x_esm["a" /* default */])(string), STRIP_COMMENTS, arguments.length > 1 ? Object(to_string_x_esm["a" /* default */])(replacement) : EMPTY_STRING);
};

/* harmony default export */ var replace_comments_x_esm = (replace_comments_x_esm_replaceComments);


// CONCATENATED MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js







var FunctionCtr = attempt_x_esm["a" /* default */].constructor;
var is_function_x_esm_SPACE = ' ';
var fToString = attempt_x_esm["a" /* default */].toString;
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var test = ctrRx.test;
var hasNativeClass = Object(attempt_x_esm["a" /* default */])(function attemptee() {
  /* eslint-disable-next-line babel/new-cap */
  return FunctionCtr('"use strict"; return class My {};')();
}).threw === false;

var is_function_x_esm_testClassString = function testClassString(value) {
  return test.call(ctrRx, normalize_space_x_esm(replace_comments_x_esm(fToString.call(value), is_function_x_esm_SPACE)));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = Object(attempt_x_esm["a" /* default */])(is_function_x_esm_testClassString, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt_x_esm["a" /* default */].call(value, fToString).threw === false;
};

var is_function_x_esm_compareTags = function compareTags(value) {
  var strTag = Object(to_string_tag_x_esm["a" /* default */])(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var is_function_x_esm_isFunction = function isFunction(value, allowClass) {
  if (is_primitive_default()(value)) {
    return false;
  }

  if (has_to_string_tag_x_esm["a" /* default */]) {
    return tryFuncToString(value, Object(to_boolean_x_esm["a" /* default */])(allowClass));
  }

  if (hasNativeClass && Object(to_boolean_x_esm["a" /* default */])(allowClass) === false && isES6ClassFn(value)) {
    return false;
  }

  return is_function_x_esm_compareTags(value);
};

/* harmony default export */ var is_function_x_esm = __webpack_exports__["a"] = (is_function_x_esm_isFunction);



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */

var assertIsFunction = function assertIsFunction(callback) {
  if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(callback) === false) {
    var msg = is_primitive__WEBPACK_IMPORTED_MODULE_2___default()(callback) ? Object(to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(callback) : '#<Object>';
    throw new TypeError("".concat(msg, " is not a function"));
  }

  return callback;
};

/* harmony default export */ __webpack_exports__["a"] = (assertIsFunction);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var to_property_key_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


var hop = {}.hasOwnProperty;
/**
 * The `hasOwnProperty` method returns a boolean indicating whether
 * the `object` has the specified `property`. Does not attempt to fix known
 * issues in older browsers, but does ES6ify the method.
 *
 * @param {!object} object - The object to test.
 * @throws {TypeError} If object is null or undefined.
 * @param {string|number|symbol} property - The name or Symbol of the property to test.
 * @returns {boolean} `true` if the property is set on `object`, else `false`.
 */

var hasOwnProperty = function hasOwnProperty(object, property) {
  return hop.call(Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object), Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(property));
};

/* harmony default export */ __webpack_exports__["a"] = (hasOwnProperty);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var hasSymbolSupport = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {
  _newArrowCheck(this, _this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol__WEBPACK_IMPORTED_MODULE_1___default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ __webpack_exports__["a"] = (hasSymbolSupport.threw === false && hasSymbolSupport.value === true);



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(48)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var to_primitive_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var to_string_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|symbol} The converted argument.
 */

var toPropertyKey = function toPropertyKey(argument) {
  var key = Object(to_primitive_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(argument, String);
  return has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && _typeof(key) === 'symbol' ? key : Object(to_string_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(key);
};

/* harmony default export */ __webpack_exports__["a"] = (toPropertyKey);



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_nil_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

var requireObjectCoercible = function requireObjectCoercible(value) {
  if (Object(is_nil_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
};

/* harmony default export */ __webpack_exports__["a"] = (requireObjectCoercible);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_0__);

var ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var castString = ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

var ToString = function ToString(value) {
  if (is_symbol__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return castString(value);
};

/* harmony default export */ __webpack_exports__["a"] = (ToString);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(8);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// EXTERNAL MODULE: ./node_modules/to-primitive-x/dist/to-primitive-x.esm.js
var to_primitive_x_esm = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/trim-x/dist/trim-x.esm.js + 1 modules
var trim_x_esm = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var nan_x_esm = (0 / 0);


// EXTERNAL MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js
var to_string_x_esm = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/trim-left-x/dist/trim-left-x.esm.js
var trim_left_x_esm = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/parse-int-x/dist/parse-int-x.esm.js



var nativeParseInt = parseInt;
/**  @type {Function} */

var castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var _ref = '',
    charAt = _ref.charAt;
var hexRegex = /^[-+]?0[xX]/;
var test = hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2019).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

var parse_int_x_esm_$parseInt = function $parseInt(string, radix) {
  var str = Object(trim_left_x_esm["a" /* default */])(Object(to_string_x_esm["a" /* default */])(string));

  if (charAt.call(str, 0) === "\u180E") {
    return nan_x_esm;
  }

  return nativeParseInt(str, castNumber(radix) || (test.call(hexRegex, str) ? 16 : 10));
};

/* harmony default export */ var parse_int_x_esm = (parse_int_x_esm_$parseInt);


// CONCATENATED MODULE: ./node_modules/to-number-x/dist/to-number-x.esm.js





var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
var to_number_x_esm_castNumber = testCharsCount.constructor;
var pStrSlice = ERROR_MESSAGE.slice;
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var to_number_x_esm_test = binaryRegex.test;

var isBinary = function isBinary(value) {
  return to_number_x_esm_test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function isOctal(value) {
  return to_number_x_esm_test.call(octalRegex, value);
};

var nonWSregex = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS = function hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function isInvalidHexLiteral(value) {
  return to_number_x_esm_test.call(invalidHexLiteral, value);
};

var to_number_x_esm_assertNotSymbol = function assertNotSymbol(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return value;
};

var to_number_x_esm_parseBase = function parseBase(value, radix) {
  return parse_int_x_esm(pStrSlice.call(value, testCharsCount), radix);
};

var parseString = function parseString(toNum, value) {
  if (isBinary(value)) {
    return toNum(to_number_x_esm_parseBase(value, binaryRadix));
  }

  if (isOctal(value)) {
    return toNum(to_number_x_esm_parseBase(value, octalRadix));
  }

  return null;
};

var to_number_x_esm_convertString = function convertString(toNum, value) {
  var val = parseString(toNum, value);

  if (val !== null) {
    return val;
  }

  if (hasNonWS(value) || isInvalidHexLiteral(value)) {
    return nan_x_esm;
  }

  var trimmed = Object(trim_x_esm["a" /* default */])(value);

  if (trimmed !== value) {
    return toNum(trimmed);
  }

  return null;
};
/**
 * This method converts argument to a value of type Number. (ES2019).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


var to_number_x_esm_toNumber = function toNumber(argument) {
  var value = to_number_x_esm_assertNotSymbol(Object(to_primitive_x_esm["a" /* default */])(argument, to_number_x_esm_castNumber));

  if (typeof value === 'string') {
    var val = to_number_x_esm_convertString(toNumber, value);

    if (val !== null) {
      return val;
    }
  }

  return to_number_x_esm_castNumber(value);
};

/* harmony default export */ var to_number_x_esm = __webpack_exports__["a"] = (to_number_x_esm_toNumber);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
var isNil = function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
};

/* harmony default export */ __webpack_exports__["a"] = (isNil);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var to_property_key_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var has_own_property_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var assert_is_object_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var to_boolean_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);







var ObjectCtr = {}.constructor;
var nd = ObjectCtr.defineProperty;
var nativeDefProp = typeof nd === 'function' && nd;
var definePropertyFallback;

var toPropertyDescriptor = function toPropertyDescriptor(desc) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(desc);
  var descriptor = {};

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'enumerable')) {
    descriptor.enumerable = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(object.enumerable);
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'configurable')) {
    descriptor.configurable = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(object.configurable);
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'value')) {
    descriptor.value = object.value;
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'writable')) {
    descriptor.writable = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(object.writable);
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'get')) {
    var getter = object.get;

    if (typeof getter !== 'undefined' && Object(is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(getter) === false) {
      throw new TypeError('getter must be a function');
    }

    descriptor.get = getter;
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'set')) {
    var setter = object.set;

    if (typeof setter !== 'undefined' && Object(is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(setter) === false) {
      throw new TypeError('setter must be a function');
    }

    descriptor.set = setter;
  }

  if ((Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(descriptor, 'get') || Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(descriptor, 'set')) && (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(descriptor, 'value') || Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(descriptor, 'writable'))) {
    throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  }

  return descriptor;
}; // ES5 15.2.3.6
// http://es5.github.com/#x15.2.3.6
// Patch for WebKit and IE8 standard mode
// Designed by hax <hax.github.com>
// related issue: https://github.com/es-shims/es5-shim/issues#issue/5
// IE8 Reference:
//     http://msdn.microsoft.com/en-us/library/dd282900.aspx
//     http://msdn.microsoft.com/en-us/library/dd229916.aspx
// WebKit Bugs:
//     https://bugs.webkit.org/show_bug.cgi?id=36423

/**
 * This method defines a new property directly on an object, or modifies an
 * existing property on an object, and returns the object.
 *
 * @param {object} object - The object on which to define the property.
 * @param {string} property - The name of the property to be defined or modified.
 * @param {object} descriptor - The descriptor for the property being defined or modified.
 * @returns {object} The object that was passed to the function.
 * });.
 */


var $defineProperty; // check whether defineProperty works if it's given. Otherwise, shim partially.

if (nativeDefProp) {
  var testWorksWith = function testWorksWith(object) {
    var testResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeDefProp, object, 'sentinel', {});
    return testResult.threw === false && testResult.value === object && 'sentinel' in object;
  };

  var doc = typeof document !== 'undefined' && document;

  if (testWorksWith({}) && (Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(doc) === false || testWorksWith(doc.createElement('div')))) {
    $defineProperty = function defineProperty(object, property, descriptor) {
      return nativeDefProp(Object(assert_is_object_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(object), Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(property), toPropertyDescriptor(descriptor));
    };
  } else {
    definePropertyFallback = nativeDefProp;
  }
}

if (Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(nativeDefProp) === false || definePropertyFallback) {
  var prototypeOfObject = ObjectCtr.prototype; // If JS engine supports accessors creating shortcuts.

  var supportsAccessors = Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(prototypeOfObject, '__defineGetter__');
  /* eslint-disable-next-line no-underscore-dangle */

  var defineGetter = supportsAccessors && prototypeOfObject.__defineGetter_;
  /* eslint-disable-next-line no-underscore-dangle,no-restricted-properties */

  var defineSetter = supportsAccessors && prototypeOfObject.__defineSetter__;
  /* eslint-disable-next-line no-underscore-dangle */

  var lookupGetter = supportsAccessors && prototypeOfObject.__lookupGetter__;
  /* eslint-disable-next-line no-underscore-dangle */

  var lookupSetter = supportsAccessors && prototypeOfObject.__lookupSetter__;

  $defineProperty = function defineProperty(object, property, descriptor) {
    Object(assert_is_object_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(object);
    var propKey = Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(property);
    var propDesc = toPropertyDescriptor(descriptor); // make a valiant attempt to use the real defineProperty for IE8's DOM elements.

    if (definePropertyFallback) {
      var result = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(ObjectCtr, definePropertyFallback, object, propKey, propDesc);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    } // If it's a data property.


    if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(propDesc, 'value')) {
      // fail silently if 'writable', 'enumerable', or 'configurable' are requested but not supported
      if (supportsAccessors && (lookupGetter.call(object, propKey) || lookupSetter.call(object, propKey))) {
        // As accessors are supported only on engines implementing
        // `__proto__` we can safely override `__proto__` while defining
        // a property to make sure that we don't hit an inherited accessor.

        /* eslint-disable-next-line no-proto */
        var prototype = object.__proto__;
        /* eslint-disable-next-line no-proto */

        object.__proto__ = prototypeOfObject; // Deleting a property anyway since getter / setter may be defined on object itself.

        delete object[propKey];
        object[propKey] = propDesc.value; // Setting original `__proto__` back now.

        /* eslint-disable-next-line no-proto */

        object.__proto__ = prototype;
      } else {
        object[propKey] = propDesc.value;
      }
    } else {
      if (supportsAccessors === false && (propDesc.get || propDesc.set)) {
        throw new TypeError('getters & setters can not be defined on this javascript engine');
      } // If we got that far then getters and setters can be defined !!


      if (propDesc.get) {
        defineGetter.call(object, propKey, propDesc.get);
      }

      if (propDesc.set) {
        defineSetter.call(object, propKey, propDesc.set);
      }
    }

    return object;
  };
}

var defProp = $defineProperty;
/* harmony default export */ __webpack_exports__["a"] = (defProp);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/to-number-x/dist/to-number-x.esm.js + 2 modules
var to_number_x_esm = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
var is_nan_x_esm_isNaN = function isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
};

/* harmony default export */ var is_nan_x_esm = (is_nan_x_esm_isNaN);


// CONCATENATED MODULE: ./node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

var is_finite_x_esm_isFinite = function isFinite(number) {
  return typeof number === 'number' && is_nan_x_esm(number) === false && number !== infinity_x_esm && number !== -infinity_x_esm;
};

/* harmony default export */ var is_finite_x_esm = (is_finite_x_esm_isFinite);


// CONCATENATED MODULE: ./node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2019).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

var math_sign_x_esm_sign = function sign(x) {
  var n = Object(to_number_x_esm["a" /* default */])(x);

  if (n === 0 || is_nan_x_esm(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
};

/* harmony default export */ var math_sign_x_esm = (math_sign_x_esm_sign);


// CONCATENATED MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js




var abs = Math.abs,
    floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2019).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var to_integer_x_esm_toInteger = function toInteger(value) {
  var number = Object(to_number_x_esm["a" /* default */])(value);

  if (is_nan_x_esm(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm(number) === false) {
    return number;
  }

  return math_sign_x_esm(number) * floor(abs(number));
};

/* harmony default export */ var to_integer_x_esm = __webpack_exports__["a"] = (to_integer_x_esm_toInteger);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/array-for-each-x/dist/array-for-each-x.esm.js
var array_for_each_x_esm = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/object-define-property-x/dist/object-define-property-x.esm.js
var object_define_property_x_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js
var to_object_x_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/assert-is-object-x/dist/assert-is-object-x.esm.js
var assert_is_object_x_esm = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/object-keys-x/dist/object-keys-x.esm.js + 2 modules
var object_keys_x_esm = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js
var assert_is_function_x_esm = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js
var require_object_coercible_x_esm = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/array-all-x/dist/array-all-x.esm.js + 1 modules
var array_all_x_esm = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
var to_boolean_x_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/array-filter-x/dist/array-filter-x.esm.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var nf = [].filter;
var nativeFilter = typeof nf === 'function' && nf;

var array_filter_x_esm_test1 = function test1() {
  var spy = 0;
  var res = attempt_x_esm["a" /* default */].call([1, 2], nativeFilter, function spyAdd1(item) {
    spy += item;
    return false;
  });
  return res.threw === false && res.value && res.value.length === 0 && spy === 3;
};

var array_filter_x_esm_test2 = function test2() {
  var spy = '';
  var res = attempt_x_esm["a" /* default */].call(Object(to_object_x_esm["a" /* default */])('abc'), nativeFilter, function spyAdd2(item, index) {
    spy += item;
    return index === 1;
  });
  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === 'b' && spy === 'abc';
};

var array_filter_x_esm_test3 = function test3() {
  var spy = 0;
  var res = attempt_x_esm["a" /* default */].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2, 3), nativeFilter, function spyAdd3(item, index) {
    spy += item;
    return index === 2;
  });
  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === 3 && spy === 6;
};

var array_filter_x_esm_test4 = function test4() {
  var spy = 0;
  var res = attempt_x_esm["a" /* default */].call({
    0: 1,
    1: 2,
    3: 3,
    4: 4,
    length: 4
  }, nativeFilter, function spyAdd4(item) {
    spy += item;
    return false;
  });
  return res.threw === false && res.value && res.value.length === 0 && spy === 6;
};

var getTest5Result = function getTest5Result(args) {
  var _args = _slicedToArray(args, 3),
      res = _args[0],
      div = _args[1],
      spy = _args[2];

  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === div && spy === div;
};

var array_filter_x_esm_test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var spy = null;
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x_esm["a" /* default */].call(fragment.childNodes, nativeFilter, function spyAssign(item) {
      spy = item;
      return item;
    });
    return getTest5Result([res, div, spy]);
  }

  return true;
};

var array_filter_x_esm_test6 = function test6() {
  var isStrict = function returnIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return Object(to_boolean_x_esm["a" /* default */])(this) === false;
  }();

  if (isStrict) {
    var spy = null;

    var testThis = function testThis() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    };

    var res = attempt_x_esm["a" /* default */].call([1], nativeFilter, testThis, 'x');
    return res.threw === false && res.value && res.value.length === 0 && spy === true;
  }

  return true;
};

var array_filter_x_esm_test7 = function test7() {
  var spy = {};
  var fn = 'return nativeFilter.call("foo", function (_, __, context) {' + 'if (castBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  /* eslint-disable-next-line no-new-func */

  var res = Object(attempt_x_esm["a" /* default */])(Function('nativeFilter', 'spy', 'castBoolean', fn), nativeFilter, spy, to_boolean_x_esm["a" /* default */]);
  return res.threw === false && res.value && res.value.length === 0 && spy.value !== true;
};

var isWorking = Object(to_boolean_x_esm["a" /* default */])(nativeFilter) && array_filter_x_esm_test1() && array_filter_x_esm_test2() && array_filter_x_esm_test3() && array_filter_x_esm_test4() && array_filter_x_esm_test5() && array_filter_x_esm_test6() && array_filter_x_esm_test7();

var patchedFilter = function filter(array, callBack
/* , thisArg */
) {
  Object(require_object_coercible_x_esm["a" /* default */])(array);
  var args = [Object(assert_is_function_x_esm["a" /* default */])(callBack)];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return nativeFilter.apply(array, args);
};

var implementation = function filter(array, callBack
/* , thisArg */
) {
  var object = Object(to_object_x_esm["a" /* default */])(array); // If no callback function or if callback is not a callable function

  Object(assert_is_function_x_esm["a" /* default */])(callBack);
  var result = [];

  var predicate = function predicate() {
    /* eslint-disable-next-line prefer-rest-params */
    var i = arguments[1];
    /* eslint-disable-next-line prefer-rest-params */

    if (i in arguments[2]) {
      /* eslint-disable-next-line prefer-rest-params */
      var item = arguments[0];
      /* eslint-disable-next-line babel/no-invalid-this */

      if (callBack.call(this, item, i, object)) {
        result[result.length] = item;
      }
    }
  };
  /* eslint-disable-next-line prefer-rest-params */


  Object(array_all_x_esm["a" /* default */])(object, predicate, arguments[2]);
  return result;
};
/**
 * This method creates a new array with all elements that pass the test
 * implemented by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function is a predicate, to test each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {Array} A new array with the elements that pass the test.
 */

var $filter = isWorking ? patchedFilter : implementation;
/* harmony default export */ var array_filter_x_esm = ($filter);


// EXTERNAL MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/get-own-property-symbols-x/dist/get-own-property-symbols-x.esm.js



var nativeGOPS = {}.constructor.getOwnPropertySymbols;
var get_own_property_symbols_x_esm_isWorking;

if (has_symbol_support_x_esm["a" /* default */] && nativeGOPS && typeof nativeGOPS === 'function') {
  /* eslint-disable-next-line compat/compat */
  var get_own_property_symbols_x_esm_symbol = Symbol('');
  var testObj = {
    a: 1
  };
  testObj[get_own_property_symbols_x_esm_symbol] = 2;
  var r = Object(attempt_x_esm["a" /* default */])(nativeGOPS, testObj);
  get_own_property_symbols_x_esm_isWorking = r.threw === false && r.value && r.value.length === 1 && r.value[0] === get_own_property_symbols_x_esm_symbol;
}
/**
 * This method creates an array of all symbol properties found directly upon a
 * given object.
 *
 * @param {object} obj - The object whose symbol properties are to be returned.
 * @throws {TypeError} If target is null or undefined.
 * @returns {Array} An array of all symbol properties found directly upon the
 *  given object.
 */


var get_own_property_symbols_x_esm_getOwnPropertySymbols = function getOwnPropertySymbols(obj) {
  var object = Object(to_object_x_esm["a" /* default */])(obj);
  return get_own_property_symbols_x_esm_isWorking ? nativeGOPS(object) : [];
};

/* harmony default export */ var get_own_property_symbols_x_esm = (get_own_property_symbols_x_esm_getOwnPropertySymbols);


// EXTERNAL MODULE: ./node_modules/property-is-enumerable-x/dist/property-is-enumerable-x.esm.js
var property_is_enumerable_x_esm = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/dist/get-own-enumerable-property-symbols-x.esm.js
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





/**
 * This method returns only the enumerable own property symbols of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own property symbols.
 */

var get_own_enumerable_property_symbols_x_esm_getOwnEnumerablePropertySymbols = function getOwnEnumerablePropertySymbols(target) {
  var _this = this;

  var object = Object(to_object_x_esm["a" /* default */])(target);
  return array_filter_x_esm(get_own_property_symbols_x_esm(object), function (symbol) {
    _newArrowCheck(this, _this);

    return Object(property_is_enumerable_x_esm["a" /* default */])(object, symbol);
  }.bind(this));
};

/* harmony default export */ var get_own_enumerable_property_symbols_x_esm = (get_own_enumerable_property_symbols_x_esm_getOwnEnumerablePropertySymbols);


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-keys-x/dist/get-own-enumerable-keys-x.esm.js



var concat = [].concat;
/**
 * This method returns only the enumerable own keys of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own keys.
 */

var get_own_enumerable_keys_x_esm_getOwnNonEnumerableKeys = function getOwnNonEnumerableKeys(target) {
  var object = Object(to_object_x_esm["a" /* default */])(target);
  return concat.call(Object(object_keys_x_esm["a" /* default */])(object), get_own_enumerable_property_symbols_x_esm(object));
};

/* harmony default export */ var get_own_enumerable_keys_x_esm = (get_own_enumerable_keys_x_esm_getOwnNonEnumerableKeys);


// CONCATENATED MODULE: ./node_modules/object-define-properties-x/dist/object-define-properties-x.esm.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defineProperty; });





var defineProperty = object_define_property_x_esm["a" /* default */];
/**
 * This method defines new or modifies existing properties directly on an
 * object, returning the object.
 *
 * @param {object} object - The object on which to define or modify properties.
 * @param {object} properties - An object whose own enumerable properties
 *  constitute descriptors for the
 * properties to be defined or modified.
 * @returns {object} The object that was passed to the function.
 */

var object_define_properties_x_esm_defineProperties = function defineProperties(object, properties) {
  Object(assert_is_object_x_esm["a" /* default */])(object);
  var props = Object(to_object_x_esm["a" /* default */])(properties);
  Object(array_for_each_x_esm["a" /* default */])(get_own_enumerable_keys_x_esm(props), function defineProp(property) {
    if (property !== '__proto__') {
      Object(object_define_property_x_esm["a" /* default */])(object, property, props[property]);
    }
  });
  return object;
};

/* harmony default export */ var object_define_properties_x_esm = __webpack_exports__["a"] = (object_define_properties_x_esm_defineProperties);



/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Tests `value` to see if it is an object, throws a `TypeError` if it is
 * not. Otherwise returns the `value`.
 *
 * @param {*} value - The argument to be tested.
 * @throws {TypeError} Throws if `value` is not an object.
 * @returns {*} Returns `value` if it is an object.
 */

var assertIsObject = function assertIsObject(value) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(value)) {
    throw new TypeError("".concat(Object(to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value), " is not an object"));
  }

  return value;
};

/* harmony default export */ __webpack_exports__["a"] = (assertIsObject);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

var toStringTag = function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return nativeObjectToString.call(value);
};

/* harmony default export */ __webpack_exports__["a"] = (toStringTag);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var to_string_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

var requireCoercibleToString = function requireCoercibleToString(value) {
  return Object(to_string_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value));
};

/* harmony default export */ __webpack_exports__["a"] = (requireCoercibleToString);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export list */
/* unused harmony export string2016 */
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var stringES2018 = '';
var length = list.length;

for (var i = 0; i < length; i += 1) {
  if (list[i].es2016) {
    stringES2016 += list[i].string;
  }

  if (list[i].es2018) {
    stringES2018 += list[i].string;
  }
}

var string2018 = stringES2018;
/* harmony default export */ __webpack_exports__["a"] = (string2018);
var string2016 = stringES2016;



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable-next-line compat/compat */

var pToString = has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && Symbol.prototype.toString;
var isSymbolFn = typeof pToString === 'function' && is_symbol__WEBPACK_IMPORTED_MODULE_1___default.a;
/** @type {Function} */

var castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

var toStringSymbolsSupported = function toStringSymbolsSupported(value) {
  return isSymbolFn && isSymbolFn(value) ? pToString.call(value) : castString(value);
};

/* harmony default export */ __webpack_exports__["a"] = (toStringSymbolsSupported);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_integer_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2019).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var toLength = function toLength(value) {
  var len = Object(to_integer_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER;
  }

  return len;
};

/* harmony default export */ __webpack_exports__["a"] = (toLength);



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var string = 'a';
var boxedString = {}.constructor(string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var hasBoxed = boxedString[0] === string && 0 in boxedString;
/* harmony default export */ var has_boxed_string_x_esm = (hasBoxed);


// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(17);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// CONCATENATED MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var EMPTY_STRING = '';
var strSplit = EMPTY_STRING.split;
var isStringFn = has_boxed_string_x_esm === false && typeof strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

var splitIfBoxedBug = function splitIfBoxedBug(value) {
  return isStringFn && isStringFn(value) ? strSplit.call(value, EMPTY_STRING) : value;
};

/* harmony default export */ var split_if_boxed_bug_x_esm = __webpack_exports__["a"] = (splitIfBoxedBug);



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implementation */
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_string_tag_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);


var nia = [].isArray;
var nativeIsArray = typeof nia === 'function' && nia;
var testResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function attemptee() {
  return nativeIsArray([]) === true && nativeIsArray({
    length: 0
  }) === false;
});
var isWorking = testResult.threw === false && testResult.value === true;
var implementation = function isArray(value) {
  return Object(to_string_tag_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value) === '[object Array]';
};
/**
 * Determines whether the passed value is an Array.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} - True if an array; otherwise false.
 */

var isArray = isWorking ? nativeIsArray : implementation;
/* harmony default export */ __webpack_exports__["a"] = (isArray);



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var to_integer_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);





var getMax = function _getMax(a, b) {
  return a >= b ? a : b;
};

var getMin = function _getMin(a, b) {
  return a <= b ? a : b;
};

var setRelative = function _setRelative(value, length) {
  return value < 0 ? getMax(length + value, 0) : getMin(value, length);
};
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {!object} arrayLike - The array like object to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice([0,1,2,3,4],1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */


var slice = function slice(arrayLike, start, end) {
  var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arrayLike));
  var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iterable.length);
  var k = setRelative(Object(to_integer_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(start), length);
  var relativeEnd = typeof end === 'undefined' ? length : Object(to_integer_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(end);
  var finalEnd = setRelative(relativeEnd, length);
  var val = [];
  val.length = getMax(finalEnd - k, 0);
  var next = 0;

  while (k < finalEnd) {
    if (k in iterable) {
      val[next] = iterable[k];
    }

    next += 1;
    k += 1;
  }

  return val;
};

/* harmony default export */ __webpack_exports__["a"] = (slice);



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_date_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var is_date_object__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_date_object__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var is_nil_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);







var ZERO = 0;
var ONE = 1;
/* eslint-disable-next-line no-void */

var UNDEFINED = void ZERO;
var NUMBER = 'number';
var STRING = 'string';
var DEFAULT = 'default';
var StringCtr = STRING.constructor;
var NumberCtr = ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var symToPrimitive = has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;

var assertHint = function assertHint(hint) {
  if (typeof hint !== 'string' || hint !== NUMBER && hint !== STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  return hint;
};
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */


var ordinaryToPrimitive = function ordinaryToPrimitive(ordinary, hint) {
  Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ordinary);
  assertHint(hint);
  var methodNames = hint === STRING ? toStringOrder : toNumberOrder;
  var method;
  var result;

  for (var i = ZERO; i < orderLength; i += ONE) {
    method = ordinary[methodNames[i]];

    if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(method)) {
      result = method.call(ordinary);

      if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var getMethod = function getMethod(object, property) {
  var func = object[property];

  if (Object(is_nil_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(func) === false) {
    if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === StringCtr) {
      return STRING;
    }

    if (value === NumberCtr) {
      return NUMBER;
    }
  }

  return DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) {
    if (symToPrimitive) {
      return getMethod(value, symToPrimitive);
    }

    if (is_symbol__WEBPACK_IMPORTED_MODULE_3___default()(value)) {
      return symValueOf;
    }
  }

  return UNDEFINED;
};

var evalExotic = function evalExotic(obj) {
  var exoticToPrim = obj.exoticToPrim,
      input = obj.input,
      hint = obj.hint;
  var result = exoticToPrim.call(input, hint);

  if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(result)) {
    return result;
  }

  throw new TypeError('unable to convert exotic object to primitive');
};

var evalPrimitive = function evalPrimitive(input, hint) {
  var newHint = hint === DEFAULT && (is_date_object__WEBPACK_IMPORTED_MODULE_2___default()(input) || is_symbol__WEBPACK_IMPORTED_MODULE_3___default()(input)) ? STRING : hint;
  return ordinaryToPrimitive(input, newHint === DEFAULT ? NUMBER : newHint);
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {Function} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


var toPrimitive = function toPrimitive(input, preferredType) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(input)) {
    return input;
  }

  var hint = getHint(preferredType, arguments.length > ONE);
  var exoticToPrim = getExoticToPrim(input);
  return typeof exoticToPrim === 'undefined' ? evalPrimitive(input, hint) : evalExotic({
    exoticToPrim: exoticToPrim,
    input: input,
    hint: hint
  });
};

/* harmony default export */ __webpack_exports__["a"] = (toPrimitive);



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ __webpack_exports__["a"] = (has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] &&
/* eslint-disable-next-line compat/compat */
is_symbol__WEBPACK_IMPORTED_MODULE_1___default()(Symbol.toStringTag));



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var require_coercible_to_string_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var white_space_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);


var EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft = new RegExpCtr("^[".concat(white_space_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "]+"));
var replace = EMPTY_STRING.replace;
/**
 * This method removes whitespace from the start of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

var trimStart = function trimStart(string) {
  return replace.call(Object(require_coercible_to_string_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(string), reLeft, EMPTY_STRING);
};

/* harmony default export */ __webpack_exports__["a"] = (trimStart);



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_number_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


var getMaxMin = function getMaxMin(args) {
  var minVal = Object(to_number_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(args[1]);
  var result = args.length < 3 ? {
    max: minVal,
    min: 0
  } : {
    max: Object(to_number_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(args[2]),
    min: minVal
  };

  if (result.min > result.max) {
    throw new RangeError('"min" must be less than "max"');
  }

  return result;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method clamp a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} [min=0] - The minimum number.
 * @param {number} max - The maximum number.
 * @throws {RangeError} If min > max.
 * @returns {number} The clamped number.
 */
// eslint-enable jsdoc/check-param-names


var clamp = function clamp(value) {
  var number = Object(to_number_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);

  if (arguments.length < 2) {
    return number;
  }
  /* eslint-disable-next-line prefer-rest-params */


  var _getMaxMin = getMaxMin(arguments),
      max = _getMaxMin.max,
      min = _getMaxMin.min;

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
};

/* harmony default export */ __webpack_exports__["a"] = (clamp);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implementation */
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var to_boolean_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var array_all_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }







var nfe = [].forEach;
var nativeForEach = typeof nfe === 'function' && nfe;

var test1 = function test1() {
  var _this = this;

  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1, 2], nativeForEach, function (item) {
    _newArrowCheck(this, _this);

    spy += item;
  }.bind(this));
  return res.threw === false && typeof res.value === 'undefined' && spy === 3;
};

var test2 = function test2() {
  var _this2 = this;

  var spy = '';
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('abc'), nativeForEach, function (item) {
    _newArrowCheck(this, _this2);

    spy += item;
  }.bind(this));
  return res.threw === false && typeof res.value === 'undefined' && spy === 'abc';
};

var test3 = function test3() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2, 3), nativeForEach, function spyAdd1(item) {
    spy += item;
  });
  return res.threw === false && typeof res.value === 'undefined' && spy === 6;
};

var test4 = function test4() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({
    0: 1,
    1: 2,
    3: 3,
    4: 4,
    length: 4
  }, nativeForEach, function spyAdd2(item) {
    spy += item;
  });
  return res.threw === false && typeof res.value === 'undefined' && spy === 6;
};

var test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var spy = null;
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(fragment.childNodes, nativeForEach, function spyAssign(item) {
      spy = item;
    });
    return res.threw === false && typeof res.value === 'undefined' && spy === div;
  }

  return true;
};

var test6 = function test6() {
  var isStrict = function returnIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this) === false;
  }();

  if (isStrict) {
    var spy = null;

    var thisTest = function thisTest() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    };

    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1], nativeForEach, thisTest, 'x');
    return res.threw === false && typeof res.value === 'undefined' && spy === true;
  }

  return true;
};

var test7 = function test7() {
  var spy = {};
  var fn = 'return nativeForEach.call("foo", function (_, __, context) {' + 'if (toBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  /* eslint-disable-next-line no-new-func */

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Function('nativeForEach', 'spy', 'toBoolean', fn), nativeForEach, spy, to_boolean_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
  return res.threw === false && typeof res.value === 'undefined' && spy.value !== true;
};

var isWorking = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(nativeForEach) && test1() && test2() && test3() && test4() && test5() && test6() && test7();

var patchedNative = function forEach(array, callBack
/* , thisArg */
) {
  Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(array);
  var args = [Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(callBack)];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return nativeForEach.apply(array, args);
};

var implementation = function forEach(array, callBack
/* , thisArg */
) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(array); // If no callback function or if callback is not a callable function

  Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(callBack);

  var iteratee = function iteratee() {
    /* eslint-disable-next-line prefer-rest-params */
    var i = arguments[1];
    /* eslint-disable-next-line prefer-rest-params */

    if (i in arguments[2]) {
      /* eslint-disable-next-line prefer-rest-params,babel/no-invalid-this */
      callBack.call(this, arguments[0], i, object);
    }
  };
  /* eslint-disable-next-line prefer-rest-params */


  Object(array_all_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(object, iteratee, arguments[2]);
};
/**
 * This method executes a provided function once for each array element.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 */

var $forEach = isWorking ? patchedNative : implementation;
/* harmony default export */ __webpack_exports__["a"] = ($forEach);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_property_key_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var propIsEnumerable = {}.propertyIsEnumerable;
/**
 * This method returns a Boolean indicating whether the specified property is
 * enumerable. Does not attempt to fix bugs in IE<9 or old Opera, otherwise it
 * does ES6ify the method.
 *
 * @param {!object} object - The object on which to test the property.
 * @param {string|symbol} property - The name of the property to test.
 * @throws {TypeError} If target is null or undefined.
 * @returns {boolean} A Boolean indicating whether the specified property is
 *  enumerable.
 */

var propertyIsEnumerable = function propertyIsEnumerable(object, property) {
  return propIsEnumerable.call(Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object), Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(property));
};

/* harmony default export */ __webpack_exports__["a"] = (propertyIsEnumerable);



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js
var to_object_x_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/is-array-x/dist/is-array-x.esm.js
var is_array_x_esm = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/is-arguments/index.js
var is_arguments = __webpack_require__(22);
var is_arguments_default = /*#__PURE__*/__webpack_require__.n(is_arguments);

// EXTERNAL MODULE: ./node_modules/array-like-slice-x/dist/array-like-slice-x.esm.js
var array_like_slice_x_esm = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js + 1 modules
var split_if_boxed_bug_x_esm = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(17);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// EXTERNAL MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js + 2 modules
var is_function_x_esm = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(3);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// CONCATENATED MODULE: ./node_modules/is-object-like-x/dist/is-object-like-x.esm.js


/**
 * Checks if `value` is object-like. A value is object-like if it's not a
 * primitive and not a function.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */

var is_object_like_x_esm_isObjectLike = function isObjectLike(value) {
  return is_primitive_default()(value) === false && Object(is_function_x_esm["a" /* default */])(value, true) === false;
};

/* harmony default export */ var is_object_like_x_esm = (is_object_like_x_esm_isObjectLike);


// EXTERNAL MODULE: ./node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js
var has_to_string_tag_x_esm = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/has-own-property-x/dist/has-own-property-x.esm.js
var has_own_property_x_esm = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/object-get-own-property-descriptor-x/dist/object-get-own-property-descriptor-x.esm.js + 1 modules
var object_get_own_property_descriptor_x_esm = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/object-define-property-x/dist/object-define-property-x.esm.js
var object_define_property_x_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var to_string_tag_x_esm = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/is-regexp-x/dist/is-regexp-x.esm.js






var regexExec = /none/.exec;
var regexClass = '[object RegExp]';

var tryRegexExecCall = function tryRegexExec(value, descriptor) {
  try {
    value.lastIndex = 0;
    regexExec.call(value);
    return true;
  } catch (e) {
    return false;
  } finally {
    Object(object_define_property_x_esm["a" /* default */])(value, 'lastIndex', descriptor);
  }
};
/**
 * This method tests if a value is a regex.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if value is a regex; otherwise `false`.
 */


var is_regexp_x_esm_isRegex = function isRegex(value) {
  if (is_object_like_x_esm(value) === false) {
    return false;
  }

  if (has_to_string_tag_x_esm["a" /* default */] === false) {
    return Object(to_string_tag_x_esm["a" /* default */])(value) === regexClass;
  }

  var descriptor = Object(object_get_own_property_descriptor_x_esm["a" /* default */])(value, 'lastIndex');
  var hasLastIndexDataProperty = descriptor && Object(has_own_property_x_esm["a" /* default */])(descriptor, 'value');

  if (hasLastIndexDataProperty !== true) {
    return false;
  }

  return tryRegexExecCall(value, descriptor);
};

/* harmony default export */ var is_regexp_x_esm = (is_regexp_x_esm_isRegex);


// EXTERNAL MODULE: ./node_modules/object-keys/index.js
var object_keys = __webpack_require__(46);
var object_keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// CONCATENATED MODULE: ./node_modules/object-keys-x/dist/object-keys-x.esm.js










var ObjectCtr = {}.constructor;
var nativeKeys = typeof ObjectCtr.keys === 'function' && ObjectCtr.keys;
var isWorking;
var throwsWithNull;
var worksWithPrim;
var worksWithRegex;
var worksWithArgs;
var worksWithStr;

if (nativeKeys) {
  var isCorrectRes = function _isCorrectRes(r, length) {
    return r.threw === false && Object(is_array_x_esm["a" /* default */])(r.value) && r.value.length === length;
  };

  var either = function _either(r, a, b) {
    var x = r.value[0];
    var y = r.value[1];
    return x === a && y === b || x === b && y === a;
  };

  var testObj = {
    a: 1,
    b: 2
  };
  var res = Object(attempt_x_esm["a" /* default */])(nativeKeys, testObj);
  isWorking = isCorrectRes(res, 2) && either(res, 'a', 'b');

  if (isWorking) {
    testObj = Object('a');
    testObj.y = 1;
    res = Object(attempt_x_esm["a" /* default */])(nativeKeys, testObj);
    isWorking = isCorrectRes(res, 2) && either(res, '0', 'y');
  }

  if (isWorking) {
    throwsWithNull = Object(attempt_x_esm["a" /* default */])(nativeKeys, null).threw;
    worksWithPrim = isCorrectRes(Object(attempt_x_esm["a" /* default */])(nativeKeys, 42), 0);
    worksWithRegex = Object(attempt_x_esm["a" /* default */])(nativeKeys, /a/g).threw === false;
    res = Object(attempt_x_esm["a" /* default */])(nativeKeys, function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2));
    worksWithArgs = isCorrectRes(res, 2) && either(res, '0', '1');
    res = Object(attempt_x_esm["a" /* default */])(nativeKeys, Object('ab'));
    worksWithStr = isCorrectRes(res, 2) && either(res, '0', '1');
  }
}
/**
 * This method returns an array of a given object's own enumerable properties,
 * in the same order as that provided by a for...in loop (the difference being
 * that a for-in loop enumerates properties in the prototype chain as well).
 *
 * @param {*} obj - The object of which the enumerable own properties are to be returned.
 * @returns {Array} An array of strings that represent all the enumerable properties of the given object.
 */


var objectKeys;

if (isWorking) {
  if (throwsWithNull && worksWithPrim && worksWithRegex && worksWithArgs && worksWithStr) {
    objectKeys = nativeKeys;
  } else {
    objectKeys = function keys(object) {
      var obj = to_object_x_esm["a" /* default */] ? Object(to_object_x_esm["a" /* default */])(object) : object;

      if (worksWithArgs !== true && is_arguments_default()(obj)) {
        obj = Object(array_like_slice_x_esm["a" /* default */])(obj);
      } else if (worksWithStr !== true && is_string_default()(obj)) {
        obj = Object(split_if_boxed_bug_x_esm["a" /* default */])(obj);
      } else if (worksWithRegex !== true && is_regexp_x_esm(obj)) {
        var regexKeys = [];
        /* eslint-disable-next-line no-restricted-syntax */

        for (var key in obj) {
          // noinspection JSUnfilteredForInLoop
          if (Object(has_own_property_x_esm["a" /* default */])(obj, key)) {
            regexKeys[regexKeys.length] = key;
          }
        }

        return regexKeys;
      }

      return nativeKeys(obj);
    };
  }
} else {
  objectKeys = function keys(object) {
    return object_keys_default()(Object(to_object_x_esm["a" /* default */])(object));
  };
}

var ok = objectKeys;
/* harmony default export */ var object_keys_x_esm = __webpack_exports__["a"] = (ok);



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js
var to_object_x_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/to-property-key-x/dist/to-property-key-x.esm.js
var to_property_key_x_esm = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/has-own-property-x/dist/has-own-property-x.esm.js
var has_own_property_x_esm = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(3);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(17);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// EXTERNAL MODULE: ./node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js
var to_string_symbols_supported_x_esm = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js + 4 modules
var to_integer_x_esm = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/to-number-x/dist/to-number-x.esm.js + 2 modules
var to_number_x_esm = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/math-clamp-x/dist/math-clamp-x.esm.js
var math_clamp_x_esm = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/is-index-x/dist/is-index-x.esm.js




var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var rxTest = reIsUint.test;
/**
 * This method determines whether the passed value is a zero based index.
 * JavaScript arrays are zero-indexed: the first element of an array is at
 * index 0, and the last element is at the index equal to the value of the
 * array's length property minus 1.
 *
 * @param {number|string} value - The value to be tested for being a zero based index.
 * @param {number} [length=MAX_SAFE_INTEGER] - The length that sets the upper bound.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 * zero based index within bounds.
 */

var is_index_x_esm_isIndex = function isIndex(value, length) {
  var string = Object(to_string_symbols_supported_x_esm["a" /* default */])(value);

  if (rxTest.call(reIsUint, string) === false) {
    return false;
  }

  var number = Object(to_number_x_esm["a" /* default */])(string);

  if (arguments.length > 1) {
    return number < Object(math_clamp_x_esm["a" /* default */])(Object(to_integer_x_esm["a" /* default */])(length), MAX_SAFE_INTEGER);
  }

  return number < MAX_SAFE_INTEGER;
};

/* harmony default export */ var is_index_x_esm = (is_index_x_esm_isIndex);


// EXTERNAL MODULE: ./node_modules/property-is-enumerable-x/dist/property-is-enumerable-x.esm.js
var property_is_enumerable_x_esm = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
var to_boolean_x_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/object-get-own-property-descriptor-x/dist/object-get-own-property-descriptor-x.esm.js










var EMPTY_STRING = '';
var charAt = EMPTY_STRING.charAt;
var ObjectCtr = {}.constructor;
var ngopd = ObjectCtr.getOwnPropertyDescriptor;
var nativeGOPD = typeof ngopd === 'function' && ngopd;
var getOPDFallback1;
var getOPDFallback2; // ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

var object_get_own_property_descriptor_x_esm_doesGOPDWork = function doesGOPDWork(object, prop) {
  object[Object(to_property_key_x_esm["a" /* default */])(prop)] = 0;
  var testResult = Object(attempt_x_esm["a" /* default */])(nativeGOPD, object, prop);
  return testResult.threw === false && testResult.value.value === 0;
}; // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.

/**
 * This method returns a property descriptor for an own property (that is,
 * one directly present on an object and not in the object's prototype chain)
 * of a given object.
 *
 * @param {*} object - The object in which to look for the property.
 * @param {*} property - The name of the property whose description is to be retrieved.
 * @returns {object} A property descriptor of the given property if it exists on the object, undefined otherwise.
 */


var $getOwnPropertyDescriptor;

if (nativeGOPD) {
  var doc = typeof document !== 'undefined' && document;
  var getOPDWorksOnDom = doc ? object_get_own_property_descriptor_x_esm_doesGOPDWork(doc.createElement('div'), 'sentinel') : true;

  if (getOPDWorksOnDom) {
    var res = Object(attempt_x_esm["a" /* default */])(nativeGOPD, Object(to_object_x_esm["a" /* default */])('abc'), 1);
    var worksWithStr = res.threw === false && res.value && res.value.value === 'b';

    if (worksWithStr) {
      var getOPDWorksOnObject = object_get_own_property_descriptor_x_esm_doesGOPDWork({}, 'sentinel');

      if (getOPDWorksOnObject) {
        var worksWithPrim = Object(attempt_x_esm["a" /* default */])(nativeGOPD, 42, 'name').threw === false;
        /* eslint-disable-next-line compat/compat */

        var worksWithObjSym = has_symbol_support_x_esm["a" /* default */] && object_get_own_property_descriptor_x_esm_doesGOPDWork({}, Object(to_object_x_esm["a" /* default */])(Symbol(EMPTY_STRING)));

        if (worksWithObjSym) {
          if (worksWithPrim) {
            $getOwnPropertyDescriptor = nativeGOPD;
          } else {
            $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
              return nativeGOPD(Object(to_object_x_esm["a" /* default */])(object), property);
            };
          }
        } else if (worksWithPrim) {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(object, Object(to_property_key_x_esm["a" /* default */])(property));
          };
        } else {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(Object(to_object_x_esm["a" /* default */])(object), Object(to_property_key_x_esm["a" /* default */])(property));
          };
        }
      } else {
        getOPDFallback1 = nativeGOPD;
      }
    } else {
      getOPDFallback2 = nativeGOPD;
    }
  }
}

if (Object(to_boolean_x_esm["a" /* default */])($getOwnPropertyDescriptor) === false || getOPDFallback1 || getOPDFallback2) {
  var prototypeOfObject = ObjectCtr.prototype; // If JS engine supports accessors creating shortcuts.

  var lookupGetter;
  var lookupSetter;
  var supportsAccessors = Object(has_own_property_x_esm["a" /* default */])(prototypeOfObject, '__defineGetter__');

  if (supportsAccessors) {
    /* eslint-disable-next-line no-underscore-dangle */
    var lg = prototypeOfObject.__lookupGetter__;
    /* eslint-disable-next-line no-underscore-dangle */

    var ls = prototypeOfObject.__lookupSetter__;

    lookupGetter = function $lookupGetter(object, property) {
      return lg.call(object, property);
    };

    lookupSetter = function $lookupSetter(object, property) {
      return ls.call(object, property);
    };
  }

  $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
    var obj = Object(to_object_x_esm["a" /* default */])(object);
    var propKey = Object(to_property_key_x_esm["a" /* default */])(property);
    var result; // make a valiant attempt to use the real getOwnPropertyDescriptor for I8's DOM elements.

    if (getOPDFallback1) {
      result = attempt_x_esm["a" /* default */].call(to_object_x_esm["a" /* default */], getOPDFallback1, obj, propKey);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    }

    var isStringIndex = is_string_default()(obj) && is_index_x_esm(propKey, obj.length);

    if (getOPDFallback2 && isStringIndex === false) {
      result = attempt_x_esm["a" /* default */].call(to_object_x_esm["a" /* default */], getOPDFallback2, obj, propKey);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    }
    /* eslint-disable-next-line no-void */


    var descriptor = void 0; // If object does not owns property return undefined immediately.

    if (isStringIndex === false && Object(has_own_property_x_esm["a" /* default */])(obj, propKey) === false) {
      return descriptor;
    } // If object has a property then it's for sure `configurable`, and
    // probably `enumerable`. Detect enumerability though.


    descriptor = {
      configurable: is_primitive_default()(object) === false && isStringIndex === false,
      enumerable: Object(property_is_enumerable_x_esm["a" /* default */])(obj, propKey)
    }; // If JS engine supports accessor properties then property may be a
    // getter or setter.

    if (supportsAccessors) {
      // Unfortunately `__lookupGetter__` will return a getter even
      // if object has own non getter property along with a same named
      // inherited getter. To avoid misbehavior we temporary remove
      // `__proto__` so that `__lookupGetter__` will return getter only
      // if it's owned by an object.

      /* eslint-disable-next-line no-proto */
      var prototype = obj.__proto__;
      var notPrototypeOfObject = obj !== prototypeOfObject; // avoid recursion problem, breaking in Opera Mini when
      // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
      // or any other Object.prototype accessor

      if (notPrototypeOfObject) {
        /* eslint-disable-next-line no-proto */
        obj.__proto__ = prototypeOfObject;
      }

      var getter = lookupGetter(obj, propKey);
      var setter = lookupSetter(obj, propKey);

      if (notPrototypeOfObject) {
        // Once we have getter and setter we can put values back.

        /* eslint-disable-next-line no-proto */
        obj.__proto__ = prototype;
      }

      if (getter || setter) {
        if (getter) {
          descriptor.get = getter;
        }

        if (setter) {
          descriptor.set = setter;
        } // If it was accessor property we're done and return here
        // in order to avoid adding `value` to the descriptor.


        return descriptor;
      }
    } // If we got this far we know that object has an own property that is
    // not an accessor so we set it as a value and return descriptor.


    if (isStringIndex) {
      descriptor.value = charAt.call(obj, propKey);
      descriptor.writable = false;
    } else {
      descriptor.value = obj[propKey];
      descriptor.writable = true;
    }

    return descriptor;
  };
}

var gOPS = $getOwnPropertyDescriptor;
/* harmony default export */ var object_get_own_property_descriptor_x_esm = __webpack_exports__["a"] = (gOPS);



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js
var to_object_x_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/to-length-x/dist/to-length-x.esm.js
var to_length_x_esm = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js + 1 modules
var split_if_boxed_bug_x_esm = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js
var assert_is_function_x_esm = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/array-any-x/dist/array-any-x.esm.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var performCallback = function performCallback(args) {
  var _args = _slicedToArray(args, 6),
      noThis = _args[0],
      thisArg = _args[1],
      callBack = _args[2],
      iterable = _args[3],
      index = _args[4],
      object = _args[5];

  var item = iterable[index];
  return noThis ? callBack(item, index, object) : callBack.call(thisArg, item, index, object);
};

var array_any_x_esm_getIterableLengthPair = function getIterableLengthPair(object) {
  var iterable = Object(split_if_boxed_bug_x_esm["a" /* default */])(object);
  return [iterable, Object(to_length_x_esm["a" /* default */])(iterable.length)];
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method tests whether some element in the array passes the test
 * implemented by the provided function.
 *
 * @function any
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to test for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {boolean} `true` if the callback function returns a truthy value for
 *  any array element; otherwise, `false`.
 */
// eslint-enable jsdoc/check-param-names


var array_any_x_esm_any = function any(array, callBack
/* , thisArg */
) {
  var object = Object(to_object_x_esm["a" /* default */])(array); // If no callback function or if callback is not a callable function

  Object(assert_is_function_x_esm["a" /* default */])(callBack);

  var _getIterableLengthPai = array_any_x_esm_getIterableLengthPair(object),
      _getIterableLengthPai2 = _slicedToArray(_getIterableLengthPai, 2),
      iterable = _getIterableLengthPai2[0],
      length = _getIterableLengthPai2[1];
  /* eslint-disable-next-line prefer-rest-params,no-void */


  var thisArg = arguments.length > 2 ? arguments[2] : void 0;
  var noThis = typeof thisArg === 'undefined';

  if (length) {
    for (var index = 0; index < length; index += 1) {
      if (performCallback([noThis, thisArg, callBack, iterable, index, object])) {
        return true;
      }
    }
  }

  return false;
};

/* harmony default export */ var array_any_x_esm = (array_any_x_esm_any);


// CONCATENATED MODULE: ./node_modules/array-all-x/dist/array-all-x.esm.js
 // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method executes a provided function once for each array element.
 *
 * @function all
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 */
// eslint-enable jsdoc/check-param-names

var array_all_x_esm_all = function all(array, callBack
/* , thisArg */
) {
  var iteratee = function iteratee() {
    /* eslint-disable-next-line prefer-rest-params,babel/no-invalid-this */
    callBack.call(this, arguments[0], arguments[1], arguments[2]);
  };
  /* eslint-disable-next-line prefer-rest-params */


  array_any_x_esm(array, iteratee, arguments[2]);
};

/* harmony default export */ var array_all_x_esm = __webpack_exports__["a"] = (array_all_x_esm_all);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/trim-left-x/dist/trim-left-x.esm.js
var trim_left_x_esm = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js
var require_coercible_to_string_x_esm = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/white-space-x/dist/white-space-x.esm.js
var white_space_x_esm = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/trim-right-x/dist/trim-right-x.esm.js


var EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reRight2018 = new RegExpCtr("[".concat(white_space_x_esm["a" /* default */], "]+$"));
var replace = EMPTY_STRING.replace;
/**
 * This method removes whitespace from the end of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

var trim_right_x_esm_trimEnd = function trimEnd(string) {
  return replace.call(Object(require_coercible_to_string_x_esm["a" /* default */])(string), reRight2018, EMPTY_STRING);
};

/* harmony default export */ var trim_right_x_esm = (trim_right_x_esm_trimEnd);


// CONCATENATED MODULE: ./node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the start and end of a string.
 * (ES2019).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

var trim_x_esm_trim = function trim(string) {
  return Object(trim_left_x_esm["a" /* default */])(trim_right_x_esm(string));
};

/* harmony default export */ var trim_x_esm = __webpack_exports__["a"] = (trim_x_esm_trim);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

/**
 * The species accessor property allows subclasses to override the default constructor for objects.
 *
 * Possible values are.
 *
 * Symbol.species
 * '@@species'.
 *
 * @type {symbol|string}
 */

var symbolSpecies = has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && Symbol.species || '@@species';
/* eslint-disable-line compat/compat */

/* harmony default export */ __webpack_exports__["a"] = (symbolSpecies);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implementation */
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var object_define_properties_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var to_boolean_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var ObjectCtr = {}.constructor;
var nCreate = ObjectCtr.create;
var nativeCreate = typeof nCreate === 'function' && nCreate;

var test1 = function test1() {
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeCreate, null);
  return res.threw === false && res.value && _typeof(res.value) === 'object';
};

var test2 = function test2() {
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeCreate, null); // noinspection LoopStatementThatDoesntLoopJS

  for (var _ in res.value)
  /* eslint-disable-line guard-for-in,no-restricted-syntax */
  {
    return false;
  }

  return true;
};

var test3 = function test3() {
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeCreate, null, {
    test: {
      value: true
    }
  });
  return res.threw === false && res.value && _typeof(res.value) === 'object' && res.value.test === true;
};

var getShapes = function getShapes() {
  // Shape - superclass
  var Shape = function Shape() {
    // noinspection JSUnusedGlobalSymbols
    this.x = 0; // noinspection JSUnusedGlobalSymbols

    this.y = 0;
  }; // superclass method


  Shape.prototype.move = function move(x, y) {
    // noinspection JSUnusedGlobalSymbols
    this.x += x; // noinspection JSUnusedGlobalSymbols

    this.y += y;
    return 'Shape moved.';
  }; // Rectangle - subclass


  var Rectangle = function Rectangle() {
    Shape.call(this); // call super constructor.
  };

  return {
    Shape: Shape,
    Rectangle: Rectangle
  };
};

var test4 = function test4() {
  var _getShapes = getShapes(),
      Shape = _getShapes.Shape;

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeCreate, Shape.prototype);
  return res.threw === false && res.value && _typeof(res.value) === 'object';
};

var test5 = function test5() {
  var _getShapes2 = getShapes(),
      Shape = _getShapes2.Shape,
      Rectangle = _getShapes2.Rectangle;

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeCreate, Shape.prototype); // subclass extends superclass

  Rectangle.prototype = res.value;
  Rectangle.prototype.constructor = Rectangle;
  var rect = new Rectangle();
  return rect instanceof Rectangle;
};

var test6 = function test6() {
  var _getShapes3 = getShapes(),
      Shape = _getShapes3.Shape,
      Rectangle = _getShapes3.Rectangle;

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeCreate, Shape.prototype); // subclass extends superclass

  Rectangle.prototype = res.value;
  Rectangle.prototype.constructor = Rectangle;
  var rect = new Rectangle();
  return rect instanceof Shape;
};

var test7 = function test7() {
  var _getShapes4 = getShapes(),
      Shape = _getShapes4.Shape,
      Rectangle = _getShapes4.Rectangle;

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeCreate, Shape.prototype); // subclass extends superclass

  Rectangle.prototype = res.value;
  Rectangle.prototype.constructor = Rectangle;
  var rect = new Rectangle();
  return rect.move(1, 1) === 'Shape moved.';
};

var isWorking = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(nativeCreate) && test1() && test2() && test3() && test4() && test5() && test6() && test7();
/**
 * This method method creates a new object with the specified prototype object and properties.
 *
 * @param {*} prototype - The object which should be the prototype of the newly-created object.
 * @param {*} [properties] - If specified and not undefined, an object whose enumerable own properties
 * (that is, those properties defined upon itself and not enumerable properties along its prototype chain)
 * specify property descriptors to be added to the newly-created object, with the corresponding property names.
 * @throws {TypeError} If the properties parameter isn't null or an object.
 * @returns {boolean} A new object with the specified prototype object and properties.
 */

var doc = typeof document !== 'undefined' && document;
var supportsProto = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
  __proto__: null
} instanceof ObjectCtr) === false; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346

var shouldUseActiveX = function shouldUseActiveX() {
  // return early if document.domain not set
  if (Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(doc.domain) === false) {
    return false;
  }

  var result = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function attemptee() {
    /* eslint-disable-next-line no-undef */
    return new ActiveXObject('htmlfile');
  });
  return result.threw === false && Boolean(result.value);
}; // This supports IE8 when document.domain is used
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346


var getEmptyViaActiveX = function getEmptyViaActiveX() {
  /* eslint-disable-next-line no-undef */
  var xDoc = new ActiveXObject('htmlfile');
  /* eslint-disable-next-line no-useless-escape,prettier/prettier */

  xDoc.write('<script><\/script>');
  xDoc.close(); // noinspection JSUnresolvedVariable

  var empty = xDoc.parentWindow.Object.prototype;
  xDoc = null;
  return empty;
}; // The original implementation using an iframe
// before the activex approach was added
// see https://github.com/es-shims/es5-shim/issues/150


var getEmptyViaIFrame = function getEmptyViaIFrame() {
  var iframe = doc.createElement('iframe');
  iframe.style.display = 'none';
  /* eslint-disable-next-line no-script-url */

  iframe.src = 'javascript:';
  var parent = doc.body || doc.documentElement;
  parent.appendChild(iframe);
  var empty = iframe.contentWindow.Object.prototype;
  parent.removeChild(iframe);
  iframe = null;
  return empty;
}; // the following produces false positives
// in Opera Mini => not a reliable check
// Object.prototype.__proto__ === null


var createEmptyProto = function createEmpty() {
  return {
    __proto__: null
  };
}; // In old IE __proto__ can't be used to manually set `null`, nor does
// any other method exist to make an object that inherits from nothing,
// aside from Object.prototype itself. Instead, create a new global
// object and *steal* its Object.prototype and strip it bare. This is
// used as the prototype to create nullary objects.


var createEmptyNoProto = function createEmpty() {
  // Determine which approach to use
  // see https://github.com/es-shims/es5-shim/issues/150
  var empty = shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();
  delete empty.constructor;
  delete empty.hasOwnProperty;
  delete empty.propertyIsEnumerable;
  delete empty.isPrototypeOf;
  delete empty.toLocaleString;
  delete empty.toString;
  delete empty.valueOf;
  /* eslint-disable-next-line lodash/prefer-noop */

  var E = function Empty() {};

  E.prototype = empty; // short-circuit future calls

  createEmptyNoProto = function createEmptyShortCircuit() {
    return new E();
  };

  return new E();
}; // Contributed by Brandon Benvie, October, 2012


var createEmpty = supportsProto || Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(doc) === false ? createEmptyProto : createEmptyNoProto;
var implementation = function create(prototype, properties) {
  var object;
  /* eslint-disable-next-line lodash/prefer-noop */

  var T = function Type() {}; // An empty constructor.


  if (prototype === null) {
    object = createEmpty();
  } else {
    if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(prototype)) {
      // In the native implementation `parent` can be `null`
      // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
      // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
      // like they are in modern browsers. Using `Object.create` on DOM elements
      // is...err...probably inappropriate, but the native version allows for it.
      throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
    }

    T.prototype = prototype;
    object = new T(); // IE has no built-in implementation of `Object.getPrototypeOf`
    // neither `__proto__`, but this manually setting `__proto__` will
    // guarantee that `Object.getPrototypeOf` will work as expected with
    // objects created using `Object.create`

    /* eslint-disable-next-line no-proto */

    object.__proto__ = prototype;
  }

  if (typeof properties !== 'undefined') {
    Object(object_define_properties_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object, properties);
  }

  return object;
};
var $create = isWorking ? nativeCreate : implementation;
/* harmony default export */ __webpack_exports__["a"] = ($create);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/object-get-own-property-descriptor-x/dist/object-get-own-property-descriptor-x.esm.js + 1 modules
var object_get_own_property_descriptor_x_esm = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/object-define-property-x/dist/object-define-property-x.esm.js
var object_define_property_x_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js
var assert_is_function_x_esm = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/is-var-name/index.mjs
/*!
 * is-var-name | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-var-name
*/
function isVarName(str) {
	if (typeof str !== 'string') {
		return false;
	}

	if (str.trim() !== str) {
		return false;
	}

	try {
		new Function(str, 'var ' + str);
	} catch (e) {
		return false;
	}

	return true;
}

// EXTERNAL MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js
var to_string_x_esm = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
var to_boolean_x_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/rename-function-x/dist/rename-function-x.esm.js
/* unused harmony export supportsFunctionRenaming */








var rename_function_x_esm_rename = function rename(fn, name) {
  var descriptor = Object(object_get_own_property_descriptor_x_esm["a" /* default */])(fn, 'name');

  if (descriptor && descriptor.configurable) {
    Object(object_define_property_x_esm["a" /* default */])(fn, 'name', {
      configurable: true,
      value: name
    });
  }

  return fn.name;
};

var supportsFunctionRenaming = Object(attempt_x_esm["a" /* default */])(function attemptee() {
  /* eslint-disable-next-line lodash/prefer-noop */
  return rename_function_x_esm_rename(function test1() {}, 'test2');
}).value === 'test2'; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * Renames a function.
 *
 * @param {Function} fn - The function to be renamed.
 * @param {string} name - The new name for the function.
 * @param {boolean} [force=false] - Rename even if reported as not valid.
 * @returns {boolean} - Returns true if renaming was a success; otherwise false.
 */
// eslint-enable jsdoc/check-param-names

var rename_function_x_esm_renameFunction = function renameFunction(fn, name) {
  Object(assert_is_function_x_esm["a" /* default */])(fn);
  var string = Object(to_string_x_esm["a" /* default */])(name);
  /* eslint-disable-next-line prefer-rest-params */

  var force = arguments.length > 2 && Object(to_boolean_x_esm["a" /* default */])(arguments[2]);

  if (force === false && isVarName(string) === false) {
    throw new Error("Not a valid function name \"".concat(string, "\""));
  }

  return supportsFunctionRenaming && rename_function_x_esm_rename(fn, name) === string;
};

/* harmony default export */ var rename_function_x_esm = __webpack_exports__["a"] = (rename_function_x_esm_renameFunction);



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js
var assert_is_function_x_esm = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js
var to_object_x_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/is-arguments/index.js
var is_arguments = __webpack_require__(22);
var is_arguments_default = /*#__PURE__*/__webpack_require__.n(is_arguments);

// EXTERNAL MODULE: ./node_modules/is-array-x/dist/is-array-x.esm.js
var is_array_x_esm = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/array-like-slice-x/dist/array-like-slice-x.esm.js
var array_like_slice_x_esm = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(17);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// CONCATENATED MODULE: ./node_modules/array-slice-x/dist/array-slice-x.esm.js






var nativeSlice = [].slice;

var array_slice_x_esm_testArray = function testArray() {
  var res = attempt_x_esm["a" /* default */].call([1, 2, 3], nativeSlice, 1, 2);
  return res.threw || Object(is_array_x_esm["a" /* default */])(res.value) === false || res.value.length !== 1 || res.value[0] !== 2;
};

var array_slice_x_esm_testString = function testString() {
  var res = attempt_x_esm["a" /* default */].call('abc', nativeSlice, 1, 2);
  return res.threw || Object(is_array_x_esm["a" /* default */])(res.value) === false || res.value.length !== 1 || res.value[0] !== 'b';
};

var array_slice_x_esm_testDOM = function testDOM() {
  var doc = typeof document !== 'undefined' && document;
  var resultDocElement = doc ? attempt_x_esm["a" /* default */].call(doc.documentElement, nativeSlice).threw : false;
  return resultDocElement ? resultDocElement.threw : false;
};

var failArray = array_slice_x_esm_testArray();
var failString = array_slice_x_esm_testString();
var failDOM = array_slice_x_esm_testDOM();
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {Array|object} array - The array to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice(1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the
 *  sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */

var array_slice_x_esm_slice = function slice(array, start, end) {
  var object = Object(to_object_x_esm["a" /* default */])(array);

  if (failArray || failDOM && Object(is_array_x_esm["a" /* default */])(object) === false || failString && is_string_default()(object) || is_arguments_default()(object)) {
    return Object(array_like_slice_x_esm["a" /* default */])(object, start, end);
  }
  /* eslint-disable-next-line prefer-rest-params */


  return nativeSlice.apply(object, Object(array_like_slice_x_esm["a" /* default */])(arguments, 1));
};

/* harmony default export */ var array_slice_x_esm = (array_slice_x_esm_slice);


// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(3);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// CONCATENATED MODULE: ./node_modules/bind-x/dist/bind-x.esm.js
/* unused harmony export implementation */
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





var nb = assert_is_function_x_esm["a" /* default */].bind;
var nativeBind = typeof nb === 'function' && nb;
var isWorking;

if (nativeBind) {
  /* eslint-disable-next-line no-void */
  var gra = void 0;
  /* eslint-disable-next-line no-void */

  var context = void 0;
  /* eslint-disable-next-line no-unused-vars */

  var fn = function fn(arg1, arg2) {
    /* eslint-disable-next-line babel/no-invalid-this */
    context = this;
    gra = arg1;
    /* eslint-disable-next-line prefer-rest-params */

    return arguments;
  };

  var testThis = [];
  var bind_x_esm_res = attempt_x_esm["a" /* default */].call(fn, nativeBind, testThis, 1);
  isWorking = bind_x_esm_res.threw === false && typeof bind_x_esm_res.value === 'function';

  if (isWorking) {
    bind_x_esm_res = Object(attempt_x_esm["a" /* default */])(bind_x_esm_res.value, 2, 3);
    isWorking = bind_x_esm_res.threw === false && gra === 1 && context === testThis && bind_x_esm_res.value.length === 3;
  }

  if (isWorking) {
    var oracle = [1, 2, 3];

    var Ctr = function Ctr() {
      isWorking = this !== oracle;
      return oracle;
    };

    bind_x_esm_res = attempt_x_esm["a" /* default */].call(Ctr, nativeBind, null);
    isWorking = bind_x_esm_res.threw === false && typeof bind_x_esm_res.value === 'function';

    if (isWorking) {
      bind_x_esm_res = Object(attempt_x_esm["a" /* default */])(function () {
        _newArrowCheck(this, _this);

        /* eslint-disable-next-line babel/new-cap,new-cap */
        return new bind_x_esm_res.value();
      }.bind(undefined));

      if (isWorking) {
        isWorking = bind_x_esm_res.threw === false && bind_x_esm_res.value === oracle;
      }
    }
  }
}
/* eslint-disable-next-line no-unused-vars */


var patchedBind = function bind(target, thisArg) {
  /* eslint-disable-next-line prefer-rest-params */
  return nativeBind.apply(Object(assert_is_function_x_esm["a" /* default */])(target), array_slice_x_esm(arguments, 1));
};

var bind_x_esm_concat = function concat(a, b) {
  var aLength = a.length;
  var bLength = b.length;
  var result = array_slice_x_esm(a);
  result.length += bLength;

  for (var index = 0; index < bLength; index += 1) {
    result[aLength + index] = b[index];
  }

  return result;
};
/* eslint-disable-next-line lodash/prefer-noop */


var Empty = function Empty() {};

var implementation = function bind(target, thisArg) {
  Object(assert_is_function_x_esm["a" /* default */])(target);
  /* eslint-disable-next-line prefer-rest-params */

  var args = array_slice_x_esm(arguments, 2);
  var bound;

  var binder = function _binder() {
    /* eslint-disable-next-line babel/no-invalid-this */
    if (this instanceof bound) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      var result = target.apply(this, bind_x_esm_concat(args, arguments));
      /* eslint-disable-next-line babel/no-invalid-this */

      return is_primitive_default()(result) ? this : result;
    }
    /* eslint-disable-next-line prefer-rest-params */


    return target.apply(thisArg, bind_x_esm_concat(args, arguments));
  };

  var boundLength = target.length - args.length;

  if (boundLength < 0) {
    boundLength = 0;
  }

  var lastIndex = boundLength - 1;
  var boundArgs = '';

  for (var index = 0; index < boundLength; index += 1) {
    boundArgs += "$_".concat(index, "_$").concat(index < lastIndex ? ',' : '');
  }
  /* eslint-disable-next-line no-new-func */


  bound = Function('binder', 'slice', "return function (".concat(boundArgs, "){ return binder.apply(this,slice(arguments)); }"))(binder, array_slice_x_esm);

  if (target.prototype) {
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }

  return bound;
};
/**
 * The bind() method creates a new function that, when called, has its this
 * keyword set to the provided value, with a given sequence of arguments
 * preceding any provided when the new function is called.
 *
 * @param {Function} target - The target function.
 * @param {*} thisArg - The value to be passed as the this parameter to the target
 *  function when the bound function is called. The value is ignored if the
 *  bound function is constructed using the new operator.
 * @param {*} [args] - Arguments to prepend to arguments provided to the bouund
 *  function when invoking the target function.
 * @throws {TypeError} If target is not a function.
 * @returns {Function} The bound function.
 */

var $bind = isWorking ? patchedBind : implementation;
/* harmony default export */ var bind_x_esm = __webpack_exports__["a"] = ($bind);



/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export implementation */
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var is_nil_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var is_arguments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var is_arguments__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(is_arguments__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bind_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
/* harmony import */ var symbol_iterator_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var symbol_species_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38);
/* harmony import */ var to_boolean_x__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var object_create_x__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var object_define_properties_x__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
/* harmony import */ var array_for_each_x__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var object_keys_x__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5);
/* harmony import */ var assert_is_object_x__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
/* harmony import */ var rename_function_x__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















/* eslint-disable-next-line lodash/prefer-noop */

var noop = function noop() {};

var identity = function identity(x) {
  return x;
};

var thrower = function thrower(e) {
  throw e;
};

var NativePromise = typeof Promise === 'undefined' || is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(Promise) ? null : Promise;
var hasWindow = typeof window !== 'undefined' && is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(window) === false;
/* eslint-disable-next-line compat/compat */

var postMessage = hasWindow && Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(window.postMessage) ? window.postMessage : null;
var addEventListener = hasWindow && Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(window.addEventListener) ? window.addEventListener : null;
var nativeSetTimeout = typeof setTimeout === 'undefined' || is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(setTimeout) ? null : setTimeout;
var nativeSetImmediate = typeof setImmediate !== 'undefined' && Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(setImmediate) ? setImmediate : null;
var _ref = [],
    push = _ref.push,
    shift = _ref.shift;
/* eslint-disable-next-line no-void */

var UNDEFINED = void 0;
var PRIVATE_PROMISE = '[[promise]]';
var $apply = Object(bind_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Function.call, Function.apply);
var $call = Object(bind_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Function.call, Function.call);

var call = function call(F, V) {
  /* eslint-disable-next-line prefer-rest-params */
  return $apply(Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(F), V, arguments.length > 2 ? arguments[2] : []);
};

var getMethod = function getMethod(o, p) {
  var func = Object(to_object_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(o)[p];
  return Object(is_nil_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(func) ? UNDEFINED : Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(func);
};

var iteratorComplete = function iteratorComplete(iterResult) {
  return Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(iterResult.done);
};

var assertIteratorsReturn = function assertIteratorsReturn(innerResult) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(innerResult)) {
    throw new TypeError("Iterator's return method returned a non-object.");
  }

  return innerResult;
};

var iteratorClose = function iteratorClose(iterator, completionIsThrow) {
  var returnMethod = getMethod(iterator, 'return');

  if (typeof returnMethod === 'undefined' || completionIsThrow) {
    return;
  }

  var attemptResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(call, returnMethod, iterator);
  var innerException = attemptResult.threw ? attemptResult.value : UNDEFINED;

  if (innerException) {
    throw innerException;
  }

  assertIteratorsReturn(attemptResult.threw === false ? attemptResult.value : UNDEFINED);
};

var iteratorNext = function iteratorNext(it) {
  /* eslint-disable-next-line prefer-rest-params */
  var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();

  if (is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(result)) {
    throw new TypeError('bad iterator');
  }

  return result;
};

var iteratorStep = function iteratorStep(it) {
  var result = iteratorNext(it);
  return iteratorComplete(result) ? false : result;
}; // Given an argument x, it will return an IteratorResult object,
// with value set to x and done to false.
// Given no arguments, it will return an iterator completion object.


var iteratorResult = function iteratorResult(x) {
  return {
    value: x,
    done: arguments.length === 0
  };
}; // Our ArrayIterator is private; see
// https://github.com/paulmillr/es6-shim/issues/252


var ArrayIterator = function ArrayIterator(array, kind) {
  this.i = 0;
  this.array = array;
  this.kind = kind;
};

var getArrayIteratorValue = function getArrayIteratorValue(args) {
  var _args = _slicedToArray(args, 3),
      kind = _args[0],
      array = _args[1],
      i = _args[2];

  if (kind === 'key') {
    return i;
  }

  if (kind === 'value') {
    return array[i];
  }

  if (kind === 'entry') {
    return [i, array[i]];
  }

  return UNDEFINED;
};

var assertIsArrayIterator = function assertIsArrayIterator(context) {
  if (Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(context instanceof ArrayIterator) === false) {
    throw new TypeError('Not an ArrayIterator');
  }

  return context;
};

Object(object_define_properties_x__WEBPACK_IMPORTED_MODULE_11__[/* defineProperty */ "b"])(ArrayIterator.prototype, 'next', {
  configurable: true,
  value: function next() {
    var _assertIsArrayIterato = assertIsArrayIterator(this),
        array = _assertIsArrayIterato.array;

    if (typeof array !== 'undefined') {
      var len = Object(to_length_x__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(array.length);

      if (this.i < len) {
        var retval = getArrayIteratorValue([this.kind, array, this.i]);
        this.i += 1;
        return iteratorResult(retval);
      }
    }

    this.array = UNDEFINED;
    return iteratorResult();
  }
}); // addIterator(ArrayIterator.prototype);

var getIterator = function getIterator(o) {
  if (is_arguments__WEBPACK_IMPORTED_MODULE_4___default()(o)) {
    // special case support for `arguments`
    return new ArrayIterator(o, 'value');
  }

  var itFn = getMethod(o, symbol_iterator_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);

  if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(itFn) === false) {
    // Better diagnostics if itFn is null or undefined
    throw new TypeError('value is not an iterable');
  }

  var it = call(itFn, o);

  if (is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(it)) {
    throw new TypeError('bad iterator');
  }

  return it;
};

var assertRequiresNew = function assertRequiresNew(o, defaultNewTarget) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(o)) {
    throw new TypeError("Constructor requires \"new\": ".concat(defaultNewTarget.name));
  }
};

var emulateES6construct = function emulateES6construct(args) {
  var _args2 = _slicedToArray(args, 4),
      o = _args2[0],
      defaultNewTarget = _args2[1],
      defaultProto = _args2[2],
      slots = _args2[3]; // This is an es5 approximation to es6 construct semantics.  in es6,
  // 'new Foo' invokes Foo.[[Construct]] which (for almost all objects)
  // just sets the internal variable NewTarget (in es6 syntax `new.target`)
  // to Foo and then returns Foo().
  // Many ES6 object then have constructors of the form:
  // 1. If NewTarget is undefined, throw a TypeError exception
  // 2. Let xxx by OrdinaryCreateFromConstructor(NewTarget, yyy, zzz)
  // So we're going to emulate those first two steps.


  assertRequiresNew(o, defaultNewTarget);
  var proto = is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(defaultNewTarget.prototype) ? defaultProto : defaultNewTarget.prototype;
  var obj = Object(object_create_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(proto);
  Object(array_for_each_x__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Object(object_keys_x__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(slots), function iteratee(key) {
    Object(object_define_properties_x__WEBPACK_IMPORTED_MODULE_11__[/* defineProperty */ "b"])(obj, key, {
      configurable: true,
      value: slots[key],
      writable: true
    });
  });
  return obj;
};

var assertBadConstructor = function assertBadConstructor(C) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(C)) {
    throw new TypeError('Bad constructor');
  }

  return C;
};

var assertBadSpecies = function assertBadSpecies(S) {
  if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(S) === false) {
    throw new TypeError('Bad @@species');
  }

  return S;
};

var speciesConstructor = function speciesConstructor(O, defaultConstructor) {
  var C = O.constructor;

  if (typeof C === 'undefined') {
    return defaultConstructor;
  }

  var S = assertBadConstructor(C)[symbol_species_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]];

  if (Object(is_nil_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(S)) {
    return defaultConstructor;
  }

  return assertBadSpecies(S);
};

var isPromise = function isPromise(promise) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(promise)) {
    return false;
  }

  return typeof promise[PRIVATE_PROMISE] !== 'undefined';
};

var createSetZeroTimeout = function createSetZeroTimeout(timeouts, messageName) {
  return function setZeroTimeout(fn) {
    push.call(timeouts, fn);
    postMessage(messageName, '*');
  };
};

var MESSAGE_NAME = 'zero-timeout-message';

var makeZeroTimeoutFn = function makeZeroTimeoutFn() {
  // from http://dbaron.org/log/20100309-faster-timeouts
  var timeouts = [];

  var handleMessage = function handleMessage(event) {
    if (event.source === window && event.data === MESSAGE_NAME) {
      event.stopPropagation();

      if (timeouts.length === 0) {
        return;
      }

      shift.call(timeouts)();
    }
  };

  addEventListener('message', handleMessage, true);
  return createSetZeroTimeout(timeouts, MESSAGE_NAME);
}; // find an appropriate setImmediate-alike


var makeZeroTimeout = postMessage ? makeZeroTimeoutFn : UNDEFINED;

var makePromiseAsap = function makePromiseAsap() {
  // An efficient task-scheduler based on a pre-existing Promise
  // implementation, which we can use even if we override the
  // global Promise below (in order to workaround bugs)
  // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671
  var pr = NativePromise && NativePromise.resolve && NativePromise.resolve();

  if (pr) {
    return function then(task) {
      return pr.then(task);
    };
  }

  return UNDEFINED;
};

var nextTick = (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(process.nextTick) ? process.nextTick : null;

var getMakeZeroTimeout = function getMakeZeroTimeout() {
  if (makeZeroTimeout) {
    return makeZeroTimeout();
  } // fallback


  return function enqueue(task) {
    nativeSetTimeout(task, 0);
  };
};

var getEnqueue = function getEnqueue() {
  if (nativeSetImmediate) {
    return nativeSetImmediate;
  }

  if (nextTick) {
    return nextTick;
  }

  return makePromiseAsap() || getMakeZeroTimeout();
};

var assertBadPromiseCtr = function assertBadPromiseCtr(C) {
  if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(C) === false) {
    throw new TypeError('Bad promise constructor');
  }

  return C;
};

var assertBadPromiseImplementation = function assertBadPromiseImplementation(capability) {
  if (capability.resolve !== UNDEFINED || capability.reject !== UNDEFINED) {
    throw new TypeError('Bad Promise implementation!');
  }

  return capability;
};

var assertBadPromiseCtr2 = function assertBadPromiseCtr2(capability) {
  if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(capability.resolve) === false || Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(capability.reject) === false) {
    throw new TypeError('Bad promise constructor');
  }

  return capability;
}; // "PromiseCapability" in the spec is what most promise implementations call a "deferred".


var PromiseCapability = function PromiseCapability(C) {
  assertBadPromiseCtr(C);
  var capability = this;

  var resolver = function resolver(resolve, reject) {
    assertBadPromiseImplementation(capability);
    capability.resolve = resolve;
    capability.reject = reject;
  }; // Initialize fields to inform optimizers about the object shape.


  capability.resolve = UNDEFINED;
  capability.reject = UNDEFINED;
  capability.promise = new C(resolver);
  assertBadPromiseCtr2(capability);
};

var enqueue = getEnqueue(); // Constants for Promise implementation

var PROMISE_PENDING = 0;
var PROMISE_FULFILLED = 1;
var PROMISE_REJECTED = 2; // We store fulfill/reject handlers and capabilities in a single array.

var PROMISE_FULFILL_OFFSET = 0;
var PROMISE_REJECT_OFFSET = 1;
var PROMISE_CAPABILITY_OFFSET = 2; // This is used in an optimization for chaining promises via then.

var PROMISE_FAKE_CAPABILITY = {};

var promiseReactionJob = function promiseReactionJob(args) {
  var _args3 = _slicedToArray(args, 3),
      handler = _args3[0],
      promiseCapability = _args3[1],
      argument = _args3[2];

  if (promiseCapability === PROMISE_FAKE_CAPABILITY) {
    // Fast case, when we don't actually need to chain through to a (real) promiseCapability.
    return handler(argument);
  }

  var attemptResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(handler, argument);
  var f = attemptResult.threw ? promiseCapability.reject : promiseCapability.resolve;
  return f(attemptResult.value);
};

var enqueuePromiseReactionJob = function enqueuePromiseReactionJob(args) {
  var _args4 = _slicedToArray(args, 3),
      handler = _args4[0],
      capability = _args4[1],
      argument = _args4[2];

  enqueue(function enqueuee() {
    promiseReactionJob([handler, capability, argument]);
  });
};

var undefinePromise = function undefinePromise(promise, idx) {
  promise[idx + PROMISE_FULFILL_OFFSET] = UNDEFINED;
  promise[idx + PROMISE_REJECT_OFFSET] = UNDEFINED;
  promise[idx + PROMISE_CAPABILITY_OFFSET] = UNDEFINED;
};

var enqueueAndDefineFulfill = function enqueueAndDefineFulfill(args) {
  var _args5 = _slicedToArray(args, 4),
      length = _args5[0],
      privatePromise = _args5[1],
      value = _args5[2],
      promise = _args5[3];

  for (var i = 1, idx = 0; i < length; i += 1, idx += 3) {
    enqueuePromiseReactionJob([privatePromise[idx + PROMISE_FULFILL_OFFSET], privatePromise[idx + PROMISE_CAPABILITY_OFFSET], value]);
    undefinePromise(promise, idx);
  }
};

var enqueueAndDefineReject = function enqueueAndDefineReject(args) {
  var _args6 = _slicedToArray(args, 4),
      length = _args6[0],
      privatePromise = _args6[1],
      reason = _args6[2],
      promise = _args6[3];

  for (var i = 1, idx = 0; i < length; i += 1, idx += 3) {
    enqueuePromiseReactionJob([privatePromise[idx + PROMISE_REJECT_OFFSET], privatePromise[idx + PROMISE_CAPABILITY_OFFSET], reason]);
    undefinePromise(promise, idx);
  }
};

var undefineProps = function undefineProps(privatePromise) {
  privatePromise.fulfillReactionHandler0 = UNDEFINED;
  privatePromise.rejectReactions0 = UNDEFINED;
  privatePromise.reactionCapability0 = UNDEFINED;
};

var defineResultAndState = function defineResultAndState(args) {
  var _args7 = _slicedToArray(args, 3),
      privatePromise = _args7[0],
      value = _args7[1],
      state = _args7[2];

  privatePromise.result = value;
  privatePromise.state = state;
  privatePromise.reactionLength = 0;
};

var fulfillPromise = function fulfillPromise(promise, value) {
  var privatePromise = promise[PRIVATE_PROMISE];
  var length = privatePromise.reactionLength;

  if (length > 0) {
    enqueuePromiseReactionJob([privatePromise.fulfillReactionHandler0, privatePromise.reactionCapability0, value]);
    undefineProps(privatePromise);

    if (length > 1) {
      enqueueAndDefineFulfill([length, privatePromise, value, promise]);
    }
  }

  defineResultAndState([privatePromise, value, PROMISE_FULFILLED]);
};

var rejectPromise = function rejectPromise(promise, reason) {
  var privatePromise = promise[PRIVATE_PROMISE];
  var length = privatePromise.reactionLength;

  if (length > 0) {
    enqueuePromiseReactionJob([privatePromise.rejectReactionHandler0, privatePromise.reactionCapability0, reason]);
    undefineProps(privatePromise);

    if (length > 1) {
      enqueueAndDefineReject([length, privatePromise, reason, promise]);
    }
  }

  defineResultAndState([privatePromise, reason, PROMISE_REJECTED]);
};

var promiseResolveThenableJob;

var createResolvingFunctions = function createResolvingFunctions(promise) {
  var alreadyResolved = false;

  var resolve = function resolve(resolution) {
    if (alreadyResolved) {
      return UNDEFINED;
    }

    alreadyResolved = true;

    if (resolution === promise) {
      return rejectPromise(promise, new TypeError('Self resolution'));
    }

    if (is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(resolution)) {
      return fulfillPromise(promise, resolution);
    }

    var attemptResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(function attemptee() {
      return resolution.then;
    });

    if (attemptResult.threw) {
      return rejectPromise(promise, attemptResult.value);
    }

    var then = attemptResult.value;

    if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(then) === false) {
      return fulfillPromise(promise, resolution);
    }

    enqueue(function enqueuee() {
      promiseResolveThenableJob([promise, resolution, then]);
    });
    return UNDEFINED;
  };

  var reject = function reject(reason) {
    if (alreadyResolved) {
      return UNDEFINED;
    }

    alreadyResolved = true;
    return rejectPromise(promise, reason);
  };

  return {
    resolve: resolve,
    reject: reject
  };
};

var Promise$prototype$then;

var optimizedThen = function optimizedThen(args) {
  var _args8 = _slicedToArray(args, 4),
      then = _args8[0],
      thenable = _args8[1],
      resolve = _args8[2],
      reject = _args8[3]; // Optimization: since we discard the result, we can pass our
  // own then implementation a special hint to let it know it
  // doesn't have to create it.  (The PROMISE_FAKE_CAPABILITY
  // object is local to this implementation and unforgeable outside.)


  if (then === Promise$prototype$then) {
    $call(then, thenable, resolve, reject, PROMISE_FAKE_CAPABILITY);
  } else {
    $call(then, thenable, resolve, reject);
  }
};

promiseResolveThenableJob = function $promiseResolveThenableJob(args) {
  var _args9 = _slicedToArray(args, 3),
      promise = _args9[0],
      thenable = _args9[1],
      then = _args9[2];

  var _createResolvingFunct = createResolvingFunctions(promise),
      resolve = _createResolvingFunct.resolve,
      reject = _createResolvingFunct.reject;

  var attemptResults = Object(attempt_x__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(optimizedThen, [then, thenable, resolve, reject]);

  if (attemptResults.threw) {
    reject(attemptResults.value);
  }
};

var assertPromiseRequiresNew = function assertPromiseRequiresNew(context, Ctr) {
  if (Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(context instanceof Ctr) === false) {
    throw new TypeError('Constructor Promise requires "new"');
  }

  return context;
};

var assertBadConstruction = function assertBadConstruction(context) {
  if (context && context[PRIVATE_PROMISE]) {
    throw new TypeError('Bad construction');
  }

  return context;
}; // see https://bugs.ecmascript.org/show_bug.cgi?id=2482


var assertValidResolver = function assertValidResolver(resolver) {
  if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(resolver) === false) {
    throw new TypeError('not a valid resolver');
  }

  return resolver;
};

var getSlotsObject = function getSlotsObject() {
  return _defineProperty({}, PRIVATE_PROMISE, {
    result: UNDEFINED,
    state: PROMISE_PENDING,
    // The first member of the "reactions" array is inlined here,
    // since most promises only have one reaction.
    // We've also exploded the 'reaction' object to inline the
    // "handler" and "capability" fields, since both fulfill and
    // reject reactions share the same capability.
    reactionLength: 0,
    fulfillReactionHandler0: UNDEFINED,
    rejectReactionHandler0: UNDEFINED,
    reactionCapability0: UNDEFINED
  });
};

var Promise$prototype;

var $Promise = function Promise(resolver) {
  assertPromiseRequiresNew(this, $Promise);
  assertBadConstruction(this);
  assertValidResolver(resolver);
  var promise = emulateES6construct([this, $Promise, Promise$prototype, getSlotsObject()]);
  var resolvingFunctions = createResolvingFunctions(promise);
  var reject = resolvingFunctions.reject;
  var attemptResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(function attemptee() {
    resolver(resolvingFunctions.resolve, reject);
  });

  if (attemptResult.threw) {
    reject(attemptResult.value);
  }

  return promise;
};

Promise$prototype = $Promise.prototype;

var promiseAllResolver = function promiseAllResolver(args) {
  var _args10 = _slicedToArray(args, 4),
      index = _args10[0],
      values = _args10[1],
      capability = _args10[2],
      remaining = _args10[3];

  var alreadyCalled = false;
  return function allResolver(x) {
    if (alreadyCalled) {
      return;
    }

    alreadyCalled = true;
    values[index] = x;
    remaining.count -= 1;

    if (remaining.count === 0) {
      capability.resolve(values); // call w/ this===undefined
    }
  };
};

var performPromiseAll = function performPromiseAll(iteratorRecord, C, resultCapability) {
  var it = iteratorRecord.iterator;
  var values = [];
  var remaining = {
    count: 1
  };
  var next;
  var nextValue;
  var index = 0;

  while (true) {
    try {
      next = iteratorStep(it);

      if (next === false) {
        iteratorRecord.done = true;
        break;
      }

      nextValue = next.value;
    } catch (e) {
      iteratorRecord.done = true;
      throw e;
    }

    values[index] = UNDEFINED;
    var nextPromise = C.resolve(nextValue);
    var resolveElement = promiseAllResolver([index, values, resultCapability, remaining]);
    remaining.count += 1;
    optimizedThen([nextPromise.then, nextPromise, resolveElement, resultCapability.reject]);
    index += 1;
  }

  remaining.count -= 1;

  if (remaining.count === 0) {
    resultCapability.resolve(values); // call w/ this===undefined
  }

  return resultCapability.promise;
};

var assertPromiseIsObject = function assertPromiseIsObject(C) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(C)) {
    throw new TypeError('Promise is not object');
  }

  return C;
};

var assertBadConstructor3 = function assertBadConstructor3(C) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(C)) {
    throw new TypeError('Bad promise constructor');
  }

  return C;
};

var assertIsPromise = function assertIsPromise(promise) {
  if (isPromise(promise) === false) {
    throw new TypeError('not a promise');
  }

  return promise;
};

var performPromiseRace = function performPromiseRace(iteratorRecord, C, resultCapability) {
  var it = iteratorRecord.iterator;
  var next;
  var nextValue;
  var nextPromise;

  while (true) {
    try {
      next = iteratorStep(it);

      if (next === false) {
        // NOTE: If iterable has no items, resulting promise will never
        // resolve; see:
        // https://github.com/domenic/promises-unwrapping/issues/75
        // https://bugs.ecmascript.org/show_bug.cgi?id=2515
        iteratorRecord.done = true;
        break;
      }

      nextValue = next.value;
    } catch (e) {
      iteratorRecord.done = true;
      throw e;
    }

    nextPromise = C.resolve(nextValue);
    optimizedThen([nextPromise.then, nextPromise, resultCapability.resolve, resultCapability.reject]);
  }

  return resultCapability.promise;
};

var promiseResolve = function promiseResolve(C, value) {
  // See https://esdiscuss.org/topic/fixing-promise-resolve for spec
  assertBadConstructor3(C);

  if (isPromise(value) && value.constructor === C) {
    return value;
  }

  var promiseCapability = new PromiseCapability(C);
  promiseCapability.resolve(value);
  return promiseCapability.promise;
};

Object(object_define_properties_x__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])($Promise, _defineProperty({
  all: {
    configurable: true,
    value: function all(iterable) {
      var C = assertPromiseIsObject(this);
      var capability = new PromiseCapability(C);
      var iterator;
      var iteratorRecord;

      try {
        iterator = getIterator(iterable);
        iteratorRecord = {
          iterator: iterator,
          done: false
        };
        return performPromiseAll(iteratorRecord, C, capability);
      } catch (e) {
        var exception = e;

        if (iteratorRecord && Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(iteratorRecord.done) === false) {
          var attemptResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(iteratorClose, iterator, true);

          if (attemptResult.threw) {
            exception = attemptResult.value;
          }
        }

        capability.reject(exception);
        return capability.promise;
      }
    },
    writable: true
  },
  race: {
    configurable: true,
    value: function race(iterable) {
      var C = assertPromiseIsObject(this);
      var capability = new PromiseCapability(C);
      var iterator;
      var iteratorRecord;

      try {
        iterator = getIterator(iterable);
        iteratorRecord = {
          iterator: iterator,
          done: false
        };
        return performPromiseRace(iteratorRecord, C, capability);
      } catch (e) {
        var exception = e;

        if (iteratorRecord && !iteratorRecord.done) {
          var attemptResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(iteratorClose, iterator, true);

          if (attemptResult.threw) {
            exception = attemptResult.value;
          }
        }

        capability.reject(exception);
        return capability.promise;
      }
    },
    writable: true
  },
  reject: {
    configurable: true,
    value: function reject(reason) {
      var C = this;

      if (is_primitive__WEBPACK_IMPORTED_MODULE_0___default()(C)) {
        throw new TypeError('Bad promise constructor');
      }

      var capability = new PromiseCapability(C);
      capability.reject(reason); // call with this===undefined

      return capability.promise;
    },
    writable: true
  },
  resolve: {
    configurable: true,
    value: function resolve(value) {
      return promiseResolve(this, value);
    },
    writable: true
  }
}, symbol_species_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
  get: function get() {
    return this;
  }
}));

var createThenFinally = function CreateThenFinally(C, onFinally) {
  /* eslint-disable-next-line func-names */
  return function (value) {
    var result = onFinally();
    /* eslint-disable-next-line func-names */

    return promiseResolve(C, result).then(function () {
      return value;
    });
  };
};

var createCatchFinally = function CreateCatchFinally(C, onFinally) {
  /* eslint-disable-next-line func-names */
  return function (reason) {
    var result = onFinally();
    /* eslint-disable-next-line func-names */

    return promiseResolve(C, result).then(function () {
      throw reason;
    });
  };
};

Object(object_define_properties_x__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Promise$prototype, {
  catch: {
    configurable: true,
    value: function $catch(onRejected) {
      return this.then(null, onRejected);
    },
    writable: true
  },
  finally: {
    configurable: true,
    value: function $finally(onFinally) {
      var promise = Object(assert_is_object_x__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(this);
      var C = Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(speciesConstructor(promise, $Promise));
      var isCallable = Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(onFinally);
      var thenFinally = isCallable ? createThenFinally(C, onFinally) : onFinally;
      var catchFinally = isCallable ? createCatchFinally(C, onFinally) : onFinally;
      return promise.then(thenFinally, catchFinally);
    },
    writable: true
  },
  then: {
    configurable: true,
    value: function then(onFulfilled, onRejected) {
      var promise = assertIsPromise(this);
      var C = speciesConstructor(promise, $Promise);
      /* eslint-disable-next-line prefer-rest-params */

      var returnValueIsIgnored = arguments.length > 2 && arguments[2] === PROMISE_FAKE_CAPABILITY;
      var resultCapability = returnValueIsIgnored && C === $Promise ? PROMISE_FAKE_CAPABILITY : new PromiseCapability(C); // PerformPromiseThen(promise, onFulfilled, onRejected, resultCapability)
      // Note that we've split the 'reaction' object into its two
      // components, "capabilities" and "handler"
      // "capabilities" is always equal to `resultCapability`

      var fulfillReactionHandler = Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(onFulfilled) ? onFulfilled : identity;
      var rejectReactionHandler = Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(onRejected) ? onRejected : thrower;
      var privatePromise = promise[PRIVATE_PROMISE];

      if (privatePromise.state === PROMISE_PENDING) {
        if (privatePromise.reactionLength === 0) {
          privatePromise.fulfillReactionHandler0 = fulfillReactionHandler;
          privatePromise.rejectReactionHandler0 = rejectReactionHandler;
          privatePromise.reactionCapability0 = resultCapability;
        } else {
          var idx = 3 * (privatePromise.reactionLength - 1);
          privatePromise[idx + PROMISE_FULFILL_OFFSET] = fulfillReactionHandler;
          privatePromise[idx + PROMISE_REJECT_OFFSET] = rejectReactionHandler;
          privatePromise[idx + PROMISE_CAPABILITY_OFFSET] = resultCapability;
        }

        privatePromise.reactionLength += 1;
      } else if (privatePromise.state === PROMISE_FULFILLED) {
        enqueuePromiseReactionJob([fulfillReactionHandler, resultCapability, privatePromise.result]);
      } else if (privatePromise.state === PROMISE_REJECTED) {
        enqueuePromiseReactionJob([rejectReactionHandler, resultCapability, privatePromise.result]);
      } else {
        throw new TypeError('unexpected Promise state');
      }

      return resultCapability.promise;
    },
    writable: true
  }
});
Object(rename_function_x__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"])(Promise$prototype.catch, 'catch', true);
Object(rename_function_x__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"])(Promise$prototype.finally, 'finally', true); // This helps the optimizer by ensuring that methods which take capabilities aren't polymorphic.

PROMISE_FAKE_CAPABILITY = new PromiseCapability($Promise);
Promise$prototype$then = Promise$prototype.then;
var implementation = nativeSetTimeout === null ? UNDEFINED : $Promise;

var throwsError = function throwsError(func) {
  return Object(attempt_x__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(func).threw;
};
/* Tests */


var valueOrFalseIfThrows = function valueOrFalseIfThrows(func) {
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(func);
  return res.threw ? false : res.value;
};

var supportsSubclassing = function supportsSubclassing(C, f) {
  /* eslint-disable-next-line compat/compat */
  if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object.setPrototypeOf) === false) {
    return false;
    /* skip test on IE < 11 */
  }

  return valueOrFalseIfThrows(function throwee() {
    var Sub = function Subclass(arg) {
      var o = new C(arg);
      /* eslint-disable-next-line compat/compat */

      Object.setPrototypeOf(o, Subclass.prototype);
      return o;
    };
    /* eslint-disable-next-line compat/compat */


    Object.setPrototypeOf(Sub, C);
    Sub.prototype = Object(object_create_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(C.prototype, {
      constructor: {
        value: Sub
      }
    });
    return f(Sub);
  });
}; // In Chrome 33 (and thereabouts) Promise is defined, but the
// implementation is buggy in a number of ways.  Let's check subclassing
// support to see if we have a buggy implementation.


var testSupportsSubclassing = function testSupportsSubclassing() {
  return supportsSubclassing(NativePromise, function executee(S) {
    return S.resolve(42).then(function thenee() {
      return UNDEFINED;
    }) instanceof S;
  });
};

var testIgnoresNonFunctionThenCallbacks = function testIgnoresNonFunctionThenCallbacks() {
  return throwsError(function throwee() {
    return NativePromise.reject(42).then(null, 5).then(null, noop);
  }) === false;
};

var testRequiresObjectContext = function testRequiresObjectContext() {
  return throwsError(function throwee() {
    return NativePromise.call(3, noop);
  });
}; // Promise.resolve() was errata'ed late in the ES6 process.
// See: https://bugzilla.mozilla.org/show_bug.cgi?id=1170742
//      https://code.google.com/p/v8/issues/detail?id=4161
// It serves as a proxy for a number of other bugs in early Promise
// implementations.


var testPromiseResolve = function testPromiseResolve() {
  var p = NativePromise.resolve(5);
  p.constructor = {};
  var p2 = NativePromise.resolve(p);
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(function attemptee() {
    /* eslint-disable-next-line promise/catch-or-return */
    p2.then(null, noop).then(null, noop); // avoid "uncaught rejection" warnings in console
  }); // v8 native Promises break here https://code.google.com/p/chromium/issues/detail?id=575314

  if (res.threw) {
    return false;
  } // This *should* be true!


  return p !== p2;
};

var arePropertyDescriptorsSupported = function arePropertyDescriptorsSupported() {
  // if Object.defineProperty exists but throws, it's IE 8
  return throwsError(function throwee() {
    /* eslint-disable-next-line lodash/prefer-noop */
    return Object(object_define_properties_x__WEBPACK_IMPORTED_MODULE_11__[/* defineProperty */ "b"])({}, 'x', {
      get: function get() {}
    });
  }) === false;
}; // Chrome 46 (probably older too) does not retrieve a thenable's .then synchronously


var testThenSynchronicity = function testThenSynchronicity() {
  if (arePropertyDescriptorsSupported() === false) {
    return false;
  }

  var count = 0;
  var thenable = Object(object_define_properties_x__WEBPACK_IMPORTED_MODULE_11__[/* defineProperty */ "b"])({}, 'then', {
    get: function get() {
      count += 1;
    }
  });
  NativePromise.resolve(thenable);
  return count === 1;
};

var BadResolverPromise = function BadResolverPromise(executor) {
  var p = new NativePromise(executor);
  /* eslint-disable-next-line func-names,lodash/prefer-noop */

  executor(3, function () {});
  this.then = p.then;
  this.constructor = BadResolverPromise;
};

BadResolverPromise.prototype = NativePromise.prototype;
BadResolverPromise.all = NativePromise.all; // Chrome Canary 49 (probably older too) has some implementation bugs

var testBadResolverPromise = function testBadResolverPromise() {
  return valueOrFalseIfThrows(function throwee() {
    return Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(BadResolverPromise.all([1, 2]));
  }) === false;
};

var testWorkingFinally = function testWorkingFinally() {
  return Object(attempt_x__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(function attemptee() {
    /* eslint-disable-next-line promise/catch-or-return,promise/valid-params */
    new NativePromise(noop).finally();
  }).threw === false;
};

var isWorking = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(NativePromise) && testSupportsSubclassing() && testIgnoresNonFunctionThenCallbacks() && testRequiresObjectContext() && testPromiseResolve() && testThenSynchronicity() && testBadResolverPromise() && testWorkingFinally();
/* harmony default export */ __webpack_exports__["a"] = (isWorking ? NativePromise : implementation);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(51)))

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getSymbolIterator */
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var is_nil_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var ES6_SHIM_ITERATOR = '_es6-shim iterator_';
var AT_AT_ITERATOR = '@@iterator';
/* eslint-disable-next-line compat/compat */

var hasRealSymbolIterator = has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && _typeof(Symbol.iterator) === 'symbol';
/* eslint-disable-next-line compat/compat */

var hasFakeSymbolIterator = (typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) === 'object' && Symbol !== null && typeof Symbol.iterator === 'string';
var hasSymbolIterator = hasRealSymbolIterator || hasFakeSymbolIterator;

var getOtherSymbolIterator = function getOtherSymbolIterator(iterable) {
  if (iterable[ES6_SHIM_ITERATOR]) {
    return ES6_SHIM_ITERATOR;
  }

  if (iterable[AT_AT_ITERATOR]) {
    return AT_AT_ITERATOR;
  }

  return null;
};

var getSymIt = function getSymIt() {
  if (hasSymbolIterator) {
    /* eslint-disable-next-line compat/compat */
    return Symbol.iterator;
  }

  var result = getOtherSymbolIterator([]);

  if (typeof result === 'string' && typeof [][result] === 'function') {
    return result;
  }

  return AT_AT_ITERATOR;
};
/**
 * Whenever an object needs to be iterated (such as at the beginning of a for..of loop),
 * its @@iterator method is called with no arguments, and the returned iterator is used
 * to obtain the values to be iterated.
 *
 * Possible values are.
 *
 * Symbol.iterator
 * '_es6-shim iterator_'
 * '@@iterator'.
 *
 * @type {symbol|string}
 */


var $iterator$ = getSymIt();
/**
 * Detect an iterator function.
 *
 * @private
 * @param {*} iterable - Value to detect iterator function.
 * @returns {symbol|string|undefined} The iterator property identifier.
 */

var getSymbolIterator = function getSymbolIterator(iterable) {
  if (Object(is_nil_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(iterable) === false) {
    if (hasSymbolIterator && iterable[$iterator$]) {
      return $iterator$;
    }

    var result = getOtherSymbolIterator(iterable);

    if (typeof result === 'string') {
      return result;
    }
  }
  /* eslint-disable-next-line no-void */


  return void 0;
};
/* harmony default export */ __webpack_exports__["a"] = ($iterator$);



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(42);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(52);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var to_integer_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var math_clamp_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _xotic750_promise_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var object_define_property_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */






var MAX_SAFE_INTEGER = 9007199254740991;
var nativeSetTimeout = setTimeout;
var $Promise = _xotic750_promise_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];
/**
 * Create a delayed promise.
 *
 * @param {(number|string)} milliseconds - The number of milliseconds to delay by.
 * @param {*} [value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */

var delayPromise = function delayPromise(milliseconds, value) {
  var ms = Object(math_clamp_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(to_integer_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(milliseconds), MAX_SAFE_INTEGER);
  return arguments.length > 1 ? $Promise.resolve(value).then(function valueExecutor(arg) {
    /* eslint-disable-next-line promise/no-nesting */
    return delayPromise(ms).then(function returnArg() {
      return arg;
    });
  }) : new $Promise(function timeoutExecutor(resolve, reject) {
    var attemptResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(nativeSetTimeout, resolve, ms);
    /* istanbul ignore if */

    if (attemptResult.threw) {
      reject(attemptResult.value);
    }
  });
};

Object(object_define_property_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(delayPromise, 'Promise', {
  enumerable: true,
  get: function get() {
    return $Promise;
  },
  set: function set(value) {
    $Promise = Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(value);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (delayPromise);



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(50);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(42); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ })
/******/ ]);
});
//# sourceMappingURL=delay-promise-x.js.map