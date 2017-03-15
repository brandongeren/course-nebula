define('lodash/_createRelationalOperation', ['exports', 'lodash/toNumber'], function (exports, _lodashToNumber) {
  'use strict';

  /**
   * Creates a function that performs a relational operation on two values.
   *
   * @private
   * @param {Function} operator The function to perform the operation.
   * @returns {Function} Returns the new relational operation function.
   */
  function createRelationalOperation(operator) {
    return function (value, other) {
      if (!(typeof value == 'string' && typeof other == 'string')) {
        value = (0, _lodashToNumber['default'])(value);
        other = (0, _lodashToNumber['default'])(other);
      }
      return operator(value, other);
    };
  }

  exports['default'] = createRelationalOperation;
});