import Ember from 'ember';

export default Ember.Controller.extend({
        queryParams: ['question'],
	actions: {
		answerquestion: function() {

			var text = this.get('text');
			var date = new Date();
		        var questionN = this.get('question');
			var rating = 1;
			var answer = this.get('store').createRecord('answer', {
			        questionN: questionN,
				text: text,
				date: date,
			        rating: rating
			});

			answer.save();
			this.transitionToRoute('courses');
		}
	}
});
