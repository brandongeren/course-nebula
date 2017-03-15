define('course-nebula/tests/models/handout.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/handout.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/handout.js should pass jshint.\nmodels/handout.js: line 1, col 16, \'DS\' is not defined.\nmodels/handout.js: line 2, col 13, \'DS\' is not defined.\nmodels/handout.js: line 3, col 17, \'DS\' is not defined.\nmodels/handout.js: line 2, col 26, \'course\' is not defined.\n\n4 errors');
  });
});