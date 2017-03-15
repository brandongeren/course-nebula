define('lodash/_isFlattenable', ['exports', 'lodash/_Symbol', 'lodash/isArguments', 'lodash/isArray'], function (exports, _lodash_Symbol, _lodashIsArguments, _lodashIsArray) {
  'use strict';

  /** Built-in value references. */
  var spreadableSymbol = _lodash_Symbol['default'] ? _lodash_Symbol['default'].isConcatSpreadable : undefined;

  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable(value) {
    return (0, _lodashIsArray['default'])(value) || (0, _lodashIsArguments['default'])(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }

  exports['default'] = isFlattenable;
});