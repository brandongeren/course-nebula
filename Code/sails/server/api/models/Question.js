/**
 * Question.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      course : { model: 'course', columnName: 'CourseID' },

      text : { type: 'string', columnName: 'QuestionText' },

      date : { type: 'datetime', columnName: 'DateOfQuestion' },

      rating : { type: 'float', columnName: 'QuestionRating' },

      answer : { model: 'answer', columnName: 'AnswerID' }
  }
};

