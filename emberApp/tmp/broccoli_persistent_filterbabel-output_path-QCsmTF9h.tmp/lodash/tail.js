define('lodash/tail', ['exports', 'lodash/_baseSlice'], function (exports, _lodash_baseSlice) {
  'use strict';

  /**
   * Gets all but the first element of `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.tail([1, 2, 3]);
   * // => [2, 3]
   */
  function tail(array) {
    var length = array == null ? 0 : array.length;
    return length ? (0, _lodash_baseSlice['default'])(array, 1, length) : [];
  }

  exports['default'] = tail;
});