define('lodash/xorWith', ['exports', 'lodash/_arrayFilter', 'lodash/_baseRest', 'lodash/_baseXor', 'lodash/isArrayLikeObject', 'lodash/last'], function (exports, _lodash_arrayFilter, _lodash_baseRest, _lodash_baseXor, _lodashIsArrayLikeObject, _lodashLast) {
  'use strict';

  /**
   * This method is like `_.xor` except that it accepts `comparator` which is
   * invoked to compare elements of `arrays`. The order of result values is
   * determined by the order they occur in the arrays. The comparator is invoked
   * with two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
   *
   * _.xorWith(objects, others, _.isEqual);
   * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
   */
  var xorWith = (0, _lodash_baseRest['default'])(function (arrays) {
    var comparator = (0, _lodashLast['default'])(arrays);
    comparator = typeof comparator == 'function' ? comparator : undefined;
    return (0, _lodash_baseXor['default'])((0, _lodash_arrayFilter['default'])(arrays, _lodashIsArrayLikeObject['default']), undefined, comparator);
  });

  exports['default'] = xorWith;
});