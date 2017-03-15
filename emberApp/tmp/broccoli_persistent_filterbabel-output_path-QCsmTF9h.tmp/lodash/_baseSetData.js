define('lodash/_baseSetData', ['exports', 'lodash/identity', 'lodash/_metaMap'], function (exports, _lodashIdentity, _lodash_metaMap) {
  'use strict';

  /**
   * The base implementation of `setData` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */
  var baseSetData = !_lodash_metaMap['default'] ? _lodashIdentity['default'] : function (func, data) {
    _lodash_metaMap['default'].set(func, data);
    return func;
  };

  exports['default'] = baseSetData;
});