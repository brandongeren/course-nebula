define('course-nebula/models/course', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model({
        courseNumber: _emberData['default'].attr('number'),
        courseName: _emberData['default'].attr('string')
    });
});