define('lodash/startCase', ['exports', 'lodash/_createCompounder', 'lodash/upperFirst'], function (exports, _lodash_createCompounder, _lodashUpperFirst) {
  'use strict';

  /**
   * Converts `string` to
   * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
   *
   * @static
   * @memberOf _
   * @since 3.1.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the start cased string.
   * @example
   *
   * _.startCase('--foo-bar--');
   * // => 'Foo Bar'
   *
   * _.startCase('fooBar');
   * // => 'Foo Bar'
   *
   * _.startCase('__FOO_BAR__');
   * // => 'FOO BAR'
   */
  var startCase = (0, _lodash_createCompounder['default'])(function (result, word, index) {
    return result + (index ? ' ' : '') + (0, _lodashUpperFirst['default'])(word);
  });

  exports['default'] = startCase;
});