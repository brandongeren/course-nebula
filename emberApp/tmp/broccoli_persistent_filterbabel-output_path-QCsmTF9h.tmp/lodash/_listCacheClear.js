define("lodash/_listCacheClear", ["exports"], function (exports) {
  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  "use strict";

  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  exports["default"] = listCacheClear;
});