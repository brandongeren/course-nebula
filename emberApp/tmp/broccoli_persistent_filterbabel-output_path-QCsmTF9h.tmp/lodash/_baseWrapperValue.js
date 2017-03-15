define('lodash/_baseWrapperValue', ['exports', 'lodash/_LazyWrapper', 'lodash/_arrayPush', 'lodash/_arrayReduce'], function (exports, _lodash_LazyWrapper, _lodash_arrayPush, _lodash_arrayReduce) {
  'use strict';

  /**
   * The base implementation of `wrapperValue` which returns the result of
   * performing a sequence of actions on the unwrapped `value`, where each
   * successive action is supplied the return value of the previous.
   *
   * @private
   * @param {*} value The unwrapped value.
   * @param {Array} actions Actions to perform to resolve the unwrapped value.
   * @returns {*} Returns the resolved value.
   */
  function baseWrapperValue(value, actions) {
    var result = value;
    if (result instanceof _lodash_LazyWrapper['default']) {
      result = result.value();
    }
    return (0, _lodash_arrayReduce['default'])(actions, function (result, action) {
      return action.func.apply(action.thisArg, (0, _lodash_arrayPush['default'])([result], action.args));
    }, result);
  }

  exports['default'] = baseWrapperValue;
});