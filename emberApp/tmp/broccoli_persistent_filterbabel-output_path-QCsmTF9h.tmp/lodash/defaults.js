define('lodash/defaults', ['exports', 'lodash/_apply', 'lodash/assignInWith', 'lodash/_baseRest', 'lodash/_customDefaultsAssignIn'], function (exports, _lodash_apply, _lodashAssignInWith, _lodash_baseRest, _lodash_customDefaultsAssignIn) {
  'use strict';

  /**
   * Assigns own and inherited enumerable string keyed properties of source
   * objects to the destination object for all destination properties that
   * resolve to `undefined`. Source objects are applied from left to right.
   * Once a property is set, additional values of the same property are ignored.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaultsDeep
   * @example
   *
   * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */
  var defaults = (0, _lodash_baseRest['default'])(function (args) {
    args.push(undefined, _lodash_customDefaultsAssignIn['default']);
    return (0, _lodash_apply['default'])(_lodashAssignInWith['default'], undefined, args);
  });

  exports['default'] = defaults;
});