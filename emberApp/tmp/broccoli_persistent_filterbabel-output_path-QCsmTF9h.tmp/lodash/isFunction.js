define('lodash/isFunction', ['exports', 'lodash/_baseGetTag', 'lodash/isObject'], function (exports, _lodash_baseGetTag, _lodashIsObject) {
  'use strict';

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!(0, _lodashIsObject['default'])(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = (0, _lodash_baseGetTag['default'])(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  exports['default'] = isFunction;
});