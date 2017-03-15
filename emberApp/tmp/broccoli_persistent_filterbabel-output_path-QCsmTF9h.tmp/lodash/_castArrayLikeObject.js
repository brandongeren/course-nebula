define('lodash/_castArrayLikeObject', ['exports', 'lodash/isArrayLikeObject'], function (exports, _lodashIsArrayLikeObject) {
  'use strict';

  /**
   * Casts `value` to an empty array if it's not an array like object.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array|Object} Returns the cast array-like object.
   */
  function castArrayLikeObject(value) {
    return (0, _lodashIsArrayLikeObject['default'])(value) ? value : [];
  }

  exports['default'] = castArrayLikeObject;
});