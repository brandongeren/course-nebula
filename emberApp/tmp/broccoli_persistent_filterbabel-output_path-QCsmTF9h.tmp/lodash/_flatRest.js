define('lodash/_flatRest', ['exports', 'lodash/flatten', 'lodash/_overRest', 'lodash/_setToString'], function (exports, _lodashFlatten, _lodash_overRest, _lodash_setToString) {
  'use strict';

  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  function flatRest(func) {
    return (0, _lodash_setToString['default'])((0, _lodash_overRest['default'])(func, undefined, _lodashFlatten['default']), func + '');
  }

  exports['default'] = flatRest;
});