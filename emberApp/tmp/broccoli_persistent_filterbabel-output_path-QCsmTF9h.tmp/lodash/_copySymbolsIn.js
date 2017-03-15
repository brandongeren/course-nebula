define('lodash/_copySymbolsIn', ['exports', 'lodash/_copyObject', 'lodash/_getSymbolsIn'], function (exports, _lodash_copyObject, _lodash_getSymbolsIn) {
  'use strict';

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return (0, _lodash_copyObject['default'])(source, (0, _lodash_getSymbolsIn['default'])(source), object);
  }

  exports['default'] = copySymbolsIn;
});