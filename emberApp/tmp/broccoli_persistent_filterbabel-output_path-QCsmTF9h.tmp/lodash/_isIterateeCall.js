define('lodash/_isIterateeCall', ['exports', 'lodash/eq', 'lodash/isArrayLike', 'lodash/_isIndex', 'lodash/isObject'], function (exports, _lodashEq, _lodashIsArrayLike, _lodash_isIndex, _lodashIsObject) {
  'use strict';

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!(0, _lodashIsObject['default'])(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number' ? (0, _lodashIsArrayLike['default'])(object) && (0, _lodash_isIndex['default'])(index, object.length) : type == 'string' && index in object) {
      return (0, _lodashEq['default'])(object[index], value);
    }
    return false;
  }

  exports['default'] = isIterateeCall;
});