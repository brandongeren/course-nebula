import DS from 'ember-data';

export default DS.Model.extend({
    courseNumber: DS.attr('number'),
    courseName: DS.attr('string')
});