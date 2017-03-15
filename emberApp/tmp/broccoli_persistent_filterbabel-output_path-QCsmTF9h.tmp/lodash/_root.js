define('lodash/_root', ['exports', 'lodash/_freeGlobal'], function (exports, _lodash_freeGlobal) {
  'use strict';

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _lodash_freeGlobal['default'] || freeSelf || Function('return this')();

  exports['default'] = root;
});