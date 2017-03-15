define('lodash/_LodashWrapper', ['exports', 'lodash/_baseCreate', 'lodash/_baseLodash'], function (exports, _lodash_baseCreate, _lodash_baseLodash) {
  'use strict';

  /**
   * The base constructor for creating `lodash` wrapper objects.
   *
   * @private
   * @param {*} value The value to wrap.
   * @param {boolean} [chainAll] Enable explicit method chain sequences.
   */
  function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
  }

  LodashWrapper.prototype = (0, _lodash_baseCreate['default'])(_lodash_baseLodash['default'].prototype);
  LodashWrapper.prototype.constructor = LodashWrapper;

  exports['default'] = LodashWrapper;
});