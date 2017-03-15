import _assign from 'lodash/assign';
import _isFunction from 'lodash/isFunction';
import _mapValues from 'lodash/mapValues';
import referenceSort from './utils/reference-sort';
import _isPlainObject from 'lodash/isPlainObject';

var Factory = function Factory() {
  this.build = function (sequence) {
    var _this = this;

    var object = {};
    var topLevelAttrs = _assign({}, this.attrs);
    delete topLevelAttrs.afterCreate;
    Object.keys(topLevelAttrs).forEach(function (attr) {
      if (Factory.isTrait.call(_this, attr)) {
        delete topLevelAttrs[attr];
      }
    });
    var keys = sortAttrs(topLevelAttrs, sequence);

    keys.forEach(function (key) {
      var buildAttrs = undefined,
          buildSingleValue = undefined;

      buildAttrs = function (attrs) {
        return _mapValues(attrs, buildSingleValue);
      };

      buildSingleValue = function (value) {
        if (Array.isArray(value)) {
          return value.map(buildSingleValue);
        } else if (_isPlainObject(value)) {
          return buildAttrs(value);
        } else if (_isFunction(value)) {
          return value.call(topLevelAttrs, sequence);
        } else {
          return value;
        }
      };

      var value = topLevelAttrs[key];
      if (_isFunction(value)) {
        object[key] = value.call(object, sequence);
      } else {
        object[key] = buildSingleValue(value);
      }
    });

    return object;
  };
};

Factory.extend = function (attrs) {
  // Merge the new attributes with existing ones. If conflict, new ones win.
  var newAttrs = _assign({}, this.attrs, attrs);

  var Subclass = function Subclass() {
    this.attrs = newAttrs;
    Factory.call(this);
  };

  // Copy extend
  Subclass.extend = Factory.extend;
  Subclass.extractAfterCreateCallbacks = Factory.extractAfterCreateCallbacks;
  Subclass.isTrait = Factory.isTrait;

  // Store a reference on the class for future subclasses
  Subclass.attrs = newAttrs;

  return Subclass;
};

Factory.extractAfterCreateCallbacks = function () {
  var _this2 = this;

  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var traits = _ref.traits;

  var afterCreateCallbacks = [];
  var attrs = this.attrs || {};
  var traitCandidates = undefined;

  if (attrs.afterCreate) {
    afterCreateCallbacks.push(attrs.afterCreate);
  }

  if (Array.isArray(traits)) {
    traitCandidates = traits;
  } else {
    traitCandidates = Object.keys(attrs);
  }

  traitCandidates.filter(function (attr) {
    return _this2.isTrait(attr) && attrs[attr].extension.afterCreate;
  }).forEach(function (attr) {
    afterCreateCallbacks.push(attrs[attr].extension.afterCreate);
  });

  return afterCreateCallbacks;
};

Factory.isTrait = function (attrName) {
  var attrs = this.attrs;

  return _isPlainObject(attrs[attrName]) && attrs[attrName].__isTrait__ === true;
};

function sortAttrs(attrs, sequence) {
  var Temp = function Temp() {};
  var obj = new Temp();
  var refs = [];
  var property = undefined;

  Object.keys(attrs).forEach(function (key) {
    var value = undefined;
    Object.defineProperty(obj.constructor.prototype, key, {
      get: function get() {
        refs.push([property, key]);
        return value;
      },
      set: function set(newValue) {
        value = newValue;
      },
      enumerable: false,
      configurable: true
    });
  });

  Object.keys(attrs).forEach(function (key) {
    var value = attrs[key];
    if (typeof value !== 'function') {
      obj[key] = value;
    }
  });

  Object.keys(attrs).forEach(function (key) {
    var value = attrs[key];
    property = key;

    if (typeof value === 'function') {
      obj[key] = value.call(obj, sequence);
    }

    refs.push([key]);
  });

  return referenceSort(refs);
}

export default Factory;