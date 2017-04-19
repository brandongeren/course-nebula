import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addAnswer: function() {
			var text = this.get('value');
			var date = new Date();
		        var question = this.get('question');
			var rating = 1;
			var answer = this.get('store').createRecord('answer', {
			        questionN: question,
			        text: text,
				date: date,
				rating: rating
			});
			answer.save();
			this.transitionToRoute('courses');
		}
	}
});
