define('lodash/_createCurry', ['exports', 'lodash/_apply', 'lodash/_createCtor', 'lodash/_createHybrid', 'lodash/_createRecurry', 'lodash/_getHolder', 'lodash/_replaceHolders', 'lodash/_root'], function (exports, _lodash_apply, _lodash_createCtor, _lodash_createHybrid, _lodash_createRecurry, _lodash_getHolder, _lodash_replaceHolders, _lodash_root) {
  'use strict';

  /**
   * Creates a function that wraps `func` to enable currying.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {number} arity The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createCurry(func, bitmask, arity) {
    var Ctor = (0, _lodash_createCtor['default'])(func);

    function wrapper() {
      var length = arguments.length,
          args = Array(length),
          index = length,
          placeholder = (0, _lodash_getHolder['default'])(wrapper);

      while (index--) {
        args[index] = arguments[index];
      }
      var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : (0, _lodash_replaceHolders['default'])(args, placeholder);

      length -= holders.length;
      if (length < arity) {
        return (0, _lodash_createRecurry['default'])(func, bitmask, _lodash_createHybrid['default'], wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
      }
      var fn = this && this !== _lodash_root['default'] && this instanceof wrapper ? Ctor : func;
      return (0, _lodash_apply['default'])(fn, this, args);
    }
    return wrapper;
  }

  exports['default'] = createCurry;
});