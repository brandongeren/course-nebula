/* jshint node: true */

var auth0 = require('../auth0-variables');

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
    },

    Auth0: {
      clientId: auth0.AUTH0_CLIENT_ID,
      domain: auth0.AUTH0_DOMAIN,
      callbackUrl: 'http://localhost:4200/courses',
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

  return ENV;
};
