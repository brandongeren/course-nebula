define('lodash/uniqBy', ['exports', 'lodash/_baseIteratee', 'lodash/_baseUniq'], function (exports, _lodash_baseIteratee, _lodash_baseUniq) {
  'use strict';

  /**
   * This method is like `_.uniq` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the criterion by which
   * uniqueness is computed. The order of result values is determined by the
   * order they occur in the array. The iteratee is invoked with one argument:
   * (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
   * // => [2.1, 1.2]
   *
   * // The `_.property` iteratee shorthand.
   * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 1 }, { 'x': 2 }]
   */
  function uniqBy(array, iteratee) {
    return array && array.length ? (0, _lodash_baseUniq['default'])(array, (0, _lodash_baseIteratee['default'])(iteratee, 2)) : [];
  }

  exports['default'] = uniqBy;
});