define('lodash/_listCacheGet', ['exports', 'lodash/_assocIndexOf'], function (exports, _lodash_assocIndexOf) {
  'use strict';

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = (0, _lodash_assocIndexOf['default'])(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  exports['default'] = listCacheGet;
});