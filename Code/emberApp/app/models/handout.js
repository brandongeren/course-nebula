import DS from 'ember-data';

export default DS.Model({
    course: DS.belongsTo(course),
    handoutKey: DS.attr('string')
});