/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2018-present",
  "date": "2019-07-31T22:12:11.904Z",
  "describe": "",
  "description": "Create a delayed promise.",
  "file": "delay-promise-x.js",
  "hash": "3bdc898d84bec7f33982",
  "license": "MIT",
  "version": "1.0.25"
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(4);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(5),
    toNumber = __webpack_require__(6);

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var lodash_constant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_constant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_toInteger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var lodash_toInteger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_toInteger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */



var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Create a delayed promise.
 *
 * @param {(number|string)} milliseconds - The number of milliseconds to delay by.
 * @param {*} [value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */

var delayPromise = function delayPromise(milliseconds) {
  var ms = lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default()(lodash_toInteger__WEBPACK_IMPORTED_MODULE_1___default()(milliseconds), MAX_SAFE_INTEGER);

  if (arguments.length <= 1 ? 0 : arguments.length - 1) {
    var valueExecutor = function valueExecutor(arg) {
      return delayPromise(ms).then(lodash_constant__WEBPACK_IMPORTED_MODULE_0___default()(arg));
    };
    /* eslint-disable-next-line compat/compat */


    return Promise.resolve(arguments.length <= 1 ? undefined : arguments[1]).then(valueExecutor);
  }

  var timeoutExecutor = function timeoutExecutor(resolve, reject) {
    try {
      setTimeout(resolve, ms);
    } catch (error) {
      reject(error);
    }
  };
  /* eslint-disable-next-line compat/compat */


  return new Promise(timeoutExecutor);
};

/* harmony default export */ __webpack_exports__["default"] = (delayPromise);



/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ })
/******/ ]);
});
//# sourceMappingURL=delay-promise-x.js.map