import DS from 'ember-data';

export default DS.Model.extend({
    course: DS.belongsTo('course'),
    text: DS.attr('string'),
    date: DS.attr('date'),
    rating: DS.attr('number'),
});