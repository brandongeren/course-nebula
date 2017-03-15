"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('course-nebula/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
		namespace: 'api'
	});
});
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
define('course-nebula/components/course-listing', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('course-nebula/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('course-nebula/helpers/app-version', ['exports', 'ember', 'course-nebula/config/environment'], function (exports, _ember, _courseNebulaConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _courseNebulaConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('course-nebula/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('course-nebula/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('course-nebula/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'course-nebula/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _courseNebulaConfigEnvironment) {
  var _config$APP = _courseNebulaConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('course-nebula/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('course-nebula/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
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
define('course-nebula/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('course-nebula/initializers/export-application-global', ['exports', 'ember', 'course-nebula/config/environment'], function (exports, _ember, _courseNebulaConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_courseNebulaConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _courseNebulaConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_courseNebulaConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('course-nebula/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('course-nebula/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('course-nebula/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("course-nebula/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('course-nebula/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {

    this.namespace = '/api';

    this.get('/courses', function () {
      return {
        data: [{
          type: 'courses',
          id: 1,
          attributes: {
            number: 'CSCE 10',
            name: 'Introduction to CSE'
          }
        }, {
          type: 'courses',
          id: 2,
          attributes: {
            number: 'CSCE 100',
            name: 'Introduction to Informatics'
          }
        }, {
          type: 'courses',
          id: 3,
          attributes: {
            number: 'CSCE 101',
            name: 'Fundamentals of Computer Science'
          }
        }]
      };
    });
  };
});
define("course-nebula/mirage/scenarios/default", ["exports"], function (exports) {
  exports["default"] = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */

    // server.createList('post', 10);
  };
});
define('course-nebula/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.JSONAPISerializer.extend({});
});
define('course-nebula/models/answer', ['exports'], function (exports) {
    exports['default'] = DS.Model({
        answerText: DS.attr('string'),
        dateOfAnswer: DS.attr('date'),
        answerRating: DS.attr('number')
    });
});
define('course-nebula/models/course', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model({
        courseNumber: _emberData['default'].attr('number'),
        courseName: _emberData['default'].attr('string')
    });
});
define('course-nebula/models/dashboardItem', ['exports'], function (exports) {
    exports['default'] = DS.Model({
        course: DS.belongsTo('course'),
        user: DS.belongsTo('user'),
        notificationFlag: DS.attr('number')
    });
});
define('course-nebula/models/feedback', ['exports'], function (exports) {
    exports['default'] = DS.Model.extend({
        course: DS.belongsTo('course'),
        feedbackText: DS.attr('string'),
        feedbackRating: DS.attr('number'),
        dateOfFeedback: DS.attr('date')
    });
});
define('course-nebula/models/handout', ['exports'], function (exports) {
    exports['default'] = DS.Model({
        course: DS.belongsTo(course),
        handoutKey: DS.attr('string')
    });
});
define('course-nebula/models/instructor', ['exports'], function (exports) {
    exports['default'] = DS.model.extend({
        user: DS.belongsTo('user'),
        course: DS.belongsTo('course')
    });
});
define('course-nebula/models/question', ['exports'], function (exports) {
    exports['default'] = DS.Model({
        course: DS.belongsTo('course'),
        questionText: DS.attr('string'),
        dateOfQuestion: DS.attr('date'),
        questionRating: DS.attr('number'),
        answer: DS.belongsTo('answer')
    });
});
define('course-nebula/models/user', ['exports'], function (exports) {
    exports['default'] = DS.Model.extend({
        username: DS.attr('string'),
        password: DS.attr('string'),
        email: DS.attr('string'),
        userAnsweredQuestions: DS.attr('number')
    });
});
define('course-nebula/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('course-nebula/router', ['exports', 'ember', 'course-nebula/config/environment'], function (exports, _ember, _courseNebulaConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _courseNebulaConfigEnvironment['default'].locationType,
    rootURL: _courseNebulaConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('courses');
    this.route('about');
    this.route('login');
  });

  exports['default'] = Router;
});
define('course-nebula/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('course-nebula/routes/courses', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.get('store').findAll('course');
		}
	});
});
define('course-nebula/routes/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('course-nebula/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("course-nebula/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FPEB4eB7", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbo\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"right tomster\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"About Course Nebula\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n    Course Nebula helps UNL Computer Science and Engineering students with their courses. \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    Users can ask questions about material in a course, or how difficult that course may be. \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    Study guides can be uploaded for a course as well. \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/about.hbs" } });
});
define("course-nebula/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YjWOHjq6", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"menu\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],null,3],[\"text\",\"\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"left links\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"courses\"],null,2],[\"block\",[\"link-to\"],[\"about\"],null,1],[\"text\",\"\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"right links\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t  \\t\"],[\"block\",[\"link-to\"],[\"login\"],null,0],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"body\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Login\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\\tAbout\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\\tCourses\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"left\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"open-element\",\"em\",[]],[\"flush-element\"],[\"text\",\"Course NEBULA\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/application.hbs" } });
});
define("course-nebula/templates/components/course-listing", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Wx9DAOHr", "block": "{\"statements\":[[\"open-element\",\"article\",[]],[\"static-attr\",\"class\",\"listing\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"CSCE \"],[\"append\",[\"unknown\",[\"course\",\"courseNumber\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"detail name\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Course Name:\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"course\",\"courseName\"]],false],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/components/course-listing.hbs" } });
});
define("course-nebula/templates/courses", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NvPxYHv9", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbo\"],[\"flush-element\"],[\"text\",\"\\n     \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Available Courses\"],[\"close-element\"],[\"text\",\"\\n     \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n\\tThis is a placeholder page. Once completed, the list of courses available for students to view will be listed here with hyperlinks.\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tOnce a student clicks a link, it will bring them to a database-populated page. We will not need to make a separate subpage for each class.\\n     \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"     \\t\"],[\"append\",[\"helper\",[\"course-listing\"],null,[[\"course\"],[[\"get\",[\"singleCourse\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"singleCourse\"]}],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/courses.hbs" } });
});
define("course-nebula/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PMSrQRnU", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"login-page\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"login-form\"],[\"flush-element\"],[\"text\",\"\\n  \\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"placeholder\",\"value\"],[\"email\",\"email\",[\"get\",[\"email\"]]]]],false],[\"text\",\"\\n  \\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"placeholder\",\"type\",\"value\"],[\"password\",\"password\",\"password\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n  \\t\\t\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"login\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/login.hbs" } });
});
define('course-nebula/tests/mirage/mirage/config.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass jshint.');
  });
});
define('course-nebula/tests/mirage/mirage/scenarios/default.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/scenarios/default.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass jshint.');
  });
});
define('course-nebula/tests/mirage/mirage/serializers/application.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass jshint.');
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('course-nebula/config/environment', ['ember'], function(Ember) {
  var prefix = 'course-nebula';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("course-nebula/app")["default"].create({"name":"course-nebula","version":"0.0.0+8962d610"});
}

/* jshint ignore:end */
//# sourceMappingURL=course-nebula.map
