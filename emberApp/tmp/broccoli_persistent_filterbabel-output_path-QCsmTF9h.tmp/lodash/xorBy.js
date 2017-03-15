define('lodash/xorBy', ['exports', 'lodash/_arrayFilter', 'lodash/_baseIteratee', 'lodash/_baseRest', 'lodash/_baseXor', 'lodash/isArrayLikeObject', 'lodash/last'], function (exports, _lodash_arrayFilter, _lodash_baseIteratee, _lodash_baseRest, _lodash_baseXor, _lodashIsArrayLikeObject, _lodashLast) {
  'use strict';

  /**
   * This method is like `_.xor` except that it accepts `iteratee` which is
   * invoked for each element of each `arrays` to generate the criterion by
   * which by which they're compared. The order of result values is determined
   * by the order they occur in the arrays. The iteratee is invoked with one
   * argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
   * // => [1.2, 3.4]
   *
   * // The `_.property` iteratee shorthand.
   * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 2 }]
   */
  var xorBy = (0, _lodash_baseRest['default'])(function (arrays) {
    var iteratee = (0, _lodashLast['default'])(arrays);
    if ((0, _lodashIsArrayLikeObject['default'])(iteratee)) {
      iteratee = undefined;
    }
    return (0, _lodash_baseXor['default'])((0, _lodash_arrayFilter['default'])(arrays, _lodashIsArrayLikeObject['default']), (0, _lodash_baseIteratee['default'])(iteratee, 2));
  });

  exports['default'] = xorBy;
});