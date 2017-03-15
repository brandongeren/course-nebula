define('lodash/_assignMergeValue', ['exports', 'lodash/_baseAssignValue', 'lodash/eq'], function (exports, _lodash_baseAssignValue, _lodashEq) {
  'use strict';

  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if (value !== undefined && !(0, _lodashEq['default'])(object[key], value) || value === undefined && !(key in object)) {
      (0, _lodash_baseAssignValue['default'])(object, key, value);
    }
  }

  exports['default'] = assignMergeValue;
});