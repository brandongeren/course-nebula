define('course-nebula/tests/integration/components/course-listing-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/course-listing-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/course-listing-test.js should pass jshint.');
  });
});