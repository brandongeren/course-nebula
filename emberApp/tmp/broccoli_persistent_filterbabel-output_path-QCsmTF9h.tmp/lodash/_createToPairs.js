define('lodash/_createToPairs', ['exports', 'lodash/_baseToPairs', 'lodash/_getTag', 'lodash/_mapToArray', 'lodash/_setToPairs'], function (exports, _lodash_baseToPairs, _lodash_getTag, _lodash_mapToArray, _lodash_setToPairs) {
  'use strict';

  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
      setTag = '[object Set]';

  /**
   * Creates a `_.toPairs` or `_.toPairsIn` function.
   *
   * @private
   * @param {Function} keysFunc The function to get the keys of a given object.
   * @returns {Function} Returns the new pairs function.
   */
  function createToPairs(keysFunc) {
    return function (object) {
      var tag = (0, _lodash_getTag['default'])(object);
      if (tag == mapTag) {
        return (0, _lodash_mapToArray['default'])(object);
      }
      if (tag == setTag) {
        return (0, _lodash_setToPairs['default'])(object);
      }
      return (0, _lodash_baseToPairs['default'])(object, keysFunc(object));
    };
  }

  exports['default'] = createToPairs;
});