define('ember-qunit/qunit-module', ['exports', 'ember', 'qunit'], function (exports, _ember, _qunit) {
  'use strict';

  exports.createModule = createModule;

  function beforeEachCallback(callbacks) {
    if (typeof callbacks !== 'object') {
      return;
    }
    if (!callbacks) {
      return;
    }

    var beforeEach;

    if (callbacks.beforeEach) {
      beforeEach = callbacks.beforeEach;
      delete callbacks.beforeEach;
    }

    return beforeEach;
  }

  function afterEachCallback(callbacks) {
    if (typeof callbacks !== 'object') {
      return;
    }
    if (!callbacks) {
      return;
    }

    var afterEach;

    if (callbacks.afterEach) {
      afterEach = callbacks.afterEach;
      delete callbacks.afterEach;
    }

    return afterEach;
  }

  function createModule(Constructor, name, description, callbacks) {
    var _beforeEach = beforeEachCallback(callbacks || description);
    var _afterEach = afterEachCallback(callbacks || description);

    var module = new Constructor(name, description, callbacks);

    (0, _qunit.module)(module.name, {
      beforeEach: function beforeEach() {
        var _this = this,
            _arguments = arguments;

        // provide the test context to the underlying module
        module.setContext(this);

        return module.setup.apply(module, arguments).then(function () {
          if (_beforeEach) {
            return _beforeEach.apply(_this, _arguments);
          }
        });
      },

      afterEach: function afterEach() {
        var _arguments2 = arguments;

        var result = undefined;

        if (_afterEach) {
          result = _afterEach.apply(this, arguments);
        }

        return _ember['default'].RSVP.resolve(result).then(function () {
          return module.teardown.apply(module, _arguments2);
        });
      }
    });
  }
});