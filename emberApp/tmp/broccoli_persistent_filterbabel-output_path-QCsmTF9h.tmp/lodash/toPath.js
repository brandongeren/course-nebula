define('lodash/toPath', ['exports', 'lodash/_arrayMap', 'lodash/_copyArray', 'lodash/isArray', 'lodash/isSymbol', 'lodash/_stringToPath', 'lodash/_toKey', 'lodash/toString'], function (exports, _lodash_arrayMap, _lodash_copyArray, _lodashIsArray, _lodashIsSymbol, _lodash_stringToPath, _lodash_toKey, _lodashToString) {
  'use strict';

  /**
   * Converts `value` to a property path array.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {*} value The value to convert.
   * @returns {Array} Returns the new property path array.
   * @example
   *
   * _.toPath('a.b.c');
   * // => ['a', 'b', 'c']
   *
   * _.toPath('a[0].b.c');
   * // => ['a', '0', 'b', 'c']
   */
  function toPath(value) {
    if ((0, _lodashIsArray['default'])(value)) {
      return (0, _lodash_arrayMap['default'])(value, _lodash_toKey['default']);
    }
    return (0, _lodashIsSymbol['default'])(value) ? [value] : (0, _lodash_copyArray['default'])((0, _lodash_stringToPath['default'])((0, _lodashToString['default'])(value)));
  }

  exports['default'] = toPath;
});