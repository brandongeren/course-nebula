import DS from 'ember-data';

export default DS.Model({
    course: DS.belongsTo('course'),
    questionText: DS.attr('string'),
    dateOfQuestion: DS.attr('date'),
    questionRating: DS.attr('number'),
    answer: DS.belongsTo('answer')
});