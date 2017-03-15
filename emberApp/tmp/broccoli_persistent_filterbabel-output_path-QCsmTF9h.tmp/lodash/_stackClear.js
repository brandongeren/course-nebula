define('lodash/_stackClear', ['exports', 'lodash/_ListCache'], function (exports, _lodash_ListCache) {
  'use strict';

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new _lodash_ListCache['default']();
    this.size = 0;
  }

  exports['default'] = stackClear;
});