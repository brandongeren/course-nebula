define('lodash/_baseMatchesProperty', ['exports', 'lodash/_baseIsEqual', 'lodash/get', 'lodash/hasIn', 'lodash/_isKey', 'lodash/_isStrictComparable', 'lodash/_matchesStrictComparable', 'lodash/_toKey'], function (exports, _lodash_baseIsEqual, _lodashGet, _lodashHasIn, _lodash_isKey, _lodash_isStrictComparable, _lodash_matchesStrictComparable, _lodash_toKey) {
  'use strict';

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty(path, srcValue) {
    if ((0, _lodash_isKey['default'])(path) && (0, _lodash_isStrictComparable['default'])(srcValue)) {
      return (0, _lodash_matchesStrictComparable['default'])((0, _lodash_toKey['default'])(path), srcValue);
    }
    return function (object) {
      var objValue = (0, _lodashGet['default'])(object, path);
      return objValue === undefined && objValue === srcValue ? (0, _lodashHasIn['default'])(object, path) : (0, _lodash_baseIsEqual['default'])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }

  exports['default'] = baseMatchesProperty;
});