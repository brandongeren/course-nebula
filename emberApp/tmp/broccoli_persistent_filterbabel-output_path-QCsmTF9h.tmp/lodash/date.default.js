define('lodash/date.default', ['exports', 'lodash/now'], function (exports, _lodashNow) {
  'use strict';

  exports['default'] = {
    now: _lodashNow['default']
  };
});