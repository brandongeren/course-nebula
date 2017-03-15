define("lodash/_basePropertyOf", ["exports"], function (exports) {
  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  "use strict";

  function basePropertyOf(object) {
    return function (key) {
      return object == null ? undefined : object[key];
    };
  }

  exports["default"] = basePropertyOf;
});