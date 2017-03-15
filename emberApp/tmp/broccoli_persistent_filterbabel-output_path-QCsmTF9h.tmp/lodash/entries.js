define('lodash/entries', ['exports', 'lodash/toPairs'], function (exports, _lodashToPairs) {
  'use strict';

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _lodashToPairs['default'];
    }
  });
});