define('lodash/_baseConforms', ['exports', 'lodash/_baseConformsTo', 'lodash/keys'], function (exports, _lodash_baseConformsTo, _lodashKeys) {
  'use strict';

  /**
   * The base implementation of `_.conforms` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property predicates to conform to.
   * @returns {Function} Returns the new spec function.
   */
  function baseConforms(source) {
    var props = (0, _lodashKeys['default'])(source);
    return function (object) {
      return (0, _lodash_baseConformsTo['default'])(object, source, props);
    };
  }

  exports['default'] = baseConforms;
});