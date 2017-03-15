define('lodash/_baseSetToString', ['exports', 'lodash/constant', 'lodash/_defineProperty', 'lodash/identity'], function (exports, _lodashConstant, _lodash_defineProperty, _lodashIdentity) {
  'use strict';

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !_lodash_defineProperty['default'] ? _lodashIdentity['default'] : function (func, string) {
    return (0, _lodash_defineProperty['default'])(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': (0, _lodashConstant['default'])(string),
      'writable': true
    });
  };

  exports['default'] = baseSetToString;
});