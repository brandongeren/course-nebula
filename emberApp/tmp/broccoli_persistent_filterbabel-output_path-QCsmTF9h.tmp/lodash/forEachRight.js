define('lodash/forEachRight', ['exports', 'lodash/_arrayEachRight', 'lodash/_baseEachRight', 'lodash/_castFunction', 'lodash/isArray'], function (exports, _lodash_arrayEachRight, _lodash_baseEachRight, _lodash_castFunction, _lodashIsArray) {
  'use strict';

  /**
   * This method is like `_.forEach` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @alias eachRight
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEach
   * @example
   *
   * _.forEachRight([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `2` then `1`.
   */
  function forEachRight(collection, iteratee) {
    var func = (0, _lodashIsArray['default'])(collection) ? _lodash_arrayEachRight['default'] : _lodash_baseEachRight['default'];
    return func(collection, (0, _lodash_castFunction['default'])(iteratee));
  }

  exports['default'] = forEachRight;
});