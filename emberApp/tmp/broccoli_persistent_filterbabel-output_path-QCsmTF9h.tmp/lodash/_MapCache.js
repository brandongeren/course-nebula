define('lodash/_MapCache', ['exports', 'lodash/_mapCacheClear', 'lodash/_mapCacheDelete', 'lodash/_mapCacheGet', 'lodash/_mapCacheHas', 'lodash/_mapCacheSet'], function (exports, _lodash_mapCacheClear, _lodash_mapCacheDelete, _lodash_mapCacheGet, _lodash_mapCacheHas, _lodash_mapCacheSet) {
  'use strict';

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = _lodash_mapCacheClear['default'];
  MapCache.prototype['delete'] = _lodash_mapCacheDelete['default'];
  MapCache.prototype.get = _lodash_mapCacheGet['default'];
  MapCache.prototype.has = _lodash_mapCacheHas['default'];
  MapCache.prototype.set = _lodash_mapCacheSet['default'];

  exports['default'] = MapCache;
});