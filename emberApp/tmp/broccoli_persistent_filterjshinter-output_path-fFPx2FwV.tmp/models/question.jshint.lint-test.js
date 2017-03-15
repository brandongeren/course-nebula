QUnit.module('JSHint | models/question.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/question.js should pass jshint.\nmodels/question.js: line 1, col 16, \'DS\' is not defined.\nmodels/question.js: line 2, col 13, \'DS\' is not defined.\nmodels/question.js: line 3, col 19, \'DS\' is not defined.\nmodels/question.js: line 4, col 21, \'DS\' is not defined.\nmodels/question.js: line 5, col 21, \'DS\' is not defined.\nmodels/question.js: line 6, col 13, \'DS\' is not defined.\n\n6 errors');
});
