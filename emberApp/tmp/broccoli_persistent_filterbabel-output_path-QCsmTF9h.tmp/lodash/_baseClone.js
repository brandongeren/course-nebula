define('lodash/_baseClone', ['exports', 'lodash/_Stack', 'lodash/_arrayEach', 'lodash/_assignValue', 'lodash/_baseAssign', 'lodash/_baseAssignIn', 'lodash/_cloneBuffer', 'lodash/_copyArray', 'lodash/_copySymbols', 'lodash/_copySymbolsIn', 'lodash/_getAllKeys', 'lodash/_getAllKeysIn', 'lodash/_getTag', 'lodash/_initCloneArray', 'lodash/_initCloneByTag', 'lodash/_initCloneObject', 'lodash/isArray', 'lodash/isBuffer', 'lodash/isObject', 'lodash/keys'], function (exports, _lodash_Stack, _lodash_arrayEach, _lodash_assignValue, _lodash_baseAssign, _lodash_baseAssignIn, _lodash_cloneBuffer, _lodash_copyArray, _lodash_copySymbols, _lodash_copySymbolsIn, _lodash_getAllKeys, _lodash_getAllKeysIn, _lodash_getTag, _lodash_initCloneArray, _lodash_initCloneByTag, _lodash_initCloneObject, _lodashIsArray, _lodashIsBuffer, _lodashIsObject, _lodashKeys) {
  'use strict';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!(0, _lodashIsObject['default'])(value)) {
      return value;
    }
    var isArr = (0, _lodashIsArray['default'])(value);
    if (isArr) {
      result = (0, _lodash_initCloneArray['default'])(value);
      if (!isDeep) {
        return (0, _lodash_copyArray['default'])(value, result);
      }
    } else {
      var tag = (0, _lodash_getTag['default'])(value),
          isFunc = tag == funcTag || tag == genTag;

      if ((0, _lodashIsBuffer['default'])(value)) {
        return (0, _lodash_cloneBuffer['default'])(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : (0, _lodash_initCloneObject['default'])(value);
        if (!isDeep) {
          return isFlat ? (0, _lodash_copySymbolsIn['default'])(value, (0, _lodash_baseAssignIn['default'])(result, value)) : (0, _lodash_copySymbols['default'])(value, (0, _lodash_baseAssign['default'])(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = (0, _lodash_initCloneByTag['default'])(value, tag, baseClone, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new _lodash_Stack['default']());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    var keysFunc = isFull ? isFlat ? _lodash_getAllKeysIn['default'] : _lodash_getAllKeys['default'] : isFlat ? keysIn : _lodashKeys['default'];

    var props = isArr ? undefined : keysFunc(value);
    (0, _lodash_arrayEach['default'])(props || value, function (subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      (0, _lodash_assignValue['default'])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  exports['default'] = baseClone;
});