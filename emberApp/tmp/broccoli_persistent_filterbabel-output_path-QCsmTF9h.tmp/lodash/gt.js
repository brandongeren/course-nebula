define('lodash/gt', ['exports', 'lodash/_baseGt', 'lodash/_createRelationalOperation'], function (exports, _lodash_baseGt, _lodash_createRelationalOperation) {
  'use strict';

  /**
   * Checks if `value` is greater than `other`.
   *
   * @static
   * @memberOf _
   * @since 3.9.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is greater than `other`,
   *  else `false`.
   * @see _.lt
   * @example
   *
   * _.gt(3, 1);
   * // => true
   *
   * _.gt(3, 3);
   * // => false
   *
   * _.gt(1, 3);
   * // => false
   */
  var gt = (0, _lodash_createRelationalOperation['default'])(_lodash_baseGt['default']);

  exports['default'] = gt;
});