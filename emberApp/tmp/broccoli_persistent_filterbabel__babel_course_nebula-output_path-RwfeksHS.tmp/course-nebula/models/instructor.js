define('course-nebula/models/instructor', ['exports'], function (exports) {
    exports['default'] = DS.model.extend({
        user: DS.belongsTo('user'),
        course: DS.belongsTo('course')
    });
});