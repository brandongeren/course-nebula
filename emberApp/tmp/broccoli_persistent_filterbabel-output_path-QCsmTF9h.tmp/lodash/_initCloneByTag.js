define('lodash/_initCloneByTag', ['exports', 'lodash/_cloneArrayBuffer', 'lodash/_cloneDataView', 'lodash/_cloneMap', 'lodash/_cloneRegExp', 'lodash/_cloneSet', 'lodash/_cloneSymbol', 'lodash/_cloneTypedArray'], function (exports, _lodash_cloneArrayBuffer, _lodash_cloneDataView, _lodash_cloneMap, _lodash_cloneRegExp, _lodash_cloneSet, _lodash_cloneSymbol, _lodash_cloneTypedArray) {
  'use strict';

  /** `Object#toString` result references. */
  var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]';

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

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return (0, _lodash_cloneArrayBuffer['default'])(object);

      case boolTag:
      case dateTag:
        return new Ctor(+object);

      case dataViewTag:
        return (0, _lodash_cloneDataView['default'])(object, isDeep);

      case float32Tag:case float64Tag:
      case int8Tag:case int16Tag:case int32Tag:
      case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
        return (0, _lodash_cloneTypedArray['default'])(object, isDeep);

      case mapTag:
        return (0, _lodash_cloneMap['default'])(object, isDeep, cloneFunc);

      case numberTag:
      case stringTag:
        return new Ctor(object);

      case regexpTag:
        return (0, _lodash_cloneRegExp['default'])(object);

      case setTag:
        return (0, _lodash_cloneSet['default'])(object, isDeep, cloneFunc);

      case symbolTag:
        return (0, _lodash_cloneSymbol['default'])(object);
    }
  }

  exports['default'] = initCloneByTag;
});