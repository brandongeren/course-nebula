define('lodash/_baseMerge', ['exports', 'lodash/_Stack', 'lodash/_assignMergeValue', 'lodash/_baseFor', 'lodash/_baseMergeDeep', 'lodash/isObject', 'lodash/keysIn'], function (exports, _lodash_Stack, _lodash_assignMergeValue, _lodash_baseFor, _lodash_baseMergeDeep, _lodashIsObject, _lodashKeysIn) {
  'use strict';

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    (0, _lodash_baseFor['default'])(source, function (srcValue, key) {
      if ((0, _lodashIsObject['default'])(srcValue)) {
        stack || (stack = new _lodash_Stack['default']());
        (0, _lodash_baseMergeDeep['default'])(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(object[key], srcValue, key + '', object, source, stack) : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }
        (0, _lodash_assignMergeValue['default'])(object, key, newValue);
      }
    }, _lodashKeysIn['default']);
  }

  exports['default'] = baseMerge;
});