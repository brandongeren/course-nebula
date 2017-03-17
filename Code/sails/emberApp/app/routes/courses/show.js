import Ember from 'ember';


export default Ember.Route.extend({
	model(params) {
		return this.get('store').findRecord('course', params.course_id);
	},
	question() {
		return this.get('store').findAll('question');
	}
});
