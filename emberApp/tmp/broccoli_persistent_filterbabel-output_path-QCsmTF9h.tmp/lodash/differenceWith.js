define('lodash/differenceWith', ['exports', 'lodash/_baseDifference', 'lodash/_baseFlatten', 'lodash/_baseRest', 'lodash/isArrayLikeObject', 'lodash/last'], function (exports, _lodash_baseDifference, _lodash_baseFlatten, _lodash_baseRest, _lodashIsArrayLikeObject, _lodashLast) {
  'use strict';

  /**
   * This method is like `_.difference` except that it accepts `comparator`
   * which is invoked to compare elements of `array` to `values`. The order and
   * references of result values are determined by the first array. The comparator
   * is invoked with two arguments: (arrVal, othVal).
   *
   * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   *
   * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
   * // => [{ 'x': 2, 'y': 1 }]
   */
  var differenceWith = (0, _lodash_baseRest['default'])(function (array, values) {
    var comparator = (0, _lodashLast['default'])(values);
    if ((0, _lodashIsArrayLikeObject['default'])(comparator)) {
      comparator = undefined;
    }
    return (0, _lodashIsArrayLikeObject['default'])(array) ? (0, _lodash_baseDifference['default'])(array, (0, _lodash_baseFlatten['default'])(values, 1, _lodashIsArrayLikeObject['default'], true), undefined, comparator) : [];
  });

  exports['default'] = differenceWith;
});