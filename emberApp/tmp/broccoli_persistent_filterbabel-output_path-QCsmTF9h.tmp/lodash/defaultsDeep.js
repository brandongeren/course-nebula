define('lodash/defaultsDeep', ['exports', 'lodash/_apply', 'lodash/_baseRest', 'lodash/_customDefaultsMerge', 'lodash/mergeWith'], function (exports, _lodash_apply, _lodash_baseRest, _lodash_customDefaultsMerge, _lodashMergeWith) {
  'use strict';

  /**
   * This method is like `_.defaults` except that it recursively assigns
   * default properties.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 3.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaults
   * @example
   *
   * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
   * // => { 'a': { 'b': 2, 'c': 3 } }
   */
  var defaultsDeep = (0, _lodash_baseRest['default'])(function (args) {
    args.push(undefined, _lodash_customDefaultsMerge['default']);
    return (0, _lodash_apply['default'])(_lodashMergeWith['default'], undefined, args);
  });

  exports['default'] = defaultsDeep;
});