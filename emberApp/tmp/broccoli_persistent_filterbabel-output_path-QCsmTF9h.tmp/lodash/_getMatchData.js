define('lodash/_getMatchData', ['exports', 'lodash/_isStrictComparable', 'lodash/keys'], function (exports, _lodash_isStrictComparable, _lodashKeys) {
  'use strict';

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = (0, _lodashKeys['default'])(object),
        length = result.length;

    while (length--) {
      var key = result[length],
          value = object[key];

      result[length] = [key, value, (0, _lodash_isStrictComparable['default'])(value)];
    }
    return result;
  }

  exports['default'] = getMatchData;
});