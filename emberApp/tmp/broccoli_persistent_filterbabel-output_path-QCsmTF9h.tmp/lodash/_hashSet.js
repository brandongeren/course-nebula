define('lodash/_hashSet', ['exports', 'lodash/_nativeCreate'], function (exports, _lodash_nativeCreate) {
  'use strict';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = _lodash_nativeCreate['default'] && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  exports['default'] = hashSet;
});