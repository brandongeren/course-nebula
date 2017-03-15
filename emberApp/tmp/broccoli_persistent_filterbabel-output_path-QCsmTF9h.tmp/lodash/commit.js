define('lodash/commit', ['exports', 'lodash/_LodashWrapper'], function (exports, _lodash_LodashWrapper) {
  'use strict';

  /**
   * Executes the chain sequence and returns the wrapped result.
   *
   * @name commit
   * @memberOf _
   * @since 3.2.0
   * @category Seq
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var array = [1, 2];
   * var wrapped = _(array).push(3);
   *
   * console.log(array);
   * // => [1, 2]
   *
   * wrapped = wrapped.commit();
   * console.log(array);
   * // => [1, 2, 3]
   *
   * wrapped.last();
   * // => 3
   *
   * console.log(array);
   * // => [1, 2, 3]
   */
  function wrapperCommit() {
    return new _lodash_LodashWrapper['default'](this.value(), this.__chain__);
  }

  exports['default'] = wrapperCommit;
});