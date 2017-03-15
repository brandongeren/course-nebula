define('lodash/times', ['exports', 'lodash/_baseTimes', 'lodash/_castFunction', 'lodash/toInteger'], function (exports, _lodash_baseTimes, _lodash_castFunction, _lodashToInteger) {
  'use strict';

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin = Math.min;

  /**
   * Invokes the iteratee `n` times, returning an array of the results of
   * each invocation. The iteratee is invoked with one argument; (index).
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   * @example
   *
   * _.times(3, String);
   * // => ['0', '1', '2']
   *
   *  _.times(4, _.constant(0));
   * // => [0, 0, 0, 0]
   */
  function times(n, iteratee) {
    n = (0, _lodashToInteger['default'])(n);
    if (n < 1 || n > MAX_SAFE_INTEGER) {
      return [];
    }
    var index = MAX_ARRAY_LENGTH,
        length = nativeMin(n, MAX_ARRAY_LENGTH);

    iteratee = (0, _lodash_castFunction['default'])(iteratee);
    n -= MAX_ARRAY_LENGTH;

    var result = (0, _lodash_baseTimes['default'])(length, iteratee);
    while (++index < n) {
      iteratee(index);
    }
    return result;
  }

  exports['default'] = times;
});