define('lodash/isDate', ['exports', 'lodash/_baseIsDate', 'lodash/_baseUnary', 'lodash/_nodeUtil'], function (exports, _lodash_baseIsDate, _lodash_baseUnary, _lodash_nodeUtil) {
  'use strict';

  /* Node helper references. */
  var nodeIsDate = _lodash_nodeUtil['default'] && _lodash_nodeUtil['default'].isDate;

  /**
   * Checks if `value` is classified as a `Date` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   * @example
   *
   * _.isDate(new Date);
   * // => true
   *
   * _.isDate('Mon April 23 2012');
   * // => false
   */
  var isDate = nodeIsDate ? (0, _lodash_baseUnary['default'])(nodeIsDate) : _lodash_baseIsDate['default'];

  exports['default'] = isDate;
});