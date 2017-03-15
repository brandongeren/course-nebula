define('lodash/isWeakMap', ['exports', 'lodash/_getTag', 'lodash/isObjectLike'], function (exports, _lodash_getTag, _lodashIsObjectLike) {
  'use strict';

  /** `Object#toString` result references. */
  var weakMapTag = '[object WeakMap]';

  /**
   * Checks if `value` is classified as a `WeakMap` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
   * @example
   *
   * _.isWeakMap(new WeakMap);
   * // => true
   *
   * _.isWeakMap(new Map);
   * // => false
   */
  function isWeakMap(value) {
    return (0, _lodashIsObjectLike['default'])(value) && (0, _lodash_getTag['default'])(value) == weakMapTag;
  }

  exports['default'] = isWeakMap;
});