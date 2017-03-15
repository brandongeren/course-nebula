define('lodash/_cloneSymbol', ['exports', 'lodash/_Symbol'], function (exports, _lodash_Symbol) {
  'use strict';

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _lodash_Symbol['default'] ? _lodash_Symbol['default'].prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  exports['default'] = cloneSymbol;
});