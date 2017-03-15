define('lodash/_stringSize', ['exports', 'lodash/_asciiSize', 'lodash/_hasUnicode', 'lodash/_unicodeSize'], function (exports, _lodash_asciiSize, _lodash_hasUnicode, _lodash_unicodeSize) {
  'use strict';

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return (0, _lodash_hasUnicode['default'])(string) ? (0, _lodash_unicodeSize['default'])(string) : (0, _lodash_asciiSize['default'])(string);
  }

  exports['default'] = stringSize;
});