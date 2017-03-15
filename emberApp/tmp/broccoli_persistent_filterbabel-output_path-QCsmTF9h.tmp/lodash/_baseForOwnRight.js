define('lodash/_baseForOwnRight', ['exports', 'lodash/_baseForRight', 'lodash/keys'], function (exports, _lodash_baseForRight, _lodashKeys) {
  'use strict';

  /**
   * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwnRight(object, iteratee) {
    return object && (0, _lodash_baseForRight['default'])(object, iteratee, _lodashKeys['default']);
  }

  exports['default'] = baseForOwnRight;
});