define('lodash/split', ['exports', 'lodash/_baseToString', 'lodash/_castSlice', 'lodash/_hasUnicode', 'lodash/_isIterateeCall', 'lodash/isRegExp', 'lodash/_stringToArray', 'lodash/toString'], function (exports, _lodash_baseToString, _lodash_castSlice, _lodash_hasUnicode, _lodash_isIterateeCall, _lodashIsRegExp, _lodash_stringToArray, _lodashToString) {
  'use strict';

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295;

  /**
   * Splits `string` by `separator`.
   *
   * **Note:** This method is based on
   * [`String#split`](https://mdn.io/String/split).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to split.
   * @param {RegExp|string} separator The separator pattern to split by.
   * @param {number} [limit] The length to truncate results to.
   * @returns {Array} Returns the string segments.
   * @example
   *
   * _.split('a-b-c', '-', 2);
   * // => ['a', 'b']
   */
  function split(string, separator, limit) {
    if (limit && typeof limit != 'number' && (0, _lodash_isIterateeCall['default'])(string, separator, limit)) {
      separator = limit = undefined;
    }
    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
    if (!limit) {
      return [];
    }
    string = (0, _lodashToString['default'])(string);
    if (string && (typeof separator == 'string' || separator != null && !(0, _lodashIsRegExp['default'])(separator))) {
      separator = (0, _lodash_baseToString['default'])(separator);
      if (!separator && (0, _lodash_hasUnicode['default'])(string)) {
        return (0, _lodash_castSlice['default'])((0, _lodash_stringToArray['default'])(string), 0, limit);
      }
    }
    return string.split(separator, limit);
  }

  exports['default'] = split;
});