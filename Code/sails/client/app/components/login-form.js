/* global Auth0Lock */

import Ember from 'ember';
import config from 'course-nebula/config/environment';

const { service } = Ember.inject;

// Lock: User configurable options
const options = {
  auth: {
    params: {scope: 'openid email'},
    redirectUrl: 'http://localhost:4200/courses',
    responseType: 'token',
  },

  languageDictionary: {
	      title: "Course Nebula"
	    },
  theme: {
   logo: '/assets/images/courseNebula.png',
   primaryColor: '#176117'
  },

};

let lock = new Auth0Lock(config.Auth0.clientId, config.Auth0.domain, options);

export default Ember.Component.extend({
  didRender: function() {
    this._super(...arguments);
    lock.show();

  },

  willDestroyElement: function() {
    lock.hide();
  }
});
