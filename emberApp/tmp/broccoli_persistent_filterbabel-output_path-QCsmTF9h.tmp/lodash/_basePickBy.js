define('lodash/_basePickBy', ['exports', 'lodash/_baseGet', 'lodash/_baseSet', 'lodash/_castPath'], function (exports, _lodash_baseGet, _lodash_baseSet, _lodash_castPath) {
  'use strict';

  /**
   * The base implementation of  `_.pickBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @param {Function} predicate The function invoked per property.
   * @returns {Object} Returns the new object.
   */
  function basePickBy(object, paths, predicate) {
    var index = -1,
        length = paths.length,
        result = {};

    while (++index < length) {
      var path = paths[index],
          value = (0, _lodash_baseGet['default'])(object, path);

      if (predicate(value, path)) {
        (0, _lodash_baseSet['default'])(result, (0, _lodash_castPath['default'])(path, object), value);
      }
    }
    return result;
  }

  exports['default'] = basePickBy;
});