define('lodash/_castPath', ['exports', 'lodash/isArray', 'lodash/_isKey', 'lodash/_stringToPath', 'lodash/toString'], function (exports, _lodashIsArray, _lodash_isKey, _lodash_stringToPath, _lodashToString) {
  'use strict';

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if ((0, _lodashIsArray['default'])(value)) {
      return value;
    }
    return (0, _lodash_isKey['default'])(value, object) ? [value] : (0, _lodash_stringToPath['default'])((0, _lodashToString['default'])(value));
  }

  exports['default'] = castPath;
});