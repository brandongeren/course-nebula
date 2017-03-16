import Ember from 'ember';

export default Ember.Route.extend({
/*This model will extract the data needed to create a new credential and
 *pass it to our controller.
 */
model() {
	var params,
		credential;

	params = this.get('utils').getAuthorisationData();

	return this.store.query('credential', {
						userId: params.userId
						}).then((cred)=>{
		if(Ember.isPresent(cred)) {
			return cred.get('firstObject');
		} else {
		  credential = this.store.createRecord('credential', params);
		  credential.save();
 		
		  return credential;
		}
	      });

},

afterModel(model) {
	model.get('user').then((user)=>{
  		if(Ember.isPresent(user)) {
			model.set('user', user);
		} else {
		  this.get('utils').getUserInfo(model.get('accessToken'))
				   .then(({display_name:name, email})=>{
	
		    this.store.createRecord('user', {name, email}).save().then((user)=>{
			model.set('user', user);
			model.save();
<<<<<<< HEAD
		           });
 		       });
	           }
	 });
   }
});

=======
		     });
 		  });
	}
});
}
});
>>>>>>> 8039aa75643ddea3c947af49d12d311cb8560c81
