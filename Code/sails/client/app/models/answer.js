import DS from 'ember-data';

export default DS.Model.extend({
    aquestion: DS.belongsTo('question', {async: true}),
    text: DS.attr('string'),
    date: DS.attr('date'),
    rating: DS.attr('number')
});