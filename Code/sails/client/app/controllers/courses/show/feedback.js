import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
	savefeedback: function() {
			var text = this.get('text');
			var date = new Date();
		        var course = this.get('model');
			var rating = 1;
			var feedback = this.get('store').createRecord('feedback', {
				text: text,
				date: date,
			        courseN: this.get('model'),
				rating: rating
			});

			this.set('text', '');
			this.set('course', '');
			feedback.save();
			this.transitionToRoute('courses');
		}
	}
});
