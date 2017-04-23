import Ember from 'ember';

export default Ember.Controller.extend({
        queryParams: ['questionID'],
	actions: {
		answerquestion: function() {
		   
		    var thequestion = this.store.peekRecord('question',this.get('questionID'));
			var text = this.get('text');
			var date = new Date();
			var rating = 1;
			var answer = this.get('store').createRecord('answer', {
			    aquestion: thequestion,
				text: text,
				date: date,
			        rating: rating
			});
			answer.save();
			this.set('text', '');
		    this.transitionToRoute('courses');
			
		}
	}
});
