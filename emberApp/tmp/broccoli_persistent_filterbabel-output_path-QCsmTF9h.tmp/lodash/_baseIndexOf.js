define('lodash/_baseIndexOf', ['exports', 'lodash/_baseFindIndex', 'lodash/_baseIsNaN', 'lodash/_strictIndexOf'], function (exports, _lodash_baseFindIndex, _lodash_baseIsNaN, _lodash_strictIndexOf) {
  'use strict';

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value ? (0, _lodash_strictIndexOf['default'])(array, value, fromIndex) : (0, _lodash_baseFindIndex['default'])(array, _lodash_baseIsNaN['default'], fromIndex);
  }

  exports['default'] = baseIndexOf;
});