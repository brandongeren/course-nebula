define('lodash/functionsIn', ['exports', 'lodash/_baseFunctions', 'lodash/keysIn'], function (exports, _lodash_baseFunctions, _lodashKeysIn) {
  'use strict';

  /**
   * Creates an array of function property names from own and inherited
   * enumerable properties of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the function names.
   * @see _.functions
   * @example
   *
   * function Foo() {
   *   this.a = _.constant('a');
   *   this.b = _.constant('b');
   * }
   *
   * Foo.prototype.c = _.constant('c');
   *
   * _.functionsIn(new Foo);
   * // => ['a', 'b', 'c']
   */
  function functionsIn(object) {
    return object == null ? [] : (0, _lodash_baseFunctions['default'])(object, (0, _lodashKeysIn['default'])(object));
  }

  exports['default'] = functionsIn;
});