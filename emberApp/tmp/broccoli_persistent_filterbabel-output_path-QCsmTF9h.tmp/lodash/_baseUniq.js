define('lodash/_baseUniq', ['exports', 'lodash/_SetCache', 'lodash/_arrayIncludes', 'lodash/_arrayIncludesWith', 'lodash/_cacheHas', 'lodash/_createSet', 'lodash/_setToArray'], function (exports, _lodash_SetCache, _lodash_arrayIncludes, _lodash_arrayIncludesWith, _lodash_cacheHas, _lodash_createSet, _lodash_setToArray) {
  'use strict';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * The base implementation of `_.uniqBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
  function baseUniq(array, iteratee, comparator) {
    var index = -1,
        includes = _lodash_arrayIncludes['default'],
        length = array.length,
        isCommon = true,
        result = [],
        seen = result;

    if (comparator) {
      isCommon = false;
      includes = _lodash_arrayIncludesWith['default'];
    } else if (length >= LARGE_ARRAY_SIZE) {
      var set = iteratee ? null : (0, _lodash_createSet['default'])(array);
      if (set) {
        return (0, _lodash_setToArray['default'])(set);
      }
      isCommon = false;
      includes = _lodash_cacheHas['default'];
      seen = new _lodash_SetCache['default']();
    } else {
      seen = iteratee ? [] : result;
    }
    outer: while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;

      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }

  exports['default'] = baseUniq;
});