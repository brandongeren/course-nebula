define('course-nebula/models/question', ['exports'], function (exports) {
    exports['default'] = DS.Model({
        course: DS.belongsTo('course'),
        questionText: DS.attr('string'),
        dateOfQuestion: DS.attr('date'),
        questionRating: DS.attr('number'),
        answer: DS.belongsTo('answer')
    });
});