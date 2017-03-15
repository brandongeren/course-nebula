define('lodash/_createPadding', ['exports', 'lodash/_baseRepeat', 'lodash/_baseToString', 'lodash/_castSlice', 'lodash/_hasUnicode', 'lodash/_stringSize', 'lodash/_stringToArray'], function (exports, _lodash_baseRepeat, _lodash_baseToString, _lodash_castSlice, _lodash_hasUnicode, _lodash_stringSize, _lodash_stringToArray) {
  'use strict';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil = Math.ceil;

  /**
   * Creates the padding for `string` based on `length`. The `chars` string
   * is truncated if the number of characters exceeds `length`.
   *
   * @private
   * @param {number} length The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padding for `string`.
   */
  function createPadding(length, chars) {
    chars = chars === undefined ? ' ' : (0, _lodash_baseToString['default'])(chars);

    var charsLength = chars.length;
    if (charsLength < 2) {
      return charsLength ? (0, _lodash_baseRepeat['default'])(chars, length) : chars;
    }
    var result = (0, _lodash_baseRepeat['default'])(chars, nativeCeil(length / (0, _lodash_stringSize['default'])(chars)));
    return (0, _lodash_hasUnicode['default'])(chars) ? (0, _lodash_castSlice['default'])((0, _lodash_stringToArray['default'])(result), 0, length).join('') : result.slice(0, length);
  }

  exports['default'] = createPadding;
});