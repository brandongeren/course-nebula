define('lodash/stubString', ['exports'], function (exports) {
  /**
   * This method returns an empty string.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {string} Returns the empty string.
   * @example
   *
   * _.times(2, _.stubString);
   * // => ['', '']
   */
  'use strict';

  function stubString() {
    return '';
  }

  exports['default'] = stubString;
});