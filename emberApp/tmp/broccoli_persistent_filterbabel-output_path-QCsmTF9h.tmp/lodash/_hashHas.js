define('lodash/_hashHas', ['exports', 'lodash/_nativeCreate'], function (exports, _lodash_nativeCreate) {
  'use strict';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return _lodash_nativeCreate['default'] ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  exports['default'] = hashHas;
});