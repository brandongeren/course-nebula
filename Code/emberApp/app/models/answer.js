import DS from 'ember-data';

export default DS.Model({
    answerText: DS.attr('string'),
    dateOfAnswer: DS.attr('date'),
    answerRating: DS.attr('number')
});