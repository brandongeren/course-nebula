define('course-nebula/app', ['exports', 'ember', 'course-nebula/resolver', 'ember-load-initializers', 'course-nebula/config/environment'], function (exports, _ember, _courseNebulaResolver, _emberLoadInitializers, _courseNebulaConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _courseNebulaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _courseNebulaConfigEnvironment['default'].podModulePrefix,
    Resolver: _courseNebulaResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _courseNebulaConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});