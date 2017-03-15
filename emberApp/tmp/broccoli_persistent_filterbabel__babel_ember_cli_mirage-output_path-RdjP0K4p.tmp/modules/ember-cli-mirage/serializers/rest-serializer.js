import ActiveModelSerializer from './active-model-serializer';
import { camelize, singularize, pluralize } from '../utils/inflector';

export default ActiveModelSerializer.extend({

  keyForModel: function keyForModel(type) {
    return camelize(type);
  },

  keyForAttribute: function keyForAttribute(attr) {
    return camelize(attr);
  },

  keyForRelationship: function keyForRelationship(type) {
    return camelize(pluralize(type));
  },

  keyForEmbeddedRelationship: function keyForEmbeddedRelationship(attributeName) {
    return camelize(attributeName);
  },

  keyForRelationshipIds: function keyForRelationshipIds(type) {
    return camelize(singularize(type)) + 'Ids';
  }
});