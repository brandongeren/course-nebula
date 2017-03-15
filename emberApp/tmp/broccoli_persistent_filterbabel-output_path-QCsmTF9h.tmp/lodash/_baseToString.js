define('lodash/_baseToString', ['exports', 'lodash/_Symbol', 'lodash/_arrayMap', 'lodash/isArray', 'lodash/isSymbol'], function (exports, _lodash_Symbol, _lodash_arrayMap, _lodashIsArray, _lodashIsSymbol) {
  'use strict';

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _lodash_Symbol['default'] ? _lodash_Symbol['default'].prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if ((0, _lodashIsArray['default'])(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return (0, _lodash_arrayMap['default'])(value, baseToString) + '';
    }
    if ((0, _lodashIsSymbol['default'])(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  exports['default'] = baseToString;
});