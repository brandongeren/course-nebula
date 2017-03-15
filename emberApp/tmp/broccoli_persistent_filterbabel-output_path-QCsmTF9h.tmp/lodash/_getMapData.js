define('lodash/_getMapData', ['exports', 'lodash/_isKeyable'], function (exports, _lodash_isKeyable) {
  'use strict';

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return (0, _lodash_isKeyable['default'])(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  exports['default'] = getMapData;
});