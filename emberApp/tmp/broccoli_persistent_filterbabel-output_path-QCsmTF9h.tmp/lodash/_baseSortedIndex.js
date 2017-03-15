define('lodash/_baseSortedIndex', ['exports', 'lodash/_baseSortedIndexBy', 'lodash/identity', 'lodash/isSymbol'], function (exports, _lodash_baseSortedIndexBy, _lodashIdentity, _lodashIsSymbol) {
  'use strict';

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /**
   * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
   * performs a binary search of `array` to determine the index at which `value`
   * should be inserted into `array` in order to maintain its sort order.
   *
   * @private
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {boolean} [retHighest] Specify returning the highest qualified index.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   */
  function baseSortedIndex(array, value, retHighest) {
    var low = 0,
        high = array == null ? low : array.length;

    if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
      while (low < high) {
        var mid = low + high >>> 1,
            computed = array[mid];

        if (computed !== null && !(0, _lodashIsSymbol['default'])(computed) && (retHighest ? computed <= value : computed < value)) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return high;
    }
    return (0, _lodash_baseSortedIndexBy['default'])(array, value, _lodashIdentity['default'], retHighest);
  }

  exports['default'] = baseSortedIndex;
});