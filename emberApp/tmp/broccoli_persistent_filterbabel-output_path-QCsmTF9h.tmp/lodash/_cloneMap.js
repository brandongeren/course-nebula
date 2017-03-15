define('lodash/_cloneMap', ['exports', 'lodash/_addMapEntry', 'lodash/_arrayReduce', 'lodash/_mapToArray'], function (exports, _lodash_addMapEntry, _lodash_arrayReduce, _lodash_mapToArray) {
  'use strict';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1;

  /**
   * Creates a clone of `map`.
   *
   * @private
   * @param {Object} map The map to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned map.
   */
  function cloneMap(map, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc((0, _lodash_mapToArray['default'])(map), CLONE_DEEP_FLAG) : (0, _lodash_mapToArray['default'])(map);
    return (0, _lodash_arrayReduce['default'])(array, _lodash_addMapEntry['default'], new map.constructor());
  }

  exports['default'] = cloneMap;
});