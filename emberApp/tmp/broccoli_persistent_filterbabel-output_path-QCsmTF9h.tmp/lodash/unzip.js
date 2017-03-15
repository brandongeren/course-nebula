define('lodash/unzip', ['exports', 'lodash/_arrayFilter', 'lodash/_arrayMap', 'lodash/_baseProperty', 'lodash/_baseTimes', 'lodash/isArrayLikeObject'], function (exports, _lodash_arrayFilter, _lodash_arrayMap, _lodash_baseProperty, _lodash_baseTimes, _lodashIsArrayLikeObject) {
  'use strict';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * This method is like `_.zip` except that it accepts an array of grouped
   * elements and creates an array regrouping the elements to their pre-zip
   * configuration.
   *
   * @static
   * @memberOf _
   * @since 1.2.0
   * @category Array
   * @param {Array} array The array of grouped elements to process.
   * @returns {Array} Returns the new array of regrouped elements.
   * @example
   *
   * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
   * // => [['a', 1, true], ['b', 2, false]]
   *
   * _.unzip(zipped);
   * // => [['a', 'b'], [1, 2], [true, false]]
   */
  function unzip(array) {
    if (!(array && array.length)) {
      return [];
    }
    var length = 0;
    array = (0, _lodash_arrayFilter['default'])(array, function (group) {
      if ((0, _lodashIsArrayLikeObject['default'])(group)) {
        length = nativeMax(group.length, length);
        return true;
      }
    });
    return (0, _lodash_baseTimes['default'])(length, function (index) {
      return (0, _lodash_arrayMap['default'])(array, (0, _lodash_baseProperty['default'])(index));
    });
  }

  exports['default'] = unzip;
});