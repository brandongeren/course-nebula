"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('course-nebula/adapters/application', ['exports', 'ember-data', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, _emberData, _emberSimpleAuthMixinsDataAdapterMixin) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    coalesceFindRequests: true,
    namespace: 'api/v1'
  });

  /*export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    authorizer: 'authorizer:oauth2',
    namespace: 'api'
  });*/
});
//this is dependent on production/development environment
//It is configured in config/environment.js
//host: ClientENV.hostUrl
//add IP from $DOCKER_HOST if --docker flag is set
//host
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
define('course-nebula/authenticators/custom', ['exports', 'ember', 'simple-auth/authenticators/base'], function (exports, _ember, _simpleAuthAuthenticatorsBase) {
    exports['default'] = _simpleAuthAuthenticatorsBase['default'].extend({
        tokenEndpoint: 'http://localhost:3001/sessions/create',
        restore: function restore(data) {
            return new _ember['default'].RSVP.Promise(function (resolve, reject) {
                if (!_ember['default'].isEmpty(data.token)) {
                    resolve(data);
                } else {
                    reject();
                }
            });
        },

        authenticate: function authenticate(options) {
            var _this = this;

            return new _ember['default'].RSVP.Promise(function (resolve, reject) {
                _ember['default'].$.ajax({
                    url: _this.tokenEndpoint,
                    type: 'POST',
                    data: JSON.stringify({
                        username: options.identification,
                        password: options.password
                    }),
                    contentType: 'application/json;charset=utf-8',
                    dataType: 'json'
                }).then(function (response) {
                    _ember['default'].run(function () {
                        resolve({
                            token: response.id_token
                        });
                    });
                }, function (xhr, status, error) {
                    var response = xhr.responseText;
                    _ember['default'].run(function () {
                        reject(response);
                    });
                });
            });
        },

        invalidate: function invalidate() {
            console.log('invalidate...');
            return _ember['default'].RSVP.resolve();
        }
    });
});
define('course-nebula/authenticators/oauth2', ['exports', 'ember-simple-auth/authenticators/oauth2-password-grant'], function (exports, _emberSimpleAuthAuthenticatorsOauth2PasswordGrant) {
    exports['default'] = _emberSimpleAuthAuthenticatorsOauth2PasswordGrant['default'].extend();
    exports['default'] = _emberSimpleAuthAuthenticatorsOauth2PasswordGrant['default'].extend({
        serverTokenEndpoint: '/protected'
    });

    this.get('session').authenticate('authenticator:some', data);
});
define('course-nebula/authorizers/custom', ['exports', 'ember', 'simple-auth/authorizers/base'], function (exports, _ember, _simpleAuthAuthorizersBase) {
    exports['default'] = _simpleAuthAuthorizersBase['default'].extend({
        authorize: function authorize(jqXHR, requestOptions) {
            var accessToken = this.get('session.content.secure.token');
            if (this.get('session.isAuthenticated') && !_ember['default'].isEmpty(accessToken)) {
                jqXHR.setRequestHeader('Authorization', 'Bearer ' + accessToken);
            }
        }
    });
});
define('course-nebula/authorizers/oauth2', ['exports', 'ember-simple-auth/authorizers/oauth2-bearer', 'ember'], function (exports, _emberSimpleAuthAuthorizersOauth2Bearer, _ember) {
  exports['default'] = _emberSimpleAuthAuthorizersOauth2Bearer['default'].extend();

  this.get('session').authorize('authorizer:oauth2', function (headerName, headerValue) {
    var headers = {};
    headers[headerName] = headerValue;
    _ember['default'].$.ajax('/secret-data', { headers: headers });
  });
});
define('course-nebula/components/course-listing', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('course-nebula/components/file-uploader', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: 'uploader dropzone'.w(),
    classNameBindings: 'isDragging isDisabled:is-disabled'.w(),
    attributeBindings: 'data-uploader'.w(),
    'data-uploader': 'true',
    isDisabled: false,

    dragOver: function dragOver(event) {
      // this is needed to avoid the default behaviour from the browser
      event.preventDefault();
    },

    dragEnter: function dragEnter(event) {
      event.preventDefault();
      this.set('isDragging', true);
    },

    dragLeave: function dragLeave(event) {
      event.preventDefault();
      this.set('isDragging', false);
    },

    drop: function drop(event) {
      var file;

      if (!this.get('isDisabled')) {
        event.preventDefault();
        this.set('isDragging', false);

        // only 1 file for now
        file = event.dataTransfer.files[0];
        this.set('isDisabled', true);
        this.sendAction('fileInputChanged', file);
      } else {
        console.error('you can only upload on file at the time');
      }
    },

    click: function click(_ref) {
      var _this = this;

      var target = _ref.target;

      var $inputField, file;

      if (target.tagName.toLocaleLowerCase() === 'input') {
        return;
      }

      $inputField = this.$('input');

      $inputField[0].click();
      $inputField.on('change', function (_ref2) {
        var preventDefault = _ref2.preventDefault;
        var stopPropagation = _ref2.stopPropagation;

        preventDefault();
        stopPropagation();
        file = $inputField[0].files[0];
        _this.sendAction('fileInputChanged', file);

        return false;
      });
    },

    didInsertElement: function didInsertElement() {
      var _this2 = this;

      this.$().on('uploadProgress', function (_ref3) {
        var progress = _ref3.progress;

        if (progress === 1) {
          _this2.set('isDisabled', false);
          _this2.$('.progress').css({ width: 0 + '%' });
        } else {
          _this2.$('.progress').css({ width: progress * 100 + '%' });
        }

        _this2.sendAction('uploadProgress', progress);
      });
    }

  });
});
define('course-nebula/components/list-filter', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['list-filter'],
    value: '',

    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      this.get('filter')('').then(function (results) {
        return _this.set('results', results);
      });
    },

    actions: {
      handleFilterEntry: function handleFilterEntry() {
        var _this2 = this;

        var filterInputValue = this.get('value');
        var filterAction = this.get('filter');
        filterAction(filterInputValue).then(function (filterResults) {
          return _this2.set('results', filterResults);
        });
      }
    }
  });
});
define('course-nebula/components/login-form', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        authenticator: 'authenticator:custom',
        actions: {
            authenticate: function authenticate() {
                var _this = this;

                var credentials = this.getProperties('identification', 'password');
                this.get('session').authenticate('authenticator:custom', credentials)['catch'](function (message) {
                    _this.set('errorMessage', message);
                });
            }
        }
    });
});
define('course-nebula/components/question-listing', ['exports', 'ember'], function (exports, _ember) {
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
define('course-nebula/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    /* session: Ember.inject.service('session'),
      actions: {
       invalidateSession() {
         this.get('session').invalidate();
       }
    <<<<<<< HEAD
    <<<<<<< HEAD
    =======
    >>>>>>> 3dd51c7... navigation bar almost worked
     }*/

    hideLoginButtonRoutes: ['courses', 'show', 'ask'],
    isLoginButtonVisible: _ember['default'].computed('currentRouteName', function () {
      return this.get('hideLoginButtonRoutes').indexOf(this.get('currentRouteName')) === -1;
    })
  });
});
define('course-nebula/controllers/courses/feedback', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('course-nebula/controllers/courses/show/ask', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			savequestion: function savequestion() {
				var text = this.get('text');
				var date = new Date();
				var course = this.get('model');
				var rating = 1;
				var question = this.get('store').createRecord('question', {
					text: text,
					date: date,
					courseN: this.get('model'),
					rating: rating
				});

				this.set('text', '');
				this.set('course', '');
				question.save();
				this.transitionToRoute('courses');
			}
		}
	});
});
define('course-nebula/controllers/courses/show/feedback', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			savefeedback: function savefeedback() {
				var text = this.get('text');
				var date = new Date();
				var course = this.get('model');
				var rating = 1;
				var feedback = this.get('store').createRecord('feedback', {
					text: text,
					date: date,
					courseN: this.get('model'),
					rating: rating
				});

				this.set('text', '');
				this.set('course', '');
				feedback.save();
				this.transitionToRoute('courses');
			}
		}
	});
});
define('course-nebula/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      filterByClass: function filterByClass(param) {
        if (param !== '') {
          return this.get('store').query('courses', { number: param });
        } else {
          return this.get('store').findAll('courses');
        }
      }
    }
  });
});
define('course-nebula/controllers/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),

    actions: {
      authenticate: function authenticate() {
        var _this = this;

        var _getProperties = this.getProperties('identification', 'password');

        var identification = _getProperties.identification;
        var password = _getProperties.password;

        this.get('session').authenticate('authenticator:oauth2', identification, password)['catch'](function (reason) {
          _this.set('errorMessage', reason.error || reason);
        });
      }
    }
  });
});
define('course-nebula/controllers/register', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			authenticate: function authenticate() {
				var fName = this.get('fname');
				var lName = this.get('lname');
				var email = this.get('email');
				var username = this.get('username');
				var password = this.get('password');

				var newUser = this.get('store').createRecord('user', {
					Username: username,
					password: password,
					email: email,
					userAnsweredQuestions: 0
				});

				newUser.save();
				this.transitionToRoute('courses');
			}
		}
	});
});
define('course-nebula/controllers/sessions', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		assets: [],
		uploader: _ember['default'].inject.service('dropbox-uploader'),

		initializeUploader: (function () {
			this.set('uploader.accessToken', this.get('model.accessToken'));
		}).observes('model.accessToken'),

		actions: {
			receiveFile: function receiveFile(file) {
				var _this = this;

				this.set('uploadDisabled', true);

				this.get('uploader').upload(file).then(function (file) {
					var asset = _this.store.createRecord('asset', file);
					asset.save();

					_this.get('assets').pushObject(asset);
					_this.set('isDownloading', false);
				});
			},

			uploadProgress: function uploadProgress(progress) {
				if (progress === 1) {
					this.set('isDownloading', true);
				}
			},

			downloadFile: function downloadFile(file) {
				var _this2 = this;

				this.set('isDownloading', true);
				this.get('uploader').download(file).then(function (objectUrl) {
					window.open(objectUrl);
					_this2.set('isDownloading', false);
				});
			}
		}
	});
});
define('course-nebula/helpers/app-version', ['exports', 'ember', 'course-nebula/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _courseNebulaConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _courseNebulaConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

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
define('course-nebula/initializers/ember-simple-auth', ['exports', 'course-nebula/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _courseNebulaConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
  exports['default'] = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _courseNebulaConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _courseNebulaConfigEnvironment['default'].rootURL || _courseNebulaConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
    }
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
define('course-nebula/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _emberSimpleAuthInstanceInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',

    initialize: function initialize(instance) {
      (0, _emberSimpleAuthInstanceInitializersSetupSessionRestoration['default'])(instance);
    }
  };
});
define('course-nebula/mirage/config', ['exports'], function (exports) {
      exports['default'] = function () {

            this.namespace = '/api';
            var courses = [{
                  type: 'courses',
                  id: 'CSCE10',
                  attributes: {
                        number: "10",
                        name: "Introduction to CSE"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE100',
                  attributes: {
                        number: "100",
                        name: "Introduction to Informatics"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE101',
                  attributes: {
                        number: "101",
                        name: "Fundamentals of Computer Science"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE101L',
                  attributes: {
                        number: "101L",
                        name: "Fundamentals of Computing Laboratory"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE120',
                  attributes: {
                        number: "120",
                        name: "Learning to Code"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE155A',
                  attributes: {
                        number: "155A",
                        name: "Computer Science I"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE155E',
                  attributes: {
                        number: "155E",
                        name: "Computer Science I: Systems Engineering Focus"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE155H',
                  attributes: {
                        number: "155H",
                        name: "Honors: Computer Science I"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE155N',
                  attributes: {
                        number: "155N",
                        name: "Computer Science I: Engineering and Science Focus"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE155T',
                  attributes: {
                        number: "155T",
                        name: "Computer Science I: Informatics Focus"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE156',
                  attributes: {
                        number: "156",
                        name: "Computer Science II"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE156H',
                  attributes: {
                        number: "156H",
                        name: "Honors: Computer Science II"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE183H',
                  attributes: {
                        number: "183H",
                        name: "Honors: Computer Problem Solving Essentials"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE184H',
                  attributes: {
                        number: "184H",
                        name: "Honors: Software Development Essentials"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE190',
                  attributes: {
                        number: "190",
                        name: "Special Topics in Computer Science"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE196',
                  attributes: {
                        number: "196",
                        name: "Special Topics in Computer Science"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE220',
                  attributes: {
                        number: "220",
                        name: "Software Development for Smart-Mobile Systems"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE230',
                  attributes: {
                        number: "230",
                        name: "Computer Organization"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE230H',
                  attributes: {
                        number: "230H",
                        name: "Honors: Computer Organization"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE235',
                  attributes: {
                        number: "235",
                        name: "Introduction to Discrete Structures"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE235H',
                  attributes: {
                        number: "235H",
                        name: "Honors: Introduction to Discrete Structures"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE236',
                  attributes: {
                        number: "236",
                        name: "Embedded Systems"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE251',
                  attributes: {
                        number: "251",
                        name: "Unix Programming Environment"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE251K',
                  attributes: {
                        number: "251K",
                        name: "C Programming "
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE252A',
                  attributes: {
                        number: "252A",
                        name: "FORTRAN Programming"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE283H',
                  attributes: {
                        number: "283H",
                        name: "Honors: Foundation of Computer Science"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE284H',
                  attributes: {
                        number: "284H",
                        name: "Honors: Foundation of Computer Science"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE290',
                  attributes: {
                        number: "290",
                        name: "Special Topics in Computer Science"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE296',
                  attributes: {
                        number: "296",
                        name: "Special Topics in Computer Science"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE310',
                  attributes: {
                        number: "310",
                        name: "Data Structures and Algorithms"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE310H',
                  attributes: {
                        number: "310H",
                        name: "Honors: Data Structure and Algorithms"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE311',
                  attributes: {
                        number: "311",
                        name: "Data Structures and Algorithms for Informatics"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE320',
                  attributes: {
                        number: "320",
                        name: "Data Analysis"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE322',
                  attributes: {
                        number: "322",
                        name: "Programming Language Concepts"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE322H',
                  attributes: {
                        number: "322H",
                        name: "Honors: Programming Language Concepts"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE335',
                  attributes: {
                        number: "335",
                        name: "Digital Logic Design"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE351',
                  attributes: {
                        number: "351",
                        name: "Operating System Kernels"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE361',
                  attributes: {
                        number: "361",
                        name: "Software Engineering"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE361H',
                  attributes: {
                        number: "361H",
                        name: "Honors: Software Engineering"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE370H',
                  attributes: {
                        number: "370H",
                        name: "Data and Models II: Data Science Fundamentals"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE378',
                  attributes: {
                        number: "378",
                        name: "Human-Computer Interaction"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE378H',
                  attributes: {
                        number: "378H",
                        name: "Honors: Human-Computer Interaction"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE383H',
                  attributes: {
                        number: "383H",
                        name: "Honors: Fundamentals of Software Engineering "
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE384H',
                  attributes: {
                        number: "384H",
                        name: "Honors : Applied Numerical Analysis"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE390',
                  attributes: {
                        number: "390",
                        name: "Special Topics in Computer Science"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE396',
                  attributes: {
                        number: "396",
                        name: "Special Topics in Computer Science"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE399H',
                  attributes: {
                        number: "399H",
                        name: "Honors Thesis"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE401H',
                  attributes: {
                        number: "401H",
                        name: "Honors: RAIK Design Studio I"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE402H',
                  attributes: {
                        number: "402H",
                        name: "Honors: RAIK Design Studio II"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE403H',
                  attributes: {
                        number: "403H",
                        name: "Honors: RAIK Design Studio III"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE404H',
                  attributes: {
                        number: "404H",
                        name: "Honors: RAIK Design Studio IV"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE410',
                  attributes: {
                        number: "410",
                        name: "Information Retrieval Systems"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE411',
                  attributes: {
                        number: "411",
                        name: "Data Modeling for Systems Development"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE411H',
                  attributes: {
                        number: "411H",
                        name: "Honors: Data Modeling for Systems Development"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE413',
                  attributes: {
                        number: "413",
                        name: "Database Systems"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE421',
                  attributes: {
                        number: "421",
                        name: "Foundation of Constraint Processing"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE423',
                  attributes: {
                        number: "423",
                        name: "Design and Analysis of Algorithms"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE424',
                  attributes: {
                        number: "424",
                        name: "Computational Complexity Theory"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE425',
                  attributes: {
                        number: "425",
                        name: "Compiler Construction"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE428',
                  attributes: {
                        number: "428",
                        name: "Automata"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE430',
                  attributes: {
                        number: "430",
                        name: "Computer Architecture"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE432',
                  attributes: {
                        number: "432",
                        name: "High-Performance Processor Architectures"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE434',
                  attributes: {
                        number: "434",
                        name: "VLSI Design"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE435',
                  attributes: {
                        number: "435",
                        name: "Cluster and Grid Computing"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE436',
                  attributes: {
                        number: "436",
                        name: "Advanced Embedded Systems"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE437',
                  attributes: {
                        number: "437",
                        name: "File and Storage Systems"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE438',
                  attributes: {
                        number: "438",
                        name: "Sensor Networks"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE440',
                  attributes: {
                        number: "440",
                        name: "Numerical Analysis I"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE441',
                  attributes: {
                        number: "441",
                        name: "Approximation of Functions"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE447',
                  attributes: {
                        number: "447",
                        name: "Numerical Linear Algebra"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE451',
                  attributes: {
                        number: "451",
                        name: "Operating Systems Principles"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE455',
                  attributes: {
                        number: "455",
                        name: "Distributed Operating Systems"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE456',
                  attributes: {
                        number: "456",
                        name: "Parallel Programming"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE457',
                  attributes: {
                        number: "457",
                        name: "Systems Administration"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE461',
                  attributes: {
                        number: "461",
                        name: "Advanced Topics in Software Engineering"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE462',
                  attributes: {
                        number: "462",
                        name: "Communication Networks"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE463',
                  attributes: {
                        number: "463",
                        name: "Data and Network Security"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE464',
                  attributes: {
                        number: "464",
                        name: "Internet Systems and Programming"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE465',
                  attributes: {
                        number: "465",
                        name: "Wireless Communication Networks"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE466',
                  attributes: {
                        number: "466",
                        name: "Software Design and Architecture"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE467',
                  attributes: {
                        number: "467",
                        name: "Testing"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE468',
                  attributes: {
                        number: "468",
                        name: "Requirements Elicitation"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE470',
                  attributes: {
                        number: "470",
                        name: "Computer Graphics"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE471',
                  attributes: {
                        number: "471",
                        name: "Introduction to Bioinformatics"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE472',
                  attributes: {
                        number: "472",
                        name: "Digital Image Processing"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE473',
                  attributes: {
                        number: "473",
                        name: "Computer Vision"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE474',
                  attributes: {
                        number: "474",
                        name: "Introduction to Data Mining"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE475',
                  attributes: {
                        number: "475",
                        name: "Multiagent Systems"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE476',
                  attributes: {
                        number: "476",
                        name: "Introduction to Artificial Intelligence"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE476H',
                  attributes: {
                        number: "476H",
                        name: "Honors: Introduction to Artificial Intelligence"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE477',
                  attributes: {
                        number: "477",
                        name: "Cryptography and Computer Security"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE478',
                  attributes: {
                        number: "478",
                        name: "Introduction to Machine Learning "
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE479',
                  attributes: {
                        number: "479",
                        name: "Introduction to Neural Networks"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE486',
                  attributes: {
                        number: "486",
                        name: "Computer Science Professional Project"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE487',
                  attributes: {
                        number: "487",
                        name: "Computer Science Senior Design Project"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE488',
                  attributes: {
                        number: "488",
                        name: "Computer Engineering Professional Development"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE489',
                  attributes: {
                        number: "489",
                        name: "Computer Engineering Senior Design Project"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE490',
                  attributes: {
                        number: "490",
                        name: "Special Topics in Computer Science"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE491',
                  attributes: {
                        number: "491",
                        name: "Internship in Computing Practise"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE493',
                  attributes: {
                        number: "493",
                        name: "Innovation Lab Project"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE493A',
                  attributes: {
                        number: "493A",
                        name: "Interdiscipinary Capstone"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE496',
                  attributes: {
                        number: "496",
                        name: "Special Topics in Computer Science"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE496H',
                  attributes: {
                        number: "496H",
                        name: "Honors: Special Topics in Computer Science"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE498',
                  attributes: {
                        number: "498",
                        name: "Computer Problems"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE891',
                  attributes: {
                        number: "891",
                        name: "Internship in Computer Practise"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE897',
                  attributes: {
                        number: "897",
                        name: "Master Project"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE899',
                  attributes: {
                        number: "899",
                        name: "Master Thesis"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE910',
                  attributes: {
                        number: "910",
                        name: "Information Organization and Retrieval"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE913',
                  attributes: {
                        number: "913",
                        name: "Advanced Topics in Database Systems"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE914',
                  attributes: {
                        number: "914",
                        name: "Constraint Database Systems"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE921',
                  attributes: {
                        number: "921",
                        name: "Advanced Constraint Processing"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE923',
                  attributes: {
                        number: "923",
                        name: "Development and Analysis of Efficient Algorithms"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE924',
                  attributes: {
                        number: "924",
                        name: "Graph Algorithms"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE925',
                  attributes: {
                        number: "925",
                        name: "Scheduling Theory"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE930',
                  attributes: {
                        number: "930",
                        name: "Advanced Computer Architecture"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE932',
                  attributes: {
                        number: "932",
                        name: "Fault-Tolerance: Testing and Testable Design"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE933',
                  attributes: {
                        number: "933",
                        name: "Fault-Tolerance: System Design and Analysis"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE936',
                  attributes: {
                        number: "936",
                        name: "Cyber-Physical Systems"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE942',
                  attributes: {
                        number: "942",
                        name: "Numerical Analysis III"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE952',
                  attributes: {
                        number: "952",
                        name: "Advanced Computer Networks"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE953',
                  attributes: {
                        number: "953",
                        name: "Optical Communication Networks"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE961',
                  attributes: {
                        number: "961",
                        name: "Coding Theory"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE962',
                  attributes: {
                        number: "962",
                        name: "Advanced Software Engineering "
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE970',
                  attributes: {
                        number: "970",
                        name: "Pattern Recognition"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE971',
                  attributes: {
                        number: "971",
                        name: "Advanced Bioinformatics"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE973',
                  attributes: {
                        number: "973",
                        name: "Support Vector Machines"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE974',
                  attributes: {
                        number: "974",
                        name: "Genetic Algorithms"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE976',
                  attributes: {
                        number: "976",
                        name: "Advanced Artificial Intelligence"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE977',
                  attributes: {
                        number: "977",
                        name: "Data Encryption"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE979',
                  attributes: {
                        number: "979",
                        name: "Advances in Neural Networks and Genetic Algorithms"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE99',
                  attributes: {
                        number: "99",
                        name: "Graduate Seminar"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE990',
                  attributes: {
                        number: "990",
                        name: "Seminar"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE996',
                  attributes: {
                        number: "996",
                        name: "Research Problems Other Than Thesis"
                  }
            }, {
                  type: 'courses',
                  id: 'CSCE999',
                  attributes: {
                        number: "999",
                        name: "Doctoral Dissertation"
                  }
            }];

            this.get('/courses', function () {
                  return { data: courses };
            });

            // Find and return the provided course from our course list above
            this.get('/courses/:id', function (db, request) {
                  return { data: courses.find(function (course) {
                              return request.params.id === course.id;
                        }) };
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
define('course-nebula/models/answer', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        answerText: _emberData['default'].attr('string'),
        dateOfAnswer: _emberData['default'].attr('date'),
        answerRating: _emberData['default'].attr('number')
    });
});
define('course-nebula/models/asset', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    path: _emberData['default'].attr('string'),
    size: _emberData['default'].attr('string'),
    type: _emberData['default'].attr('string')
  });
});
define('course-nebula/models/course', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        number: _emberData['default'].attr('string'),
        name: _emberData['default'].attr('string'),
        questions: _emberData['default'].hasMany('question'),
        feedbacks: _emberData['default'].hasMany('feedback')
    });
});
define('course-nebula/models/credential', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    accessToken: _emberData['default'].attr('string'),
    authMethod: _emberData['default'].attr('string'),
    userId: _emberData['default'].attr('string'),
    user: _emberData['default'].belongsTo('user')
  });
});
define('course-nebula/models/credentials', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    accessToken: _emberData['default'].attr('string'),
    authMethod: _emberData['default'].attr('string'),
    userId: _emberData['default'].attr('string'),
    user: _emberData['default'].belongsTo('user')
  });
});
define('course-nebula/models/dashboardItem', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model({
        course: _emberData['default'].belongsTo('course'),
        user: _emberData['default'].belongsTo('user'),
        notificationFlag: _emberData['default'].attr('number')
    });
});
define('course-nebula/models/feedback', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        courseN: _emberData['default'].belongsTo('course'),
        feedbackText: _emberData['default'].attr('string'),
        feedbackRating: _emberData['default'].attr('number'),
        dateOfFeedback: _emberData['default'].attr('date')
    });
});
define('course-nebula/models/handout', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model({
        course: _emberData['default'].belongsTo(course),
        handoutKey: _emberData['default'].attr('string')
    });
});
define('course-nebula/models/instructor', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].model.extend({
        user: _emberData['default'].belongsTo('user'),
        course: _emberData['default'].belongsTo('course')
    });
});
define('course-nebula/models/question', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        courseN: _emberData['default'].belongsTo('course'),
        text: _emberData['default'].attr('string'),
        date: _emberData['default'].attr('date'),
        rating: _emberData['default'].attr('number')
    });
});
define('course-nebula/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    Username: _emberData['default'].attr('string'),
    password: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string'),
    userAnsweredQuestions: _emberData['default'].attr('number')
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
    this.route('courses', function () {
      this.route('show', { path: '/:course_id' }, function () {
        this.route('ask');
        this.route('feedback');
      });
    });
    this.route('about');
    this.route('login');
    this.route('coursesTest');
    this.route('register');
    this.route('sessions');
  });

  exports['default'] = Router;
});
define('course-nebula/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('course-nebula/routes/application', ['exports', 'ember', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsApplicationRouteMixin) {
    exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsApplicationRouteMixin['default'], {
        actions: {
            invalidateSession: function invalidateSession() {
                this.get('session').invalidate();
            }
        }
    });
});
define("course-nebula/routes/courses-test", ["exports"], function (exports) {});
/*

import Ember from 'ember';

export default Ember.Route.extend({
// This model will extract the data needed to create a new credential and pass it to our controller.

model() {
	var params,
		credential;

	params = this.get('utils').getAuthorisationData();

	return this.store.query('credential', {
						userId: params.userId
						}).then((cred)=>{
		if(Ember.isPresent(cred)) {
			return cred.get('firstObject');
		} else {
		  credential = this.store.createRecord('credential', params);
		  credential.save();
 		
		  return credential;
		}
	      });

},

afterModel(model) {
	model.get('user').then((user)=>{
  		if(Ember.isPresent(user)) {
			model.set('user', user);
		} else {
		  this.get('utils').getUserInfo(model.get('accessToken'))
				   .then(({display_name:name, email})=>{
	
		    this.store.createRecord('user', {name, email}).save().then((user)=>{
			model.set('user', user);
			model.save();
		           });
 		       });
	           }
	 });
   }
});

*/
define('course-nebula/routes/courses', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('course-nebula/routes/courses/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.get('store').findAll('course');
		}
	});
});
define('course-nebula/routes/courses/show', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(params) {
			return this.get('store').findRecord('course', params.course_id);
		},
		qn: function qn() {
			return this.get('store').findAll('question');
		}
	});
});
define('course-nebula/routes/courses/show/ask', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		actions: {
			savequestion: function savequestion(body) {
				var q = this.get('store').createRecord('question', {
					text: body,
					course: 1,
					date: new Date(),
					rating: 0
				});
				q.save();
			}
		}
	});
});
define('course-nebula/routes/courses/show/feedback', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('course-nebula/routes/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		beforeModel: function beforeModel() {
			this.replaceWith('courses');
		}
	});
});
define('course-nebula/routes/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('course-nebula/routes/protected', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default']);
});
define('course-nebula/routes/register', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('course-nebula/routes/sessions', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('course-nebula/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTSerializer.extend();
});
define('course-nebula/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('course-nebula/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _emberCookiesServicesCookies) {
  exports['default'] = _emberCookiesServicesCookies['default'];
});
define('course-nebula/services/dropbox-uploader', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Service.extend({
		accessToken: '',

		upload: function upload(file) {
			var _this = this;

			var promise;

			promise = new _ember['default'].RSVP.Promise(function (resolve, reject) {
				var reader = new FileReader();
				reader.readAsArrayBuffer(file);

				reader.onload = function (_ref) {
					var result = _ref.target.result;

					_ember['default'].$.ajax({
						headers: {
							Authorization: 'Bearer ' + _this.get('accessToken')
						},

						url: 'https://content.dropboxapi.com/1/files_put/auto/' + file.name,
						type: 'PUT',
						data: result,
						contentType: file.type,
						dataType: 'json',
						processData: false,
						crossDomain: true,
						crossOrigin: true,

						success: function success(_ref2) {
							var path = _ref2.path;
							var size = _ref2.size;

							resolve({
								name: file.name,
								path: path,
								size: size,
								type: file.type
							});
						},

						error: function error(reason) {
							reject(reason);
						},

						xhr: function xhr() {
							var xhr = new window.XMLHttpRequest();
							//Upload progress
							xhr.upload.addEventListener("progress", function (_ref3) {
								var lengthComputable = _ref3.lengthComputable;
								var loaded = _ref3.loaded;
								var total = _ref3.total;

								if (lengthComputable) {
									var percentComplete = loaded / total;

									_ember['default'].$('[data-uploader]').trigger({
										type: "uploadProgress",
										progress: percentComplete
									});
								}
							}, false);
							return xhr;
						}
					});
				};
			});

			return promise;
		},

		download: function download(file) {
			var _this2 = this;

			var promise;

			promise = new _ember['default'].RSVP.Promise(function (resolve, reject) {
				var xhr = new XMLHttpRequest();

				xhr.open("GET", 'https://content.dropboxapi.com/1/files/auto' + file.get('path') + '?access_token=' + _this2.get('accessToken'), true);
				xhr.responseType = "arraybuffer";
				xhr.onload = function () {
					var blob = new Blob([xhr.response], { type: file.get('type') });
					var objectUrl = URL.createObjectURL(blob);
					resolve(objectUrl);
				};

				xhr.onerror = function (reason) {
					reject(reason);
				};

				xhr.send();
			});

			return promise;
		}
	});
});
define('course-nebula/services/dropbox-utils', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Service.extend({
		getAuthorisarionData: function getAuthorisarionData() {
			var params = {};

			window.location.hasj, replace('#', '').split('&').forEach(function (item) {
				var parsed = item.split('=');
				params[parsed[0].camelize()] = parsed[1];
			});

			params.authMethod = "dropbox";
			params.userId = params.uid;

			delete params.uid;

			return params;
		},

		getUserInfo: function getUserInfo(accessToken) {
			return _ember['default'].$.ajax({
				url: 'https://api.dropbox.com/1/account/info?access_token-${accessToken}',
				dataType: 'json'
			});
		}
	});
});
define('course-nebula/services/session', ['exports', 'ember-simple-auth/services/session', 'ember', 'ember-data'], function (exports, _emberSimpleAuthServicesSession, _ember, _emberData) {
  exports['default'] = _emberSimpleAuthServicesSession['default'].extend({

    store: _ember['default'].inject.service(),

    currentUser: _ember['default'].computed('isAuthenticated', function () {
      if (this.get('isAuthenticated')) {
        var promise = this.get('store').queryRecord('user', {});
        return _emberData['default'].PromiseObject.create({ promise: promise });
      }
    })

  });
});
define('course-nebula/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _emberSimpleAuthSessionStoresAdaptive) {
  exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend();
});
define("course-nebula/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FPEB4eB7", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbo\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"right tomster\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"About Course Nebula\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n    Course Nebula helps UNL Computer Science and Engineering students with their courses. \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    Users can ask questions about material in a course, or how difficult that course may be. \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    Study guides can be uploaded for a course as well. \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/about.hbs" } });
});
define("course-nebula/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "WkzG8nl3", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"menu\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],null,5],[\"text\",\"\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"left links\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"courses\"],null,4],[\"block\",[\"link-to\"],[\"about\"],null,3],[\"text\",\"\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"right links\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isLoginButtonVisible\"]]],null,2],[\"text\",\"\\t\\t\\t\\t\"],[\"block\",[\"link-to\"],[\"register\"],null,0],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"body\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\t\\t\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Register\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Login\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\\t\"],[\"block\",[\"link-to\"],[\"login\"],null,1],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\\tAbout\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\\tCourses\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"left\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"open-element\",\"em\",[]],[\"flush-element\"],[\"text\",\"Course NEBULA\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/application.hbs" } });
});
define("course-nebula/templates/components/course-listing", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "eStJ9kbo", "block": "{\"statements\":[[\"open-element\",\"article\",[]],[\"static-attr\",\"class\",\"listing\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"CSCE \"],[\"append\",[\"unknown\",[\"course\",\"number\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"detail name\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"unknown\",[\"course\",\"name\"]],false],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"block\",[\"link-to\"],[\"courses.show\",[\"get\",[\"course\"]]],null,0],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"More detail\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/components/course-listing.hbs" } });
});
define("course-nebula/templates/components/file-uploader", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "yeTfNVhx", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"click to select a file, or drag and drop\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"file\"],[\"static-attr\",\"style\",\"display:none\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"progress\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/components/file-uploader.hbs" } });
});
define("course-nebula/templates/components/list-filter", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Tw2vhBZG", "block": "{\"statements\":[[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"key-up\",\"class\",\"placeholder\"],[[\"get\",[\"value\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"handleFilterEntry\"],null],\"light\",\"Filter By Class\"]]],false],[\"text\",\"\\n\"],[\"yield\",\"default\",[[\"get\",[\"results\"]]]],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/components/list-filter.hbs" } });
});
define("course-nebula/templates/components/login-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0IYp9sE4", "block": "{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"authenticate\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"identification\"],[\"flush-element\"],[\"text\",\"Login\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"placeholder\",\"class\"],[[\"get\",[\"identification\"]],\"Enter Login\",\"form-control\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"password\"],[\"flush-element\"],[\"text\",\"Password\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"placeholder\",\"class\",\"type\"],[[\"get\",[\"password\"]],\"Enter Password\",\"form-control\",\"password\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-default\"],[\"flush-element\"],[\"text\",\"Login\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"errorMessage\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Login failed:\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/components/login-form.hbs" } });
});
define("course-nebula/templates/components/question-listing", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8HTKHWJ5", "block": "{\"statements\":[[\"open-element\",\"article\",[]],[\"static-attr\",\"class\",\"listing\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"detail name\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"unknown\",[\"question\",\"questionText\"]],false],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/components/question-listing.hbs" } });
});
define("course-nebula/templates/courses-test", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "AyLAHWgw", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbo\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=lx95l27jbt417v4&redirect_uri=http://localhost:4200/courseTest\"],[\"flush-element\"],[\"text\",\"  \\n  Upload Docs\\n\"],[\"close-element\"],[\"text\",\" \\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/courses-test.hbs" } });
});
define("course-nebula/templates/courses", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "zxsV5198", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/courses.hbs" } });
});
define("course-nebula/templates/courses/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "LkL3Wxgc", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbo\"],[\"flush-element\"],[\"text\",\"\\n     \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Available Courses\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"results\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"     \\t\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"helper\",[\"course-listing\"],null,[[\"course\"],[[\"get\",[\"singleCourse\"]]]]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"singleCourse\"]}],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/courses/index.hbs" } });
});
define("course-nebula/templates/courses/show", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Keo7K8Gm", "block": "{\"statements\":[[\"open-element\",\"article\",[]],[\"static-attr\",\"class\",\"listing\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"CSCE \"],[\"append\",[\"unknown\",[\"model\",\"number\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"detail name\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[\"https://bulletin.unl.edu/courses/CSCE/\",[\"unknown\",[\"model\",\"number\"]]]]],[\"flush-element\"],[\"text\",\"UNL Bulletin Page\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[\"https://bulletin.unl.edu/courses/CSCE/\",[\"unknown\",[\"model\",\"number\"]]]]],[\"flush-element\"],[\"text\",\"Credit Hours\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[\"https://bulletin.unl.edu/courses/CSCE/\",[\"unknown\",[\"model\",\"number\"]]]]],[\"flush-element\"],[\"text\",\"Information about ACE credits\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t \"],[\"block\",[\"link-to\"],[\"courses.show.ask\"],[[\"course\"],[[\"get\",[\"model\"]]]],5],[\"text\",\"\\n  \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"courses.show.feedback\"],[[\"course\"],[[\"get\",[\"model\"]]]],4],[\"text\",\"\\n  \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"results\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"questions\"]]],null,3,2],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\\n\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"feedbackResults\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"feedbacks\"]]],null,1,0],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Nobody has left a comment here yet.\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \\t    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"feedback\",\"text\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"feedback\"]},{\"statements\":[[\"text\",\"\\t\\t\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Nobody has asked a question here yet.\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"question\",\"text\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"question\"]},{\"statements\":[[\"text\",\" \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Leave a comment!\"],[\"close-element\"],[\"text\",\" \"]],\"locals\":[]},{\"statements\":[[\"text\",\" \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Ask a question!\"],[\"close-element\"],[\"text\",\" \"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/courses/show.hbs" } });
});
define("course-nebula/templates/courses/show/ask", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Ew75RQbc", "block": "{\"statements\":[[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"article\",[]],[\"static-attr\",\"class\",\"listing\"],[\"flush-element\"],[\"text\",\"  \\n        \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"New Question\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"savequestion\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"Question:\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"value\",\"cols\",\"rows\"],[[\"get\",[\"text\"]],\"80\",\"6\"]]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"flush-element\"],[\"text\",\"Ask!\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/courses/show/ask.hbs" } });
});
define("course-nebula/templates/courses/show/feedback", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cmU0ZVdS", "block": "{\"statements\":[[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"article\",[]],[\"static-attr\",\"class\",\"listing\"],[\"flush-element\"],[\"text\",\"  \\n        \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"New Comment\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"savefeedback\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"Comment:\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"value\",\"cols\",\"rows\"],[[\"get\",[\"text\"]],\"80\",\"6\"]]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"flush-element\"],[\"text\",\"Send comment!\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/courses/show/feedback.hbs" } });
});
define("course-nebula/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wypBcDfX", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/index.hbs" } });
});
define("course-nebula/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "I2fzwKNu", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"login-page\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"login-form\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"authenticate\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n  \\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"placeholder\",\"value\"],[\"username\",\"username\",[\"get\",[\"username\"]]]]],false],[\"text\",\"\\n  \\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"placeholder\",\"type\",\"value\"],[\"password\",\"password\",\"password\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n  \\t\\t\"],[\"block\",[\"link-to\"],[\"courses\"],null,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"errorMessage\"]]],null,0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \\t\\t  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\" \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"login\"],[\"close-element\"],[\"text\",\" \"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/login.hbs" } });
});
define("course-nebula/templates/register", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hSb0juRw", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"registration-page\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"registration-form\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"authenticate\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"placeholder\",\"type\",\"value\"],[\"fname\",\"First Name\",\"text\",[\"get\",[\"fname\"]]]]],false],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"placeholder\",\"type\",\"value\"],[\"lname\",\"Last Name\",\"text\",[\"get\",[\"lname\"]]]]],false],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"placeholder\",\"type\",\"value\"],[\"email\",\"Email\",\"email\",[\"get\",[\"email\"]]]]],false],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"placeholder\",\"value\"],[\"username\",\"Username\",[\"get\",[\"username\"]]]]],false],[\"text\",\"\\n                \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"placeholder\",\"type\",\"value\"],[\"password\",\"Password\",\"password\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Register\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"errorMessage\"]]],null,0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/register.hbs" } });
});
define("course-nebula/templates/sessions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "sBFv4vVD", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Hello, \"],[\"append\",[\"unknown\",[\"model\",\"user\",\"name\"]],false],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"file-uploader\"],null,[[\"isDisabled\",\"fileInputChanged\",\"uploadProgress\"],[[\"get\",[\"uploadDisabled\"]],\"receiveFile\",\"uploadProgress\"]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isDownloading\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"assets\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"asset\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"downloadFile\",[\"get\",[\"file\"]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"file\",\"path\"]],false],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"file\"]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"b\",[]],[\"flush-element\"],[\"text\",\"loading...\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "course-nebula/templates/sessions.hbs" } });
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
  require("course-nebula/app")["default"].create({"contentSecurityPolicy":{"default-src":"'none'","script-src":"'self' 'unsafe-inline' 'unsafe-eval'","font-src":"'self'","connect-src":"'self'","img-src":"'self'","report-uri":"'localhost'","style-src":"'self' 'unsafe-inline'","frame-src":"'none'"},"name":"course-nebula","version":"0.0.0+940993b3"});
}

/* jshint ignore:end */
//# sourceMappingURL=course-nebula.map
