define('lodash/mapValues', ['exports', 'lodash/_baseAssignValue', 'lodash/_baseForOwn', 'lodash/_baseIteratee'], function (exports, _lodash_baseAssignValue, _lodash_baseForOwn, _lodash_baseIteratee) {
  'use strict';

  /**
   * Creates an object with the same keys as `object` and values generated
   * by running each own enumerable string keyed property of `object` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns the new mapped object.
   * @see _.mapKeys
   * @example
   *
   * var users = {
   *   'fred':    { 'user': 'fred',    'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * _.mapValues(users, function(o) { return o.age; });
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   *
   * // The `_.property` iteratee shorthand.
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  function mapValues(object, iteratee) {
    var result = {};
    iteratee = (0, _lodash_baseIteratee['default'])(iteratee, 3);

    (0, _lodash_baseForOwn['default'])(object, function (value, key, object) {
      (0, _lodash_baseAssignValue['default'])(result, key, iteratee(value, key, object));
    });
    return result;
  }

  exports['default'] = mapValues;
});