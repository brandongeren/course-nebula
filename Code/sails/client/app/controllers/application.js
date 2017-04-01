import Ember from 'ember';

export default Ember.Controller.extend({
 /* session: Ember.inject.service('session'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3dd51c7... navigation bar almost worked
  }*/

  hideLoginButtonRoutes: ['courses', 'show', 'ask'],
 	isLoginButtonVisible: Ember.computed('currentRouteName', function(){
		return this.get('hideLoginButtonRoutes').indexOf(this.get('currentRouteName')) === -1;
	})
});
