define('lodash/padEnd', ['exports', 'lodash/_createPadding', 'lodash/_stringSize', 'lodash/toInteger', 'lodash/toString'], function (exports, _lodash_createPadding, _lodash_stringSize, _lodashToInteger, _lodashToString) {
  'use strict';

  /**
   * Pads `string` on the right side if it's shorter than `length`. Padding
   * characters are truncated if they exceed `length`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to pad.
   * @param {number} [length=0] The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padded string.
   * @example
   *
   * _.padEnd('abc', 6);
   * // => 'abc   '
   *
   * _.padEnd('abc', 6, '_-');
   * // => 'abc_-_'
   *
   * _.padEnd('abc', 3);
   * // => 'abc'
   */
  function padEnd(string, length, chars) {
    string = (0, _lodashToString['default'])(string);
    length = (0, _lodashToInteger['default'])(length);

    var strLength = length ? (0, _lodash_stringSize['default'])(string) : 0;
    return length && strLength < length ? string + (0, _lodash_createPadding['default'])(length - strLength, chars) : string;
  }

  exports['default'] = padEnd;
});