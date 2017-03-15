define('lodash/_stringToArray', ['exports', 'lodash/_asciiToArray', 'lodash/_hasUnicode', 'lodash/_unicodeToArray'], function (exports, _lodash_asciiToArray, _lodash_hasUnicode, _lodash_unicodeToArray) {
  'use strict';

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return (0, _lodash_hasUnicode['default'])(string) ? (0, _lodash_unicodeToArray['default'])(string) : (0, _lodash_asciiToArray['default'])(string);
  }

  exports['default'] = stringToArray;
});