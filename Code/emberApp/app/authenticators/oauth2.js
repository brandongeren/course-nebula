import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend();
export default OAuth2PasswordGrantAuthenticator.extend({
    serverTokenEndpoint: '/custom/endpoint'
});
this.get('session').authenticate('authenticator:some', data);