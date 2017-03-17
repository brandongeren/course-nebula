import Ember from 'ember';

export default Ember.Controller.extend({
 /* session: Ember.inject.service('session'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
<<<<<<< HEAD
  }*/

  hideLoginButtonRoutes: ['courses', 'show', 'ask'],
 	isLoginButtonVisible: Ember.computed('currentRouteName', function(){
		return this.get('hideLoginButtonRoutes').indexOf(this.get('currentRouteName')) === -1;
	})
=======
  }
>>>>>>> 03c0291... registration page
});
