var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

import Ember from 'ember';
import layout from '../templates/components/welcome-page';

export default Ember.Component.extend({
  layout: layout,

  emberVersion: Ember.computed(function () {
    var _Ember$VERSION$split = Ember.VERSION.split(".");

    var _Ember$VERSION$split2 = _slicedToArray(_Ember$VERSION$split, 2);

    var major = _Ember$VERSION$split2[0];
    var minor = _Ember$VERSION$split2[1];

    return major + '.' + minor + '.0';
  })
});