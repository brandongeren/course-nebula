define('lodash/capitalize', ['exports', 'lodash/toString', 'lodash/upperFirst'], function (exports, _lodashToString, _lodashUpperFirst) {
  'use strict';

  /**
   * Converts the first character of `string` to upper case and the remaining
   * to lower case.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to capitalize.
   * @returns {string} Returns the capitalized string.
   * @example
   *
   * _.capitalize('FRED');
   * // => 'Fred'
   */
  function capitalize(string) {
    return (0, _lodashUpperFirst['default'])((0, _lodashToString['default'])(string).toLowerCase());
  }

  exports['default'] = capitalize;
});