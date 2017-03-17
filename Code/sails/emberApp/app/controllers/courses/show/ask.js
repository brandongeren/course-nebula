import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function() {
			var text = this.get('text');
			var date = new Date();
			var course = null;
			var rating = 0;

			var question = this.get('store').createRecord('question', {
				text: text,
				date: date,
				course: course,
				rating: rating
			});

			this.set('text', '');
			this.set('course', '');
			question.save();
			this.transitionToRoute('courses');
		}
	}
});
