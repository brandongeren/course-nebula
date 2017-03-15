define('lodash/_basePick', ['exports', 'lodash/_basePickBy', 'lodash/hasIn'], function (exports, _lodash_basePickBy, _lodashHasIn) {
  'use strict';

  /**
   * The base implementation of `_.pick` without support for individual
   * property identifiers.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @returns {Object} Returns the new object.
   */
  function basePick(object, paths) {
    return (0, _lodash_basePickBy['default'])(object, paths, function (value, path) {
      return (0, _lodashHasIn['default'])(object, path);
    });
  }

  exports['default'] = basePick;
});