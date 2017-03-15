define('lodash/_asciiToArray', ['exports'], function (exports) {
  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  'use strict';

  function asciiToArray(string) {
    return string.split('');
  }

  exports['default'] = asciiToArray;
});