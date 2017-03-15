define('course-nebula/tests/models/user.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/user.js should pass jshint.\nmodels/user.js: line 1, col 16, \'DS\' is not defined.\nmodels/user.js: line 2, col 15, \'DS\' is not defined.\nmodels/user.js: line 3, col 15, \'DS\' is not defined.\nmodels/user.js: line 4, col 12, \'DS\' is not defined.\nmodels/user.js: line 5, col 28, \'DS\' is not defined.\n\n5 errors');
  });
});