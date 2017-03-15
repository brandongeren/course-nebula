define('course-nebula/models/feedback', ['exports'], function (exports) {
    exports['default'] = DS.Model.extend({
        course: DS.belongsTo('course'),
        feedbackText: DS.attr('string'),
        feedbackRating: DS.attr('number'),
        dateOfFeedback: DS.attr('date')
    });
});