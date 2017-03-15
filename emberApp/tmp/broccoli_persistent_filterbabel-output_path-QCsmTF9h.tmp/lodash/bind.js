define('lodash/bind', ['exports', 'lodash/_baseRest', 'lodash/_createWrap', 'lodash/_getHolder', 'lodash/_replaceHolders'], function (exports, _lodash_baseRest, _lodash_createWrap, _lodash_getHolder, _lodash_replaceHolders) {
  'use strict';

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_PARTIAL_FLAG = 32;

  /**
   * Creates a function that invokes `func` with the `this` binding of `thisArg`
   * and `partials` prepended to the arguments it receives.
   *
   * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
   * may be used as a placeholder for partially applied arguments.
   *
   * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
   * property of bound functions.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to bind.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {...*} [partials] The arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * function greet(greeting, punctuation) {
   *   return greeting + ' ' + this.user + punctuation;
   * }
   *
   * var object = { 'user': 'fred' };
   *
   * var bound = _.bind(greet, object, 'hi');
   * bound('!');
   * // => 'hi fred!'
   *
   * // Bound with placeholders.
   * var bound = _.bind(greet, object, _, '!');
   * bound('hi');
   * // => 'hi fred!'
   */
  var bind = (0, _lodash_baseRest['default'])(function (func, thisArg, partials) {
    var bitmask = WRAP_BIND_FLAG;
    if (partials.length) {
      var holders = (0, _lodash_replaceHolders['default'])(partials, (0, _lodash_getHolder['default'])(bind));
      bitmask |= WRAP_PARTIAL_FLAG;
    }
    return (0, _lodash_createWrap['default'])(func, bitmask, thisArg, partials, holders);
  });

  // Assign default placeholders.
  bind.placeholder = {};

  exports['default'] = bind;
});