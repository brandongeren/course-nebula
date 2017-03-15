define('course-nebula/models/handout', ['exports'], function (exports) {
    exports['default'] = DS.Model({
        course: DS.belongsTo(course),
        handoutKey: DS.attr('string')
    });
});