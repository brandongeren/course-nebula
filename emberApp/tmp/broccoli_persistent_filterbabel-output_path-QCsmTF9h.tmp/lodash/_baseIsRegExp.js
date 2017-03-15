define('lodash/_baseIsRegExp', ['exports', 'lodash/_baseGetTag', 'lodash/isObjectLike'], function (exports, _lodash_baseGetTag, _lodashIsObjectLike) {
  'use strict';

  /** `Object#toString` result references. */
  var regexpTag = '[object RegExp]';

  /**
   * The base implementation of `_.isRegExp` without Node optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   */
  function baseIsRegExp(value) {
    return (0, _lodashIsObjectLike['default'])(value) && (0, _lodash_baseGetTag['default'])(value) == regexpTag;
  }

  exports['default'] = baseIsRegExp;
});