define('lodash/_Hash', ['exports', 'lodash/_hashClear', 'lodash/_hashDelete', 'lodash/_hashGet', 'lodash/_hashHas', 'lodash/_hashSet'], function (exports, _lodash_hashClear, _lodash_hashDelete, _lodash_hashGet, _lodash_hashHas, _lodash_hashSet) {
  'use strict';

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = _lodash_hashClear['default'];
  Hash.prototype['delete'] = _lodash_hashDelete['default'];
  Hash.prototype.get = _lodash_hashGet['default'];
  Hash.prototype.has = _lodash_hashHas['default'];
  Hash.prototype.set = _lodash_hashSet['default'];

  exports['default'] = Hash;
});