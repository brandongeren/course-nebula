import DS from 'ember-data';

export default DS.Model.extend({
    answerText: DS.attr('string'),
    dateOfAnswer: DS.attr('date'),
    answerRating: DS.attr('number')
});