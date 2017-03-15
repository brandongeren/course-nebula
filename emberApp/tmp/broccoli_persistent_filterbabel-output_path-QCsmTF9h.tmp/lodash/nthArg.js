define('lodash/nthArg', ['exports', 'lodash/_baseNth', 'lodash/_baseRest', 'lodash/toInteger'], function (exports, _lodash_baseNth, _lodash_baseRest, _lodashToInteger) {
  'use strict';

  /**
   * Creates a function that gets the argument at index `n`. If `n` is negative,
   * the nth argument from the end is returned.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {number} [n=0] The index of the argument to return.
   * @returns {Function} Returns the new pass-thru function.
   * @example
   *
   * var func = _.nthArg(1);
   * func('a', 'b', 'c', 'd');
   * // => 'b'
   *
   * var func = _.nthArg(-2);
   * func('a', 'b', 'c', 'd');
   * // => 'c'
   */
  function nthArg(n) {
    n = (0, _lodashToInteger['default'])(n);
    return (0, _lodash_baseRest['default'])(function (args) {
      return (0, _lodash_baseNth['default'])(args, n);
    });
  }

  exports['default'] = nthArg;
});