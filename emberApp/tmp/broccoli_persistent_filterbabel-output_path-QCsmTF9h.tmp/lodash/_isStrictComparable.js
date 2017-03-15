define('lodash/_isStrictComparable', ['exports', 'lodash/isObject'], function (exports, _lodashIsObject) {
  'use strict';

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable(value) {
    return value === value && !(0, _lodashIsObject['default'])(value);
  }

  exports['default'] = isStrictComparable;
});