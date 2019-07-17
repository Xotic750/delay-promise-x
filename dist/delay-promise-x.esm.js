/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */
import constant from 'lodash/constant';
import toInteger from 'lodash/toInteger';
import clamp from 'lodash/clamp';
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Create a delayed promise.
 *
 * @param {(number|string)} milliseconds - The number of milliseconds to delay by.
 * @param {*} [value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */

var delayPromise = function delayPromise(milliseconds) {
  var ms = clamp(toInteger(milliseconds), MAX_SAFE_INTEGER);

  if (arguments.length <= 1 ? 0 : arguments.length - 1) {
    var valueExecutor = function valueExecutor(arg) {
      return delayPromise(ms).then(constant(arg));
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

export default delayPromise;

//# sourceMappingURL=delay-promise-x.esm.js.map