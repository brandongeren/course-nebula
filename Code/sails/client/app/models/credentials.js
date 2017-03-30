import DS from 'ember-data';

export default DS.Model.extend({
  accessToken: DS.attr('string'),
  authMethod: DS.attr('string'),
  userId: DS.attr('string'),
  user: DS.belongsTo('user')
});
