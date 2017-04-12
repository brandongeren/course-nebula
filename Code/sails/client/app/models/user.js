import DS from 'ember-data';

export default DS.Model.extend({
  Username: DS.attr('string'),
  password: DS.attr('string'),
  email: DS.attr('string'),
  userAnsweredQuestions: DS.attr('number')
});
