define('lodash/_createFind', ['exports', 'lodash/_baseIteratee', 'lodash/isArrayLike', 'lodash/keys'], function (exports, _lodash_baseIteratee, _lodashIsArrayLike, _lodashKeys) {
  'use strict';

  /**
   * Creates a `_.find` or `_.findLast` function.
   *
   * @private
   * @param {Function} findIndexFunc The function to find the collection index.
   * @returns {Function} Returns the new find function.
   */
  function createFind(findIndexFunc) {
    return function (collection, predicate, fromIndex) {
      var iterable = Object(collection);
      if (!(0, _lodashIsArrayLike['default'])(collection)) {
        var iteratee = (0, _lodash_baseIteratee['default'])(predicate, 3);
        collection = (0, _lodashKeys['default'])(collection);
        predicate = function (key) {
          return iteratee(iterable[key], key, iterable);
        };
      }
      var index = findIndexFunc(collection, predicate, fromIndex);
      return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
    };
  }

  exports['default'] = createFind;
});