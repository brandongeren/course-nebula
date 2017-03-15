define('lodash/_setToString', ['exports', 'lodash/_baseSetToString', 'lodash/_shortOut'], function (exports, _lodash_baseSetToString, _lodash_shortOut) {
  'use strict';

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = (0, _lodash_shortOut['default'])(_lodash_baseSetToString['default']);

  exports['default'] = setToString;
});