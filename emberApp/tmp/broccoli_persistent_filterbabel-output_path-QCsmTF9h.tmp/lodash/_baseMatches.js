define('lodash/_baseMatches', ['exports', 'lodash/_baseIsMatch', 'lodash/_getMatchData', 'lodash/_matchesStrictComparable'], function (exports, _lodash_baseIsMatch, _lodash_getMatchData, _lodash_matchesStrictComparable) {
  'use strict';

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches(source) {
    var matchData = (0, _lodash_getMatchData['default'])(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return (0, _lodash_matchesStrictComparable['default'])(matchData[0][0], matchData[0][1]);
    }
    return function (object) {
      return object === source || (0, _lodash_baseIsMatch['default'])(object, source, matchData);
    };
  }

  exports['default'] = baseMatches;
});