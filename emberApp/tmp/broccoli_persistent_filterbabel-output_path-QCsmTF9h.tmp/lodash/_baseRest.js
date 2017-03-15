define('lodash/_baseRest', ['exports', 'lodash/identity', 'lodash/_overRest', 'lodash/_setToString'], function (exports, _lodashIdentity, _lodash_overRest, _lodash_setToString) {
  'use strict';

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return (0, _lodash_setToString['default'])((0, _lodash_overRest['default'])(func, start, _lodashIdentity['default']), func + '');
  }

  exports['default'] = baseRest;
});