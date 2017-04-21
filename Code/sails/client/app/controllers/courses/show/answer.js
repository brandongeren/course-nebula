import Ember from 'ember';

export default Ember.Controller.extend({
        queryParams: ['questionID'],
	actions: {
		answerquestion: function() {
			var text = this.get('text');
			var date = new Date();
		    var aquestion = this.get('store').findRecord(
			'question',this.get('questionID'));
			var rating = 1;
			var answer = this.get('store').createRecord('answer', {
			    aquestion: aquestion,
				text: text,
				date: date,
			        rating: rating
			});
			answer.save();
			this.transitionToRoute('courses');
		}
	}
});
