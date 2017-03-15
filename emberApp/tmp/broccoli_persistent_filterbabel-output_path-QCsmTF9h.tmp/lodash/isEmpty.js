define('lodash/isEmpty', ['exports', 'lodash/_baseKeys', 'lodash/_getTag', 'lodash/isArguments', 'lodash/isArray', 'lodash/isArrayLike', 'lodash/isBuffer', 'lodash/_isPrototype', 'lodash/isTypedArray'], function (exports, _lodash_baseKeys, _lodash_getTag, _lodashIsArguments, _lodashIsArray, _lodashIsArrayLike, _lodashIsBuffer, _lodash_isPrototype, _lodashIsTypedArray) {
  'use strict';

  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
      setTag = '[object Set]';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Checks if `value` is an empty object, collection, map, or set.
   *
   * Objects are considered empty if they have no own enumerable string keyed
   * properties.
   *
   * Array-like values such as `arguments` objects, arrays, buffers, strings, or
   * jQuery-like collections are considered empty if they have a `length` of `0`.
   * Similarly, maps and sets are considered empty if they have a `size` of `0`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    if ((0, _lodashIsArrayLike['default'])(value) && ((0, _lodashIsArray['default'])(value) || typeof value == 'string' || typeof value.splice == 'function' || (0, _lodashIsBuffer['default'])(value) || (0, _lodashIsTypedArray['default'])(value) || (0, _lodashIsArguments['default'])(value))) {
      return !value.length;
    }
    var tag = (0, _lodash_getTag['default'])(value);
    if (tag == mapTag || tag == setTag) {
      return !value.size;
    }
    if ((0, _lodash_isPrototype['default'])(value)) {
      return !(0, _lodash_baseKeys['default'])(value).length;
    }
    for (var key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  }

  exports['default'] = isEmpty;
});