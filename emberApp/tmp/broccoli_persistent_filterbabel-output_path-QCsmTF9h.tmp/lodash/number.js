define('lodash/number', ['exports', 'lodash/clamp', 'lodash/inRange', 'lodash/random', 'lodash/number.default'], function (exports, _lodashClamp, _lodashInRange, _lodashRandom, _lodashNumberDefault) {
  'use strict';

  Object.defineProperty(exports, 'clamp', {
    enumerable: true,
    get: function get() {
      return _lodashClamp['default'];
    }
  });
  Object.defineProperty(exports, 'inRange', {
    enumerable: true,
    get: function get() {
      return _lodashInRange['default'];
    }
  });
  Object.defineProperty(exports, 'random', {
    enumerable: true,
    get: function get() {
      return _lodashRandom['default'];
    }
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _lodashNumberDefault['default'];
    }
  });
});