'use strict';

define('course-nebula/tests/adapters/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('course-nebula/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('course-nebula/tests/components/course-listing.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/course-listing.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/course-listing.js should pass jshint.');
  });
});
define('course-nebula/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
    server.shutdown();
  }
});
define('course-nebula/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('course-nebula/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'course-nebula/tests/helpers/start-app', 'course-nebula/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _courseNebulaTestsHelpersStartApp, _courseNebulaTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _courseNebulaTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _courseNebulaTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('course-nebula/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('course-nebula/tests/helpers/resolver', ['exports', 'course-nebula/resolver', 'course-nebula/config/environment'], function (exports, _courseNebulaResolver, _courseNebulaConfigEnvironment) {

  var resolver = _courseNebulaResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _courseNebulaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _courseNebulaConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('course-nebula/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
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
define('course-nebula/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('course-nebula/tests/integration/components/course-listing-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('course-listing', 'Integration | Component | course listing', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'gUfLBJ7J',
      'block': '{"statements":[["append",["unknown",["course-listing"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '7aJaXNBR',
      'block': '{"statements":[["text","\\n"],["block",["course-listing"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('course-nebula/tests/integration/components/course-listing-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/course-listing-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/course-listing-test.js should pass jshint.');
  });
});
define('course-nebula/tests/models/answer.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/answer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/answer.js should pass jshint.\nmodels/answer.js: line 1, col 16, \'DS\' is not defined.\nmodels/answer.js: line 2, col 17, \'DS\' is not defined.\nmodels/answer.js: line 3, col 19, \'DS\' is not defined.\nmodels/answer.js: line 4, col 19, \'DS\' is not defined.\n\n4 errors');
  });
});
define('course-nebula/tests/models/course.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/course.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/course.js should pass jshint.');
  });
});
define('course-nebula/tests/models/dashboardItem.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/dashboardItem.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/dashboardItem.js should pass jshint.\nmodels/dashboardItem.js: line 1, col 16, \'DS\' is not defined.\nmodels/dashboardItem.js: line 2, col 13, \'DS\' is not defined.\nmodels/dashboardItem.js: line 3, col 11, \'DS\' is not defined.\nmodels/dashboardItem.js: line 4, col 23, \'DS\' is not defined.\n\n4 errors');
  });
});
define('course-nebula/tests/models/feedback.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/feedback.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/feedback.js should pass jshint.\nmodels/feedback.js: line 1, col 16, \'DS\' is not defined.\nmodels/feedback.js: line 2, col 13, \'DS\' is not defined.\nmodels/feedback.js: line 3, col 19, \'DS\' is not defined.\nmodels/feedback.js: line 4, col 21, \'DS\' is not defined.\nmodels/feedback.js: line 5, col 21, \'DS\' is not defined.\n\n5 errors');
  });
});
define('course-nebula/tests/models/handout.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/handout.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/handout.js should pass jshint.\nmodels/handout.js: line 1, col 16, \'DS\' is not defined.\nmodels/handout.js: line 2, col 13, \'DS\' is not defined.\nmodels/handout.js: line 3, col 17, \'DS\' is not defined.\nmodels/handout.js: line 2, col 26, \'course\' is not defined.\n\n4 errors');
  });
});
define('course-nebula/tests/models/instructor.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/instructor.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/instructor.js should pass jshint.\nmodels/instructor.js: line 1, col 16, \'DS\' is not defined.\nmodels/instructor.js: line 2, col 11, \'DS\' is not defined.\nmodels/instructor.js: line 3, col 13, \'DS\' is not defined.\n\n3 errors');
  });
});
define('course-nebula/tests/models/question.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/question.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/question.js should pass jshint.\nmodels/question.js: line 1, col 16, \'DS\' is not defined.\nmodels/question.js: line 2, col 13, \'DS\' is not defined.\nmodels/question.js: line 3, col 19, \'DS\' is not defined.\nmodels/question.js: line 4, col 21, \'DS\' is not defined.\nmodels/question.js: line 5, col 21, \'DS\' is not defined.\nmodels/question.js: line 6, col 13, \'DS\' is not defined.\n\n6 errors');
  });
});
define('course-nebula/tests/models/user.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/user.js should pass jshint.\nmodels/user.js: line 1, col 16, \'DS\' is not defined.\nmodels/user.js: line 2, col 15, \'DS\' is not defined.\nmodels/user.js: line 3, col 15, \'DS\' is not defined.\nmodels/user.js: line 4, col 12, \'DS\' is not defined.\nmodels/user.js: line 5, col 28, \'DS\' is not defined.\n\n5 errors');
  });
});
define('course-nebula/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('course-nebula/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('course-nebula/tests/routes/about.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass jshint.');
  });
});
define('course-nebula/tests/routes/courses.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/courses.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/courses.js should pass jshint.');
  });
});
define('course-nebula/tests/routes/login.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass jshint.');
  });
});
define('course-nebula/tests/test-helper', ['exports', 'course-nebula/tests/helpers/resolver', 'ember-qunit'], function (exports, _courseNebulaTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_courseNebulaTestsHelpersResolver['default']);
});
define('course-nebula/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('course-nebula/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('course-nebula/tests/unit/routes/about-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('course-nebula/tests/unit/routes/courses-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:courses', 'Unit | Route | courses', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('course-nebula/tests/unit/routes/courses-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/courses-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/courses-test.js should pass jshint.');
  });
});
define('course-nebula/tests/unit/routes/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('course-nebula/tests/unit/routes/login-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/login-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('course-nebula/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
