define('lodash/_createCompounder', ['exports', 'lodash/_arrayReduce', 'lodash/deburr', 'lodash/words'], function (exports, _lodash_arrayReduce, _lodashDeburr, _lodashWords) {
  'use strict';

  /** Used to compose unicode capture groups. */
  var rsApos = '[\'’]';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Creates a function like `_.camelCase`.
   *
   * @private
   * @param {Function} callback The function to combine each word.
   * @returns {Function} Returns the new compounder function.
   */
  function createCompounder(callback) {
    return function (string) {
      return (0, _lodash_arrayReduce['default'])((0, _lodashWords['default'])((0, _lodashDeburr['default'])(string).replace(reApos, '')), callback, '');
    };
  }

  exports['default'] = createCompounder;
});