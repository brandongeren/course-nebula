define('lodash/_createSet', ['exports', 'lodash/_Set', 'lodash/noop', 'lodash/_setToArray'], function (exports, _lodash_Set, _lodashNoop, _lodash_setToArray) {
  'use strict';

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /**
   * Creates a set object of `values`.
   *
   * @private
   * @param {Array} values The values to add to the set.
   * @returns {Object} Returns the new set.
   */
  var createSet = !(_lodash_Set['default'] && 1 / (0, _lodash_setToArray['default'])(new _lodash_Set['default']([, -0]))[1] == INFINITY) ? _lodashNoop['default'] : function (values) {
    return new _lodash_Set['default'](values);
  };

  exports['default'] = createSet;
});