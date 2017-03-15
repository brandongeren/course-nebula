define('lodash/_nodeUtil', ['exports', 'lodash/_freeGlobal'], function (exports, _lodash_freeGlobal) {
  'use strict';

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node. */
  var freeProcess = moduleExports && _lodash_freeGlobal['default'].process;

  /** Used to access faster Node helpers. */
  var nodeUtil = (function () {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  })();

  exports['default'] = nodeUtil;
});