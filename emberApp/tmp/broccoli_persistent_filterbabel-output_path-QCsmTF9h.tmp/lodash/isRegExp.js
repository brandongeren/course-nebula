define('lodash/isRegExp', ['exports', 'lodash/_baseIsRegExp', 'lodash/_baseUnary', 'lodash/_nodeUtil'], function (exports, _lodash_baseIsRegExp, _lodash_baseUnary, _lodash_nodeUtil) {
  'use strict';

  /* Node helper references. */
  var nodeIsRegExp = _lodash_nodeUtil['default'] && _lodash_nodeUtil['default'].isRegExp;

  /**
   * Checks if `value` is classified as a `RegExp` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   * @example
   *
   * _.isRegExp(/abc/);
   * // => true
   *
   * _.isRegExp('/abc/');
   * // => false
   */
  var isRegExp = nodeIsRegExp ? (0, _lodash_baseUnary['default'])(nodeIsRegExp) : _lodash_baseIsRegExp['default'];

  exports['default'] = isRegExp;
});