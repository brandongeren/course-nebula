define('lodash/_isMaskable', ['exports', 'lodash/_coreJsData', 'lodash/isFunction', 'lodash/stubFalse'], function (exports, _lodash_coreJsData, _lodashIsFunction, _lodashStubFalse) {
  'use strict';

  /**
   * Checks if `func` is capable of being masked.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
   */
  var isMaskable = _lodash_coreJsData['default'] ? _lodashIsFunction['default'] : _lodashStubFalse['default'];

  exports['default'] = isMaskable;
});