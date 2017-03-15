QUnit.module('JSHint | adapters/application.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 4, col 21, Expected \'}\' to match \'{\' from line 3 and instead saw \';\'.\nadapters/application.js: line 5, col 1, Expected \')\' and instead saw \'}\'.\nadapters/application.js: line 5, col 2, Missing semicolon.\nadapters/application.js: line 5, col 2, Expected an identifier and instead saw \')\'.\nadapters/application.js: line 5, col 2, Expected an assignment or function call and instead saw an expression.\n\n5 errors');
});
