define('lodash/min', ['exports', 'lodash/_baseExtremum', 'lodash/_baseLt', 'lodash/identity'], function (exports, _lodash_baseExtremum, _lodash_baseLt, _lodashIdentity) {
  'use strict';

  /**
   * Computes the minimum value of `array`. If `array` is empty or falsey,
   * `undefined` is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the minimum value.
   * @example
   *
   * _.min([4, 2, 8, 6]);
   * // => 2
   *
   * _.min([]);
   * // => undefined
   */
  function min(array) {
    return array && array.length ? (0, _lodash_baseExtremum['default'])(array, _lodashIdentity['default'], _lodash_baseLt['default']) : undefined;
  }

  exports['default'] = min;
});