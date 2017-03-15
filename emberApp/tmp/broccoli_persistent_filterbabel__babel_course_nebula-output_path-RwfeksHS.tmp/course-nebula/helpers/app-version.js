define('course-nebula/helpers/app-version', ['exports', 'ember', 'course-nebula/config/environment'], function (exports, _ember, _courseNebulaConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _courseNebulaConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});