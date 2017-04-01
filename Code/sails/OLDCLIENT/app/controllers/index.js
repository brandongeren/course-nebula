import Ember from 'ember';

export default Ember.Controller.extend({
actions: {
    filterByClass(param) {
      if (param !== '') {
        return this.get('store').query('courses', { number: param });
      } else {
        return this.get('store').findAll('courses');
      }
    }
  }
});
