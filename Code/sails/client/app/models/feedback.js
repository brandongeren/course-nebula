import DS from 'ember-data';

export default DS.Model.extend({
    courseN: DS.belongsTo('course'),
    feedbackText: DS.attr('string'),
    feedbackRating: DS.attr('number'),
    dateOfFeedback: DS.attr('date')
});