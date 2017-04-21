/**
 * Course.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  table: 'Course',
  attributes: {

      questions: {
          collection: 'question',
	  via: 'courseN'
      },

      feedbacks: {
	  collection: 'feedback',
	  via: 'courseN'
      },

      number : { type: 'string',
      columnName: 'CourseNumber' },

      name : { type: 'string',
      columnName: 'CourseName' }
  }
};

