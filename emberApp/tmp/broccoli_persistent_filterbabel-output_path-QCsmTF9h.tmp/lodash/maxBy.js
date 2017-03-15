define('lodash/maxBy', ['exports', 'lodash/_baseExtremum', 'lodash/_baseGt', 'lodash/_baseIteratee'], function (exports, _lodash_baseExtremum, _lodash_baseGt, _lodash_baseIteratee) {
  'use strict';

  /**
   * This method is like `_.max` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the criterion by which
   * the value is ranked. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * var objects = [{ 'n': 1 }, { 'n': 2 }];
   *
   * _.maxBy(objects, function(o) { return o.n; });
   * // => { 'n': 2 }
   *
   * // The `_.property` iteratee shorthand.
   * _.maxBy(objects, 'n');
   * // => { 'n': 2 }
   */
  function maxBy(array, iteratee) {
    return array && array.length ? (0, _lodash_baseExtremum['default'])(array, (0, _lodash_baseIteratee['default'])(iteratee, 2), _lodash_baseGt['default']) : undefined;
  }

  exports['default'] = maxBy;
});