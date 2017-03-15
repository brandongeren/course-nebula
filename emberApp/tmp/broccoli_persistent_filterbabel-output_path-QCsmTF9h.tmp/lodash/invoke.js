define('lodash/invoke', ['exports', 'lodash/_baseInvoke', 'lodash/_baseRest'], function (exports, _lodash_baseInvoke, _lodash_baseRest) {
  'use strict';

  /**
   * Invokes the method at `path` of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the method to invoke.
   * @param {...*} [args] The arguments to invoke the method with.
   * @returns {*} Returns the result of the invoked method.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
   *
   * _.invoke(object, 'a[0].b.c.slice', 1, 3);
   * // => [2, 3]
   */
  var invoke = (0, _lodash_baseRest['default'])(_lodash_baseInvoke['default']);

  exports['default'] = invoke;
});