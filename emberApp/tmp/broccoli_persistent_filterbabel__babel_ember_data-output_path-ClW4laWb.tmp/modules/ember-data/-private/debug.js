export { assert };
export { debug };
export { deprecate };
export { info };
export { runInDebug };
export { instrument };
export { warn };
export { debugSeal };
export { assertPolymorphicType };
import Ember from 'ember';

function assert() {
  return Ember.assert.apply(Ember, arguments);
}

function debug() {
  return Ember.debug.apply(Ember, arguments);
}

function deprecate() {
  return Ember.deprecate.apply(Ember, arguments);
}

function info() {
  return Ember.info.apply(Ember, arguments);
}

function runInDebug() {
  return Ember.runInDebug.apply(Ember, arguments);
}

function instrument(method) {
  return method();
}

function warn() {
  return Ember.warn.apply(Ember, arguments);
}

function debugSeal() {
  return Ember.debugSeal.apply(Ember, arguments);
}

function checkPolymorphic(modelClass, addedModelClass) {
  if (modelClass.__isMixin) {
    //TODO Need to do this in order to support mixins, should convert to public api
    //once it exists in Ember
    return modelClass.__mixin.detect(addedModelClass.PrototypeMixin);
  }
  if (Ember.MODEL_FACTORY_INJECTIONS) {
    modelClass = modelClass.superclass;
  }
  return modelClass.detect(addedModelClass);
}

/*
  Assert that `addedRecord` has a valid type so it can be added to the
  relationship of the `record`.

  The assert basically checks if the `addedRecord` can be added to the
  relationship (specified via `relationshipMeta`) of the `record`.

  This utility should only be used internally, as both record parameters must
  be an InternalModel and the `relationshipMeta` needs to be the meta
  information about the relationship, retrieved via
  `record.relationshipFor(key)`.

  @method assertPolymorphicType
  @param {InternalModel} internalModel
  @param {RelationshipMeta} relationshipMeta retrieved via
         `record.relationshipFor(key)`
  @param {InternalModel} addedRecord record which
         should be added/set for the relationship
*/

function assertPolymorphicType(parentInternalModel, relationshipMeta, addedInternalModel) {
  var addedModelName = addedInternalModel.modelName;
  var parentModelName = parentInternalModel.modelName;
  var key = relationshipMeta.key;
  var relationshipClass = parentInternalModel.store.modelFor(relationshipMeta.type);
  var assertionMessage = 'You cannot add a record of modelClass \'' + addedModelName + '\' to the \'' + parentModelName + '.' + key + '\' relationship (only \'' + relationshipClass.modelName + '\' allowed)';

  assert(assertionMessage, checkPolymorphic(relationshipClass, addedInternalModel.modelClass));
}