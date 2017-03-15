define('lodash/_Stack', ['exports', 'lodash/_ListCache', 'lodash/_stackClear', 'lodash/_stackDelete', 'lodash/_stackGet', 'lodash/_stackHas', 'lodash/_stackSet'], function (exports, _lodash_ListCache, _lodash_stackClear, _lodash_stackDelete, _lodash_stackGet, _lodash_stackHas, _lodash_stackSet) {
  'use strict';

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new _lodash_ListCache['default'](entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = _lodash_stackClear['default'];
  Stack.prototype['delete'] = _lodash_stackDelete['default'];
  Stack.prototype.get = _lodash_stackGet['default'];
  Stack.prototype.has = _lodash_stackHas['default'];
  Stack.prototype.set = _lodash_stackSet['default'];

  exports['default'] = Stack;
});