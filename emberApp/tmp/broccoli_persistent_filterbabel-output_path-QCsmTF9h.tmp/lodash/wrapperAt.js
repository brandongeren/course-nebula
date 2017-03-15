define('lodash/wrapperAt', ['exports', 'lodash/_LazyWrapper', 'lodash/_LodashWrapper', 'lodash/_baseAt', 'lodash/_flatRest', 'lodash/_isIndex', 'lodash/thru'], function (exports, _lodash_LazyWrapper, _lodash_LodashWrapper, _lodash_baseAt, _lodash_flatRest, _lodash_isIndex, _lodashThru) {
  'use strict';

  /**
   * This method is the wrapper version of `_.at`.
   *
   * @name at
   * @memberOf _
   * @since 1.0.0
   * @category Seq
   * @param {...(string|string[])} [paths] The property paths to pick.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
   *
   * _(object).at(['a[0].b.c', 'a[1]']).value();
   * // => [3, 4]
   */
  var wrapperAt = (0, _lodash_flatRest['default'])(function (paths) {
    var length = paths.length,
        start = length ? paths[0] : 0,
        value = this.__wrapped__,
        interceptor = function interceptor(object) {
      return (0, _lodash_baseAt['default'])(object, paths);
    };

    if (length > 1 || this.__actions__.length || !(value instanceof _lodash_LazyWrapper['default']) || !(0, _lodash_isIndex['default'])(start)) {
      return this.thru(interceptor);
    }
    value = value.slice(start, +start + (length ? 1 : 0));
    value.__actions__.push({
      'func': _lodashThru['default'],
      'args': [interceptor],
      'thisArg': undefined
    });
    return new _lodash_LodashWrapper['default'](value, this.__chain__).thru(function (array) {
      if (length && !array.length) {
        array.push(undefined);
      }
      return array;
    });
  });

  exports['default'] = wrapperAt;
});