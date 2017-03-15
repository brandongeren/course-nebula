define('lodash/_baseEach', ['exports', 'lodash/_baseForOwn', 'lodash/_createBaseEach'], function (exports, _lodash_baseForOwn, _lodash_createBaseEach) {
  'use strict';

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach = (0, _lodash_createBaseEach['default'])(_lodash_baseForOwn['default']);

  exports['default'] = baseEach;
});