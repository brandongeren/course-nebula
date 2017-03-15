define('lodash/_createCaseFirst', ['exports', 'lodash/_castSlice', 'lodash/_hasUnicode', 'lodash/_stringToArray', 'lodash/toString'], function (exports, _lodash_castSlice, _lodash_hasUnicode, _lodash_stringToArray, _lodashToString) {
  'use strict';

  /**
   * Creates a function like `_.lowerFirst`.
   *
   * @private
   * @param {string} methodName The name of the `String` case method to use.
   * @returns {Function} Returns the new case function.
   */
  function createCaseFirst(methodName) {
    return function (string) {
      string = (0, _lodashToString['default'])(string);

      var strSymbols = (0, _lodash_hasUnicode['default'])(string) ? (0, _lodash_stringToArray['default'])(string) : undefined;

      var chr = strSymbols ? strSymbols[0] : string.charAt(0);

      var trailing = strSymbols ? (0, _lodash_castSlice['default'])(strSymbols, 1).join('') : string.slice(1);

      return chr[methodName]() + trailing;
    };
  }

  exports['default'] = createCaseFirst;
});