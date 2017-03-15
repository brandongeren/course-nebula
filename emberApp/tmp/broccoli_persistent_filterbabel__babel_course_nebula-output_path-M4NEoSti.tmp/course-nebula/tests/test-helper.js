define('course-nebula/tests/test-helper', ['exports', 'course-nebula/tests/helpers/resolver', 'ember-qunit'], function (exports, _courseNebulaTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_courseNebulaTestsHelpersResolver['default']);
});