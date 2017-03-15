define("lodash/_baseIsNaN", ["exports"], function (exports) {
  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  "use strict";

  function baseIsNaN(value) {
    return value !== value;
  }

  exports["default"] = baseIsNaN;
});