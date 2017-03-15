define("lodash/_setToPairs", ["exports"], function (exports) {
  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  "use strict";

  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function (value) {
      result[++index] = [value, value];
    });
    return result;
  }

  exports["default"] = setToPairs;
});