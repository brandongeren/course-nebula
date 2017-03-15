define('lodash/_baseUnset', ['exports', 'lodash/_castPath', 'lodash/last', 'lodash/_parent', 'lodash/_toKey'], function (exports, _lodash_castPath, _lodashLast, _lodash_parent, _lodash_toKey) {
  'use strict';

  /**
   * The base implementation of `_.unset`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The property path to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   */
  function baseUnset(object, path) {
    path = (0, _lodash_castPath['default'])(path, object);
    object = (0, _lodash_parent['default'])(object, path);
    return object == null || delete object[(0, _lodash_toKey['default'])((0, _lodashLast['default'])(path))];
  }

  exports['default'] = baseUnset;
});