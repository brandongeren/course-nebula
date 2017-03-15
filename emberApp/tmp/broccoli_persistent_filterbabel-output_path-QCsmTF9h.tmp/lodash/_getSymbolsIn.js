define('lodash/_getSymbolsIn', ['exports', 'lodash/_arrayPush', 'lodash/_getPrototype', 'lodash/_getSymbols', 'lodash/stubArray'], function (exports, _lodash_arrayPush, _lodash_getPrototype, _lodash_getSymbols, _lodashStubArray) {
  'use strict';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols ? _lodashStubArray['default'] : function (object) {
    var result = [];
    while (object) {
      (0, _lodash_arrayPush['default'])(result, (0, _lodash_getSymbols['default'])(object));
      object = (0, _lodash_getPrototype['default'])(object);
    }
    return result;
  };

  exports['default'] = getSymbolsIn;
});