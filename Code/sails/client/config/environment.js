/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'course-nebula',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
       contentSecurityPolicy: {
              'default-src': "'none'",
              'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
              'font-src': "'self'",
              'connect-src': "'self'",
              'img-src': "'self'",
              'report-uri':"'localhost'",
              'style-src': "'self' 'unsafe-inline'",
              'frame-src': "'none'"
            }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['simple-auth'] = {
    store: 'simple-auth-session-store:local-storage',
    authorizer: 'authorizer:custom',
    crossOriginWhitelist: ['http://localhost:3001/'],
    routeAfterAuthentication: '/protected'
  };

  return ENV;
};
