import DS from 'ember-data';

export default DS.model.extend({
    user: DS.belongsTo('user'),
    course: DS.belongsTo('course')
});