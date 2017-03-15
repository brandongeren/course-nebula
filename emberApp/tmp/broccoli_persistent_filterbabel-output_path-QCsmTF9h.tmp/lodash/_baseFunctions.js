define('lodash/_baseFunctions', ['exports', 'lodash/_arrayFilter', 'lodash/isFunction'], function (exports, _lodash_arrayFilter, _lodashIsFunction) {
  'use strict';

  /**
   * The base implementation of `_.functions` which creates an array of
   * `object` function property names filtered from `props`.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Array} props The property names to filter.
   * @returns {Array} Returns the function names.
   */
  function baseFunctions(object, props) {
    return (0, _lodash_arrayFilter['default'])(props, function (key) {
      return (0, _lodashIsFunction['default'])(object[key]);
    });
  }

  exports['default'] = baseFunctions;
});