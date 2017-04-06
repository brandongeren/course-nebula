import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		savequestion: function(body) {
			var q = this.get('store').createRecord('question', {
				text: body,
				course: 1,
				date: new Date(),
				rating: 0
			});
		        q.save();
		}
	}
});
