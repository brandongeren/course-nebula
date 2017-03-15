define('lodash/minBy', ['exports', 'lodash/_baseExtremum', 'lodash/_baseIteratee', 'lodash/_baseLt'], function (exports, _lodash_baseExtremum, _lodash_baseIteratee, _lodash_baseLt) {
  'use strict';

  /**
   * This method is like `_.min` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the criterion by which
   * the value is ranked. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {*} Returns the minimum value.
   * @example
   *
   * var objects = [{ 'n': 1 }, { 'n': 2 }];
   *
   * _.minBy(objects, function(o) { return o.n; });
   * // => { 'n': 1 }
   *
   * // The `_.property` iteratee shorthand.
   * _.minBy(objects, 'n');
   * // => { 'n': 1 }
   */
  function minBy(array, iteratee) {
    return array && array.length ? (0, _lodash_baseExtremum['default'])(array, (0, _lodash_baseIteratee['default'])(iteratee, 2), _lodash_baseLt['default']) : undefined;
  }

  exports['default'] = minBy;
});