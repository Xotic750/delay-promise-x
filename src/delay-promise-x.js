/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */

import constant from 'lodash/constant';
import toInteger from 'lodash/toInteger';
import clamp from 'lodash/clamp';

const MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Create a delayed promise.
 *
 * @param {(number|string)} milliseconds - The number of milliseconds to delay by.
 * @param {*} [value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */
export default function delayPromise(milliseconds, ...value) {
  const ms = clamp(toInteger(milliseconds), MAX_SAFE_INTEGER);

  if (value.length) {
    const valueExecutor = function valueExecutor(arg) {
      return delayPromise(ms).then(constant(arg));
    };

    /* eslint-disable-next-line compat/compat */
    return Promise.resolve(value[0]).then(valueExecutor);
  }

  const timeoutExecutor = function timeoutExecutor(resolve, reject) {
    try {
      setTimeout(resolve, ms);
    } catch (error) {
      reject(error);
    }
  };

  /* eslint-disable-next-line compat/compat */
  return new Promise(timeoutExecutor);
}
