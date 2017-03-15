define('lodash/_baseSampleSize', ['exports', 'lodash/_baseClamp', 'lodash/_shuffleSelf', 'lodash/values'], function (exports, _lodash_baseClamp, _lodash_shuffleSelf, _lodashValues) {
  'use strict';

  /**
   * The base implementation of `_.sampleSize` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to sample.
   * @param {number} n The number of elements to sample.
   * @returns {Array} Returns the random elements.
   */
  function baseSampleSize(collection, n) {
    var array = (0, _lodashValues['default'])(collection);
    return (0, _lodash_shuffleSelf['default'])(array, (0, _lodash_baseClamp['default'])(n, 0, array.length));
  }

  exports['default'] = baseSampleSize;
});