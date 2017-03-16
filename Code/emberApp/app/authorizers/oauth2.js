import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

export default OAuth2Bearer.extend();

this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
  const headers = {};
  headers[headerName] = headerValue;
  Ember.$.ajax('/secret-data', { headers });
});