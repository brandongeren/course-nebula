define("lodash/_baseLt", ["exports"], function (exports) {
  /**
   * The base implementation of `_.lt` which doesn't coerce arguments.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is less than `other`,
   *  else `false`.
   */
  "use strict";

  function baseLt(value, other) {
    return value < other;
  }

  exports["default"] = baseLt;
});