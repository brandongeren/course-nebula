define('lodash/findLast', ['exports', 'lodash/_createFind', 'lodash/findLastIndex'], function (exports, _lodash_createFind, _lodashFindLastIndex) {
  'use strict';

  /**
   * This method is like `_.find` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=collection.length-1] The index to search from.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * _.findLast([1, 2, 3, 4], function(n) {
   *   return n % 2 == 1;
   * });
   * // => 3
   */
  var findLast = (0, _lodash_createFind['default'])(_lodashFindLastIndex['default']);

  exports['default'] = findLast;
});