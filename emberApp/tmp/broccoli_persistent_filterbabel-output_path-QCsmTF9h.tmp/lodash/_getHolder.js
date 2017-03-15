define("lodash/_getHolder", ["exports"], function (exports) {
  /**
   * Gets the argument placeholder value for `func`.
   *
   * @private
   * @param {Function} func The function to inspect.
   * @returns {*} Returns the placeholder value.
   */
  "use strict";

  function getHolder(func) {
    var object = func;
    return object.placeholder;
  }

  exports["default"] = getHolder;
});