define('lodash/_isLaziable', ['exports', 'lodash/_LazyWrapper', 'lodash/_getData', 'lodash/_getFuncName', 'lodash/wrapperLodash'], function (exports, _lodash_LazyWrapper, _lodash_getData, _lodash_getFuncName, _lodashWrapperLodash) {
  'use strict';

  /**
   * Checks if `func` has a lazy counterpart.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
   *  else `false`.
   */
  function isLaziable(func) {
    var funcName = (0, _lodash_getFuncName['default'])(func),
        other = _lodashWrapperLodash['default'][funcName];

    if (typeof other != 'function' || !(funcName in _lodash_LazyWrapper['default'].prototype)) {
      return false;
    }
    if (func === other) {
      return true;
    }
    var data = (0, _lodash_getData['default'])(other);
    return !!data && func === data[0];
  }

  exports['default'] = isLaziable;
});