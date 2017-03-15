import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('courses');
  this.route('about');
  this.route('login');
  this.route('coursesTest');
});

export default Router;
