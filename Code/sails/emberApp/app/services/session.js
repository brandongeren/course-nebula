import ESASession from "ember-simple-auth/services/session";
import Ember from 'ember';
import DS from 'ember-data';

export default ESASession.extend({

  store: Ember.inject.service(),

  currentUser: Ember.computed('isAuthenticated', function() {
    if (this.get('isAuthenticated')) {
      const promise = this.get('store').queryRecord('user', {});
      return DS.PromiseObject.create({ promise: promise });
    }
  })

});
