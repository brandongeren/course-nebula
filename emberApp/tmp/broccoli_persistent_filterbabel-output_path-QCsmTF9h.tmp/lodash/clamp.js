define('lodash/clamp', ['exports', 'lodash/_baseClamp', 'lodash/toNumber'], function (exports, _lodash_baseClamp, _lodashToNumber) {
  'use strict';

  /**
   * Clamps `number` within the inclusive `lower` and `upper` bounds.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Number
   * @param {number} number The number to clamp.
   * @param {number} [lower] The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the clamped number.
   * @example
   *
   * _.clamp(-10, -5, 5);
   * // => -5
   *
   * _.clamp(10, -5, 5);
   * // => 5
   */
  function clamp(number, lower, upper) {
    if (upper === undefined) {
      upper = lower;
      lower = undefined;
    }
    if (upper !== undefined) {
      upper = (0, _lodashToNumber['default'])(upper);
      upper = upper === upper ? upper : 0;
    }
    if (lower !== undefined) {
      lower = (0, _lodashToNumber['default'])(lower);
      lower = lower === lower ? lower : 0;
    }
    return (0, _lodash_baseClamp['default'])((0, _lodashToNumber['default'])(number), lower, upper);
  }

  exports['default'] = clamp;
});