import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todos', function() {
    this.route('todo', { path: ':todo_id' }, function() {
      this.route('edit');
    });
    this.route('new');
  });
  this.route('login');
});

export default Router;
