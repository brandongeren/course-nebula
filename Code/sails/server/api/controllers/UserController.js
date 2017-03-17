/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    add: function(req,res) {
         //{"UserID":"0","Username":"test","password":"pass","email":"me@gmail.com","userAnsweredQuestions":0};
	var Username = req.param('Username');
	var password = req.param('password');
	var email = req.param('email');
	var userAnsweredQuestions = req.param('userAnsweredQuestions');

	var user = {
	    Username : Username,
	    password : password,
	    email : email,
	    userAnsweredQuestions : userAnsweredQuestions
	}

	User.create(user).exec(function(err,result) {
	    if (err) {
		sails.log.debug('some error occurred' + err);
		return res.json(500, { error: 'some error occurred' });

	    }

	    sails.log.debug('Success',JSON.stringify(result));
	    return res.json(200, {success: 'Success'});

	});

    }
};

