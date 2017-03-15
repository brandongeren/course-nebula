define('lodash/_baseMergeDeep', ['exports', 'lodash/_assignMergeValue', 'lodash/_cloneBuffer', 'lodash/_cloneTypedArray', 'lodash/_copyArray', 'lodash/_initCloneObject', 'lodash/isArguments', 'lodash/isArray', 'lodash/isArrayLikeObject', 'lodash/isBuffer', 'lodash/isFunction', 'lodash/isObject', 'lodash/isPlainObject', 'lodash/isTypedArray', 'lodash/toPlainObject'], function (exports, _lodash_assignMergeValue, _lodash_cloneBuffer, _lodash_cloneTypedArray, _lodash_copyArray, _lodash_initCloneObject, _lodashIsArguments, _lodashIsArray, _lodashIsArrayLikeObject, _lodashIsBuffer, _lodashIsFunction, _lodashIsObject, _lodashIsPlainObject, _lodashIsTypedArray, _lodashToPlainObject) {
  'use strict';

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = object[key],
        srcValue = source[key],
        stacked = stack.get(srcValue);

    if (stacked) {
      (0, _lodash_assignMergeValue['default'])(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = (0, _lodashIsArray['default'])(srcValue),
          isBuff = !isArr && (0, _lodashIsBuffer['default'])(srcValue),
          isTyped = !isArr && !isBuff && (0, _lodashIsTypedArray['default'])(srcValue);

      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if ((0, _lodashIsArray['default'])(objValue)) {
          newValue = objValue;
        } else if ((0, _lodashIsArrayLikeObject['default'])(objValue)) {
          newValue = (0, _lodash_copyArray['default'])(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = (0, _lodash_cloneBuffer['default'])(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = (0, _lodash_cloneTypedArray['default'])(srcValue, true);
        } else {
          newValue = [];
        }
      } else if ((0, _lodashIsPlainObject['default'])(srcValue) || (0, _lodashIsArguments['default'])(srcValue)) {
        newValue = objValue;
        if ((0, _lodashIsArguments['default'])(objValue)) {
          newValue = (0, _lodashToPlainObject['default'])(objValue);
        } else if (!(0, _lodashIsObject['default'])(objValue) || srcIndex && (0, _lodashIsFunction['default'])(objValue)) {
          newValue = (0, _lodash_initCloneObject['default'])(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }
    (0, _lodash_assignMergeValue['default'])(object, key, newValue);
  }

  exports['default'] = baseMergeDeep;
});