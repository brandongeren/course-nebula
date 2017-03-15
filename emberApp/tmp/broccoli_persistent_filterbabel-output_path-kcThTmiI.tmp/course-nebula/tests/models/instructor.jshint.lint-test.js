define('course-nebula/tests/models/instructor.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/instructor.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/instructor.js should pass jshint.\nmodels/instructor.js: line 1, col 16, \'DS\' is not defined.\nmodels/instructor.js: line 2, col 11, \'DS\' is not defined.\nmodels/instructor.js: line 3, col 13, \'DS\' is not defined.\n\n3 errors');
  });
});