import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		savequestion: function() {
			var text = this.get('text');
			var date = new Date();
		        var course = this.get('model');
			var rating = 1;
			var question = this.get('store').createRecord('question', {
				text: text,
				date: date,
			        courseN: this.get('model'),
				rating: rating
			});

			this.set('text', '');
			this.set('course', '');
			question.save();

			this.transitionToRoute('courses');
		}
	}
});
