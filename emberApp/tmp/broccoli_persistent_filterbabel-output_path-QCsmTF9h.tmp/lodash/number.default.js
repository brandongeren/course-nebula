define('lodash/number.default', ['exports', 'lodash/clamp', 'lodash/inRange', 'lodash/random'], function (exports, _lodashClamp, _lodashInRange, _lodashRandom) {
  'use strict';

  exports['default'] = {
    clamp: _lodashClamp['default'], inRange: _lodashInRange['default'], random: _lodashRandom['default']
  };
});