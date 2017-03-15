export default DS.Model({
    course: DS.belongsTo('course'),
    user: DS.belongsTo('user'),
    notificationFlag: DS.attr('number')
});