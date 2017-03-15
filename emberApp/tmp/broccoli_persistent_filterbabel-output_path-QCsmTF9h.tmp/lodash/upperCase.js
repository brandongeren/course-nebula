define('lodash/upperCase', ['exports', 'lodash/_createCompounder'], function (exports, _lodash_createCompounder) {
  'use strict';

  /**
   * Converts `string`, as space separated words, to upper case.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the upper cased string.
   * @example
   *
   * _.upperCase('--foo-bar');
   * // => 'FOO BAR'
   *
   * _.upperCase('fooBar');
   * // => 'FOO BAR'
   *
   * _.upperCase('__foo_bar__');
   * // => 'FOO BAR'
   */
  var upperCase = (0, _lodash_createCompounder['default'])(function (result, word, index) {
    return result + (index ? ' ' : '') + word.toUpperCase();
  });

  exports['default'] = upperCase;
});