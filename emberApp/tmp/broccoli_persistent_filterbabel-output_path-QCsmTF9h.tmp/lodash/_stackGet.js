define("lodash/_stackGet", ["exports"], function (exports) {
  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  "use strict";

  function stackGet(key) {
    return this.__data__.get(key);
  }

  exports["default"] = stackGet;
});