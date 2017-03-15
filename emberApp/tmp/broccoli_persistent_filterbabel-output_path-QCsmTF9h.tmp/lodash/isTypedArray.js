define('lodash/isTypedArray', ['exports', 'lodash/_baseIsTypedArray', 'lodash/_baseUnary', 'lodash/_nodeUtil'], function (exports, _lodash_baseIsTypedArray, _lodash_baseUnary, _lodash_nodeUtil) {
  'use strict';

  /* Node helper references. */
  var nodeIsTypedArray = _lodash_nodeUtil['default'] && _lodash_nodeUtil['default'].isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? (0, _lodash_baseUnary['default'])(nodeIsTypedArray) : _lodash_baseIsTypedArray['default'];

  exports['default'] = isTypedArray;
});