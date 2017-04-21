import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('courses', function() {
    this.route('show', {path: '/:course_id'}, function() {
      this.route('ask');
      this.route('feedback');
      this.route('answer');
    });
  });
  this.route('about');
  this.route('login');
  this.route('coursesTest');
  this.route('register');
  this.route('sessions');
});

export default Router;
