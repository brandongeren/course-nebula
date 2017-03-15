define('lodash/zipObject', ['exports', 'lodash/_assignValue', 'lodash/_baseZipObject'], function (exports, _lodash_assignValue, _lodash_baseZipObject) {
  'use strict';

  /**
   * This method is like `_.fromPairs` except that it accepts two arrays,
   * one of property identifiers and one of corresponding values.
   *
   * @static
   * @memberOf _
   * @since 0.4.0
   * @category Array
   * @param {Array} [props=[]] The property identifiers.
   * @param {Array} [values=[]] The property values.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.zipObject(['a', 'b'], [1, 2]);
   * // => { 'a': 1, 'b': 2 }
   */
  function zipObject(props, values) {
    return (0, _lodash_baseZipObject['default'])(props || [], values || [], _lodash_assignValue['default']);
  }

  exports['default'] = zipObject;
});