define('lodash/math.default', ['exports', 'lodash/add', 'lodash/ceil', 'lodash/divide', 'lodash/floor', 'lodash/max', 'lodash/maxBy', 'lodash/mean', 'lodash/meanBy', 'lodash/min', 'lodash/minBy', 'lodash/multiply', 'lodash/round', 'lodash/subtract', 'lodash/sum', 'lodash/sumBy'], function (exports, _lodashAdd, _lodashCeil, _lodashDivide, _lodashFloor, _lodashMax, _lodashMaxBy, _lodashMean, _lodashMeanBy, _lodashMin, _lodashMinBy, _lodashMultiply, _lodashRound, _lodashSubtract, _lodashSum, _lodashSumBy) {
  'use strict';

  exports['default'] = {
    add: _lodashAdd['default'], ceil: _lodashCeil['default'], divide: _lodashDivide['default'], floor: _lodashFloor['default'], max: _lodashMax['default'],
    maxBy: _lodashMaxBy['default'], mean: _lodashMean['default'], meanBy: _lodashMeanBy['default'], min: _lodashMin['default'], minBy: _lodashMinBy['default'],
    multiply: _lodashMultiply['default'], round: _lodashRound['default'], subtract: _lodashSubtract['default'], sum: _lodashSum['default'], sumBy: _lodashSumBy['default']
  };
});