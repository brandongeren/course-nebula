define('lodash/truncate', ['exports', 'lodash/_baseToString', 'lodash/_castSlice', 'lodash/_hasUnicode', 'lodash/isObject', 'lodash/isRegExp', 'lodash/_stringSize', 'lodash/_stringToArray', 'lodash/toInteger', 'lodash/toString'], function (exports, _lodash_baseToString, _lodash_castSlice, _lodash_hasUnicode, _lodashIsObject, _lodashIsRegExp, _lodash_stringSize, _lodash_stringToArray, _lodashToInteger, _lodashToString) {
  'use strict';

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /**
   * Truncates `string` if it's longer than the given maximum string length.
   * The last characters of the truncated string are replaced with the omission
   * string which defaults to "...".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to truncate.
   * @param {Object} [options={}] The options object.
   * @param {number} [options.length=30] The maximum string length.
   * @param {string} [options.omission='...'] The string to indicate text is omitted.
   * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
   * @returns {string} Returns the truncated string.
   * @example
   *
   * _.truncate('hi-diddly-ho there, neighborino');
   * // => 'hi-diddly-ho there, neighbo...'
   *
   * _.truncate('hi-diddly-ho there, neighborino', {
   *   'length': 24,
   *   'separator': ' '
   * });
   * // => 'hi-diddly-ho there,...'
   *
   * _.truncate('hi-diddly-ho there, neighborino', {
   *   'length': 24,
   *   'separator': /,? +/
   * });
   * // => 'hi-diddly-ho there...'
   *
   * _.truncate('hi-diddly-ho there, neighborino', {
   *   'omission': ' [...]'
   * });
   * // => 'hi-diddly-ho there, neig [...]'
   */
  function truncate(string, options) {
    var length = DEFAULT_TRUNC_LENGTH,
        omission = DEFAULT_TRUNC_OMISSION;

    if ((0, _lodashIsObject['default'])(options)) {
      var separator = 'separator' in options ? options.separator : separator;
      length = 'length' in options ? (0, _lodashToInteger['default'])(options.length) : length;
      omission = 'omission' in options ? (0, _lodash_baseToString['default'])(options.omission) : omission;
    }
    string = (0, _lodashToString['default'])(string);

    var strLength = string.length;
    if ((0, _lodash_hasUnicode['default'])(string)) {
      var strSymbols = (0, _lodash_stringToArray['default'])(string);
      strLength = strSymbols.length;
    }
    if (length >= strLength) {
      return string;
    }
    var end = length - (0, _lodash_stringSize['default'])(omission);
    if (end < 1) {
      return omission;
    }
    var result = strSymbols ? (0, _lodash_castSlice['default'])(strSymbols, 0, end).join('') : string.slice(0, end);

    if (separator === undefined) {
      return result + omission;
    }
    if (strSymbols) {
      end += result.length - end;
    }
    if ((0, _lodashIsRegExp['default'])(separator)) {
      if (string.slice(end).search(separator)) {
        var match,
            substring = result;

        if (!separator.global) {
          separator = RegExp(separator.source, (0, _lodashToString['default'])(reFlags.exec(separator)) + 'g');
        }
        separator.lastIndex = 0;
        while (match = separator.exec(substring)) {
          var newEnd = match.index;
        }
        result = result.slice(0, newEnd === undefined ? end : newEnd);
      }
    } else if (string.indexOf((0, _lodash_baseToString['default'])(separator), end) != end) {
      var index = result.lastIndexOf(separator);
      if (index > -1) {
        result = result.slice(0, index);
      }
    }
    return result + omission;
  }

  exports['default'] = truncate;
});