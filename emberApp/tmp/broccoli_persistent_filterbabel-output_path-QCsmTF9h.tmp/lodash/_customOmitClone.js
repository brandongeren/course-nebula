define('lodash/_customOmitClone', ['exports', 'lodash/isPlainObject'], function (exports, _lodashIsPlainObject) {
  'use strict';

  /**
   * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
   * objects.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {string} key The key of the property to inspect.
   * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
   */
  function customOmitClone(value) {
    return (0, _lodashIsPlainObject['default'])(value) ? undefined : value;
  }

  exports['default'] = customOmitClone;
});