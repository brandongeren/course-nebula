define('lodash/_baseOrderBy', ['exports', 'lodash/_arrayMap', 'lodash/_baseIteratee', 'lodash/_baseMap', 'lodash/_baseSortBy', 'lodash/_baseUnary', 'lodash/_compareMultiple', 'lodash/identity'], function (exports, _lodash_arrayMap, _lodash_baseIteratee, _lodash_baseMap, _lodash_baseSortBy, _lodash_baseUnary, _lodash_compareMultiple, _lodashIdentity) {
  'use strict';

  /**
   * The base implementation of `_.orderBy` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
   * @param {string[]} orders The sort orders of `iteratees`.
   * @returns {Array} Returns the new sorted array.
   */
  function baseOrderBy(collection, iteratees, orders) {
    var index = -1;
    iteratees = (0, _lodash_arrayMap['default'])(iteratees.length ? iteratees : [_lodashIdentity['default']], (0, _lodash_baseUnary['default'])(_lodash_baseIteratee['default']));

    var result = (0, _lodash_baseMap['default'])(collection, function (value, key, collection) {
      var criteria = (0, _lodash_arrayMap['default'])(iteratees, function (iteratee) {
        return iteratee(value);
      });
      return { 'criteria': criteria, 'index': ++index, 'value': value };
    });

    return (0, _lodash_baseSortBy['default'])(result, function (object, other) {
      return (0, _lodash_compareMultiple['default'])(object, other, orders);
    });
  }

  exports['default'] = baseOrderBy;
});