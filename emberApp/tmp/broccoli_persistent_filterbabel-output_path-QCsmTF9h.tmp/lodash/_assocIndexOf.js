define('lodash/_assocIndexOf', ['exports', 'lodash/eq'], function (exports, _lodashEq) {
  'use strict';

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if ((0, _lodashEq['default'])(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  exports['default'] = assocIndexOf;
});