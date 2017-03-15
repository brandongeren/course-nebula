define('lodash/_baseIntersection', ['exports', 'lodash/_SetCache', 'lodash/_arrayIncludes', 'lodash/_arrayIncludesWith', 'lodash/_arrayMap', 'lodash/_baseUnary', 'lodash/_cacheHas'], function (exports, _lodash_SetCache, _lodash_arrayIncludes, _lodash_arrayIncludesWith, _lodash_arrayMap, _lodash_baseUnary, _lodash_cacheHas) {
  'use strict';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin = Math.min;

  /**
   * The base implementation of methods like `_.intersection`, without support
   * for iteratee shorthands, that accepts an array of arrays to inspect.
   *
   * @private
   * @param {Array} arrays The arrays to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of shared values.
   */
  function baseIntersection(arrays, iteratee, comparator) {
    var includes = comparator ? _lodash_arrayIncludesWith['default'] : _lodash_arrayIncludes['default'],
        length = arrays[0].length,
        othLength = arrays.length,
        othIndex = othLength,
        caches = Array(othLength),
        maxLength = Infinity,
        result = [];

    while (othIndex--) {
      var array = arrays[othIndex];
      if (othIndex && iteratee) {
        array = (0, _lodash_arrayMap['default'])(array, (0, _lodash_baseUnary['default'])(iteratee));
      }
      maxLength = nativeMin(array.length, maxLength);
      caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new _lodash_SetCache['default'](othIndex && array) : undefined;
    }
    array = arrays[0];

    var index = -1,
        seen = caches[0];

    outer: while (++index < length && result.length < maxLength) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;

      value = comparator || value !== 0 ? value : 0;
      if (!(seen ? (0, _lodash_cacheHas['default'])(seen, computed) : includes(result, computed, comparator))) {
        othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if (!(cache ? (0, _lodash_cacheHas['default'])(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }

  exports['default'] = baseIntersection;
});