define('lodash/_defineProperty', ['exports', 'lodash/_getNative'], function (exports, _lodash_getNative) {
  'use strict';

  var defineProperty = (function () {
    try {
      var func = (0, _lodash_getNative['default'])(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  })();

  exports['default'] = defineProperty;
});