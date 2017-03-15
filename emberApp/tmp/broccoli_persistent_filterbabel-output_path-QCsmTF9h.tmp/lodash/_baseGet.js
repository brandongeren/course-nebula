define('lodash/_baseGet', ['exports', 'lodash/_castPath', 'lodash/_toKey'], function (exports, _lodash_castPath, _lodash_toKey) {
  'use strict';

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = (0, _lodash_castPath['default'])(path, object);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[(0, _lodash_toKey['default'])(path[index++])];
    }
    return index && index == length ? object : undefined;
  }

  exports['default'] = baseGet;
});