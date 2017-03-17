import Ember from 'ember';

	var paramaters;

export default Ember.Route.extend({
	model(params) {
		parameters = params;
		return this.get('store').findRecord('course', params.course_id);
	},
	questions() {
		return this.get('store').findAll('question', {course_id: params.course_id});
	}
});
