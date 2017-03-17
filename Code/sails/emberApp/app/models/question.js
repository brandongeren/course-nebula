import DS from 'ember-data';

export default DS.Model.extend({
    course: DS.belongsTo('course'),
<<<<<<< HEAD
    questionText: DS.attr('string'),
    dateOfQuestion: DS.attr('date'),
    questionRating: DS.attr('number'),
});
=======
    text: DS.attr('string'),
    date: DS.attr('date'),
    rating: DS.attr('number'),
});


>>>>>>> 307aee394e6fa919099158cccd7b8a94ea095f2a
