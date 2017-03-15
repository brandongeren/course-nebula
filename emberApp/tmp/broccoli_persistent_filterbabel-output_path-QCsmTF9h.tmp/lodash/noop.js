define("lodash/noop", ["exports"], function (exports) {
  /**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */
  "use strict";

  function noop() {
    // No operation performed.
  }

  exports["default"] = noop;
});