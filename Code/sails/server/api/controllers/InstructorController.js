/**
 * InstructorController
 *
 * @description :: Server-side logic for managing instructors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    add: function(req,res) {
         //{"user:"0","course":"0"};
	var user = req.param('user');
	var course = req.param('course');	var email = req.param('email');
	var userAnsweredQuestions = req.param('userAnsweredQuestions');

	var instructor = {
	    user : user,
            course : course
	}

	Instructor.create(instructor).exec(function(err,result) {
	    if (err) {
		sails.log.debug('some error occurred' + err);
		return res.json(500, { error: 'some error occurred' });

	    }

	    sails.log.debug('Success',JSON.stringify(result));
	    return res.json(200, {success: 'Success'});

	});

    }	
};

