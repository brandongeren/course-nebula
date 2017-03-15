define('lodash/zip', ['exports', 'lodash/_baseRest', 'lodash/unzip'], function (exports, _lodash_baseRest, _lodashUnzip) {
  'use strict';

  /**
   * Creates an array of grouped elements, the first of which contains the
   * first elements of the given arrays, the second of which contains the
   * second elements of the given arrays, and so on.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {...Array} [arrays] The arrays to process.
   * @returns {Array} Returns the new array of grouped elements.
   * @example
   *
   * _.zip(['a', 'b'], [1, 2], [true, false]);
   * // => [['a', 1, true], ['b', 2, false]]
   */
  var zip = (0, _lodash_baseRest['default'])(_lodashUnzip['default']);

  exports['default'] = zip;
});