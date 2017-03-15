define('lodash/_castFunction', ['exports', 'lodash/identity'], function (exports, _lodashIdentity) {
  'use strict';

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */
  function castFunction(value) {
    return typeof value == 'function' ? value : _lodashIdentity['default'];
  }

  exports['default'] = castFunction;
});