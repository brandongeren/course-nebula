define('lodash/_baseIsMap', ['exports', 'lodash/_getTag', 'lodash/isObjectLike'], function (exports, _lodash_getTag, _lodashIsObjectLike) {
  'use strict';

  /** `Object#toString` result references. */
  var mapTag = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return (0, _lodashIsObjectLike['default'])(value) && (0, _lodash_getTag['default'])(value) == mapTag;
  }

  exports['default'] = baseIsMap;
});