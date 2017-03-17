/**
 * Feedback.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      course : { model: 'course', columnName: 'CourseID' },

      text : { type: 'string', columnName: 'FeedbackText' },

      rating : { type: 'float', columnName: 'FeedbackRating' },

      date : { type: 'datetime', columnName: 'DateOfFeedback' }
  }
};

