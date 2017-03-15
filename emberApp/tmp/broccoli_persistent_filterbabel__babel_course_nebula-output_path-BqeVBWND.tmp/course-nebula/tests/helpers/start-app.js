define('course-nebula/tests/helpers/start-app', ['exports', 'ember', 'course-nebula/app', 'course-nebula/config/environment'], function (exports, _ember, _courseNebulaApp, _courseNebulaConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _courseNebulaConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _courseNebulaApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});