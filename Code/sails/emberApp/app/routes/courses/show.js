import Ember from 'ember';

<<<<<<< HEAD
	var paramaters;
=======
>>>>>>> 307aee394e6fa919099158cccd7b8a94ea095f2a

export default Ember.Route.extend({
	model(params) {
		parameters = params;
		return this.get('store').findRecord('course', params.course_id);
	},
<<<<<<< HEAD
	questions() {
		return this.get('store').findAll('question', {course_id: params.course_id});
=======
	qn() {
		return this.get('store').findAll('question');
>>>>>>> 307aee394e6fa919099158cccd7b8a94ea095f2a
	}
});
