define('course-nebula/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'course-nebula/config/environment', 'course-nebula/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _emberCliMirageUtilsReadModules, _courseNebulaConfigEnvironment, _courseNebulaMirageConfig, _emberCliMirageServer, _lodashAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_courseNebulaConfigEnvironment['default'].environment, _courseNebulaConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_courseNebulaConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _courseNebulaConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashAssign['default'])(modules, { environment: environment, baseConfig: _courseNebulaMirageConfig['default'], testConfig: _courseNebulaMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});