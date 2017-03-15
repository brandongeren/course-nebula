define('lodash/omit', ['exports', 'lodash/_arrayMap', 'lodash/_baseClone', 'lodash/_baseUnset', 'lodash/_castPath', 'lodash/_copyObject', 'lodash/_customOmitClone', 'lodash/_flatRest', 'lodash/_getAllKeysIn'], function (exports, _lodash_arrayMap, _lodash_baseClone, _lodash_baseUnset, _lodash_castPath, _lodash_copyObject, _lodash_customOmitClone, _lodash_flatRest, _lodash_getAllKeysIn) {
  'use strict';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable property paths of `object` that are not omitted.
   *
   * **Note:** This method is considerably slower than `_.pick`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to omit.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omit(object, ['a', 'c']);
   * // => { 'b': '2' }
   */
  var omit = (0, _lodash_flatRest['default'])(function (object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = (0, _lodash_arrayMap['default'])(paths, function (path) {
      path = (0, _lodash_castPath['default'])(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    (0, _lodash_copyObject['default'])(object, (0, _lodash_getAllKeysIn['default'])(object), result);
    if (isDeep) {
      result = (0, _lodash_baseClone['default'])(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, _lodash_customOmitClone['default']);
    }
    var length = paths.length;
    while (length--) {
      (0, _lodash_baseUnset['default'])(result, paths[length]);
    }
    return result;
  });

  exports['default'] = omit;
});