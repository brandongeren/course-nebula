define('lodash/_baseIsDate', ['exports', 'lodash/_baseGetTag', 'lodash/isObjectLike'], function (exports, _lodash_baseGetTag, _lodashIsObjectLike) {
  'use strict';

  /** `Object#toString` result references. */
  var dateTag = '[object Date]';

  /**
   * The base implementation of `_.isDate` without Node optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   */
  function baseIsDate(value) {
    return (0, _lodashIsObjectLike['default'])(value) && (0, _lodash_baseGetTag['default'])(value) == dateTag;
  }

  exports['default'] = baseIsDate;
});