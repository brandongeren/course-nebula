import Serializer from '../serializer';
import { underscore, pluralize, dasherize, singularize } from '../utils/inflector';

export default Serializer.extend({

  keyForModel: function keyForModel(type) {
    return underscore(type);
  },

  keyForAttribute: function keyForAttribute(attr) {
    return underscore(attr);
  },

  keyForRelationship: function keyForRelationship(type) {
    return pluralize(underscore(type));
  },

  keyForEmbeddedRelationship: function keyForEmbeddedRelationship(attributeName) {
    return underscore(attributeName);
  },

  keyForRelationshipIds: function keyForRelationshipIds(type) {
    return underscore(singularize(type)) + '_ids';
  },

  normalize: function normalize(payload) {
    var type = Object.keys(payload)[0];
    var attrs = payload[type];

    var jsonApiPayload = {
      data: {
        type: pluralize(type),
        attributes: {}
      }
    };
    if (attrs.id) {
      jsonApiPayload.data.id = attrs.id;
    }
    Object.keys(attrs).forEach(function (key) {
      if (key !== 'id') {
        jsonApiPayload.data.attributes[dasherize(key)] = attrs[key];
      }
    });

    return jsonApiPayload;
  }

});