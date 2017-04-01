import DS from 'ember-data';

export default DS.Model.extend({
    number: DS.attr('string'),
    name: DS.attr('string'),
    question: DS.hasMany('question')
});