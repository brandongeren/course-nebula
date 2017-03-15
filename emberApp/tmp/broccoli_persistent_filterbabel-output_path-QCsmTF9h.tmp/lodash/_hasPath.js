define('lodash/_hasPath', ['exports', 'lodash/_castPath', 'lodash/isArguments', 'lodash/isArray', 'lodash/_isIndex', 'lodash/isLength', 'lodash/_toKey'], function (exports, _lodash_castPath, _lodashIsArguments, _lodashIsArray, _lodash_isIndex, _lodashIsLength, _lodash_toKey) {
  'use strict';

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath(object, path, hasFunc) {
    path = (0, _lodash_castPath['default'])(path, object);

    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
      var key = (0, _lodash_toKey['default'])(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && (0, _lodashIsLength['default'])(length) && (0, _lodash_isIndex['default'])(key, length) && ((0, _lodashIsArray['default'])(object) || (0, _lodashIsArguments['default'])(object));
  }

  exports['default'] = hasPath;
});