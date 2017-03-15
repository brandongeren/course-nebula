define('lodash/_baseShuffle', ['exports', 'lodash/_shuffleSelf', 'lodash/values'], function (exports, _lodash_shuffleSelf, _lodashValues) {
  'use strict';

  /**
   * The base implementation of `_.shuffle`.
   *
   * @private
   * @param {Array|Object} collection The collection to shuffle.
   * @returns {Array} Returns the new shuffled array.
   */
  function baseShuffle(collection) {
    return (0, _lodash_shuffleSelf['default'])((0, _lodashValues['default'])(collection));
  }

  exports['default'] = baseShuffle;
});