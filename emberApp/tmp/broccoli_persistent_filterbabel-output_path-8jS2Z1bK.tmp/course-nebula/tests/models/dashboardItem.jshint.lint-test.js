define('course-nebula/tests/models/dashboardItem.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/dashboardItem.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/dashboardItem.js should pass jshint.\nmodels/dashboardItem.js: line 1, col 16, \'DS\' is not defined.\nmodels/dashboardItem.js: line 2, col 13, \'DS\' is not defined.\nmodels/dashboardItem.js: line 3, col 11, \'DS\' is not defined.\nmodels/dashboardItem.js: line 4, col 23, \'DS\' is not defined.\n\n4 errors');
  });
});