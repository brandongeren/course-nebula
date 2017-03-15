define('lodash/toArray', ['exports', 'lodash/_Symbol', 'lodash/_copyArray', 'lodash/_getTag', 'lodash/isArrayLike', 'lodash/isString', 'lodash/_iteratorToArray', 'lodash/_mapToArray', 'lodash/_setToArray', 'lodash/_stringToArray', 'lodash/values'], function (exports, _lodash_Symbol, _lodash_copyArray, _lodash_getTag, _lodashIsArrayLike, _lodashIsString, _lodash_iteratorToArray, _lodash_mapToArray, _lodash_setToArray, _lodash_stringToArray, _lodashValues) {
  'use strict';

  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
      setTag = '[object Set]';

  /** Built-in value references. */
  var symIterator = _lodash_Symbol['default'] ? _lodash_Symbol['default'].iterator : undefined;

  /**
   * Converts `value` to an array.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Array} Returns the converted array.
   * @example
   *
   * _.toArray({ 'a': 1, 'b': 2 });
   * // => [1, 2]
   *
   * _.toArray('abc');
   * // => ['a', 'b', 'c']
   *
   * _.toArray(1);
   * // => []
   *
   * _.toArray(null);
   * // => []
   */
  function toArray(value) {
    if (!value) {
      return [];
    }
    if ((0, _lodashIsArrayLike['default'])(value)) {
      return (0, _lodashIsString['default'])(value) ? (0, _lodash_stringToArray['default'])(value) : (0, _lodash_copyArray['default'])(value);
    }
    if (symIterator && value[symIterator]) {
      return (0, _lodash_iteratorToArray['default'])(value[symIterator]());
    }
    var tag = (0, _lodash_getTag['default'])(value),
        func = tag == mapTag ? _lodash_mapToArray['default'] : tag == setTag ? _lodash_setToArray['default'] : _lodashValues['default'];

    return func(value);
  }

  exports['default'] = toArray;
});