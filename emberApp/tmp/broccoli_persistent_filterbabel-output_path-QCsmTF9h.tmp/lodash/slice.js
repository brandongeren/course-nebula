define('lodash/slice', ['exports', 'lodash/_baseSlice', 'lodash/_isIterateeCall', 'lodash/toInteger'], function (exports, _lodash_baseSlice, _lodash_isIterateeCall, _lodashToInteger) {
  'use strict';

  /**
   * Creates a slice of `array` from `start` up to, but not including, `end`.
   *
   * **Note:** This method is used instead of
   * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
   * returned.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
  function slice(array, start, end) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    if (end && typeof end != 'number' && (0, _lodash_isIterateeCall['default'])(array, start, end)) {
      start = 0;
      end = length;
    } else {
      start = start == null ? 0 : (0, _lodashToInteger['default'])(start);
      end = end === undefined ? length : (0, _lodashToInteger['default'])(end);
    }
    return (0, _lodash_baseSlice['default'])(array, start, end);
  }

  exports['default'] = slice;
});