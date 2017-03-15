define('lodash/_baseIsSet', ['exports', 'lodash/_getTag', 'lodash/isObjectLike'], function (exports, _lodash_getTag, _lodashIsObjectLike) {
  'use strict';

  /** `Object#toString` result references. */
  var setTag = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return (0, _lodashIsObjectLike['default'])(value) && (0, _lodash_getTag['default'])(value) == setTag;
  }

  exports['default'] = baseIsSet;
});