define('ember-qunit/adapter', ['exports', 'ember', 'qunit'], function (exports, _ember, _qunit) {
  'use strict';

  exports['default'] = _ember['default'].Test.Adapter.extend({
    init: function init() {
      this.doneCallbacks = [];
    },

    asyncStart: function asyncStart() {
      this.doneCallbacks.push(_qunit['default'].config.current.assert.async());
    },

    asyncEnd: function asyncEnd() {
      this.doneCallbacks.pop()();
    },

    exception: function exception(error) {
      _qunit['default'].config.current.assert.ok(false, _ember['default'].inspect(error));
    }
  });
});