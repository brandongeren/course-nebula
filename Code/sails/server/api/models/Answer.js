/**
 * Answer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      questionN : { model: 'Question' },

      text : { type: 'string', columnName: 'AnswerText' },

      date : { type: 'datetime', columnName: 'DateOfAnswer' },

      rating : { type: 'float', columnName: 'AnswerRating' }
  }
};

