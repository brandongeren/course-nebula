define('lodash/_baseSample', ['exports', 'lodash/_arraySample', 'lodash/values'], function (exports, _lodash_arraySample, _lodashValues) {
  'use strict';

  /**
   * The base implementation of `_.sample`.
   *
   * @private
   * @param {Array|Object} collection The collection to sample.
   * @returns {*} Returns the random element.
   */
  function baseSample(collection) {
    return (0, _lodash_arraySample['default'])((0, _lodashValues['default'])(collection));
  }

  exports['default'] = baseSample;
});