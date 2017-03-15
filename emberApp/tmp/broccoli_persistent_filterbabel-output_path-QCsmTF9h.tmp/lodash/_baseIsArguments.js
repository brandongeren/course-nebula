define('lodash/_baseIsArguments', ['exports', 'lodash/_baseGetTag', 'lodash/isObjectLike'], function (exports, _lodash_baseGetTag, _lodashIsObjectLike) {
  'use strict';

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return (0, _lodashIsObjectLike['default'])(value) && (0, _lodash_baseGetTag['default'])(value) == argsTag;
  }

  exports['default'] = baseIsArguments;
});