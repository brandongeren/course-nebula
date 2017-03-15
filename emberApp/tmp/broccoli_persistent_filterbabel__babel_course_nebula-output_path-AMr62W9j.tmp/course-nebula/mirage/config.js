define('course-nebula/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {

    this.namespace = '/api';

    this.get('/courses', function () {
      return {
        data: [{
          type: 'courses',
          id: 1,
          attributes: {
            number: 'CSCE 10',
            name: 'Introduction to CSE'
          }
        }, {
          type: 'courses',
          id: 2,
          attributes: {
            number: 'CSCE 100',
            name: 'Introduction to Informatics'
          }
        }, {
          type: 'courses',
          id: 3,
          attributes: {
            number: 'CSCE 101',
            name: 'Fundamentals of Computer Science'
          }
        }]
      };
    });
  };
});