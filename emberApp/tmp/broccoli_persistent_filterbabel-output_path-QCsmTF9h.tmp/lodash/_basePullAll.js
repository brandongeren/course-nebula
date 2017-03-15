define('lodash/_basePullAll', ['exports', 'lodash/_arrayMap', 'lodash/_baseIndexOf', 'lodash/_baseIndexOfWith', 'lodash/_baseUnary', 'lodash/_copyArray'], function (exports, _lodash_arrayMap, _lodash_baseIndexOf, _lodash_baseIndexOfWith, _lodash_baseUnary, _lodash_copyArray) {
  'use strict';

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * The base implementation of `_.pullAllBy` without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns `array`.
   */
  function basePullAll(array, values, iteratee, comparator) {
    var indexOf = comparator ? _lodash_baseIndexOfWith['default'] : _lodash_baseIndexOf['default'],
        index = -1,
        length = values.length,
        seen = array;

    if (array === values) {
      values = (0, _lodash_copyArray['default'])(values);
    }
    if (iteratee) {
      seen = (0, _lodash_arrayMap['default'])(array, (0, _lodash_baseUnary['default'])(iteratee));
    }
    while (++index < length) {
      var fromIndex = 0,
          value = values[index],
          computed = iteratee ? iteratee(value) : value;

      while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
        if (seen !== array) {
          splice.call(seen, fromIndex, 1);
        }
        splice.call(array, fromIndex, 1);
      }
    }
    return array;
  }

  exports['default'] = basePullAll;
});