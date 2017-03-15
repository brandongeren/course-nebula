export default DS.Model.extend({
    course: DS.belongsTo('course'),
    feedbackText: DS.attr('string'),
    feedbackRating: DS.attr('number'),
    dateOfFeedback: DS.attr('date')
});