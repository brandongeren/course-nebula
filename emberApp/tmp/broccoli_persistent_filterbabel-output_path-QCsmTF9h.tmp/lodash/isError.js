define('lodash/isError', ['exports', 'lodash/_baseGetTag', 'lodash/isObjectLike', 'lodash/isPlainObject'], function (exports, _lodash_baseGetTag, _lodashIsObjectLike, _lodashIsPlainObject) {
  'use strict';

  /** `Object#toString` result references. */
  var domExcTag = '[object DOMException]',
      errorTag = '[object Error]';

  /**
   * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
   * `SyntaxError`, `TypeError`, or `URIError` object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
   * @example
   *
   * _.isError(new Error);
   * // => true
   *
   * _.isError(Error);
   * // => false
   */
  function isError(value) {
    if (!(0, _lodashIsObjectLike['default'])(value)) {
      return false;
    }
    var tag = (0, _lodash_baseGetTag['default'])(value);
    return tag == errorTag || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !(0, _lodashIsPlainObject['default'])(value);
  }

  exports['default'] = isError;
});