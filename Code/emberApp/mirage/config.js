export default function() {

  this.namespace = '/api';

  this.get('/courses', function() {
    return {
      data: [{
        type: 'courses',
        id: 1,
        attributes: {
          number: '10',
          name: 'Introduction to CSE'
        }
      }, {
        type: 'courses',
        id: 2,
        attributes: {
          number: '100',
          name: 'Introduction to Informatics'
        }
      }, {
        type: 'courses',
        id: 3,
        attributes: {
          number: '101',
          name: 'Fundamentals of Computer Science'
        }
      }]
    };
  });
}
