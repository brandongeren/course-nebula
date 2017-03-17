import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		savequestion: function(body) {
			this.get('store').createRecord('question', {
				text: body,
				course: this,
				date: new Date(),
				rating: 0
			});
		}
	}
});
