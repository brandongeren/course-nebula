define('lodash/_baseIteratee', ['exports', 'lodash/_baseMatches', 'lodash/_baseMatchesProperty', 'lodash/identity', 'lodash/isArray', 'lodash/property'], function (exports, _lodash_baseMatches, _lodash_baseMatchesProperty, _lodashIdentity, _lodashIsArray, _lodashProperty) {
  'use strict';

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return _lodashIdentity['default'];
    }
    if (typeof value == 'object') {
      return (0, _lodashIsArray['default'])(value) ? (0, _lodash_baseMatchesProperty['default'])(value[0], value[1]) : (0, _lodash_baseMatches['default'])(value);
    }
    return (0, _lodashProperty['default'])(value);
  }

  exports['default'] = baseIteratee;
});