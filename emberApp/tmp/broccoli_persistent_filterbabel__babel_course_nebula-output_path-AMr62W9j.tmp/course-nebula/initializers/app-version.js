define('course-nebula/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'course-nebula/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _courseNebulaConfigEnvironment) {
  var _config$APP = _courseNebulaConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});