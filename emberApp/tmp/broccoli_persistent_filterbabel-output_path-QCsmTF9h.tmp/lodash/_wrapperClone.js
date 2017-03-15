define('lodash/_wrapperClone', ['exports', 'lodash/_LazyWrapper', 'lodash/_LodashWrapper', 'lodash/_copyArray'], function (exports, _lodash_LazyWrapper, _lodash_LodashWrapper, _lodash_copyArray) {
  'use strict';

  /**
   * Creates a clone of `wrapper`.
   *
   * @private
   * @param {Object} wrapper The wrapper to clone.
   * @returns {Object} Returns the cloned wrapper.
   */
  function wrapperClone(wrapper) {
    if (wrapper instanceof _lodash_LazyWrapper['default']) {
      return wrapper.clone();
    }
    var result = new _lodash_LodashWrapper['default'](wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = (0, _lodash_copyArray['default'])(wrapper.__actions__);
    result.__index__ = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
  }

  exports['default'] = wrapperClone;
});