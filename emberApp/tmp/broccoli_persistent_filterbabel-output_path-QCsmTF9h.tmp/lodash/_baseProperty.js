define("lodash/_baseProperty", ["exports"], function (exports) {
  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  "use strict";

  function baseProperty(key) {
    return function (object) {
      return object == null ? undefined : object[key];
    };
  }

  exports["default"] = baseProperty;
});