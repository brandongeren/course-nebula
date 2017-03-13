export default DS.Model.extend({
    username: DS.attr('string'),
    password: DS.attr('string'),
    email: DS.attr('string'),
    userAnsweredQuestions: DS.attr('number')
});