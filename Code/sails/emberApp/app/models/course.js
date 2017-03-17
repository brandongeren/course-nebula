import DS from 'ember-data';

export default DS.Model.extend({
    number: DS.attr('number'),
    name: DS.attr('string')
});