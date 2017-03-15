define('lodash/_stackSet', ['exports', 'lodash/_ListCache', 'lodash/_Map', 'lodash/_MapCache'], function (exports, _lodash_ListCache, _lodash_Map, _lodash_MapCache) {
  'use strict';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof _lodash_ListCache['default']) {
      var pairs = data.__data__;
      if (!_lodash_Map['default'] || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new _lodash_MapCache['default'](pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  exports['default'] = stackSet;
});