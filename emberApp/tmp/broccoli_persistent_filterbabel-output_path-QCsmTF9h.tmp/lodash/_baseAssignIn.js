define('lodash/_baseAssignIn', ['exports', 'lodash/_copyObject', 'lodash/keysIn'], function (exports, _lodash_copyObject, _lodashKeysIn) {
  'use strict';

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && (0, _lodash_copyObject['default'])(source, (0, _lodashKeysIn['default'])(source), object);
  }

  exports['default'] = baseAssignIn;
});