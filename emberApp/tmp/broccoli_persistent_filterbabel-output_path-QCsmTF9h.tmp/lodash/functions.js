define('lodash/functions', ['exports', 'lodash/_baseFunctions', 'lodash/keys'], function (exports, _lodash_baseFunctions, _lodashKeys) {
  'use strict';

  /**
   * Creates an array of function property names from own enumerable properties
   * of `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the function names.
   * @see _.functionsIn
   * @example
   *
   * function Foo() {
   *   this.a = _.constant('a');
   *   this.b = _.constant('b');
   * }
   *
   * Foo.prototype.c = _.constant('c');
   *
   * _.functions(new Foo);
   * // => ['a', 'b']
   */
  function functions(object) {
    return object == null ? [] : (0, _lodash_baseFunctions['default'])(object, (0, _lodashKeys['default'])(object));
  }

  exports['default'] = functions;
});