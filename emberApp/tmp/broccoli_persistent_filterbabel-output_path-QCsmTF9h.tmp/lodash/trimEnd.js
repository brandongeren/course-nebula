define('lodash/trimEnd', ['exports', 'lodash/_baseToString', 'lodash/_castSlice', 'lodash/_charsEndIndex', 'lodash/_stringToArray', 'lodash/toString'], function (exports, _lodash_baseToString, _lodash_castSlice, _lodash_charsEndIndex, _lodash_stringToArray, _lodashToString) {
  'use strict';

  /** Used to match leading and trailing whitespace. */
  var reTrimEnd = /\s+$/;

  /**
   * Removes trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trimEnd('  abc  ');
   * // => '  abc'
   *
   * _.trimEnd('-_-abc-_-', '_-');
   * // => '-_-abc'
   */
  function trimEnd(string, chars, guard) {
    string = (0, _lodashToString['default'])(string);
    if (string && (guard || chars === undefined)) {
      return string.replace(reTrimEnd, '');
    }
    if (!string || !(chars = (0, _lodash_baseToString['default'])(chars))) {
      return string;
    }
    var strSymbols = (0, _lodash_stringToArray['default'])(string),
        end = (0, _lodash_charsEndIndex['default'])(strSymbols, (0, _lodash_stringToArray['default'])(chars)) + 1;

    return (0, _lodash_castSlice['default'])(strSymbols, 0, end).join('');
  }

  exports['default'] = trimEnd;
});