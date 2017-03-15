define('course-nebula/routes/courses', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.get('store').findAll('course');
		}
	});
});