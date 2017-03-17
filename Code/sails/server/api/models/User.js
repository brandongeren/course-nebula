/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  tableName: 'User',
  attributes: {

    Username : { type: 'string' },

    password : { type: 'string' },

    email : { type: 'string' },

    userAnsweredQuestions : { type: 'integer' }
  }
};

