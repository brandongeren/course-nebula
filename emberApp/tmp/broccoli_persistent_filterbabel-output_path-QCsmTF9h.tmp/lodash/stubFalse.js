define("lodash/stubFalse", ["exports"], function (exports) {
  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  "use strict";

  function stubFalse() {
    return false;
  }

  exports["default"] = stubFalse;
});