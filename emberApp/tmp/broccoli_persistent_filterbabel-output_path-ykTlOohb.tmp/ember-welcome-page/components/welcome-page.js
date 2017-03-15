define('ember-welcome-page/components/welcome-page', ['exports', 'ember', 'ember-welcome-page/templates/components/welcome-page'], function (exports, _ember, _emberWelcomePageTemplatesComponentsWelcomePage) {
  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberWelcomePageTemplatesComponentsWelcomePage['default'],

    emberVersion: _ember['default'].computed(function () {
      var _Ember$VERSION$split = _ember['default'].VERSION.split(".");

      var _Ember$VERSION$split2 = _slicedToArray(_Ember$VERSION$split, 2);

      var major = _Ember$VERSION$split2[0];
      var minor = _Ember$VERSION$split2[1];

      return major + '.' + minor + '.0';
    })
  });
});