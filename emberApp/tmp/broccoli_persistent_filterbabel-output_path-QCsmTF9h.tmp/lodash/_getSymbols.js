define('lodash/_getSymbols', ['exports', 'lodash/_arrayFilter', 'lodash/stubArray'], function (exports, _lodash_arrayFilter, _lodashStubArray) {
  'use strict';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols ? _lodashStubArray['default'] : function (object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return (0, _lodash_arrayFilter['default'])(nativeGetSymbols(object), function (symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };

  exports['default'] = getSymbols;
});