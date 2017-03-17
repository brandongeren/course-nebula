/**
 * HandoutController
 *
 * @description :: Server-side logic for managing handouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    add: function(req,res) {
         //{"course:"0","key":"0"};
	var course = req.param('course');
	var key = req.param('key');

	var handout  = {
	    course : course,
            key : key
	}

	Handout.create(handout).exec(function(err,result) {
	    if (err) {
		sails.log.debug('some error occurred' + err);
		return res.json(500, { error: 'some error occurred' });

	    }

	    sails.log.debug('Success',JSON.stringify(result));
	    return res.json(200, {success: 'Success'});

	});

    }
};

