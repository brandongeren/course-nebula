define('course-nebula/tests/helpers/resolver', ['exports', 'course-nebula/resolver', 'course-nebula/config/environment'], function (exports, _courseNebulaResolver, _courseNebulaConfigEnvironment) {

  var resolver = _courseNebulaResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _courseNebulaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _courseNebulaConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});