define('lodash/_baseIsArrayBuffer', ['exports', 'lodash/_baseGetTag', 'lodash/isObjectLike'], function (exports, _lodash_baseGetTag, _lodashIsObjectLike) {
  'use strict';

  var arrayBufferTag = '[object ArrayBuffer]';

  /**
   * The base implementation of `_.isArrayBuffer` without Node optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
   */
  function baseIsArrayBuffer(value) {
    return (0, _lodashIsObjectLike['default'])(value) && (0, _lodash_baseGetTag['default'])(value) == arrayBufferTag;
  }

  exports['default'] = baseIsArrayBuffer;
});