define('lodash/_customDefaultsMerge', ['exports', 'lodash/_baseMerge', 'lodash/isObject'], function (exports, _lodash_baseMerge, _lodashIsObject) {
  'use strict';

  /**
   * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
   * objects into destination objects that are passed thru.
   *
   * @private
   * @param {*} objValue The destination value.
   * @param {*} srcValue The source value.
   * @param {string} key The key of the property to merge.
   * @param {Object} object The parent object of `objValue`.
   * @param {Object} source The parent object of `srcValue`.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   * @returns {*} Returns the value to assign.
   */
  function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
    if ((0, _lodashIsObject['default'])(objValue) && (0, _lodashIsObject['default'])(srcValue)) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, objValue);
      (0, _lodash_baseMerge['default'])(objValue, srcValue, undefined, customDefaultsMerge, stack);
      stack['delete'](srcValue);
    }
    return objValue;
  }

  exports['default'] = customDefaultsMerge;
});