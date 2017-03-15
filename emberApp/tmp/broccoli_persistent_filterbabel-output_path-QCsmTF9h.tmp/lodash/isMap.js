define('lodash/isMap', ['exports', 'lodash/_baseIsMap', 'lodash/_baseUnary', 'lodash/_nodeUtil'], function (exports, _lodash_baseIsMap, _lodash_baseUnary, _lodash_nodeUtil) {
  'use strict';

  /* Node helper references. */
  var nodeIsMap = _lodash_nodeUtil['default'] && _lodash_nodeUtil['default'].isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? (0, _lodash_baseUnary['default'])(nodeIsMap) : _lodash_baseIsMap['default'];

  exports['default'] = isMap;
});