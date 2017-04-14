import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addAnswer: function() {
			var text = this.get('question.textVAR');
			var date = new Date();
		        var question = this.get('question');
			var rating = 1;
			var answer = this.get('store').createRecord('answer', {
				text: text,
				date: date,
			        questionN: question,
				rating: rating
			});
			answer.save();
			this.transitionToRoute('courses');
		}
	}
});
