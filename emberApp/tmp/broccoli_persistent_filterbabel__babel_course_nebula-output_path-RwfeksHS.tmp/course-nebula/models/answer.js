define('course-nebula/models/answer', ['exports'], function (exports) {
    exports['default'] = DS.Model({
        answerText: DS.attr('string'),
        dateOfAnswer: DS.attr('date'),
        answerRating: DS.attr('number')
    });
});