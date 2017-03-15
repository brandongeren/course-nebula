define('lodash/invert', ['exports', 'lodash/constant', 'lodash/_createInverter', 'lodash/identity'], function (exports, _lodashConstant, _lodash_createInverter, _lodashIdentity) {
  'use strict';

  /**
   * Creates an object composed of the inverted keys and values of `object`.
   * If `object` contains duplicate values, subsequent values overwrite
   * property assignments of previous values.
   *
   * @static
   * @memberOf _
   * @since 0.7.0
   * @category Object
   * @param {Object} object The object to invert.
   * @returns {Object} Returns the new inverted object.
   * @example
   *
   * var object = { 'a': 1, 'b': 2, 'c': 1 };
   *
   * _.invert(object);
   * // => { '1': 'c', '2': 'b' }
   */
  var invert = (0, _lodash_createInverter['default'])(function (result, value, key) {
    result[value] = key;
  }, (0, _lodashConstant['default'])(_lodashIdentity['default']));

  exports['default'] = invert;
});