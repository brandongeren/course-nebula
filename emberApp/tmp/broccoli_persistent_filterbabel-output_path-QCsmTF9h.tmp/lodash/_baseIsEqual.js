define('lodash/_baseIsEqual', ['exports', 'lodash/_baseIsEqualDeep', 'lodash/isObjectLike'], function (exports, _lodash_baseIsEqualDeep, _lodashIsObjectLike) {
  'use strict';

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !(0, _lodashIsObjectLike['default'])(value) && !(0, _lodashIsObjectLike['default'])(other)) {
      return value !== value && other !== other;
    }
    return (0, _lodash_baseIsEqualDeep['default'])(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  exports['default'] = baseIsEqual;
});