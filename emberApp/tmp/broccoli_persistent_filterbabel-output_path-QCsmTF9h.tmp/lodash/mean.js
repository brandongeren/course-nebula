define('lodash/mean', ['exports', 'lodash/_baseMean', 'lodash/identity'], function (exports, _lodash_baseMean, _lodashIdentity) {
  'use strict';

  /**
   * Computes the mean of the values in `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the mean.
   * @example
   *
   * _.mean([4, 2, 8, 6]);
   * // => 5
   */
  function mean(array) {
    return (0, _lodash_baseMean['default'])(array, _lodashIdentity['default']);
  }

  exports['default'] = mean;
});