define('lodash/keyBy', ['exports', 'lodash/_baseAssignValue', 'lodash/_createAggregator'], function (exports, _lodash_baseAssignValue, _lodash_createAggregator) {
  'use strict';

  /**
   * Creates an object composed of keys generated from the results of running
   * each element of `collection` thru `iteratee`. The corresponding value of
   * each key is the last element responsible for generating the key. The
   * iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
   * @returns {Object} Returns the composed aggregate object.
   * @example
   *
   * var array = [
   *   { 'dir': 'left', 'code': 97 },
   *   { 'dir': 'right', 'code': 100 }
   * ];
   *
   * _.keyBy(array, function(o) {
   *   return String.fromCharCode(o.code);
   * });
   * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
   *
   * _.keyBy(array, 'dir');
   * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
   */
  var keyBy = (0, _lodash_createAggregator['default'])(function (result, value, key) {
    (0, _lodash_baseAssignValue['default'])(result, key, value);
  });

  exports['default'] = keyBy;
});