define('lodash/_initCloneObject', ['exports', 'lodash/_baseCreate', 'lodash/_getPrototype', 'lodash/_isPrototype'], function (exports, _lodash_baseCreate, _lodash_getPrototype, _lodash_isPrototype) {
  'use strict';

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return typeof object.constructor == 'function' && !(0, _lodash_isPrototype['default'])(object) ? (0, _lodash_baseCreate['default'])((0, _lodash_getPrototype['default'])(object)) : {};
  }

  exports['default'] = initCloneObject;
});