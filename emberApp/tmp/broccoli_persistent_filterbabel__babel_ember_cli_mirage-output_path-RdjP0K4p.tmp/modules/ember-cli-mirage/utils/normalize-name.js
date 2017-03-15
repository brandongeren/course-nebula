export { toCollectionName };
export { toModelName };
import { camelize, pluralize, singularize, dasherize } from 'ember-cli-mirage/utils/inflector';

function toCollectionName(type) {
  var modelName = dasherize(type);
  return camelize(pluralize(modelName));
}

function toModelName(type) {
  var modelName = dasherize(type);
  return singularize(modelName);
}