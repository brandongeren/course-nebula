define('lodash/_createOver', ['exports', 'lodash/_apply', 'lodash/_arrayMap', 'lodash/_baseIteratee', 'lodash/_baseRest', 'lodash/_baseUnary', 'lodash/_flatRest'], function (exports, _lodash_apply, _lodash_arrayMap, _lodash_baseIteratee, _lodash_baseRest, _lodash_baseUnary, _lodash_flatRest) {
  'use strict';

  /**
   * Creates a function like `_.over`.
   *
   * @private
   * @param {Function} arrayFunc The function to iterate over iteratees.
   * @returns {Function} Returns the new over function.
   */
  function createOver(arrayFunc) {
    return (0, _lodash_flatRest['default'])(function (iteratees) {
      iteratees = (0, _lodash_arrayMap['default'])(iteratees, (0, _lodash_baseUnary['default'])(_lodash_baseIteratee['default']));
      return (0, _lodash_baseRest['default'])(function (args) {
        var thisArg = this;
        return arrayFunc(iteratees, function (iteratee) {
          return (0, _lodash_apply['default'])(iteratee, thisArg, args);
        });
      });
    });
  }

  exports['default'] = createOver;
});