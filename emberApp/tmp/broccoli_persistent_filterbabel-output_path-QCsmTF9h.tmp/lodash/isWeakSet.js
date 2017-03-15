define('lodash/isWeakSet', ['exports', 'lodash/_baseGetTag', 'lodash/isObjectLike'], function (exports, _lodash_baseGetTag, _lodashIsObjectLike) {
  'use strict';

  /** `Object#toString` result references. */
  var weakSetTag = '[object WeakSet]';

  /**
   * Checks if `value` is classified as a `WeakSet` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
   * @example
   *
   * _.isWeakSet(new WeakSet);
   * // => true
   *
   * _.isWeakSet(new Set);
   * // => false
   */
  function isWeakSet(value) {
    return (0, _lodashIsObjectLike['default'])(value) && (0, _lodash_baseGetTag['default'])(value) == weakSetTag;
  }

  exports['default'] = isWeakSet;
});