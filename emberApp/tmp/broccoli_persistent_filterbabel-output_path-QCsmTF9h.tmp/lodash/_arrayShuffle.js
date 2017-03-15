define('lodash/_arrayShuffle', ['exports', 'lodash/_copyArray', 'lodash/_shuffleSelf'], function (exports, _lodash_copyArray, _lodash_shuffleSelf) {
  'use strict';

  /**
   * A specialized version of `_.shuffle` for arrays.
   *
   * @private
   * @param {Array} array The array to shuffle.
   * @returns {Array} Returns the new shuffled array.
   */
  function arrayShuffle(array) {
    return (0, _lodash_shuffleSelf['default'])((0, _lodash_copyArray['default'])(array));
  }

  exports['default'] = arrayShuffle;
});