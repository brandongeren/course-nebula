define('lodash/_getData', ['exports', 'lodash/_metaMap', 'lodash/noop'], function (exports, _lodash_metaMap, _lodashNoop) {
  'use strict';

  /**
   * Gets metadata for `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {*} Returns the metadata for `func`.
   */
  var getData = !_lodash_metaMap['default'] ? _lodashNoop['default'] : function (func) {
    return _lodash_metaMap['default'].get(func);
  };

  exports['default'] = getData;
});