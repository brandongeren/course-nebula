define('lodash/_copySymbols', ['exports', 'lodash/_copyObject', 'lodash/_getSymbols'], function (exports, _lodash_copyObject, _lodash_getSymbols) {
  'use strict';

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return (0, _lodash_copyObject['default'])(source, (0, _lodash_getSymbols['default'])(source), object);
  }

  exports['default'] = copySymbols;
});