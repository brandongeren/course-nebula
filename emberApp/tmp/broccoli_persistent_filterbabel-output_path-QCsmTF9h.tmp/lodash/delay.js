define('lodash/delay', ['exports', 'lodash/_baseDelay', 'lodash/_baseRest', 'lodash/toNumber'], function (exports, _lodash_baseDelay, _lodash_baseRest, _lodashToNumber) {
  'use strict';

  /**
   * Invokes `func` after `wait` milliseconds. Any additional arguments are
   * provided to `func` when it's invoked.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to delay.
   * @param {number} wait The number of milliseconds to delay invocation.
   * @param {...*} [args] The arguments to invoke `func` with.
   * @returns {number} Returns the timer id.
   * @example
   *
   * _.delay(function(text) {
   *   console.log(text);
   * }, 1000, 'later');
   * // => Logs 'later' after one second.
   */
  var delay = (0, _lodash_baseRest['default'])(function (func, wait, args) {
    return (0, _lodash_baseDelay['default'])(func, (0, _lodashToNumber['default'])(wait) || 0, args);
  });

  exports['default'] = delay;
});