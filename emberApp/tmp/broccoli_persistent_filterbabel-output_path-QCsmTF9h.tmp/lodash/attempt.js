define('lodash/attempt', ['exports', 'lodash/_apply', 'lodash/_baseRest', 'lodash/isError'], function (exports, _lodash_apply, _lodash_baseRest, _lodashIsError) {
  'use strict';

  /**
   * Attempts to invoke `func`, returning either the result or the caught error
   * object. Any additional arguments are provided to `func` when it's invoked.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Util
   * @param {Function} func The function to attempt.
   * @param {...*} [args] The arguments to invoke `func` with.
   * @returns {*} Returns the `func` result or error object.
   * @example
   *
   * // Avoid throwing errors for invalid selectors.
   * var elements = _.attempt(function(selector) {
   *   return document.querySelectorAll(selector);
   * }, '>_>');
   *
   * if (_.isError(elements)) {
   *   elements = [];
   * }
   */
  var attempt = (0, _lodash_baseRest['default'])(function (func, args) {
    try {
      return (0, _lodash_apply['default'])(func, undefined, args);
    } catch (e) {
      return (0, _lodashIsError['default'])(e) ? e : new Error(e);
    }
  });

  exports['default'] = attempt;
});