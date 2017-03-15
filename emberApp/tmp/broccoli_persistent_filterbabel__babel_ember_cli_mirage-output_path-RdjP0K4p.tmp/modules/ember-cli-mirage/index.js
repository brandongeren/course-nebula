var _bind = Function.prototype.bind;
import Factory from './factory';
import trait from './trait';
import association from './association';
import Response from './response';
import faker from './faker';
import Model from './orm/model';
import Collection from './orm/collection';
import Serializer from './serializer';
import ActiveModelSerializer from './serializers/active-model-serializer';
import JSONAPISerializer from './serializers/json-api-serializer';
import RestSerializer from './serializers/rest-serializer';
import HasMany from './orm/associations/has-many';
import BelongsTo from './orm/associations/belongs-to';

function hasMany() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (_bind.apply(HasMany, [null].concat(args)))();
}
function belongsTo() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return new (_bind.apply(BelongsTo, [null].concat(args)))();
}

export { Factory, trait, association, Response, faker, Model, Collection, Serializer, ActiveModelSerializer, JSONAPISerializer, RestSerializer, hasMany, belongsTo };

export default {
  Factory: Factory,
  Response: Response,
  hasMany: hasMany,
  belongsTo: belongsTo
};