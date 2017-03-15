define('lodash/_cloneSet', ['exports', 'lodash/_addSetEntry', 'lodash/_arrayReduce', 'lodash/_setToArray'], function (exports, _lodash_addSetEntry, _lodash_arrayReduce, _lodash_setToArray) {
  'use strict';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1;

  /**
   * Creates a clone of `set`.
   *
   * @private
   * @param {Object} set The set to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned set.
   */
  function cloneSet(set, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc((0, _lodash_setToArray['default'])(set), CLONE_DEEP_FLAG) : (0, _lodash_setToArray['default'])(set);
    return (0, _lodash_arrayReduce['default'])(array, _lodash_addSetEntry['default'], new set.constructor());
  }

  exports['default'] = cloneSet;
});