define('lodash/date', ['exports', 'lodash/now', 'lodash/date.default'], function (exports, _lodashNow, _lodashDateDefault) {
  'use strict';

  Object.defineProperty(exports, 'now', {
    enumerable: true,
    get: function get() {
      return _lodashNow['default'];
    }
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _lodashDateDefault['default'];
    }
  });
});