define('lodash/_createAggregator', ['exports', 'lodash/_arrayAggregator', 'lodash/_baseAggregator', 'lodash/_baseIteratee', 'lodash/isArray'], function (exports, _lodash_arrayAggregator, _lodash_baseAggregator, _lodash_baseIteratee, _lodashIsArray) {
  'use strict';

  /**
   * Creates a function like `_.groupBy`.
   *
   * @private
   * @param {Function} setter The function to set accumulator values.
   * @param {Function} [initializer] The accumulator object initializer.
   * @returns {Function} Returns the new aggregator function.
   */
  function createAggregator(setter, initializer) {
    return function (collection, iteratee) {
      var func = (0, _lodashIsArray['default'])(collection) ? _lodash_arrayAggregator['default'] : _lodash_baseAggregator['default'],
          accumulator = initializer ? initializer() : {};

      return func(collection, setter, (0, _lodash_baseIteratee['default'])(iteratee, 2), accumulator);
    };
  }

  exports['default'] = createAggregator;
});