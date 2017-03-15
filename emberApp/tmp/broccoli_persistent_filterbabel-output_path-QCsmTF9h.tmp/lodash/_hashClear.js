define('lodash/_hashClear', ['exports', 'lodash/_nativeCreate'], function (exports, _lodash_nativeCreate) {
  'use strict';

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = _lodash_nativeCreate['default'] ? (0, _lodash_nativeCreate['default'])(null) : {};
    this.size = 0;
  }

  exports['default'] = hashClear;
});