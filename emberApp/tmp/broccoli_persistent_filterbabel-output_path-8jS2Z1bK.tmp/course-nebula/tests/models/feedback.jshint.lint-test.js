define('course-nebula/tests/models/feedback.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/feedback.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/feedback.js should pass jshint.\nmodels/feedback.js: line 1, col 16, \'DS\' is not defined.\nmodels/feedback.js: line 2, col 13, \'DS\' is not defined.\nmodels/feedback.js: line 3, col 19, \'DS\' is not defined.\nmodels/feedback.js: line 4, col 21, \'DS\' is not defined.\nmodels/feedback.js: line 5, col 21, \'DS\' is not defined.\n\n5 errors');
  });
});