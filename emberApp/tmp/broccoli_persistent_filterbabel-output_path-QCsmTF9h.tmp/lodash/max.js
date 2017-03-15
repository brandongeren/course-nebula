define('lodash/max', ['exports', 'lodash/_baseExtremum', 'lodash/_baseGt', 'lodash/identity'], function (exports, _lodash_baseExtremum, _lodash_baseGt, _lodashIdentity) {
  'use strict';

  /**
   * Computes the maximum value of `array`. If `array` is empty or falsey,
   * `undefined` is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * _.max([4, 2, 8, 6]);
   * // => 8
   *
   * _.max([]);
   * // => undefined
   */
  function max(array) {
    return array && array.length ? (0, _lodash_baseExtremum['default'])(array, _lodashIdentity['default'], _lodash_baseGt['default']) : undefined;
  }

  exports['default'] = max;
});