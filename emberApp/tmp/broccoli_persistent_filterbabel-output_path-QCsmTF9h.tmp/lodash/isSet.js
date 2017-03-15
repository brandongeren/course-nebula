define('lodash/isSet', ['exports', 'lodash/_baseIsSet', 'lodash/_baseUnary', 'lodash/_nodeUtil'], function (exports, _lodash_baseIsSet, _lodash_baseUnary, _lodash_nodeUtil) {
  'use strict';

  /* Node helper references. */
  var nodeIsSet = _lodash_nodeUtil['default'] && _lodash_nodeUtil['default'].isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? (0, _lodash_baseUnary['default'])(nodeIsSet) : _lodash_baseIsSet['default'];

  exports['default'] = isSet;
});