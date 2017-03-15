define('lodash/overArgs', ['exports', 'lodash/_apply', 'lodash/_arrayMap', 'lodash/_baseFlatten', 'lodash/_baseIteratee', 'lodash/_baseRest', 'lodash/_baseUnary', 'lodash/_castRest', 'lodash/isArray'], function (exports, _lodash_apply, _lodash_arrayMap, _lodash_baseFlatten, _lodash_baseIteratee, _lodash_baseRest, _lodash_baseUnary, _lodash_castRest, _lodashIsArray) {
  'use strict';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin = Math.min;

  /**
   * Creates a function that invokes `func` with its arguments transformed.
   *
   * @static
   * @since 4.0.0
   * @memberOf _
   * @category Function
   * @param {Function} func The function to wrap.
   * @param {...(Function|Function[])} [transforms=[_.identity]]
   *  The argument transforms.
   * @returns {Function} Returns the new function.
   * @example
   *
   * function doubled(n) {
   *   return n * 2;
   * }
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var func = _.overArgs(function(x, y) {
   *   return [x, y];
   * }, [square, doubled]);
   *
   * func(9, 3);
   * // => [81, 6]
   *
   * func(10, 5);
   * // => [100, 10]
   */
  var overArgs = (0, _lodash_castRest['default'])(function (func, transforms) {
    transforms = transforms.length == 1 && (0, _lodashIsArray['default'])(transforms[0]) ? (0, _lodash_arrayMap['default'])(transforms[0], (0, _lodash_baseUnary['default'])(_lodash_baseIteratee['default'])) : (0, _lodash_arrayMap['default'])((0, _lodash_baseFlatten['default'])(transforms, 1), (0, _lodash_baseUnary['default'])(_lodash_baseIteratee['default']));

    var funcsLength = transforms.length;
    return (0, _lodash_baseRest['default'])(function (args) {
      var index = -1,
          length = nativeMin(args.length, funcsLength);

      while (++index < length) {
        args[index] = transforms[index].call(this, args[index]);
      }
      return (0, _lodash_apply['default'])(func, this, args);
    });
  });

  exports['default'] = overArgs;
});