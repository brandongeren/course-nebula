define('lodash/_mapCacheHas', ['exports', 'lodash/_getMapData'], function (exports, _lodash_getMapData) {
  'use strict';

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return (0, _lodash_getMapData['default'])(this, key).has(key);
  }

  exports['default'] = mapCacheHas;
});