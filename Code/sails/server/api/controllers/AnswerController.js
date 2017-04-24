/**
 * AnswerController
 *
 * @description :: Server-side logic for managing answers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    add: function(req,res) {
         //{"UserID":"0","Username":"test","password":"pass","email":"me@gmail.com","userAnsweredQuestions":0};
	var questionN = req.param('question');
	var text = req.param('text');
	var date = req.param('date');
	var rating = req.param('rating');

	var answer = {
	    questionN : questionN,
	    text : text,
	    date : date,
	    rating : rating
	}

	Answer.create(answer).exec(function(err,result) {
	    if (err) {
		sails.log.debug('some error occurred' + err);
		return res.json(500, { error: 'some error occurred' });

	    }

	    sails.log.debug('Success',JSON.stringify(result));
	    return res.json(200, {success: 'Success'});

	});

    }		
};

