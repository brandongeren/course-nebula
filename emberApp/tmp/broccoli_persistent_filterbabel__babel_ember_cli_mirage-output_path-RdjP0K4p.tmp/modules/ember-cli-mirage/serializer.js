var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

import Model from './orm/model';
import Collection from './orm/collection';
import extend from './utils/extend';
import { singularize, pluralize, camelize } from './utils/inflector';

import _isFunction from 'lodash/isFunction';
import _isArray from 'lodash/isArray';
import _isEmpty from 'lodash/isEmpty';
import _includes from 'lodash/includes';
import _assign from 'lodash/assign';
import _get from 'lodash/get';
import _ from 'lodash';

var Serializer = (function () {
  function Serializer(registry, type, request) {
    _classCallCheck(this, Serializer);

    this.registry = registry;
    this.type = type;
    this.request = request;
  }

  // Defaults

  /**
   * Override this method to implement your own custom
   * serialize function. `primaryResource` is whatever was returned
   * from your route handler, and request is the Pretender
   * request object. Returns a plain JavaScript object or
   * array, which Mirage uses as the response data to your
   * Ember app’s XHR request. You can also override this method,
   * call super, and manipulate the data before Mirage responds
   * with it. This is a great place to add metadata, or for
   * one-off operations that don’t fit neatly into any of
   * Mirage’s other abstractions.
   * @method serialize
   * @param response
   * @param request
   * @public
   */

  _createClass(Serializer, [{
    key: 'serialize',
    value: function serialize(primaryResource /* , request */) {
      return this.buildPayload(primaryResource);
    }
  }, {
    key: 'buildPayload',
    value: function buildPayload(primaryResource, toInclude, didSerialize, json) {
      if (!primaryResource && _isEmpty(toInclude)) {
        return json;
      } else if (primaryResource) {
        var _getHashForPrimaryResource = this.getHashForPrimaryResource(primaryResource);

        var _getHashForPrimaryResource2 = _slicedToArray(_getHashForPrimaryResource, 2);

        var resourceHash = _getHashForPrimaryResource2[0];
        var newIncludes = _getHashForPrimaryResource2[1];

        var newDidSerialize = this.isCollection(primaryResource) ? primaryResource.models : [primaryResource];

        return this.buildPayload(undefined, newIncludes, newDidSerialize, resourceHash);
      } else {
        var nextIncludedResource = toInclude.shift();

        var _getHashForIncludedResource = this.getHashForIncludedResource(nextIncludedResource);

        var _getHashForIncludedResource2 = _slicedToArray(_getHashForIncludedResource, 2);

        var resourceHash = _getHashForIncludedResource2[0];
        var newIncludes = _getHashForIncludedResource2[1];

        var newToInclude = newIncludes.filter(function (resource) {
          return !_includes(didSerialize.map(function (m) {
            return m.toString();
          }), resource.toString());
        }).concat(toInclude);
        var newDidSerialize = (this.isCollection(nextIncludedResource) ? nextIncludedResource.models : [nextIncludedResource]).concat(didSerialize);
        var newJson = this.mergePayloads(json, resourceHash);

        return this.buildPayload(undefined, newToInclude, newDidSerialize, newJson);
      }
    }
  }, {
    key: 'getHashForPrimaryResource',
    value: function getHashForPrimaryResource(resource) {
      var _getHashForResource = this.getHashForResource(resource);

      var _getHashForResource2 = _slicedToArray(_getHashForResource, 2);

      var hash = _getHashForResource2[0];
      var addToIncludes = _getHashForResource2[1];

      var hashWithRoot = undefined;

      if (this.root) {
        var serializer = this.serializerFor(resource.modelName);
        var rootKey = serializer.keyForResource(resource);
        hashWithRoot = _defineProperty({}, rootKey, hash);
      } else {
        hashWithRoot = hash;
      }

      return [hashWithRoot, addToIncludes];
    }
  }, {
    key: 'getHashForIncludedResource',
    value: function getHashForIncludedResource(resource) {
      var serializer = this.serializerFor(resource.modelName);

      var _serializer$getHashForResource = serializer.getHashForResource(resource);

      var _serializer$getHashForResource2 = _slicedToArray(_serializer$getHashForResource, 2);

      var hash = _serializer$getHashForResource2[0];
      var addToIncludes = _serializer$getHashForResource2[1];

      // Included resources always have a root, and are always pushed to an array.
      var rootKey = serializer.keyForRelationship(resource.modelName);
      var hashWithRoot = _isArray(hash) ? _defineProperty({}, rootKey, hash) : _defineProperty({}, rootKey, [hash]);

      return [hashWithRoot, addToIncludes];
    }
  }, {
    key: 'getHashForResource',
    value: function getHashForResource(resource) {
      var removeForeignKeys = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var _this = this;

      var didSerialize = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
      var lookupSerializer = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      var hash = undefined;
      var serializer = lookupSerializer ? this.serializerFor(resource.modelName) : this; // this is used for embedded responses

      if (this.isModel(resource)) {
        hash = serializer._hashForModel(resource, removeForeignKeys, didSerialize);
      } else {
        hash = resource.models.map(function (m) {
          return serializer._hashForModel(m, removeForeignKeys, didSerialize);
        });
      }

      if (this.embed) {
        return [hash];
      } else {
        var addToIncludes = _(serializer.getKeysForIncluded()).map(function (key) {
          if (_this.isCollection(resource)) {
            return resource.models.map(function (m) {
              return m[key];
            });
          } else {
            return resource[key];
          }
        }).flatten().compact().uniqBy(function (m) {
          return m.toString();
        }).value();

        return [hash, addToIncludes];
      }
    }

    /*
      Merges new resource hash into json. If json already has root key,
      pushes value of resourceHash onto that key.
       For example,
           json = {
            post: { id: 1, title: 'Lorem Ipsum', comment_ids: [1, 3] },
            comments: [
              { id: 1, text: 'foo' }
            ]
          };
           resourceHash = {
            comments: [
              { id: 2, text: 'bar' }
            ]
          };
       would yield
           {
            post: { id: 1, title: 'Lorem Ipsum', comment_ids: [1, 3] },
            comments: [
              { id: 1, text: 'foo' },
              { id: 2, text: 'bar' }
            ]
          };
     */
  }, {
    key: 'mergePayloads',
    value: function mergePayloads(json, resourceHash) {
      var newJson = undefined;

      var _Object$keys = Object.keys(resourceHash);

      var _Object$keys2 = _slicedToArray(_Object$keys, 1);

      var resourceHashKey = _Object$keys2[0];

      if (json[resourceHashKey]) {
        newJson = json;
        newJson[resourceHashKey] = json[resourceHashKey].concat(resourceHash[resourceHashKey]);
      } else {
        newJson = _assign(json, resourceHash);
      }

      return newJson;
    }
  }, {
    key: 'keyForResource',
    value: function keyForResource(resource) {
      var modelName = resource.modelName;

      return this.isModel(resource) ? this.keyForModel(modelName) : this.keyForCollection(modelName);
    }

    /**
     * Used to define a custom key when serializing a
     * primary model of modelName `modelName`.
     * @method keyForModel
     * @param modelName
     * @public
     */
  }, {
    key: 'keyForModel',
    value: function keyForModel(modelName) {
      return camelize(modelName);
    }

    /**
     * Used to customize the key when serializing a primary
     * collection. By default this pluralizes the return
     * value of `keyForModel`.
     * @method keyForCollection
     * @param modelName
     * @public
     */
  }, {
    key: 'keyForCollection',
    value: function keyForCollection(modelName) {
      return pluralize(this.keyForModel(modelName));
    }
  }, {
    key: '_hashForModel',
    value: function _hashForModel(model, removeForeignKeys) {
      var _this2 = this;

      var didSerialize = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      var attrs = this._attrsForModel(model);

      if (removeForeignKeys) {
        model.fks.forEach(function (fk) {
          delete attrs[fk];
        });
      }

      if (this.embed) {
        var _ret = (function () {
          var newDidSerialize = _assign({}, didSerialize);
          newDidSerialize[model.modelName] = newDidSerialize[model.modelName] || {};
          newDidSerialize[model.modelName][model.id] = true;

          _this2.getKeysForIncluded().forEach(function (key) {
            var associatedResource = model[key];
            if (!_get(newDidSerialize, associatedResource.modelName + '.' + associatedResource.id)) {
              var _getHashForResource3 = _this2.getHashForResource(associatedResource, true, newDidSerialize, true);

              var _getHashForResource32 = _slicedToArray(_getHashForResource3, 1);

              var associatedResourceHash = _getHashForResource32[0];

              var formattedKey = _this2.keyForEmbeddedRelationship(key);
              attrs[formattedKey] = associatedResourceHash;

              if (_this2.isModel(associatedResource)) {
                var fk = camelize(key) + 'Id';
                delete attrs[fk];
              }
            }
          });

          return {
            v: attrs
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      } else {
        return this._maybeAddAssociationIds(model, attrs);
      }
    }

    /**
     * @method _attrsForModel
     * @param model
     * @private
     */
  }, {
    key: '_attrsForModel',
    value: function _attrsForModel(model) {
      var removeForeignKeys = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var attrs = {};

      if (this.attrs) {
        attrs = this.attrs.reduce(function (memo, attr) {
          memo[attr] = model[attr];
          return memo;
        }, {});
      } else {
        attrs = _assign(attrs, model.attrs);
      }

      if (removeForeignKeys) {
        model.fks.forEach(function (key) {
          return delete attrs[key];
        });
      }

      return this._formatAttributeKeys(attrs);
    }

    /**
     * @method _maybeAddAssociationIds
     * @param model
     * @param attrs
     * @private
     */
  }, {
    key: '_maybeAddAssociationIds',
    value: function _maybeAddAssociationIds(model, attrs) {
      var _this3 = this;

      var newHash = _assign({}, attrs);

      if (this.serializeIds === 'always') {
        model.associationKeys.forEach(function (key) {
          var association = model[key];
          if (_this3.isCollection(association)) {
            var formattedKey = _this3.keyForRelationshipIds(key);
            newHash[formattedKey] = model[key].models.map(function (m) {
              return m.id;
            });
          }
        });
      } else if (this.serializeIds === 'included') {
        this.getKeysForIncluded().forEach(function (key) {
          var association = model[key];
          if (_this3.isCollection(association)) {
            var formattedKey = _this3.keyForRelationshipIds(key);
            newHash[formattedKey] = model[key].models.map(function (m) {
              return m.id;
            });
          }
        });
      }

      return newHash;
    }

    /**
     * Used to customize how a model’s attribute is
     * formatted in your JSON payload.
     * @method keyForAttribute
     * @param attr
     * @public
     */
  }, {
    key: 'keyForAttribute',
    value: function keyForAttribute(attr) {
      return attr;
    }

    /**
     * Use this hook to format the key for collections
     * related to this model.
     *
     * For example, if you're serializing an author that
     * side loads many `blogPosts`, you would get `blogPost`
     * as an argument, and whatever you return would
     * end up as the collection key in your JSON:
     *
     * keyForRelationship(type) {
     *   return dasherize(type);
     * }
     *
     * {
     *   author: {...},
     *   'blog-posts': [...]
     * }
     * @method keyForRelationship
     * @param modelName
     * @public
     */
  }, {
    key: 'keyForRelationship',
    value: function keyForRelationship(modelName) {
      return camelize(pluralize(modelName));
    }

    /**
     * @method keyForEmbeddedRelationship
     * @param attributeName
     * @public
     */
  }, {
    key: 'keyForEmbeddedRelationship',
    value: function keyForEmbeddedRelationship(attributeName) {
      return camelize(attributeName);
    }

    /**
     * Use this hook to format the key for relationship ids
     * in this model's JSON representation.
     *
     * For example, if you're serializing an author that
     * side loads many `blogPosts`, you would get `blogPost`
     * as an argument, and whatever you return would
     * end up as part of the `author` JSON:
     *
     * keyForRelationshipIds(type) {
     *   return dasherize(type) + '-ids';
     * }
     *
     * {
     *   author: {
     *     ...,
     *     'blog-post-ids': [1, 2, 3]
     *   },
     *   'blog-posts': [...]
     * }
     * @method keyForRelationshipIds
     * @param modelName
     * @public
     */
  }, {
    key: 'keyForRelationshipIds',
    value: function keyForRelationshipIds(relationshipName) {
      return singularize(camelize(relationshipName)) + 'Ids';
    }

    /**
     * This method is used by the POST and PUT shorthands. These shorthands
     * expect a valid JSON:API document as part of the request, so that
     * they know how to create or update the appropriate resouce. The normalize
     * method allows you to transform your request body into a JSON:API
     * document, which lets you take advantage of the shorthands when you
     * otherwise may not be able to.
     *
     * Note that this method is a noop if you’re using JSON:API already,
     * since request payloads sent along with POST and PUT requests will
     * already be in the correct format.
     * @method normalize
     * @param json
     * @public
     */
  }, {
    key: 'normalize',
    value: function normalize(json) {
      return json;
    }

    /**
     * @method isModel
     * @param object
     * @return {Boolean}
     * @public
     */
  }, {
    key: 'isModel',
    value: function isModel(object) {
      return object instanceof Model;
    }

    /**
     * @method isCollection
     * @param object
     * @return {Boolean}
     * @public
     */
  }, {
    key: 'isCollection',
    value: function isCollection(object) {
      return object instanceof Collection;
    }

    /**
     * @method isModelOrCollection
     * @param object
     * @return {Boolean}
     * @public
     */
  }, {
    key: 'isModelOrCollection',
    value: function isModelOrCollection(object) {
      return this.isModel(object) || this.isCollection(object);
    }

    /**
     * @method serializerFor
     * @param type
     * @public
     */
  }, {
    key: 'serializerFor',
    value: function serializerFor(type) {
      return this.registry.serializerFor(type);
    }
  }, {
    key: 'getKeysForIncluded',
    value: function getKeysForIncluded() {
      return _isFunction(this.include) ? this.include(this.request) : this.include;
    }

    /**
     * @method _formatAttributeKeys
     * @param attrs
     * @private
     */
  }, {
    key: '_formatAttributeKeys',
    value: function _formatAttributeKeys(attrs) {
      var formattedAttrs = {};

      for (var key in attrs) {
        var formattedKey = this.keyForAttribute(key);
        formattedAttrs[formattedKey] = attrs[key];
      }

      return formattedAttrs;
    }
  }]);

  return Serializer;
})();

Serializer.prototype.include = [];
Serializer.prototype.root = true;
Serializer.prototype.embed = false;
Serializer.prototype.serializeIds = 'included'; // can be 'included', 'always', or 'never'

Serializer.extend = extend;

export default Serializer;