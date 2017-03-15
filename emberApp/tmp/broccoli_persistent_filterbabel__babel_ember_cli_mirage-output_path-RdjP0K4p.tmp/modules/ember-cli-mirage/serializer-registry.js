var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

import Model from 'ember-cli-mirage/orm/model';
import Collection from 'ember-cli-mirage/orm/collection';
import Serializer from 'ember-cli-mirage/serializer';
import JsonApiSerializer from 'ember-cli-mirage/serializers/json-api-serializer';
import { pluralize, camelize } from './utils/inflector';
import assert from './assert';

import _assign from 'lodash/assign';

var SerializerRegistry = (function () {
  function SerializerRegistry(schema) {
    var serializerMap = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, SerializerRegistry);

    this.schema = schema;
    this._serializerMap = serializerMap;
  }

  _createClass(SerializerRegistry, [{
    key: 'normalize',
    value: function normalize(payload, modelName) {
      return this.serializerFor(modelName).normalize(payload);
    }
  }, {
    key: 'serialize',
    value: function serialize(response, request) {
      var _this = this;

      this.request = request;

      if (this._isModelOrCollection(response)) {
        var serializer = this.serializerFor(response.modelName);

        return serializer.serialize(response, request);
      } else if (Array.isArray(response) && response.filter(this._isCollection).length) {
        return response.reduce(function (json, collection) {
          var serializer = _this.serializerFor(collection.modelName);

          if (serializer.embed) {
            json[pluralize(collection.modelName)] = serializer.serialize(collection, request);
          } else {
            json = _assign(json, serializer.serialize(collection, request));
          }

          return json;
        }, {});
      } else {
        return response;
      }
    }
  }, {
    key: 'serializerFor',
    value: function serializerFor(type) {
      var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var _ref$explicit = _ref.explicit;
      var explicit = _ref$explicit === undefined ? false : _ref$explicit;

      var SerializerForResponse = this._serializerMap && this._serializerMap[camelize(type)];

      if (explicit) {
        assert(!!SerializerForResponse, 'You passed in ' + type + ' as an explicit serializer type but that serializer doesn\'t exist. Try running `ember g mirage-serializer ' + type + '`.');
      } else {
        SerializerForResponse = SerializerForResponse || this._serializerMap.application || Serializer;

        assert(!SerializerForResponse || SerializerForResponse.prototype.embed || SerializerForResponse.prototype.root || new SerializerForResponse() instanceof JsonApiSerializer, 'You cannot have a serializer that sideloads (embed: false) and disables the root (root: false).');
      }

      return new SerializerForResponse(this, type, this.request);
    }
  }, {
    key: '_isModel',
    value: function _isModel(object) {
      return object instanceof Model;
    }
  }, {
    key: '_isCollection',
    value: function _isCollection(object) {
      return object instanceof Collection;
    }
  }, {
    key: '_isModelOrCollection',
    value: function _isModelOrCollection(object) {
      return this._isModel(object) || this._isCollection(object);
    }
  }, {
    key: 'registerSerializers',
    value: function registerSerializers(newSerializerMaps) {
      var currentSerializerMap = this._serializerMap || {};
      this._serializerMap = _assign(currentSerializerMap, newSerializerMaps);
    }
  }]);

  return SerializerRegistry;
})();

export default SerializerRegistry;