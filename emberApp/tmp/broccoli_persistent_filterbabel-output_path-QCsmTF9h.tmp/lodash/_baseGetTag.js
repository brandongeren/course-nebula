define('lodash/_baseGetTag', ['exports', 'lodash/_Symbol', 'lodash/_getRawTag', 'lodash/_objectToString'], function (exports, _lodash_Symbol, _lodash_getRawTag, _lodash_objectToString) {
  'use strict';

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = _lodash_Symbol['default'] ? _lodash_Symbol['default'].toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? (0, _lodash_getRawTag['default'])(value) : (0, _lodash_objectToString['default'])(value);
  }

  exports['default'] = baseGetTag;
});