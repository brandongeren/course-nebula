define('lodash/lowerCase', ['exports', 'lodash/_createCompounder'], function (exports, _lodash_createCompounder) {
  'use strict';

  /**
   * Converts `string`, as space separated words, to lower case.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the lower cased string.
   * @example
   *
   * _.lowerCase('--Foo-Bar--');
   * // => 'foo bar'
   *
   * _.lowerCase('fooBar');
   * // => 'foo bar'
   *
   * _.lowerCase('__FOO_BAR__');
   * // => 'foo bar'
   */
  var lowerCase = (0, _lodash_createCompounder['default'])(function (result, word, index) {
    return result + (index ? ' ' : '') + word.toLowerCase();
  });

  exports['default'] = lowerCase;
});