define('course-nebula/router', ['exports', 'ember', 'course-nebula/config/environment'], function (exports, _ember, _courseNebulaConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _courseNebulaConfigEnvironment['default'].locationType,
    rootURL: _courseNebulaConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('courses');
    this.route('about');
    this.route('login');
  });

  exports['default'] = Router;
});