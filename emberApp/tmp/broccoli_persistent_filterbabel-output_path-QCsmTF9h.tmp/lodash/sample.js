define('lodash/sample', ['exports', 'lodash/_arraySample', 'lodash/_baseSample', 'lodash/isArray'], function (exports, _lodash_arraySample, _lodash_baseSample, _lodashIsArray) {
  'use strict';

  /**
   * Gets a random element from `collection`.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to sample.
   * @returns {*} Returns the random element.
   * @example
   *
   * _.sample([1, 2, 3, 4]);
   * // => 2
   */
  function sample(collection) {
    var func = (0, _lodashIsArray['default'])(collection) ? _lodash_arraySample['default'] : _lodash_baseSample['default'];
    return func(collection);
  }

  exports['default'] = sample;
});