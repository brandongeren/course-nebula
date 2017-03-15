define('lodash/intersectionWith', ['exports', 'lodash/_arrayMap', 'lodash/_baseIntersection', 'lodash/_baseRest', 'lodash/_castArrayLikeObject', 'lodash/last'], function (exports, _lodash_arrayMap, _lodash_baseIntersection, _lodash_baseRest, _lodash_castArrayLikeObject, _lodashLast) {
  'use strict';

  /**
   * This method is like `_.intersection` except that it accepts `comparator`
   * which is invoked to compare elements of `arrays`. The order and references
   * of result values are determined by the first array. The comparator is
   * invoked with two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of intersecting values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
   *
   * _.intersectionWith(objects, others, _.isEqual);
   * // => [{ 'x': 1, 'y': 2 }]
   */
  var intersectionWith = (0, _lodash_baseRest['default'])(function (arrays) {
    var comparator = (0, _lodashLast['default'])(arrays),
        mapped = (0, _lodash_arrayMap['default'])(arrays, _lodash_castArrayLikeObject['default']);

    comparator = typeof comparator == 'function' ? comparator : undefined;
    if (comparator) {
      mapped.pop();
    }
    return mapped.length && mapped[0] === arrays[0] ? (0, _lodash_baseIntersection['default'])(mapped, undefined, comparator) : [];
  });

  exports['default'] = intersectionWith;
});