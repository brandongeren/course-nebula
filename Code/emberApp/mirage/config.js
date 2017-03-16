export default function() {

  this.namespace = '/api';

  let courses = [{
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
      }];

  this.get('/courses', function() {
    return { data: courses };
  });



    // Find and return the provided course from our course list above
  this.get('/courses/:id', function (db, request) {
    return { data: courses.find((rental) => request.params.id === course.id) };
  });

}
