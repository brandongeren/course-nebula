define('lodash/_isMasked', ['exports', 'lodash/_coreJsData'], function (exports, _lodash_coreJsData) {
  'use strict';

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function () {
    var uid = /[^.]+$/.exec(_lodash_coreJsData['default'] && _lodash_coreJsData['default'].keys && _lodash_coreJsData['default'].keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  })();

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  exports['default'] = isMasked;
});