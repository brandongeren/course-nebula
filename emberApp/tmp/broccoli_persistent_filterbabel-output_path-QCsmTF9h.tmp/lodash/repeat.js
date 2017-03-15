define('lodash/repeat', ['exports', 'lodash/_baseRepeat', 'lodash/_isIterateeCall', 'lodash/toInteger', 'lodash/toString'], function (exports, _lodash_baseRepeat, _lodash_isIterateeCall, _lodashToInteger, _lodashToString) {
  'use strict';

  /**
   * Repeats the given string `n` times.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to repeat.
   * @param {number} [n=1] The number of times to repeat the string.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the repeated string.
   * @example
   *
   * _.repeat('*', 3);
   * // => '***'
   *
   * _.repeat('abc', 2);
   * // => 'abcabc'
   *
   * _.repeat('abc', 0);
   * // => ''
   */
  function repeat(string, n, guard) {
    if (guard ? (0, _lodash_isIterateeCall['default'])(string, n, guard) : n === undefined) {
      n = 1;
    } else {
      n = (0, _lodashToInteger['default'])(n);
    }
    return (0, _lodash_baseRepeat['default'])((0, _lodashToString['default'])(string), n);
  }

  exports['default'] = repeat;
});