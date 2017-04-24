import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		filterByCourse(param) {
			if (param !== '') {
	        		return this.get('store').query('course', { number: param });
			} else {
				return this.get('store').findAll('course');
			}
		}
	}
});
