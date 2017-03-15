define('lodash/zipWith', ['exports', 'lodash/_baseRest', 'lodash/unzipWith'], function (exports, _lodash_baseRest, _lodashUnzipWith) {
  'use strict';

  /**
   * This method is like `_.zip` except that it accepts `iteratee` to specify
   * how grouped values should be combined. The iteratee is invoked with the
   * elements of each group: (...group).
   *
   * @static
   * @memberOf _
   * @since 3.8.0
   * @category Array
   * @param {...Array} [arrays] The arrays to process.
   * @param {Function} [iteratee=_.identity] The function to combine
   *  grouped values.
   * @returns {Array} Returns the new array of grouped elements.
   * @example
   *
   * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
   *   return a + b + c;
   * });
   * // => [111, 222]
   */
  var zipWith = (0, _lodash_baseRest['default'])(function (arrays) {
    var length = arrays.length,
        iteratee = length > 1 ? arrays[length - 1] : undefined;

    iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
    return (0, _lodashUnzipWith['default'])(arrays, iteratee);
  });

  exports['default'] = zipWith;
});