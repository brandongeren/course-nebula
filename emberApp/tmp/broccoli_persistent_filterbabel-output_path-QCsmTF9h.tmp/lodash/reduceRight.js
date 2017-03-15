define('lodash/reduceRight', ['exports', 'lodash/_arrayReduceRight', 'lodash/_baseEachRight', 'lodash/_baseIteratee', 'lodash/_baseReduce', 'lodash/isArray'], function (exports, _lodash_arrayReduceRight, _lodash_baseEachRight, _lodash_baseIteratee, _lodash_baseReduce, _lodashIsArray) {
  'use strict';

  /**
   * This method is like `_.reduce` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @returns {*} Returns the accumulated value.
   * @see _.reduce
   * @example
   *
   * var array = [[0, 1], [2, 3], [4, 5]];
   *
   * _.reduceRight(array, function(flattened, other) {
   *   return flattened.concat(other);
   * }, []);
   * // => [4, 5, 2, 3, 0, 1]
   */
  function reduceRight(collection, iteratee, accumulator) {
    var func = (0, _lodashIsArray['default'])(collection) ? _lodash_arrayReduceRight['default'] : _lodash_baseReduce['default'],
        initAccum = arguments.length < 3;

    return func(collection, (0, _lodash_baseIteratee['default'])(iteratee, 4), accumulator, initAccum, _lodash_baseEachRight['default']);
  }

  exports['default'] = reduceRight;
});