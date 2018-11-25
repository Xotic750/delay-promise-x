/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */

import constant from 'lodash/constant';
import toInteger from 'lodash/toInteger';
import clamp from 'lodash/clamp';

/**
 * Create a delayed promise.
 *
 * @param {(number|string)} milliseconds - The number of milliseconds to delay by.
 * @param {*} [value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */
export default function delayPromise(milliseconds, ...value) {
  const ms = clamp(toInteger(milliseconds), Number.MAX_SAFE_INTEGER);

  if (value.length) {
    const valueExecutor = function valueExecutor(arg) {
      return delayPromise(ms).then(constant(arg));
    };

    return Promise.resolve(value[0]).then(valueExecutor);
  }

  const timeoutExecutor = function timeoutExecutor(resolve, reject) {
    try {
      setTimeout(resolve, ms);
    } catch (error) {
      reject(error);
    }
  };

  return new Promise(timeoutExecutor);
}
