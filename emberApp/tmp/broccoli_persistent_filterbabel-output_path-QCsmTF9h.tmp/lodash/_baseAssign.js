define('lodash/_baseAssign', ['exports', 'lodash/_copyObject', 'lodash/keys'], function (exports, _lodash_copyObject, _lodashKeys) {
  'use strict';

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && (0, _lodash_copyObject['default'])(source, (0, _lodashKeys['default'])(source), object);
  }

  exports['default'] = baseAssign;
});