define('lodash/_mapCacheSet', ['exports', 'lodash/_getMapData'], function (exports, _lodash_getMapData) {
  'use strict';

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = (0, _lodash_getMapData['default'])(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  exports['default'] = mapCacheSet;
});