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

      number : { type: 'integer',
      columnName: 'CourseNumber' },

      name : { type: 'string',
      columnName: 'CourseName' }
  }
};

