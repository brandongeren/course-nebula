define('ember-qunit', ['exports', 'ember-qunit/module-for', 'ember-qunit/module-for-component', 'ember-qunit/module-for-model', 'ember-qunit/adapter', 'ember-test-helpers', 'qunit'], function (exports, _emberQunitModuleFor, _emberQunitModuleForComponent, _emberQunitModuleForModel, _emberQunitAdapter, _emberTestHelpers, _qunit) {
  'use strict';

  Object.defineProperty(exports, 'module', {
    enumerable: true,
    get: function get() {
      return _qunit.module;
    }
  });
  Object.defineProperty(exports, 'test', {
    enumerable: true,
    get: function get() {
      return _qunit.test;
    }
  });
  Object.defineProperty(exports, 'skip', {
    enumerable: true,
    get: function get() {
      return _qunit.skip;
    }
  });
  Object.defineProperty(exports, 'only', {
    enumerable: true,
    get: function get() {
      return _qunit.only;
    }
  });
  exports.moduleFor = _emberQunitModuleFor['default'];
  exports.moduleForComponent = _emberQunitModuleForComponent['default'];
  exports.moduleForModel = _emberQunitModuleForModel['default'];
  exports.setResolver = _emberTestHelpers.setResolver;
  exports.QUnitAdapter = _emberQunitAdapter['default'];
});