define('lodash/_arraySampleSize', ['exports', 'lodash/_baseClamp', 'lodash/_copyArray', 'lodash/_shuffleSelf'], function (exports, _lodash_baseClamp, _lodash_copyArray, _lodash_shuffleSelf) {
  'use strict';

  /**
   * A specialized version of `_.sampleSize` for arrays.
   *
   * @private
   * @param {Array} array The array to sample.
   * @param {number} n The number of elements to sample.
   * @returns {Array} Returns the random elements.
   */
  function arraySampleSize(array, n) {
    return (0, _lodash_shuffleSelf['default'])((0, _lodash_copyArray['default'])(array), (0, _lodash_baseClamp['default'])(n, 0, array.length));
  }

  exports['default'] = arraySampleSize;
});