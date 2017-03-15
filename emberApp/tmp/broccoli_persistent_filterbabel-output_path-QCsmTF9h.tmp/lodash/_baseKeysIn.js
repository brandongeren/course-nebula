define('lodash/_baseKeysIn', ['exports', 'lodash/isObject', 'lodash/_isPrototype', 'lodash/_nativeKeysIn'], function (exports, _lodashIsObject, _lodash_isPrototype, _lodash_nativeKeysIn) {
  'use strict';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!(0, _lodashIsObject['default'])(object)) {
      return (0, _lodash_nativeKeysIn['default'])(object);
    }
    var isProto = (0, _lodash_isPrototype['default'])(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  exports['default'] = baseKeysIn;
});