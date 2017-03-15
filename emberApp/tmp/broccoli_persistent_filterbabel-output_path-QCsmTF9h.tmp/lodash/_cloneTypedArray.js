define('lodash/_cloneTypedArray', ['exports', 'lodash/_cloneArrayBuffer'], function (exports, _lodash_cloneArrayBuffer) {
  'use strict';

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? (0, _lodash_cloneArrayBuffer['default'])(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  exports['default'] = cloneTypedArray;
});