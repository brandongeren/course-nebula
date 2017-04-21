import DS from 'ember-data';

export default DS.Model.extend({
    courseN: DS.belongsTo('course'),
    answers: DS.hasMany('answer', {async: true}),
    text: DS.attr('string'),
    date: DS.attr('date'),
    rating: DS.attr('number')
});
