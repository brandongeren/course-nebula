define('lodash/_basePropertyDeep', ['exports', 'lodash/_baseGet'], function (exports, _lodash_baseGet) {
  'use strict';

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep(path) {
    return function (object) {
      return (0, _lodash_baseGet['default'])(object, path);
    };
  }

  exports['default'] = basePropertyDeep;
});