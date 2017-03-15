define("lodash/_setCacheHas", ["exports"], function (exports) {
  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  "use strict";

  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  exports["default"] = setCacheHas;
});