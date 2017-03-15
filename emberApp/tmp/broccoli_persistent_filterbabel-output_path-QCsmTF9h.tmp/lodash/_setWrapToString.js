define('lodash/_setWrapToString', ['exports', 'lodash/_getWrapDetails', 'lodash/_insertWrapDetails', 'lodash/_setToString', 'lodash/_updateWrapDetails'], function (exports, _lodash_getWrapDetails, _lodash_insertWrapDetails, _lodash_setToString, _lodash_updateWrapDetails) {
  'use strict';

  /**
   * Sets the `toString` method of `wrapper` to mimic the source of `reference`
   * with wrapper details in a comment at the top of the source body.
   *
   * @private
   * @param {Function} wrapper The function to modify.
   * @param {Function} reference The reference function.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @returns {Function} Returns `wrapper`.
   */
  function setWrapToString(wrapper, reference, bitmask) {
    var source = reference + '';
    return (0, _lodash_setToString['default'])(wrapper, (0, _lodash_insertWrapDetails['default'])(source, (0, _lodash_updateWrapDetails['default'])((0, _lodash_getWrapDetails['default'])(source), bitmask)));
  }

  exports['default'] = setWrapToString;
});