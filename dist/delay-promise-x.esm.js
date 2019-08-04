/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */
import toInteger from 'to-integer-x';
import clamp from 'math-clamp-x';
import PromiseCtr from '@xotic750/promise-x';
import attempt from 'attempt-x';
import defineProperty from 'object-define-property-x';
import assertIsFunction from 'assert-is-function-x';
var MAX_SAFE_INTEGER = 9007199254740991;
var nativeSetTimeout = setTimeout;
var $Promise = PromiseCtr;
/**
 * Create a delayed promise.
 *
 * @param {(number|string)} milliseconds - The number of milliseconds to delay by.
 * @param {*} [value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */

var delayPromise = function delayPromise(milliseconds, value) {
  var ms = clamp(toInteger(milliseconds), MAX_SAFE_INTEGER);
  return arguments.length > 1 ? $Promise.resolve(value).then(function valueExecutor(arg) {
    /* eslint-disable-next-line promise/no-nesting */
    return delayPromise(ms).then(function returnArg() {
      return arg;
    });
  }) : new $Promise(function timeoutExecutor(resolve, reject) {
    var attemptResult = attempt(nativeSetTimeout, resolve, ms);
    /* istanbul ignore if */

    if (attemptResult.threw) {
      reject(attemptResult.value);
    }
  });
};

defineProperty(delayPromise, 'Promise', {
  enumerable: true,
  get: function get() {
    return $Promise;
  },
  set: function set(value) {
    $Promise = assertIsFunction(value);
  }
});
export default delayPromise;

//# sourceMappingURL=delay-promise-x.esm.js.map