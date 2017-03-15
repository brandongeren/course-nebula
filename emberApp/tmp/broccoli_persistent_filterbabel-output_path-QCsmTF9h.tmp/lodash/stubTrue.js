define("lodash/stubTrue", ["exports"], function (exports) {
  /**
   * This method returns `true`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `true`.
   * @example
   *
   * _.times(2, _.stubTrue);
   * // => [true, true]
   */
  "use strict";

  function stubTrue() {
    return true;
  }

  exports["default"] = stubTrue;
});