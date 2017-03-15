define('lodash/intersectionBy', ['exports', 'lodash/_arrayMap', 'lodash/_baseIntersection', 'lodash/_baseIteratee', 'lodash/_baseRest', 'lodash/_castArrayLikeObject', 'lodash/last'], function (exports, _lodash_arrayMap, _lodash_baseIntersection, _lodash_baseIteratee, _lodash_baseRest, _lodash_castArrayLikeObject, _lodashLast) {
  'use strict';

  /**
   * This method is like `_.intersection` except that it accepts `iteratee`
   * which is invoked for each element of each `arrays` to generate the criterion
   * by which they're compared. The order and references of result values are
   * determined by the first array. The iteratee is invoked with one argument:
   * (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of intersecting values.
   * @example
   *
   * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
   * // => [2.1]
   *
   * // The `_.property` iteratee shorthand.
   * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 1 }]
   */
  var intersectionBy = (0, _lodash_baseRest['default'])(function (arrays) {
    var iteratee = (0, _lodashLast['default'])(arrays),
        mapped = (0, _lodash_arrayMap['default'])(arrays, _lodash_castArrayLikeObject['default']);

    if (iteratee === (0, _lodashLast['default'])(mapped)) {
      iteratee = undefined;
    } else {
      mapped.pop();
    }
    return mapped.length && mapped[0] === arrays[0] ? (0, _lodash_baseIntersection['default'])(mapped, (0, _lodash_baseIteratee['default'])(iteratee, 2)) : [];
  });

  exports['default'] = intersectionBy;
});