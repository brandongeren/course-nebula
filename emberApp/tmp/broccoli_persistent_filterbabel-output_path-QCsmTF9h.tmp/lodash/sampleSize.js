define('lodash/sampleSize', ['exports', 'lodash/_arraySampleSize', 'lodash/_baseSampleSize', 'lodash/isArray', 'lodash/_isIterateeCall', 'lodash/toInteger'], function (exports, _lodash_arraySampleSize, _lodash_baseSampleSize, _lodashIsArray, _lodash_isIterateeCall, _lodashToInteger) {
  'use strict';

  /**
   * Gets `n` random elements at unique keys from `collection` up to the
   * size of `collection`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to sample.
   * @param {number} [n=1] The number of elements to sample.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the random elements.
   * @example
   *
   * _.sampleSize([1, 2, 3], 2);
   * // => [3, 1]
   *
   * _.sampleSize([1, 2, 3], 4);
   * // => [2, 3, 1]
   */
  function sampleSize(collection, n, guard) {
    if (guard ? (0, _lodash_isIterateeCall['default'])(collection, n, guard) : n === undefined) {
      n = 1;
    } else {
      n = (0, _lodashToInteger['default'])(n);
    }
    var func = (0, _lodashIsArray['default'])(collection) ? _lodash_arraySampleSize['default'] : _lodash_baseSampleSize['default'];
    return func(collection, n);
  }

  exports['default'] = sampleSize;
});