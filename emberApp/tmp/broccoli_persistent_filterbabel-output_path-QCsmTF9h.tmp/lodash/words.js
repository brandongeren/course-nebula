define('lodash/words', ['exports', 'lodash/_asciiWords', 'lodash/_hasUnicodeWord', 'lodash/toString', 'lodash/_unicodeWords'], function (exports, _lodash_asciiWords, _lodash_hasUnicodeWord, _lodashToString, _lodash_unicodeWords) {
  'use strict';

  /**
   * Splits `string` into an array of its words.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {RegExp|string} [pattern] The pattern to match words.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the words of `string`.
   * @example
   *
   * _.words('fred, barney, & pebbles');
   * // => ['fred', 'barney', 'pebbles']
   *
   * _.words('fred, barney, & pebbles', /[^, ]+/g);
   * // => ['fred', 'barney', '&', 'pebbles']
   */
  function words(string, pattern, guard) {
    string = (0, _lodashToString['default'])(string);
    pattern = guard ? undefined : pattern;

    if (pattern === undefined) {
      return (0, _lodash_hasUnicodeWord['default'])(string) ? (0, _lodash_unicodeWords['default'])(string) : (0, _lodash_asciiWords['default'])(string);
    }
    return string.match(pattern) || [];
  }

  exports['default'] = words;
});