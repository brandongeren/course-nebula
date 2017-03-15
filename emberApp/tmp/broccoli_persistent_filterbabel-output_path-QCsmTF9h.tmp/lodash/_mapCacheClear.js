define('lodash/_mapCacheClear', ['exports', 'lodash/_Hash', 'lodash/_ListCache', 'lodash/_Map'], function (exports, _lodash_Hash, _lodash_ListCache, _lodash_Map) {
  'use strict';

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new _lodash_Hash['default'](),
      'map': new (_lodash_Map['default'] || _lodash_ListCache['default'])(),
      'string': new _lodash_Hash['default']()
    };
  }

  exports['default'] = mapCacheClear;
});