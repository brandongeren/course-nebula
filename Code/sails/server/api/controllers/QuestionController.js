/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    add: function(req,res) {
         //{"UserID":"0","Username":"test","password":"pass","email":"me@gmail.com","userAnsweredQuestions":0};
	var course = req.param('course');
	var text = req.param('text');
	var date = req.param('date');
	var rating = req.param('rating');
	var answer = req.param('answer');

	var question = {
	    course = course,
	    text = text,
	    date = date,
	    rating = rating,
	    answer = answer
	}

	Question.create(question).exec(function(err,result) {
	    if (err) {
		sails.log.debug('some error occurred' + err);
		return res.json(500, { error: 'some error occurred' });

	    }

	    sails.log.debug('Success',JSON.stringify(result));
	    return res.json(200, {success: 'Success'});

	});

    }	
};

