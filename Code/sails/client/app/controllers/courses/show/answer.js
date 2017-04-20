import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		answerquestion: function() {
			var text = this.get('text');
			var date = new Date();
		        var question = this.get('question');
			var rating = 1;
			var answer = this.get('store').createRecord('answer', {
			        questionN : question,
				text: text,
				date: date,
				rating: rating
			});


			this.set('text', '');
			this.set('course', '');
			answer.save();
			this.transitionToRoute('courses');
		}
	}
});
