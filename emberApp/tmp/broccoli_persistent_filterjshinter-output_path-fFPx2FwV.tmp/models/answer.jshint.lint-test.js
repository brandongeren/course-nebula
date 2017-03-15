QUnit.module('JSHint | models/answer.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/answer.js should pass jshint.\nmodels/answer.js: line 1, col 16, \'DS\' is not defined.\nmodels/answer.js: line 2, col 17, \'DS\' is not defined.\nmodels/answer.js: line 3, col 19, \'DS\' is not defined.\nmodels/answer.js: line 4, col 19, \'DS\' is not defined.\n\n4 errors');
});
