define('lodash/_ListCache', ['exports', 'lodash/_listCacheClear', 'lodash/_listCacheDelete', 'lodash/_listCacheGet', 'lodash/_listCacheHas', 'lodash/_listCacheSet'], function (exports, _lodash_listCacheClear, _lodash_listCacheDelete, _lodash_listCacheGet, _lodash_listCacheHas, _lodash_listCacheSet) {
  'use strict';

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = _lodash_listCacheClear['default'];
  ListCache.prototype['delete'] = _lodash_listCacheDelete['default'];
  ListCache.prototype.get = _lodash_listCacheGet['default'];
  ListCache.prototype.has = _lodash_listCacheHas['default'];
  ListCache.prototype.set = _lodash_listCacheSet['default'];

  exports['default'] = ListCache;
});