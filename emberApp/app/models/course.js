import DS from 'ember-data';

export default DS.Model({
    courseNumber: DS.attr('number'),
    courseName: DS.attr('string')
});