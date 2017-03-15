define('lodash/_SetCache', ['exports', 'lodash/_MapCache', 'lodash/_setCacheAdd', 'lodash/_setCacheHas'], function (exports, _lodash_MapCache, _lodash_setCacheAdd, _lodash_setCacheHas) {
  'use strict';

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new _lodash_MapCache['default']();
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = _lodash_setCacheAdd['default'];
  SetCache.prototype.has = _lodash_setCacheHas['default'];

  exports['default'] = SetCache;
});