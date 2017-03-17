import Ember from 'ember';

export default Ember.Controller.extend({
 /* session: Ember.inject.service('session'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }*/

  hideLoginButtonRoutes: ['courses', 'show', 'ask'],
 	isLoginButtonVisible: Ember.computed('currentRouteName', function(){
		return this.get('hideLoginButtonRoutes').indexOf(this.get('currentRouteName')) === -1;
	})
});
