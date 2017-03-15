define('lodash/_baseInvoke', ['exports', 'lodash/_apply', 'lodash/_castPath', 'lodash/last', 'lodash/_parent', 'lodash/_toKey'], function (exports, _lodash_apply, _lodash_castPath, _lodashLast, _lodash_parent, _lodash_toKey) {
  'use strict';

  /**
   * The base implementation of `_.invoke` without support for individual
   * method arguments.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the method to invoke.
   * @param {Array} args The arguments to invoke the method with.
   * @returns {*} Returns the result of the invoked method.
   */
  function baseInvoke(object, path, args) {
    path = (0, _lodash_castPath['default'])(path, object);
    object = (0, _lodash_parent['default'])(object, path);
    var func = object == null ? object : object[(0, _lodash_toKey['default'])((0, _lodashLast['default'])(path))];
    return func == null ? undefined : (0, _lodash_apply['default'])(func, object, args);
  }

  exports['default'] = baseInvoke;
});